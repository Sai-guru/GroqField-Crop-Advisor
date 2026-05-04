# Jacob Crop AI 🌾

Precision crop recommendation + AI farm advice in a clean, fast full-stack app.

---

## What this does ✨

- 🌱 Predicts the best crop from soil + climate inputs
- 📊 Validates the prediction against state-level production data
- 🤖 Generates farmer-friendly advice via Groq LLM

## Tech stack 🧰

- 🧪 Backend: Bun + TypeScript + Express
- 🧠 ML: Python model (local predictor)
- 🎨 Frontend: React + Vite

## Repo structure 🗂️

- backend-main/ - API + ML runner + production context
- frontend/ - UI

---

## Quick start 🚀

Backend 🧪:

```bash
cd backend-main
bun install
GROQ_API_KEY=your_key_here
bun run dev
```

Frontend 🎨:

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL printed in the terminal. The frontend proxies API calls to
http://127.0.0.1:8000 by default.

---

## Environment variables 🔐

Backend 🧪:

- GROQ_API_KEY - required for AI advice
- PORT - optional, default 8000

Frontend 🎨:

- VITE_API_URL - optional, default http://127.0.0.1:8000

---

## API (backend) 📡

- GET / - health check
- POST /recommend - crop prediction + AI advice

Example payload:

```json
{
  "N": 90,
  "P": 40,
  "K": 40,
  "temperature": 24.5,
  "humidity": 70,
  "ph": 6.5,
  "rainfall": 120,
  "state": "Karnataka"
}
```
