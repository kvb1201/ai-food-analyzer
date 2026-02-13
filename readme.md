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
# AI Food Ingredient Analyzer

A lightweight AI web app that analyzes the health impact of foods and ingredients using a large language model.

This project was built in ~3 hours as a focused exercise to learn and practice modern AI development tools and rapid prototyping workflows for hackathons.

---

## Purpose

This project was created to:

- Practice integrating LLM APIs into real applications
- Learn AI-assisted development workflows
- Prototype a complete AI feature end-to-end quickly
- Prepare for hackathon-style rapid building

It demonstrates how modern AI tools can accelerate full-stack development from idea to working product within hours.

---

## Tech Stack

- Node.js + Express backend
- OpenRouter LLM API
- Aura-generated UI
- Cursor AI editor
- Antigravity scaffolding
- Tailwind CSS frontend

---

## Features

- Text-based food/ingredient input
- AI nutritional analysis
- Dynamic health score and labels
- Macro breakdown (calories, protein, carbs, fats)
- Clean responsive UI
- Real-time API integration

---

## Example

Input:
```
instant noodles
```

Output:
- Health concerns
- Benefits
- Overall evaluation
- Health score
- Macro estimates

---

## What I Learned

- LLM API integration patterns
- Prompt design for structured outputs
- AI-assisted coding workflows (Cursor)
- Rapid UI generation (Aura)
- Backend scaffolding with AI tools (Antigravity)
- Debugging AI service integrations
- Shipping a functional AI app quickly

---

## Running Locally

```bash
npm install
node server.js
```

Open:
```
http://localhost:3000
```

---

## Environment

Create `.env`:

```
OPENROUTER_API_KEY=your_key_here
```

---

## Notes

This project focuses on demonstrating AI tool usage and rapid prototyping rather than production nutrition accuracy.

---

## Author

Kavya Bhatiya  
AI Student, SVNIT Surat

---

## License

MIT