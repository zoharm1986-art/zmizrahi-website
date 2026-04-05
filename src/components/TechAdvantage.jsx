import React from 'react';
import { Cpu, ShieldCheck, Zap, Trophy } from 'lucide-react';

const TechAdvantage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#22c55e]" />,
      title: "מהירות על-אנושית",
      desc: "במקום לחכות ימים לתשובה מהבנק, האלגוריתמים שלנו בודקים עבורך את כל האפשרויות תוך דקות בודדות."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "שקיפות מלאה",
      desc: "אין אותיות קטנות. אתה רואה בדיוק כמה תשלם, מתי ולמי. אנחנו מאמינים שאמון בונים עם אמת."
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "בינה מלאכותית פיננסית",
      desc: "המערכת שלנו לומדת את מגמות השוק ומתריעה בפנינו לפני שינויי ריבית, כדי שתמיד תהיה צעד אחד לפני כולם."
    },
    {
      icon: <Trophy className="w-8 h-8 text-gold-500" />,
      title: "ניסיון של אלפי משפחות",
      desc: "הטכנולוגיה שלנו מבוססת על ניתוח של אלפי מקרי משכנתא, מה שמאפשר לנו לדעת מראש מה יעבוד בשבילך."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f0f2f5] to-[#e2e8f0] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">למה דווקא <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">זוהר מזרחי?</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">כי בעולם של היום, יועץ משכנתאות חייב להיות גם מהנדס נתונים. הנה מה שמבדיל אותנו:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="mb-6 p-4 bg-slate-800 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechAdvantage;