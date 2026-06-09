'use strict';

const DEFAULT_FEED_URL = 'https://app.trysoro.com/api/rss/9cda6f8a-4639-4ec2-a1ac-34323e1590c8';

function send(res, statusCode, contentType, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type');
  res.end(body);
}

module.exports = async function soroRssHandler(req, res) {
  if (req.method === 'OPTIONS') {
    send(res, 204, 'text/plain; charset=utf-8', '');
    return;
  }

  if (req.method && !['GET', 'HEAD'].includes(req.method)) {
    res.setHeader('Allow', 'GET, HEAD');
    send(res, 405, 'text/plain; charset=utf-8', 'Method not allowed');
    return;
  }

  const feedUrl = process.env.CONTENT_FEED_URL || process.env.SORO_RSS_FEED_URL || DEFAULT_FEED_URL;

  try {
    const response = await fetch(feedUrl, {
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
        'User-Agent': 'OakDev-Content-Feed/1.0 (+https://oakdev.app/insikter/)',
      },
      redirect: 'follow',
    });

    const body = await response.text();
    const sourceType = response.headers.get('content-type') || '';
    const contentType = sourceType.includes('xml')
      ? 'application/xml; charset=utf-8'
      : 'text/plain; charset=utf-8';

    send(res, response.ok ? 200 : response.status, contentType, req.method === 'HEAD' ? '' : body);
  } catch (error) {
    send(
      res,
      502,
      'application/json; charset=utf-8',
      JSON.stringify({
        error: 'Unable to fetch content feed.',
        detail: error && error.message ? error.message : 'Unknown error',
      }),
    );
  }
};
