import React, { useState } from 'react';
import { Send, Trash2, Link as LinkIcon, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsAnalyzer = ({ onAnalyze, isLoading }) => {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  const handleAnalyze = () => {
    if (!text.trim() && !url.trim()) return;
    onAnalyze(text, url);
  };

  const handleClear = () => {
    setText('');
    setUrl('');
  };

  const loadSample = () => {
    setText("The shocking secret the government is hiding from you! This viral video proves everything is a lie. Experts say it could happen tomorrow and you need to act now before it's too late!");
  };

  return (
    <div id="analyzer" className="w-full max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 mt-8">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="h-6 w-6 text-primary-500" />
        <h2 className="text-2xl font-bold">Input Article</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            News URL (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LinkIcon className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="url"
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow outline-none"
              placeholder="https://example.com/news-article"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Article Content
          </label>
          <textarea
            rows="6"
            className="block w-full p-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow outline-none resize-y"
            placeholder="Paste the full news article text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="mt-2 text-xs text-right text-slate-500">
            {text.length} characters
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between pt-2">
          <button
            onClick={loadSample}
            className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
          >
            Load Sample News
          </button>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleClear}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              disabled={isLoading}
            >
              <Trash2 className="h-4 w-4" />
              Clear
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAnalyze}
              disabled={isLoading || (!text.trim() && !url.trim())}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send className="h-4 w-4" />
              Analyze
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAnalyzer;
