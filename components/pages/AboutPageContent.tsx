'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Shield, BookOpen, CheckCircle, MapPin, ArrowRight, AlertTriangle, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SEO_KEYWORDS_LIST } from '@/lib/constants';
import VideoThumbnail from '@/components/ui/VideoThumbnail';

const AboutPageContent: React.FC = () => {
    const { lang } = useLanguage();

    return (
        <div className="pt-24 min-h-screen bg-brand-950 text-white">

            {/* Hero */}
            <section className="bg-brand-900 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-950/60" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="tag-teal mb-5 inline-block">
                        {lang === 'es' ? 'QUIÉNES SOMOS' : 'WHO WE ARE'}
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase italic tracking-tighter mt-4">
                        {lang === 'es'
                            ? 'Panama Real Estate,\nGuiado por Expats para Expats.'
                            : 'Panama Real Estate,\nGuided by Expats for Expats.'}
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        {lang === 'es'
                            ? 'Fundada por expatriados internacionales que vivieron el proceso antes de asesoran a otros — bienes raíces de lujo y servicios de reubicación en Panamá.'
                            : 'Founded by international expats who lived the process before advising others — luxury real estate and relocation services in Panama.'}
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 max-w-5xl mx-auto px-4">
                <div className="space-y-8 text-slate-400 leading-relaxed text-base">
                    <h2 className="text-white text-3xl md:text-4xl font-heading font-black mb-8 uppercase italic tracking-tighter border-l-4 border-brand-TEAL pl-5">
                        {lang === 'es' ? 'Nuestra Historia' : 'Our Story: Navigating Panama Real Estate for Foreigners'}
                    </h2>
                    <p>
                        The <strong className="text-white">panama real estate agency</strong> landscape is often a minefield for the uninitiated. We were founded because we realized that <strong className="text-white">buying real estate in panama</strong> is about much more than square meters — it&apos;s about building a legacy, optimizing your global footprint, and joining established <strong className="text-white">expat communities in panama</strong>. We moved here ourselves, navigated the <strong className="text-white">friendly nations visa panama</strong> process, and dealt with the <strong className="text-white">cost of living panama</strong> nuances before ever selling our first unit.
                    </p>
                    <p>
                        We focus exclusively on what we call the Position Gap. In any <strong className="text-white">panama real estate market</strong> analysis, you&apos;ll find thousands of <strong className="text-white">panama city condos</strong> — but only a few represent a safe, <strong className="text-white">secure real estate investment</strong>. We benchmark top projects against overpriced legacy buildings to ensure our clients get institutional-grade value every time.
                    </p>
                    <p>
                        Our mission is to act as your <strong className="text-white">panama real estate advisors</strong> and ground team. Whether you are searching for <strong className="text-white">panama condos on the beach</strong> or a <strong className="text-white">panama luxury retirement</strong> estate in the mountains, we provide the expertise required to avoid common pitfalls. From relocation tours to final title handover, we are with you every step of the way.
                    </p>

                    <div className="my-16 flex justify-center">
                        <VideoThumbnail
                            videoUrl="https://youtu.be/sDW0cwto6aQ?t=681"
                            title="See the Difference — Panama Real Estate with Local Experts"
                            className="w-full max-w-2xl rounded-3xl overflow-hidden border border-white/10"
                        />
                    </div>

                    {/* Standard card */}
                    <div className="glass-card p-10 rounded-2xl border border-brand-GOLD/20 not-prose">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="md:w-auto flex-shrink-0">
                                <div className="w-20 h-20 bg-brand-GOLD text-brand-950 rounded-full flex items-center justify-center font-black text-2xl shadow-xl">1%</div>
                                <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-brand-GOLD text-center">Curated</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-white mb-3 uppercase italic tracking-tighter">The 1% Standard</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">We reject 99% of <strong className="text-white">panama real estate projects</strong>. We only represent developers with proven liquid assets, clear title history, and strong property management structures. This is how we ensure <strong className="text-white">panama safe investment property</strong> for our international clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pros, Cons & Dangers */}
            <section className="py-20 bg-brand-900">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="tag-gold mb-5 inline-block">DEEP INTELLIGENCE</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 uppercase italic tracking-tighter mt-4">
                            Retiring in Panama: Pros, Cons &amp; Dangers
                        </h2>
                        <p className="text-slate-400 text-base max-w-xl mx-auto">
                            A transparent <strong>panama property investment guide</strong> for the serious mover.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-brand-TEAL">
                                    <Heart size={20} /> The Pros: Living the Dream
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                                    The <strong className="text-white">panama lifestyle for expats</strong> is legendary. American retirees enjoy first-world healthcare at 70% lower costs, a dollarized economy, and the incredible <strong className="text-white">panama retirement benefits</strong> of the <strong className="text-white">pensionado visa panama</strong>.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        '25% off electricity and utility bills for life.',
                                        'High-speed internet available throughout Panama.',
                                        '0% tax on income earned outside of Panama.',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                            <CheckCircle className="text-brand-TEAL shrink-0 mt-0.5" size={14} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-brand-CORAL">
                                    <AlertTriangle size={20} /> The Dangers: Avoiding Pitfalls
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    The biggest risk is buying unverified <strong className="text-white">panama property</strong> or pre-construction units from developers with no liquidity. This is why we focus on gated communities and branded residences that offer institutional security and professional management.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="glass-card p-8 rounded-2xl border border-brand-GOLD/20">
                                <h3 className="text-lg font-black text-white mb-5 uppercase italic tracking-tighter border-b border-brand-GOLD/20 pb-4">
                                    The Real Cost of Living
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                                    Building a realistic <strong className="text-white">cost of retirement in panama</strong> budget is essential. Most clients live comfortably on $2,500–$4,000 USD per month including luxury rent and private healthcare.
                                </p>
                                <Link href="/contacto" className="inline-flex items-center gap-2 btn-3d btn-3d-gold px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[11px]">
                                    Speak with an Advisor <ArrowRight size={12} />
                                </Link>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-brand-GOLD">
                                    <Users size={20} /> Expat Communities in Panama
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    From Coronado for golf lovers to <strong className="text-white">boquete panama real estate</strong> for mountain hikers, we connect you with the social hubs that make international living in Panama truly feel like home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2026 Buying Guide */}
            <section className="py-20 max-w-5xl mx-auto px-4">
                <h2 className="text-white font-heading font-black text-3xl md:text-4xl mb-10 uppercase italic tracking-tighter text-center">
                    Your 2026 Panama Property Buying Guide
                </h2>
                <p className="text-xl font-bold text-white border-l-4 border-brand-TEAL pl-5 leading-relaxed mb-10">
                    The <strong>panama real estate market</strong> is currently in a sweet spot for international buyers. With global demand for <strong>panama sun and beach living</strong> at an all-time high, the <strong>panama beachfront investment</strong> sector is seeing unprecedented growth.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-12">
                    {[
                        { icon: MapPin, title: 'Zone Selection', desc: 'Choose between panama condos on the beach or mountain homes based on your ROI goals and lifestyle.' },
                        { icon: Shield, title: 'Title Verification', desc: 'Elite legal partners ensure every panama property is clear and safe for foreign buyers.' },
                        { icon: BookOpen, title: 'Visa Integration', desc: 'Optimize your panama residency visa process through your real estate purchase.' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 text-center group hover:border-brand-TEAL/30 transition-all">
                            <div className="w-14 h-14 bg-brand-TEAL/10 border border-brand-TEAL/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-TEAL/20 transition-all">
                                <item.icon size={22} className="text-brand-TEAL" />
                            </div>
                            <h3 className="font-black text-white uppercase text-xs tracking-widest mb-3">{item.title}</h3>
                            <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-5 text-slate-400 text-sm leading-relaxed">
                    <p>
                        Our advisors focus on <strong className="text-white">panama high ROI real estate</strong> and <strong className="text-white">panama passive income property</strong>. This means conducting deep due diligence on occupancy rates for <strong className="text-white">panama vacation rental investment</strong> and analyzing the liquidity of <strong className="text-white">panama pre construction condos</strong>.
                    </p>
                    <p>
                        From <strong className="text-white">panama sea view apartments</strong> in Avenida Balboa to <strong className="text-white">panama golf communities</strong> in Santa Maria, we provide market intelligence that cuts through the noise. We are dedicated to your long-term success as both a resident and an investor.
                    </p>
                </div>
            </section>

            {/* SEO keyword wall */}
            <section className="py-16 bg-brand-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
                        {SEO_KEYWORDS_LIST.map((k, i) => (
                            <span key={i} className="hover:text-brand-TEAL transition-colors cursor-default">{k}</span>
                        ))}
                        <span>panama waterfront condos</span>
                        <span>panama foreign investment property</span>
                        <span>panama international buyers real estate</span>
                        <span>panama luxury coastal condos</span>
                        <span>panama lifestyle for expats</span>
                        <span>panama beach retirement</span>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-brand-950 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <span className="tag-teal mb-5 inline-block">READY TO MOVE?</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8 uppercase italic tracking-tighter mt-4">
                        Start Your Panama Journey
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-teal px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs">
                            Speak with an Advisor
                        </Link>
                        <Link href={`/${lang}/tours`} className="btn-3d btn-3d-gold px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs">
                            Book Relocation Tour
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPageContent;
