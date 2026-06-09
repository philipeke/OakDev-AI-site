'use strict';

(function initInsightsFeed() {
  const feedRoot = document.querySelector('[data-insights-feed]');
  if (!feedRoot) return;

  const endpoint = feedRoot.dataset.endpoint || 'https://gf365.vercel.app/api/insights-feed';
  const list = feedRoot.querySelector('[data-insights-posts]');
  const status = feedRoot.querySelector('[data-insights-status]');
  const count = feedRoot.querySelector('[data-insights-count]');

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

  function textFrom(node, selector) {
    const target = node.querySelector(selector);
    return target ? target.textContent.trim() : '';
  }

  function htmlFrom(node, selectors) {
    for (const selector of selectors) {
      const target = node.querySelector(selector);
      if (target && target.textContent.trim()) return target.textContent.trim();
    }
    return '';
  }

  function stripHtml(value) {
    const template = document.createElement('template');
    template.innerHTML = value || '';
    return (template.content.textContent || '').replace(/\s+/g, ' ').trim();
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

  function pickImage(item, descriptionHtml) {
    const mediaContent = item.querySelector('media\\:content, content');
    const mediaThumbnail = item.querySelector('media\\:thumbnail, thumbnail');
    const enclosure = item.querySelector('enclosure[type^="image"]');
    const source =
      (mediaContent && mediaContent.getAttribute('url')) ||
      (mediaThumbnail && mediaThumbnail.getAttribute('url')) ||
      (enclosure && enclosure.getAttribute('url'));

    if (source) return absoluteUrl(source);

    const template = document.createElement('template');
    template.innerHTML = descriptionHtml || '';
    const image = template.content.querySelector('img[src]');
    return image ? absoluteUrl(image.getAttribute('src')) : '';
  }

  function parseFeed(xmlText) {
    const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
    const parseError = doc.querySelector('parsererror');
    if (parseError) {
      throw new Error('The content feed returned invalid XML.');
    }

    const items = Array.from(doc.querySelectorAll('item, entry'));

    return items.map((item) => {
      const descriptionHtml = htmlFrom(item, [
        'description',
        'encoded',
        'content\\:encoded',
        'summary',
        'content',
      ]);
      const title = textFrom(item, 'title') || 'Untitled';
      const link =
        textFrom(item, 'link') ||
        (item.querySelector('link[href]') && item.querySelector('link[href]').getAttribute('href')) ||
        '';
      const dateText = textFrom(item, 'pubDate') || textFrom(item, 'updated') || textFrom(item, 'published');
      const date = dateText ? new Date(dateText) : null;
      const excerpt = stripHtml(descriptionHtml).slice(0, 240);

      return {
        title,
        link: absoluteUrl(link),
        date,
        image: pickImage(item, descriptionHtml),
        excerpt: excerpt.length === 240 ? `${excerpt}...` : excerpt,
      };
    });
  }

  function renderPosts(posts) {
    if (!list) return;
    list.innerHTML = '';

    if (count) {
      count.textContent = posts.length
        ? `${posts.length} publicerade artiklar`
        : 'Inga publicerade artiklar ännu';
    }

    if (!posts.length) {
      setStatus('Det finns inga publicerade artiklar ännu.', 'empty');
      return;
    }

    const fragment = document.createDocumentFragment();
    posts.forEach((post) => {
      const article = document.createElement('article');
      article.className = 'insights-card';

      if (post.image) {
        const media = document.createElement('a');
        media.className = 'insights-card-media';
        media.href = post.link || '#';
        media.setAttribute('aria-label', post.title);

        const image = document.createElement('img');
        image.src = post.image;
        image.alt = '';
        image.loading = 'lazy';
        media.appendChild(image);
        article.appendChild(media);
      }

      const body = document.createElement('div');
      body.className = 'insights-card-body';

      const meta = document.createElement('p');
      meta.className = 'insights-card-meta';
      meta.textContent = post.date && !Number.isNaN(post.date.valueOf())
        ? formatter.format(post.date)
        : 'OakDev';
      body.appendChild(meta);

      const title = document.createElement('h2');
      const link = document.createElement('a');
      link.href = post.link || '#';
      link.textContent = post.title;
      title.appendChild(link);
      body.appendChild(title);

      if (post.excerpt) {
        const excerpt = document.createElement('p');
        excerpt.className = 'insights-card-excerpt';
        excerpt.textContent = post.excerpt;
        body.appendChild(excerpt);
      }

      if (post.link) {
        const readMore = document.createElement('a');
        readMore.className = 'insights-card-link';
        readMore.href = post.link;
        readMore.textContent = 'Läs artikeln';
        body.appendChild(readMore);
      }

      article.appendChild(body);
      fragment.appendChild(article);
    });

    list.appendChild(fragment);
    setStatus('Senaste artiklarna är uppdaterade.', 'ready');
  }

  async function loadFeed() {
    setStatus('Hämtar senaste artiklarna...', 'loading');

    try {
      const response = await fetch(endpoint, { headers: { Accept: 'application/xml,text/xml,*/*' } });
      const body = await response.text();

      if (!response.ok) {
        throw new Error(body || `Content endpoint returned ${response.status}`);
      }

      if (!body.trim().startsWith('<')) {
        throw new Error(body.trim() || 'The content feed returned an empty response.');
      }

      renderPosts(parseFeed(body));
    } catch {
      if (count) count.textContent = 'Artiklarna kunde inte hämtas';
      setStatus('Kunde inte läsa artiklarna just nu. Försök igen om en stund.', 'error');
    }
  }

  loadFeed();
})();
