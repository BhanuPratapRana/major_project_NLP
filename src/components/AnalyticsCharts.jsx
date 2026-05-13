import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PieChart, Pie } from 'recharts';
import { BarChart2, PieChart as PieChartIcon } from 'lucide-react';

const AnalyticsCharts = ({ result }) => {
  const COLORS = ['#0ea5e9', '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

  const confidenceData = [
    { name: 'Model Confidence', value: result.confidence * 100 },
    { name: 'Uncertainty', value: (1 - result.confidence) * 100 }
  ];

  const pieColors = result.prediction === 'FAKE' 
    ? ['#ef4444', '#f87171'] 
    : ['#22c55e', '#4ade80'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <BarChart2 className="h-5 w-5 text-primary-500" />
          <h3 className="text-lg font-bold">Feature Importance (SHAP values)</h3>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={result.featureImportance}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" opacity={0.5} />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="feature" 
                type="category" 
                axisLine={false} 
                tickLine={false}
                width={120}
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(226, 232, 240, 0.4)' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {result.featureImportance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <PieChartIcon className="h-5 w-5 text-indigo-500" />
          <h3 className="text-lg font-bold">Confidence Distribution</h3>
        </div>
        <div className="h-64 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={confidenceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {confidenceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                formatter={(value) => `${value.toFixed(1)}%`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-2">
          {confidenceData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pieColors[index % pieColors.length] }}></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsCharts;
