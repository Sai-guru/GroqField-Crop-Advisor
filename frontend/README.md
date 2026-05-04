# Jacob Crop AI Frontend

React + Vite UI for crop recommendations and AI advice.

---

## Features

- Form-based input for soil + climate data
- Clean output card with predicted crop and advice
- Dev proxy to backend for local workflow

## Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Configuration

The UI calls POST /recommend. In dev, Vite proxies to the backend at
http://127.0.0.1:8000.

To use a different backend:

```bash
VITE_API_URL=http://127.0.0.1:8000
```

---

## Scripts

- npm run dev - local dev server
- npm run build - production build
- npm run preview - preview build locally
