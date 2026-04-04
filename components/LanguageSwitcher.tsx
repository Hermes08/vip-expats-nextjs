'use client';

import React from 'react';
import { Language } from '@/lib/types';

interface Props {
    currentLang: Language;
    isMobile?: boolean;
}

import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher: React.FC<Props> = ({ currentLang, isMobile }) => {
    const router = useRouter();
    const pathname = usePathname();

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'es', label: 'ES' },
        { code: 'pt', label: 'PT' },
        { code: 'de', label: 'DE' }
    ];

    const handleLanguageChange = (newLang: string) => {
        const segments = pathname.split('/');
        segments[1] = newLang;
        router.push(segments.join('/'));
    };

    return (
        <div className={`flex items-center gap-3 font-black text-[10px] tracking-widest ${isMobile ? 'scale-110' : ''}`}>
            {languages.map((lang, index) => (
                <div key={lang.code} className="flex items-center">
                    <button
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`
                            transition-all duration-300
                            ${currentLang === lang.code
                                ? 'text-white border-b-2 border-brand-GOLD pb-0.5'
                                : 'text-slate-500 hover:text-white'}
                        `}
                        aria-label={`Switch to ${lang.label}`}
                    >
                        {lang.label}
                    </button>
                    {index < languages.length - 1 && (
                        <span className="ml-3 text-slate-700">/</span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
