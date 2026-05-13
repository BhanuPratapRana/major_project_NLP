import React from 'react';
import { motion } from 'framer-motion';
import { History, Clock, Trash2 } from 'lucide-react';

const HistoryPanel = ({ history, onClearHistory }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-12 mb-24">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <History className="h-6 w-6 text-slate-500" />
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Recent Analyses</h2>
        </div>
        <button 
          onClick={onClearHistory}
          className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 rounded-lg transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {history.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                item.result.prediction === 'FAKE' 
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' 
                  : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              }`}>
                {item.result.prediction}
              </span>
              <div className="flex items-center text-xs text-slate-400">
                <Clock className="h-3 w-3 mr-1" />
                {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
              {item.text || item.url}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;
