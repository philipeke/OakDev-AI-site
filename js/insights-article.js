'use strict';

(function initInsightsArticle() {
  const root = document.querySelector('[data-insights-article]');
  if (!root) return;

  const endpoint = root.dataset.endpoint || 'https://gf365.vercel.app/api/insights-feed';
  const status = root.querySelector('[data-article-status]');
  const titleNode = root.querySelector('[data-article-title]');
  const dateNode = root.querySelector('[data-article-date]');
  const summaryNode = root.querySelector('[data-article-summary]');
  const imageNode = root.querySelector('[data-article-image]');
  const contentNode = root.querySelector('[data-article-content]');

  const formatter = new Intl.DateTimeFormat('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  function setStatus(message, state) {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state || 'info';
  }

  function textByName(node, names) {
    for (const name of names) {
      const direct = node.getElementsByTagName(name)[0];
      if (direct && direct.textContent.trim()) return direct.textContent.trim();

      const local = Array.from(node.getElementsByTagName('*')).find((child) => child.localName === name);
      if (local && local.textContent.trim()) return local.textContent.trim();
    }
    return '';
  }

  function absoluteUrl(value) {
    if (!value) return '';
    try {
      const url = new URL(value, window.location.origin);
      return ['http:', 'https:'].includes(url.protocol) ? url.toString() : '';
    } catch {
      return '';
    }
  }

  function normalizePath(value) {
    try {
      const url = new URL(value, window.location.origin);
      return url.pathname.replace(/\/+$/, '') || '/';
    } catch {
      return '';
    }
  }

  function stripHtml(value) {
    const template = document.createElement('template');
    template.innerHTML = value || '';
    return (template.content.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function pickImage(item) {
    const mediaContent = Array.from(item.getElementsByTagName('*')).find((child) => child.localName === 'content' && child.getAttribute('url'));
    const mediaThumbnail = Array.from(item.getElementsByTagName('*')).find((child) => child.localName === 'thumbnail' && child.getAttribute('url'));
    const enclosure = Array.from(item.getElementsByTagName('enclosure')).find((child) => (child.getAttribute('type') || '').startsWith('image'));
    return absoluteUrl(
      (mediaContent && mediaContent.getAttribute('url')) ||
      (mediaThumbnail && mediaThumbnail.getAttribute('url')) ||
      (enclosure && enclosure.getAttribute('url')) ||
      '',
    );
  }

  function sanitizeHtml(html) {
    const template = document.createElement('template');
    template.innerHTML = html || '';
    const allowed = new Set(['P', 'H2', 'H3', 'H4', 'UL', 'OL', 'LI', 'STRONG', 'EM', 'B', 'I', 'A', 'BLOCKQUOTE', 'BR']);

    function clean(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        return document.createTextNode(node.textContent);
      }

      if (node.nodeType !== Node.ELEMENT_NODE) {
        return document.createDocumentFragment();
      }

      const fragment = document.createDocumentFragment();
      const tagName = node.tagName.toUpperCase();

      if (!allowed.has(tagName)) {
        Array.from(node.childNodes).forEach((child) => fragment.appendChild(clean(child)));
        return fragment;
      }

      const element = document.createElement(tagName.toLowerCase());
      if (tagName === 'A') {
        const href = absoluteUrl(node.getAttribute('href'));
        if (href) {
          element.href = href;
          if (new URL(href).origin !== window.location.origin) {
            element.target = '_blank';
            element.rel = 'noopener noreferrer';
          }
        }
      }

      Array.from(node.childNodes).forEach((child) => element.appendChild(clean(child)));
      return element;
    }

    const fragment = document.createDocumentFragment();
    Array.from(template.content.childNodes).forEach((child) => fragment.appendChild(clean(child)));
    return fragment;
  }

  function parseFeed(xmlText) {
    const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
    if (doc.querySelector('parsererror')) {
      throw new Error('The content feed returned invalid XML.');
    }

    return Array.from(doc.querySelectorAll('item')).map((item) => {
      const contentHtml = textByName(item, ['encoded']) || textByName(item, ['description']);
      const description = textByName(item, ['description']);
      const pubDate = textByName(item, ['pubDate']);
      return {
        title: textByName(item, ['title']) || 'OakDev artikel',
        link: textByName(item, ['link']),
        date: pubDate ? new Date(pubDate) : null,
        description,
        image: pickImage(item),
        contentHtml,
      };
    });
  }

  function renderArticle(article) {
    if (titleNode) titleNode.textContent = article.title;
    if (dateNode) {
      dateNode.textContent = article.date && !Number.isNaN(article.date.valueOf())
        ? formatter.format(article.date)
        : 'OakDev Insikter';
    }
    if (summaryNode) summaryNode.textContent = stripHtml(article.description);

    if (imageNode && article.image) {
      imageNode.src = article.image;
      imageNode.alt = '';
      imageNode.hidden = false;
    }

    if (contentNode) {
      contentNode.innerHTML = '';
      contentNode.appendChild(sanitizeHtml(article.contentHtml));
    }

    document.title = `${article.title} | OakDev & AI AB`;
    setStatus('Artikeln är uppdaterad.', 'ready');
  }

  async function loadArticle() {
    setStatus('Hämtar artikeln...', 'loading');

    try {
      const response = await fetch(endpoint, { headers: { Accept: 'application/xml,text/xml,*/*' } });
      const body = await response.text();
      if (!response.ok || !body.trim().startsWith('<')) {
        throw new Error(body.trim() || 'Could not load content.');
      }

      const currentPath = normalizePath(window.location.href);
      const posts = parseFeed(body);
      const article = posts.find((post) => normalizePath(post.link) === currentPath);
      if (!article) {
        throw new Error('No matching article found for this URL.');
      }

      renderArticle(article);
    } catch {
      setStatus('Kunde inte läsa artikeln just nu.', 'error');
    }
  }

  loadArticle();
})();
