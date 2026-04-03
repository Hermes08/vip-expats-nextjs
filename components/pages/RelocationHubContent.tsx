'use client';

import React from 'react';
import { Compass, ShieldCheck, Map, ArrowRight, Star, Home, Users, Briefcase, Heart, Building2, Scale, Globe, Zap, AlertTriangle, Hammer, Utensils, Tv, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const RelocationHubContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` }
    ];

    return (
        <div className="pt-24 min-h-screen bg-brand-950 text-white font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />

            <div className="max-w-7xl mx-auto px-4 mt-12 relative z-50">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Premium Hero Section: 3.0 Cinematic */}
            <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/5 bg-mesh-glow">
                <div className="absolute inset-0 z-0 scale-105 overflow-hidden">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.25, scale: 1 }}
                        transition={{ duration: 3, ease: 'easeOut' }}
                        src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1600&q=80"
                        alt="Aerial view of Panama City skyline, a primary destination for panama relocation tours"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <HeroTilt intensity={2}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-block px-6 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full backdrop-blur-md mb-12 shadow-[0_0_20px_theme(colors.brand.GOLD/0.1)]">
                                The Expat Gateway <span className="text-white">2026</span>
                            </span>
                            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black mb-12 leading-[0.8] tracking-tighter uppercase italic text-white">
                                THE PANAMA <br /> <span className="text-brand-GOLD">RELOCATION</span> <br /> MASTERCLASS
                            </h1>
                            <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed font-black mb-16 italic border-l-4 border-brand-GOLD/20 pl-12 opacity-90 font-serif-luxury tracking-normal">
                                Don't just move to Panama. <span className="text-white">Relocate with strategy.</span> Explore our elite <strong>relocation tours</strong> and master the <strong>pensionado visa</strong> with the world's #1 expat team.
                            </p>
                            <div className="flex flex-wrap gap-10">
                                <Magnetic strength={0.4}>
                                    <Link href={`/${lang}/relocation/tours`} className="btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center min-w-[240px]">
                                        BOOK DISCOVERY TOUR
                                    </Link>
                                </Magnetic>
                                <Magnetic strength={0.4}>
                                    <Link href={`/${lang}/relocation/visas`} className="btn-3d btn-3d-navy px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center min-w-[240px] gap-3">
                                        <PlayCircle size={18} className="text-brand-GOLD" /> VISA REQUIREMENTS
                                    </Link>
                                </Magnetic>
                            </div>
                        </motion.div>
                    </HeroTilt>
                </div>
            </section>

            {/* The 2026 Context: Why Relocate to Panama Now? */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1558449028-s549c1d27996?w=1000&q=80"
                            alt="The modern skyline of Panama City, a hub for expat panama living"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-transparent transition-all"></div>
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">Expat Panama</span> <br /> Explosion</h2>
                        <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                            <p>
                                In 2026, the global landscape has shifted, and <strong>living in panama</strong> has evolved from a "retirement secret" to a mainstream strategy for high-net-worth individuals, tech professionals, and families seeking a <strong>Plan B</strong>.
                            </p>
                            <p>
                                Why do people <strong>relocate to panama</strong>? It's not just the 0% foreign-source tax or the US dollar. It's the lifestyle. Whether it's the high-speed fiber internet in the mountains of Boquete or the elite beach clubs in Coronado, Panama offers a level of connectivity and luxury that outpaces almost every other <strong>relocation tour panama</strong> destination.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Three Pillars of Relocation */}
            <section className="py-14 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter">The 3 Pillars of <span className="text-brand-GOLD">Relocation</span></h2>
                        <p className="text-gray-500 text-lg uppercase tracking-widest font-black">Everything you need to relocate to Panama, categorized.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Pillar 1: Exploration */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="glass-card p-8 rounded-2xl border-white/5 hover:border-brand-GOLD/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-GOLD/5 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-brand-GOLD/10 transition-all"></div>
                            <Compass className="text-brand-GOLD mb-12" size={64} />
                            <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter italic leading-none">Discovery <br /> & Tours</h3>
                            <p className="text-slate-400 leading-relaxed mb-12 font-medium opacity-80">
                                Seeing is believing. Our <strong>panama relocation real estate tours</strong> are the ultimate filter. Walk the streets, meet the community, and find where you truly belong.
                            </p>
                            <ul className="space-y-6 mb-16">
                                <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-GOLD shadow-[0_0_10px_theme(colors.brand.GOLD)] group-hover:animate-ping"></div> VIP Experience
                                </li>
                                <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-GOLD shadow-[0_0_10px_theme(colors.brand.GOLD)] group-hover:animate-ping"></div> Regional Deep Dives
                                </li>
                            </ul>
                            <Magnetic strength={0.3}>
                                <Link href={`/${lang}/relocation/tours`} className="btn-3d btn-3d-gold px-6 py-3 rounded-xl font-black uppercase tracking-[0.3em] text-[9px] w-full text-center">
                                    EXPLORE TOURS
                                </Link>
                            </Magnetic>
                        </motion.div>

                        {/* Pillar 2: Residency */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="glass-card p-8 rounded-2xl border-white/5 hover:border-brand-GOLD/30 transition-all group relative overflow-hidden md:mt-24"
                        >
                            <ShieldCheck className="text-brand-GOLD mb-12" size={64} />
                            <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter italic leading-none">Legal <br /> & Residency</h3>
                            <p className="text-slate-400 leading-relaxed mb-12 font-medium opacity-80">
                                Navigate the legal maze with precision. From the <strong>pensionado visa</strong> to <strong>work permits</strong>, we ensure your residency is 100% compliant and professional.
                            </p>
                            <ul className="space-y-6 mb-16">
                                <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-GOLD shadow-[0_0_10px_theme(colors.brand.GOLD)] group-hover:animate-ping"></div> Legal HQ Access
                                </li>
                                <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-GOLD shadow-[0_0_10px_theme(colors.brand.GOLD)] group-hover:animate-ping"></div> Visa Comparison
                                </li>
                            </ul>
                            <Magnetic strength={0.3}>
                                <Link href={`/${lang}/relocation/legal`} className="btn-3d btn-3d-navy px-6 py-3 rounded-xl font-black uppercase tracking-[0.3em] text-[9px] w-full text-center">
                                    LEGAL HUB
                                </Link>
                            </Magnetic>
                        </motion.div>

                        {/* Pillar 3: Research */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="glass-card p-8 rounded-2xl border-white/5 hover:border-brand-GOLD/30 transition-all group relative overflow-hidden"
                        >
                            <Map className="text-brand-GOLD mb-12" size={64} />
                            <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter italic leading-none">Regional <br /> Research</h3>
                            <p className="text-slate-400 leading-relaxed mb-12 font-medium opacity-80">
                                Decisions made with data. Compare <strong>boquete highlands</strong> vs <strong>coronado beach</strong>. Get the truth on weather, safety, and healthcare.
                            </p>
                            <ul className="space-y-6 mb-16">
                                <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-GOLD shadow-[0_0_10px_theme(colors.brand.GOLD)] group-hover:animate-ping"></div> Cost Analysis
                                </li>
                                <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-GOLD shadow-[0_0_10px_theme(colors.brand.GOLD)] group-hover:animate-ping"></div> Weather Intelligence
                                </li>
                            </ul>
                            <Magnetic strength={0.3}>
                                <Link href={`/${lang}/relocation/guides`} className="btn-3d btn-3d-gold px-6 py-3 rounded-xl font-black uppercase tracking-[0.3em] text-[9px] w-full text-center">
                                    VIEW GUIDES
                                </Link>
                            </Magnetic>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lifestyle Ecosystem: Beyond the Visa */}
            <section className="py-14 bg-black rounded-3xl mx-4 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 p-20 opacity-5">
                    <Hammer size={200} />
                </div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The Lifestyle <br /><span className="text-brand-GOLD italic">Ecosystem</span></h2>
                            <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                                <p>
                                    Relocating to Panama is more than just getting a stamp in your passport. It's about building a new support system. From finding a reliable <strong>A/C technician in Coronado</strong> to discovering the best <strong>farm-to-table restaurants in Boquete</strong>, the logistics of daily life are where we excel.
                                </p>
                                <p>
                                    On our <strong>panama relocation tours</strong>, we don't just show you houses; we introduce you to the mechanics, the property managers, and the local business owners who make up our elite network.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="p-8 bg-brand-950 rounded-2xl border border-white/10 flex gap-6 items-start">
                                <Zap className="text-brand-GOLD shrink-0" size={32} />
                                <div>
                                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-2">Utility Care</h4>
                                    <p className="text-xs text-slate-400">A/C units need monthly filter checks and bi-annual deep cleans. We provide you with the vetted contacts to keep your <strong>panama electric bill</strong> low.</p>
                                </div>
                            </div>
                            <div className="p-8 bg-black text-white rounded-2xl flex gap-6 items-start">
                                <Utensils className="text-brand-GOLD shrink-0" size={32} />
                                <div>
                                    <h4 className="font-black uppercase tracking-widest text-[10px] text-brand-GOLD mb-2">Dining & Social</h4>
                                    <p className="text-xs text-slate-400">Whether you want a $5 "Menu del Dia" or a $100 tasting menu, we've cataloged the best-kept culinary secrets across the country.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Panama Relocation Video */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border-8 border-brand-950/5 shadow-[0_0_100px_rgba(0,0,0,0.1)]">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/9-LPE1R6bCo"
                        title="Living in Panama - VIP Relocation"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* The Demographic Shift: Who is the Expat Panama? */}
            <section className="py-14 bg-black rounded-3xl mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">The 2026 <span className="text-brand-GOLD">Expat</span> Profile</h2>
                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Who is actually moving to Panama today?</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-12 bg-brand-950 rounded-2xl border border-white/10">
                            <div className="w-12 h-12 bg-brand-GOLD text-brand-950 rounded-2xl flex items-center justify-center mb-8 font-black italic">01</div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">The Digital Maverick</h4>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                Entrepreneurs and remote workers using the <strong>panama visa for remote workers</strong> to escape high-tax jurisdictions while staying in the EST time zone. They prioritize high-speed internet and coworking communities.
                            </p>
                        </div>
                        <div className="p-12 bg-black text-white rounded-2xl">
                            <div className="w-12 h-12 bg-brand-GOLD text-brand-950 rounded-2xl flex items-center justify-center mb-8 font-black italic">02</div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">The FIRE Retiree</h4>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                Why wait until 65? The <strong>panama residency under 50</strong> paths through Friendly Nations and Qualified Investor visas are allowing a new generation to <strong>retire early to panama</strong> and live on half their previous budget.
                            </p>
                        </div>
                        <div className="p-12 bg-brand-950 rounded-2xl border border-white/10">
                            <div className="w-12 h-12 bg-brand-GOLD text-brand-950 rounded-2xl flex items-center justify-center mb-8 font-black italic">03</div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">The Heritage Family</h4>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                Families using the <strong>panama visa with children</strong> and <strong>three generation visa</strong> to bring their parents and kids into a safer, more traditional environment with world-class international schools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Anatomy of a VIP Panama Relocation Tour */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Anatomy of a <br /><span className="text-brand-GOLD">VIP Tour</span></h2>
                        <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                            <p>
                                Our <strong>panama relocation tours</strong> aren't just bus rides through the city. They are strategic deep-dives designed to answer the "What If?" questions that keep you awake at night.
                            </p>
                            <p>
                                Most <strong>panama relocation tours reviews</strong> focus on the scenery. We focus on the logistics. During your 5-day experience, we walk you through the bank account opening process, visit hospitals for <strong>panama healthcare for expats</strong> audits, and tour the most exclusive <strong>gated communities in coronado panama</strong>.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-8">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                                    <h5 className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Day 1-2</h5>
                                    <p className="text-[11px]">Metropolis Navigation & Banking Setup</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                                    <h5 className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Day 3-4</h5>
                                    <p className="text-[11px]">The Gold Coast (Coronado & Pacific Beaches)</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                                    <h5 className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Day 5</h5>
                                    <p className="text-[11px]">The Highlands (Boquete & Volcan Scouting)</p>
                                </div>
                                <div className="p-6 bg-brand-GOLD text-brand-950 border border-brand-GOLD rounded-3xl flex items-center justify-center text-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Custom <br /> VIP Option</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative aspect-square rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=1000&q=80"
                            alt="Expats exploring real estate in Panama during a relocation tour"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-24 bg-brand-GOLD rounded-3xl mx-4 text-brand-950">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-5xl font-black mb-2 italic">2,500+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/60">Families Relocated</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2 italic">15+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/60">Preferred Communities</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2 italic">100%</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/60">Visa Success Rate</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2 italic">$0</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/60">Unexpected Mistakes</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Relocation Mistakes Section (SEO Deep Dive) */}
            <section className="py-14 bg-black border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-GOLD rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-2/3">
                            <h2 className="text-4xl md:text-6xl font-heading font-black mb-12 uppercase tracking-tighter italic">10 Fatal <span className="text-brand-GOLD">Relocation Mistakes</span> to Avoid</h2>

                            <div className="space-y-16 text-lg text-slate-400 leading-relaxed font-medium">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight italic flex items-center gap-4">
                                        <span className="text-brand-GOLD text-4xl">01</span> Buying Property on Day One
                                    </h3>
                                    <p>
                                        The biggest mistake <strong>american retirees in panama</strong> make is rushing into a purchase. Panama's real estate market is hyper-local. A "deal" in <strong>Coronado panama</strong> might look great on paper, but if you haven't experienced the traffic on a Friday afternoon, you're missing 50% of the picture. Our <strong>panama relocation tours</strong> are designed specifically to stop you from making a $300k mistake.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight italic flex items-center gap-4">
                                        <span className="text-brand-GOLD text-4xl">02</span> Ignoring the "Friendly Nations" Nuances
                                    </h3>
                                    <p>
                                        Since the 2021 changes, the <strong>friendly nations visa panama requirements</strong> are far stricter. Many expats arrive thinking they can just open a bank account and get PR. Wrong. You need to prove economic activity or an employment contract. Without a specialized <strong>panama immigration lawyer</strong>, your application will be <strong>denied</strong> before it even hits the ministry's desk.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight italic flex items-center gap-4">
                                        <span className="text-brand-GOLD text-4xl">03</span> Underestimating the "Bajareque" in Boquete
                                    </h3>
                                    <p>
                                        People fall in love with <strong>Boquete panama real estate</strong> during the dry season. Then October hits, and the continuous mountain mist (Bajareque) and humidity become a reality. If you have respiratory issues or just hate dampness, specific neighborhoods in Boquete will be a nightmare. We show you the microclimates that brokers conveniently forget to mention.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight italic flex items-center gap-4">
                                        <span className="text-brand-GOLD text-4xl">04</span> Assuming "DIY" is Cheapest
                                    </h3>
                                    <p>
                                        Trying to navigate the <strong>panama work permit</strong> process or residency without professional logistics usually costs 3x more in the long run. Between incorrect translations, expired apostilles, and "tramitadores" who disappear, the <strong>cheapest way to get panama residency</strong> is to do it right the first time with a vetted team.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="sticky top-32 p-6 bg-brand-GOLD rounded-2xl text-brand-950 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 italic">Relocation Blueprint</h4>
                                <p className="text-sm font-bold mb-8 opacity-80 leading-relaxed">
                                    Get our <strong>2026 Panama Relocation Checklist</strong>. Avoiding just one of these mistakes pays for your entire tour.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b border-brand-950/20 pb-2">
                                        <ShieldCheck size={14} /> Full Legal Compliance
                                    </li>
                                    <li className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b border-brand-950/20 pb-2">
                                        <Map size={14} /> Neighborhood Scouting
                                    </li>
                                    <li className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b border-brand-950/20 pb-2">
                                        <Star size={14} /> VIP Integration
                                    </li>
                                </ul>
                                <Link href={`/${lang}/relocation/legal/checklist`} className="w-full block py-4 bg-brand-950 text-white text-center rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
                                    Download Checklist
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 2026 Legal Blueprint Section */}
            <section className="py-14 bg-brand-900">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <div className="w-16 h-16 bg-brand-GOLD/10 rounded-2xl flex items-center justify-center mb-10">
                            <Scale className="text-brand-GOLD" size={32} />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Your <span className="text-brand-GOLD underline">Legal</span> Blueprint</h2>
                        <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                            <p>
                                Relocating to Panama is a legal marathon, not a sprint. In 2026, the complexity of <strong>panama residency requirements</strong> has never been higher, but neither has the reward.
                            </p>
                            <p>
                                We've built an elite network of <strong>panama immigration lawyers</strong> who specialize in the VIP transition. Whether you're navigating the <strong>friendly nations visa panama requirements</strong> or the <strong>pensionado visa</strong>, you need a team that knows the shortcuts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <Link href={`/${lang}/relocation/legal/lawyers`} className="btn-3d btn-3d-navy px-12 py-6 rounded-xl font-black uppercase tracking-widest text-xs inline-flex items-center justify-center">
                                    MEET THE LAWYERS
                                </Link>
                                <Link href={`/${lang}/relocation/legal/checklist`} className="btn-3d bg-white text-brand-950 px-12 py-6 rounded-xl font-black uppercase tracking-widest text-xs inline-flex items-center justify-center border border-brand-950/10 shadow-xl">
                                    VIEW 2026 CHECKLIST
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                        <div className="p-10 bg-brand-950 rounded-2xl border border-white/10">
                            <ShieldCheck className="text-brand-GOLD mb-6" size={40} />
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic">Asset Protection</h4>
                            <p className="text-xs text-slate-400 font-medium">Panama Foundations are the world's gold standard for family wealth security.</p>
                        </div>
                        <div className="p-10 bg-black text-white rounded-2xl">
                            <Zap className="text-brand-GOLD mb-6" size={40} />
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic">Fast Track</h4>
                            <p className="text-xs text-slate-400 font-medium">Get your <strong>panama work permit</strong> and residency filing in record time with VIP processing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Choosing Your Path Comparison */}
            <section className="py-14 bg-brand-950 rounded-3xl mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">Choose Your <span className="text-brand-GOLD">Trajectory</span></h2>
                        <p className="text-slate-400 text-lg uppercase tracking-widest font-black">Two Iconic Paths. One Goal.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-3xl border border-white/10 hover:border-brand-GOLD transition-all shadow-xl group">
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-brand-950 group-hover:text-brand-GOLD transition-colors">The Pensioner</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-10">
                                Perfect for those with a lifetime pension. The <strong>panama retirement visa</strong> offers the world's best discounts on everything from movies to medical bills.
                            </p>
                            <Link href={`/${lang}/relocation/visas/pensionado`} className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-950 border-b-2 border-brand-GOLD pb-2">
                                Pensionado Guide <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="bg-neutral-950 text-white p-8 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-5 scale-150 rotate-12">
                                <Globe size={200} />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-brand-GOLD">The Professional</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-10">
                                The choice for tech workers, digital nomads, and investors from 50+ countries. The <strong>friendly nations visa panama</strong> is your business pass.
                            </p>
                            <Link href={`/${lang}/relocation/visas/friendly-nations`} className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-GOLD">
                                Friendly Nations Deep-Dive <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Vision Callout */}
            <section className="py-14 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Your New <span className="text-brand-GOLD italic">Frontier</span></h2>
                    <p className="text-xl text-slate-400 mb-16 font-medium leading-relaxed">
                        Don't just move to Panama. Master it. From the financial district of Panama City to the cool highlands of Boquete, your elite journey starts with the right <strong>panama relocation services</strong>.
                    </p>
                    <Link href={`/${lang}/relocation/tours`} className="btn-3d btn-3d-navy px-8 py-4 rounded-2xl font-black uppercase tracking-[0.3em] text-xs inline-block">
                        CUSTOMIZE YOUR TOUR
                    </Link>
                </div>
            </section>

            {/* Seasonal Hub: Best Time to Visit */}
            <section className="py-24 bg-white/5 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Planning your Scouting Trip?</h2>
                        <p className="text-slate-400 mb-12 font-medium">
                            The <strong>best time to visit panama</strong> depends on what you're looking for. From the dry summer season to the lush green season, each month offers a different perspective on <strong>international living in panama</strong>.
                        </p>
                        <Link href={`/${lang}/relocation/weather`} className="inline-flex items-center gap-3 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.3em] hover:gap-5 transition-all">
                            View Seasonal Guide <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA Footer */}
            <section className="py-14 bg-brand-GOLD text-brand-950 text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-12 uppercase tracking-tighter italic">Ready to Begin?</h2>
                    <p className="text-base md:text-lg font-bold mb-16 opacity-80">Stop dreaming. Start Relocating. Our team is standing by.</p>
                    <div className="flex flex-wrap justify-center gap-10">
                        <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-20 py-10 rounded-3xl font-black uppercase tracking-[0.4em] text-sm flex items-center justify-center min-w-[320px]">
                            REQUEST PROPOSAL
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationHubContent;
