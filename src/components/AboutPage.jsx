import React from 'react';
import { Trophy, Users, Cpu, Heart } from 'lucide-react';
import ArtDecoLogo from './ArtDecoLogo';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto rounded-full bg-white p-2 mb-6 shadow-2xl flex items-center justify-center">
            <ArtDecoLogo className="w-24 h-24" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">היי, אני זוהר מזרחי</h1>
          <p className="text-xl text-slate-600">יועץ משכנתאות דיגיטלי | טכנולוגיה בשירות הכיס שלך</p>
        </div>

        {/* Story Section */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6">למה הקמתי את המרכז הזה?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            אחרי שנים של עבודה בתוך המערכת הפיננסית, ראיתי אותו תסריט חוזר על עצמו: אנשים טובים, זוגות צעירים ומשפרי דיור שיצאו מהבנקים עם משכנתאות יקרות מדי, רק כי הם לא ידעו את "חוקי המשחק".
          </p>
          <p className="text-slate-600 leading-relaxed">
            אני בן 40, ומבחינתי משכנתא היא לא רק ריבית – היא אסטרטגית חיים. החלטתי לשלב בין הניסיון האישי שלי לבין כלים טכנולוגיים מתקדמים, כדי לתת לך את הכוח Mול הבנקים.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-50 p-8 rounded-2xl text-slate-900 border border-slate-200">
            <Trophy className="w-10 h-10 text-[#22c55e] mb-4" />
            <h3 className="text-xl font-bold mb-2">מצוינות מקצועית</h3>
            <p className="text-slate-600 text-sm">אנחנו לא מתפשרים על פחות מהתמהיל האופטימלי ביותר עבורך.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl text-slate-900 border border-slate-200">
            <Cpu className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">חדשנות טכנולוגית</h3>
            <p className="text-slate-600 text-sm">שימוש באלגוריתמים ובינה מלאכותית לניתוח שוק בזמן אמת.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl text-slate-900 border border-slate-200">
            <Heart className="w-10 h-10 text-red-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">יחס אישי</h3>
            <p className="text-slate-600 text-sm">כל תיק הוא ייחודי. אנחנו מקשיבים לפני שאנחנו מחשבים.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl text-slate-900 border border-slate-200">
            <Users className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">קהילה ושקיפות</h3>
            <p className="text-slate-600 text-sm">ידע הוא כוח. אנחנו משתפים אותך בכל שלב בתהליך.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;