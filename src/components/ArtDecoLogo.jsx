import React from 'react';

const ArtDecoLogo = ({ size = 40 }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size} 
      className="block"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    >
      {/* Outer Frame - Sharp & Geometric */}
      <path d="M10 20 L50 5 L90 20 L90 80 L50 95 L10 80 Z" stroke="#C5A059" strokeWidth="2.5" fill="#0F172A" />
      
      {/* Inner Geometric Lines */}
      <path d="M20 25 L50 15 L80 25" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
      <path d="M20 75 L50 85 L80 75" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
      
      {/* The ZM Monogram - Art Deco Style */}
      <path d="M30 35 L70 35 L30 65 L70 65" stroke="#C5A059" strokeWidth="3.5" strokeLinecap="square" />
      
      {/* Decorative Diamonds */}
      <path d="M50 25 L55 30 L50 35 L45 30 Z" fill="#C5A059" />
      <path d="M50 65 L55 70 L50 75 L45 70 Z" fill="#C5A059" />
      
      {/* Vertical Lines for Stability */}
      <line x1="50" y1="10" x2="50" y2="25" stroke="#C5A059" strokeWidth="1" />
      <line x1="50" y1="75" x2="50" y2="90" stroke="#C5A059" strokeWidth="1" />
    </svg>
  );
};

export default ArtDecoLogo;