'use strict';

const DEFAULT_FEED_URL = 'https://app.trysoro.com/api/rss/9cda6f8a-4639-4ec2-a1ac-34323e1590c8';

function send(res, statusCode, contentType, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
  res.end(body);
}

module.exports = async function soroRssHandler(req, res) {
  if (req.method && !['GET', 'HEAD'].includes(req.method)) {
    res.setHeader('Allow', 'GET, HEAD');
    send(res, 405, 'text/plain; charset=utf-8', 'Method not allowed');
    return;
  }

  const feedUrl = process.env.SORO_RSS_FEED_URL || DEFAULT_FEED_URL;

  try {
    const response = await fetch(feedUrl, {
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
        'User-Agent': 'OakDev-Soro-RSS/1.0 (+https://oakdev.app/blog/)',
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
        error: 'Unable to fetch Soro RSS feed.',
        detail: error && error.message ? error.message : 'Unknown error',
      }),
    );
  }
};
