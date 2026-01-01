'use client';

import React from 'react';
import { Mountain, Ship, Thermometer, Wind, Zap, DollarSign, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BoqueteVsCoronadoContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Living in Panama", item: "https://expatrockstars.com/relocation/guides" },
        { name: "Boquete vs Coronado", item: "https://expatrockstars.com/relocation/guides/boquete-vs-coronado" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />

            {/* Split Hero */}
            <section className="relative h-[80vh] flex flex-col md:flex-row overflow-hidden">
                <div className="flex-1 relative group cursor-pointer overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1200&q=80"
                        alt="Lush green mountains and coffee plantations in Boquete, Panama"
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-950/40 group-hover:bg-brand-950/20 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10 text-center">
                        <Mountain size={64} className="mb-6 text-brand-GOLD" />
                        <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter italic">Boquete</h2>
                        <p className="text-xl font-bold uppercase tracking-widest mt-4">The Highlands</p>
                    </div>
                </div>
                <div className="flex-1 relative group cursor-pointer overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80"
                        alt="Sunny beaches and Pacific coast condos in Coronado, Panama"
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-950/40 group-hover:bg-brand-950/20 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10 text-center">
                        <Ship size={64} className="mb-6 text-brand-GOLD" />
                        <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter italic">Coronado</h2>
                        <p className="text-xl font-bold uppercase tracking-widest mt-4">The Pacific Hub</p>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <div className="w-24 h-24 bg-brand-GOLD text-brand-950 rounded-full flex items-center justify-center font-black text-2xl shadow-2xl border-4 border-white">VS</div>
                </div>
            </section>

            {/* Comparison Grid */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">The Great <span className="text-brand-GOLD italic">Expat Debate</span></h2>
                    <p className="text-neutral-500 text-lg uppercase tracking-widest font-black leading-tight">Finding your perfect microclimate in Panama.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Boquete Column */}
                    <div className="space-y-12">
                        <div className="bg-neutral-50 p-12 rounded-[4.5rem] border border-neutral-100">
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic flex items-center gap-4 text-brand-900 border-b-4 border-brand-GOLD pb-4 inline-block">The Boquete Vibe</h3>
                            <p className="text-neutral-600 font-medium leading-[1.8] mb-8">
                                Known as the "Land of Eternal Spring," Boquete offers a misty, cool environment. It is the heart of <strong>boquete panama real estate</strong> for those who trade salt air for mountain breezes and high-altitude coffee culture.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-emerald-600">
                                    <CheckCircle2 size={16} /> 65°F - 75°F Average Temp
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-emerald-600">
                                    <CheckCircle2 size={16} /> Hiker & Birdwatcher Paradise
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-emerald-600">
                                    <CheckCircle2 size={16} /> Mature Expat Community
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Coronado Column */}
                    <div className="space-y-12">
                        <div className="bg-neutral-50 p-12 rounded-[4.5rem] border border-neutral-100">
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic flex items-center gap-4 text-brand-900 border-b-4 border-brand-GOLD pb-4 inline-block">The Coronado Vibe</h3>
                            <p className="text-neutral-600 font-medium leading-[1.8] mb-8">
                                Coronado is the weekend playground of the wealthy from Panama City. It features <strong>coronado panama real estate</strong> options ranging from luxury condos to sprawling beach estates. Ideal for those who love proximity to the city.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-600">
                                    <CheckCircle2 size={16} /> 85°F - 90°F Average Temp
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-600">
                                    <CheckCircle2 size={16} /> Beach Clubs & Golf Courses
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-600">
                                    <CheckCircle2 size={16} /> Urban Amenities at the Beach
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Matrix Table */}
            <section className="py-32 bg-brand-950 text-white rounded-[5rem] mx-4 overflow-x-auto">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-black mb-16 uppercase tracking-tighter italic text-center">Quick Comparison <span className="text-brand-GOLD">Matrix</span></h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-6 text-[10px] font-black uppercase tracking-[0.4em] text-brand-GOLD">Criteria</th>
                                <th className="py-6 text-[10px] font-black uppercase tracking-[0.4em]">Boquete (Mountain)</th>
                                <th className="py-6 text-[10px] font-black uppercase tracking-[0.4em]">Coronado (Beach)</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Distance from City</td>
                                <td className="py-8">6-7 Hour Drive / 1 Hour Flight</td>
                                <td className="py-8">1.5 - 2 Hour Drive</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Cost of Living</td>
                                <td className="py-8">Low to Mid-Range</td>
                                <td className="py-8">Mid to High-Range</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Nightlife</td>
                                <td className="py-8">Quiet Coffee Shops & Pubs</td>
                                <td className="py-8">Active Weekend Clubs & Hotels</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Grocery Stores</td>
                                <td className="py-8">Selection of Boutique & Local</td>
                                <td className="py-8">4 Massive Supermarkets (Riba Smith)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* In-Depth Analysis Callout */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 relative aspect-square overflow-hidden rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-[1s]">
                        <Image
                            src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=800&q=80"
                            alt="A panoramic view representing the choice between Panama's mountains and beach"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Who Wins <span className="text-brand-GOLD">The Match?</span></h2>
                        <div className="space-y-8 font-medium text-neutral-500 leading-relaxed">
                            <p>
                                There is no universal "best" place. In our <strong>panama relocation discovery tours</strong>, we've found that families seeking peace, organic food, and cooler weather gravitate toward the highlands.
                            </p>
                            <p>
                                Meanwhile, those who prioritize weekend access to Panama City's shopping, high-end private healthcare, and a social beach club vibe find their home in <strong>Coronado</strong>.
                            </p>
                            <div className="pt-8">
                                <Link href="/relocation/tours" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-brand-950 text-white px-10 py-6 rounded-2xl hover:bg-brand-GOLD hover:text-brand-950 transition-all shadow-xl">
                                    Tour Both Regions <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-24 bg-brand-GOLD text-brand-950 text-center font-black rounded-b-[5rem]">
                <h3 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8 italic">Don't Choose Blind. <span className="opacity-60">See Both.</span></h3>
                <Link href="/relocation/tours" className="text-[12px] uppercase tracking-[0.5em] border-b-4 border-brand-950 pb-2 hover:opacity-70 transition-opacity">
                    Book Discovery Itinerary
                </Link>
            </section>
        </div>
    );
};

export default BoqueteVsCoronadoContent;
