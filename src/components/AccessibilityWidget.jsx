import React, { useState, useEffect } from 'react';
import { Accessibility, X, Eye, Type, Palette, Minimize, Volume2 } from 'lucide-react';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    readableFont: false,
    underlineLinks: false,
    negativeContrast: false,
    stopAnimations: false,
    voiceReader: false,
  });

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    // Apply High Contrast
    if (settings.highContrast) {
      body.classList.add('accessibility-high-contrast');
    } else {
      body.classList.remove('accessibility-high-contrast');
    }

    // Apply Large Text
    if (settings.largeText) {
      body.classList.add('accessibility-large-text');
    } else {
      body.classList.remove('accessibility-large-text');
    }

    // Apply Readable Font
    if (settings.readableFont) {
      body.style.fontFamily = 'Arial, sans-serif';
    } else {
      body.style.fontFamily = '';
    }

    // Apply Underline Links
    if (settings.underlineLinks) {
      body.classList.add('accessibility-underline-links');
    } else {
      body.classList.remove('accessibility-underline-links');
    }

    // Apply Negative Contrast
    if (settings.negativeContrast) {
      body.classList.add('accessibility-negative-contrast');
    } else {
      body.classList.remove('accessibility-negative-contrast');
    }

    // Stop Animations
    if (settings.stopAnimations) {
      const styleId = 'accessibility-stop-animations';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `* { animation: none !important; transition: none !important; }`;
        document.head.appendChild(style);
      }
    } else {
      const style = document.getElementById('accessibility-stop-animations');
      if (style) style.remove();
    }

  }, [settings]);

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-32 right-6 z-[9999] bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-black"
        aria-label="תפריט נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Widget Panel */}
      {isOpen && (
        <div className="fixed top-1/2 left-4 md:left-8 -translate-y-1/2 w-80 bg-white text-black rounded-2xl shadow-2xl z-[101] border-2 border-black p-6 animate-fade-in" dir="rtl">
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-xl font-black flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              תפריט נגישות
            </h2>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <button onClick={() => toggleSetting('highContrast')} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${settings.highContrast ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}>
              <span className="font-bold flex items-center gap-2"><Eye className="w-4 h-4" /> ניגודיות גבוהה</span>
              <div className={`w-4 h-4 rounded-full ${settings.highContrast ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            </button>

            <button onClick={() => toggleSetting('negativeContrast')} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${settings.negativeContrast ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}>
              <span className="font-bold flex items-center gap-2"><Palette className="w-4 h-4" /> ניגודיות שלילית</span>
              <div className={`w-4 h-4 rounded-full ${settings.negativeContrast ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            </button>

            <button onClick={() => toggleSetting('largeText')} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${settings.largeText ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}>
              <span className="font-bold flex items-center gap-2"><Type className="w-4 h-4" /> הגדלת טקסט</span>
              <div className={`w-4 h-4 rounded-full ${settings.largeText ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            </button>

            <button onClick={() => toggleSetting('readableFont')} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${settings.readableFont ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}>
              <span className="font-bold flex items-center gap-2"><Type className="w-4 h-4" /> פונט קריא</span>
              <div className={`w-4 h-4 rounded-full ${settings.readableFont ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            </button>

            <button onClick={() => toggleSetting('underlineLinks')} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${settings.underlineLinks ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}>
              <span className="font-bold flex items-center gap-2">קו תחתון לקישורים</span>
              <div className={`w-4 h-4 rounded-full ${settings.underlineLinks ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            </button>

            <button onClick={() => toggleSetting('stopAnimations')} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${settings.stopAnimations ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}>
              <span className="font-bold flex items-center gap-2"><Minimize className="w-4 h-4" /> עצירת אנימציות</span>
              <div className={`w-4 h-4 rounded-full ${settings.stopAnimations ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            </button>
          </div>

          <div className="mt-6 text-center border-t border-gray-200 pt-4">
            <p className="text-xs font-bold text-gray-800 mb-2">הצהרת נגישות</p>
            <p className="text-[10px] text-gray-500 leading-tight">
              האתר עומד בתקן ישראלי ת"י 5568 רמה AA.<br/>
              למידע נוסף קראו את <button className="text-blue-600 underline font-bold">הצהרת הנגישות המלאה</button>.
            </p>
            <p className="text-[10px] text-gray-400 mt-2">לדיווח על מפגעי נגישות: זוהר מזרחי | 053-600-9599</p>
          </div>
        </div>
      )}

      {/* Accessibility CSS Overrides */}
      <style jsx global>{`
        .accessibility-high-contrast {
          filter: grayscale(100%) contrast(1.5);
        }
        .accessibility-negative-contrast {
          filter: invert(100%);
        }
        .accessibility-large-text {
          font-size: 120% !important;
        }
        .accessibility-large-text * {
          font-size: 1.2em !important;
        }
        .accessibility-underline-links a {
          text-decoration: underline !important;
        }
        .accessibility-stop-animations * {
          animation: none !important;
          transition: none !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityWidget;