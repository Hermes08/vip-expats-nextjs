'use client';

import React from 'react';
import { Target, TrendingUp, Users, Heart, ShieldCheck, Globe, ArrowRight, Zap, Landmark, Home, Check, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { useLanguage } from '@/context/LanguageContext';

const RelocationEarlyRetirementContent = () => {
    const { lang } = useLanguage();
    const faqs = [
        {
            question: "Can I get a Pensionado Visa if I am under 50?",
            answer: "Yes. There is no minimum age requirement for the Pensionado Visa. As long as you have a lifetime government or corporate pension of $1,000/month, you qualify. This makes it perfect for military retirees or those with early annuities."
        },
        {
            question: "What if I don't have a pension yet?",
            answer: "The **Qualified Investor Visa** and the **Friendly Nations Visa** are the two best paths for early retirees. These focus on investment in real estate or bank deposits rather than age-based pension income."
        },
        {
            question: "Is Panama safe for families with young children?",
            answer: "Absolutely. Communities like Coronado and Clayton (Panama City) are built for families, offering top-tier international schools and gated security."
        },
        {
            question: "How much do I need to retire early in Panama?",
            answer: "While it depends on your lifestyle, a couple can live like 'Panama Real Estate Sales' on $3,500 - $5,000 per month, including a luxury condo, private healthcare, and frequent dining out."
        }
    ];

    return (
        <div className="bg-white text-brand-950 min-h-screen">
            <BreadcrumbSchema
                items={[
                    { name: 'Relocation', item: `https://panamarealestatesale.com/${lang}/relocation` },
                    { name: 'Early Retirement', item: `https://panamarealestatesale.com/${lang}/relocation/early-retirement` }
                ]}
            />
            <FAQSchema questions={faqs} />
            <ServiceSchema
                name="Early Retirement in Panama (FIRE) Consultancy"
                description="Specialized relocation services for the FIRE community and early retirees under 50 moving to Panama."
                serviceType="Relocation & Financial Planning"
            />
            <LocalBusinessSchema />

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 bg-brand-950 text-white overflow-hidden rounded-b-[5rem]">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-GOLD/10 border border-brand-GOLD/20 rounded-full mb-10">
                        <TrendingUp size={14} className="text-brand-GOLD" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD">The FIRE Guide to Panama</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-heading font-black mb-12 uppercase tracking-tighter leading-none italic">
                        The <span className="text-brand-GOLD underline italic">Second</span> Act <br /> Begins Now.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed mb-16 max-w-3xl mx-auto">
                        Why wait until 65? Panama is the ultimate destination for the <strong>early retirement</strong> community. Escape the grind and leverage your capital for a high-intensity lifestyle in the <strong>best places to retire in panama</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link href={`/${lang}/contacto`} className="px-16 py-8 bg-brand-GOLD text-brand-950 rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
                            Unlock My Early Exit
                        </Link>
                        <Link href={`/${lang}/relocation/legal`} className="px-16 py-8 bg-white/5 border border-white/10 text-white rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                            View Visa Paths
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why FIRE in Panama? */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-square">
                        <Image
                            src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=1000&q=80"
                            alt="Luxury lifestyle in Panama"
                            fill
                            className="object-cover rounded-[5rem] shadow-2xl"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-brand-GOLD p-12 rounded-[4rem] text-brand-950 shadow-2xl">
                            <h4 className="text-5xl font-black italic mb-2 tracking-tighter">100%</h4>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Tax Freedom</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Your Capital, <br /> <span className="text-brand-GOLD underline">Magnified.</span></h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                For the <strong>early retiree under 50</strong>, the primary hurdle isn't the beach—it's the math. Panama's dual-currency system (USD) and tax-friendly environment mean your retirement fund lasts 2-3x longer than in Canada or the US.
                            </p>
                            <p>
                                Leverage the <strong>friendly nations visa panama requirements</strong> to secure permanent residency via a $200,000 investment. This isn't just a visa; it's an asset play. You own the land, you own the visa, you own your time.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
                                <div>
                                    <div className="text-brand-GOLD font-black text-3xl mb-2">Zero</div>
                                    <p className="text-xs uppercase font-black text-neutral-400">Capital Gains Tax*</p>
                                </div>
                                <div>
                                    <div className="text-brand-GOLD font-black text-3xl mb-2">Top-5</div>
                                    <p className="text-xs uppercase font-black text-neutral-400">Healthcare System</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Path for Under 50s */}
            <section className="py-32 bg-neutral-900 text-white rounded-[5rem] mx-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-20 px-4">
                        <h2 className="text-4xl md:text-8xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none text-center">The <span className="text-brand-GOLD">Under 50</span> Playbook</h2>
                        <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] mx-auto text-center italic">Strategic Visa Selection for the FIRE Community.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Qualified Investor",
                                speed: "30 Days",
                                target: "Immediate PR",
                                desc: "The ultimate 'express' lane. A $300,000 real estate purchase grants you and your family permanent residency in weeks. No provisional stage."
                            },
                            {
                                title: "Friendly Nations",
                                speed: "6 Months",
                                target: "2-Year Card",
                                desc: "The most flexible path. Open to citizens of 50+ nations. Secure residency through a $200k property purchase or high-salary employment."
                            },
                            {
                                title: "Pensionado",
                                speed: "90 Days",
                                target: "Lifetime PR",
                                desc: "No minimum age. If you have a $1,000/mo government or corporate pension, you are IN. Includes all Law-6 discounts immediately."
                            }
                        ].map((path, idx) => (
                            <div key={idx} className="p-12 bg-white/5 border border-white/5 rounded-[4rem] group hover:border-brand-GOLD/30 transition-all">
                                <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-4 flex justify-between">
                                    <span>{path.speed}</span>
                                    <span>{path.target}</span>
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6 leading-none">{path.title}</h3>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8">{path.desc}</p>
                                <Link href={`/${lang}/relocation/legal`} className="inline-flex items-center gap-2 text-brand-GOLD font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all italic">
                                    Deep Dive <ArrowRight size={14} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lifestyle Integration */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic italic">Beyond the <span className="text-brand-GOLD underline italic">Beach</span></h2>
                        <p className="text-neutral-500 font-medium italic">What does an early retiree actually *do* in Panama?</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Heart className="text-brand-GOLD" size={32} />, title: "Wellness Hubs", desc: "Coronado's fitness community and Boquete's clean mountain air are built for longevity." },
                            { icon: <Zap className="text-brand-GOLD" size={32} />, title: "Networking", desc: "Connect with serial entrepreneurs and fellow FIRE enthusiasts in Panama City's tech hubs." },
                            { icon: <Globe className="text-brand-GOLD" size={32} />, title: "Travel Base", desc: "Use Tocumen (Hub of the Americas) to explore the continent with ease and zero jetlag." },
                            { icon: <Home className="text-brand-GOLD" size={32} />, title: "Asset Build", desc: "Build wealth through Panama's growing luxury hospitality and short-term rental market." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:bg-white hover:shadow-xl transition-all">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 italic leading-tight">{item.title}</h3>
                                <p className="text-neutral-500 font-medium text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 bg-brand-950 text-white border-t border-white/5">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-6xl font-heading font-black mb-20 text-center uppercase tracking-tighter italic italic">Early Relocation <span className="text-brand-GOLD">Intel</span></h2>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden transition-all hover:border-brand-GOLD/50">
                                <summary className="flex items-center justify-between p-10 cursor-pointer list-none">
                                    <span className="text-lg font-black uppercase tracking-tighter italic pr-8">{faq.question}</span>
                                    <HelpCircle className="text-brand-GOLD/50 group-hover:text-brand-GOLD transition-colors" size={24} />
                                </summary>
                                <div className="px-10 pb-10 text-gray-400 font-medium leading-relaxed border-t border-white/5 pt-8">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-5xl md:text-9xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none text-center">Exit <br /> Your <span className="underline italic">Old Life.</span></h2>
                    <p className="text-xl md:text-2xl font-black mb-16 opacity-80 max-w-xl mx-auto italic text-center">
                        The best time to retire was yesterday. The second best time is today. We guide the under-50 crowd to legal and lifestyle freedom in Panama.
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-8">
                        <Link href={`/${lang}/contacto`} className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-brand-950 text-white rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-2xl">
                            Schedule My FIRE Audit <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationEarlyRetirementContent;
