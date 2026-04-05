import React from 'react';
import { ArrowRight, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans selection:bg-bloomberg-accent/30" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <div className="mb-12">
          <a href="/" className="inline-flex items-center gap-2 text-bloomberg-accent hover:text-white transition-colors mb-8">
            <ArrowRight className="w-5 h-5" /> חזרה לדף הבית
          </a>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">תנאי שימוש</h1>
          <p className="text-bloomberg-muted">עודכן לאחרונה: אפריל 2026</p>
        </div>

        <div className="space-y-8 text-bloomberg-muted leading-relaxed">
          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Scale className="w-6 h-6 text-bloomberg-accent" />
              1. הסכמה לתנאים
            </h2>
            <p>
              ברוך הבא לאתר זוהר מזרחי יועץ משכנתאות. השימוש באתר זה כפוף לתנאי השימוש המפורטים להלן. 
              עצם הגלישה באתר והשימוש בו מהווים הסכמה מלאה לתנאים אלו. אם אינך מסכים לתנאים, 
              אנא הימנע משימוש באתר.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-bloomberg-accent" />
              2. אחריות
            </h2>
            <p className="mb-4">
              האתר מספק מידע כללי בלבד ואינו מהווה ייעוץ משפטי או פיננסי מחייב. 
              המידע המוצג באתר, לרבות מחשבון המשכנתאות, נועד להמחשה בלבד.
            </p>
            <p>
              אנו משתדלים לעדכן את המידע באתר באופן שוטף, אולם איננו מתחייבים כי המידע 
              יהיה מדויק, עדכני או מלא בכל עת. השימוש במידע הוא על אחריות המשתמש בלבד.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. קניין רוחני</h2>
            <p>
              כל הזכויות באתר, לרבות עיצובו, תכניו, סימני המסחר והלוגו, שייכים לזוהר מזרחי יועץ משכנתאות 
              או לצדדים שלישיים שהעניקו רישיון לשימוש בהם. אין להעתיק, לשכפל או להפיץ כל חלק מהאתר 
              ללא אישור מראש ובכתב.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. התנהגות משתמשים</h2>
            <p className="mb-4">המשתמש מתחייב:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>לא להשתמש באתר למטרות בלתי חוקיות</li>
              <li>לא לנסות לפגוע בתקינות האתר או במערכות המחשוב</li>
              <li>לא להזין מידע כוזב או מטעה</li>
              <li>לכבד את זכויות הפרטיות של אחרים</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-bloomberg-accent" />
              5. ביטולים והחזרים
            </h2>
            <p>
              שירותי הייעוץ ניתנים בכפוף לתשלום מראש או בהתאם להסכם נפרד. 
              מדיניות הביטולים וההחזרים תפורט בהסכם ההתקשרות הספציפי עם כל לקוח.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. שינויים בתנאים</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן את תנאי השימוש מעת לעת. 
              השינויים ייכנסו לתוקף מרגע פרסומם באתר. מומלץ לבקר בדף זה מדי פעם 
              כדי להתעדכן בשינויים.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. יצירת קשר</h2>
            <div className="p-4 bg-white/5 rounded-lg">
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

export default TermsOfService;
