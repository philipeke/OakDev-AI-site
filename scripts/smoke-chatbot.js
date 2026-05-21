'use strict';

const fs = require('fs');
const path = require('path');
const chatbotHandler = require('../api/chatbot');

const root = path.resolve(__dirname, '..');

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

function createMockResponse() {
  return {
    statusCode: 200,
    payload: null,
    headers: {},
    setHeader(name, value) {
      this.headers[name.toLowerCase()] = value;
    },
    status(statusCode) {
      this.statusCode = statusCode;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
    end() {
      return this;
    },
  };
}

async function main() {
  loadEnv();
  const prompt = process.argv.slice(2).join(' ').trim()
    || 'Svara kort: vad kan OakDev hjalpa foretag med?';

  const req = {
    method: 'POST',
    body: {
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    },
  };
  const res = createMockResponse();

  await chatbotHandler(req, res);

  console.log(`status:${res.statusCode}`);
  if (res.payload?.reply) {
    console.log(res.payload.reply);
    return;
  }

  console.log(res.payload?.error || 'No reply returned.');
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
