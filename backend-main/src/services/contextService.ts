import fs from "fs";
import path from "path";
import Papa from "papaparse";

interface ProductionRow {
  State_Name: string;
  Crop: string;
  Season: string;
  Production: string;
}

const csvPath = path.resolve("src/data/crop_production.csv");
const raw = fs.readFileSync(csvPath, "utf-8");
const { data } = Papa.parse<ProductionRow>(raw, {
  header: true,
  skipEmptyLines: true,
});

export function getCropContext(crop: string, state?: string): string {
  let filtered = data.filter(
    (r) => r.Crop?.trim().toLowerCase() === crop.toLowerCase(),
  );

  if (state) {
    const stateFiltered = filtered.filter(
      (r) => r.State_Name?.trim().toLowerCase() === state.toLowerCase(),
    );
    if (stateFiltered.length > 0) filtered = stateFiltered;
  }

  if (filtered.length === 0) return "No regional production data available.";

  const productions = filtered
    .map((r) => parseFloat(r.Production))
    .filter((n) => !isNaN(n));

  const avg =
    productions.length > 0
      ? (
          productions.reduce((a, b) => a + b, 0) / productions.length
        ).toFixed(0)
      : "N/A";

  const seasons = [...new Set(filtered.map((r) => r.Season?.trim()))].filter(
    Boolean,
  );

  const stateGroups: Record<string, number[]> = {};
  filtered.forEach((r) => {
    const p = parseFloat(r.Production);
    if (!isNaN(p)) {
      const stateName = r.State_Name;
      const group = stateGroups[stateName] ?? [];
      group.push(p);
      stateGroups[stateName] = group;
    }
  });

  const topStates = Object.entries(stateGroups)
    .map(([s, vals]) => ({ s, avg: vals.reduce((a, b) => a + b, 0) / vals.length }))
    .sort((a, b) => b.avg - a.avg)
    .slice(0, 3)
    .map((x) => x.s);

  return `Average production: ${avg} tonnes. Top states: ${topStates.join(", ")}. Seasons: ${seasons.join(", ")}.`;
}

export function isCropGrownInState(crop: string, state: string): boolean {
  return data.some(
    (r) =>
      r.Crop?.trim().toLowerCase() === crop.toLowerCase() &&
      r.State_Name?.trim().toLowerCase() === state.toLowerCase()
  );
}

export function getTopCropForState(state: string): string | null {
  const stateData = data.filter(
    (r) => r.State_Name?.trim().toLowerCase() === state.toLowerCase()
  );
  if (stateData.length === 0) return null;

  const cropTotals: Record<string, number> = {};
  stateData.forEach((r) => {
    const p = parseFloat(r.Production);
    if (!isNaN(p)) {
      const crop = r.Crop?.trim().toLowerCase();
      cropTotals[crop] = (cropTotals[crop] || 0) + p;
    }
  });

  return Object.entries(cropTotals).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
}