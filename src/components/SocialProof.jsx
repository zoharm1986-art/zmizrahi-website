import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "משפחת כהן",
      text: "זוהר פשוט הציל אותנו. חשבנו שכבר סגרנו עסקה, והוא מצא לנו תמהיל שחסך לנו 1,200 ש\"ח בחודש!",
      rating: 5
    },
    {
      name: "דניאל לוי",
      text: "מקצועיות ברמה אחרת. כל הצעד היה מחושב, והרגשנו שאנחנו בידיים הכי טובות שאפשר.",
      rating: 5
    },
    {
      name: "רוני ומיכאל",
      text: "השירות הכי אישי שקיבלנו. זוהר היה זמין לכל שאלה, גם בשעות לא שעות.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">סיפורי הצלחה אמיתיים</h2>
          <p className="text-slate-400 font-medium">מאות לקוחות כבר חסכו איתנו עשרות אלפי שקלים.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl flex flex-col relative group hover:border-[#9333ea]/30 transition-all">
              <Quote className="absolute top-6 left-6 text-slate-700 w-8 h-8 group-hover:text-[#9333ea]/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, starI) => (
                  <Star key={starI} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-6 flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9333ea] to-purple-900 flex items-center justify-center text-white font-black text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-[#22c55e] text-xs font-bold">לקוח מאומת ✅</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar - Mobile Friendly */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="glass-card p-4 text-center rounded-xl">
            <p className="text-3xl md:text-4xl font-black text-[#9333ea] mono-numbers">500+</p>
            <p className="text-slate-400 text-xs md:text-sm font-bold mt-1">משפחות מרוצות</p>
          </div>
          <div className="glass-card p-4 text-center rounded-xl">
            <p className="text-3xl md:text-4xl font-black text-[#22c55e] mono-numbers">₪12M+</p>
            <p className="text-slate-400 text-xs md:text-sm font-bold mt-1">חיסכון ללקוחות</p>
          </div>
          <div className="glass-card p-4 text-center rounded-xl col-span-2 md:col-span-1">
            <p className="text-3xl md:text-4xl font-black text-white mono-numbers">98%</p>
            <p className="text-slate-400 text-xs md:text-sm font-bold mt-1">אחוזי הצלחה</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;