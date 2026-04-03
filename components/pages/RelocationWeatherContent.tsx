'use client';

import React from 'react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { Thermometer, CloudRain, Sun, Calendar, ArrowRight, Zap, MapPin, Wind, HeartPulse, ShieldCheck, Star, Compass } from 'lucide-react';
import Image from 'next/image';

const RelocationWeatherContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Weather Guide", item: `https://panamarealestatesale.com/${lang}/relocation/weather` }
    ];

    const faqs = [
        {
            question: "When is the dry season in Panama?",
            answer: "The dry season, or 'Summer', typically runs from January through April. This period features clear skies, trade winds, and minimal rainfall."
        },
        {
            question: "What is the green season like?",
            answer: "From May to December, Panama experiences the green season. While it rains more frequently, usually in the afternoons, mornings are often sunny, and the landscapes are lush and vibrant."
        },
        {
            question: "Does it get cold in Boquete?",
            answer: "Boquete has a 'Perpetual Spring' climate. Temperatures range from 65°F to 75°F. It can feel chilly at night, especially during the green season or in higher elevations."
        }
    ];

    const months = [
        { name: "January", season: "Dry", temp: "85°F", rainfall: "Low", icon: Sun },
        { name: "February", season: "Dry", temp: "86°F", rainfall: "Minimal", icon: Sun },
        { name: "March", season: "Dry", temp: "88°F", rainfall: "Minimal", icon: Sun },
        { name: "April", season: "Shoulder", temp: "89°F", rainfall: "Moderate", icon: Wind },
        { name: "May", season: "Green", temp: "84°F", rainfall: "High", icon: CloudRain },
        { name: "June", season: "Green", temp: "83°F", rainfall: "High", icon: CloudRain },
        { name: "July", season: "Green", temp: "84°F", rainfall: "Moderate", icon: CloudRain },
        { name: "August", season: "Green", temp: "84°F", rainfall: "High", icon: CloudRain },
        { name: "September", season: "Green", temp: "82°F", rainfall: "High", icon: CloudRain },
        { name: "October", season: "Green", temp: "81°F", rainfall: "Extremely High", icon: CloudRain },
        { name: "November", season: "Green", temp: "81°F", rainfall: "High", icon: CloudRain },
        { name: "December", season: "Shoulder", temp: "83°F", rainfall: "Moderate", icon: Wind }
    ];

    return (
        <div className="pt-24 min-h-screen bg-brand-950 text-white font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />
            <FAQSchema questions={faqs} />
            <ServiceSchema
                name="Panama Seasonal & Weather Planning Guide"
                description="Comprehensive analysis of Panama's weather by month. Climate data for Boquete, Coronado, and Panama City to help plan your relocation discovery tour."
                serviceType="Relocation Consulting"
            />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="bg-brand-950 py-14 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The 2026 Climate Blueprint
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-8 uppercase tracking-tighter italic leading-none">
                        Panama <span className="text-brand-GOLD italic">Weather</span> <br /> By Month
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed font-black uppercase tracking-tight">
                        Timing is everything for your <strong>panama relocation discovery tour</strong>. Discover the difference between the 'Summer' dry season and the lush 'Green' season.
                    </p>
                </div>
            </section>

            {/* Monthly Grid */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">The Monthly <span className="text-brand-GOLD italic">Breakdown</span></h2>
                    <p className="text-slate-400 text-lg uppercase tracking-widest font-black italic">A 12-month guide to Panama's tropical pulse.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {months.map((m, i) => (
                        <div key={i} className={`p-8 rounded-3xl border ${m.season === 'Dry' ? 'border-brand-GOLD/30 bg-brand-GOLD/5' : 'border-white/10 bg-brand-900/40'} flex flex-col items-center text-center transition-transform hover:-translate-y-2`}>
                            <m.icon className={m.season === 'Dry' ? 'text-brand-GOLD' : 'text-blue-400'} size={32} />
                            <h4 className="mt-6 font-black uppercase tracking-tighter text-lg leading-none">{m.name}</h4>
                            <div className="mt-4 flex flex-col gap-2">
                                <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${m.season === 'Dry' ? 'bg-brand-GOLD text-brand-950' : m.season === 'Shoulder' ? 'bg-neutral-200 text-slate-400' : 'bg-blue-100 text-blue-600'}`}>
                                    {m.season}
                                </span>
                                <span className="text-xs font-bold text-slate-400">{m.temp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dry vs Green Season Deep Dive */}
            <section className="py-14 bg-white/5 rounded-3xl mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic text-brand-900 leading-tight">Dry Season <br /> (Jan - April)</h3>
                            <p className="text-slate-400 leading-relaxed font-medium mb-10">
                                This is the high season for <strong>panama luxury developments</strong> and tourism. Expect clear blue skies, strong trade winds (Alisios), and perfect beach weather. This is the <strong>best time to visit panama</strong> for those who want consistent sunshine.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-950">
                                    <Sun className="text-brand-GOLD" size={16} /> Perfect for Pacific Beach Scouting
                                </li>
                                <li className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-950">
                                    <Sun className="text-brand-GOLD" size={16} /> Ideal for Outdoor Property Walkthroughs
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic text-brand-900 leading-tight">Green Season <br /> (May - Dec)</h3>
                            <p className="text-slate-400 leading-relaxed font-medium mb-10">
                                Don't let wait the name scare you. The <strong>green season panama</strong> usually features sunny mornings followed by heavy afternoon rain showers. This is when the mountains of Boquete are at their most vibrant and lush.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-950">
                                    <CloudRain className="text-blue-400" size={16} /> Spectacular Mountain Landscapes
                                </li>
                                <li className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-950">
                                    <CloudRain className="text-blue-400" size={16} /> Cooler Temperatures in the City
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Science of Microclimates: The Panama Real Estate Sale Truth */}
            <section className="py-14 bg-black rounded-3xl mx-4 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 p-20 opacity-5">
                    <Compass size={200} />
                </div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD italic">Microclimate</span> <br /> Paradox</h2>
                            <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                                <p>
                                    Panama is geographically unique. It is a narrow bridge between two oceans, meaning weather can change within a 15-minute drive. For the <strong>expat panama</strong> community, this isn't just a curiosity—it's a lifestyle determinant.
                                </p>
                                <p>
                                    Why does <strong>boquete panama weather</strong> feel like Zurich in the summer, while <strong>coronado panama weather</strong> feels like Miami in August? It comes down to elevation and the "Rain Shadow" effect. Understanding <strong>panama weather counts by month</strong> is the first step in deciding which region fits your biology.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="p-10 bg-black text-white rounded-2xl">
                                <h4 className="text-xl font-black uppercase tracking-widest text-brand-GOLD mb-4 italic italic">The Continental Divide</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    The central mountain range acts as a wall. While the Caribbean side (Bocas del Toro) stays wet year-round, the Pacific side (Coronado) enjoys a distinct dry season.
                                </p>
                            </div>
                            <div className="p-10 bg-brand-950 rounded-2xl border border-white/10">
                                <h4 className="text-xl font-black uppercase tracking-widest text-brand-950 mb-4 italic">Elevation vs Humidity</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    For every 1,000 feet of elevation gain, the temperature drops by about 3.5°F. This is why Boquete at 3,500ft is the "Eternal Spring" compared to sea-level Panama City.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regional Nuances: Deep Dives */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">Regional <span className="text-brand-GOLD italic">Atmospheres</span></h2>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Different strokes for different folks.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="group">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                            <Image src="https://images.unsplash.com/photo-1558449028-s549c1d27996?w=600&q=80" alt="Panama City Humidity" fill className="object-cover transition-transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <h4 className="text-2xl font-black italic uppercase tracking-tighter">The Capital</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD">Hot & Humid</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed px-4">
                            Expect 85-90°F with high humidity. The <strong>best time to visit panama city</strong> is during the 'Summer' (Jan-March) when the trade winds blow away the coastal haze.
                        </p>
                    </div>
                    <div className="group">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                            <Image src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=600&q=80" alt="Boquete Highlands" fill className="object-cover transition-transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <h4 className="text-2xl font-black italic uppercase tracking-tighter">The Highlands</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD underline">Cool Mist</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed px-4">
                            The <strong>Boquete weather 2026</strong> forecast remains consistent: 65-75°F. The "Bajareque" mist is your best friend or worst enemy depending on your mood.
                        </p>
                    </div>
                    <div className="group">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                            <Image src="https://images.unsplash.com/photo-1544644011-87b829283197?w=600&q=80" alt="Coronado Sunshine" fill className="object-cover transition-transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <h4 className="text-2xl font-black italic uppercase tracking-tighter">The Gold Coast</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD">Arco Seco</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed px-4">
                            In the <strong>Coronado panama</strong> dry arc, you'll see 20% less rain than the rest of the country. If you are a sun-seeker, this is your <strong>best places in panama for expats</strong> choice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Preparation and What to Pack */}
            <section className="py-14 bg-black text-white rounded-3xl mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2">
                            <Star className="text-brand-GOLD mb-10" size={64} />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD italic">Packer's</span> <br /> Manifesto</h2>
                            <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                                <p>
                                    Most visitors pack for "Tropical Paradise" only to find themselves freezing in the Boquete highlands or at a high-end restaurant in the city.
                                </p>
                                <p>
                                    On our <strong>panama relocation tours</strong>, we recommend a three-layer system. A breathable base for the humidity, a light sweater for the mountains, and a rain shell for the <strong>panama green season</strong>.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-8">
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD mb-2">Essential</h5>
                                        <p className="text-xs">Quick-dry fabrics (Cotton is your enemy in humidity).</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD mb-2">Tech</h5>
                                        <p className="text-xs">Waterproof bags for your passport and electronics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-brand-GOLD p-8 rounded-2xl text-brand-950">
                            <h4 className="text-3xl font-black uppercase tracking-tighter mb-8 italic italic">Seasonal Logic</h4>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-brand-950 text-white rounded-xl flex items-center justify-center shrink-0 font-black italic">!</div>
                                    <p className="text-sm font-medium leading-relaxed"><strong>Jan - March:</strong> Strong winds mean the Pacific is choppy. Great for kitesurfing, tough for fishing.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-brand-950 text-white rounded-xl flex items-center justify-center shrink-0 font-black italic">!</div>
                                    <p className="text-sm font-medium leading-relaxed"><strong>Oct - Nov:</strong> Peak rain. The best time to see the <strong>Mist over Boquete</strong> but avoid the Darien gap tours.</p>
                                </li>
                            </ul>
                            <Link href={`/${lang}/relocation/tours`} className="mt-12 w-full block py-6 bg-brand-950 text-white text-center rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
                                Custom Packing Guide
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Resources: The Topic Cluster */}
            <section className="py-24 bg-brand-950 rounded-3xl mx-4 mb-32">
                <div className="max-w-7xl mx-auto px-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12 text-center">Complete Your Research</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href={`/${lang}/relocation/cost-of-living`} className="group p-6 bg-white rounded-2xl border border-white/10 hover:border-brand-GOLD transition-all shadow-sm">
                            <Zap className="text-brand-GOLD mb-6" size={24} />
                            <h5 className="text-xl font-black italic uppercase tracking-tighter mb-4">Cost of Living 2026</h5>
                            <p className="text-xs text-slate-400 font-medium mb-6">Compare the exact costs of Boquete vs Coronado vs Panama City.</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">View Guide <ArrowRight size={12} /></span>
                        </Link>
                        <Link href={`/${lang}/relocation/guides/boquete-vs-coronado`} className="group p-6 bg-white rounded-2xl border border-white/10 hover:border-brand-GOLD transition-all shadow-sm">
                            <Compass className="text-brand-GOLD mb-6" size={24} />
                            <h5 className="text-xl font-black italic uppercase tracking-tighter mb-4">Boquete vs Coronado</h5>
                            <p className="text-xs text-slate-400 font-medium mb-6">The definitive showdown between the mountains and the beach.</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">View Guide <ArrowRight size={12} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-14 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem]">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Pick Your Month</h3>
                <p className="text-base md:text-lg font-bold mb-16 opacity-80 max-w-2xl mx-auto">
                    Ready to book your <strong>panama relocation discovery tour</strong>? Let's find the best dates for your scouting journey.
                </p>
                <Link href={`/${lang}/relocation/tours`} className="px-8 py-4 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-black transition-all shadow-2xl">
                    Check Tour Availability
                </Link>
            </section>
        </div>
    );
};

export default RelocationWeatherContent;
