import React from 'react';
import { Helmet } from 'react-helmet-async';

const Guide2026 = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "מדריך משכנתא 2026 — כל מה שצריך לדעת",
    "author": {
      "@type": "Person",
      "name": "זוהר מזרחי",
      "url": "https://workspace-one-chi-78.vercel.app/"
    },
    "datePublished": "2026-04-05",
    "description": "המדריך המקיף ביותר ללקיחת משכנתא בישראל ב-2026. כל הטיפים, כל המסלולים ואיך לחסוך עשרות אלפי שקלים.",
    "publisher": {
      "@type": "Organization",
      "name": "זוהר מזרחי - יועץ משכנתאות",
      "logo": {
        "@type": "ImageObject",
        "url": "https://workspace-one-chi-78.vercel.app/favicon.ico"
      }
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>מדריך משכנתא 2026 | זוהר מזרחי</title>
        <meta name="description" content="המדריך המקיף ביותר ללקיחת משכנתא בישראל ב-2026. כל הטיפים, כל המסלולים ואיך לחסוך עשרות אלפי שקלים." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <article className="max-w-4xl mx-auto py-24 px-6 prose prose-slate prose-lg prose-p:text-slate-600 prose-headings:text-slate-900 prose-a:text-[#22c55e]">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">מדריך משכנתא 2026: איך לקחת את ההלוואה החכמה ביותר של חייכם</h1>
        
        <p className="lead text-xl text-slate-500 mb-10">
          לקיחת משכנתא היא ככל הנראה העסקה הכלכלית הגדולה ביותר שתעשו בחייכם. ב-2026, עם ריביות שמתנדנדות ושוק נדל"ן מאתגר, הידע הוא הכוח הכי גדול שלכם.
        </p>

        <h2>למה דווקא עכשיו?</h2>
        <p>שנת 2026 היא שנת מפנה. הבנקים חוזרים למרווחים נמוכים יותר (Spreads) לפני עדכון ריבית בנק ישראל צפוי, מה שיוצר חלון הזדמנויות של מספר חודשים בלבד.</p>

        <h2>תקנות בנק ישראל החדשות</h2>
        <ul>
          <li><strong>מקסימום 50%</strong> מההכנסה הפנויה להחזר המשכנתא.</li>
          <li><strong>מינימום 25%</strong> הון עצמי לרכישת דירה ראשונה.</li>
          <li><strong>לפחות שליש</strong> מהמשכנתא חייב להיות במסלול קבוע לא צמוד ל-10 שנים.</li>
        </ul>

        <h2>איך בונים תמהיל מנצח?</h2>
        <p>הסוד הגדול לא נמצא בריבית של הבנק, אלא בפיזור הסיכונים.</p>
        <p>תמהיל אופטימלי ב-2026 כולל שילוב של:</p>
        <ol>
          <li><strong>פריים (F Prime):</strong> מסלול גמיש שצמוד לריבית בנק ישראל. מצוין לתקופות ירידה.</li>
          <li><strong>קבוע לא צמוד:</strong> יציבות מוחלטת. אתם יודעים בדיוק כמה תשלמו גם בעוד 15 שנה.</li>
          <li><strong>משתנה צמוד:</strong> מסלול שמגיב לשוק ומאפשר גמישות לפעולות עתידיות.</li>
        </ol>

        <div className="bg-[#22c55e]/10 border border-[#22c55e] p-6 rounded-2xl my-10">
          <h3 className="text-[#22c55e] font-black text-2xl mb-4">הטיפ של זוהר 💡</h3>
          <p className="text-slate-800 font-bold">אל תסתכלו רק על הריבית הראשונית. תבדקו את הריבית הממוצעת לאורך כל תקופת ההלוואה. ריבית נמוכה בהתחלה (כמו קל"צ) יכולה "להתפוצץ" לכם בעוד 10 שנים.</p>
        </div>

        <h2>האם כדאי לעשות מכרז ריביות?</h2>
        <p>בהחלט כן. אל תיקחו את ההצעה הראשונה שהבנק נותן לכם. ברגע שאתם מביאים לבנק הצעה מתחרה, פתאום הריבית "יורדת" בלי בעיה.</p>

        <p className="text-slate-400 text-center mt-16">
          רוצים לבנות תמהיל משכנתא מותאם אישית? <a href="#contact" className="text-[#22c55e] font-bold underline">צרו איתי קשר עכשיו</a>.
        </p>
      </article>
    </>
  );
};

export default Guide2026;