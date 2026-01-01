'use client';

import React from 'react';
import { Mountain, Home, Coffee, Thermometer, Users, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';

const BoqueteGuideContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Living in Panama", item: "https://expatrockstars.com/relocation/guides" },
        { name: "Boquete Guide", item: "https://expatrockstars.com/relocation/guides/boquete" }
    ];

    const faqs = [
        {
            question: "Is Boquete safe for expats?",
            answer: "Boquete is one of the safest communities in Panama, with a very active expat population and strong community safety initiatives."
        },
        {
            question: "What is the cost of living in Boquete?",
            answer: "While more expensive than some rural areas, Boquete offers high value for retirees, with modern amenities and lower cooling costs due to the mountain climate."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />
            <FAQSchema questions={faqs} />

            {/* Hero Section */}
            <section className="bg-brand-950 py-32 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1600&q=80"
                        alt="Scenic view of the Boquete Highlands mountains in Panama"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Eternal Spring
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 uppercase tracking-tighter shadow-sm leading-[0.9]">
                        Boquete <br /> <span className="text-brand-GOLD italic">Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
                        The crown jewel of the Highlands. Discover why <strong>boquete panama real estate</strong> is the #1 choice for retirees and nature lovers seeking <strong>international living in panama</strong>.
                    </p>
                </div>
            </section>

            {/* Neighborhood Spotlight */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">Top <span className="text-brand-GOLD italic">Neighborhoods</span></h2>
                    <p className="text-neutral-500 text-lg uppercase tracking-widest font-black leading-tight">Where to find your dream mountain home.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Valle Escondido",
                            desc: "The valley that started the expat revolution. A world-class gated community with golf, spa, and a tight-knit community.",
                            keywords: "boquete gated communities"
                        },
                        {
                            name: "Lucero",
                            desc: "High-altitude luxury. Incredible views of the Jaramillo mountains and Volcan Baru. Home to the Lucero Golf & Country Club.",
                            keywords: "lucero boquete homes for sale"
                        },
                        {
                            name: "Pino Alto",
                            desc: "The new standard of boutique mountain living. Modern design meets deep nature in the heart of Boquete's best microclimate.",
                            keywords: "pino alto boquete investment"
                        }
                    ].map((n, i) => (
                        <div key={i} className="bg-neutral-50 p-10 rounded-[4rem] border border-neutral-100 hover:shadow-2xl transition-all h-full flex flex-col">
                            <Home className="text-brand-GOLD mb-8" size={48} />
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic text-brand-900">{n.name}</h4>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed mb-6 flex-grow">{n.desc}</p>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD opacity-60">Featured Project</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Boquete Lifestyle Sections */}
            <section className="py-32 bg-neutral-900 text-white rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-GOLD/5 rounded-full -mr-48 -mb-48 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">Microclimate</span> Secrets</h2>
                            <div className="space-y-8 text-brand-300 font-medium leading-relaxed">
                                <p>
                                    Boquete isn't just one weather pattern. Depending on your altitude and orientation, you can experience the 'Bajareque' mist or bright mountain sun.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-center">
                                        <Thermometer className="text-brand-GOLD" size={24} />
                                        <span className="text-xs font-black uppercase tracking-widest">65°F-75°F Year-Round</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <Coffee className="text-brand-GOLD" size={24} />
                                        <span className="text-xs font-black uppercase tracking-widest">World's Best Coffee Region</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <Mountain className="text-brand-GOLD" size={24} />
                                        <span className="text-xs font-black uppercase tracking-widest">Volcan Baru National Park</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative aspect-video overflow-hidden rounded-[4rem] shadow-2xl border border-white/5">
                            <Image
                                src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80"
                                alt="Expat lifestyle in the lush mountains of Boquete, Panama"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI & Investment */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="bg-neutral-50 p-16 rounded-[4rem] flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-heading font-black mb-8 uppercase tracking-tighter italic text-brand-900">Highlands <span className="text-brand-GOLD">ROI</span></h2>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-8">
                            Rental demand in Boquete remains extremely tight. With a limited supply of <strong>boquete homes for sale</strong> and a growing influx of digital nomads and retirees, property values have seen consistent 5-8% annual growth.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-brand-900 font-black text-xs uppercase tracking-widest">
                                <CheckCircle2 className="text-brand-GOLD" size={20} /> High Short-Term Rental Yields
                            </div>
                            <div className="flex items-center gap-3 text-brand-900 font-black text-xs uppercase tracking-widest">
                                <CheckCircle2 className="text-brand-GOLD" size={20} /> Low Maintenance Costs
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm text-center">
                            <div className="text-3xl font-black italic text-brand-900 mb-2">8%</div>
                            <div className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Rental Yield</div>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm text-center">
                            <div className="text-3xl font-black italic text-brand-900 mb-2">12k+</div>
                            <div className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Expats</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Footer */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Tour Boquete</h2>
                    <p className="text-xl md:text-2xl font-bold mb-16 opacity-80">
                        See the neighborhoods, meeting the community, and find your <strong>boquete dream home</strong> on our specialized Highlands tour.
                    </p>
                    <Link href="/relocation/tours" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-black transition-all shadow-2xl">
                        Request Boquete Itinerary
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BoqueteGuideContent;
