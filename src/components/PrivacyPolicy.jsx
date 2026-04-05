import React from 'react';
import { ArrowRight, Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans selection:bg-bloomberg-accent/30" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <div className="mb-12">
          <a href="/" className="inline-flex items-center gap-2 text-bloomberg-accent hover:text-white transition-colors mb-8">
            <ArrowRight className="w-5 h-5" /> חזרה לדף הבית
          </a>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">מדיניות פרטיות</h1>
          <p className="text-bloomberg-muted">עודכן לאחרונה: אפריל 2026</p>
        </div>

        <div className="space-y-8 text-bloomberg-muted leading-relaxed">
          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-bloomberg-accent" />
              1. מבוא
            </h2>
            <p>
              אנו במשרד זוהר מזרחי יועץ משכנתאות ("המשרד") מקדישים חשיבות רבה לשמירה על פרטיותך. 
              מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, שומרים ומגינים על המידע האישי שלך 
              כאשר אתה מבקר באתר האינטרנט שלנו או משתמש בשירותינו.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-bloomberg-accent" />
              2. איסוף מידע
            </h2>
            <p className="mb-4">אנו אוספים את הסוגים הבאים של מידע:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>פרטים אישיים: שם מלא, מספר טלפון, כתובת אימייל</li>
              <li>מידע פיננסי: הכנסות, הוצאות, נתוני משכנתא קיימת או מבוקשת</li>
              <li>מידע טכני: כתובת IP, סוג דפדפן, נתוני גלישה</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-bloomberg-accent" />
              3. שימוש במידע
            </h2>
            <p className="mb-4">המידע שנאסף משמש למטרות הבאות:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>מתן ייעוץ משכנתאות מקצועי ומותאם אישית</li>
              <li>יצירת קשר לצורך תיאום פגישות ומעקב אחר בקשות</li>
              <li>שיפור חוויית המשתמש באתר</li>
              <li>שליחת עדכונים שיווקיים (במידה ונתת הסכמה לכך)</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-bloomberg-accent" />
              4. שיתוף מידע
            </h2>
            <p>
              אנו לא מוכרים, משכירים או משתפים את המידע האישי שלך עם צדדים שלישיים, 
              למעט במקרים הבאים: כאשר נדרש על פי דין, לצורך מתן השירותים שלנו (למשל, 
              העברת פרטים לבנקים לצורך קבלת הצעות), או כאשר נתת הסכמה מפורשת לכך.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. זכויותיך</h2>
            <p>על פי חוק הגנת הפרטיות, התשמ"א-1981, יש לך את הזכויות הבאות:</p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
              <li>הזכות לעיין במידע המוחזק עליך</li>
              <li>הזכות לתקן מידע שגוי</li>
              <li>הזכות למחוק מידע (בכפוף לחריגים בחוק)</li>
              <li>הזכות להתנגד לעיבוד מידע</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. יצירת קשר</h2>
            <p>
              לכל שאלה או בקשה בנוגע למדיניות הפרטיות, ניתן לפנות אלינו:
            </p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <p className="text-white font-bold">זוהר מזרחי יועץ משכנתאות</p>
              <p>טלפון: 053-600-9599</p>
              <p>אימייל: zohar@mizrahi.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
