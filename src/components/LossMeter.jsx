import React, { useState, useEffect } from 'react';
import { AlertTriangle, Timer } from 'lucide-react';

const LossMeter = () => {
  const [loss, setLoss] = useState(0);
  
  // סימולציה של הפסד בזמן אמת (כמה עולה לך לחכות עכשיו)
  useEffect(() => {
    const interval = setInterval(() => setLoss(prev => prev + 1.5), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto glass-card p-8 text-center relative overflow-hidden group">
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-500/20 rounded-full animate-pulse-slow">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            כמה אתה <span className="text-red-500">מפסיד</span> כרגע?
          </h2>
          <p className="text-slate-400 mb-6 font-medium">
            בזמן שאתה קורא את השורה הזו, הריבית לוקחת ממך כסף.
          </p>

          <div className="text-6xl md:text-8xl font-black mono-numbers text-white tracking-tighter mb-4 flex items-center justify-center gap-2">
            <span>{loss.toFixed(2)}</span>
            <span className="text-2xl text-slate-500">₪</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-red-400 font-bold text-sm animate-pulse">
            <Timer className="w-4 h-4" />
            המונה מתעדכן בזמן אמת
          </div>
        </div>
      </div>
    </section>
  );
};

export default LossMeter;