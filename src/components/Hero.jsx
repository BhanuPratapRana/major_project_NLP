import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-slate-50 to-slate-50 dark:from-primary-900/20 dark:via-slate-900 dark:to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Fake News Detection using <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">
              Explainable AI
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300">
            Analyze news articles and understand <span className="font-semibold text-primary-500 dark:text-primary-400">WHY</span> they are classified as fake or real. Our model provides full transparency into its decision-making.
          </p>
        </motion.div>

        <motion.div 
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            onClick={() => document.getElementById('analyzer').scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all hover:scale-105"
          >
            <Search className="h-5 w-5 group-hover:animate-pulse" />
            Analyze News
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
