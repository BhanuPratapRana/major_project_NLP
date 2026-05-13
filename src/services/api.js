// Dummy data for frontend testing
export const analyzeNewsAPI = async (text, url) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Randomize a bit based on input length or randomly just to show dynamic behavior
  const isFake = Math.random() > 0.5;

  if (isFake) {
    return {
      prediction: "FAKE",
      confidence: 0.92,
      explanation: "This article was classified as fake because it contains emotionally manipulative language, unsupported claims, and suspicious source patterns.",
      keywords: ["shocking", "secret", "viral", "breaking"],
      sentenceScores: [
        { sentence: "The shocking secret the government is hiding from you!", score: 0.95 },
        { sentence: "This viral video proves everything is a lie.", score: 0.88 },
        { sentence: "Experts say it could happen tomorrow.", score: 0.65 }
      ],
      featureImportance: [
        { feature: "Emotional Language", value: 85 },
        { feature: "Source Credibility", value: 20 },
        { feature: "Claim Consistency", value: 45 },
        { feature: "Formatting Patterns", value: 75 }
      ]
    };
  } else {
    return {
      prediction: "REAL",
      confidence: 0.88,
      explanation: "The article uses objective language, cites verifiable sources, and aligns with known factual reporting patterns.",
      keywords: ["reported", "announced", "officials", "study"],
      sentenceScores: [
        { sentence: "Officials announced the new policy changes today.", score: 0.12 },
        { sentence: "The study was published in the Medical Journal.", score: 0.08 },
        { sentence: "Several factors contributed to the outcome.", score: 0.15 }
      ],
      featureImportance: [
        { feature: "Emotional Language", value: 15 },
        { feature: "Source Credibility", value: 90 },
        { feature: "Claim Consistency", value: 85 },
        { feature: "Formatting Patterns", value: 25 }
      ]
    };
  }
};
