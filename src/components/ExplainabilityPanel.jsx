import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BookOpen } from 'lucide-react';

const ExplainabilityPanel = ({ result, text }) => {
  // Simple highlighter utility
  const getHighlightedText = (text, highlightWords) => {
    if (!text) return "No text provided for analysis.";
    
    // In a real app, you'd parse this more safely
    let highlightedText = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-200 font-semibold px-1 rounded">$1</span>`);
    });
    
    return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
          <Zap className="h-5 w-5 text-yellow-500" />
          <h3 className="text-lg font-bold">Top Influential Keywords</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {result.keywords.map((kw, i) => (
            <span key={i} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800">
              {kw}
            </span>
          ))}
        </div>

        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Sentence Level Analysis</h4>
        <div className="space-y-3">
          {result.sentenceScores.map((s, i) => (
            <div key={i} className="flex gap-3 text-sm p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <div className={`w-1.5 shrink-0 rounded-full ${s.score > 0.7 ? 'bg-red-500' : s.score > 0.4 ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">{s.sentence}</p>
                <p className="text-xs mt-1 font-mono text-slate-500">Risk Score: {(s.score * 100).toFixed(0)}%</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
          <BookOpen className="h-5 w-5 text-indigo-500" />
          <h3 className="text-lg font-bold">Text Highlight Map</h3>
        </div>
        <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed max-h-[400px] overflow-y-auto pr-2">
          {getHighlightedText(text, result.keywords)}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs text-slate-500">
          <div className="w-3 h-3 rounded bg-yellow-200 dark:bg-yellow-900/50 border border-yellow-300 dark:border-yellow-700"></div>
          <span>= Model Attention Area</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ExplainabilityPanel;
