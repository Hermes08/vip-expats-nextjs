'use client';

import React from 'react';
import { Users, Check, ArrowRight, FileText, Globe, Landmark, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const RelocationFriendlyNationsContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Visas", item: "https://expatrockstars.com/relocation/visas" },
        { name: "Friendly Nations", item: "https://expatrockstars.com/relocation/visas/friendly-nations" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />

            {/* Header / Hero */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Global Professional's Choice
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 uppercase tracking-tighter">
                        Friendly <br /> <span className="text-brand-GOLD italic">Nations</span> Visa
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Accelerate your move to Panama. The <strong>friendly nations visa panama</strong> is the premier choice for professionals and investors from 50+ pro-business countries.
                    </p>
                </div>
            </section>

            {/* Core Requirements Section */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-heading font-black mb-10 uppercase tracking-tighter italic">2024 <br /> Requirements</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Citizenship", desc: "Must be a citizen of one of the 50+ 'Friendly Nations' (USA, Canada, UK, EU countries, etc)." },
                                { title: "Economic Reason", desc: "Show proof of professional employment with a Panama company, or purchase real estate (min $200k)." },
                                { title: "Documentation", desc: "Criminal background check, health certificate, and proof of sufficient funds." },
                                { title: "Dependents", desc: "Spouses and children under 18 (or students up to 25) can be included in the application." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 bg-brand-GOLD/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-GOLD transition-all">
                                        <FileText size={24} className="text-brand-GOLD group-hover:text-brand-950" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black uppercase tracking-tighter mb-2 italic">{item.title}</h4>
                                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-neutral-900 rounded-[4rem] p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-GOLD/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <ShieldCheck className="text-brand-GOLD mb-10" size={56} />
                        <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">Why Professionals Choose This Path</h3>
                        <div className="space-y-6">
                            <p className="text-brand-300 font-medium leading-relaxed">
                                Unlike many other residency programs, the <strong>friendly nations visa panama requirements</strong> allow you to live and work in the country while maintaining a highly tax-efficient structure for offshore income.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-xs font-black uppercase tracking-widest">
                                    <Check className="text-brand-GOLD" size={16} /> 2-Year Provisional to Permanent
                                </li>
                                <li className="flex gap-3 text-xs font-black uppercase tracking-widest">
                                    <Check className="text-brand-GOLD" size={16} /> Eligible for Work Permit
                                </li>
                                <li className="flex gap-3 text-xs font-black uppercase tracking-widest">
                                    <Check className="text-brand-GOLD" size={16} /> Access to Local Banking
                                </li>
                                <li className="flex gap-3 text-xs font-black uppercase tracking-widest">
                                    <Check className="text-brand-GOLD" size={16} /> E-Cedula (ID Card)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Timeline */}
            <section className="py-32 bg-neutral-50 rounded-[4rem] mx-4">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-20 text-center uppercase tracking-tighter">The Application <span className="text-brand-GOLD italic">Roadmap</span></h2>
                    <div className="grid md:grid-cols-4 gap-12 text-center">
                        {[
                            { step: "01", title: "Prep", desc: "Apostilling criminal records and health checks in your home country." },
                            { step: "02", title: "Visit", desc: "Initial visit to Panama for legal filing and obtaining your temporary card." },
                            { step: "03", title: "Provisional", desc: "Enjoy 2 years of provisional residency while living your Rockstar life." },
                            { step: "04", title: "Permanent", desc: "Convert to full permanent residency for life." }
                        ].map((m, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-black text-brand-GOLD/10 mb-6 italic">{m.step}</div>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic">{m.title}</h4>
                                <p className="text-sm text-neutral-500 font-medium">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Guide Callout */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="bg-brand-GOLD p-16 rounded-[4rem] text-brand-950 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none italic">Need the full <br /> Dossier?</h2>
                        <p className="text-lg font-bold opacity-80 leading-relaxed">
                            Our clients receive a 50-page <strong>Panama Relocation Dossier</strong> covering every legal nuance of the <strong>friendly nations visa</strong>.
                        </p>
                    </div>
                    <div>
                        <Link href="/relocation/tours" className="px-12 py-6 bg-brand-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-black transition-all flex items-center gap-4">
                            Book Strategy Tour <Zap size={16} className="text-brand-GOLD" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer FAQ Peek */}
            <section className="py-24 text-center border-t border-neutral-100">
                <p className="text-neutral-500 mb-8 font-medium italic uppercase tracking-widest text-xs">Not from a Friendly Nation?</p>
                <Link href="/relocation/visas/qualified-investor" className="text-brand-GOLD font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:gap-5 transition-all">
                    Explore Qualified Investor Visa <ArrowRight size={14} />
                </Link>
            </section>
        </div>
    );
};

export default RelocationFriendlyNationsContent;
