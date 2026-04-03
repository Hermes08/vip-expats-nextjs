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
    <div className="absolute inset-0 z-0 overflow-hidden bg-brand-950">
      {IMAGES.heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <img
            src={slide}
            alt={`Luxury Panama Real Estate Experience - Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay: darker at top (navbar area) and bottom, clear in the middle — keeps photo beautiful while text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/65" />
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
