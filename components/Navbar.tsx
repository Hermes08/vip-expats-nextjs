'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Sparkles, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { CONTENT } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

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
                { path: '/panama-real-estate', label: lang === 'es' ? 'Bienes Raíces' : 'Panama Real Estate' },
                { path: '/proyectos', label: t.nav.projects },
                { path: '/quiz', label: t.nav.quiz, icon: <Sparkles size={12} className="text-brand-GOLD" /> },
            ]
        },
        relocate: {
            label: t.nav.relocate,
            items: [
                { path: '/relocation', label: t.nav.relocationHub },
                { path: '/relocation/tours', label: t.nav.tours },
                { path: '/relocation/visas', label: t.nav.visas },
                { path: '/relocation/legal', label: t.nav.legal ? t.nav.legal : "Legal & Immigration" },
                { path: '/relocation/cost', label: t.nav.cost ? t.nav.cost : "Cost & Process" },
                { path: '/relocation/reviews', label: t.nav.reviews ? t.nav.reviews : "Reviews" },
                { path: '/relocation/guides', label: t.nav.guides },
            ]
        },
        media: {
            label: t.nav.media,
            items: [
                { path: '/blog', label: t.nav.blog },
                { path: '/podcast', label: t.nav.podcast },
            ]
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[rgba(7,10,20,0.86)] backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href={`/${lang}`} className="z-50 focus:outline-none group">
                        <span className="font-heading text-xl md:text-3xl font-black tracking-tighter transition-opacity group-hover:opacity-90">
                            <span className="text-brand-GOLD uppercase text-shadow-sm">PANAMA</span><span className="uppercase text-white text-shadow-sm">REALESTATESALE</span>
                        </span>
                    </Link>

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
                            <Link href={`/${lang}/contacto`} className={isActive('/contacto') ? 'text-brand-GOLD py-4' : 'hover:text-white transition-all py-4'}>{t.nav.contact}</Link>
                        </div>
                        <div className="flex items-center gap-6">
                            <LanguageSwitcher currentLang={lang} />
                            <Link href={`/${lang}/proyectos`} className="bg-brand-GOLD text-brand-950 px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 border-[4px] border-white/5 hover:bg-[#FCD34D] hover:border-white/10 transition-all shadow-lg hover:shadow-brand-GOLD/20">
                                <Search size={14} /> {t.nav.search}
                            </Link>
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
                    className="absolute top-full left-0 w-full h-[calc(100vh-80px)] overflow-y-auto bg-brand-950 shadow-2xl border-t border-white/5 p-8 flex flex-col gap-6 lg:hidden animate-in slide-in-from-top-4 duration-500"
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
                    <Link href={`/${lang}/contacto`} className={`text-2xl font-black uppercase tracking-tighter ${isActive('/contacto') ? 'text-brand-GOLD' : 'text-white'}`}>{t.nav.contact}</Link>

                    <div className="mt-auto py-8">
                        <Link href={`/${lang}/proyectos`} className="w-full bg-brand-GOLD text-brand-950 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl">
                            <Search size={20} /> {t.nav.search}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
