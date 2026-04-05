import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to avoid layout issues
  useEffect(() => {
    window.addEventListener('resize', () => setIsOpen(false));
    return () => window.removeEventListener('resize', () => setIsOpen(false));
  }, []);

  const navLinks = [
    { name: 'ראשי', href: '#' },
    { name: 'מחשבון', href: '#calculator' },
    { name: 'למה אנחנו', href: '#why-us' },
    { name: 'הצלחות', href: '#proof' },
    { name: 'מדריכים', href: '#guides' },
    { name: 'אודות', href: '#about' },
  ];

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 bg-bloomberg-accent text-black px-4 py-2 z-[100] font-bold rounded-lg">
        דלג לתוכן הראשי
      </a>

      {/* Bloomberg Ticker Bar */}
      <div className="bg-[#000000] border-b border-white/10 text-xs md:text-sm py-2 overflow-hidden relative z-50">
        <div className="flex animate-marquee gap-8 text-bloomberg-muted font-mono font-bold" dir="ltr">
          <span className="flex items-center gap-2">Bank of Israel Rate <span className="text-white">4.50%</span></span>
          <span className="flex items-center gap-2">Prime Rate <span className="text-green-400">6.67%</span></span>
          <span className="flex items-center gap-2">Housing Index <span className="text-bloomberg-accent">+0.4%</span></span>
          <span className="flex items-center gap-2">USD/ILS <span className="text-white">3.65₪</span></span>
          <span className="flex items-center gap-2">10Y Yield <span className="text-white">4.12%</span></span>
          <span className="flex items-center gap-2">Inflation <span className="text-red-400">+2.1%</span></span>
          {/* Duplicate for seamless loop */}
          <span className="flex items-center gap-2">Bank of Israel Rate <span className="text-white">4.50%</span></span>
          <span className="flex items-center gap-2">Prime Rate <span className="text-green-400">6.67%</span></span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-bloomberg-black/90 backdrop-blur-md border-b border-white/5 pt-10 md:pt-0' : 'bg-transparent pt-10 md:pt-0'}`} style={{ top: isScrolled ? '0' : '40px' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <a href="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2" aria-label="זוהר מזרחי - דף הבית">
            <span className="text-bloomberg-accent text-3xl animate-pulse-slow">ZM</span>
            <span className="hidden md:inline-block text-sm font-medium text-bloomberg-muted tracking-widest uppercase border-r border-white/20 pr-2 mr-2">Zohar Mizrahi</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-bloomberg-muted hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0536009599" className="text-white font-mono hover:text-bloomberg-accent transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> 053-600-9599
            </a>
            <a 
              href="https://wa.me/972536009599" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              ייעוץ חינם <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2"
            aria-label="תפריט ניווט"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-bloomberg-black border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-white py-2 border-b border-white/5">
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/972536009599" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-center mt-4"
            >
              ייעוץ חינם 💬
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;