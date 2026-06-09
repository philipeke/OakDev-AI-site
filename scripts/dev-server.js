'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');
const chatbotHandler = require('../api/chatbot');
const soroRssHandler = require('../api/soro-rss');

const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || 4173);

function loadEnv() {
  const envPath = path.join(root, '.env');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separator = trimmed.indexOf('=');
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (key) {
      process.env[key] = value;
    }
  }
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.ico': 'image/x-icon',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.md': 'text/markdown; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.webp': 'image/webp',
    '.xml': 'application/xml; charset=utf-8',
  }[ext] || 'application/octet-stream';
}

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 64 * 1024) {
        req.destroy();
        reject(new Error('Request body too large'));
      }
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

async function handleChatbotApi(req, res) {
  try {
    req.body = await readBody(req);
  } catch {
    sendJson(res, 400, { error: 'Invalid JSON body.' });
    return;
  }

  res.status = (statusCode) => ({
    json: (payload) => sendJson(res, statusCode, payload),
    end: () => {
      res.writeHead(statusCode);
      res.end();
    },
  });
  res.json = (payload) => sendJson(res, 200, payload);

  await chatbotHandler(req, res);
}

async function handleSoroRssApi(req, res) {
  await soroRssHandler(req, res);
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.endsWith('/')) pathname += 'index.html';
  const filePath = path.resolve(root, pathname.replace(/^\/+/, ''));

  if (!filePath.startsWith(root) || filePath.includes(`${path.sep}.env`)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType(filePath),
      'Cache-Control': 'no-store',
    });
    res.end(data);
  });
}

loadEnv();

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/chatbot')) {
    handleChatbotApi(req, res);
    return;
  }

  if (req.url.startsWith('/api/soro-rss')) {
    handleSoroRssApi(req, res);
    return;
  }

  serveStatic(req, res);
});

server.listen(port, () => {
  const keyState = process.env.OPENAI_API_KEY ? 'configured' : 'missing';
  console.log(`OakDev dev server: http://localhost:${port}`);
  console.log(`OPENAI_API_KEY: ${keyState}`);
});
