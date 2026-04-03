'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { CONTENT, CONTACT_INFO } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Magnetic from './ui/Magnetic';

const Footer: React.FC = () => {
    const { lang } = useLanguage();
    const t = CONTENT[lang] || CONTENT['en'];

    return (
        <footer className="bg-[#032F30] text-white pt-12 pb-8 z-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-TEAL/40 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    <div className="col-span-1 md:col-span-2">
                        <Magnetic strength={0.2}>
                            <Link href={`/${lang}`} className="font-heading text-4xl font-black tracking-tighter mb-8 block uppercase">
                                <span className="text-brand-GOLD">PANAMA</span> <span className="text-white font-serif-luxury lowercase tracking-normal -ml-2">Sale</span>
                            </Link>
                        </Magnetic>
                        <p className="text-teal-200/80 max-w-sm mb-6 text-sm font-medium leading-relaxed border-l-2 border-brand-TEAL/30 pl-5">{t.footer.about}</p>
                        <div className="flex gap-6">
                            <Magnetic strength={0.3}>
                                <a href="#" aria-label="Instagram" className="p-4 bg-white/10 rounded-2xl hover:bg-brand-TEAL/30 text-white transition-all transform hover:scale-110"><Instagram size={20} /></a>
                            </Magnetic>
                            <Magnetic strength={0.3}>
                                <a href="#" aria-label="Email" className="p-4 bg-white/10 rounded-2xl hover:bg-brand-TEAL/30 text-white transition-all transform hover:scale-110"><Mail size={20} /></a>
                            </Magnetic>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-brand-TEAL text-xs font-black uppercase tracking-[0.3em] mb-4">Navigation</h4>
                        <ul className="space-y-3 text-teal-200/70 text-xs font-black uppercase tracking-widest">
                            <li><Magnetic strength={0.15}><Link href={`/${lang}/proyectos`} className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Developments</Link></Magnetic></li>
                            <li><Magnetic strength={0.15}><Link href={`/${lang}/quiz`} className="hover:text-white transition-colors flex items-center gap-2 group text-brand-TEAL"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Neighborhood Quiz</Link></Magnetic></li>
                            <li><Magnetic strength={0.15}><Link href={`/${lang}/relocation/tours`} className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Relocation Tours</Link></Magnetic></li>
                            <li><Magnetic strength={0.15}><Link href={`/${lang}/blog`} className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Market Intelligence</Link></Magnetic></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-brand-TEAL text-xs font-black uppercase tracking-[0.3em] mb-4">Global Access</h4>
                        <ul className="space-y-3 text-teal-200/70 text-sm font-medium">
                            <li className="flex items-start gap-4"><Phone size={18} className="text-brand-TEAL shrink-0" /> {CONTACT_INFO.displayPhone}</li>
                            <li className="flex items-start gap-4"><Mail size={18} className="text-brand-TEAL shrink-0" /> {CONTACT_INFO.email}</li>
                            <li className="flex items-start gap-4"><MapPin size={18} className="text-brand-TEAL shrink-0" /> {CONTACT_INFO.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-teal-200/50 text-[9px] font-black uppercase tracking-[0.4em] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p>&copy; {new Date().getFullYear()} PANAMAREALESTATESALE. {t.footer.rights}</p>
                    <div className="flex gap-10">
                        <Link href={`/${lang}/admin`} className="opacity-20 hover:opacity-60 transition-all text-slate-600 text-[8px]">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
