'use client';

import React from 'react';
import { Wallet, Check, ArrowRight, TrendingUp, PiggyBank, Receipt, ShoppingCart, Landmark, ShieldCheck, Zap, AlertCircle, Utensils, Hammer, Tv, Sun, Compass } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';
import ServiceSchema from '@/components/seo/ServiceSchema';

const RelocationCostContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Cost of Living", item: `https://panamarealestatesale.com/${lang}/relocation/cost` }
    ];

    const budgetTiers = [
        {
            name: "The Panama Real Estate Sale Minimalist",
            price: "$1,500 - $2,000",
            target: "Single / Couple (Local Living)",
            desc: "Focuses on local markets, small mountain towns (like Volcan), and efficient utility usage. No full-time maid.",
            features: ["Local Produce Markets", "Public Transport / Cheap SUV", "Regional Clinics", "Modest Rental"]
        },
        {
            name: "The Platinum Standard",
            price: "$3,500 - $5,000",
            target: "Families / Luxury Retirees",
            desc: "The 'Coronado Beach Club' lifestyle. High-rise condos, private schools, full-time help, and imported grocery items.",
            features: ["Gated Community Living", "Private International Schools", "Full-time Domestic Help", "Luxury Dining"]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />
            <ServiceSchema
                name="Panama Cost of Living Analysis 2026"
                description="The definitive guide to the cost of living in Panama. Budgeting for rent, groceries, healthcare, and property in 2026."
                serviceType="Financial Planning"
            />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="py-24 bg-brand-GOLD text-brand-950 relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-950 text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The 2026 Budget Bible
                    </span>
                    <h1 className="text-5xl md:text-9xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                        Cost of <span className="italic">Living</span> <br /> In Panama
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-950/70 max-w-4xl mx-auto leading-relaxed font-black uppercase tracking-tight">
                        How much do you REALLY need to live like a Panama Real Estate Sale in Panama? We break down the <strong>panama relocation tours cost</strong> and monthly lifestyle budgets.
                    </p>
                </div>
            </section>

            {/* Lifestyle Maintenance: The Hidden Costs */}
            <section className="py-32 bg-neutral-950 text-white rounded-[5rem] mx-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10">
                    <Hammer size={200} className="text-brand-GOLD" />
                </div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Utility <br /> <span className="text-brand-GOLD italic">Maintenance</span></h2>
                            <div className="space-y-8 text-lg text-gray-400 font-medium leading-[1.8]">
                                <p>
                                    In Panama, especially in beach areas like <strong>Coronado</strong>, your biggest maintenance expense is <strong>Air Conditioning (A/C)</strong>. Due to the salt air and humidity, regular servicing is not optional—it's survival for your equipment.
                                </p>
                                <p>
                                    Expect to pay <strong>$40 - $60 per unit</strong> for a professional cleaning every 4-6 months. Neglecting this can double your monthly <strong>panama electric bill</strong> and lead to costly evaporator coil failures.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-8">
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD mb-2">A/C Service</h5>
                                        <p className="text-xl font-bold italic">$50/visit</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD mb-2">Handyman</h5>
                                        <p className="text-xl font-bold italic">$15 - $25/hr</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/hFYgh-gZ5WU"
                                    title="Panama Cost of Living Deep Dive"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Financials */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-950 italic underline">Reality</span> Check</h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                The <strong>cost of living in panama</strong> is often romanticized, but in 2026, the truth is nuanced. While you can still live on $1,500 if you stay in local Chiriquí towns, most modern expats seek the $3,000+ lifestyle that includes international standards of comfort.
                            </p>
                            <p>
                                From <strong>panama real estate prices</strong> to the cost of electricity (the 'boogie-man' of the beach regions), your budget depends entirely on your geography. <strong>Boquete panama cost of living</strong> is generally 20-30% lower than <strong>Coronado panama</strong> simply because you save on air conditioning.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-8 bg-neutral-50 rounded-[3rem] border border-neutral-100">
                            <ShoppingCart className="text-brand-GOLD mb-4" size={32} />
                            <h4 className="font-black uppercase tracking-widest text-[10px] mb-2">Groceries</h4>
                            <p className="text-2xl font-black italic">$400 - $800</p>
                        </div>
                        <div className="p-8 bg-neutral-950 text-white rounded-[3rem]">
                            <Zap className="text-brand-GOLD mb-4" size={32} />
                            <h4 className="font-black uppercase tracking-widest text-[10px] mb-2">Utilities</h4>
                            <p className="text-2xl font-black italic text-brand-GOLD">$50 - $250</p>
                        </div>
                        <div className="p-8 bg-neutral-900 text-white rounded-[3rem]">
                            <Receipt className="text-brand-GOLD mb-4" size={32} />
                            <h4 className="font-black uppercase tracking-widest text-[10px] mb-2">Rent (Expat)</h4>
                            <p className="text-2xl font-black italic text-brand-GOLD">$1k - $2.5k</p>
                        </div>
                        <div className="p-8 bg-neutral-50 rounded-[3rem] border border-neutral-100">
                            <PiggyBank className="text-brand-GOLD mb-4" size={32} />
                            <h4 className="font-black uppercase tracking-widest text-[10px] mb-2">Misc Fees</h4>
                            <p className="text-2xl font-black italic">$200+</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Tiers */}
            <section className="py-32 bg-neutral-100 rounded-[5rem] mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">Choose Your <span className="text-brand-GOLD">Budget Tier</span></h2>
                        <p className="text-neutral-500 font-black uppercase tracking-widest text-xs">Matching your lifestyle to your wallet.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {budgetTiers.map((tier, i) => (
                            <div key={i} className="bg-white p-16 rounded-[4rem] border border-neutral-200 hover:border-brand-GOLD transition-all group">
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">{tier.name}</h3>
                                <div className="text-4xl font-black text-brand-GOLD mb-8 italic">{tier.price}<span className="text-xs font-bold text-neutral-400"> / mo</span></div>
                                <p className="text-neutral-500 text-sm font-medium mb-10 leading-relaxed">{tier.desc}</p>
                                <ul className="space-y-4 mb-12">
                                    {tier.features.map((f, j) => (
                                        <li key={j} className="flex gap-4 items-center font-black uppercase tracking-widest text-[10px]">
                                            <Check size={14} className="text-brand-GOLD" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={`/${lang}/contacto`} className="w-full block py-6 bg-brand-950 text-white text-center rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
                                    Analyze My Budget
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Dining Scene: From Fonda to Fine Dining */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group">
                                        <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80" alt="Panama Dining" fill className="object-cover transition-transform group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-brand-950/40"></div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD">Casual</p>
                                            <h5 className="text-xl font-black italic">$10 - $15</h5>
                                        </div>
                                    </div>
                                    <div className="p-8 bg-neutral-50 rounded-[3rem] border border-neutral-100">
                                        <Utensils className="text-brand-GOLD mb-4" size={24} />
                                        <h6 className="font-black uppercase tracking-widest text-[9px] mb-2">The Local Fonda</h6>
                                        <p className="text-xs text-neutral-500 font-medium">A full plate of rice, beans, and protein (Menu del Dia) will cost you just $5 - $7 in 2026.</p>
                                    </div>
                                </div>
                                <div className="space-y-6 pt-12">
                                    <div className="p-8 bg-neutral-950 text-white rounded-[3rem]">
                                        <Utensils className="text-brand-GOLD mb-4" size={24} />
                                        <h6 className="font-black uppercase tracking-widest text-[9px] text-brand-GOLD mb-2">Fine Dining</h6>
                                        <p className="text-xs text-gray-400 font-medium">High-end sushi or steakhouse in Panama City will average $60 - $100 per person with drinks.</p>
                                    </div>
                                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group">
                                        <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80" alt="Panama Cocktails" fill className="object-cover transition-transform group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-brand-950/40"></div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD">Luxury</p>
                                            <h5 className="text-xl font-black italic">$80+</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none text-brand-950">Dining <br /> <span className="text-brand-GOLD italic">Economics</span></h2>
                            <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                                <p>
                                    One of the biggest variables in the <strong>living in panama cost</strong> is your social life. Panama City boasts a world-class culinary scene (UNESCO Creative City of Gastronomy), while Boquete and Coronado offer a more relaxed, expat-centric restaurant environment.
                                </p>
                                <p>
                                    Eating "Local" vs. "Imported" is where budgets are made or broken. Your grocery bill will double if you insist on US brands at Riba Smith. Mastering the local <strong>panama farmers markets</strong> is the ultimate Panama Real Estate Sale relocation hack.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Insights Gallery */}
            <section className="py-32 bg-neutral-50 rounded-[5rem] mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">Relocation <span className="text-brand-GOLD">Masterclass</span></h2>
                        <p className="text-neutral-500 font-black uppercase tracking-widest text-xs">Watch and Learn from the experts on the ground.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: "zgRd_amP2kc", title: "Regional Deep Dive" },
                            { id: "rnrHo15Wcu4", title: "Budget Planning 2026" },
                            { id: "XuepRCfHdRY", title: "Real Estate Truths" },
                            { id: "IDPdP-0efpk", title: "Visa Comparison" },
                            { id: "9-LPE1R6bCo", title: "Expat Life Stories" },
                            { id: "qmTurzRTr3g", title: "Moving Logistics" }
                        ].map((video, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-neutral-100 hover:scale-105 transition-all">
                                <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <h4 className="text-sm font-black uppercase tracking-widest text-center italic">{video.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-16 italic text-center">Regional <span className="text-brand-GOLD italic">Price</span> Index</h2>
                <div className="overflow-x-auto rounded-[3rem] border border-neutral-100">
                    <table className="w-full text-left bg-white">
                        <thead>
                            <tr className="bg-neutral-900 text-white">
                                <th className="p-10 text-[10px] font-black uppercase tracking-widest italic">Service</th>
                                <th className="p-10 text-[10px] font-black uppercase tracking-widest italic">Boquete</th>
                                <th className="p-10 text-[10px] font-black uppercase tracking-widest italic">Coronado</th>
                                <th className="p-10 text-[10px] font-black uppercase tracking-widest italic">Panama City</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium text-neutral-600">
                            {[
                                { s: "2BR Condo Rent", b: "$1,200", c: "$1,500", p: "$1,800" },
                                { s: "Lunch (Menu del Dia)", b: "$5", c: "$8", p: "$10" },
                                { s: "Monthly Electric", b: "$40", c: "$150+", p: "$120" },
                                { s: "Fiber Internet (600mb)", b: "$45", c: "$50", p: "$45" },
                                { s: "A/C Service (per unit)", b: "N/A", c: "$45", p: "$50" }
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-neutral-50">
                                    <td className="p-10 font-black uppercase tracking-widest text-[10px] text-brand-950">{row.s}</td>
                                    <td className="p-10">{row.b}</td>
                                    <td className="p-10">{row.c}</td>
                                    <td className="p-10">{row.p}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Related Resources: The Topic Cluster */}
            <section className="py-24 bg-neutral-50 rounded-[5rem] mx-4 mb-32">
                <div className="max-w-7xl mx-auto px-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-400 mb-12 text-center">Complete Your Research</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href={`/${lang}/relocation/weather`} className="group p-10 bg-white rounded-[3rem] border border-neutral-100 hover:border-brand-GOLD transition-all shadow-sm">
                            <Sun className="text-brand-GOLD mb-6" size={24} />
                            <h5 className="text-xl font-black italic uppercase tracking-tighter mb-4">Weather Guide 2026</h5>
                            <p className="text-xs text-neutral-500 font-medium mb-6">Discover the best time to visit and how microclimates affect your move.</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">View Guide <ArrowRight size={12} /></span>
                        </Link>
                        <Link href={`/${lang}/relocation/guides/boquete-vs-coronado`} className="group p-10 bg-white rounded-[3rem] border border-neutral-100 hover:border-brand-GOLD transition-all shadow-sm">
                            <Compass className="text-brand-GOLD mb-6" size={24} />
                            <h5 className="text-xl font-black italic uppercase tracking-tighter mb-4">Boquete vs Coronado</h5>
                            <p className="text-xs text-neutral-500 font-medium mb-6">The definitive showdown between the mountains and the beach.</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">View Guide <ArrowRight size={12} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Ready to <br /> Plan Your <span className="text-brand-GOLD">Numbers</span>?</h2>
                    <p className="text-xl text-neutral-500 mb-16 font-medium leading-relaxed italic">
                        The <strong>cheapest way to get panama residency</strong> starts with a verified budget. Let's crunch the numbers together.
                    </p>
                    <Link href={`/${lang}/relocation/tours`} className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-GOLD hover:text-brand-950 transition-all shadow-2xl inline-block">
                        Customize My Budget Tour
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationCostContent;
