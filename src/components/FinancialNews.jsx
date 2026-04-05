import React from 'react';
import { Newspaper, TrendingUp, ArrowUpRight, Clock } from 'lucide-react';

const FinancialNews = () => {
  const news = [
    {
      category: "שוק הנדל\"ן",
      title: "מחירי הדירות בישראל: האם הבועה מתפוצצת או שמדובר בתיקון בריא?",
      time: "לפני שעה",
      trend: "up"
    },
    {
      category: "ריבית",
      title: "בנק ישראל משאיר את הריבית ללא שינוי – מה המשמעות ללווים?",
      time: "לפני 3 שעות",
      trend: "stable"
    },
    {
      category: "השקעות",
      title: "התשואות במסלולים הירוקים מזנקות: האם זה הזמן להיכנס?",
      time: "לפני 5 שעות",
      trend: "up"
    },
    {
      category: "רגולציה",
      title: "רשות המסים משנה את כללי מס הרכישה – מי ייפגע?",
      time: "אתמול",
      trend: "down"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-slate-100 pb-8 mb-12">
           <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-8 bg-[#0047FF] rounded-sm"></div>
              <h2 className="text-4xl font-black text-slate-900">חדשות שוק חמות</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main News Feed */}
          <div className="lg:col-span-2 space-y-8">
             {news.map((item, i) => (
               <div key={i} className="group border-b border-slate-100 pb-8 last:border-0 cursor-pointer">
                 <span className={`text-xs font-black uppercase tracking-wider px-2 py-1 rounded-sm text-white mb-3 inline-block ${i % 2 === 0 ? 'bg-[#0047FF]' : 'bg-slate-900'}`}>{item.category}</span>
                 <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight group-hover:text-[#0047FF] transition-colors">{item.title}</h3>
                 <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.time}</span>
                    <span>על ידי צוות ביזפורטל-זוהר</span>
                 </div>
               </div>
             ))}
          </div>

          {/* Sidebar - Market Movers */}
          <div className="bg-slate-50 p-8 rounded-none border-l-4 border-[#0047FF]">
            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-widest">מדדים מובילים</h3>
            <ul className="space-y-4">
               <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-700">TA-125</span>
                  <span className="font-black text-[#22c55e]">+1.2% 📈</span>
               </li>
               <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-700">ריבית בנק ישראל</span>
                  <span className="font-black text-slate-900">4.50%</span>
               </li>
               <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-700">שער יציג</span>
                  <span className="font-black text-slate-900">3.65 ₪</span>
               </li>
            </ul>
            <button className="w-full mt-8 bg-slate-900 text-white font-black py-3 rounded-sm hover:bg-[#0047FF] transition-colors">
               למדור שוק ההון
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialNews;