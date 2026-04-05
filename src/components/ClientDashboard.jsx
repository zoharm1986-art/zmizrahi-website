import React, { useState } from 'react';
import { Lock, CheckCircle, Clock, TrendingUp, FileText } from 'lucide-react';

const ClientDashboard = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [code, setCode] = useState('');

  if (!isLogged) {
    return (
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
        <div className="max-w-md mx-auto px-6 relative z-10 text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            <Lock className="w-12 h-12 text-[#22c55e] mx-auto mb-6" />
            <h3 className="text-2xl font-black text-white mb-4">אזור לקוחות אישי</h3>
            <p className="text-slate-400 mb-8 text-sm">הזן את הקוד האישי שזוהר שלח לך כדי לראות את סטטוס התיק שלך בזמן אמת.</p>
            <input 
              type="text" 
              placeholder="הכנס קוד לקוח (למשל: ZMH-2026)" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white mb-4 text-center tracking-widest uppercase outline-none focus:border-[#22c55e] transition-all"
            />
            <button 
              onClick={() => setIsLogged(true)}
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-black py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              כניסה למערכת
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-black text-slate-900">תיק לקוח: <span className="text-[#22c55e]">משפחת כהן</span></h2>
          <button onClick={() => setIsLogged(false)} className="text-sm text-slate-500 hover:text-red-500">התנתקות</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="text-blue-500" />
              <h4 className="font-bold text-slate-700">סטטוס נוכחי</h4>
            </div>
            <p className="text-2xl font-black text-slate-900">בבדיקת בנקים</p>
            <p className="text-xs text-slate-400 mt-1">עודכן לפני 12 דקות</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-[#22c55e]" />
              <h4 className="font-bold text-slate-300">חיסכון מוערך</h4>
            </div>
            <p className="text-2xl font-black text-white">₪14,500</p>
            <p className="text-xs text-slate-400 mt-1">בהשוואה להצעה הראשונית</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-purple-500" />
              <h4 className="font-bold text-slate-700">זמן ממוצע</h4>
            </div>
            <p className="text-2xl font-black text-slate-900">4 ימים</p>
            <p className="text-xs text-slate-400 mt-1">עד לקבלת האישור הסופי</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 mb-8">ציר זמן של התיק</h3>
          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
            {[
              { title: 'פגישה ראשונית', date: '01/04/2026', done: true },
              { title: 'איסוף מסמכים', date: '02/04/2026', done: true },
              { title: 'הגשה לבנקים', date: '03/04/2026', done: true },
              { title: 'מכרז ריביות', date: 'מתבצע עכשיו...', active: true },
              { title: 'חתימה סופית', date: 'צפוי ב-10/04/2026' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className={`w-8 h-8 rounded-full border-4 z-10 flex items-center justify-center ${item.done ? 'bg-[#22c55e] border-[#22c55e]' : item.active ? 'bg-white border-[#22c55e] animate-pulse' : 'bg-slate-100 border-slate-200'}`}>
                  {item.done && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <div>
                  <h4 className={`font-bold ${item.active ? 'text-[#22c55e]' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientDashboard;