import React from 'react';
import { ArrowRight, Building, Percent, FileText } from 'lucide-react';

const InvestorMortgage = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans pt-32 px-4 md:px-8" dir="rtl">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="text-bloomberg-accent font-bold text-sm tracking-wider uppercase mb-2 block">נדל"ן להשקעה</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            משכנתא למשקיעים: <br />
            <span className="text-bloomberg-muted">המדריך המקיף לניצול כוח המינוף</span>
          </h1>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-bloomberg-muted mb-8">
            לקיחת משכנתא להשקעה שונה מהותית ממשכנתא לדיור ראשון. כאן המשחק הוא של תשואה (ROI), מסים וניהול סיכונים. אם אתה לא עושה את החשבון נכון — הדירה שלך הופכת מנכס מניב לנטל כבד.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <Building className="text-bloomberg-accent" /> כללי הברזל של המשקיע
          </h2>
          <ul className="list-disc list-inside space-y-2 mr-4 text-bloomberg-muted">
            <li><strong>הכרה במס רכישה:</strong> כיום מס הרכישה על דירה שנייה עומד על 8% משווי העסקה. זה משנה לחלוטין את כדאיות ההשקעה.</li>
            <li><strong>יכולת החזר מהשכירות:</strong> אל תסתמך רק על המשכורת שלך. ה"שוכר האידיאלי" שלך צריך לכסות לפחות 70-80% מההחזר החודשי.</li>
            <li><strong>ריבית למשקיעים:</strong> הבנקים לרוב גובים ריבית גבוהה יותר (פריים פלוס 1.5%-2%) על נכסים להשקעה.</li>
          </ul>

          <div className="bg-white/5 border-r-4 border-bloomberg-accent p-6 my-8 rounded-l-lg">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <Percent className="w-5 h-5 text-bloomberg-accent" /> טיפ הזהב של זוהר:
            </h3>
            <p className="text-sm">
              בדוק את האפשרות של "משכנתא עצמית" או מימון דרך חברות יזמיות. לפעמים, שילוב של הון עצמי עם אשראי חוץ-בנקאי משתלם יותר ממשכנתא קלאסית.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-12 mb-4">מתי זה משתלם?</h2>
          <p>
            השקעה בנדל"ן משתלמת כשיש לך אופק ראיה ארוך טווח (10+ שנים) וכשהתשואה השנתית נטו (לאחר מס ומשכנתא) גבוהה מ-4%. פחות מזה? אולי עדיף להשאיר את הכסף בשוק ההון.
          </p>
        </div>

        <div className="mt-16 p-8 glass-card text-center border-t-4 border-t-bloomberg-neon">
          <h3 className="text-2xl font-black text-white mb-4">מתכנן לקנות נכס להשקעה?</h3>
          <a href="https://wa.me/972536009599" className="btn-primary inline-block px-8 py-3 text-lg">בוא נעשה חישבון ROI 💬</a>
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

export default InvestorMortgage;
