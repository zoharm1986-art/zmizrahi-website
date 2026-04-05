import React from 'react';
import { ArrowRight, Accessibility as AccessIcon, Phone, Mail } from 'lucide-react';

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans selection:bg-bloomberg-accent/30" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <div className="mb-12">
          <a href="/" className="inline-flex items-center gap-2 text-bloomberg-accent hover:text-white transition-colors mb-8">
            <ArrowRight className="w-5 h-5" /> חזרה לדף הבית
          </a>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">הצהרת נגישות</h1>
          <p className="text-bloomberg-muted">עודכן לאחרונה: אפריל 2026</p>
        </div>

        <div className="space-y-8 text-bloomberg-muted leading-relaxed">
          <section className="glass-card p-8 border-r-4 border-r-bloomberg-accent">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AccessIcon className="w-6 h-6 text-bloomberg-accent" />
              הצהרה כללית
            </h2>
            <p>
              אנו במשרד זוהר מזרחי יועץ משכנתאות מאמינים כי האינטרנט צריך להיות זמין ונגיש לכל אדם, 
              ללא קשר ליכולותיו הפיזיות או הקוגניטיביות. אנו שואפים להעניק חוויית גלישה נוחה ושוויונית 
              לכלל המשתמשים, תוך הקפדה על תקן הנגישות הישראלי ת"י 5568 והנחיות WCAG 2.0 ברמה AA.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">אמצעי נגישות באתר</h2>
            <ul className="list-disc list-inside space-y-3 mr-4">
              <li>תפריט נגישות המאפשר התאמת הגלישה (הגדלת טקסט, ניגודיות צבעים, עצירת אנימציות)</li>
              <li>ניווט באמצעות מקלדת (שימוש במקש Tab למעבר בין אלמנטים)</li>
              <li>תיוג אלמנטים בתגיות ARIA לקוראי מסך</li>
              <li>טפסים נגישים עם תיאורים ברורים לכל שדה</li>
              <li>אפשרות דילוג לתוכן הראשי ("Skip Navigation")</li>
              <li>עיצוב רספונסיבי המותאם למכשירים ניידים ולזום בדפדפן</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">התאמות שבוצעו</h2>
            <p className="mb-4">באתר זה בוצעו ההתאמות הבאות:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>שינוי גודל גופן ותצוגה</li>
              <li>מעבר בין דפי האתר באמצעות מקלדת</li>
              <li>הוספת תיאורים אלטרנטיביים לתמונות</li>
              <li>הבטחת ניגודיות צבעים תקנית</li>
              <li>מניעת הבהובים שעלולים לגרום לפרכוסים</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">דיווח על בעיות נגישות</h2>
            <p>
              אם נתקלתם בבעיית נגישות באתר או יש לכם הצעות לשיפור, נשמח מאוד לשמוע מכם. 
              אנו מחויבים לטפל בפניותיכם בהקדם האפשרי.
            </p>
            <div className="mt-6 p-4 bg-white/5 rounded-lg space-y-2">
              <p className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4 text-bloomberg-accent" />
                <strong>טלפון:</strong> 053-600-9599
              </p>
              <p className="flex items-center gap-2 text-white">
                <Mail className="w-4 h-4 text-bloomberg-accent" />
                <strong>אימייל:</strong> zohar@mizrahi.com
              </p>
            </div>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">חקיקה ותקנים</h2>
            <p>
              אתר זה עומד בדרישות חוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998 ותקנות שוויון זכויות 
              לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013. 
              כמו כן, אנו פועלים בהתאם להנחיות הנגישות הבינלאומיות WCAG 2.1 ברמה AA.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
