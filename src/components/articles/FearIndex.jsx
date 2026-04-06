import React from 'react';
import { ArrowRight, Thermometer, ShieldAlert, TrendingUp, Zap } from 'lucide-react';

const FearIndex = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans pt-32 px-4 md:px-8" dir="rtl">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="text-red-500 font-bold text-sm tracking-wider uppercase mb-2 block">פסיכולוגיה פיננסית</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            מדד הפחד של המשכנתאות 2026: <br />
            <span className="text-bloomberg-muted">מתי לצוד ומתי להתחבא?</span>
          </h1>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-bloomberg-muted mb-8">
            בשוק ההון קוראים לזה "מדד הפחד" (VIX). במשכנתאות, זה לא פחות קריטי. כשכולם בבהלה — הריביות עולות והבנקים נסגרים. כשכולם אדישים — נפתחים חלונות הזדמנות זהובים.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <Thermometer className="text-red-500" /> סימני אזהרה (פחד בשמיים)
          </h2>
          <ul className="list-disc list-inside space-y-2 mr-4 text-bloomberg-muted">
            <li><strong>כותרות על "משבר נדל"ן":</strong> כשמפחידים את הציבור, הבנקים מקשיחים תנאים.</li>
            <li><strong>ריבית בנק ישראל עולה בחדות:</strong> אות לכך שהמשק "מתחמם" מדי והבנקים מגיבים.</li>
            <li><strong>תורי ענק בסניפים:</strong> אם כולם רצים לקחת משכנתא עכשיו, כנראה שכבר מאוחר מדי.</li>
          </ul>

          <div className="bg-white/5 border-r-4 border-green-500 p-6 my-8 rounded-l-lg">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" /> מתי נכנסים? (אומץ משתלם)
            </h3>
            <p className="text-sm">
              כשיש "שקט תקשורתי" בנושא הנדל"ן, וכשהריבית יציבה או יורדת מעט. זה הזמן לנהל מו"מ קר ורגוע מול הבנקים.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-12 mb-4">האסטרטגיה של זוהר:</h2>
          <p>
            אל תיקח משכנתא מתוך פחד ("מה יקרה אם הריבית תעלה?"). קח משכנתא מתוך חישוב ("כמה זה עולה לי היום ואיך אני מגן על עצמי מחר").
            הבנקים orים על הרגש שלך. התפקיד שלי הוא לעורר אצלך את ההיגיון.
          </p>
        </div>

        <div className="mt-16 p-8 glass-card text-center border-t-4 border-t-bloomberg-neon">
          <h3 className="text-2xl font-black text-white mb-4">רוצה שנבדוק את "מדד הפחד" הנוכחי בשבילך?</h3>
          <a href="https://wa.me/972536009599" className="btn-primary inline-block px-8 py-3 text-lg">בדיקת כדאיות מהירה 💬</a>
        </div>
        
        <div className="mt-8">
          <a href="/blog" className="text-bloomberg-muted hover:text-white flex items-center gap-2">
            <ArrowRight className="w-4 h-4" /> חזרה לבלוג
          </a>
        </div>
      </article>
    </div>
  );
};

export default FearIndex;
