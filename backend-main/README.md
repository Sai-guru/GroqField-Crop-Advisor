# Jacob Crop AI Backend

Bun + TypeScript API that runs the ML predictor and returns AI farming advice.

---

## Features

- Crop prediction from soil + climate inputs
- Regional production context lookup
- AI advice generated via Groq LLM

## Requirements

- Bun 1.3+
- Python 3.x (for the ML predictor)

---

## Setup

Install dependencies:

```bash
cd backend-main
bun install
```

Set environment variables (example):

```bash
GROQ_API_KEY=your_key_here
PORT=8000
```

Create the ML virtual environment (first time only):

```bash
python -m venv src/ml/venv
src/ml/venv/bin/pip install -r src/ml/requirements.txt
```

Run the server:

```bash
bun run dev
```

---

## API

- GET / - health check
- POST /recommend - prediction + AI advice

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

Example response:

```json
{
  "predicted_crop": "rice",
  "ai_advice": "..."
}
```

---

## Notes

- The ML runner uses src/ml/venv/bin/python
- If Python or venv is missing, prediction will fail
