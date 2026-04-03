'use client';

import React from 'react';
import { Briefcase, Check, ArrowRight, FileText, Landmark, ShieldCheck, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

import { useLanguage } from '@/context/LanguageContext';

const RelocationWorkPermitContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Legal Hub", item: `https://panamarealestatesale.com/${lang}/relocation/legal` },
        { name: "Work Permits", item: `https://panamarealestatesale.com/${lang}/relocation/legal/work-permit` }
    ];

    const faqs = [
        {
            question: "How do I get a Panama work permit?",
            answer: "Most work permits require you to have a residency visa first. Once your residency is provisional or permanent, you can apply for a work permit through the Ministry of Labor (MITRADEL) with a local employment contract. The process usually takes 2-4 months for approval."
        },
        {
            question: "Can digital nomads work in Panama?",
            answer: "Yes. Panama offers a 'Short-Stay Visa for Remote Workers' (Digital Nomad Visa) which allows you to live and work in the country for up to 18 months. You must earn at least $36,000 annually from foreign sources and have private health insurance."
        },
        {
            question: "What is the 'Protected Professions' list?",
            answer: "Panama protects over 50 professions for Panamanian citizens only. This includes Medicine, Nursing, Law, Architecture, Accounting, and most Engineering fields. Foreigners cannot get a work permit for these specific roles, but can work as 'Consultants' or 'Managers' in related sectors."
        },
        {
            question: "Does the Friendly Nations Visa include a work permit?",
            answer: "No. The visa gives you residency and the RIGHT to apply for a work permit. You must still file a separate application with MITRADEL once your residency card is issued."
        },
        {
            question: "What is the 10% and 15% rule?",
            answer: "Panamanian companies are restricted in how many foreigners they can hire. Generally, only 10% of the workforce can be foreign (ordinary laborers), or 15% for 'specialized' personnel or managers. This is why many expats choose to start their own companies."
        },
        {
            question: "How much does a work permit cost?",
            answer: "Legal fees range from $800 to $1,500. There is also a government fee of $250 for the 'Carnét de Trabajo' (Work Permit Card)."
        },
        {
            question: "Can I work for a foreign company while in Panama?",
            answer: "Legally, if you are performing work while physically inside Panama, you should have a visa that permits it. The Digital Nomad Visa is designed specifically for this. If you are a permanent resident, you have the right to work anywhere."
        },
        {
            question: "Can I get a work permit as an entrepreneur?",
            answer: "Yes. By creating a Panamanian corporation and appointing yourself as a Director or Executive, you can apply for a work permit under the 'Foreign Personnel' quota."
        },
        {
            question: "Do I need a university degree for a work permit?",
            answer: "For the 'Professional' residency path, yes—it must be apostilled and validated. For many other paths, a degree is not strictly required but highly recommended to avoid MITRADEL audits."
        },
        {
            question: "How long is the work permit valid?",
            answer: "Initial permits are usually valid for 1 year, extendable to 3 years, and eventually indefinitely if you maintain your permanent residency status."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <FAQSchema questions={faqs} />

            {/* Hero Section */}
            <section className="bg-white py-14 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80"
                        alt="Modern professional workspace in Panama City, representing panama work permit opportunities"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        Professional Mobility
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.9]">
                        Panama <br /> <span className="text-brand-GOLD italic">Work</span> Permits
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Work where the sun shines. We provide elite legal guidance for obtaining your <strong>panama work permit</strong>, ensuring a seamless transition for professionals and digital nomads.
                    </p>
                </div>
            </section>

            {/* Deep Context: The Labor Landscape 2026 */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">10% Rule</span> <br /> & Quotas</h2>
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-[1.8]">
                            <p>
                                Panama is protective of its labor market. Most Panamanian companies are limited to a workforce that is **90% Panamanian**. This is known as the "10% Rule." For specialized technical staff or management roles, this quota can be expanded to **15%**.
                            </p>
                            <p>
                                For the <strong>panama work permit 2026</strong> seeker, this means you can't just apply for a barista job. You must be high-value. You must be the "Specialist" that the company cannot find locally. This is why we specialize in the **Professional Residency** path, which facilitates the MITRADEL filing.
                            </p>
                            <div className="p-8 bg-brand-50 text-brand-950 rounded-2xl">
                                <h4 className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-4">Market Insight</h4>
                                <p className="text-sm font-bold italic">
                                    "Multinationals (SEM) are exempt from these quotas. If you get a job with a company like Dell, Sony, or Heineken in Panama City, the work permit process is significantly faster and has no percentage caps."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=80"
                            alt="Business meeting in Panama City's financial district"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Core Pathways */}
            <section className="py-14 bg-white rounded-3xl mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">Choose Your <span className="text-brand-GOLD text-3xl md:text-5xl block">Labor Trajectory</span></h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-brand-50 p-8 rounded-2xl border border-brand-100 group hover:border-brand-GOLD transition-all">
                            <Globe className="text-brand-GOLD mb-10" size={64} />
                            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">The Nomad Visa</h3>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                Officially the "Short-Stay Visa for Remote Workers." It's the most flexible way to live legally in Panama while working for your foreign clients or employer. No local payroll required.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Check className="text-brand-GOLD shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-[10px] mb-1">Income Minimum</h4>
                                        <p className="text-xs text-slate-500 font-medium">$3,000/month individual ($4,000 for families). Verified by 3 months of bank statements.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Check className="text-brand-GOLD shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-[10px] mb-1">100% Remote</h4>
                                        <p className="text-xs text-slate-500 font-medium">You must prove your work is 100% remote and your clients are outside of Panama.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-950 text-white p-8 rounded-2xl relative overflow-hidden group">
                            <Landmark className="text-brand-GOLD mb-10" size={64} />
                            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 italic text-brand-GOLD">The Local Professional</h3>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                This is for the "Panama Real Estate Sale" hired by local Panamanian firms. It is a path to **Permanent Residency**. You will be on a local contract and pay into the Panamanian Social Security (CSS).
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Check className="text-brand-GOLD shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-[10px] mb-1 text-white">Degree Validation</h4>
                                        <p className="text-xs text-gray-500 font-medium">Your University degree must be apostilled and translated by a certified Panamanian professional.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Check className="text-brand-GOLD shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-[10px] mb-1 text-white">Labor Contract</h4>
                                        <p className="text-xs text-gray-500 font-medium">The contract must follow MITRADEL standards and include specific 'extraordinary' clauses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warning: Protected Professions */}
            <section className="py-14 bg-red-950 text-white rounded-3xl mx-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-20">
                    <div className="md:w-1/3">
                        <ShieldCheck size={120} className="text-red-500 opacity-50 mb-10" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter italic leading-none">Access <br /><span className="text-red-500">Denied?</span></h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                            Over 50 professions are strictly reserved for Panamanian citizens. If you are one of the following, you **cannot** obtain a <strong>panama work permit</strong> for these specific roles:
                        </p>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[10px] font-black uppercase tracking-widest text-red-500">
                            <li>Medicine</li>
                            <li>Nursing</li>
                            <li>Law</li>
                            <li>Architecture</li>
                            <li>Civil Engineering</li>
                            <li>Dentistry</li>
                            <li>Psychology</li>
                            <li>Accounting</li>
                            <li>Journalism</li>
                        </ul>
                        <p className="mt-8 text-sm text-slate-500 italic">
                            **Panama Real Estate Sale Solution:** We help you refactor your job title to "Operations Manager" or "Project Consultant" while maintaining legal compliance with MITRADEL.
                        </p>
                    </div>
                </div>
            </section>

            {/* Requirement Checklist */}
            <section className="py-14 bg-white text-white rounded-3xl mx-4">
                <div className="max-w-5xl mx-auto px-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-16 text-center uppercase tracking-tighter">The <span className="text-brand-GOLD italic">Permit</span> Checklist</h2>
                    <div className="space-y-8">
                        {[
                            { title: "Legal Representation", desc: "All labor permits must be processed by a licensed Panamanian lawyer." },
                            { title: "Passport Documentation", desc: "A notarized copy of all passport pages (often requiring a local notary)." },
                            { title: "Power of Attorney", desc: "Granting your legal team the right to represent you at the Ministry of Labor." },
                            { title: "Ministry of Labor (MITRADEL)", desc: "The final step where your professional path is verified and approved." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start pb-8 border-b border-brand-100">
                                <FileText className="text-brand-GOLD shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tighter mb-2 italic">{item.title}</h4>
                                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Callout */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="bg-brand-50 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic leading-none text-brand-900">Get Your <br /> Work Blueprint</h2>
                        <p className="text-lg font-bold text-slate-500 leading-relaxed">
                            Don't navigate MITRADEL alone. Our <strong>panama relocation services</strong> include direct access to specialists who handle the <strong>panama work permit</strong> process for multinational employees and entrepreneurs.
                        </p>
                    </div>
                    <div>
                        <Link href={`/${lang}/contacto`} className="px-12 py-6 bg-white text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-brand-50 transition-all shadow-2xl inline-flex items-center gap-4">
                            Consult Work Expert <Zap size={16} className="text-brand-GOLD" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer FAQ */}
            <section className="py-24 text-center">
                <p className="text-slate-500 mb-8 font-medium italic uppercase tracking-widest text-xs">Combining Residency with Work?</p>
                <Link href={`/${lang}/relocation/visas/friendly-nations`} className="text-brand-GOLD font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:gap-5 transition-all">
                    Explore Friendly Nations Residency <ArrowRight size={14} />
                </Link>
            </section>
        </div>
    );
};

export default RelocationWorkPermitContent;
