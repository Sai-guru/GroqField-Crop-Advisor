// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import "./App.css";
// import { recommendCrop } from "./api";
// import type { CropInput, CropOutput } from "./api";
// import InputForm from "./components/InputForm";
// import ResultCard from "./components/ResultCard";
// import Loader from "./components/Loader";

// function App() {
//   const [result, setResult] = useState<CropOutput | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (data: CropInput) => {
//     setLoading(true);
//     setError(null);
//     setResult(null);

//     try {
//       const response = await recommendCrop(data);
//       setResult(response);
//     } catch (err) {
//       const message =
//         err instanceof Error ? err.message : "Unable to reach the AI advisor.";
//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app">
//       <header className="app-header">
//         <div className="logo">🌾</div>
//         <div className="brand">
//           <p className="eyebrow">Jacob Crop AI</p>
//           <h1>From soil numbers to smart crop decisions.</h1>
//           <p className="tagline">
//             Blend nutrient data, climate signals, and regional production stats
//             to pick what grows best.
//           </p>
//         </div>
//         <div className="header-actions">
//           <a className="ghost" href="#analyze">
//             Start analysis
//           </a>
//           <a className="solid" href="#result">
//             View results
//           </a>
//         </div>
//       </header>

//       <main className="app-main">
//         <section className="panel hero-panel">
//           <div className="hero-copy">
//             <p className="eyebrow">Field Intelligence</p>
//             <h2>Turn raw soil readings into a profitable planting plan.</h2>
//             <p className="lead">
//               Enter your field conditions once. The model recommends the crop
//               and the AI advisor adds practical, local guidance.
//             </p>
//             <div className="chip-row">
//               <span className="chip">ML crop model</span>
//               <span className="chip">Groq LLM advisor</span>
//               <span className="chip">Regional data signals</span>
//             </div>
//             <div className="stat-grid">
//               <div>
//                 <p className="stat-label">Inputs tracked</p>
//                 <p className="stat-value">7 soil + climate</p>
//               </div>
//               <div>
//                 <p className="stat-label">Output</p>
//                 <p className="stat-value">1 crop + advice</p>
//               </div>
//               <div>
//                 <p className="stat-label">Response time</p>
//                 <p className="stat-value">Under a minute</p>
//               </div>
//             </div>
//           </div>
//           <div className="hero-card">
//             <img
//               src={heroImg}
//               alt="Layered crop field illustration"
//               className="hero-img"
//             />
//             <div className="hero-card-content">
//               <p className="eyebrow">Live signal</p>
//               <h3>Season-ready recommendations</h3>
//               <p>
//                 Understand why a crop matches your field, when to plant, and
//                 what to expect for yield and profit.
//               </p>
//               <div className="signal-list">
//                 <span>🌡️ Climate fit</span>
//                 <span>🧪 Soil balance</span>
//                 <span>📈 Market-aware</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="panel form-panel" id="analyze">
//           <div className="panel-header">
//             <div>
//               <p className="eyebrow">Input your field</p>
//               <h2>Start with the latest soil readings.</h2>
//               <p className="lead">
//                 Add your lab results and local conditions. Keep numbers within
//                 your typical range for the best match.
//               </p>
//             </div>
//             <div className="panel-badge">Analysis Ready</div>
//           </div>
//           <InputForm onSubmit={handleSubmit} loading={loading} />
//           {loading && <Loader />}
//           {error && (
//             <div className="error-banner" role="alert">
//               {error}
//             </div>
//           )}
//         </section>

//         <section className="panel result-panel" id="result">
//           <div className="panel-header">
//             <div>
//               <p className="eyebrow">Recommendation</p>
//               <h2>Your crop plan, ready to act on.</h2>
//               <p className="lead">
//                 The result combines the ML model with a summarized field
//                 strategy you can use right away.
//               </p>
//             </div>
//             <div className="panel-badge">AI Guided</div>
//           </div>

//           {result ? (
//             <ResultCard
//               crop={result.predicted_crop}
//               advice={result.ai_advice}
//               onReset={() => setResult(null)}
//             />
//           ) : (
//             <div className="empty-state">
//               <h3>No recommendation yet.</h3>
//               <p>
//                 Run an analysis to see the crop, season timing, and a key
//                 agronomy tip.
//               </p>
//               <div className="empty-pills">
//                 <span>Soil profile</span>
//                 <span>Regional context</span>
//                 <span>Actionable tips</span>
//               </div>
//             </div>
//           )}
//         </section>
//       </main>

//       <footer className="app-footer">
//         <p>Jacob Crop AI • Built for field-first decisions.</p>
//         <p>
//           Data-driven recommendations to support smarter, sustainable farming.
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import { recommendCrop } from "./api";
// import type { CropInput, CropOutput } from "./api";
// import InputForm from "./components/InputForm";
// import ResultCard from "./components/ResultCard";
// import Loader from "./components/Loader";

// export default function App() {
//   const [result, setResult] = useState<CropOutput | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (data: CropInput) => {
//     setLoading(true);
//     setError(null);
//     setResult(null);
//     try {
//       const response = await recommendCrop(data);
//       setResult(response);
//     } catch (err) {
//       setError("Unable to reach the AI advisor. Make sure the backend is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#050a05] text-white font-sans">

//       {/* Ambient background */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-green-950/20 via-transparent to-transparent" />
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 flex flex-col gap-16">

//         {/* ── HEADER ── */}
//         <header className="flex flex-col gap-6">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-green-500/30">
//               🌾
//             </div>
//             <div>
//               <p className="text-green-500 text-xs uppercase tracking-[0.2em] font-medium">Jacob Crop AI</p>
//               <p className="text-green-900 text-xs">Smart Agriculture Platform</p>
//             </div>
//             <div className="ml-auto flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               <span className="text-green-400 text-xs">System Live</span>
//             </div>
//           </div>

//           <div className="border-t border-green-900/50 pt-8">
//             <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
//               From soil numbers to<br />
//               <span className="text-green-400">smart crop decisions.</span>
//             </h1>
//             <p className="mt-4 text-green-700 text-base max-w-xl leading-relaxed">
//               Blend nutrient data, climate signals, and regional production stats
//               to pick what grows best — powered by ML + Groq AI.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {["ML crop model", "Groq LLaMA 3.3", "Regional data signals", "99.3% accuracy"].map(c => (
//               <span key={c} className="px-3 py-1 bg-green-950 border border-green-800 rounded-full text-green-400 text-xs">
//                 {c}
//               </span>
//             ))}
//           </div>
//         </header>

//         {/* ── STATS ROW ── */}
//         <div className="grid grid-cols-3 gap-4">
//           {[
//             { label: "Inputs tracked", value: "7 parameters" },
//             { label: "Crops supported", value: "22 varieties" },
//             { label: "Model accuracy", value: "99.3%" },
//           ].map(s => (
//             <div key={s.label} className="bg-green-950/30 border border-green-900/50 rounded-2xl p-4 text-center">
//               <p className="text-green-400 text-xl font-bold">{s.value}</p>
//               <p className="text-green-800 text-xs mt-1">{s.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* ── FORM PANEL ── */}
//         <section className="flex flex-col gap-6">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-green-500 text-xs uppercase tracking-widest">Step 01</p>
//               <h2 className="text-2xl font-bold mt-1">Enter your field conditions</h2>
//               <p className="text-green-700 text-sm mt-1">Add soil readings and local climate data for the best match.</p>
//             </div>
//             <div className="px-3 py-1 bg-green-500/10 border border-green-700 rounded-full text-green-400 text-xs">
//               Analysis Ready
//             </div>
//           </div>

//           <div className="bg-green-950/20 border border-green-900/60 rounded-2xl p-6">
//             <InputForm onSubmit={handleSubmit} loading={loading} />
//             {loading && <Loader />}
//             {error && (
//               <div className="mt-4 px-4 py-3 bg-red-950/40 border border-red-800 rounded-xl text-red-400 text-sm">
//                 ⚠️ {error}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ── RESULT PANEL ── */}
//         <section className="flex flex-col gap-6">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-green-500 text-xs uppercase tracking-widest">Step 02</p>
//               <h2 className="text-2xl font-bold mt-1">Your crop recommendation</h2>
//               <p className="text-green-700 text-sm mt-1">ML prediction combined with AI-powered field strategy.</p>
//             </div>
//             <div className="px-3 py-1 bg-green-500/10 border border-green-700 rounded-full text-green-400 text-xs">
//               AI Guided
//             </div>
//           </div>

//           <div className="bg-green-950/20 border border-green-900/60 rounded-2xl p-6 min-h-40">
//             {result ? (
//               <ResultCard
//                 crop={result.predicted_crop}
//                 advice={result.ai_advice}
//                 onReset={() => setResult(null)}
//               />
//             ) : (
//               <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
//                 <div className="w-12 h-12 rounded-2xl bg-green-950 border border-green-800 flex items-center justify-center text-2xl">
//                   🌱
//                 </div>
//                 <p className="text-green-600 text-sm">No recommendation yet.</p>
//                 <p className="text-green-900 text-xs max-w-xs">
//                   Fill in your field conditions above and hit analyze to get your crop plan.
//                 </p>
//                 <div className="flex gap-2 mt-2">
//                   {["Soil profile", "Regional context", "Actionable tips"].map(p => (
//                     <span key={p} className="px-2 py-1 bg-green-950 border border-green-900 rounded-full text-green-800 text-xs">
//                       {p}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ── FOOTER ── */}
//         <footer className="border-t border-green-900/40 pt-6 flex justify-between items-center">
//           <p className="text-green-900 text-xs">Jacob Crop AI • Built for field-first decisions.</p>
//           <p className="text-green-900 text-xs">Random Forest · Groq LLaMA 3.3 · FastAPI</p>
//         </footer>

//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { recommendCrop } from "./api";
import type { CropInput, CropOutput } from "./api";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";
import Loader from "./components/Loader";

export default function App() {
  const [result, setResult] = useState<CropOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "amber";
    }
    return window.localStorage.getItem("jacobai-theme") ?? "amber";
  });

  const themes = [
    { id: "amber", label: "Amber" },
    { id: "forest", label: "Forest" },
    { id: "midnight", label: "Midnight" },
  ];

  useEffect(() => {
    window.localStorage.setItem("jacobai-theme", theme);
  }, [theme]);

  const handleSubmit = async (data: CropInput) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await recommendCrop(data);
      setResult(response);
    } catch (err) {
      setError(
        "Unable to reach the AI advisor. Make sure the backend is running.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans"
      data-theme={theme}
    >
      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[var(--glow-1)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[var(--glow-2)] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-12 flex flex-col gap-16">
        {/* ── HEADER ── */}
        <header className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--accent)] rounded-xl flex items-center justify-center text-xl shadow-[0_12px_30px_var(--accent-shadow)]">
              🌾
            </div>
            <div>
              <p className="text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-medium">
                GroqField by Prigeesh
              </p>
              <p className="text-[var(--text-dim)] text-xs">
                Smart Agriculture Platform
              </p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--accent-strong)] rounded-full animate-pulse" />
                <span className="text-[var(--accent)] text-xs">
                  System Live
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--panel-strong)] p-1">
                {themes.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setTheme(option.id)}
                    className={`px-3 py-1.5 text-xs rounded-full transition ${
                      theme === option.id
                        ? "bg-[var(--toggle-active-bg)] text-[var(--toggle-active-text)]"
                        : "text-[var(--toggle-text)] hover:text-[var(--text)]"
                    }`}
                    aria-pressed={theme === option.id}
                    type="button"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none text-[var(--text)]">
              From soil numbers to
              <br />
              <span className="text-[var(--accent-strong)]">
                smart crop decisions.
              </span>
            </h1>
            <p className="mt-4 text-[var(--text-muted)] text-base max-w-xl leading-relaxed">
              Blend nutrient data, climate signals, and regional production
              stats to pick what grows best — powered by ML + Groq AI.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "ML crop model",
              "Groq LLaMA 3.3",
              "Regional data signals",
              "99.3% accuracy",
            ].map((c) => (
              <span
                key={c}
                className="px-3 py-1 bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-full text-[var(--chip-text)] text-xs"
              >
                {c}
              </span>
            ))}
          </div>
        </header>

        {/* ── STATS ── */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Inputs tracked", value: "7 parameters" },
            { label: "Crops supported", value: "22 varieties" },
            { label: "Model accuracy", value: "99.3%" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[var(--panel-strong)] border border-[var(--border)] rounded-2xl p-4 text-center"
            >
              <p className="text-[var(--accent-strong)] text-xl font-bold">
                {s.value}
              </p>
              <p className="text-[var(--text-dim)] text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── FORM PANEL ── */}
        <section className="flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[var(--accent)] text-xs uppercase tracking-widest">
                Step 01
              </p>
              <h2 className="text-2xl font-bold mt-1 text-[var(--text)]">
                Enter your field conditions
              </h2>
              <p className="text-[var(--text-muted)] text-sm mt-1">
                Add soil readings and local climate data for the best match.
              </p>
            </div>
            <div className="px-3 py-1 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-full text-[var(--badge-text)] text-xs">
              Analysis Ready
            </div>
          </div>

          <div className="bg-[var(--panel)] border border-[var(--border)] rounded-2xl p-6">
            <InputForm onSubmit={handleSubmit} loading={loading} />
            {loading && <Loader />}
            {error && (
              <div className="mt-4 px-4 py-3 bg-red-950/40 border border-red-900 rounded-xl text-red-400 text-sm">
                ⚠️ {error}
              </div>
            )}
          </div>
        </section>

        {/* ── RESULT PANEL ── */}
        <section className="flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[var(--accent)] text-xs uppercase tracking-widest">
                Step 02
              </p>
              <h2 className="text-2xl font-bold mt-1 text-[var(--text)]">
                Your crop recommendation
              </h2>
              <p className="text-[var(--text-muted)] text-sm mt-1">
                ML prediction combined with AI-powered field strategy.
              </p>
            </div>
            <div className="px-3 py-1 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-full text-[var(--badge-text)] text-xs">
              AI Guided
            </div>
          </div>

          <div className="bg-[var(--panel)] border border-[var(--border)] rounded-2xl p-6 min-h-40">
            {result ? (
              <ResultCard
                crop={result.predicted_crop}
                advice={result.ai_advice}
                onReset={() => setResult(null)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[var(--card-muted)] border border-[var(--border)] flex items-center justify-center text-2xl">
                  🌱
                </div>
                <p className="text-(--text-muted) text-sm">
                  No recommendation yet.
                </p>
                <p className="text-(--text-dim) text-xs max-w-xs">
                  Fill in your field conditions above and hit analyze to get
                  your crop plan.
                </p>
                <div className="flex gap-2 mt-2">
                  {["Soil profile", "Regional context", "Actionable tips"].map(
                    (p) => (
                      <span
                        key={p}
                        className="px-2 py-1 bg-(--chip-bg) border border-[var(--chip-border)] rounded-full text-[var(--text-dim)] text-xs"
                      >
                        {p}
                      </span>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-[var(--border)] pt-6 flex justify-between items-center">
          <p className="text-[var(--text-dim)] text-xs">
            GroqField by Prigeesh • Built for field-first decisions.
          </p>
          <p className="text-[var(--text-dim)] text-xs">
            Random Forest · Groq LLaMA 3.3 · FastAPI
          </p>
        </footer>
      </div>
    </div>
  );
}
