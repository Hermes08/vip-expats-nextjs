'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Download, X, User, Mail, CheckCircle2, Star, BookOpen } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const StickyCTA: React.FC = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[100] transition-all duration-500 transform hover:scale-105">
            <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 bg-brand-50 text-white px-6 py-4 rounded-full shadow-[0_20px_50px_rgba(10,22,40,0.3)] border border-brand-800 font-bold uppercase tracking-widest text-xs hover:bg-brand-GOLD hover:text-brand-900 transition-all group"
            >
                <div className="bg-brand-GOLD p-2 rounded-full text-brand-900 group-hover:bg-brand-50 group-hover:text-brand-GOLD transition-colors">
                    <Phone size={16} fill="currentColor" />
                </div>
                <span>Call Us Now</span>
            </a>
        </div>
    );
};

export default StickyCTA;
