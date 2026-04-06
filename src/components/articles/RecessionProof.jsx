import React from 'react';
import { ArrowRight, Shield, Anchor, AlertTriangle } from 'lucide-react';

const RecessionProof = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans pt-32 px-4 md:px-8" dir="rtl">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="text-bloomberg-accent font-bold text-sm tracking-wider uppercase mb-2 block">אסטרטגיה מתקדמת</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            הנדסת תמהיל למיתון: <br />
            <span className="text-bloomberg-muted">איך בונים משכנתא ששורדת סערות?</span>
          </h1>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-bloomberg-muted mb-8">
            מיתון זה לא סוף העולם — זה מבחן לחוסן הפיננסי שלך. תמהיל "רגיל" עלול להתנפץ מול אבטלה או ירידה בהכנסות. תמהיל "מהונדס" נועד לבלום זעזועים.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <Anchor className="text-bloomberg-neon" /> עקרונות הבטיחות
          </h2>
          <ul className="list-disc list-inside space-y-2 mr-4 text-bloomberg-muted">
            <li><strong>פיזור מסלולים (Diversification):</strong> לעולם אל תשים את כל הביצים בסל אחד. שלב קבוע, משתנה ופריים.</li>
            <li><strong>יחס החזר להכנסה סניטרי:</strong> במיתון, וודא שההחזר הוא לא יותר מ-25% מההכנסה הנטו, גם אם הבנק מאפשר לך 35%.</li>
            <li><strong>קרן חירום משכנתאית:</strong> שמור בצד סכום שיכול לכסות 6 החזרים חודשיים למקרה של משבר זמני.</li>
          </ul>

          <div className="bg-white/5 border-r-4 border-red-500 p-6 my-8 rounded-l-lg">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" /> טעות נפוצה:
            </h3>
            <p className="text-sm">
              לקיחת משכנתא מקסימלית כי "הבנק אישר". הבנק לא חי איתך, הוא רק רוצה את הריבית שלו. אתה צריך לחיות עם ההחזר.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-12 mb-4">השורה התחתונה:</h2>
          <p>
            משכנתא למיתון היא משכנתא שנותנת לך גמישות. אם משהו משתנה בחיים — אתה רוצה להיות מסוגל להתאים את עצמך בלי לקרוס.
          </p>
        </div>

        <div className="mt-16 p-8 glass-card text-center border-t-4 border-t-bloomberg-neon">
          <h3 className="text-2xl font-black text-white mb-4">בוא נבנה לך תמהיל "חסין כדורים".</h3>
          <a href="https://wa.me/972536009599" className="btn-primary inline-block px-8 py-3 text-lg">ייעוץ אסטרטגי 💬</a>
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

export default RecessionProof;
