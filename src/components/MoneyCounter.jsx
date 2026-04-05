import React, { useState, useEffect } from 'react';
import { AlertTriangle, Timer, MessageCircle } from 'lucide-react';

const MoneyCounter = () => {
  const [loss, setLoss] = useState(0);
  
  // Simulation: You lose ~20₪ per second on average mortgage (interest portion)
  useEffect(() => {
    const interval = setInterval(() => setLoss(prev => prev + 22.5), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-bloomberg-black"></div>
      
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center relative z-10 border-red-500/20">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/10 rounded-full animate-pulse-slow border border-red-500/30">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          כמה אתה <span className="text-red-500">מפסיד</span> כרגע?
        </h2>
        <p className="text-bloomberg-muted mb-8 text-lg font-medium max-w-2xl mx-auto">
          בזמן שאתה קורא את השורה הזו, הריבית לוקחת ממך כסף. כל רגע של המתנה עולה לך.
        </p>

        <div className="text-7xl md:text-9xl font-black mono-numbers text-white tracking-tighter mb-6 flex items-center justify-center gap-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
          <span>{Math.floor(loss).toLocaleString()}</span>
          <span className="text-3xl text-red-400">₪</span>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-red-400 font-bold text-sm mb-8 animate-pulse">
          <Timer className="w-4 h-4" />
          המונה מתעדכן בזמן אמת בהתבסס על ריבית ממוצעת
        </div>

        <a href="https://wa.me/972536009599" className="inline-flex items-center gap-2 bg-white text-black hover:bg-slate-200 font-black py-4 px-8 rounded-full transition-all">
          בוא נעצור את הדימום <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default MoneyCounter;