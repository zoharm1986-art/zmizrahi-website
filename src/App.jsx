import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import MoneyCounter from './components/MoneyCounter';
import MarketDashboard from './components/MarketDashboard';
import AccessibilityWidget from './components/AccessibilityWidget';
import AccessibilityStatement from './components/AccessibilityStatement';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { useBOIData } from './hooks/useBOIData';
import { MessageCircle, BookOpen, ArrowRight } from 'lucide-react';

const GuidesSection = () => {
  const guides = [
    { title: "מדריך משכנתא 2026", desc: "כל מה שחייבים לדעת לפני שלוקחים משכנתא", tag: "חובה" },
    { title: "פריים או קבוע?", desc: "איך לבחור את המסלול שיתאים לראש שלך", tag: "פופולרי" },
    { title: "מס רכישה 2026", desc: "כמה באמת צריך לשלם למדינה וכדאי לדאוג לזה", tag: "חדש" },
    { title: "להוריד 500 ש\"ח מההחזר", desc: "טיפים מעשיים להורדת ההחזר החודשי", tag: "חסכון" },
    { title: "משכנתא להורים", desc: "איך עוזרים לדור הבא בלי להתמוטט כלכלית", tag: "משפחה" },
    { title: "מחיר למשתכן vs מחיר מטרה", desc: "ההבדלים הגדולים והמלכודות בדרך", tag: "נדל\"ן" },
  ];

  return (
    <section id="guides" className="py-20 px-4 md:px-8 bg-bloomberg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">המדריך <span className="text-bloomberg-accent">השלם</span></h2>
          <p className="text-bloomberg-muted">ידע הוא כוח — אל תלך לבנק בלי להבין את הכללים</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <div key={i} className="glass-card p-6 group hover:border-bloomberg-accent/50 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <BookOpen className="w-8 h-8 text-bloomberg-accent" />
                <span className="text-[10px] font-bold bg-white/10 px-2 py-1 rounded text-white">{g.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bloomberg-accent transition-colors">{g.title}</h3>
              <p className="text-bloomberg-muted text-sm mb-4">{g.desc}</p>
              <a 
                href="https://wa.me/972536009599?text=היי זוהר, קראתי את המדריך על " + g.title + " ואשמח לקבל עוד פרטים"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-bloomberg-neon text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                קרא עוד <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  const boiData = useBOIData();
  
  // Simple routing for legal pages
  const [page, setPage] = React.useState('home');

  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/privacy') setPage('privacy');
    else if (path === '/terms') setPage('terms');
    else if (path === '/accessibility') setPage('accessibility');
  }, []);

  if (page === 'privacy') return <PrivacyPolicy />;
  if (page === 'terms') return <TermsOfService />;
  if (page === 'accessibility') return <AccessibilityStatement />;

  return (
    <div className="min-h-screen bg-bloomberg-black text-bloomberg-text font-sans selection:bg-bloomberg-accent/30">
      <AccessibilityWidget />
      <Header boiData={boiData} />
      
      <main id="main-content">
        {/* Hero Section */}
        <section id="hero" className="relative pt-40 pb-20 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-bloomberg-accent/10 rounded-full blur-[120px]"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]">
              המשכנתא שלך. <br />
              <span className="text-gradient">בגרסה הבאה.</span>
            </h1>
            <p className="text-bloomberg-muted text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              אל תסתפק בריבית של הבנק. קבל תמהיל שובר שוק עם טכנולוגיה מתקדמת.
            </p>
            <div className="flex justify-center gap-4 mb-16">
              <a href="https://wa.me/972536009599" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg">ייעוץ חינם 💬</a>
              <a href="#guides" className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors font-bold text-lg">למדריך המלא</a>
            </div>
          </div>

          <div id="calculator" className="relative z-10">
            <Calculator />
          </div>
        </section>

        <section id="loss-meter">
          <MoneyCounter />
        </section>

        <section id="why-us" className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">למה <span className="text-bloomberg-accent">כולם</span> עוברים אלינו?</h2>
            <p className="text-bloomberg-muted text-lg mb-16">אנחנו לא סוכנים. אנחנו הארכיטקטים הפיננסים שלך.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🔧", title: "הנדסת ריבית", desc: "אנחנו לא רק לוקחים הצעות, אנחנו בונים תמהיל שמנטרל עליות ריבית עתידיות." },
                { icon: "📈", title: "מינוף נכון", desc: "הכסף של הבנק הוא הכלי הכי חזק שלך לבניית הון. בוא נלמד אותך להשתמש בו." },
                { icon: "🛡️", title: "הגנה משפטית", desc: "כל סעיף קטן בחוזה יכול לעלות לך עשרות אלפים. אנחנו דואגים שהבנק ישמור על הכללים." }
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 hover:-translate-y-2 transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-bloomberg-accent">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-bloomberg-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="market-dash">
          <MarketDashboard boiData={boiData} />
        </section>

        <section id="proof" className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-16">סיפורי הצלחה אמיתיים</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "500+", label: "משפחות מרוצות" },
                { val: "₪12M+", label: "חיסכון ללקוחות" },
                { val: "98%", label: "אחוזי הצלחה" },
                { val: "4.9⭐", label: "דירוג ממוצע" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-6xl font-black mono-numbers text-gradient mb-2">{stat.val}</div>
                  <div className="text-bloomberg-muted font-bold uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GuidesSection />

        <section id="about" className="py-20 px-4 md:px-8 bg-bloomberg-dark">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-8">למה דווקא זוהר מזרחי?</h2>
            <p className="text-xl text-bloomberg-muted mb-12 leading-relaxed">
              כי בעולם של היום, יועץ משכנתאות חייב להיות גם מהנדס נתונים. 
              אני משלב ניסיון בשטח עם כלים טכנולוגיים מתקדמים כדי להביא לכם את התוצאה הטובה ביותר.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["מהירות על-אנושית", "שקיפות מלאה", "בינה מלאכותית", "אלפי משפחות"].map((item, i) => (
                <div key={i} className="glass-card p-4 border border-bloomberg-accent/20">
                  <div className="text-bloomberg-accent font-bold text-lg">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a href="https://wa.me/972536009599" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl shadow-green-500/20 transition-transform hover:scale-110 active:scale-95 animate-bounce">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}

export default App;