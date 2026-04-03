'use client';

import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/lib/constants';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.heroSlides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-brand-950 overflow-hidden bg-mesh-glow">
      {IMAGES.heroSlides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${index === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105'}`}
        >
          <img 
            src={slide} 
            alt={`Luxury Panama Real Estate Experience - Slide ${index + 1}`} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/95 via-brand-950/20 to-brand-950" />
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
