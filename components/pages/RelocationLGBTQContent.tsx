'use client';

import React from 'react';
import { Heart, ShieldCheck, Users, Globe, ArrowRight, Zap, Check, HelpCircle, Rainbow, Sparkles, MapPin, Scale } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

import { useLanguage } from '@/context/LanguageContext';

const RelocationLGBTQContent = () => {
    const { lang } = useLanguage();
    const faqs = [
        {
            question: "Is same-sex marriage recognized for residency in Panama?",
            answer: "Currently, Panama does not recognize same-sex marriage for immigration dependency. However, most LGBTQ+ couples apply for individual **Friendly Nations Visas** or **Qualified Investor Visas** to secure their residency independently while living together."
        },
        {
            question: "Which neighborhoods are most LGBTQ+ friendly?",
            answer: "**Casco Viejo** and **El Cangrejo** in Panama City are the most tolerant and vibrant hubs. You'll find a highly diverse, international community and several LGBTQ-owned businesses and social spaces."
        },
        {
            question: "Is Panama safe for LGBTQ+ expats?",
            answer: "Panama City and major hubs like Boquete are generally very safe and tolerant of the expat community. While Panama remains a conservative country culturally, 'live and let live' is the prevailing expat experience, especially in high-end hubs."
        },
        {
            question: "Are there LGBTQ+ community groups in Panama?",
            answer: "Yes. From informal digital nomad meetups to organized groups like **Fundación Iguales**, there is a growing and supportive network for LGBTQ+ residents in the capital."
        }
    ];

    return (
        <div className="bg-brand-950 text-white min-h-screen font-sans">
            <BreadcrumbSchema
                items={[
                    { name: 'Relocation', item: `https://panamarealestatesale.com/${lang}/relocation` },
                    { name: 'LGBTQ+ Expats', item: `https://panamarealestatesale.com/${lang}/relocation/lgbtq-expats` }
                ]}
            />
            <FAQSchema questions={faqs} />
            <ServiceSchema
                name="LGBTQ+ Relocation to Panama Consultancy"
                description="Specialized relocation and legal guidance for LGBTQ+ expats moving to Panama, focusing on safe neighborhoods and independent residency strategies."
                serviceType="LGBTQ+ Relocation Services"
            />
            <LocalBusinessSchema />

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 bg-brand-950 text-white overflow-hidden rounded-b-[5rem]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-GOLD rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-opacity-10 border border-white/20 rounded-full mb-10">
                        <Rainbow size={14} className="text-white" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">The LGBTQ+ Expat Guide 2026</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter">
                        Live <span className="text-brand-GOLD underline italic">Proud.</span> <br /> Move Panama.
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
                        Panama is rapidly evolving. Discover the honest reality of <strong>LGBTQ+ life in Panama</strong>, from the vibrant streets of Casco Viejo to the legal strategies for <strong>panama residency</strong> in 2026.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link href={`/${lang}/contact`} className="px-8 py-4 bg-brand-GOLD text-brand-950 rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
                            Request My Proud Relocation Plan
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Reality & Respect */}
            <section className="py-14">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none text-brand-950">Transparency <br /><span className="text-brand-GOLD underline italic">First.</span></h2>
                            <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                                <p>
                                    We don't sugarcoat the legalities. While Panama is a regional leader in economy and safety, LGBTQ+ legal rights are still progressing. We specialize in navigating the <strong>panama immigration</strong> system for same-sex couples through individual visa paths that ensure your residency is secure and independent.
                                </p>
                                <p>
                                    The <strong>LGBTQ+ community in Panama City</strong> is one of the most vibrant in Central America, centered around arts, tech, and international business. We guide you to the neighborhoods that match your vibe.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                    <div className="flex gap-4">
                                        <MapPin className="text-brand-GOLD shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-black text-xs uppercase mb-2">Top Hubs</h4>
                                            <p className="text-xs text-slate-400">Casco Viejo & El Cangrejo</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Scale className="text-brand-GOLD shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-black text-xs uppercase mb-2">Legal Path</h4>
                                            <p className="text-xs text-slate-400">Individual 'Friendly Nations' focus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=1000&q=80"
                                alt="Casco Viejo Panama, a hub for LGBTQ+ expats"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Panama for LGBTQ+ */}
            <section className="py-14 bg-black text-white rounded-3xl mx-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-10 px-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none text-center">The <span className="text-brand-GOLD italic">Proud</span> Perspective</h2>
                        <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mx-auto text-center italic">Why the community is choosing Panama in 2026.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart className="text-brand-GOLD" size={40} />,
                                title: "Cosmopolitan Vibe",
                                desc: "Panama City feels like Miami meet Casco. It is a true melting pot where international expats of all backgrounds blend seamlessly into the city's elite social circles."
                            },
                            {
                                icon: <Users className="text-brand-GOLD" size={40} />,
                                title: "Global Networks",
                                desc: "The LGBTQ+ expat scene is highly professional. Many are digital nomads, entrepreneurs, or executives for multinationals (MNCs) using Panama as their Latin base."
                            },
                            {
                                icon: <ShieldCheck className="text-brand-GOLD" size={40} />,
                                title: "Security",
                                desc: "Panama City's top neighborhoods offer 24/7 security and a level of safety that allows you to enjoy the nightlife and culture without the concerns found in other regional capitals."
                            }
                        ].map((pillar, idx) => (
                            <div key={idx} className="p-12 bg-white/5 border border-white/5 rounded-2xl group hover:border-brand-GOLD/30 transition-all">
                                <div className="mb-8">{pillar.icon}</div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6 leading-none">{pillar.title}</h3>
                                <p className="text-slate-400 font-medium text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Neighborhood Spotlight */}
            <section className="py-14">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">City <span className="text-brand-GOLD underline italic">Soul.</span></h2>
                        <p className="text-slate-400 font-medium italic">The neighborhoods that welcome everyone.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80",
                                name: "Casco Viejo",
                                vibe: "The Historic Heart",
                                desc: "The epicenter of fashion, arts, and the LGBTQ+ social scene. High-end boutique living with a world-class culinary landscape."
                            },
                            {
                                img: "https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80",
                                name: "El Cangrejo",
                                vibe: "The Urban Pulse",
                                desc: "Bohemian, walkable, and authentic. Home to many expat-frequented bars, cafes, and a highly inclusive atmosphere."
                            }
                        ].map((hub, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl">
                                <div className="aspect-video relative">
                                    <Image src={hub.img} alt={hub.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent opacity-80" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-12">
                                    <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-2 block">{hub.vibe}</span>
                                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none">{hub.name}</h3>
                                    <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-md">{hub.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LGBTQ+ FAQ */}
            <section className="py-14 bg-brand-950 border-t border-white/10">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black mb-20 text-center uppercase tracking-tighter italic">The <span className="text-brand-GOLD italic">Real</span> Talk</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group bg-brand-900/60 rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-brand-GOLD/50">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <span className="text-lg font-black uppercase tracking-tighter italic pr-8 text-brand-950">{faq.question}</span>
                                    <HelpCircle className="text-brand-GOLD" size={24} />
                                </summary>
                                <div className="px-10 pb-10 text-slate-400 font-medium leading-relaxed border-t border-white/10 pt-8" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-brand-950 text-white text-center relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-GOLD opacity-10 rounded-full blur-[150px]"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Your <span className="text-brand-GOLD underline italic">Panama</span> <br /> Community Hub.</h2>
                    <p className="text-base md:text-lg font-medium mb-16 text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Moving is easier when you have a tribe. We don't just process your visa; we plug you into the heart of the thriving LGBTQ+ expat experience.
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-8">
                        <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-brand-GOLD text-brand-950 rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
                            Plan My Transition <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationLGBTQContent;
