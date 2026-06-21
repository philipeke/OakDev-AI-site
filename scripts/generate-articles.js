'use strict';

/**
 * Generate static pages for Soro-published articles.
 *
 * oakdev.app is served by GitHub Pages, which only serves files that exist in
 * the repo. Soro links each article to a root-level slug (e.g.
 * https://oakdev.app/webbapp-eller-mobilapp) but never creates the page, so
 * every article except coincidental matches returns 404.
 *
 * This script fetches the Soro RSS feed and writes a pre-rendered, SEO-ready
 * `<slug>/index.html` for each article. A manifest (`scripts/.articles-manifest.json`)
 * records the slugs we own, so on later runs we can refresh them and remove
 * pages for articles that have left the feed — without ever touching the
 * hand-built pages in the repo.
 *
 * Run locally:  node scripts/generate-articles.js
 * Automated:    .github/workflows/publish-articles.yml (scheduled)
 */

const fs = require('fs');
const path = require('path');
const { FEED_URL, parseItems, renderArticlePage } = require('./lib/render-article');

const ROOT = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(__dirname, '.articles-manifest.json');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');

function readManifest() {
  try {
    const data = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    return Array.isArray(data.slugs) ? data.slugs : [];
  } catch {
    return [];
  }
}

function writeManifest(slugs) {
  fs.writeFileSync(
    MANIFEST_PATH,
    JSON.stringify({ updated: new Date().toISOString(), slugs: slugs.slice().sort() }, null, 2) + '\n',
  );
}

// Slugs we must never generate/overwrite, regardless of the feed.
function reservedSlugs(ownedSlugs) {
  const owned = new Set(ownedSlugs);
  const entries = fs.readdirSync(ROOT, { withFileTypes: true });
  const reserved = new Set([
    'api', 'css', 'js', 'assets', 'scripts', 'marketing', 'chatbot-api',
    'sitemap.xml', 'robots.txt', 'cname', 'favicon.ico', 'index.html',
    'readme.md', 'deploy.md', 'package.json', 'vercel.json',
  ]);
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const name = e.name.toLowerCase();
    // A folder/file we did not generate ourselves is off-limits.
    if (!owned.has(name)) reserved.add(name);
  }
  return reserved;
}

function writeArticle(article) {
  const dir = path.join(ROOT, article.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), renderArticlePage(article));
}

function removeArticleDir(slug) {
  const dir = path.join(ROOT, slug);
  // Only remove if it looks like one of ours: a dir whose only content is index.html.
  try {
    const files = fs.readdirSync(dir);
    if (files.length === 1 && files[0] === 'index.html') {
      fs.rmSync(dir, { recursive: true, force: true });
      return true;
    }
  } catch { /* already gone */ }
  return false;
}

function updateSitemap(articles) {
  let xml;
  try {
    xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  } catch {
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  const block = articles
    .map((a) => `  <url>\n    <loc>https://oakdev.app/${a.slug}</loc>\n    <lastmod>${a.lastmod || today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`)
    .join('\n');
  const wrapped = `  <!-- BEGIN soro-articles (auto-generated) -->\n${block}\n  <!-- END soro-articles -->`;

  const markerRe = /[ \t]*<!-- BEGIN soro-articles[\s\S]*?<!-- END soro-articles -->/;
  if (markerRe.test(xml)) {
    xml = xml.replace(markerRe, wrapped);
  } else {
    xml = xml.replace(/<\/urlset>/, `${wrapped}\n</urlset>`);
  }
  fs.writeFileSync(SITEMAP_PATH, xml);
}

async function main() {
  const res = await fetch(FEED_URL, {
    headers: {
      Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
      'User-Agent': 'OakDev-Content-Feed/1.0 (+https://oakdev.app/insikter/)',
    },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`Feed returned ${res.status}`);
  const xml = await res.text();

  const items = parseItems(xml).map((a) => ({
    ...a,
    lastmod: a.pubDate && !Number.isNaN(new Date(a.pubDate).valueOf())
      ? new Date(a.pubDate).toISOString().slice(0, 10)
      : undefined,
  }));

  const previouslyOwned = readManifest();
  const reserved = reservedSlugs(previouslyOwned);

  const written = [];
  const skipped = [];
  for (const article of items) {
    if (reserved.has(article.slug)) { skipped.push(article.slug); continue; }
    writeArticle(article);
    written.push(article.slug);
  }

  // Remove pages for articles that left the feed (only ones we previously owned).
  const feedSlugs = new Set(written);
  const removed = [];
  for (const slug of previouslyOwned) {
    if (!feedSlugs.has(slug) && removeArticleDir(slug)) removed.push(slug);
  }

  const generatedArticles = items.filter((a) => written.includes(a.slug));
  updateSitemap(generatedArticles);
  writeManifest(written);

  console.log(`Articles in feed:      ${items.length}`);
  console.log(`Generated/refreshed:   ${written.length}  [${written.join(', ')}]`);
  if (skipped.length) console.log(`Skipped (reserved):    ${skipped.length}  [${skipped.join(', ')}]`);
  if (removed.length) console.log(`Removed (left feed):   ${removed.length}  [${removed.join(', ')}]`);
}

main().catch((err) => {
  console.error('generate-articles failed:', err.message);
  process.exit(1);
});
