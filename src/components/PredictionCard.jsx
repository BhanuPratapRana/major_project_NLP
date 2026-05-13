import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const PredictionCard = ({ result }) => {
  const isFake = result.prediction === "FAKE";
  const colorClass = isFake ? "text-red-500" : "text-green-500";
  const bgClass = isFake ? "bg-red-500/10 border-red-500/20" : "bg-green-500/10 border-green-500/20";
  const Icon = isFake ? AlertTriangle : CheckCircle;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card rounded-2xl p-6 relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-2 h-full ${isFake ? 'bg-red-500' : 'bg-green-500'}`}></div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between ml-4">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase text-sm">
            AI Prediction
          </p>
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full ${bgClass}`}>
              <Icon className={`h-8 w-8 ${colorClass}`} />
            </div>
            <h2 className={`text-5xl font-black tracking-tight ${colorClass}`}>
              {result.prediction}
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64" cy="64" r="56"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-slate-200 dark:text-slate-700"
              />
              <motion.circle
                cx="64" cy="64" r="56"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray="351.858"
                initial={{ strokeDashoffset: 351.858 }}
                animate={{ strokeDashoffset: 351.858 - (351.858 * result.confidence) }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`${colorClass}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {(result.confidence * 100).toFixed(0)}%
              </span>
              <span className="text-xs text-slate-500">Confidence</span>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 ml-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 flex gap-3 items-start border border-slate-200 dark:border-slate-700">
        <Info className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {result.explanation}
        </p>
      </div>
    </motion.div>
  );
};

export default PredictionCard;
