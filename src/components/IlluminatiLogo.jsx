import React from 'react';

const IlluminatiLogo = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* The Golden Triangle */}
      <path d="M50 10 L90 85 L10 85 Z" stroke="#D4AF37" strokeWidth="3" fill="none" />
      
      {/* The Inner Triangle / Eye Frame */}
      <path d="M50 25 L75 75 L25 75 Z" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.7" />
      
      {/* The All-Seeing Eye */}
      <circle cx="50" cy="55" r="8" stroke="#D4AF37" strokeWidth="2" fill="#D4AF37" />
      <path d="M35 55 Q50 45 65 55" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M35 55 Q50 65 65 55" stroke="#D4AF37" strokeWidth="1.5" fill="none" />

      {/* The Letters ZM - Geometric Style */}
      <path d="M42 68 L58 68 L42 78 L58 78" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default IlluminatiLogo;