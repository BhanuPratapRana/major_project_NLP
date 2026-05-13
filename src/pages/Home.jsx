import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewsAnalyzer from '../components/NewsAnalyzer';
import PredictionCard from '../components/PredictionCard';
import ExplainabilityPanel from '../components/ExplainabilityPanel';
import AnalyticsCharts from '../components/AnalyticsCharts';
import HistoryPanel from '../components/HistoryPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import { analyzeNewsAPI } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [analyzedText, setAnalyzedText] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('newsHistory');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse history');
      }
    }
  }, []);

  const handleAnalyze = async (text, url) => {
    setIsLoading(true);
    setResult(null);
    setAnalyzedText(text || url); // In real app, you'd fetch the URL content
    
    try {
      const data = await analyzeNewsAPI(text, url);
      setResult(data);
      
      const newHistoryItem = { text, url, result: data, timestamp: new Date().toISOString() };
      const newHistory = [newHistoryItem, ...history].slice(0, 6);
      setHistory(newHistory);
      localStorage.setItem('newsHistory', JSON.stringify(newHistory));
      
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
    } catch (error) {
      console.error(error);
      alert('Analysis failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-400/10 blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/10 blur-[100px] pointer-events-none z-0"></div>

      <Navbar />
      
      <main className="flex-grow z-10">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <NewsAnalyzer onAnalyze={handleAnalyze} isLoading={isLoading} />

          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                exit={{ opacity: 0, height: 0 }}
                className="mt-12"
              >
                <LoadingSpinner />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {result && !isLoading && (
              <motion.div 
                id="results-section"
                initial={{ opacity: 0, y: 40 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mt-16 space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-2 bg-primary-500 rounded-full"></div>
                  <h2 className="text-3xl font-bold">Analysis Results</h2>
                </div>
                
                <PredictionCard result={result} />
                <ExplainabilityPanel result={result} text={analyzedText} />
                <AnalyticsCharts result={result} />
              </motion.div>
            )}
          </AnimatePresence>

          <HistoryPanel history={history} />
        </div>
      </main>
    </div>
  );
};

export default Home;
