import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const BloombergTicker = () => {
  const items = [
    { label: "ריבית בנק ישראל", value: "4.50%", trend: "up" },
    { label: "פריים (Prime)", value: "6.67%", trend: "up" },
    { label: "מדד הדיור", value: "+0.4%", trend: "up" },
    { label: "שער יציג (USD)", value: "3.65₪", trend: "down" },
    { label: "תשואה ל-10 שנים", value: "4.12%", trend: "up" },
    { label: "אינפלציה שנתית", value: "3.2%", trend: "down" },
    { label: "מחיר דירה ממוצע", value: "1.8M₪", trend: "up" },
    { label: "נקודות זיכוי", value: "2.60", trend: "flat" },
  ];

  return (
    <div className="w-full bg-[#0B1120] border-b border-slate-800 overflow-hidden py-2 relative z-40">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-6 text-xs md:text-sm font-mono font-bold text-slate-300">
            <span className="uppercase tracking-wider text-slate-500">{item.label}</span>
            <span className="text-white">{item.value}</span>
            {item.trend === 'up' && <TrendingUp className="w-3 h-3 text-[#22c55e]" />}
            {item.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-500" />}
            {item.trend === 'flat' && <Activity className="w-3 h-3 text-blue-400" />}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BloombergTicker;