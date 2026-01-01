'use client';

import React from 'react';
import { Thermometer, CloudRain, Sun, Calendar, ArrowRight, Zap, MapPin, Wind } from 'lucide-react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';

const RelocationWeatherContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Weather Hub", item: "https://expatrockstars.com/relocation/weather" }
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
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />
            <FAQSchema questions={faqs} />

            {/* Hero Section */}
            <section className="bg-brand-950 py-32 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        Seasonal Planning
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 uppercase tracking-tighter">
                        Best <span className="text-brand-GOLD italic">Time</span> to Visit
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Timing is everything for your <strong>panama relocation discovery tour</strong>. Discover the difference between the 'Summer' dry season and the lush 'Green' season.
                    </p>
                </div>
            </section>

            {/* Monthly Grid */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">The Monthly <span className="text-brand-GOLD italic">Breakdown</span></h2>
                    <p className="text-neutral-500 text-lg uppercase tracking-widest font-black italic">A 12-month guide to Panama's tropical pulse.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {months.map((m, i) => (
                        <div key={i} className={`p-8 rounded-3xl border ${m.season === 'Dry' ? 'border-brand-GOLD/30 bg-brand-GOLD/5' : 'border-neutral-100 bg-neutral-50'} flex flex-col items-center text-center transition-transform hover:-translate-y-2`}>
                            <m.icon className={m.season === 'Dry' ? 'text-brand-GOLD' : 'text-blue-400'} size={32} />
                            <h4 className="mt-6 font-black uppercase tracking-tighter text-lg leading-none">{m.name}</h4>
                            <div className="mt-4 flex flex-col gap-2">
                                <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${m.season === 'Dry' ? 'bg-brand-GOLD text-brand-950' : m.season === 'Shoulder' ? 'bg-neutral-200 text-neutral-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {m.season}
                                </span>
                                <span className="text-xs font-bold text-neutral-400">{m.temp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dry vs Green Season Deep Dive */}
            <section className="py-32 bg-neutral-100 rounded-[5rem] mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic text-brand-900 leading-tight">Dry Season <br /> (Jan - April)</h3>
                            <p className="text-neutral-600 leading-relaxed font-medium mb-10">
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
                            <p className="text-neutral-600 leading-relaxed font-medium mb-10">
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

            {/* Regional Nuances */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">Weather by <span className="text-brand-GOLD">Region</span></h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <MapPin size={40} className="text-brand-GOLD mx-auto mb-6" />
                        <h4 className="text-xl font-black uppercase tracking-tighter italic mb-4">Panama City</h4>
                        <p className="text-sm text-neutral-500 font-medium">Humid tropical climate. Consistent 85-90°F year-round. After-work thunderstorms are common in the green season.</p>
                    </div>
                    <div className="text-center">
                        <MapPin size={40} className="text-brand-GOLD mx-auto mb-6" />
                        <h4 className="text-xl font-black uppercase tracking-tighter italic mb-4">Boquete</h4>
                        <p className="text-sm text-neutral-500 font-medium">Perpetual spring. 65-75°F. Expect the 'Bajareque' mist which keeps the highlands cool and fertile.</p>
                    </div>
                    <div className="text-center">
                        <MapPin size={40} className="text-brand-GOLD mx-auto mb-6" />
                        <h4 className="text-xl font-black uppercase tracking-tighter italic mb-4">Coronado</h4>
                        <p className="text-sm text-neutral-500 font-medium">The 'Dry Arch' of Panama. Receives significantly less rainfall than the city or the mountains.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem]">
                <h3 className="text-5xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Pick Your Month</h3>
                <p className="text-xl md:text-2xl font-bold mb-16 opacity-80 max-w-2xl mx-auto">
                    Ready to book your <strong>panama relocation discovery tour</strong>? Let's find the best dates for your scouting journey.
                </p>
                <Link href="/relocation/tours" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-black transition-all shadow-2xl">
                    Check Tour Availability
                </Link>
            </section>
        </div>
    );
};

export default RelocationWeatherContent;
