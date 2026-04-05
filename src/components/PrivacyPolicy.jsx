import React from 'react';
import { ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">מדיניות פרטיות</h1>
        
        <div className="space-y-6 text-bloomberg-muted leading-relaxed text-lg">
          <p>
            ברוכים הבאים לאתר <strong className="text-white">zmizrahi.co.il</strong>. אנו רואים חשיבות עליונה בשמירה על פרטיות המבקרים באתר. 
            מדיניות הפרטיות שלהלן נועדה ליידע אותך כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">איסוף מידע</h2>
          <p>
            אנו עשויים לאסוף מידע אישי שאתה מספק מרצונך בעת מילוי טפסים באתר, כגון: שם מלא, מספר טלפון, כתובת אימייל ופרטים פיננסיים בסיסיים הנדרשים לצורך ייעוץ משכנתאות.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">שימוש במידע</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>מתן ייעוץ משכנתאות מקצועי ומותאם אישית.</li>
            <li>יצירת קשר לעדכונים שוטפים לגבי משכנתאות וריביות.</li>
            <li>שיפור חוויית המשתמש באתר.</li>
            <li>עמידה בדרישות החוק והרגולציה הפיננסית.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">שיתוף מידע</h2>
          <p>
            אנו איננו מוכרים, משכירים או משתפים את המידע האישי שלך עם גופים חיצוניים, למעט במקרים הנדרשים על פי חוק או לצורך מתן השירות (למשל, העברת פרטים לבנקים לצורך קבלת הצעות).
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">אבטחת מידע</h2>
          <p>
            אנו נוקטים באמצעי אבטחה פיזיים, אלקטרוניים וניהוליים מתקדמים כדי להגן על המידע האישי שלך מפני גישה לא מורשית, שינוי או חשיפה.
          </p>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-bloomberg-muted mb-4">לשאלות בנושא פרטיות: zohar@zmizrahi.co.il</p>
            <a href="/" className="inline-flex items-center gap-2 text-bloomberg-accent hover:text-white transition-colors font-bold">
              <ArrowRight className="w-5 h-5" /> חזרה לאתר הראשי
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;