import React from 'react';
import { MessageCircle, Phone, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-white tracking-tighter">
            <span className="text-bloomberg-accent">ZM</span> Zohar Mizrahi
          </h3>
          <p className="text-bloomberg-muted text-sm leading-relaxed">
            ייעוץ משכנתאות אסטרטגי וטכנולוגי. אנחנו לא סוכנים, אנחנו הארכיטקטים הפיננסים שלך.
          </p>
          <div className="flex gap-4">
            {/* Facebook Link - Verified 2026 */}
            <a 
              href="https://www.facebook.com/zohar.mizrahi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 text-white hover:bg-[#1877F2] transition-all" 
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/972536009599" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-white hover:bg-[#25D366] transition-all" 
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">ניווט מהיר</h4>
          <ul className="space-y-3 text-sm text-bloomberg-muted">
            <li><a href="/" className="hover:text-bloomberg-accent transition-colors">ראשי</a></li>
            <li><a href="#calculator" className="hover:text-bloomberg-accent transition-colors">מחשבון משכנתא</a></li>
            <li><a href="#why-us" className="hover:text-bloomberg-accent transition-colors">למה אנחנו</a></li>
            <li><a href="/blog" className="hover:text-bloomberg-accent transition-colors">מדריכים ובלוג</a></li>
            <li><a href="#about" className="hover:text-bloomberg-accent transition-colors">אודות</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold mb-6">משפטי</h4>
          <ul className="space-y-3 text-sm text-bloomberg-muted">
            <li><a href="/privacy" className="hover:text-bloomberg-accent transition-colors">מדיניות פרטיות</a></li>
            <li><a href="/terms" className="hover:text-bloomberg-accent transition-colors">תנאי שימוש</a></li>
            <li><a href="/accessibility" className="hover:text-bloomberg-accent transition-colors">הצהרת נגישות</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6">צור קשר</h4>
          <ul className="space-y-4 text-sm text-bloomberg-muted">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-bloomberg-accent" />
              <a href="tel:0536009599" className="hover:text-white">053-600-9599</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-bloomberg-accent" />
              <a href="mailto:zohar@zmizrahi.co.il" className="hover:text-white">zohar@zmizrahi.co.il</a>
            </li>
            <li>
              <a 
                href="https://wa.me/972536009599" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#20bd5a] transition-colors font-bold mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> שלח הודעה בוואטסאפ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center">
        <p className="text-bloomberg-muted text-xs">
          &copy; {currentYear} זוהר מזרחי - יועץ משכנתאות. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
