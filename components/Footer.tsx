'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { CONTENT, CONTACT_INFO } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Magnetic from './ui/Magnetic';

const FOOTER_HEADINGS: Record<string, { navigation: string; globalAccess: string }> = {
    en: { navigation: 'Navigation', globalAccess: 'Global Access' },
    es: { navigation: 'Navegación', globalAccess: 'Acceso Global' },
    pt: { navigation: 'Navegação', globalAccess: 'Acesso Global' },
    de: { navigation: 'Navigation', globalAccess: 'Globaler Zugang' },
};

const Footer: React.FC = () => {
    const { lang } = useLanguage();
    const t = CONTENT[lang] || CONTENT['en'];
    const fh = FOOTER_HEADINGS[lang] || FOOTER_HEADINGS['en'];

    return (
        <footer className="bg-[color:var(--color-ink)] text-[color:var(--color-cream)] pt-16 pb-8 z-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--color-teal-edit)]/50 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Magnetic strength={0.2}>
                            <Link
                                href={`/${lang}`}
                                aria-label="PanamaRealEstateSale.com"
                                className="lg h-dark mb-8"
                                style={{ fontSize: 30 }}
                            >
                                <span className="p">Panama</span>
                                <span className="r">RealEstate</span>
                                <span className="g">Sale</span>
                                <span className="tld" style={{ fontSize: 25 }}>.com</span>
                            </Link>
                        </Magnetic>
                        <p className="lede lede-light max-w-sm mb-8 !text-base border-l border-[color:var(--color-teal-edit)]/40 pl-5 italic">{t.footer.about}</p>
                        <div className="flex gap-4">
                            <Magnetic strength={0.3}>
                                <a href="#" aria-label="Instagram" className="p-3.5 border border-white/15 rounded-full hover:bg-[color:var(--color-teal-edit)] hover:border-[color:var(--color-teal-edit)] text-white transition-all"><Instagram size={18} /></a>
                            </Magnetic>
                            <Magnetic strength={0.3}>
                                <a href="#" aria-label="Email" className="p-3.5 border border-white/15 rounded-full hover:bg-[color:var(--color-teal-edit)] hover:border-[color:var(--color-teal-edit)] text-white transition-all"><Mail size={18} /></a>
                            </Magnetic>
                        </div>
                    </div>
                    <div>
                        <h4 className="eyebrow eyebrow-light !text-[color:var(--color-teal-bright)] mb-5">{fh.navigation}</h4>
                        <ul className="space-y-3 text-white/70 text-sm font-medium">
                            <li><Magnetic strength={0.15}><Link href={`/${lang}/proyectos`} className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all text-brand-GOLD" /> {t.nav.projects}</Link></Magnetic></li>
                            <li><Magnetic strength={0.15}><Link href={`/${lang}/quiz`} className="hover:text-white transition-colors flex items-center gap-2 group text-[color:var(--color-teal-bright)]"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all text-brand-GOLD" /> {t.nav.quiz}</Link></Magnetic></li>
                            <li><Magnetic strength={0.15}><Link href={`/${lang}/relocation/tours`} className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all text-brand-GOLD" /> {t.nav.tours}</Link></Magnetic></li>
                            <li><Magnetic strength={0.15}><Link href={`/${lang}/blog`} className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all text-brand-GOLD" /> {t.nav.blog}</Link></Magnetic></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="eyebrow eyebrow-light !text-[color:var(--color-teal-bright)] mb-5">{fh.globalAccess}</h4>
                        <ul className="space-y-3 text-white/70 text-sm font-medium">
                            <li className="flex items-start gap-3"><Phone size={16} className="text-[color:var(--color-teal-bright)] shrink-0 mt-0.5" /> {CONTACT_INFO.displayPhone}</li>
                            <li className="flex items-start gap-3"><Mail size={16} className="text-[color:var(--color-teal-bright)] shrink-0 mt-0.5" /> {CONTACT_INFO.email}</li>
                            <li className="flex items-start gap-3"><MapPin size={16} className="text-[color:var(--color-teal-bright)] shrink-0 mt-0.5" /> {CONTACT_INFO.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="eyebrow eyebrow-light !text-white/50 !text-[10px]">&copy; {new Date().getFullYear()} PANAMAREALESTATESALE.COM · {t.footer.rights}</p>
                    <div className="flex gap-10">
                        <Link href={`/${lang}/admin`} className="opacity-20 hover:opacity-60 transition-all text-slate-600 text-[8px] uppercase tracking-widest">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
