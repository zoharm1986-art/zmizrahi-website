import React from 'react';
import { Thermometer } from 'lucide-react';

const MarketFearIndex = () => {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-700/50 p-8 text-center">
      <h3 className="text-xl font-black text-slate-300 mb-6 flex items-center justify-center gap-2">
        <Thermometer className="text-[#9333ea]" />
        מדד הפאניקה של השוק
      </h3>
      
      <div className="relative h-6 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-green-500 to-yellow-500"></div>
        <div className="absolute right-0 top-0 h-full w-[65%] bg-gradient-to-l from-red-500 to-orange-500"></div>
      </div>
      
      <div className="flex justify-between text-xs font-bold text-slate-400 mb-6">
        <span className="text-green-500">תקופת הזדמנויות 🟢</span>
        <span className="text-red-500">שוק לוהט 🔴</span>
      </div>

      <p className="text-slate-200 font-bold text-sm leading-relaxed">
        כרגע השוק נמצא ב<strong className="text-[#9333ea]">"אזור הזהב"</strong>. הריבית התייצבה והבנקים מחפשים ביקושים. זה הזמן שלך לקחת משא ומתן.
      </p>
    </div>
  );
};

export default MarketFearIndex;