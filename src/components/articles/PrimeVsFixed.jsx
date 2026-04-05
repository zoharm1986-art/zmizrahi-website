import React from 'react';
import { ArrowRight, Scale, AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react';

const PrimeVsFixed = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans pt-32 px-4 md:px-8" dir="rtl">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="text-bloomberg-accent font-bold text-sm tracking-wider uppercase mb-2 block">אסטרטגיה פיננסית</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            פריים מול ריבית קבועה: <br />
            <span className="text-bloomberg-muted">הדילמה שתקבע את העתיד הכלכלי שלך</span>
          </h1>
          <div className="flex items-center gap-4 text-bloomberg-muted text-sm">
            <span>עודכן: פברואר 2026</span>
            <span>•</span>
            <span>זמן קריאה: 8 דקות</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-bloomberg-muted mb-8">
            זוהי השאלה הנשאלת ביותר בחדרי הישיבות של הבנקים. האם כדאי לצמד את גורלך לריבית הפריים התנודתית, 
            או לנעול שקט נפשי ל-10 שנים קדימה? התשובה, כמו תמיד בשוק ההון, תלויה בפרופיל הסיכון שלך.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-400" /> היתרון בפריים
          </h2>
          <p>
            ריבית הפריyme (כיום 5.50%) היא בדרך כלל הנמוכה בשוק. היתרון הגדול הוא הגמישות: 
            אתה יכול לפרוע את ההלוואה מוקדם יותר ללא עמלות פירעון מוקדם (בדרך כלל), וליהנות מירידות ריבית מיידיות.
          </p>

          <div className="bg-white/5 border-r-4 border-red-500 p-6 my-8 rounded-l-lg">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" /> הסיכון בפריים:
            </h3>
            <p className="text-sm">
              אם בנק ישראל יחליט להעלות ריבית בעתיד, ההחזר החודשי שלך יזנק מיד. 
              זה עלול ליצור "חור" בתקציב המשפחתי אם לא תהיה מוכן לכך.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-12 mb-4 flex items-center gap-2">
            <Scale className="text-bloomberg-neon" /> מתי לבחור בקבוע?
          </h2>
          <ul className="list-disc list-inside space-y-2 mr-4 text-bloomberg-muted">
            <li><strong>ודאות ותכנון:</strong> אתה יודע בדיוק כמה תשלם בכל חודש ב-10 השנים הקרובות.</li>
            <li><strong>הגנה מאינפלציה:</strong> אם הריבית תזנק ל-6% או 7%, אתה תמשיך לשלם את הריבית הנמוכה שסגרת.</li>
            <li><strong>ראש שקט:</strong> מתאים למי שמתקשה להתמודד עם שינויים חודשיים בהוצאות.</li>
          </ul>

          <h2 className="text-2xl font-black text-white mt-12 mb-4">התמהיל המנצח</h2>
          <p>
            ברוב המקרים, הפתרון האופטימלי הוא לא "או-או", אלא שילוב. 
            תמהיל מאוזן יכול לכלול 50% פריים לגמישות ו-50% קבוע ליציבות. 
            כך אתה נהנה מהטוב של שני העולמות ומגן על עצמך מפני תנודות קיצוניות.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 glass-card text-center border-t-4 border-t-bloomberg-neon">
          <h3 className="text-2xl font-black text-white mb-4">לא בטוח מה מתאים לך?</h3>
          <a href="https://wa.me/972536009599?text=היי זוהר, אשמח לעזרה בבחירת מסלול הריבית" className="btn-primary inline-block px-8 py-3 text-lg">בוא נבנה תמהיל מאוזן 💬</a>
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

export default PrimeVsFixed;
