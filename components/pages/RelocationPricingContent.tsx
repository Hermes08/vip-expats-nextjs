'use client';

import React from 'react';
import { Check, Info, ArrowRight, ShieldCheck, Zap, Globe, MessageSquare, Calendar, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const RelocationPricingContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Home", item: `https://panamarealestatesale.com/${lang}` },
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Investment & Pricing", item: `https://panamarealestatesale.com/${lang}/relocation/pricing` }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>
            {/* Header / Hero */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        Transparent Logistics
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-8 uppercase tracking-tighter">
                        Investment <br /> & <span className="text-brand-GOLD italic">Process</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Relocating to Panama shouldn't be a gamble. We provide clear, tiered pricing and a structured roadmap for your <strong>panama relocation discovery tour</strong>.
                    </p>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Tier 1: The Scout */}
                    <div className="border border-brand-100 p-6 rounded-2xl flex flex-col h-full hover:shadow-2xl transition-all group">
                        <div className="mb-10">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">The Scout</h3>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Digital Intelligence Pack</p>
                        </div>
                        <div className="mb-10">
                            <span className="text-5xl font-black italic">$499</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-8 font-medium leading-relaxed">
                            Perfect for those in the early research phase who want the absolute truth about <strong>panama relocation services</strong> without the flight yet.
                        </p>
                        <ul className="space-y-4 mb-12 flex-grow">
                            {[
                                "Custom Relocation Data Pack (PDF)",
                                "Top 5 Neighborhood Analysis",
                                "Cost of Living Comparison Tool",
                                "1-Hour Virtual Blueprint Session",
                                "Verified Attorney Contact List"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm font-medium">
                                    <Check className="text-brand-GOLD shrink-0" size={18} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-5 bg-white/5 text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl group-hover:bg-brand-950 group-hover:text-white transition-all">
                            Get the Kit
                        </button>
                    </div>

                    {/* Tier 2: The Elite Professional (Popular) */}
                    <div className="border-4 border-brand-GOLD p-6 rounded-2xl flex flex-col h-full shadow-2xl relative bg-brand-950 text-white transform lg:-translate-y-8">
                        <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-GOLD text-brand-950 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                            Most Popular
                        </div>
                        <div className="mb-10">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">The Elite</h3>
                            <p className="text-brand-GOLD font-bold uppercase tracking-widest text-[10px]">5-Day Discovery Tour</p>
                        </div>
                        <div className="mb-10">
                            <span className="text-5xl font-black italic">$2,499</span>
                            <span className="text-xs text-brand-GOLD/60 block mt-2">*Per couple (plus travel)</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-8 font-medium leading-relaxed">
                            The gold standard of <strong>panama discovery tours</strong>. 5 days of intensive boots-on-the-ground research led by our experts.
                        </p>
                        <ul className="space-y-4 mb-12 flex-grow">
                            {[
                                "5 Days Luxury Private Transport",
                                "Hand-picked Real Estate Showings",
                                "Attorney & Bank Consultant Meet",
                                "Private Residency Workshop",
                                "Airport Concierge Service",
                                "Tour Cost Credit on Purchase"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm font-medium">
                                    <Check className="text-brand-GOLD shrink-0" size={18} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-5 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all">
                            Reserve My Dates
                        </button>
                    </div>

                    {/* Tier 3: The Legend */}
                    <div className="border border-brand-100 p-6 rounded-2xl flex flex-col h-full hover:shadow-2xl transition-all group">
                        <div className="mb-10">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">The Legend</h3>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Full Relocation Concierge</p>
                        </div>
                        <div className="mb-10">
                            <span className="text-5xl font-black italic">$4,999+</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-8 font-medium leading-relaxed">
                            End-to-end management of your move. We handle the <strong>pensionado visa panama</strong> process and full logistics.
                        </p>
                        <ul className="space-y-4 mb-12 flex-grow">
                            {[
                                "Full Residency Visa Management",
                                "House Hunting & Rental Search",
                                "Banking Set-up & Local SIMs",
                                "Health Insurance Enrollment",
                                "Pet Relocation Coordination",
                                "Infinite WhatsApp Support"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm font-medium">
                                    <Check className="text-brand-GOLD shrink-0" size={18} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-5 bg-white/5 text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl group-hover:bg-brand-950 group-hover:text-white transition-all">
                            Request Interview
                        </button>
                    </div>
                </div>
            </section>

            {/* The 4-Step Process */}
            <section className="py-14 bg-brand-950 rounded-2xl mx-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter text-brand-900">The VIP <br /> <span className="text-brand-GOLD italic">Relocation Process</span></h2>
                        <p className="text-slate-400 text-lg uppercase tracking-widest font-black">From curiosity to community in 4 steps.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { icon: MessageSquare, title: "Blueprint", desc: "Start with a 1-on-1 strategy call to map your goals: Investment ROI vs Lifestyle Retirement." },
                            { icon: Calendar, title: "Scouting", desc: "Fly in for your Discovery Tour. Feel the humidity, see the traffic, meeting the neighbors." },
                            { icon: ShieldCheck, title: "Logistics", desc: "Our legal and banking team executes your visa and account setup while we source your home." },
                            { icon: Globe, title: "VIP Life", desc: "Keys in hand, residency approved. Welcome to the Panama Real Estate Sale members community." }
                        ].map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 bg-brand-50 border border-brand-100 shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 text-brand-GOLD group hover:bg-brand-950 hover:text-white transition-all duration-500">
                                    <step.icon size={32} />
                                </div>
                                <div className="mb-4 text-brand-GOLD font-black text-xs uppercase tracking-widest">Step 0{i + 1}</div>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic text-brand-900">{step.title}</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Refund Policy Alert */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="bg-brand-GOLD/20 border-2 border-brand-GOLD p-6 rounded-2xl flex flex-col md:flex-row gap-10 items-center">
                    <div className="bg-brand-GOLD p-6 rounded-3xl text-brand-950">
                        <Wallet size={48} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 italic text-brand-900">The "VIP Credit" Policy</h3>
                        <p className="text-sm font-medium text-neutral-700 leading-relaxed mb-6">
                            We believe so strongly in our <strong>panama real estate investment</strong> strategy that if you purchase your dream home through our agency within 12 months of your tour, we will <strong>refund your Discovery Tour fee at closing</strong>.
                        </p>
                        <div className="flex items-center gap-2 text-brand-GOLD font-black text-[10px] uppercase tracking-widest">
                            Terms & Conditions apply <Zap size={14} className="animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Intro */}
            <section className="py-24 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Still have questions?</h2>
                    <p className="text-slate-400 mb-12 font-medium max-w-2xl mx-auto">
                        Concerned about <strong>healthcare in panama</strong>, safety, or shipping your household goods? Our experts have the answers.
                    </p>
                    <Link href={`/${lang}/relocation/guides`} className="inline-flex items-center gap-3 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.3em] hover:gap-5 transition-all">
                        View Detailed Guides <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationPricingContent;
