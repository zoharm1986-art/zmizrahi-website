import React from 'react';
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';

const RateTicker = () => {
  const rates = [
    { name: 'בנק ישראל הותיר ריבית על 4%', value: '🔴 עדכון', trend: 'stable' },
    { name: 'ביקורת על סבסוד משכנתאות', value: '📰 חדש', trend: 'up' },
    { name: 'ריבית הפריים הבנקאית', value: '6.10%', trend: 'down' },
    { name: 'ריבית ממוצעת ל-25 שנה', value: '5.85%', trend: 'down' }
  ];

  return (
    <div className="bg-slate-50 border-b border-slate-200 py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee gap-12 px-4">
        {[...rates, ...rates, ...rates].map((rate, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600">
            <span className="text-slate-500 uppercase tracking-wider">{rate.name}</span>
            <span className="text-white">{rate.value}</span>
            {rate.trend === 'up' && <TrendingUp className="w-4 h-4 text-red-500" />}
            {rate.trend === 'down' && <TrendingDown className="w-4 h-4 text-[#22c55e]" />}
            {rate.trend === 'stable' && <Minus className="w-4 h-4 text-slate-500" />}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RateTicker;