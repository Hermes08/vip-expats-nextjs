'use client';

import React from 'react';
import { Tablet, Wifi, Coffee, Zap, MapPin, ShieldCheck, Globe, ArrowRight, Laptop, CreditCard, Home, Check, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { useLanguage } from '@/context/LanguageContext';

const RelocationDigitalNomadContent = () => {
    const { lang } = useLanguage();
    const faqs = [
        {
            question: "What is the Panama Digital Nomad Visa?",
            answer: "The Panama Digital Nomad Visa allows remote workers employed by foreign companies to live in Panama for 9 months, renewable for another 9 months. It is one of the fastest visas to process in the region."
        },
        {
            question: "How fast is the internet in Panama 2026?",
            answer: "Panama City and major hubs like Boquete offer fiber optic speeds up to 1Gbps. In remote areas, **Starlink for Panama** provides reliable 150-250Mbps coverage, making it a top-tier destination for remote work."
        },
        {
            question: "Do I pay tax in Panama as a Digital Nomad?",
            answer: "Panama follows a territorial tax system. If your income is earned exclusively from foreign sources, you generally owe 0% income tax in Panama while on the Nomad Visa."
        },
        {
            question: "What are the income requirements?",
            answer: "You must prove a minimum annual income of $36,000 (or $3,000 per month) from foreign sources per individual applicant."
        },
        {
            question: "Is there a coworking scene in Panama?",
            answer: "Yes. From the historic streets of Casco Viejo to the tech-hub of Ciudad del Saber, Panama has a thriving coworking ecosystem with vibrant networking events."
        }
    ];

    return (
        <div className="bg-white text-white min-h-screen">
            <BreadcrumbSchema
                items={[
                    { name: 'Relocation', item: `https://panamarealestatesale.com/${lang}/relocation` },
                    { name: 'Digital Nomad', item: `https://panamarealestatesale.com/${lang}/relocation/digital-nomad` }
                ]}
            />
            <FAQSchema questions={faqs} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-brand-GOLD/20 to-transparent" />
                    <Laptop size={600} className="text-brand-GOLD absolute -right-20 top-20 rotate-12" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-GOLD/10 border border-brand-GOLD/20 rounded-full mb-8">
                            <Wifi size={14} className="text-brand-GOLD animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD">The 2026 Nomad Frontier</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-heading font-black mb-10 uppercase tracking-tighter leading-none italic">
                            Work from <span className="text-brand-GOLD">Paradise</span>, <br /> Pay <span className="underline decoration-brand-GOLD">Zero</span> Tax.
                        </h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                            Stop commuting. Start living. The <strong>panama digital nomad visa</strong> is your legal shortcut to a tropical lifestyle with first-world connectivity and a territorial tax system that keeps your money in your pocket.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href={`/${lang}/contacto`} className="px-6 py-3 bg-brand-GOLD text-brand-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all text-center">
                                Claim My Nomad Visa
                            </Link>
                            <Link href="#connectivity" className="px-6 py-3 bg-white/5 border border-brand-100 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center">
                                View Speed Tests
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 3 Pillars of Nomad Success */}
            <section className="py-24 bg-brand-50 border-y border-brand-100">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
                    {[
                        {
                            icon: <Zap className="text-brand-GOLD" size={32} />,
                            title: "Gigabit Speed",
                            desc: "Panama isn't just beaches. It's a global fiber-optic hub. Experience latency-free Zoom calls from the jungle or the city."
                        },
                        {
                            icon: <CreditCard className="text-brand-GOLD" size={32} />,
                            title: "0% Territorial Tax",
                            desc: "Avoid the 'Tax Trap'. Panama only taxes income earned *within* its borders. Your remote salary stays 100% yours."
                        },
                        {
                            icon: <MapPin className="text-brand-GOLD" size={32} />,
                            title: "Tropical Proximity",
                            desc: "Located at the center of the Americas. Easy 3-5 hour flights to major US hubs with minimal time-zone jetlag."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-white/5 rounded-2xl border border-brand-100 hover:border-brand-GOLD/30 transition-all">
                            <div className="mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">{item.title}</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Connectivity Deep Dive */}
            <section id="connectivity" className="py-14 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <div className="p-1 bg-gradient-to-br from-brand-GOLD to-brand-950 rounded-2xl">
                                <div className="bg-white rounded-[3.8rem] p-6 overflow-hidden relative group">
                                    <div className="relative z-10">
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-6">Real Speed Test Data / Jan 2026</div>
                                        <div className="space-y-8">
                                            <div>
                                                <div className="flex justify-between text-[11px] font-black uppercase mb-3">
                                                    <span>Panama City Fiber</span>
                                                    <span className="text-brand-GOLD">980 Mbps</span>
                                                </div>
                                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand-GOLD w-[98%]" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-[11px] font-black uppercase mb-3">
                                                    <span>Starlink (Remote Interior)</span>
                                                    <span className="text-brand-GOLD">240 Mbps</span>
                                                </div>
                                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand-GOLD w-[70%]" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-[11px] font-black uppercase mb-3">
                                                    <span>Average 5G Mobile</span>
                                                    <span className="text-brand-GOLD">115 Mbps</span>
                                                </div>
                                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand-GOLD w-[45%]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The Most <br /> <span className="text-brand-GOLD">Connected</span> Hub <br /> in LatAm</h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                Connectivity is the lifeline of the digital nomad. Panama hosts 7 of the world's most critical submarine fiber optic cables. This infrastructure means you enjoy lower latency than most cities in North America. Whether you are trading crypto, managing a dev team, or editing 4K video, our <strong>remote work panama</strong> guide ensures you choose a rental with guaranteed uptime.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex gap-3"><Check size={18} className="text-brand-GOLD" /> 99.9% Fiber Uptime in City Hubs</li>
                                <li className="flex gap-3"><Check size={18} className="text-brand-GOLD" /> Nationwide Starlink Coverage</li>
                                <li className="flex gap-3"><Check size={18} className="text-brand-GOLD" /> 5G Mesh in Panama City & David</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nomad Neighborhoods */}
            <section className="py-14 bg-brand-50 rounded-3xl mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic text-brand-950 leading-none">Where the <span className="text-brand-GOLD">Panama Real Estate Sales</span> Hang</h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto italic">From colonial vibes to high-tech jungles, pick your vibe.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1549830508-0570b686cc9d?w=800&q=80",
                                title: "Casco Viejo",
                                category: "Colonial & Coffee",
                                desc: "Historical UNESCO streets with elite coffee shops and the city's best networking bars. High energy, high density."
                            },
                            {
                                img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
                                title: "Ciudad del Saber",
                                category: "Tech & Campus",
                                desc: "An old military base turned into a tech campus. Innovation centers, green spaces, and a truly global startup community."
                            },
                            {
                                img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
                                title: "Boquete",
                                category: "Mountain Hybrid",
                                desc: "Eternal spring weather. Perfect for the nomad who wants to hike at 4 PM and work at 100 Mbps till midnight."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent opacity-60" />
                                    <div className="absolute bottom-10 left-10">
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-2">{item.category}</div>
                                        <h3 className="text-3xl font-black text-brand-950 uppercase tracking-tighter italic">{item.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-500 font-medium leading-relaxed px-6">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nomad FAQ Preview */}
            <section className="py-14">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <HelpCircle size={48} className="text-brand-GOLD mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none">Nomad <span className="text-brand-GOLD italic underline">Intelligence</span></h2>
                        <p className="text-lg text-slate-500 font-medium">Quick answers for high-speed relocation.</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 rounded-xl border border-brand-100 overflow-hidden transition-all hover:border-brand-GOLD/50">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-black uppercase tracking-tighter italic pr-8">{faq.question}</span>
                                    <span className="text-brand-GOLD group-open:rotate-45 transition-transform duration-300">
                                        <Zap size={24} />
                                    </span>
                                </summary>
                                <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed border-t border-brand-100 pt-6">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="mt-20 p-8 bg-brand-GOLD text-brand-950 rounded-2xl text-center shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-5xl font-black uppercase tracking-tighter italic mb-8">Ready to Go Panama Real Estate Sale?</h3>
                            <p className="text-lg font-black opacity-70 mb-10 max-w-xl mx-auto">
                                Skip the digital nomad bureaucracy. We handle your entire visa filing and 6-month fiber-guaranteed housing contract in one package.
                            </p>
                            <Link href={`/${lang}/contacto`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-50 transition-all">
                                Get The Nomad Bundle <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationDigitalNomadContent;
