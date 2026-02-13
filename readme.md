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

## API

### POST `/analyze-food`

**Request**
```json
{
  "text": "pizza with cheese and processed meat"
}
```

**Response**
```json
{
  "analysis": "High in saturated fats and sodium. Frequent consumption may increase cardiovascular risk..."
}
```

---

## Example

**Input**
```
instant noodles
```

**Output (excerpt)**
- Health concerns: High sodium and saturated fats
- Benefits: Quick energy and convenience
- Overall evaluation: Consume occasionally as part of a balanced diet
- Health score: 65/100

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