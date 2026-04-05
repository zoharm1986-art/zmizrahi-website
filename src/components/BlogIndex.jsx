import React from 'react';
import { BookOpen, ArrowRight, ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogIndex = () => {
  const articles = [
    {
      id: 'guide-2026',
      title: 'מדריך הזהב למשכנתא 2026',
      desc: 'כל מה שחייבים לדעת לפני שלוקחים משכנתא בעידן הריבית המשתנה. ניתוח מעמיק של המסלולים, הסיכונים וההזדמנויות.',
      date: 'ינואר 2026',
      readTime: '10 דקות קריאה',
      tag: 'מדריך מלא'
    },
    {
      id: 'prime-vs-fixed',
      title: 'פריים מול ריבית קבועה',
      desc: 'הדילמה הגדולה של כל לווי בישראל. מתי כדאי לצאת למסלול הפריים ומתי עדיף לנעול ריבית לטווח ארוך?',
      date: 'פברואר 2026',
      readTime: '8 דקות קריאה',
      tag: 'אסטרטגיה'
    },
    {
      id: 'purchase-tax',
      title: 'מס רכישה והתראות מס',
      desc: 'איך מחשבים מס רכישה ב-2026? מתי משלמים ואיך מגישים השגה. המדריך שישאיר לכם אלפי שקלים בכיס.',
      date: 'מרץ 2026',
      readTime: '6 דקות קריאה',
      tag: 'מיסוי'
    }
  ];

  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans pt-32 px-4 md:px-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">הבלוג <span className="text-bloomberg-accent">הפיננסי</span></h1>
          <p className="text-bloomberg-muted text-xl">ידע פיננסי ששובר שוק. בלי ספינים, רק תוצאות.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="glass-card p-8 group hover:border-bloomberg-accent/50 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-bloomberg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold bg-bloomberg-accent/10 text-bloomberg-accent px-3 py-1 rounded-full border border-bloomberg-accent/20">
                  {article.tag}
                </span>
                <div className="flex gap-4 text-bloomberg-muted text-xs">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
              </div>
              <h2 className="text-2xl font-black text-white mb-4 group-hover:text-bloomberg-accent transition-colors leading-tight">
                {article.title}
              </h2>
              <p className="text-bloomberg-muted leading-relaxed mb-8">
                {article.desc}
              </p>
              <a href={`/blog/${article.id}`} className="inline-flex items-center gap-2 text-bloomberg-neon font-bold group-hover:gap-3 transition-all">
                קרא את המאמר <ArrowLeft className="w-5 h-5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
