import { spawnSync } from "child_process";
import path from "path";
import { isCropGrownInState, getTopCropForState } from "./contextService";

export function predictCrop(
  N: number,
  P: number,
  K: number,
  temperature: number,
  humidity: number,
  ph: number,
  rainfall: number,
  state?: string
): string {
  const scriptPath = path.resolve("src/ml/predict.py");
  const venvPython = path.resolve("src/ml/venv/bin/python");

  const result = spawnSync(
    venvPython,
    [scriptPath, N, P, K, temperature, humidity, ph, rainfall].map(String),
    { encoding: "utf-8" }
  );

  if (result.error) throw new Error(`ML runner error: ${result.error.message}`);
  if (result.stderr) console.error("Python stderr:", result.stderr);

  const mlCrop = result.stdout.trim();

  // Validate crop against state from production data
  if (state && !isCropGrownInState(mlCrop, state)) {
    console.log(`⚠️ "${mlCrop}" not grown in ${state} → overriding...`);
    const fallback = getTopCropForState(state);
    if (fallback) {
      console.log(`✅ Fallback crop for ${state}: ${fallback}`);
      return fallback;
    }
  }

  return mlCrop;
}