import React from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

const Guide2026 = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans pt-32 px-4 md:px-8" dir="rtl">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="text-bloomberg-accent font-bold text-sm tracking-wider uppercase mb-2 block">מדריך מלא</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            מדריך הזהב למשכנתא 2026: <br />
            <span className="text-bloomberg-muted">איך לנצח את הבנק במשחק שלו</span>
          </h1>
          <div className="flex items-center gap-4 text-bloomberg-muted text-sm">
            <span>עודכן: ינואר 2026</span>
            <span>•</span>
            <span>זמן קריאה: 10 דקות</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-bloomberg-muted mb-8">
            לקיחת משכנתא היא ככל הנראה העסקה הכלכלית הגדולה ביותר בחייכם. ב-2026, עם ריבית בנק ישראל סביב ה-4%, הכללים השתנו. 
            הבנקים מנסים לדחוף לכם מסלולים שנראים "בטוחים" אבל עולים לכם עשרות אלפי שקלים. זה הזמן לקחת שליטה.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <CheckCircle className="text-bloomberg-accent" /> 1. ההכנה הפיננסית (לפני שפונים לבנק)
          </h2>
          <p>
            לפני שאתם בכלל נכנסים לסניף, וודאו שיש לכם דוח צ'קים נקי והון עצמי של לפחות 25% משווי הנכס. 
            זכרו: הבנק בודק את "כושר ההחזר" שלכם, לא רק את ההכנסה הנוכחית.
          </p>

          <div className="bg-white/5 border-r-4 border-bloomberg-accent p-6 my-8 rounded-l-lg">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-bloomberg-accent" /> טיפ הזהב של זוהר:
            </h3>
            <p className="text-sm">
              אל תסתמכו רק על ההכנסה הבסיסית. תוסיפו לדוחות הכנסות משכירות, בונוסים שנתיים או הכנסות פסיביות. 
              כל 1,000 ש"ח נוספים בדוח יכולים להגדיל את גובה המשכנתא בצורה משמעותית.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <AlertTriangle className="text-red-500" /> 2. המלכודות הנפוצות ב-2026
          </h2>
          <ul className="list-disc list-inside space-y-2 mr-4 text-bloomberg-muted">
            <li><strong>ריבית משתנה כל 5 שנים ללא הצמדה:</strong> נשמע זול היום, אבל מסוכן מאוד אם הריבית תזנק.</li>
            <li><strong>עמלת פירעון מוקדם:</strong> וודאו שאתם מבינים איך היא מחושבת לפני שאתם חותמים.</li>
            <li><strong>ביטוח חיים כפול:</strong> אל תתנו לבנק למכור לכם ביטוח יקר. השוו הצעות מבחוץ.</li>
          </ul>

          <h2 className="text-2xl font-black text-white mt-12 mb-4">3. השלב הסופי: החתימה</h2>
          <p>
            אל תחתמו על הצעה ראשונה. קבלו לפחות 3 הצעות מבנקים שונים, ולכו איתן ליועץ חיצוני שיעשה לכם "הנדסת תמהיל".
            המטרה היא לא רק ריבית נמוכה, אלא גמישות שתאפשר לכם לשלם פחות לאורך כל חיי ההלוואה.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 glass-card text-center border-t-4 border-t-bloomberg-neon">
          <h3 className="text-2xl font-black text-white mb-4">רוצה שנבנה לך תמהיל מנצח?</h3>
          <a href="https://wa.me/972536009599" className="btn-primary inline-block px-8 py-3 text-lg">שלב ייעוץ אישי 💬</a>
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

export default Guide2026;
