# OakDev Chatbot API

Separate serverless backend for the oakBot website widget.

## Endpoint

```text
POST /api/chatbot
```

Body:

```json
{
  "messages": [
    { "role": "user", "content": "Vad kan OakDev hjälpa till med?" }
  ],
  "page": {
    "path": "/",
    "title": "OakDev & AI AB"
  }
}
```

## Required Environment Variables

```text
OPENAI_API_KEY
OPENAI_MODEL
CHATBOT_ALLOWED_ORIGIN
```

Use `CHATBOT_ALLOWED_ORIGIN=https://oakdev.app` for production.

## Vercel Dashboard Setup

When importing this repository in Vercel, set the project root directory to `chatbot-api`.

After deploy, configure the website with:

```html
<meta name="oakdev-chatbot-api" content="https://YOUR-VERCEL-PROJECT.vercel.app/api/chatbot">
```
