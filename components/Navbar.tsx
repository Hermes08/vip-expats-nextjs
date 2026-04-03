'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Sparkles, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { CONTENT } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './ui/Magnetic';

const Navbar: React.FC = () => {
    const { lang } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const t = CONTENT[lang] || CONTENT['en'];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    const isActive = (path: string) => pathname === `/${lang}${path}` || pathname.startsWith(`/${lang}${path}/`);

    interface NavSubItem {
        path: string;
        label: string;
        icon?: React.ReactNode;
    }

    interface NavGroup {
        label: string;
        items: NavSubItem[];
    }

    const navItems: Record<string, NavGroup> = {
        invest: {
            label: t.nav.invest,
            items: [
                { path: '/propiedades', label: lang === 'es' ? 'Propiedades' : 'Properties' },
                { path: '/proyectos', label: t.nav.projects },
                { path: '/panama-real-estate', label: lang === 'es' ? 'Guía Inmobiliaria' : 'Real Estate Guide' },
                { path: '/quiz', label: t.nav.quiz, icon: <Sparkles size={12} className="text-brand-TEAL" /> },
            ]
        },
        guides: {
            label: lang === 'es' ? 'Guías' : 'Guides',
            items: [
                { path: '/blog', label: lang === 'es' ? 'Blog & Artículos' : 'Blog & Articles' },
                { path: '/guides/how-to-move-to-panama', label: lang === 'es' ? 'Cómo Mudarse a Panamá' : 'How to Move to Panama' },
                { path: '/guides/pensionado-visa-panama', label: lang === 'es' ? 'Visa Pensionado' : 'Pensionado Visa' },
                { path: '/guides/friendly-nations-visa-panama', label: lang === 'es' ? 'Visa Naciones Amigas' : 'Friendly Nations Visa' },
                { path: '/guides/cost-of-living-panama-2026', label: lang === 'es' ? 'Costo de Vida 2026' : 'Cost of Living 2026' },
            ]
        },
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-950/90 backdrop-blur-2xl border-b border-white/5 py-2 shadow-xl' : 'bg-gradient-to-b from-black/60 to-transparent py-4'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Magnetic strength={0.2}>
                        <Link href={`/${lang}`} className="z-50 focus:outline-none group">
                            <span className="font-heading text-xl md:text-3xl font-black tracking-tighter transition-opacity group-hover:opacity-90">
                                <span className="text-brand-GOLD uppercase">PANAMA</span><span className="uppercase text-white font-serif-luxury lowercase tracking-normal -ml-1">Sale</span>
                            </span>
                        </Link>
                    </Magnetic>

                    <div className="hidden lg:flex items-center gap-10">
                        <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-200">
                            {Object.entries(navItems).map(([key, group]) => (
                                <div
                                    key={key}
                                    className="relative group py-4"
                                    onMouseEnter={() => setActiveDropdown(key)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button className={`flex items-center gap-1 hover:text-white transition-all ${group.items.some(i => isActive(i.path)) ? 'text-brand-GOLD' : ''}`}>
                                        {group.label} <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                                    </button>

                                    <div className={`absolute top-full left-0 mt-0 w-56 bg-brand-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 origin-top ${activeDropdown === key ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                        <div className="py-2 bg-gradient-to-b from-white/5 to-transparent">
                                            {group.items.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    href={`/${lang}${item.path}`}
                                                    className={`flex items-center gap-3 px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors ${isActive(item.path) ? 'text-brand-GOLD' : 'text-gray-300'}`}
                                                >
                                                    {item.icon}
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Link href={`/${lang}/podcast`} className={isActive('/podcast') ? 'text-brand-GOLD py-4' : 'hover:text-white transition-all py-4'}>{lang === 'es' ? 'Podcast' : 'Podcast'}</Link>
                            <Link href={`/${lang}/contacto`} className={isActive('/contacto') ? 'text-brand-GOLD py-4' : 'hover:text-white transition-all py-4'}>{t.nav.contact}</Link>
                        </div>
                        <div className="flex items-center gap-6">
                            <LanguageSwitcher currentLang={lang} />
                            <Magnetic strength={0.3}>
                                <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-teal px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    <Search size={14} /> {lang === 'es' ? 'Ver Propiedades' : 'Properties'}
                                </Link>
                            </Magnetic>
                        </div>
                    </div>

                    <div className="flex lg:hidden items-center gap-4">
                        <LanguageSwitcher currentLang={lang} />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-GOLD rounded-lg"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="absolute top-full left-0 w-full h-[calc(100vh-80px)] overflow-y-auto bg-brand-950/95 backdrop-blur-3xl shadow-2xl border-t border-white/5 p-8 flex flex-col gap-6 lg:hidden animate-in slide-in-from-top-4 duration-500"
                >
                    {Object.entries(navItems).map(([key, group]) => (
                        <div key={key} className="flex flex-col gap-4">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                                className={`text-2xl font-black uppercase tracking-tighter flex items-center justify-between ${group.items.some(i => isActive(i.path)) ? 'text-brand-GOLD' : 'text-white'}`}
                            >
                                {group.label} <ChevronDown className={`transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                            </button>
                            {activeDropdown === key && (
                                <div className="flex flex-col gap-4 pl-4 border-l-2 border-brand-GOLD/20 ml-2 animate-in fade-in slide-in-from-left-2 transition-all">
                                    {group.items.map((item) => (
                                        <Link
                                            key={item.path}
                                            href={`/${lang}${item.path}`}
                                            className={`text-lg font-bold uppercase tracking-tight flex items-center gap-3 ${isActive(item.path) ? 'text-brand-GOLD' : 'text-gray-400'}`}
                                        >
                                            {item.icon}
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link href={`/${lang}/podcast`} className={`text-2xl font-black uppercase tracking-tighter ${isActive('/podcast') ? 'text-brand-GOLD' : 'text-white'}`}>Podcast</Link>
                    <Link href={`/${lang}/contacto`} className={`text-2xl font-black uppercase tracking-tighter ${isActive('/contacto') ? 'text-brand-GOLD' : 'text-white'}`}>{t.nav.contact}</Link>

                    <div className="mt-auto py-8">
                        <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-teal w-full px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3">
                            <Search size={20} /> {lang === 'es' ? 'Ver Propiedades' : 'Properties'}
                        </Link>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
