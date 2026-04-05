import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "כמה עולה הייעוץ הראשוני?",
      a: "הייעוץ הראשוני הוא **חינם וללא התחייבות**. אנחנו נפגשים, מנתחים את הנתונים שלך ומבינים איפה אפשר לחסוך. רק אם תחליט להתקדם, נדבר על שכר הטרחה."
    },
    {
      q: "האם אתה מייצג בנק מסוים?",
      a: "בתכלס? לא. אני מייצג **אותך**. יש לי גישה לכל הבנקים בישראל, ואני ניגש אליהם ומבקש הצעות תחרותיות כדי שתקבל את העסקה הכי טובה בשוק."
    },
    {
      q: "כמה זמן לוקח לקבל אישור עקרוני?",
      a: "בזכות המערכת הטכנולוגית שלי, אנחנו יכולים לקבל אישור עקרוני תוך **24 עד 48 שעות** ברוב המקרים, במקום לחכות שבועות כמו בעבר."
    },
    {
      q: "האם כדאי למחזר משכנתא ישנה?",
      a: "תלוי מאוד בנתונים שלך. לפעמים שינוי קטן בריבית או בתמהיל יכול לחסוך לך עשרות אלפי שקלים. בוא נעשה חישוב ונראה."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#f3f4f6]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 text-center mb-12">שאלות שכולם שואלים 🧐</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden mb-4 hover:border-[#9333ea]/30 transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-right font-black text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-[#9333ea]" /> : <ChevronDown className="text-slate-400" />}
              </button>
              
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-700 font-bold leading-relaxed border-t border-slate-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;