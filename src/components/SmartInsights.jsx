import React from 'react';
import { Shield, Zap, TrendingUp, Award } from 'lucide-react';

const SmartInsights = () => {
  const insights = [
    {
      title: "הנדסת ריבית",
      desc: "אנחנו לא רק לוקחים הצעות, אנחנו בונים תמהיל שמנטרל עליות ריבית עתידיות.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "מינוף נכון",
      desc: "הכסף של הבנק הוא הכלי הכי חזק שלך לבניית הון. בוא נלמד אותך להשתמש בו.",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "הגנה משפטית",
      desc: "כל סעיף קטן בחוזה יכול לעלות לך עשרות אלפים. אנחנו דואגים שהבנק ישמור על הכללים.",
      icon: <Shield className="w-6 h-6 text-green-400" />,
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            למה <span className="text-gradient">כולם</span> עוברים אלינו?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            אנחנו לא סוכנים. אנחנו הארכיטקטים הפיננסיים שלך.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartInsights;