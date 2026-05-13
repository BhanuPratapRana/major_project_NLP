# Fake News Detection & Explainability System

This project is the frontend interface for a Major Project focusing on Fake News Detection using Explainable AI (XAI). It provides a modern, premium SaaS-like dashboard to input news articles or URLs and displays the classification (FAKE or REAL) alongside detailed AI explanations.

## 🚀 Features

- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion for a sleek, responsive design.
- **Explainability Dashboard**: Highlights influential keywords in the text and breaks down sentence-level risk scores.
- **Visual Analytics**: Interactive SHAP feature importance bars and confidence distribution charts using Recharts.
- **Dark/Light Mode**: Full theme support with a glassmorphism aesthetic.
- **Local History**: Automatically saves your recent analyses in the browser.

## 💻 Tech Stack

- **Framework**: React (via Vite)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## 🛠️ How to Run Locally

**Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BhanuPratapRana/major_project_NLP.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd major_project_NLP
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:** Visit `http://localhost:5173/` to view the application.

## 🔌 Connecting a Real Backend

Currently, this frontend uses a mock API service located at `src/services/api.js` to simulate a backend response. 

To connect this to your actual Python/ML backend:
1. Open `src/services/api.js`.
2. Replace the dummy logic with an actual `fetch` or `axios` POST request to your backend's endpoint (e.g., `http://localhost:5000/api/analyze`).
3. Ensure your Python backend returns a JSON object matching the structure expected by the frontend (prediction, confidence, explanation, keywords, sentenceScores, and featureImportance).
