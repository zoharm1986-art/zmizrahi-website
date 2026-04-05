import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { PrimeVsFixed, PurchaseTax2026, LowerPayment, CommonMistakes, ParentsMortgage } from './BlogPosts';
import Guide2026 from './Guide2026';
import { useState } from 'react';

const Blog = () => {
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      id: 'guide',
      title: "מדריך משכנתא 2026",
      desc: "כל מה שצריך לדעת לפני שחותמים על הדירה של החיים.",
      component: <Guide2026 />
    },
    {
      id: 'prime',
      title: "פריים או קבוע?",
      desc: "איך בוחרים את המסלול הנכון כשהשוק משתגע?",
      component: <PrimeVsFixed />
    },
    {
      id: 'tax',
      title: "מס רכישה 2026",
      desc: "חישוב מדויק לפי סוג הדירה – אל תשלמו יותר מדי.",
      component: <PurchaseTax2026 />
    },
    {
      id: 'lower',
      title: "להוריד 500 ש\"ח מההחזר",
      desc: "טריקים שבנקאים לא יספרו לכם על תמהיל חכם.",
      component: <LowerPayment />
    },
    {
      id: 'mistakes',
      title: "טעויות נפוצות",
      desc: "הטעויות שעולות לזוגות הצעירים אלפי שקלים מיותרים.",
      component: <CommonMistakes />
    },
    {
      id: 'parents',
      title: "משכנתא להורים",
      desc: "איך עוזרים לילדים לקנות דירה בלי לסכן את הפנסיה?",
      component: <ParentsMortgage />
    },
    {
      id: 'price-for-resident',
      title: "מחיר למשתכן vs מחיר מטרה",
      desc: "איזו תוכנית באמת משתלמת לכם ב-2026?",
      component: <div className="text-center py-20">בקרוב...</div>
    }
  ];

  if (activePost) {
    return (
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <button onClick={() => setActivePost(null)} className="mb-8 flex items-center text-slate-600 hover:text-[#22c55e] font-bold">
            <span className="mr-2">→</span> חזרה לכל המדריכים
          </button>
          {posts.find(p => p.id === activePost)?.component}
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <BookOpen className="w-16 h-16 text-[#22c55e] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">המדריך השלם למשכנתאות</h2>
          <p className="text-xl text-slate-600">ידע ששווה זהב (או במקרה שלנו – אלפי שקלים).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} onClick={() => setActivePost(post.id)} className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#22c55e] transition-colors">{post.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{post.desc}</p>
              <div className="flex items-center text-[#22c55e] font-bold">
                קרא עוד <ArrowRight className="w-4 h-4 mr-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;