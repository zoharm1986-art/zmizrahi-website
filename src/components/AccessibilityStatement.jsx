import React from 'react';
import { ArrowRight } from 'lucide-react';

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 flex items-center gap-4">
          הצהרת נגישות
        </h1>
        
        <div className="space-y-6 text-bloomberg-muted leading-relaxed text-lg">
          <p>
            אנו בחברת <strong className="text-white">זוהר מזרחי - ייעוץ משכנתאות</strong> מאמינים כי רשת האינטרנט צריכה להיות נגישה לכולם, לרבות לאנשים עם מוגבלויות. 
            אנו משקיעים מאמצים ניכרים על מנת להנגיש את האתר שלנו ולהפוך אותו לנגיש וידידותי ככל האפשר.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">סטנדרט נגישות</h2>
          <p>
            האתר עומד בדרישות תקנות שיוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013 ותקן ישראלי ת"י 5568 רמה AA.
            נגישות האתר נבדקה על ידי בודק נגישות מוסמך.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">התאמות שבוצעו באתר</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>האתר מוגדר כ- RTL (מימין לשמאל) עבור השפה העברית.</li>
            <li>באתר מותקן תפריט נגישות המאפשר התאמות לעיוורי צבעים, לקויי ראייה ומוגבלויות קוגניטיביות.</li>
            <li>כותרות האתר מסומנות באופן היררכי (H1, H2, H3) כדי לאפשר ניווט באמצעות קורא מסך.</li>
            <li>הטפסים באתר כוללים תוויות (Labels) ברורות לכל שדה קלט.</li>
            <li>האתר תומך בניווט באמצעות מקלדת בלבד (מקש Tab).</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">דיווח על מפגעי נגישות</h2>
          <p>
            אנו ממשיכים לשפר את נגישות האתר באופן שוטף. 
            במקרה ומצאתם באתר בעיית נגישות, אנו נשמח אם תעדכנו אותנו ונעשה מאמצים למצוא פתרון מתאים.
          </p>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 mt-4">
            <p className="font-bold text-white">פרטי קשר לדיווח:</p>
            <p>שם איש הקשר: זוהר מזרחי</p>
            <p>טלפון: 053-600-9599</p>
            <p>אימייל: zohar@zmizrahi.co.il</p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <a href="/" className="inline-flex items-center gap-2 text-bloomberg-accent hover:text-white transition-colors font-bold">
              <ArrowRight className="w-5 h-5" /> חזרה לאתר הראשי
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;