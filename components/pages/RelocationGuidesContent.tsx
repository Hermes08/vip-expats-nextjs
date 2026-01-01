'use client';

import React from 'react';
import { ShieldAlert, HeartPulse, GraduationCap, Cat, Home, ArrowRight, Info, HelpCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';

const RelocationGuidesContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Living in Panama", item: "https://expatrockstars.com/relocation/guides" }
    ];

    const faqs = [
        {
            q: "Is Panama safe for retirees?",
            a: "Yes. Panama's 'Interior' and areas like Boquete and Coronado are extremely safe. Standard common sense applies in the city, but overall, it remains one of the safest hubs in Latin America."
        },
        {
            q: "How good is healthcare in Panama?",
            a: "Panama City is home to Johns Hopkins-affiliated hospitals. High-quality private healthcare is affordable and widely available, especially for those with residency discounts."
        },
        {
            q: "Can I bring my pets to Panama?",
            a: "Absolutely. Panama is pet-friendly. You will need a health certificate, USDA (or equivalent) authorization, and to pay a modest quarantine-at-home fee upon arrival."
        }
    ];

    const categories = [
        {
            icon: ShieldAlert,
            title: "Safety & Security",
            desc: "The truth about safety in Panama. Crime rates, gated communities, and safe neighborhoods for families.",
            links: ["Is Panama City Safe?", "Gated Communities Guide", "Walking at Night"]
        },
        {
            icon: HeartPulse,
            title: "Healthcare",
            desc: "Johns Hopkins affiliated hospitals, insurance costs, and the quality of care in Boquete vs City.",
            links: ["Private Health Insurance", "Best Hospitals", "Getting Prescriptions"]
        },
        {
            icon: GraduationCap,
            title: "Education",
            desc: "Top international schools, tuition costs, and the university landscape for expat children.",
            links: ["School Comparison", "International Baccalaureate", "Extracurriculars"]
        },
        {
            icon: Cat,
            title: "Bringing Pets",
            desc: "The logistics of importing your dogs and cats. Quarantine rules, vet care, and pet-friendly rentals.",
            links: ["Import Requirements", "Vet Care in Panama", "Pet-Friendly Flights"]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />
            <FAQSchema questions={faqs.map(f => ({ question: f.q, answer: f.a }))} />

            {/* Hero Section */}
            <section className="bg-brand-950 py-24 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Expat Knowledge Base
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 uppercase tracking-tighter">
                        Living in <br /> <span className="text-brand-GOLD italic">Panama</span> Guide
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Master the logistics of <strong>international living in panama</strong>. From healthcare to safety, we provide the raw data expats need.
                    </p>
                </div>
            </section>

            {/* Category Grid */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((cat, i) => (
                        <div key={i} className="bg-neutral-50 p-12 rounded-[4rem] hover:bg-neutral-100 transition-all group">
                            <cat.icon size={56} className="text-brand-GOLD mb-10" />
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">{cat.title}</h3>
                            <p className="text-neutral-500 font-medium leading-relaxed mb-8">{cat.desc}</p>
                            <div className="flex flex-wrap gap-3">
                                {cat.links.map((link, j) => (
                                    <span key={j} className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-400 cursor-default">
                                        {link}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* In-Depth FAQ (Safety & Healthcare) */}
            <section className="py-32 max-w-5xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">Essential <span className="text-brand-GOLD italic">Truths</span></h2>
                    <p className="text-neutral-500 text-lg uppercase tracking-widest font-black">Answering the most critical relocation questions.</p>
                </div>

                <div className="space-y-12">
                    {[
                        {
                            q: "Is Panama safe for american retirees?",
                            a: "Panama is widely considered the safest country in Central America. While petty theft exists in certain urban pockets, expat hubs like Boquete and Coronado feature highly secure gated communities and active community watch programs."
                        },
                        {
                            q: "What is the quality of healthcare in Panama?",
                            a: "Panama City is home to Pacifica Salud, a Johns Hopkins medicine affiliated hospital. Private healthcare is affordable and world-class. Most expats use private insurance which costs a fraction of the US equivalent."
                        },
                        {
                            q: "Can I bring my dog to Panama?",
                            a: "Yes, Panama is pet-friendly. You will need a health certificate, proof of vaccination, and a 'Home Quarantine' form. We provide full coordination for Rockstar pet relocations."
                        },
                        {
                            q: "What are the best places to live in Panama?",
                            a: "It depends on your vibe. <strong>Boquete</strong> is best for mountain weather and coffee culture. <strong>Coronado</strong> is the beach hub for weekenders and retirees. <strong>Panama City</strong> offers urban luxury and the best dining."
                        }
                    ].map((faq, i) => (
                        <div key={i} className="group border-b border-neutral-100 pb-12">
                            <div className="flex gap-6 items-start">
                                <HelpCircle className="text-brand-GOLD shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic group-hover:text-brand-GOLD transition-colors">{faq.q}</h4>
                                    <p className="text-sm text-neutral-500 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Callout */}
            <section className="py-24 bg-brand-GOLD rounded-[4rem] mx-4 text-brand-950">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9] italic">Beach vs <br /> Mountain?</h2>
                        <p className="text-lg font-bold opacity-80 mb-8">
                            Can't decide between the surf of Coronado and the cool breeze of Boquete? Our comparison guide breaks down the weather, lifestyle, and real estate ROI.
                        </p>
                        <Link href="/relocation/guides/boquete-vs-coronado" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-brand-950 text-white px-8 py-5 rounded-2xl hover:bg-black transition-all">
                            View Comparison <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="md:w-1/2 relative aspect-video overflow-hidden rounded-[3rem] shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1544644011-87b829283197?w=800&q=80"
                            alt="Comparison between beach and mountain lifestyles in Panama relocation"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Newsletter / Guide CTA */}
            <section className="py-32 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 italic">Get the Ultimate Relocation Dossier</h2>
                    <p className="text-neutral-500 mb-12 font-medium">
                        Join 10,000+ prospective expats who receive our weekly insights on <strong>expat life in panama</strong>.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <input type="email" placeholder="Your Email" className="px-8 py-5 bg-neutral-100 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-GOLD font-medium w-full md:w-80" />
                        <button className="px-10 py-5 bg-brand-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-black transition-all">
                            Download Guide
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationGuidesContent;
