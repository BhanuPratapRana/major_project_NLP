import React from 'react';
import { motion } from 'framer-motion';
import { Search, BrainCircuit, FileSearch } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full border-t-2 border-primary-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-r-2 border-indigo-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <div className="h-20 w-20 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full shadow-inner">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <BrainCircuit className="h-8 w-8 text-primary-500" />
          </motion.div>
        </div>
      </div>
      <motion.p 
        className="mt-6 text-lg font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FileSearch className="h-5 w-5 animate-bounce" />
        Running XAI Models...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
