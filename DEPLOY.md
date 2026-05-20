# Deploy and Search Setup

This site is deployed as a static site for `https://oakdev.app/`.

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
