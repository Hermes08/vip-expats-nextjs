'use client';

import React from 'react';
import { Briefcase, Check, ArrowRight, FileText, Landmark, ShieldCheck, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const RelocationWorkPermitContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Legal Hub", item: "https://expatrockstars.com/relocation/legal" },
        { name: "Work Permits", item: "https://expatrockstars.com/relocation/legal/work-permit" }
    ];

    const faqs = [
        {
            question: "How do I get a Panama work permit?",
            answer: "Most work permits require you to have a residency visa first. Once your residency is provisional or permanent, you can apply for a work permit through the Ministry of Labor with a local employment contract."
        },
        {
            question: "Can digital nomads work in Panama?",
            answer: "Yes. Panama offers a Short-Stay Visa for Remote Workers (Digital Nomad Visa) which allows you to live and work in the country for up to 18 months, provided you earn more than $36,000 annually from foreign sources."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: "https://expatrockstars.com/" }, ...breadcrumbItems]} />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <FAQSchema questions={faqs} />

            {/* Hero Section */}
            <section className="bg-brand-950 py-32 text-white relative overflow-hidden rounded-b-[4rem]">
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
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.9]">
                        Panama <br /> <span className="text-brand-GOLD italic">Work</span> Permits
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Work where the sun shines. We provide elite legal guidance for obtaining your <strong>panama work permit</strong>, ensuring a seamless transition for professionals and digital nomads.
                    </p>
                </div>
            </section>

            {/* Core Pathways */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-neutral-50 p-12 rounded-[4rem] border border-neutral-100 h-full">
                        <Globe className="text-brand-GOLD mb-8" size={56} />
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">Digital Nomad Guide</h3>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-8">
                            Panama's Short-Stay Visa for Remote Workers is perfect for those earning more than $36,000 annually from foreign sources. Enjoy 9 months of legalized remote work, extendable to 18 months.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-900">
                                <Check className="text-brand-GOLD" size={16} /> Foreign income proof
                            </li>
                            <li className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-900">
                                <Check className="text-brand-GOLD" size={16} /> Private health insurance
                            </li>
                        </ul>
                    </div>
                    <div className="bg-neutral-50 p-12 rounded-[4rem] border border-neutral-100 h-full">
                        <Landmark className="text-brand-GOLD mb-8" size={56} />
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">Professional Path</h3>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-8">
                            For those hired by Panamanian companies. The 10% and 15% rules (percentage of foreign labor) apply. Requires a local labor contract and ministry approval.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-900">
                                <Check className="text-brand-GOLD" size={16} /> Accredited degree/diploma
                            </li>
                            <li className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-900">
                                <Check className="text-brand-GOLD" size={16} /> Local employment contract
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Requirement Checklist */}
            <section className="py-32 bg-brand-950 text-white rounded-[5rem] mx-4">
                <div className="max-w-5xl mx-auto px-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-16 text-center uppercase tracking-tighter">The <span className="text-brand-GOLD italic">Permit</span> Checklist</h2>
                    <div className="space-y-8">
                        {[
                            { title: "Legal Representation", desc: "All labor permits must be processed by a licensed Panamanian lawyer." },
                            { title: "Passport Documentation", desc: "A notarized copy of all passport pages (often requiring a local notary)." },
                            { title: "Power of Attorney", desc: "Granting your legal team the right to represent you at the Ministry of Labor." },
                            { title: "Ministry of Labor (MITRADEL)", desc: "The final step where your professional path is verified and approved." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start pb-8 border-b border-white/5">
                                <FileText className="text-brand-GOLD shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tighter mb-2 italic">{item.title}</h4>
                                    <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Callout */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="bg-neutral-50 p-16 rounded-[4rem] flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic leading-none text-brand-900">Get Your <br /> Work Blueprint</h2>
                        <p className="text-lg font-bold text-neutral-500 leading-relaxed">
                            Don't navigate MITRADEL alone. Our <strong>panama relocation services</strong> include direct access to specialists who handle the <strong>panama work permit</strong> process for multinational employees and entrepreneurs.
                        </p>
                    </div>
                    <div>
                        <Link href="/contacto" className="px-12 py-6 bg-brand-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-black transition-all shadow-2xl inline-flex items-center gap-4">
                            Consult Work Expert <Zap size={16} className="text-brand-GOLD" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer FAQ */}
            <section className="py-24 text-center">
                <p className="text-neutral-500 mb-8 font-medium italic uppercase tracking-widest text-xs">Combining Residency with Work?</p>
                <Link href="/relocation/visas/friendly-nations" className="text-brand-GOLD font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:gap-5 transition-all">
                    Explore Friendly Nations Residency <ArrowRight size={14} />
                </Link>
            </section>
        </div>
    );
};

export default RelocationWorkPermitContent;
