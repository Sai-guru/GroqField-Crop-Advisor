// import { useState } from 'react'
// import type { CropInput } from '../api'

// interface Props {
//   onSubmit: (data: CropInput) => void
//   loading: boolean
// }

// const fields: { key: keyof CropInput; label: string; unit: string; min: number; max: number; step: number }[] = [
//   { key: 'N', label: 'Nitrogen', unit: 'mg/kg', min: 0, max: 200, step: 1 },
//   { key: 'P', label: 'Phosphorus', unit: 'mg/kg', min: 0, max: 200, step: 1 },
//   { key: 'K', label: 'Potassium', unit: 'mg/kg', min: 0, max: 200, step: 1 },
//   { key: 'temperature', label: 'Temperature', unit: '°C', min: 0, max: 60, step: 0.1 },
//   { key: 'humidity', label: 'Humidity', unit: '%', min: 0, max: 100, step: 0.1 },
//   { key: 'ph', label: 'Soil pH', unit: 'pH', min: 0, max: 14, step: 0.1 },
//   { key: 'rainfall', label: 'Rainfall', unit: 'mm', min: 0, max: 500, step: 0.1 },
// ]

// const defaultValues: CropInput = {
//   N: 90, P: 42, K: 43,
//   temperature: 21, humidity: 82,
//   ph: 6.5, rainfall: 203,
//   state: 'Tamil Nadu'
// }

// export default function InputForm({ onSubmit, loading }: Props) {
//   const [form, setForm] = useState<CropInput>(defaultValues)

//   const handle = (key: keyof CropInput, value: string) => {
//     setForm(prev => ({
//       ...prev,
//       [key]: key === 'state' ? value : parseFloat(value)
//     }))
//   }

//   return (
//     <div className="flex flex-col gap-4">
//       <div className="grid grid-cols-2 gap-3">
//         {fields.map(f => (
//           <div key={f.key} className="flex flex-col gap-1">
//             <label className="text-green-400 text-xs uppercase tracking-wide">
//               {f.label} <span className="text-green-600">({f.unit})</span>
//             </label>
//             <input
//               type="number"
//               min={f.min}
//               max={f.max}
//               step={f.step}
//               value={form[f.key] as number}
//               onChange={e => handle(f.key, e.target.value)}
//               className="bg-green-950 border border-green-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-green-400"
//             />
//           </div>
//         ))}

//         <div className="flex flex-col gap-1">
//           <label className="text-green-400 text-xs uppercase tracking-wide">
//             State <span className="text-green-600">(region)</span>
//           </label>
//           <input
//             type="text"
//             value={form.state}
//             onChange={e => handle('state', e.target.value)}
//             placeholder="e.g. Tamil Nadu"
//             className="bg-green-950 border border-green-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-green-400"
//           />
//         </div>
//       </div>

//       <button
//         onClick={() => onSubmit(form)}
//         disabled={loading}
//         className="w-full py-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-semibold rounded-xl transition text-sm tracking-wide"
//       >
//         {loading ? 'Analyzing...' : '🌱 Get Crop Recommendation'}
//       </button>
//     </div>
//   )
// }

// import { useState } from "react";
// import type { CropInput } from "../api";

// interface Props {
//   onSubmit: (data: CropInput) => void;
//   loading: boolean;
// }

// const fields: {
//   key: keyof CropInput;
//   label: string;
//   unit: string;
//   min: number;
//   max: number;
//   step: number;
// }[] = [
//   { key: "N", label: "Nitrogen", unit: "mg/kg", min: 0, max: 200, step: 1 },
//   { key: "P", label: "Phosphorus", unit: "mg/kg", min: 0, max: 200, step: 1 },
//   { key: "K", label: "Potassium", unit: "mg/kg", min: 0, max: 200, step: 1 },
//   { key: "temperature", label: "Temperature", unit: "°C", min: 0, max: 60, step: 0.1 },
//   { key: "humidity", label: "Humidity", unit: "%", min: 0, max: 100, step: 0.1 },
//   { key: "ph", label: "Soil pH", unit: "pH", min: 0, max: 14, step: 0.1 },
//   { key: "rainfall", label: "Rainfall", unit: "mm", min: 0, max: 500, step: 0.1 },
// ];

// const defaultValues: CropInput = {
//   N: 90, P: 42, K: 43,
//   temperature: 21, humidity: 82,
//   ph: 6.5, rainfall: 203,
//   state: "Tamil Nadu",
// };

// const emptyValues: CropInput = {
//   N: 0, P: 0, K: 0,
//   temperature: 0, humidity: 0,
//   ph: 0, rainfall: 0,
//   state: "",
// };

// export default function InputForm({ onSubmit, loading }: Props) {
//   const [form, setForm] = useState<CropInput>(defaultValues);

//   const handle = (key: keyof CropInput, value: string) => {
//     setForm((prev) => ({
//       ...prev,
//       [key]: key === "state" ? value : parseFloat(value) || 0,
//     }));
//   };

//   const handleClear = () => setForm(emptyValues);

//   return (
//     <div className="flex flex-col gap-5">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//         {fields.map((f) => (
//           <div key={f.key} className="flex flex-col gap-1.5">
//             <label className="text-green-500 text-xs uppercase tracking-wide">
//               {f.label}
//               <span className="text-green-800 ml-1 normal-case">({f.unit})</span>
//             </label>
//             <input
//               type="number"
//               min={f.min}
//               max={f.max}
//               step={f.step}
//               value={form[f.key] as number}
//               onChange={(e) => handle(f.key, e.target.value)}
//               className="bg-[#050a05] border border-green-900 hover:border-green-700 focus:border-green-400 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none transition w-full"
//             />
//           </div>
//         ))}

//         <div className="flex flex-col gap-1.5">
//           <label className="text-green-500 text-xs uppercase tracking-wide">
//             State
//             <span className="text-green-800 ml-1 normal-case">(region)</span>
//           </label>
//           <input
//             type="text"
//             value={form.state}
//             onChange={(e) => handle("state", e.target.value)}
//             placeholder="e.g. Tamil Nadu"
//             className="bg-[#050a05] border border-green-900 hover:border-green-700 focus:border-green-400 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none transition w-full placeholder-green-900"
//           />
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3">
//         <button
//           onClick={handleClear}
//           disabled={loading}
//           className="px-5 py-3 bg-transparent border border-green-800 hover:border-green-600 text-green-600 hover:text-green-400 rounded-xl text-sm transition disabled:opacity-40"
//         >
//           ✕ Clear
//         </button>
//         <button
//           onClick={() => setForm(defaultValues)}
//           disabled={loading}
//           className="px-5 py-3 bg-transparent border border-green-800 hover:border-green-600 text-green-600 hover:text-green-400 rounded-xl text-sm transition disabled:opacity-40"
//         >
//           ↺ Reset to Sample
//         </button>
//         <button
//           onClick={() => onSubmit(form)}
//           disabled={loading}
//           className="flex-1 py-3 bg-green-500 hover:bg-green-400 active:scale-95 disabled:opacity-50 text-black font-semibold rounded-xl transition text-sm tracking-wide shadow-lg shadow-green-500/20"
//         >
//           {loading ? "Analyzing..." : "🌱 Get Crop Recommendation"}
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import type { CropInput } from "../api";

interface Props {
  onSubmit: (data: CropInput) => void;
  loading: boolean;
}

const fields: {
  key: keyof CropInput;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
}[] = [
  { key: "N", label: "Nitrogen", unit: "mg/kg", min: 0, max: 200, step: 1 },
  { key: "P", label: "Phosphorus", unit: "mg/kg", min: 0, max: 200, step: 1 },
  { key: "K", label: "Potassium", unit: "mg/kg", min: 0, max: 200, step: 1 },
  {
    key: "temperature",
    label: "Temperature",
    unit: "°C",
    min: 0,
    max: 60,
    step: 0.1,
  },
  {
    key: "humidity",
    label: "Humidity",
    unit: "%",
    min: 0,
    max: 100,
    step: 0.1,
  },
  { key: "ph", label: "Soil pH", unit: "pH", min: 0, max: 14, step: 0.1 },
  {
    key: "rainfall",
    label: "Rainfall",
    unit: "mm",
    min: 0,
    max: 500,
    step: 0.1,
  },
];

const defaultValues: CropInput = {
  N: 90,
  P: 42,
  K: 43,
  temperature: 21,
  humidity: 82,
  ph: 6.5,
  rainfall: 203,
  state: "Tamil Nadu",
};

const emptyValues: CropInput = {
  N: 0,
  P: 0,
  K: 0,
  temperature: 0,
  humidity: 0,
  ph: 0,
  rainfall: 0,
  state: "",
};

export default function InputForm({ onSubmit, loading }: Props) {
  const [form, setForm] = useState<CropInput>(defaultValues);

  const handle = (key: keyof CropInput, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: key === "state" ? value : parseFloat(value) || 0,
    }));
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {fields.map((f) => (
          <div key={f.key} className="flex flex-col gap-1.5">
            <label className="text-[var(--accent)] text-xs uppercase tracking-wide">
              {f.label}
              <span className="text-[var(--text-dim)] ml-1 normal-case">
                ({f.unit})
              </span>
            </label>
            <input
              type="number"
              min={f.min}
              max={f.max}
              step={f.step}
              value={form[f.key] as number}
              onChange={(e) => handle(f.key, e.target.value)}
              className="bg-[var(--input-bg)] border border-[var(--input-border)] hover:border-[var(--input-border-hover)] focus:border-[var(--input-border-focus)] rounded-xl px-3 py-2.5 text-[var(--text)] text-sm focus:outline-none transition w-full"
            />
          </div>
        ))}

        <div className="flex flex-col gap-1.5">
          <label className="text-[var(--accent)] text-xs uppercase tracking-wide">
            State
            <span className="text-[var(--text-dim)] ml-1 normal-case">
              (region)
            </span>
          </label>
          <input
            type="text"
            value={form.state}
            onChange={(e) => handle("state", e.target.value)}
            placeholder="e.g. Tamil Nadu"
            className="bg-[var(--input-bg)] border border-[var(--input-border)] hover:border-[var(--input-border-hover)] focus:border-[var(--input-border-focus)] rounded-xl px-3 py-2.5 text-[var(--text)] text-sm focus:outline-none transition w-full placeholder-[var(--input-placeholder)]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setForm(emptyValues)}
          disabled={loading}
          className="px-5 py-3 bg-transparent border border-[var(--button-secondary-border)] hover:border-[var(--button-secondary-hover)] text-[var(--button-secondary-text)] hover:text-[var(--text)] rounded-xl text-sm transition disabled:opacity-40"
        >
          ✕ Clear
        </button>
        <button
          onClick={() => setForm(defaultValues)}
          disabled={loading}
          className="px-5 py-3 bg-transparent border border-[var(--button-secondary-border)] hover:border-[var(--button-secondary-hover)] text-[var(--button-secondary-text)] hover:text-[var(--text)] rounded-xl text-sm transition disabled:opacity-40"
        >
          ↺ Sample Data
        </button>
        <button
          onClick={() => onSubmit(form)}
          disabled={loading}
          className="flex-1 py-3 bg-[var(--button-primary-bg)] hover:bg-[var(--button-primary-hover)] active:scale-95 disabled:opacity-50 text-[var(--button-primary-text)] font-semibold rounded-xl transition text-sm tracking-wide shadow-[0_12px_30px_var(--button-primary-shadow)]"
        >
          {loading ? "Analyzing..." : "🌱 Get Crop Recommendation"}
        </button>
      </div>
    </div>
  );
}
