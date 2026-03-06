'use client';

import React from 'react';
import { Baby, GraduationCap, ShieldCheck, HeartPulse, Users, Home, ArrowRight, Zap, Check, HelpCircle, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { useLanguage } from '@/context/LanguageContext';

const RelocationFamiliesContent = () => {
    const { lang } = useLanguage();
    const faqs = [
        {
            question: "Are international schools in Panama expensive?",
            answer: "Top schools like **ISP (International School of Panama)** or **Kings College** typically range from $12,000 to $20,000 per year. However, there are excellent mid-tier bilingual schools (like **Coronado International**) that range from $4,000 to $8,000 per year."
        },
        {
            question: "Is health insurance for children affordable?",
            answer: "Yes. Private insurance for a child in Panama can cost as little as $50 - $100 per month, covering world-class treatment at hospitals like **Pacifica Salud (Johns Hopkins Affiliate)**."
        },
        {
            question: "What are the best neighborhoods for expat families?",
            answer: "For city life, **Clayton** and **Cárdenas** offer gated living with green spaces. For beach life, **Coronado** is the gold standard for its school and social clubs. For mountain life, **Boquete** is incredibly safe and community-driven."
        },
        {
            question: "Do I need to speak Spanish to move my family?",
            answer: "While encouraged, many expat families live comfortably with basic Spanish. Most international schools and private pediatricians are fluent in English."
        }
    ];

    return (
        <div className="bg-white text-brand-950 min-h-screen font-sans">
            <BreadcrumbSchema
                items={[
                    { name: 'Relocation', item: `https://panamarealestatesale.com/${lang}/relocation` },
                    { name: 'Families', item: `https://panamarealestatesale.com/${lang}/families` }
                ]}
            />
            <FAQSchema questions={faqs} />
            <ServiceSchema
                name="Panama Family Relocation Consultancy"
                description="Comprehensive relocation services for families moving to Panama, focusing on international schools, safety, and family-friendly communities."
                serviceType="Family Relocation & Education Consulting"
            />
            <LocalBusinessSchema />

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 bg-brand-950 text-white overflow-hidden rounded-b-[5rem]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-GOLD rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-GOLD/10 border border-brand-GOLD/20 rounded-full mb-10">
                        <Star size={14} className="text-brand-GOLD" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD">Expat Family Guide 2026</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-heading font-black mb-12 uppercase tracking-tighter leading-none italic">
                        The <span className="text-brand-GOLD underline italic">Family</span> <br /> Upgrade.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed mb-16 max-w-3xl mx-auto">
                        Raising kids in Panama isn't just a move—it's a massive advantage. Give your family the <strong>international lifestyle</strong>, world-class education, and the safety they deserve in the <strong>best places to live in panama</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link href={`/${lang}/contacto`} className="px-16 py-8 bg-brand-GOLD text-brand-950 rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
                            Request Family Relocation Plan
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Parent's Choice */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none text-brand-950">Safe, Diverse, <br /><span className="text-brand-GOLD underline italic">Elite.</span></h2>
                            <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                                <p>
                                    Why are <strong>expat families moving to panama</strong>? In 2026, the demand for safety and quality of education has never been higher. Panama offers a unique ecosystem where kids grow up trilingual, outdoors, and globally connected.
                                </p>
                                <p>
                                    From the <strong>Boquete</strong> highlands to the <strong>Coronado</strong> beaches, we specialize in finding the perfect "Panama Real Estate Sale" base that aligns with your children's schooling needs and your lifestyle goals.
                                </p>
                                <div className="p-8 bg-neutral-50 rounded-[4rem] border border-neutral-100 italic font-bold text-brand-950">
                                    "We moved from Toronto to Clayton. Our kids are in the best school we've ever experienced, and they spend every afternoon in the pool or the park. The quality of life for families here is unmatched."
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl skew-y-3">
                            <Image
                                src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80"
                                alt="Expat family enjoying Panama"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars for Families */}
            <section className="py-32 bg-neutral-950 text-white rounded-[5rem] mx-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-20 px-4">
                        <h2 className="text-4xl md:text-8xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none text-center">The <span className="text-brand-GOLD">Family</span> Pillars</h2>
                        <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] mx-auto text-center italic">Everything you need to know about the kids in Panama.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <GraduationCap className="text-brand-GOLD" size={40} />,
                                title: "Schools",
                                desc: "Kings College (British), ISP (American), MET (IB Program). Panama has a world-class international school system that prepares kids for top global universities."
                            },
                            {
                                icon: <ShieldCheck className="text-brand-GOLD" size={40} />,
                                title: "Safety",
                                desc: "Expat-heavy areas like Coronado and Boquete are famously safe. Kids still play on the streets, ride bikes to the beach, and enjoy a sense of freedom lost in the US/Europe."
                            },
                            {
                                icon: <HeartPulse className="text-brand-GOLD" size={40} />,
                                title: "Healthcare",
                                desc: "Pediatric care in Panama is exceptional. Most doctors are US-trained and speak perfect English. Private health insurance for kids is affordable and comprehensive."
                            }
                        ].map((pillar, idx) => (
                            <div key={idx} className="p-12 bg-white/5 border border-white/5 rounded-[4rem] group hover:border-brand-GOLD/30 transition-all">
                                <div className="mb-8">{pillar.icon}</div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6 leading-none">{pillar.title}</h3>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Neighborhood Spotlight */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic italic">Where to <span className="text-brand-GOLD underline italic text-center">Land?</span></h2>
                        <p className="text-neutral-500 font-medium italic text-center">Top 3 hubs for expat families in 2026.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1544644011-87b829283197?w=800&q=80",
                                name: "Clayton / Cárdenas",
                                vibe: "The School Hub",
                                desc: "Closest to top schools and national parks. Lush, green, and full of other expat families."
                            },
                            {
                                img: "https://images.unsplash.com/photo-1544644011-87b829283197?w=800&q=80",
                                name: "Coronado",
                                vibe: "The Beach Hub",
                                desc: "Gated beach community with its own international school and thriving social scene."
                            },
                            {
                                img: "https://images.unsplash.com/photo-1544644011-87b829283197?w=800&q=80",
                                name: "Boquete",
                                vibe: "The Adventure Hub",
                                desc: "Safe mountain village. Great for families seeking nature, coffee culture, and tranquility."
                            }
                        ].map((hub, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-[4rem]">
                                <div className="aspect-[4/5] relative">
                                    <Image src={hub.img} alt={hub.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent opacity-80" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-10">
                                    <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-2 block">{hub.vibe}</span>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none">{hub.name}</h3>
                                    <p className="text-gray-300 text-xs font-medium leading-relaxed">{hub.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Family FAQ */}
            <section className="py-32 bg-neutral-50 border-t border-neutral-100">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-6xl font-heading font-black mb-20 text-center uppercase tracking-tighter italic">Family <span className="text-brand-GOLD italic">Knowledge</span></h2>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-[2.5rem] border border-neutral-200 overflow-hidden transition-all hover:border-brand-GOLD/50">
                                <summary className="flex items-center justify-between p-10 cursor-pointer list-none">
                                    <span className="text-lg font-black uppercase tracking-tighter italic pr-8 text-brand-950">{faq.question}</span>
                                    <HelpCircle className="text-brand-GOLD" size={24} />
                                </summary>
                                <div className="px-10 pb-10 text-neutral-500 font-medium leading-relaxed border-t border-neutral-100 pt-8" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-brand-950 text-white text-center relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-GOLD opacity-10 rounded-full blur-[150px]"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                    <h2 className="text-5xl md:text-9xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none text-center">The Next <br /> <span className="text-brand-GOLD underline italic">Generation</span> <br /> Awaits.</h2>
                    <p className="text-xl md:text-2xl font-medium mb-16 text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                        Don't just move your family. Upgrade their future. Let the Panama Real Estate Sale team handle the logistics while you focus on the memories.
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-8">
                        <Link href={`/${lang}/contacto`} className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-brand-GOLD text-brand-950 rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
                            Design My Family Relocation <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationFamiliesContent;
