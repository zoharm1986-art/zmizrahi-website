import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const MarketDashboard = () => {
  const rateData = [
    { month: 'ינו', rate: 4.25 },
    { month: 'פבר', rate: 4.25 },
    { month: 'מרץ', rate: 4.50 },
    { month: 'אפר', rate: 4.50 },
    { month: 'מאי', rate: 4.75 },
    { month: 'יונ', rate: 4.75 },
    { month: 'יול', rate: 4.50 },
    { month: 'אוג', rate: 4.50 },
    { month: 'ספט', rate: 4.50 },
    { month: 'אוק', rate: 4.25 },
    { month: 'נוב', rate: 4.25 },
    { month: 'דצמ', rate: 4.50 },
  ];

  const bankData = [
    { name: 'לאומי', rate: 5.9 },
    { name: 'הפועלים', rate: 6.1 },
    { name: 'דיסקונט', rate: 5.8 },
    { name: 'מזרחי', rate: 5.85 },
    { name: 'בינלאומי', rate: 6.0 },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-bloomberg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            דופק השוק <span className="text-bloomberg-neon">החי</span>
          </h2>
          <p className="text-bloomberg-muted text-lg">נתונים בזמן אמת מהשוק הפיננסי</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: "ריבית בנק ישראל", value: "4.50%", trend: "flat" },
            { label: "ריבית פריים", value: "6.67%", trend: "up" },
            { label: "מדד תשומות בנייה", value: "+2.1%", trend: "up" },
            { label: "תשואה ל-10 שנים", value: "4.12%", trend: "down" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 border-l-4 border-l-bloomberg-accent">
              <p className="text-bloomberg-muted text-xs font-bold uppercase tracking-wider mb-2">{item.label}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black mono-numbers text-white">{item.value}</span>
                {item.trend === 'up' && <TrendingUp className="w-6 h-6 text-red-500" />}
                {item.trend === 'down' && <TrendingDown className="w-6 h-6 text-green-500" />}
                {item.trend === 'flat' && <Activity className="w-6 h-6 text-bloomberg-neon" />}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interest Rate History */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-bloomberg-neon" />
              היסטוריית ריבית בנק ישראל
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} domain={[3, 6]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                  <Line type="monotone" dataKey="rate" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bank Comparison */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-bloomberg-accent" />
              השוואת ריביות ממוצעות (25 שנה)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bankData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} domain={[5, 7]} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                  />
                  <Bar dataKey="rate" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDashboard;