'use client';

import React from 'react';
import { Ship, Home, Waves, Sun, ShoppingBag, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';

const CoronadoGuideContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Living in Panama", item: "https://expatrockstars.com/relocation/guides" },
        { name: "Coronado Guide", item: "https://expatrockstars.com/relocation/guides/coronado" }
    ];

    const faqs = [
        {
            question: "Is Coronado safe?",
            answer: "Coronado is a secure beachfront community with gated access and private security for most developments, maintaining a very high safety standard for expats."
        },
        {
            question: "How far is Coronado from Panama City?",
            answer: "Coronado is approximately 90 minutes to 2 hours from Panama City, depending on traffic, making it the most accessible major beach destination from the capital."
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
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80"
                        alt="Aerial view of the Coronado beach coastline in Panama"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Pacific Lifestyle
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 uppercase tracking-tighter shadow-sm leading-[0.9]">
                        Coronado <br /> <span className="text-brand-GOLD italic">Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
                        The heartbeat of Panama's Gold Coast. Discover high-end <strong>coronado panama real estate</strong> and the convenience of beach living only 90 minutes from Panama City.
                    </p>
                </div>
            </section>

            {/* Amenities Spotlight */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">World-Class <span className="text-brand-GOLD italic">Amenities</span></h2>
                    <p className="text-neutral-500 text-lg uppercase tracking-widest font-black leading-tight">Everything you need without leaving the beach.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: ShoppingBag,
                            name: "Retail & Dining",
                            desc: "4 massive supermarkets (including Riba Smith), department stores, and over 50 restaurants ranging from sushi to steakhouse."
                        },
                        {
                            icon: Ship,
                            name: "Beach Clubs",
                            desc: "Private access to the Coronado Luxury Club & Suites, featuring golf courses, equestrian centers, and private beach frontage."
                        },
                        {
                            icon: Waves,
                            name: "The Coastline",
                            desc: "Miles of black and white speckled volcanic sand beaches perfect for long walks, surfing, and year-round swimming."
                        }
                    ].map((n, i) => (
                        <div key={i} className="bg-neutral-50 p-10 rounded-[4rem] border border-neutral-100 hover:shadow-2xl transition-all h-full flex flex-col">
                            <n.icon className="text-brand-GOLD mb-8" size={48} />
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic text-brand-900">{n.name}</h4>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed flex-grow">{n.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Coronado Lifestyle Sections */}
            <section className="py-32 bg-brand-950 text-white rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-GOLD/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-video overflow-hidden rounded-[4rem] shadow-2xl border border-white/5">
                            <Image
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1000&q=80"
                                alt="Expat families enjoying the Pacific beach lifestyle in Coronado, Panama"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">Dry Arch</span> Advantage</h2>
                            <div className="space-y-8 text-brand-300 font-medium leading-relaxed">
                                <p>
                                    Coronado sits in a unique meteorological zone known as the 'Arco Seco'. While the rest of Panama turns green in October, Coronado enjoys significantly more sunshine and lower rainfall.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-center">
                                        <Sun className="text-brand-GOLD" size={24} />
                                        <span className="text-xs font-black uppercase tracking-widest">300+ Days of Sunshine</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <MapPin className="text-brand-GOLD" size={24} />
                                        <span className="text-xs font-black uppercase tracking-widest">90 Mins to Panama City</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <Home className="text-brand-GOLD" size={24} />
                                        <span className="text-xs font-black uppercase tracking-widest">Luxury Condo Specialists</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Estate & ROI */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="bg-neutral-50 p-16 rounded-[4rem] flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2 text-right order-2 md:order-1">
                        <div className="space-y-4 inline-block text-left">
                            <div className="flex items-center gap-3 text-brand-900 font-black text-xs uppercase tracking-widest">
                                <CheckCircle2 className="text-brand-GOLD" size={20} /> Incredible Weekend Rental Pool
                            </div>
                            <div className="flex items-center gap-3 text-brand-900 font-black text-xs uppercase tracking-widest">
                                <CheckCircle2 className="text-brand-GOLD" size={20} /> High Appreciation Potential
                            </div>
                            <div className="flex items-center gap-3 text-brand-900 font-black text-xs uppercase tracking-widest">
                                <CheckCircle2 className="text-brand-GOLD" size={20} /> Modern Infrastructure & Fibernet
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                        <h2 className="text-4xl font-heading font-black mb-8 uppercase tracking-tighter italic text-brand-900">Pacific <span className="text-brand-GOLD">ROI</span></h2>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-8">
                            Coronado is the most liquid real estate market on the Pacific coast. Whether you are looking for <strong>coronado panama real estate</strong> for lifestyle or as a high-yield rental investment, the demand for weekend getaways is constant year-round.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA Footer */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Tour Coronado</h2>
                    <p className="text-xl md:text-2xl font-bold mb-16 opacity-80">
                        Experience the beach life, visit the luxury developments, and feel the Pacific breeze on our signature Beachfront Discovery Tour.
                    </p>
                    <Link href="/relocation/tours" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-black transition-all shadow-2xl">
                        Schedule Beach Tour
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CoronadoGuideContent;
