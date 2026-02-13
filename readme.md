# AI Food Ingredient Analyzer

AI-powered ingredient and food analysis tool that evaluates healthiness and explains nutritional impact using large language models.

## Overview

This project analyzes food items or ingredient lists and generates AI-based health insights, including nutritional concerns, benefits, and overall healthiness evaluation.

It demonstrates how modern AI (LLMs) can be integrated into full-stack applications for real-world decision support.

## Features

- AI ingredient analysis
- Healthiness evaluation
- Nutritional explanation
- REST API endpoint
- Modern UI (planned)
- Deployable architecture

## Tech Stack

- Backend: Node.js / Express (Antigravity scaffold)
- AI: LLM API integration
- Frontend: React (Aura Builder)
- Dev: Cursor AI IDE

## API

### POST `/analyze-food`

**Input**
```json
{
  "text": "pizza with cheese and processed meat"
}

Response
{
  "analysis": "High in saturated fats and sodium. Frequent consumption may increase cardiovascular risk..."
}

Architecture
User → UI → Backend → AI → Response

Status
🚧 In development 


Future Improvements
	•	Nutrition scoring
	•	Ingredient detection from images
	•	Personalized dietary feedback
	•	Food recommendation engine

Author

Kavya Bhatiya
AI Student, SVNIT Surat