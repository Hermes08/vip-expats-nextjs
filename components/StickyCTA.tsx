'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Download, X, User, Mail, CheckCircle2, Star, BookOpen } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const StickyCTA: React.FC = () => {
    return (
        <div className="hidden sm:block fixed bottom-6 right-6 z-[100] transition-all duration-500 transform hover:-translate-y-1">
            <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="relative flex items-center gap-3 bg-brand-GOLD text-brand-950 px-6 py-4 rounded-full shadow-[0_12px_30px_-8px_rgba(212,168,67,0.55)] hover:shadow-[0_18px_40px_-10px_rgba(212,168,67,0.7)] uppercase tracking-[0.18em] text-[11px] font-semibold transition-all group"
            >
                <div className="bg-brand-950/15 p-2 rounded-full text-brand-950 group-hover:bg-brand-950/25 transition-colors">
                    <Phone size={16} fill="currentColor" />
                </div>
                <span>Call Us Now</span>
            </a>
        </div>
    );
};

export default StickyCTA;
