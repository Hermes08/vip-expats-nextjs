'use client';

import React, { useState } from 'react';
import { Download, CheckCircle2, ShieldCheck, Mail, BookOpen, Star } from 'lucide-react';
import { CONTENT, COUNTRIES } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

interface LeadMagnetProps {
    variant?: 'full' | 'sidebar';
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({ variant = 'full' }) => {
    const { lang } = useLanguage();
    const t = (CONTENT[lang]?.leadMagnet) || (CONTENT['en'].leadMagnet);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        intent: '',
        consent: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] rounded-[3rem] p-16 text-center">
                <div className="w-24 h-24 bg-brand-GOLD text-brand-900 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
                    <CheckCircle2 size={48} />
                </div>
                <h3 className="display-serif italic text-4xl text-[color:var(--color-ink)] mb-6">{t.success}</h3>
                <p className="eyebrow !text-brand-GOLD">A ROCKSTAR ADVISOR WILL REACH OUT MOMENTARILY.</p>
            </div>
        );
    }

    return (
        <section className="py-32 bg-[color:var(--color-cream)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-GOLD/8 rounded-full blur-[150px] -mr-64 -mt-64"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(14,42,43,0.25)] flex flex-col lg:flex-row">
                    {/* Visual Column */}
                    <div className="lg:w-1/2 bg-[color:var(--color-cream-soft)] p-16 flex flex-col justify-center relative overflow-hidden">
                        {/* Soft gold halo — pulse stripped by global editorial layer */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-GOLD/10 blur-[60px]"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex gap-1 mb-8 text-brand-GOLD">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>
                            <p className="eyebrow !text-[color:var(--color-teal-edit)] mb-6">
                                {t.socialProof}
                            </p>
                            <h3 className="display-serif text-4xl md:text-6xl text-[color:var(--color-ink)] mb-16 leading-[1.0]">
                                The Panama <br /> Investment <br /> <span className="italic text-brand-GOLD">Bible 2026.</span>
                            </h3>

                            {/* Book Experience */}
                            <div className="relative group mx-auto lg:mx-0 max-w-[320px]">
                                <div className="absolute inset-0 bg-brand-GOLD/30 rounded-2xl blur-2xl group-hover:blur-[60px] transition-all duration-700"></div>
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-l-[15px] border-brand-GOLD transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 h-[450px]">
                                    <div className="p-10 h-full flex flex-col justify-between bg-gradient-to-br from-white via-neutral-50 to-neutral-200">
                                        <div>
                                            <div className="w-16 h-1.5 bg-brand-50 mb-8"></div>
                                            <h4 className="text-3xl font-heading font-black text-brand-900 mb-6 leading-tight uppercase italic tracking-tighter">
                                                ULTIMATE GUIDE <br /> TO PANAMA.
                                            </h4>
                                            <p className="text-[10px] font-black text-brand-AMBER uppercase tracking-[0.3em]">RETIREMENT & ROI STRATEGIES</p>
                                        </div>
                                        <div className="flex justify-between items-end border-t border-black/10 pt-6">
                                            <span className="font-heading font-black text-sm tracking-tighter text-brand-900">EXPAT<br />ROCKSTARS.</span>
                                            <BookOpen size={32} className="text-brand-GOLD" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:w-1/2 p-16 md:p-20 flex flex-col justify-center">
                        <div className="max-w-md mx-auto w-full">
                            <span className="tag-mono !bg-brand-GOLD !text-brand-900 mb-8 shadow-md">
                                {t.freeBadge}
                            </span>
                            <h2 className="display-serif italic text-4xl md:text-5xl text-[color:var(--color-ink)] mb-10 leading-[1.0]">
                                {t.title}
                            </h2>

                            <ul className="space-y-5 mb-12">
                                {t.bullets.map((bullet: string, i: number) => (
                                    <li key={i} className="flex items-start gap-4 text-[color:var(--color-ink-soft)] font-normal text-base leading-relaxed">
                                        <CheckCircle2 size={22} className="text-[color:var(--color-teal-edit)] shrink-0 mt-1" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="lead-name" className="eyebrow !text-[color:var(--color-ink-mute)] ml-1 block">{t.formLabels.name}</label>
                                        <input
                                            id="lead-name"
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.12)] rounded-2xl focus:ring-2 focus:ring-[color:var(--color-teal-edit)] focus:border-[color:var(--color-teal-edit)] outline-none transition-all text-[color:var(--color-ink)] font-semibold"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lead-email" className="eyebrow !text-[color:var(--color-ink-mute)] ml-1 block">{t.formLabels.email}</label>
                                        <input
                                            id="lead-email"
                                            required
                                            type="email"
                                            className="w-full px-6 py-4 bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.12)] rounded-2xl focus:ring-2 focus:ring-[color:var(--color-teal-edit)] focus:border-[color:var(--color-teal-edit)] outline-none transition-all text-[color:var(--color-ink)] font-semibold"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-editorial btn-editorial-teal w-full !py-5 uppercase !tracking-[0.18em] flex items-center justify-center gap-4 mt-8"
                                >
                                    <Download size={20} /> {t.button}
                                </button>
                                <p className="text-center eyebrow !text-[color:var(--color-ink-mute)] mt-6">
                                    {t.buttonSub}
                                </p>
                            </form>

                            <div className="mt-16 pt-8 border-t border-[color:rgba(14,42,43,0.08)] flex flex-wrap justify-between gap-8">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck size={18} className="text-[color:var(--color-teal-edit)]" />
                                    <span className="eyebrow !text-[9px] !text-[color:var(--color-ink-mute)]">{t.trust.privacy}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-[color:var(--color-teal-edit)]" />
                                    <span className="eyebrow !text-[9px] !text-[color:var(--color-ink-mute)]">{t.trust.delivery}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;
