'use client';

import React from 'react';
import { Award, Check, ArrowRight, HeartPulse, Zap, Plane, Landmark, ShieldCheck, Wallet } from 'lucide-react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const RelocationPensionadoContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Visas", item: "https://expatrockstars.com/relocation/visas" },
        { name: "Pensionado Visa", item: "https://expatrockstars.com/relocation/visas/pensionado" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />

            {/* Header / Hero */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The World's #1 Retirement Visa
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 uppercase tracking-tighter">
                        Pensionado <br /> <span className="text-brand-GOLD italic">Program</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Retire like a Rockstar. The <strong>pensionado visa panama</strong> offers the most generous retirement benefits on the planet, guaranteed for life.
                    </p>
                </div>
            </section>

            {/* The Benefits Section (The Discounts) */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter">Gold-Tier <span className="text-brand-GOLD italic">Discounts</span></h2>
                    <p className="text-neutral-500 text-lg uppercase tracking-widest font-black">Lifetime savings for every Rockstar retiree.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Zap, title: "25% Off Utilities", desc: "Permanent reduction on electricity, water, and telephone bills." },
                        { icon: Plane, title: "25% Off Flights", desc: "Significant discounts on international flights originating from Panama." },
                        { icon: HeartPulse, title: "20% Off Healthcare", desc: "Discount on medical consultations, surgeries, and dental work." },
                        { icon: Wallet, title: "50% Off Fun", desc: "Half price on movies, concerts, and sporting events nationwide." }
                    ].map((benefit, i) => (
                        <div key={i} className="bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all">
                            <benefit.icon size={48} className="text-brand-GOLD mb-8" />
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic leading-tight">{benefit.title}</h4>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Requirements Section */}
            <section className="py-32 bg-brand-950 text-white rounded-[4rem] mx-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-GOLD/5 rounded-full -ml-48 -mt-48 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic">Key <br /> Requirements</h2>
                            <div className="space-y-6">
                                <p className="text-brand-300 font-medium leading-relaxed">
                                    The <strong>pensionado visa panama requirements</strong> are straightforward but strict. Our team ensures your documentation is bulletproof.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 bg-brand-GOLD rounded-full flex items-center justify-center shrink-0 mt-1">
                                            <Check className="text-brand-950" size={14} />
                                        </div>
                                        <div>
                                            <h4 className="font-black uppercase tracking-widest text-xs mb-1">Lifetime Pension</h4>
                                            <p className="text-sm text-gray-400">Proof of a government or private pension of at least $1,000 USD per month for life (plus $250 for each dependent).</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 bg-brand-GOLD rounded-full flex items-center justify-center shrink-0 mt-1">
                                            <Check className="text-brand-950" size={14} />
                                        </div>
                                        <div>
                                            <h4 className="font-black uppercase tracking-widest text-xs mb-1">Clean Record</h4>
                                            <p className="text-sm text-gray-400">Police record check from your country of residence, apostilled and verified.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 bg-brand-GOLD rounded-full flex items-center justify-center shrink-0 mt-1">
                                            <Check className="text-brand-950" size={14} />
                                        </div>
                                        <div>
                                            <h4 className="font-black uppercase tracking-widest text-xs mb-1">Health Certificate</h4>
                                            <p className="text-sm text-gray-400">A certificate of basic good health issued by a Panamanian doctor (we handle this during your visit).</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-xl">
                                <ShieldCheck className="text-brand-GOLD mb-8" size={56} />
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 italic">The "Rockstar" Advantage</h3>
                                <p className="text-gray-400 font-medium leading-relaxed mb-8">
                                    Many retirees struggle with the bureaucracy. We handle the <strong>panama pensionado program</strong> end-to-end, including opening bank accounts and obtaining your permanent residency card in a fraction of the time.
                                </p>
                                <button className="inline-flex items-center gap-4 text-brand-GOLD font-black uppercase tracking-[0.3em] text-[10px] hover:gap-6 transition-all">
                                    Start My Application <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost of Living Comparison */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-black mb-6 uppercase tracking-tighter italic">Why Panama?</h2>
                    <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Cost of Living vs Quality of Life</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="prose prose-lg text-neutral-600 max-w-none">
                        <p>
                            Expatriates from the US, Canada, and Europe often find that <strong>retiring in panama</strong> effectively doubles their purchasing power. A $3,000/month lifestyle in Boquete provides luxury gated community living, private healthcare, and a full-time gardener—things that would cost $10,000+ in Florida or California.
                        </p>
                        <p>
                            Our <strong>panama relocation tours</strong> specifically target these comparisons. We take you to the local supermarkets, private clinics, and expat coffee shops so you can see the math for yourself.
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-12 rounded-[4rem] border border-neutral-100 italic font-black text-brand-950 text-2xl md:text-4xl tracking-tighter leading-none">
                        "In Panama, you don't just spend less; you live more. That's the real Rockstar ROI."
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Plan Your Retirement Trip</h2>
                    <p className="text-xl md:text-2xl font-bold mb-16 opacity-80 max-w-2xl mx-auto">
                        See the <strong>best places for expats to live in panama</strong> and meet other retirees already living the dream.
                    </p>
                    <Link href="/relocation/tours" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-black transition-all shadow-2xl">
                        Explore Boquete & Coronado
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationPensionadoContent;
