'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Download, X, User, Mail, CheckCircle2, Star, BookOpen } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const StickyCTA: React.FC = () => {
    return (
        <div className="hidden sm:block fixed bottom-6 right-6 z-[100] transition-all duration-500 transform hover:scale-105">
            {/* Gold pulse ring */}
            <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full animate-ping opacity-40"
                style={{ backgroundColor: '#D4AF37' }}
            />
            <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="relative flex items-center gap-3 bg-brand-GOLD text-brand-950 px-6 py-4 rounded-full border border-brand-GOLD/30 font-bold uppercase tracking-widest text-xs hover:bg-amber-400 transition-all group neon-gold animate-neon-gold"
                style={{ animation: 'neon-gold-pulse 2.5s ease-in-out infinite' }}
            >
                <div className="bg-brand-950/15 p-2 rounded-full text-brand-950 group-hover:bg-brand-950/20 transition-colors">
                    <Phone size={16} fill="currentColor" />
                </div>
                <span>Call Us Now</span>
            </a>
        </div>
    );
};

export default StickyCTA;
