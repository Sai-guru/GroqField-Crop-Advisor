import Groq from "groq-sdk";

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getAIAdvice(
  crop: string,
  N: number,
  P: number,
  K: number,
  temperature: number,
  humidity: number,
  ph: number,
  rainfall: number,
  state: string | undefined,
  context: string,
): Promise<string> {
  const prompt = `
You are an expert agricultural field advisor with deep knowledge of Indian farming practices.

A farmer has submitted the following field conditions:
- Nitrogen (N): ${N} mg/kg, Phosphorus (P): ${P} mg/kg, Potassium (K): ${K} mg/kg
- Temperature: ${temperature}°C | Humidity: ${humidity}% | Rainfall: ${rainfall}mm
- Soil pH: ${ph}
- State/Region: ${state ?? "Not specified"}

ML model recommendation: **${crop}**
Regional production data: ${context}

⚠️ CROP VALIDATION — check this first before anything else:
If the ML-recommended crop is clearly unsuitable for the given region or climate
(e.g. coffee in Punjab, coconut in Rajasthan, rice in arid zones), you MUST:
- Override it with the most suitable crop for these exact field conditions and state
- Clearly state at the top: "ML suggested [crop] but based on your region and conditions, [better crop] is more suitable."
- Continue all 5 points below based on the corrected crop
If the crop is suitable, proceed normally without mentioning this rule.

⚠️ CRITICAL pH RULES — follow strictly:
- pH > 8.5: CRITICAL WARNING at top. Flag nutrient lockout — plant CANNOT absorb N-P-K.
  Recommend Elemental Sulfur (200-500 kg/ha), Gypsum (400-600 kg/ha), acidic compost.
- pH 7.5–8.5: mild alkalinity, suggest light sulfur or organic matter.
- pH 6.0–7.5: optimal, no pH concern.
- pH < 5.5: flag acidity, recommend lime (calcium carbonate).

Give structured advice on these 5 points:
1. **Why this crop fits** — how soil and climate support it (factor in pH honestly)
2. **Soil health assessment** — evaluate N-P-K AND pH; flag nutrient lockout if pH > 8.5
3. **Soil amendments** — pH correction first if critical, then:
   - N < 50: urea or basal dressing
   - P < 30: SSP or DAP with rates
   - K < 30: MOP dosage
   - Fertigation schedule if applicable
4. **Best season & planting tip** — when to plant, one key agronomic tip
5. **Yield & profit outlook** — expected yield and market insight for the region

Be direct, specific with quantities, farmer-friendly. No fluff. Scream if critical.
`;

  const res = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 500,
    temperature: 0.7,
  });

  const content = res?.choices?.[0]?.message?.content ?? "No advice generated.";
  return content;
}