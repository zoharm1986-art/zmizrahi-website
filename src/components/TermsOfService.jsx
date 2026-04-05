import React from 'react';
import { ArrowRight } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">תנאי שימוש</h1>
        
        <div className="space-y-6 text-bloomberg-muted leading-relaxed text-lg">
          <p>
            השימוש באתר <strong className="text-white">zmizrahi.co.il</strong> כפוף לתנאי השימוש המפורטים להלן. 
            עצם הגלישה באתר או שימוש בשירותיו מהווה הסכמה מלאה לתנאים אלו.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">כללי</h2>
          <p>
            האתר מספק מידע כללי בתחום המשכנתאות והפיננסים, וכן כולל כלים אינטראקטיביים כמו מחשבון משכנתא. 
            המידע באתר אינו מהווה ייעוץ משפטי או פיננסי מחייב, ומומלץ תמיד להיוועץ עם גורם מקצועי לפני קבלת החלטות כלכליות.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">קניין רוחני</h2>
          <p>
            כל זכויות היוצרים, סימני המסחר והקניין הרוחני באתר (לרבות עיצוב, טקסטים, תמונות, לוגו וקוד) שייכים לזוהר מזרחי ואין לעשות בהם שימוש ללא אישור מראש ובכתב.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">אחריות</h2>
          <p>
            האתר והשירותים המופיעים בו מסופקים "כפי שהם" (As Is). אין אנו נושאים באחריות לכל נזק ישיר או עקיף שייגרם כתוצאה מהסתמכות על המידע באתר או מהשימוש בו.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">שינויים בתנאים</h2>
          <p>
            אנו שומרים לעצמנו את הזכות לעדכן את תנאי השימוש מעת לעת. מומלץ לבדוק דף זה תקופתית.
          </p>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-bloomberg-muted mb-4">נערך לאחרונה: אפריל 2026</p>
            <a href="/" className="inline-flex items-center gap-2 text-bloomberg-accent hover:text-white transition-colors font-bold">
              <ArrowRight className="w-5 h-5" /> חזרה לאתר הראשי
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;