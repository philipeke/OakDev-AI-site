# Deploy and Search Setup

This site is deployed as a static site for `https://oakdev.app/`.

GitHub Pages serves the site. There is no Vercel project for OakDev.

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

## Content Feed

The `/insikter/` page reads `/insights-feed.xml` from this repository. `scripts/generate-articles.js` refreshes that file from the Soro feed when it publishes article pages. GitHub Actions runs that script on a schedule.
