'use client';

import React from 'react';
import { ShieldCheck, Gavel, Scale, FileText, Briefcase, HelpCircle, ArrowRight, UserCheck, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const RelocationLegalContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Legal & Immigration", item: "https://expatrockstars.com/relocation/legal" }
    ];
    // ... (omitting rest of constants for brevity, will use multi-replace or just replace hero)

    const legalServices = [
        {
            title: "Panama Residency",
            desc: "Expert guidance through <strong>panama residency</strong> options, from the <strong>friendly nations visa</strong> to the <strong>qualified investor</strong> program.",
            icon: ShieldCheck
        },
        {
            title: "Work Permits",
            desc: "Secure a <strong>panama work permit</strong> for professionals or digital nomads. Navigating the 2024 labor laws with precision.",
            icon: Briefcase
        },
        {
            title: "Corporate Setup",
            desc: "Establishing Panamanian corporations and foundations for tax efficiency and asset protection.",
            icon: Scale
        }
    ];

    const faqs = [
        {
            q: "Do I need a panama immigration lawyer?",
            a: "Yes. By law, all residency applications in Panama must be filed through a licensed Panamanian lawyer. We partner with the top in-house firm to ensure your <strong>panama residency visa</strong> is filed correctly the first time."
        },
        {
            q: "What are the passport requirements for Panama?",
            a: "Your <strong>passport for panama</strong> must be valid for at least 3-6 months depending on your home country. For residency, it must be valid for the duration of the processing."
        },
        {
            q: "How long does panama permanent residency take?",
            a: "It depends on the visa. The <strong>qualified investor visa</strong> can grant PR in 30 days, while the <strong>friendly nations visa panama requirements</strong> involve a 2-year provisional period before conversion."
        },
        {
            q: "What is the cost of a private immigration consultation?",
            a: "While we provide the logistics and housing, we connect you with <strong>panama immigration lawyers</strong> for a private review. Our specialized <strong>panama relocation tours</strong> include this consultation at no extra cost."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-brand-950 text-white font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: "https://expatrockstars.com/" }, ...breadcrumbItems]} />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <FAQSchema questions={faqs.map(f => ({ question: f.q, answer: f.a }))} />

            {/* Disclaimer Bar */}
            <div className="bg-brand-GOLD text-brand-950 py-3 text-center text-[10px] font-black uppercase tracking-[0.3em] sticky top-20 z-40">
                <AlertTriangle className="inline-block mr-2" size={14} />
                Professional Relocation Logistics — Official Legal Services provided by our Partner Firm
            </div>

            {/* Hero Section */}
            <section className="py-32 text-center max-w-7xl mx-auto px-4 relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
                        alt="Legal and immigration services concept for Panama residency"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        Legal & Immigration Hub
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-10 uppercase tracking-tighter">
                        Secure Your <br /><span className="text-brand-GOLD italic">Panama</span> Future
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        We aren't just tour guides; we are the bridge to your new life. While we handle the logistics, our <strong>panama immigration lawyers</strong> handle the law.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {legalServices.map((service, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-12 rounded-[4rem] hover:border-brand-GOLD/30 transition-all group">
                            <service.icon className="text-brand-GOLD mb-8 group-hover:scale-110 transition-transform" size={48} />
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">{service.title}</h3>
                            <p className="text-neutral-500 font-medium leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: service.desc }}></p>
                            <Link href="/relocation/visas" className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">
                                Discover More <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Value Proposition: The Lawyer Connection */}
            <section className="py-32 bg-white text-brand-950 rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <UserCheck size={64} className="text-brand-GOLD mb-10" />
                            <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD underline">In-House</span> Advantage</h2>
                            <p className="text-xl text-neutral-600 font-medium leading-[1.8] mb-12">
                                Navigating <strong>panama visa requirements</strong> alone is a liability. We put you in direct contact with our firm's specialized attorneys to handle everything from your <strong>panama work permit</strong> to permanent residency.
                            </p>
                            <Link href="/contacto" className="px-12 py-6 bg-brand-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-brand-GOLD hover:text-brand-950 transition-all inline-block shadow-2xl">
                                Meet the Legal Team
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 bg-neutral-950 text-white rounded-[3rem] text-center border border-white/10">
                                    <div className="text-4xl font-black italic text-brand-GOLD mb-2">15+</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Years of Experience</div>
                                </div>
                                <div className="p-8 bg-neutral-100 rounded-[3rem] text-center border border-neutral-200">
                                    <div className="text-4xl font-black italic text-brand-950 mb-2">2,500+</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Visas Processed</div>
                                </div>
                                <div className="p-8 bg-neutral-100 rounded-[3rem] text-center border border-neutral-200">
                                    <div className="text-4xl font-black italic text-brand-950 mb-2">100%</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Success Rate</div>
                                </div>
                                <div className="p-8 bg-brand-GOLD text-brand-950 rounded-[3rem] text-center">
                                    <div className="text-4xl font-black italic mb-2">Elite</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Legal Network</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal FAQ Section */}
            <section className="py-32 max-w-5xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic"><span className="text-brand-GOLD">Legal</span> FAQ</h2>
                    <p className="text-neutral-500 text-lg uppercase tracking-widest font-black">Clearing the path for your relocation.</p>
                </div>

                <div className="space-y-10">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-10 rounded-[3rem] hover:bg-white/10 transition-all">
                            <div className="flex gap-6 items-start">
                                <HelpCircle className="text-brand-GOLD shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic">{faq.q}</h4>
                                    <p className="text-sm text-neutral-400 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Entry Requirements Callout */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="bg-brand-GOLD p-16 rounded-[4rem] text-brand-950 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic">Ready to Apply?</h2>
                    <p className="text-xl font-bold opacity-80 mb-12 max-w-2xl mx-auto">
                        Don't let <strong>panama entry requirements</strong> or complex forms slow you down. Get the legal clarity you need today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contacto" className="px-12 py-6 bg-brand-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-black transition-all">
                            Book Legal Consultation
                        </Link>
                        <Link href="/relocation/visas" className="px-12 py-6 bg-white border-2 border-brand-950 text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-brand-950 hover:text-white transition-all">
                            View Visa Options
                        </Link>
                    </div>
                </div>
            </section>

            {/* Keyword Footer SEO */}
            <section className="py-24 border-t border-white/5 opacity-40 text-center">
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 text-[9px] font-black uppercase tracking-widest">
                    <span>Panama Immigration Lawyer</span>
                    <span>Friendly Nations Visa Requirements</span>
                    <span>Pensionado Visa Panama</span>
                    <span>Panama Residency by Investment</span>
                    <span>Panama Work Permit Guide</span>
                </div>
            </section>
        </div>
    );
};

export default RelocationLegalContent;
