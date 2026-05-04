import type { Request, Response } from "express";
import { predictCrop } from "../services/mlService";
import { getCropContext } from "../services/contextService";
import { getAIAdvice } from "../services/adviceService";

export async function recommendCrop(req: Request, res: Response) {
  try {
    const { N, P, K, temperature, humidity, ph, rainfall, state } = req.body;

    const crop = predictCrop(N, P, K, temperature, humidity, ph, rainfall,state);
    const context = getCropContext(crop, state);
    const ai_advice = await getAIAdvice(
      crop,
      N,
      P,
      K,
      temperature,
      humidity,
      ph,
      rainfall,
      state,
      context,
    );

    res.json({ predicted_crop: crop, ai_advice });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
