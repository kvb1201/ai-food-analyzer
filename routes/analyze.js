require('dotenv').config();

const express = require('express');
const router = express.Router();

const OpenAI = require('openai');
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});
console.log("Analyze route loaded: using OpenRouter integration");

const analyzeFood = async (text) => {
  const prompt = `
You are a nutrition assistant. Analyze the health impact of the following food or ingredients: "${text}".

Return ONLY a single valid JSON object with this exact shape and no additional commentary or markdown:
{
  "analysis": "short natural-language explanation of health concerns, benefits, and overall evaluation",
  "health_score": 0-100 integer health score (0 = very unhealthy, 100 = very healthy),
  "health_label": "Healthy Choice" | "Moderate" | "Poor",
  "title": "short title describing the meal's overall nutritional quality",
  "calories": number,
  "protein": number,
  "carbs_percent": number,   // percentage of carbs (0-100)
  "fats_percent": number     // percentage of fats (0-100)
}
`;

  const response = await client.chat.completions.create({
    model: 'meta-llama/llama-3.1-8b-instruct',
    messages: [{ role: 'user', content: prompt }],
  });

  const raw = response.choices[0].message.content;

  try {
    const parsed = JSON.parse(raw);

    const analysis =
      typeof parsed.analysis === 'string' && parsed.analysis.trim()
        ? parsed.analysis
        : raw;

    const rawScore =
      parsed.health_score ?? parsed.score;
    const scoreNum = Number(rawScore);
    const score =
      Number.isFinite(scoreNum) ? scoreNum : null;

    const label =
      typeof parsed.health_label === 'string' && parsed.health_label.trim()
        ? parsed.health_label
        : typeof parsed.label === 'string' && parsed.label.trim()
        ? parsed.label
        : null;

    const title =
      typeof parsed.title === 'string' && parsed.title.trim()
        ? parsed.title
        : null;

    const caloriesNum = Number(parsed.calories);
    const proteinNum = Number(parsed.protein);
    const carbsPctNum = Number(parsed.carbs_percent);
    const fatsPctNum = Number(parsed.fats_percent);

    const calories = Number.isFinite(caloriesNum)
      ? caloriesNum
      : null;
    const protein = Number.isFinite(proteinNum)
      ? proteinNum
      : null;
    const carbs = Number.isFinite(carbsPctNum)
      ? carbsPctNum
      : null;
    const fats = Number.isFinite(fatsPctNum)
      ? fatsPctNum
      : null;

    return {
      analysis,
      score,
      label,
      title,
      nutrition: {
        calories,
        protein,
        carbs,
        fats,
      },
    };
  } catch {
    // Fallback: just use the raw text as analysis and no structured nutrition
    return {
      analysis: raw,
      score: null,
      label: null,
      title: null,
      nutrition: {
        calories: null,
        protein: null,
        carbs: null,
        fats: null,
      },
    };
  }
};

router.post('/', async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        const result = await analyzeFood(text);

        res.json({
          analysis: result.analysis,
          score: result.score,
          label: result.label,
          title: result.title,
          nutrition: result.nutrition,
        });
    } catch (error) {
        console.error('Error analyzing food:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
