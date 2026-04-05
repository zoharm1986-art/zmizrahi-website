import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Calculator as CalcIcon, TrendingUp, ShieldCheck, ArrowLeft } from 'lucide-react';

const Calculator = () => {
  const [price, setPrice] = useState(2000000);
  const [equity, setEquity] = useState(500000);
  const [years, setYears] = useState(25);
  const [monthly, setMonthly] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const loan = price - equity;
    if (loan > 0) {
      const r = 0.052 / 12; // 5.2% average realistic
      const n = years * 12;
      const m = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthly(m);
      setTotalInterest((m * n) - loan);
    }
  }, [price, equity, years]);

  const loan = price - equity;
  const ltv = price > 0 ? (loan / price) * 100 : 0;

  // Data for Pie Chart
  const data = [
    { name: 'קרן', value: loan },
    { name: 'ריבית', value: totalInterest },
  ];
  const COLORS = ['#06b6d4', '#f59e0b'];

  return (
    <div id="calculator" className="glass-card p-6 md:p-10 max-w-6xl mx-auto relative overflow-hidden border-t border-bloomberg-accent/20">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-bloomberg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-bloomberg-neon/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Inputs Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-bloomberg-accent/20 rounded-xl border border-bloomberg-accent/30">
              <CalcIcon className="w-6 h-6 text-bloomberg-accent" />
            </div>
            <h2 className="text-2xl font-black text-white">בנה את התמהיל שלך</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-bloomberg-muted uppercase tracking-wider">מחיר הנכס</label>
                <span className="text-white font-mono text-sm">{(price / 1000000).toFixed(2)}M ₪</span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="5000000" 
                step="50000" 
                value={price} 
                onChange={e => setPrice(Number(e.target.value))} 
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-bloomberg-accent" 
                aria-label="מחיר הנכס"
              />
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-bloomberg-muted uppercase tracking-wider">הון עצמי</label>
                <span className="text-white font-mono text-sm">{(equity / 1000000).toFixed(2)}M ₪</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={price} 
                step="50000" 
                value={equity} 
                onChange={e => setEquity(Number(e.target.value))} 
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-bloomberg-neon" 
                aria-label="הון עצמי"
              />
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-bloomberg-muted uppercase tracking-wider">מסלול ליווי</label>
                <span className="text-white font-mono text-sm">{years} שנים</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="30" 
                step="1" 
                value={years} 
                onChange={e => setYears(Number(e.target.value))} 
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-white" 
                aria-label="תקופת ההלוואה"
              />
            </div>
          </div>
        </div>

        {/* Results & Chart Column */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-[#050505]/50 rounded-2xl p-6 border border-white/5">
          <div className="h-48 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded text-xs text-white font-mono">
                        {`${payload[0].name}: ${(payload[0].value / 1000000).toFixed(2)}M₪`}
                      </div>
                    );
                  }
                  return null;
                }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="block text-bloomberg-muted text-xs font-bold mb-1">החזר חודשי</span>
              <span className="text-3xl font-black mono-numbers text-white">{monthly.toFixed(0)} <span className="text-sm">₪</span></span>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="block text-bloomberg-muted text-xs font-bold mb-1">סה"כ ריבית</span>
              <span className="text-3xl font-black mono-numbers text-bloomberg-accent">{(totalInterest / 1000000).toFixed(2)} <span className="text-sm">M</span></span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-bloomberg-neon/10 p-4 rounded-xl border border-bloomberg-neon/20 mb-6">
            <TrendingUp className="w-5 h-5 text-bloomberg-neon mt-0.5" />
            <div>
              <h4 className="text-bloomberg-neon font-black text-sm">אופטימיזציה חכמה</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">עם תמהיל נכון אפשר להוריד את הריבית הממוצעת ב-0.4% ולחסוך עשרות אלפי שקלים.</p>
            </div>
          </div>

          <a href="tel:0536009599" className="btn-primary w-full flex items-center justify-center gap-2 group">
            רוצה תמהיל מותאם אישית? דבר איתי
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Calculator;