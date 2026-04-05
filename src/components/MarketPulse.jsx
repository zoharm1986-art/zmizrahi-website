import React, { useEffect, useState } from 'react';
import { TrendingUp, Activity, Home } from 'lucide-react';

const MarketPulse = () => {
  const [rate, setRate] = useState('4.50%'); // Placeholder, will be live soon
  const [trend, setTrend] = useState('stable'); // stable, up, down

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-3 h-3 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
          <h3 className="text-slate-900 font-black text-xl tracking-widest uppercase">דופק השוק החי</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bank of Israel Rate */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-center justify-between group hover:border-[#22c55e]/50 transition-all">
            <div>
              <p className="text-slate-400 text-sm font-bold mb-1">ריבית בנק ישראל</p>
              <p className="text-3xl font-black text-white">{rate}</p>
            </div>
            <Activity className={`w-10 h-10 ${trend === 'up' ? 'text-red-500' : 'text-[#22c55e]'} transition-colors`} />
          </div>

          {/* Market Trend */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-center justify-between group hover:border-blue-500/50 transition-all">
            <div>
              <p className="text-slate-400 text-sm font-bold mb-1">מגמת שוק הנדל"ן</p>
              <p className="text-xl font-bold text-slate-200">התאוששות איטית</p>
            </div>
            <TrendingUp className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" />
          </div>

          {/* Housing Starts */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-center justify-between group hover:border-purple-500/50 transition-all">
            <div>
              <p className="text-slate-400 text-sm font-bold mb-1">התחלות בנייה (חודשי)</p>
              <p className="text-3xl font-black text-white">2,840</p>
            </div>
            <Home className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPulse;