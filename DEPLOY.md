# Deploy and Search Setup

This site is deployed as a static site for `https://oakdev.app/`.

## Search Engine Verification Codes

Every HTML page contains these placeholder tags in `<head>`:

```html
<!-- Search engine verification: replace these placeholders after registering oakdev.app in Google Search Console and Bing Webmaster Tools. -->
<meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_CODE">
<meta name="msvalidate.01" content="REPLACE_WITH_BING_CODE">
```

When the site is added to the search tools, replace:

- `REPLACE_WITH_GOOGLE_CODE` with the meta tag content value from Google Search Console.
- `REPLACE_WITH_BING_CODE` with the meta tag content value from Bing Webmaster Tools.

Because this is a static site without a shared layout/template, update the tags in every `*.html` file unless a shared layout is introduced later.

## Register in Google Search Console

1. Go to Google Search Console.
2. Add property for `https://oakdev.app/`.
3. Choose the HTML meta tag verification method.
4. Copy only the `content` value from Google's verification meta tag.
5. Replace `REPLACE_WITH_GOOGLE_CODE` in the site files.
6. Commit, push, and wait for the site to deploy.
7. Click Verify in Google Search Console.

## Register in Bing Webmaster Tools

1. Go to Bing Webmaster Tools.
2. Add site for `https://oakdev.app/`.
3. Choose the HTML meta tag verification method.
4. Copy only the `content` value from Bing's `msvalidate.01` meta tag.
5. Replace `REPLACE_WITH_BING_CODE` in the site files.
6. Commit, push, and wait for the site to deploy.
7. Click Verify in Bing Webmaster Tools.

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
