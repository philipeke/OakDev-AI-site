# Deploy and Search Setup

This site is deployed as a static site for `https://oakdev.app/`.

## oakBot API Backend

oakBot uses the browser widget in `js/main.js`, but OpenAI calls must go through a server-side endpoint so the API key is never exposed in client code.

The separate backend now lives in:

```text
chatbot-api/
```

It contains a standalone Vercel-ready API endpoint at:

```text
chatbot-api/api/chatbot.js
```

The local dev server can test the full flow:

```text
npm run dev
```

Then open:

```text
http://localhost:4173/
```

For production, GitHub Pages cannot run `/api/chatbot` because it is static hosting. If `oakdev.app` is served from GitHub Pages, the chatbot widget will use its built-in graceful fallback until a real server endpoint is available.

To enable live AI replies, use one of these production setups:

1. Move the whole site to a serverless-capable host such as Vercel. This repo is already shaped for that: static files are served normally, and `api/chatbot.js` becomes `/api/chatbot`.
2. Keep the site on GitHub Pages, deploy `api/chatbot.js` separately to Vercel, Netlify Functions, Firebase Functions, or another Node backend, then point the widget to that URL with either:

```html
<meta name="oakdev-chatbot-api" content="https://YOUR-BACKEND.example/api/chatbot">
```

or:

```html
<script>
  window.OAKDEV_CHATBOT_API_URL = 'https://YOUR-BACKEND.example/api/chatbot';
</script>
```

Set these environment variables on the serverless/backend host:

```text
OPENAI_API_KEY
OPENAI_MODEL
```

Do not put `OPENAI_API_KEY` in HTML, CSS, browser JavaScript, GitHub Pages variables, or any public repo file.

## Deploy Separate Chatbot API on Vercel

Use this when the website stays on GitHub Pages and the chatbot runs separately.

1. Open Vercel and create a new project from this repository.
2. Set the project root directory to `chatbot-api`.
3. Use framework preset `Other`.
4. Add environment variables in Vercel Project Settings:

```text
OPENAI_API_KEY
OPENAI_MODEL=gpt-5.4-mini
CHATBOT_ALLOWED_ORIGIN=https://oakdev.app
```

5. Deploy the project.
6. Copy the deployed URL, for example:

```text
https://oakdev-chatbot-api.vercel.app
```

7. Point the website widget to it by adding this to the homepage `<head>` before `js/main.js` loads:

```html
<meta name="oakdev-chatbot-api" content="https://oakdev-chatbot-api.vercel.app/api/chatbot">
```

The widget falls back to `/api/chatbot` when no meta tag or `window.OAKDEV_CHATBOT_API_URL` is set.

## Search Engine Verification

Google Search Console is verified through DNS at the domain provider level. Do not add placeholder HTML verification tags to the site.

If Google or Bing ever need HTML meta-tag verification instead of DNS, add the real verification tag to the `<head>` of the homepage only after copying it from the relevant verification screen. Do not publish placeholder values such as `REPLACE_WITH_GOOGLE_CODE` or `REPLACE_WITH_BING_CODE`.

## Register in Google Search Console

1. Go to Google Search Console.
2. Add property for `https://oakdev.app/`.
3. Choose DNS verification when possible.
4. Add the TXT record at the domain provider.
5. Wait for DNS propagation.
6. Click Verify in Google Search Console.

## Register in Bing Webmaster Tools

1. Go to Bing Webmaster Tools.
2. Add site for `https://oakdev.app/`.
3. Choose DNS verification when possible.
4. Add the TXT or CNAME record that Bing provides at the domain provider.
5. Wait for DNS propagation.
6. Click Verify in Bing Webmaster Tools.

## Submit Sitemap

After both services verify the site, submit:

```text
https://oakdev.app/sitemap.xml
```

Google:

1. Open the verified property in Google Search Console.
2. Go to Sitemaps.
3. Enter `sitemap.xml`.
4. Submit.

Bing:

1. Open the verified site in Bing Webmaster Tools.
2. Go to Sitemaps.
3. Submit `https://oakdev.app/sitemap.xml`.

## Hreflang Notes

The current site uses a client-side language switcher, and dedicated `/en/` route variants do not exist yet. The HTML heads include `sv-SE` and `x-default` alternates plus TODO comments. When dedicated English routes are published, add matching `hreflang="en"` URLs for each page.

## Google Analytics 4

The site has a GA4 loader in `js/main.js` using advanced consent mode. Before a visitor accepts optional analytics cookies, GA4 runs with `analytics_storage: denied` and sends cookieless measurement pings for basic/modelled statistics. After acceptance, GA4 updates to `analytics_storage: granted`.

To activate it:

1. Create or open the GA4 property in Google Analytics using the Google account that should own the reports.
2. Copy the web stream Measurement ID, which looks like `G-XXXXXXXXXX`.
3. Put that ID in `js/main.js` as `DEFAULT_MEASUREMENT_ID`, or expose it before `main.js` loads:

```html
<meta name="oakdev-ga4-id" content="G-XXXXXXXXXX">
```

Advertising personalization, Google signals, ad storage, and ad user data are disabled in the loader.

## Soro RSS Blog

The `/blog/` page reads OakDev's Soro RSS feed through the serverless proxy at:

```text
/api/soro-rss
```

The default feed URL is set in `api/soro-rss.js`. To override it per environment, set:

```text
SORO_RSS_FEED_URL=https://app.trysoro.com/api/rss/YOUR-FEED-ID
```

If the page says the feed is disabled, enable the RSS feed/public publishing inside Soro and redeploy if the feed URL changed.
