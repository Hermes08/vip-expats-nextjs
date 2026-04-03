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
        <div className="pt-24 min-h-screen bg-white text-brand-950">

            {/* Hero — dark section with photo */}
            <section className="section-dark py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-950/80" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="tag-teal mb-5 inline-block">
                        {lang === 'es' ? 'QUIÉNES SOMOS' : 'WHO WE ARE'}
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase italic tracking-tighter mt-4">
                        {lang === 'es'
                            ? 'Bienes Raíces en Panamá,\nPor Expats Para Expats.'
                            : 'Panama Real Estate,\nGuided by Expats for Expats.'}
                    </h1>
                    <p className="text-lg text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        {lang === 'es'
                            ? 'Fundada por expatriados que vivieron el proceso antes de asesorar — bienes raíces de lujo y servicios de reubicación en Panamá.'
                            : 'Founded by international expats who lived the process before advising others — luxury real estate and relocation services in Panama.'}
                    </p>
                </div>
            </section>

            {/* Divider */}
            <hr className="divider-teal" />

            {/* Our Story — white */}
            <section className="py-20 max-w-5xl mx-auto px-4">
                <h2 className="font-heading text-3xl md:text-4xl font-black text-brand-950 mb-8 uppercase italic tracking-tighter border-l-4 border-brand-TEAL pl-5">
                    {lang === 'es' ? 'Nuestra Historia' : 'Our Story: Navigating Panama Real Estate for Foreigners'}
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-base">
                    <p>
                        The <strong className="text-brand-950">panama real estate agency</strong> landscape is often a minefield for the uninitiated. We were founded because buying real estate in Panama is about much more than square meters — it&apos;s about building a legacy, optimizing your global footprint, and joining established <strong className="text-brand-950">expat communities in panama</strong>. We moved here ourselves, navigated the <strong className="text-brand-950">friendly nations visa panama</strong> process, and dealt with the <strong className="text-brand-950">cost of living panama</strong> nuances before ever selling our first unit.
                    </p>
                    <p>
                        We focus exclusively on what we call the Position Gap. In any <strong className="text-brand-950">panama real estate market</strong> analysis, you&apos;ll find thousands of <strong className="text-brand-950">panama city condos</strong> — but only a few represent a safe, <strong className="text-brand-950">secure real estate investment</strong>. We benchmark top projects against overpriced legacy buildings to ensure our clients get institutional-grade value every time.
                    </p>
                    <p>
                        Our mission is to act as your <strong className="text-brand-950">panama real estate advisors</strong> and ground team. Whether you are searching for <strong className="text-brand-950">panama condos on the beach</strong> or a <strong className="text-brand-950">panama luxury retirement</strong> estate in the mountains, we provide the expertise to avoid common pitfalls. From relocation tours to final title handover, we are with you every step of the way.
                    </p>
                </div>

                <div className="my-14 flex justify-center">
                    <VideoThumbnail
                        videoUrl="https://youtu.be/sDW0cwto6aQ?t=681"
                        title="Panama Real Estate with Local Experts"
                        className="w-full max-w-2xl rounded-2xl overflow-hidden border border-brand-100"
                    />
                </div>

                {/* 1% standard card */}
                <div className="card-light p-8 rounded-2xl">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-brand-GOLD text-brand-950 rounded-full flex items-center justify-center font-black text-2xl shadow-lg">1%</div>
                            <p className="text-[10px] font-black uppercase tracking-widest mt-3 text-brand-GOLD text-center">Curated</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-brand-950 mb-2 uppercase italic tracking-tighter">The 1% Standard</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">We reject 99% of <strong className="text-brand-950">panama real estate projects</strong>. We only represent developers with proven liquid assets, clear title history, and strong property management structures — ensuring <strong className="text-brand-950">panama safe investment property</strong> for our international clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="divider-teal" />

            {/* Pros, Cons & Dangers — alt teal tint section */}
            <section className="py-20 section-alt">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="tag-teal-light mb-4 inline-block">DEEP INTELLIGENCE</span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black text-brand-950 mb-4 uppercase italic tracking-tighter mt-3">
                            Retiring in Panama: Pros, Cons &amp; Dangers
                        </h2>
                        <p className="text-slate-500 text-sm max-w-lg mx-auto">
                            A transparent <strong>panama property investment guide</strong> for the serious mover.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-brand-TEAL">
                                    <Heart size={18} /> The Pros: Living the Dream
                                </h3>
                                <p className="text-slate-500 leading-relaxed mb-5 text-sm">
                                    The <strong className="text-brand-950">panama lifestyle for expats</strong> is legendary. American retirees enjoy first-world healthcare at 70% lower costs, a dollarized economy, and the incredible <strong className="text-brand-950">panama retirement benefits</strong> of the Pensionado Visa.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        '25% off electricity and utility bills for life.',
                                        'High-speed internet available throughout Panama.',
                                        '0% tax on income earned outside of Panama.',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <CheckCircle className="text-brand-TEAL shrink-0 mt-0.5" size={14} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-brand-CORAL">
                                    <AlertTriangle size={18} /> The Dangers: Avoiding Pitfalls
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    The biggest risk is buying unverified <strong className="text-brand-950">panama property</strong> or pre-construction units from developers with no liquidity. This is why we focus on gated communities and branded residences that offer institutional security and professional management.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="card-light p-8 rounded-2xl">
                                <h3 className="font-heading text-lg font-black text-brand-950 mb-4 uppercase italic tracking-tighter border-b border-brand-100 pb-4">
                                    The Real Cost of Living
                                </h3>
                                <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                                    Building a realistic <strong className="text-brand-950">cost of retirement in panama</strong> budget is essential. Most clients live comfortably on $2,500–$4,000 USD per month including luxury rent and private healthcare.
                                </p>
                                <Link href="/contacto" className="inline-flex items-center gap-2 btn-3d btn-3d-teal px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[11px]">
                                    Speak with an Advisor <ArrowRight size={12} />
                                </Link>
                            </div>
                            <div className="card-light p-8 rounded-2xl">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 text-brand-950">
                                    <Users size={18} className="text-brand-TEAL" /> Expat Communities in Panama
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    From Coronado for golf lovers to <strong className="text-brand-950">boquete panama real estate</strong> for mountain hikers, we connect you with the social hubs that make international living in Panama truly feel like home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="divider-teal" />

            {/* 2026 Buying Guide — white */}
            <section className="py-20 max-w-5xl mx-auto px-4">
                <h2 className="font-heading text-brand-950 font-black text-3xl md:text-4xl mb-8 uppercase italic tracking-tighter text-center">
                    Your 2026 Panama Property Buying Guide
                </h2>
                <p className="text-lg font-semibold text-brand-950 border-l-4 border-brand-TEAL pl-5 leading-relaxed mb-10">
                    The <strong>panama real estate market</strong> is currently in a sweet spot for international buyers. With global demand for <strong>panama sun and beach living</strong> at an all-time high, the beachfront investment sector is seeing unprecedented growth.
                </p>

                <div className="grid md:grid-cols-3 gap-5 my-10">
                    {[
                        { icon: MapPin, title: 'Zone Selection', desc: 'Choose between beach condos or mountain homes based on your ROI goals and lifestyle.' },
                        { icon: Shield, title: 'Title Verification', desc: 'Elite legal partners ensure every panama property is clear and safe for foreign buyers.' },
                        { icon: BookOpen, title: 'Visa Integration', desc: 'Optimize your panama residency visa process through your real estate purchase.' },
                    ].map((item, i) => (
                        <div key={i} className="card-light p-6 rounded-2xl text-center group">
                            <div className="w-14 h-14 bg-brand-50 border border-brand-100 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-TEAL/10 group-hover:border-brand-TEAL/30 transition-all">
                                <item.icon size={22} className="text-brand-TEAL" />
                            </div>
                            <h3 className="font-black text-brand-950 uppercase text-xs tracking-widest mb-2">{item.title}</h3>
                            <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
                    <p>
                        Our advisors focus on <strong className="text-brand-950">panama high ROI real estate</strong> and <strong className="text-brand-950">panama passive income property</strong>. This means deep due diligence on occupancy rates for <strong className="text-brand-950">panama vacation rental investment</strong> and analyzing the liquidity of <strong className="text-brand-950">panama pre construction condos</strong>.
                    </p>
                    <p>
                        From <strong className="text-brand-950">panama sea view apartments</strong> in Avenida Balboa to <strong className="text-brand-950">panama golf communities</strong> in Santa Maria, we provide market intelligence that cuts through the noise and delivers long-term success.
                    </p>
                </div>
            </section>

            {/* SEO keyword wall — alt section */}
            <section className="py-12 section-alt border-t border-brand-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        {SEO_KEYWORDS_LIST.map((k, i) => (
                            <span key={i} className="hover:text-brand-TEAL transition-colors cursor-default">{k}</span>
                        ))}
                        <span>panama waterfront condos</span>
                        <span>panama foreign investment property</span>
                        <span>panama luxury coastal condos</span>
                        <span>panama lifestyle for expats</span>
                        <span>panama beach retirement</span>
                    </div>
                </div>
            </section>

            {/* Final CTA — light teal soft */}
            <section className="section-teal-soft py-20 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <span className="tag-teal-light mb-5 inline-block">READY TO MOVE?</span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black text-brand-950 mb-8 uppercase italic tracking-tighter mt-4">
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
