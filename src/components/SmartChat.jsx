import React, { useState } from 'react';
import { MessageSquare, X, Send, ChevronRight } from 'lucide-react';

const SmartChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 'price', text: 'היי! 👋 אני זוהר. כמה שווה הנכס שאתה מתעניין בו?' },
    { id: 'equity', text: 'מצוין. וכמה הון עצמי עומד לרשותך?' },
    { id: 'goal', text: 'מה המטרה העיקרית שלך כרגע?', options: ['דירה ראשונה', 'מיחזור משכנתא', 'דירת השקעה', 'הורדת החזר'] }
  ];

  const handleAnswer = (val) => {
    setAnswers({ ...answers, [questions[step].id]: val });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1); // Final step
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl shadow-purple-600/40 hover:scale-110 transition-all flex items-center gap-2 animate-bounce"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="font-bold hidden md:inline">ייעוץ מהיר</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 z-50 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-bold">זמ</div>
              <div>
                <p className="text-white font-bold text-sm">זוהר מזרחי</p>
                <p className="text-[#22c55e] text-xs">מחובר עכשיו</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
          </div>

          {/* Body */}
          <div className="p-4 h-80 overflow-y-auto bg-slate-50 flex flex-col gap-4">
            <div className="bg-white p-3 rounded-2xl rounded-tr-none text-sm text-slate-700 shadow-sm self-start max-w-[85%]">
              {step < questions.length ? questions[step].text : "תודה רבה! קיבלתי את הנתונים. 📝 אני בודק אותם עכשיו ומחזור אליך ל-whatsapp עם תמהיל ראשוני within minutes."}
            </div>

            {step < questions.length && (
              <div className="flex flex-col gap-2 self-end w-full">
                {questions[step].options ? (
                  questions[step].options.map(opt => (
                    <button key={opt} onClick={() => handleAnswer(opt)} className="bg-white border border-slate-200 p-3 rounded-xl text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all flex justify-between items-center group">
                      {opt} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                    </button>
                  ))
                ) : (
                  <div className="flex gap-2">
                    <input 
                      type="number" 
                      placeholder="הכנס סכום..." 
                      className="w-full p-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#22c55e]"
                      onKeyDown={(e) => e.key === 'Enter' && handleAnswer(e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SmartChat;