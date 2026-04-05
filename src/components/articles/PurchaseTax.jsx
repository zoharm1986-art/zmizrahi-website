import React from 'react';
import { ArrowRight, Calculator, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

const PurchaseTax = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans pt-32 px-4 md:px-8" dir="rtl">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="text-bloomberg-accent font-bold text-sm tracking-wider uppercase mb-2 block">מיסוי נדל"ן</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            מס רכישה והתראות מס: <br />
            <span className="text-bloomberg-muted">איך לא לשלם למדינה יותר מדי</span>
          </h1>
          <div className="flex items-center gap-4 text-bloomberg-muted text-sm">
            <span>עודכן: מרץ 2026</span>
            <span>•</span>
            <span>זמן קריאה: 6 דקות</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-bloomberg-muted mb-8">
            מס הרכישה הוא אחד ההוצאות הגדולות ביותר ברכישת נכס. טעות קטנה בחישוב או בהגשה יכולה לעלות לך אלפי שקלים, 
            וחמור מכך – קנסות והצמדות למדד. בוא נעשה סדר בבלגן.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <Calculator className="text-bloomberg-accent" /> כמה באמת משלמים?
          </h2>
          <p>
            נכון ל-2026, מדרגות מס הרכישה מתעדכנות מעת לעת. לדירה ראשונה ישנו פטור משמעותי עד לסף מסוים (נכון לעכשיו כ-1.8 מיליון ש"ח, אך יש לבדוק עדכונים שוטפים). 
            מעבר לסף זה, משלמים אחוזים הולכים וגדלים עד ל-10% משווי הנכס.
          </p>

          <div className="bg-white/5 border-r-4 border-bloomberg-accent p-6 my-8 rounded-l-lg">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-bloomberg-accent" /> טיפ הזהב של זוהר:
            </h3>
            <p className="text-sm">
              אם אתה רוכש נכס להשקעה, וודא שאתה מנצל את מלוא הזכאויות שלך. 
              לעיתים, פיצול עסקאות או רכישה דרך חברה יכולות לחסוך לך עשרות אלפי שקלים במס.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <AlertTriangle className="text-red-500" /> מתי משלמים?
          </h2>
          <p>
            את תשלום מס הרכישה יש לשלם בתוך 50 יום מיום חתימת החוזה. 
            איחור בתשלום יגרור ריבית פיגורים והצמדה למדד, שהם גבוהים בהרבה מהריבית הרגילה במשק.
          </p>

          <ul className="list-disc list-inside space-y-2 mr-4 text-bloomberg-muted mt-6">
            <li><strong>הגשה עצמית:</strong> ניתן להגיש דיוון מקוון באתר רשות המיסים, אך דורש דיוק מרבי.</li>
            <li><strong>ייצוג מקצועי:</strong> במקרים מורכבים (כמו ירושות, פירוק שיתוף או רכישות זרות), מומלץ מאוד להיעזר במייצג.</li>
          </ul>

          <h2 className="text-2xl font-black text-white mt-12 mb-4">השגה על שומה</h2>
          <p>
            קיבלת שומת מס גבוהה מהצפוי? אל תרים ידיים. 
            ניתן להגיש השגה ולבקש הפחתה במס, במיוחד אם מדובר בנכס דופק, נכס להריסה או כל מצב אחר שפוגע בשווי השוק שלו.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 glass-card text-center border-t-4 border-t-bloomberg-neon">
          <h3 className="text-2xl font-black text-white mb-4">רוצה שנבדוק את הזכאויות שלך?</h3>
          <a href="https://wa.me/972536009599?text=היי זוהר, אשמח לבדיקת זכאות למס רכישה" className="btn-primary inline-block px-8 py-3 text-lg">בדיקת זכאות מהירה 💬</a>
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

export default PurchaseTax;
