'use strict';

/**
 * Live article renderer for Soro-published content.
 *
 * Soro publishes articles to an RSS feed and links each one to a root-level
 * slug on oakdev.app (e.g. https://oakdev.app/webbapp-eller-mobilapp). Those
 * pages do not exist as static files, so without this handler every article
 * except the few that happen to match a real folder returns 404.
 *
 * A `vercel.json` rewrite sends any single-segment path that does NOT match a
 * static file or folder to this function. We fetch the feed, find the matching
 * item by its link path, sanitise the HTML and server-render a fully branded,
 * crawlable article page. New Soro articles therefore work instantly with no
 * rebuild.
 */

const DEFAULT_FEED_URL = 'https://app.trysoro.com/api/rss/9cda6f8a-4639-4ec2-a1ac-34323e1590c8';
const SITE_ORIGIN = 'https://oakdev.app';
const FEED_ENDPOINT = 'https://gf365.vercel.app/api/insights-feed';

/* ----------------------------- tiny helpers ----------------------------- */

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function decodeEntities(value) {
  return String(value || '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function cdataOrText(raw) {
  if (raw == null) return '';
  const cdata = raw.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return (cdata ? cdata[1] : raw).trim();
}

function pickTag(block, name) {
  const re = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i');
  const m = block.match(re);
  return m ? cdataOrText(m[1]) : '';
}

function pickAttrUrl(block, name) {
  const re = new RegExp(`<${name}\\b[^>]*\\burl="([^"]+)"`, 'i');
  const m = block.match(re);
  return m ? m[1] : '';
}

function normalizePath(value) {
  try {
    const url = new URL(value, SITE_ORIGIN);
    return (url.pathname.replace(/\/+$/, '') || '/').toLowerCase();
  } catch {
    return '';
  }
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

/* --------------------------- html sanitisation --------------------------- */

const ALLOWED_TAGS = new Set([
  'p', 'h2', 'h3', 'h4', 'ul', 'ol', 'li',
  'strong', 'em', 'b', 'i', 'a', 'blockquote', 'br',
]);

function sanitizeHtml(html) {
  let out = String(html || '');

  // Drop dangerous blocks and comments outright.
  out = out.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  out = out.replace(/<!--[\s\S]*?-->/g, '');

  // Normalise headings: demote h1 to h2 so the page keeps a single h1.
  out = out.replace(/<(\/?)h1\b/gi, '<$1h2');

  // Walk every tag; keep allow-listed tags (stripped of attributes), drop the
  // rest while preserving their inner text.
  out = out.replace(/<(\/?)([a-zA-Z0-9]+)([^>]*?)(\/?)>/g, (match, slash, rawName, attrs, selfClose) => {
    const name = rawName.toLowerCase();
    if (!ALLOWED_TAGS.has(name)) return '';

    if (slash) return `</${name}>`;

    if (name === 'a') {
      const hrefMatch = attrs.match(/\bhref\s*=\s*"([^"]*)"/i) || attrs.match(/\bhref\s*=\s*'([^']*)'/i);
      const href = hrefMatch ? hrefMatch[1].trim() : '';
      if (href && isHttpUrl(new URL(href, SITE_ORIGIN).toString())) {
        const abs = new URL(href, SITE_ORIGIN).toString();
        const external = !abs.startsWith(SITE_ORIGIN);
        return external
          ? `<a href="${escapeAttr(abs)}" target="_blank" rel="noopener noreferrer">`
          : `<a href="${escapeAttr(abs)}">`;
      }
      return '<a>';
    }

    if (name === 'br') return '<br>';
    return `<${name}>`;
  });

  return out.trim();
}

/* ------------------------------ feed parsing ----------------------------- */

function parseItems(xml) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = re.exec(xml))) {
    const block = m[1];
    const link = decodeEntities(pickTag(block, 'link'));
    items.push({
      title: decodeEntities(pickTag(block, 'title')) || 'OakDev artikel',
      link,
      path: normalizePath(link),
      description: decodeEntities(pickTag(block, 'description')),
      pubDate: pickTag(block, 'pubDate'),
      contentHtml: pickTag(block, 'content:encoded') || pickTag(block, 'description'),
      image: pickAttrUrl(block, 'enclosure') || pickAttrUrl(block, 'media:content'),
    });
  }
  return items;
}

function formatDate(pubDate) {
  if (!pubDate) return '';
  const d = new Date(pubDate);
  if (Number.isNaN(d.valueOf())) return '';
  try {
    return new Intl.DateTimeFormat('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
  } catch {
    return d.toISOString().slice(0, 10);
  }
}

/* ------------------------------- rendering ------------------------------- */

function navMarkup() {
  return `
  <header id="navbar" class="navbar" role="banner">
    <div class="nav-inner">
      <a href="/" class="nav-logo" aria-label="OakDev home">
        <img src="/assets/oakdev-ai-high-resolution-logo-transparent_2_cropped.png" alt="OakDev &amp; AI AB" width="140" height="36" loading="eager" />
      </a>
      <nav class="nav-links" role="navigation" aria-label="Main navigation">
        <a href="/" class="nav-link" data-i18n="nav_home">Home</a>
        <a href="/app-studio/" class="nav-link" data-i18n="nav_studio">App Studio</a>
        <a href="/ai-automation/" class="nav-link" data-i18n="nav_ai">AI &amp; Automation</a>
        <a href="/consulting/" class="nav-link" data-i18n="nav_consulting">Consulting</a>
        <a href="/insikter/" class="nav-link" data-i18n="nav_insights">Inspiration</a>
        <a href="/about/" class="nav-link" data-i18n="nav_about">About</a>
        <a href="/contact/" class="nav-link" data-i18n="nav_contact">Contact</a>
      </nav>
      <div class="nav-actions">
        <div class="lang-switcher" role="group" aria-label="Language selector">
          <button class="lang-btn" data-lang="en" aria-pressed="true">EN</button>
          <button class="lang-btn" data-lang="sv" aria-pressed="false">SV</button>
        </div>
        <a href="/boka-samtal-om-ai/" class="btn-book" data-i18n="nav_book">Book a Call</a>
        <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mobileMenu" aria-label="Toggle navigation menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <nav aria-label="Mobile navigation">
        <a href="/" class="mobile-link" data-i18n="nav_home">Home</a>
        <a href="/app-studio/" class="mobile-link" data-i18n="nav_studio">App Studio</a>
        <a href="/ai-automation/" class="mobile-link" data-i18n="nav_ai">AI &amp; Automation</a>
        <a href="/consulting/" class="mobile-link" data-i18n="nav_consulting">Consulting</a>
        <a href="/insikter/" class="mobile-link" data-i18n="nav_insights">Inspiration</a>
        <a href="/about/" class="mobile-link" data-i18n="nav_about">About</a>
        <a href="/contact/" class="mobile-link" data-i18n="nav_contact">Contact</a>
      </nav>
      <div class="mobile-actions">
        <div class="mobile-lang">
          <button class="lang-btn" data-lang="en" aria-pressed="true">EN</button>
          <button class="lang-btn" data-lang="sv" aria-pressed="false">SV</button>
        </div>
        <a href="/boka-samtal-om-ai/" class="btn-book" style="display:block;text-align:center;" data-i18n="nav_book">Book a Call</a>
      </div>
    </div>
  </header>`;
}

function footerMarkup() {
  return `
  <footer class="footer" role="contentinfo">
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <div>
            <p class="footer-copy">&copy; 2026 OakDev &amp; AI AB. All rights reserved.</p>
            <p class="footer-reg">Reg. No. 559431-6787 | Kristevik 633, 451 96 Uddevalla, Sweden</p>
          </div>
          <nav class="footer-legal-links" aria-label="Legal navigation">
            <a href="/insikter/" data-i18n="nav_insights">Inspiration</a>
            <a href="/privacy/" data-i18n="footer_privacy">Privacy Policy</a>
            <a href="/terms/" data-i18n="footer_terms">Terms of Use</a>
            <a href="/contact/" data-i18n="nav_contact">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>`;
}

function headMarkup({ title, description, canonical, image, jsonLd }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeAttr(description);
  return `<!DOCTYPE html>
<html lang="sv" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: data: blob:; connect-src 'self' https://gf365.vercel.app https://formsubmit.co https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formsubmit.co; upgrade-insecure-requests;" />

  <title>${safeTitle} | OakDev &amp; AI AB</title>
  <meta name="description" content="${safeDesc}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="OakDev &amp; AI AB" />
  <link rel="canonical" href="${escapeAttr(canonical)}" />
  <link rel="alternate" hreflang="sv-SE" href="${escapeAttr(canonical)}" />
  <link rel="alternate" hreflang="x-default" href="${escapeAttr(canonical)}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeAttr(canonical)}" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:image" content="${escapeAttr(image || SITE_ORIGIN + '/assets/oakdev-tree-social.jpg')}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${safeTitle}" />
  <meta name="twitter:description" content="${safeDesc}" />
  <meta name="twitter:image" content="${escapeAttr(image || SITE_ORIGIN + '/assets/oakdev-tree-social.jpg')}" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&amp;family=Space+Grotesk:wght@300;400;500;600&amp;display=swap" rel="stylesheet" />

  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="48x48" href="/assets/oakdev-tree-favicon-48.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/assets/oakdev-tree-favicon-96.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/oakdev-tree-favicon-192.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/oakdev-tree-apple-touch.png" />
  <link rel="stylesheet" href="/css/styles.css?v=2026-06" />
  ${jsonLd ? `<script type="application/ld+json">${jsonLd}</script>` : ''}
</head>`;
}

function renderArticlePage(article) {
  const canonical = `${SITE_ORIGIN}${article.path}`;
  const dateLabel = formatDate(article.pubDate) || 'OakDev Inspiration';
  const content = sanitizeHtml(article.contentHtml);
  const imageTag = article.image
    ? `<img class="insights-article-image" src="${escapeAttr(article.image)}" alt="" loading="eager" />`
    : '';

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${SITE_ORIGIN}/assets/oakdev-tree-social.jpg`,
    datePublished: article.pubDate ? new Date(article.pubDate).toISOString() : undefined,
    mainEntityOfPage: canonical,
    author: { '@type': 'Organization', name: 'OakDev & AI AB' },
    publisher: {
      '@type': 'Organization',
      name: 'OakDev & AI AB',
      logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/assets/oakdev-ai-high-resolution-logo-transparent.png` },
    },
  });

  return `${headMarkup({ title: article.title, description: article.description, canonical, image: article.image, jsonLd })}
<body class="insights-page">
  <div class="noise-overlay" aria-hidden="true"></div>
${navMarkup()}
  <main id="main">
    <article class="insights-article">
      <div class="container insights-article-inner">
        <a href="/insikter/" class="insights-card-link">&larr; Tillbaka till Inspiration</a>
        <p class="insights-card-meta">${escapeHtml(dateLabel)}</p>
        <h1>${escapeHtml(article.title)}</h1>
        <p class="insights-article-lead">${escapeHtml(article.description)}</p>
        ${imageTag}
        <div class="insights-article-content">${content}</div>
        <a href="/boka-samtal-om-ai/" class="btn-primary insights-article-cta">Boka en kostnadsfri AI-genomgång</a>
      </div>
    </article>
  </main>
${footerMarkup()}
  <script src="/js/main.js?v=i18n-se-2026-06" defer></script>
</body>
</html>`;
}

function renderNotFoundPage(slug) {
  return `${headMarkup({
    title: 'Artikeln hittades inte',
    description: 'Den här artikeln kunde inte hittas. Utforska våra senaste artiklar och guider.',
    canonical: `${SITE_ORIGIN}/${encodeURIComponent(slug)}`,
    image: '',
    jsonLd: '',
  })}
<body class="insights-page">
  <div class="noise-overlay" aria-hidden="true"></div>
${navMarkup()}
  <main id="main">
    <article class="insights-article">
      <div class="container insights-article-inner" style="text-align:center;">
        <p class="insights-card-meta">404</p>
        <h1>Artikeln hittades inte</h1>
        <p class="insights-article-lead">Sidan du letar efter finns inte längre eller har flyttats. Utforska våra senaste artiklar istället.</p>
        <a href="/insikter/" class="btn-primary">Till Inspiration</a>
      </div>
    </article>
  </main>
${footerMarkup()}
  <script src="/js/main.js?v=i18n-se-2026-06" defer></script>
</body>
</html>`;
}

/* -------------------------------- handler -------------------------------- */

function resolveSlug(req) {
  if (req.query && typeof req.query.slug === 'string' && req.query.slug) {
    return req.query.slug;
  }
  try {
    const url = new URL(req.url, SITE_ORIGIN);
    const qsSlug = url.searchParams.get('slug');
    if (qsSlug) return qsSlug;
    return url.pathname.replace(/^\/+|\/+$/g, '');
  } catch {
    return '';
  }
}

module.exports = async function articleHandler(req, res) {
  if (req.method && !['GET', 'HEAD'].includes(req.method)) {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET, HEAD');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Method not allowed');
    return;
  }

  const slug = (resolveSlug(req) || '').toLowerCase();
  const wantPath = `/${slug}`.replace(/\/+$/, '') || '/';
  const feedUrl = process.env.CONTENT_FEED_URL || process.env.SORO_RSS_FEED_URL || DEFAULT_FEED_URL;

  let html;
  let statusCode = 200;

  try {
    const response = await fetch(feedUrl, {
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
        'User-Agent': 'OakDev-Content-Feed/1.0 (+https://oakdev.app/insikter/)',
      },
      redirect: 'follow',
    });
    const xml = await response.text();
    const items = parseItems(xml);
    const article = items.find((item) => item.path === wantPath);

    if (article) {
      html = renderArticlePage(article);
    } else {
      statusCode = 404;
      html = renderNotFoundPage(slug);
    }
  } catch (error) {
    statusCode = 503;
    html = renderNotFoundPage(slug);
  }

  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
  res.end(req.method === 'HEAD' ? '' : html);
};
