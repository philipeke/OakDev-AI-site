'use strict';

/**
 * Shared article rendering for Soro-published content.
 *
 * oakdev.app is hosted on GitHub Pages (static files only), so article pages
 * must be pre-rendered into the repo. This module parses the Soro RSS feed and
 * produces a fully branded, SEO-ready HTML page for each item. It is consumed
 * by scripts/generate-articles.js (run locally and from a GitHub Action).
 */

const SITE_ORIGIN = 'https://oakdev.app';
const FEED_URL = 'https://app.trysoro.com/api/rss/9cda6f8a-4639-4ec2-a1ac-34323e1590c8';

/* ----------------------------- tiny helpers ----------------------------- */

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

function pathFromLink(value) {
  try {
    const url = new URL(value, SITE_ORIGIN);
    return (url.pathname.replace(/\/+$/, '') || '/').toLowerCase();
  } catch {
    return '';
  }
}

function slugFromLink(value) {
  const p = pathFromLink(value);
  if (!p || p === '/') return '';
  const slug = p.replace(/^\/+|\/+$/g, '');
  return slug.includes('/') ? '' : slug; // single-segment root slugs only
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
const RETIRED_ARTICLE_PATHS = new Set([
  '/vad-kostar-apputveckling',
  '/vad-kostar-att-bygga-app',
  '/ios-app-utveckling-kostnad-vad-styr-priset',
]);
const COMMERCIAL_PRICING_LANGUAGE = /(?:^|[^\p{L}])(?:pris|timpris|offert|budget)[\p{L}-]*(?=$|[^\p{L}])/iu;

function stripCommercialPricingBlocks(html) {
  return String(html || '').replace(
    /<(p|h2|h3|h4|li)\b[^>]*>[\s\S]*?<\/\1>/gi,
    (block) => {
      const plainText = decodeEntities(block.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
      return COMMERCIAL_PRICING_LANGUAGE.test(plainText) ? '' : block;
    },
  );
}

function sanitizeHtml(html) {
  let out = stripCommercialPricingBlocks(html);
  out = out.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  out = out.replace(/<!--[\s\S]*?-->/g, '');
  out = out.replace(/<(\/?)h1\b/gi, '<$1h2'); // keep a single h1 on the page

  out = out.replace(/<(\/?)([a-zA-Z0-9]+)([^>]*?)(\/?)>/g, (match, slash, rawName, attrs) => {
    const name = rawName.toLowerCase();
    if (!ALLOWED_TAGS.has(name)) return '';
    if (slash) return `</${name}>`;

    if (name === 'a') {
      const hrefMatch = attrs.match(/\bhref\s*=\s*"([^"]*)"/i) || attrs.match(/\bhref\s*=\s*'([^']*)'/i);
      const href = hrefMatch ? hrefMatch[1].trim() : '';
      if (href) {
        const parsed = new URL(href, SITE_ORIGIN);
        const path = parsed.pathname.replace(/\/+$/, '') || '/';
        const abs = RETIRED_ARTICLE_PATHS.has(path)
          ? `${SITE_ORIGIN}/app-studio/`
          : parsed.toString();
        if (isHttpUrl(abs)) {
          const external = !abs.startsWith(SITE_ORIGIN);
          return external
            ? `<a href="${escapeHtml(abs)}" target="_blank" rel="noopener noreferrer">`
            : `<a href="${escapeHtml(abs)}">`;
        }
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
    const slug = slugFromLink(link);
    if (!slug) continue;
    items.push({
      title: decodeEntities(pickTag(block, 'title')) || 'OakDev artikel',
      link,
      slug,
      path: `/${slug}`,
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

/* ------------------------------ page markup ------------------------------ */

const NAV = `
  <header id="navbar" class="navbar" role="banner">
    <div class="nav-inner">
      <a href="/" class="nav-logo" aria-label="OakDev home">
        <img src="/assets/oakdev-ai-high-resolution-logo-transparent_2_cropped.png" alt="OakDev &amp; AI AB" width="140" height="36" loading="eager" />
      </a>
      <nav class="nav-links" role="navigation" aria-label="Main navigation">
        <a href="/" class="nav-link" data-i18n="nav_home">Home</a>
        <a href="/app-studio/" class="nav-link" data-i18n="nav_studio">App Studio</a>
        <a href="/ai-automation/" class="nav-link" data-i18n="nav_ai">AI in Apps</a>
        <a href="/sa-bygger-vi-appar/" class="nav-link" data-i18n="nav_consulting">How We Build</a>
        <a href="/insikter/" class="nav-link" data-i18n="nav_insights">Inspiration</a>
        <a href="/about/" class="nav-link" data-i18n="nav_about">About</a>
        <a href="/contact/" class="nav-link" data-i18n="nav_contact">Contact</a>
      </nav>
      <div class="nav-actions">
        <div class="lang-switcher" role="group" aria-label="Language selector">
          <button class="lang-btn" data-lang="en" aria-pressed="true">EN</button>
          <button class="lang-btn" data-lang="sv" aria-pressed="false">SV</button>
        </div>
        <a href="/boka-samtal-om-ai/" class="btn-book" data-i18n="nav_book">Start an App</a>
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
        <a href="/ai-automation/" class="mobile-link" data-i18n="nav_ai">AI in Apps</a>
        <a href="/sa-bygger-vi-appar/" class="mobile-link" data-i18n="nav_consulting">How We Build</a>
        <a href="/insikter/" class="mobile-link" data-i18n="nav_insights">Inspiration</a>
        <a href="/about/" class="mobile-link" data-i18n="nav_about">About</a>
        <a href="/contact/" class="mobile-link" data-i18n="nav_contact">Contact</a>
      </nav>
      <div class="mobile-actions">
        <div class="mobile-lang">
          <button class="lang-btn" data-lang="en" aria-pressed="true">EN</button>
          <button class="lang-btn" data-lang="sv" aria-pressed="false">SV</button>
        </div>
      <a href="/boka-samtal-om-ai/" class="btn-book" style="display:block;text-align:center;" data-i18n="nav_book">Start an App</a>
      </div>
    </div>
  </header>`;

const FOOTER = `
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

function renderArticlePage(article) {
  const canonical = `${SITE_ORIGIN}/${article.slug}`;
  const safeTitle = escapeHtml(article.title);
  const description = COMMERCIAL_PRICING_LANGUAGE.test(article.description)
    ? `${article.title}. En guide om produktmål, användarbeteende, teknikval och vägen till en hållbar lansering.`
    : article.description;
  const safeDesc = escapeHtml(description);
  const dateLabel = formatDate(article.pubDate) || 'OakDev Inspiration';
  const content = sanitizeHtml(article.contentHtml);
  const image = article.image || `${SITE_ORIGIN}/assets/oakdev-tree-social.jpg`;
  const imageTag = article.image
    ? `<img class="insights-article-image" src="${escapeHtml(article.image)}" alt="" loading="eager" />`
    : '';

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description,
    image,
    datePublished: article.pubDate ? new Date(article.pubDate).toISOString() : undefined,
    mainEntityOfPage: canonical,
    author: { '@type': 'Organization', name: 'OakDev & AI AB' },
    publisher: {
      '@type': 'Organization',
      name: 'OakDev & AI AB',
      logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/assets/oakdev-ai-high-resolution-logo-transparent.png` },
    },
  });

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
  <link rel="canonical" href="${escapeHtml(canonical)}" />
  <link rel="alternate" hreflang="sv-SE" href="${escapeHtml(canonical)}" />
  <link rel="alternate" hreflang="x-default" href="${escapeHtml(canonical)}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeHtml(canonical)}" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:image" content="${escapeHtml(image)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${safeTitle}" />
  <meta name="twitter:description" content="${safeDesc}" />
  <meta name="twitter:image" content="${escapeHtml(image)}" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&amp;family=Space+Grotesk:wght@300;400;500;600&amp;display=swap" rel="stylesheet" />

  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="48x48" href="/assets/oakdev-tree-favicon-48.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/assets/oakdev-tree-favicon-96.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/oakdev-tree-favicon-192.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/oakdev-tree-apple-touch.png" />
  <link rel="stylesheet" href="/css/styles.css?v=2026-08-mobile" />
  <script type="application/ld+json">${jsonLd}</script>
</head>

<body class="insights-page">
  <div class="noise-overlay" aria-hidden="true"></div>
${NAV}
  <main id="main">
    <article class="insights-article">
      <div class="container insights-article-inner">
        <a href="/insikter/" class="insights-card-link">&larr; Tillbaka till Inspiration</a>
        <p class="insights-card-meta">${escapeHtml(dateLabel)}</p>
        <h1>${safeTitle}</h1>
        <p class="insights-article-lead">${safeDesc}</p>
        ${imageTag}
        <div class="insights-article-content">${content}</div>
        <a href="/boka-samtal-om-ai/" class="btn-primary insights-article-cta">Boka ett appsamtal</a>
      </div>
    </article>
  </main>
${FOOTER}
  <script src="/js/main.js?v=i18n-se-2026-06" defer></script>
</body>
</html>
`;
}

module.exports = { SITE_ORIGIN, FEED_URL, parseItems, renderArticlePage, slugFromLink };
