'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const root = path.resolve(__dirname, '..');
const baseUrl = (process.env.MOBILE_AUDIT_BASE_URL || 'http://localhost:4173').replace(/\/$/, '');
const widths = (process.env.MOBILE_AUDIT_WIDTHS || '320,360,390,430')
  .split(',')
  .map((value) => Number(value.trim()))
  .filter((value) => Number.isFinite(value) && value > 0);
const languages = (process.env.MOBILE_AUDIT_LANGUAGES || 'en,sv')
  .split(',')
  .map((value) => value.trim().toLowerCase())
  .filter((value) => ['en', 'sv'].includes(value));

const browserCandidates = [
  process.env.MOBILE_AUDIT_BROWSER,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);

function findHtmlFiles(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;

    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function routeFor(filePath) {
  const relative = path.relative(root, filePath).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'index.html'.length)}`;
  return `/${relative}`;
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function stopBrowser(browserProcess) {
  if (browserProcess.exitCode !== null) return;
  browserProcess.kill();
  await Promise.race([
    new Promise((resolve) => browserProcess.once('exit', resolve)),
    delay(3000),
  ]);
}

async function removeProfile(profileDirectory) {
  const tempRoot = path.resolve(os.tmpdir());
  const resolvedProfile = path.resolve(profileDirectory);
  if (!resolvedProfile.startsWith(`${tempRoot}${path.sep}`) || !path.basename(resolvedProfile).startsWith('oakdev-mobile-audit-')) {
    return;
  }

  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      fs.rmSync(resolvedProfile, { recursive: true, force: true });
      return;
    } catch (error) {
      if (!['EBUSY', 'EPERM'].includes(error.code) || attempt === 4) throw error;
      await delay(200 * (attempt + 1));
    }
  }
}

async function waitForFile(filePath, timeoutMs = 10000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (fs.existsSync(filePath)) return;
    await delay(50);
  }
  throw new Error(`Timed out waiting for ${filePath}`);
}

class CdpConnection {
  constructor(url) {
    this.nextId = 1;
    this.pending = new Map();
    this.eventWaiters = [];
    this.socket = new WebSocket(url);
  }

  async open() {
    if (this.socket.readyState === WebSocket.OPEN) return;
    await new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true });
      this.socket.addEventListener('error', reject, { once: true });
    });

    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolve(message.result);
        return;
      }

      for (const waiter of [...this.eventWaiters]) {
        if (waiter.method !== message.method) continue;
        if (waiter.sessionId && waiter.sessionId !== message.sessionId) continue;
        clearTimeout(waiter.timer);
        this.eventWaiters.splice(this.eventWaiters.indexOf(waiter), 1);
        waiter.resolve(message.params);
      }
    });
  }

  send(method, params = {}, sessionId) {
    const id = this.nextId++;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;

    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify(payload));
    });
  }

  waitForEvent(method, sessionId, timeoutMs = 8000) {
    return new Promise((resolve, reject) => {
      const waiter = { method, sessionId, resolve, reject, timer: null };
      waiter.timer = setTimeout(() => {
        const index = this.eventWaiters.indexOf(waiter);
        if (index !== -1) this.eventWaiters.splice(index, 1);
        reject(new Error(`Timed out waiting for ${method}`));
      }, timeoutMs);
      this.eventWaiters.push(waiter);
    });
  }

  close() {
    this.socket.close();
  }
}

async function waitForReady(cdp, sessionId) {
  const deadline = Date.now() + 8000;
  while (Date.now() < deadline) {
    const response = await cdp.send('Runtime.evaluate', {
      expression: 'document.readyState',
      returnByValue: true,
    }, sessionId);
    if (response.result.value === 'complete') return;
    await delay(50);
  }
}

const auditExpression = String.raw`(() => {
  const viewportWidth = document.documentElement.clientWidth;
  const scrollingElement = document.scrollingElement || document.documentElement;
  const documentWidth = Math.max(
    document.documentElement.scrollWidth,
    document.body ? document.body.scrollWidth : 0
  );

  const selectorFor = (element) => {
    if (element.id) return '#' + CSS.escape(element.id);
    const parts = [];
    let current = element;
    while (current && current.nodeType === Node.ELEMENT_NODE && parts.length < 4) {
      let part = current.tagName.toLowerCase();
      if (current.classList.length) {
        part += '.' + [...current.classList].slice(0, 3).map((name) => CSS.escape(name)).join('.');
      }
      parts.unshift(part);
      current = current.parentElement;
    }
    return parts.join(' > ');
  };

  const isClippedBeforeRoot = (element) => {
    let current = element.parentElement;
    while (current && current !== document.body && current !== document.documentElement) {
      const style = getComputedStyle(current);
      if (['hidden', 'clip', 'scroll', 'auto'].includes(style.overflowX)) return true;
      current = current.parentElement;
    }
    return false;
  };

  const offenders = [];
  for (const element of document.body ? document.body.querySelectorAll('*') : []) {
    const style = getComputedStyle(element);
    if (style.display === 'none' || style.visibility === 'hidden') continue;

    const rect = element.getBoundingClientRect();
    if (!Number.isFinite(rect.left) || !Number.isFinite(rect.right) || rect.width === 0) continue;

    const overflowLeft = Math.max(0, -rect.left);
    const overflowRight = Math.max(0, rect.right - viewportWidth);
    const internalOverflow = Math.max(0, element.scrollWidth - element.clientWidth);
    const clipped = isClippedBeforeRoot(element);

    if ((overflowLeft > 1 || overflowRight > 1 || internalOverflow > 1) && !clipped) {
      offenders.push({
        selector: selectorFor(element),
        tag: element.tagName.toLowerCase(),
        left: Math.round(rect.left * 10) / 10,
        right: Math.round(rect.right * 10) / 10,
        width: Math.round(rect.width * 10) / 10,
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        overflowLeft: Math.round(overflowLeft * 10) / 10,
        overflowRight: Math.round(overflowRight * 10) / 10,
        internalOverflow,
        position: style.position,
        whiteSpace: style.whiteSpace,
        text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 90),
      });
    }
  }

  offenders.sort((a, b) => {
    const aOverflow = Math.max(a.overflowLeft, a.overflowRight, a.internalOverflow);
    const bOverflow = Math.max(b.overflowLeft, b.overflowRight, b.internalOverflow);
    return bOverflow - aOverflow;
  });

  const initialScrollLeft = scrollingElement.scrollLeft;
  scrollingElement.scrollLeft = 10000;
  const horizontalScrollDistance = scrollingElement.scrollLeft;
  scrollingElement.scrollLeft = initialScrollLeft;

  return {
    title: document.title,
    finalPath: location.pathname,
    viewportWidth,
    documentWidth,
    overflow: Math.max(0, documentWidth - viewportWidth),
    horizontalScrollDistance,
    offenders: offenders.slice(0, 12),
  };
})()`;

const interactiveStates = [
  {
    name: 'scrolled',
    setup: `(() => {
      window.scrollTo(0, Math.max(0, document.documentElement.scrollHeight - window.innerHeight));
      return true;
    })()`,
    cleanup: 'window.scrollTo(0, 0)',
  },
  {
    name: 'mobile-menu-open',
    setup: `(() => {
      const menu = document.querySelector('.mobile-menu');
      const toggle = document.querySelector('.menu-toggle');
      if (!menu || !toggle || getComputedStyle(toggle).display === 'none') return false;
      menu.classList.add('open');
      toggle.classList.add('open');
      return true;
    })()`,
    cleanup: `(() => {
      document.querySelector('.mobile-menu')?.classList.remove('open');
      document.querySelector('.menu-toggle')?.classList.remove('open');
    })()`,
  },
  {
    name: 'cookie-banner-visible',
    setup: `(() => {
      const banner = document.querySelector('.cookie-banner');
      if (!banner) return false;
      banner.classList.remove('hidden');
      return true;
    })()`,
    cleanup: "document.querySelector('.cookie-banner')?.classList.add('hidden')",
  },
  {
    name: 'chatbot-open',
    setup: `(() => {
      const chatbot = document.querySelector('.oak-chatbot');
      if (!chatbot) return false;
      chatbot.classList.remove('minimized');
      chatbot.classList.add('open');
      return true;
    })()`,
    cleanup: "document.querySelector('.oak-chatbot')?.classList.remove('open')",
  },
];

async function evaluateByValue(cdp, sessionId, expression) {
  const response = await cdp.send('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true,
  }, sessionId);
  return response.result.value;
}

async function main() {
  if (!widths.length) throw new Error('No valid mobile widths were provided.');
  if (!languages.length) throw new Error('No valid languages were provided.');

  const browserPath = browserCandidates.find((candidate) => fs.existsSync(candidate));
  if (!browserPath) throw new Error('Chrome or Edge was not found.');

  const routes = findHtmlFiles(root).map(routeFor).sort();
  const profileDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'oakdev-mobile-audit-'));
  const portFile = path.join(profileDirectory, 'DevToolsActivePort');
  const browserProcess = spawn(browserPath, [
    '--headless=new',
    '--disable-gpu',
    '--disable-extensions',
    '--disable-background-networking',
    '--disable-default-apps',
    '--no-default-browser-check',
    '--no-first-run',
    '--remote-debugging-port=0',
    `--user-data-dir=${profileDirectory}`,
    'about:blank',
  ], { stdio: 'ignore', windowsHide: true });

  let cdp;
  try {
    await waitForFile(portFile);
    const [port, browserPathname] = fs.readFileSync(portFile, 'utf8').trim().split(/\r?\n/);
    cdp = new CdpConnection(`ws://127.0.0.1:${port}${browserPathname}`);
    await cdp.open();

    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    await cdp.send('Page.enable', {}, sessionId);
    await cdp.send('Runtime.enable', {}, sessionId);

    const failures = [];
    let checks = 0;
    let interactiveChecks = 0;
    for (const language of languages) {
      const { identifier } = await cdp.send('Page.addScriptToEvaluateOnNewDocument', {
        source: `try { localStorage.setItem('oakdev_lang', ${JSON.stringify(language)}); localStorage.setItem('oakdev_cookies', 'declined'); } catch {}`,
      }, sessionId);

      for (const width of widths) {
        await cdp.send('Emulation.setDeviceMetricsOverride', {
          width,
          height: 844,
          deviceScaleFactor: 1,
          mobile: true,
          screenWidth: width,
          screenHeight: 844,
        }, sessionId);

        for (const route of routes) {
          const url = `${baseUrl}${route}`;
          const loadEvent = cdp.waitForEvent('Page.loadEventFired', sessionId).catch(() => null);
          const navigation = await cdp.send('Page.navigate', { url }, sessionId);
          if (navigation.errorText) {
            failures.push({ route, width, language, error: navigation.errorText });
            continue;
          }

          await loadEvent;
          await waitForReady(cdp, sessionId);
          await cdp.send('Runtime.evaluate', {
            expression: 'document.fonts ? document.fonts.ready : Promise.resolve()',
            awaitPromise: true,
          }, sessionId).catch(() => null);
          await delay(50);
          await cdp.send('Runtime.evaluate', {
            expression: "document.documentElement.classList.add('page-motion-paused')",
          }, sessionId);

          const result = await evaluateByValue(cdp, sessionId, auditExpression);
          checks += 1;

          if (result.overflow > 1 || result.horizontalScrollDistance > 1) {
            failures.push({ route, width, language, state: 'initial', ...result });
          }

          for (const state of interactiveStates) {
            const available = await evaluateByValue(cdp, sessionId, state.setup);
            if (!available) continue;

            await delay(40);
            const stateResult = await evaluateByValue(cdp, sessionId, auditExpression);
            checks += 1;
            interactiveChecks += 1;
            if (stateResult.overflow > 1 || stateResult.horizontalScrollDistance > 1) {
              failures.push({ route, width, language, state: state.name, ...stateResult });
            }

            await cdp.send('Runtime.evaluate', { expression: state.cleanup }, sessionId);
          }
        }
      }

      await cdp.send('Page.removeScriptToEvaluateOnNewDocument', { identifier }, sessionId);
    }

    const summary = {
      baseUrl,
      pages: routes.length,
      widths,
      languages,
      baselineChecks: routes.length * widths.length * languages.length,
      interactiveChecks,
      checks,
      failures,
    };

    console.log(JSON.stringify(summary, null, 2));
    process.exitCode = failures.length ? 1 : 0;
  } finally {
    if (cdp) cdp.close();
    await stopBrowser(browserProcess);
    await removeProfile(profileDirectory);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
