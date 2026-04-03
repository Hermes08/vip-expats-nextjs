'use client';

import React from 'react';
import { Compass, MapPin, CheckCircle, ArrowRight, MessageSquare, Ship, Mountain, Globe, ShieldCheck, Users, Calendar, Plane, Map, Zap, Heart, Camera } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { useLanguage } from '@/context/LanguageContext';

const RelocationToursContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Home", item: `https://panamarealestatesale.com/${lang}` },
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Tours", item: `https://panamarealestatesale.com/${lang}/relocation/tours` }
    ];

    return (
        <div className="pt-24 min-h-screen bg-brand-950 selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-white/5 bg-brand-950">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80"
                        alt="Expats exploring beautiful local landscapes during a Panama Relocation Tour"
                        className="w-full h-full object-cover opacity-10 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="inline-block px-6 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full backdrop-blur-md mb-12">
                            The 2026 Discovery Experience
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black mb-12 leading-[0.8] tracking-tighter uppercase italic text-white">
                            THE BOOTS <br /> <span className="text-brand-GOLD italic">GROUND</span> <br /> PROTOCOL.
                        </h1>
                        <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed font-medium mb-16 italic border-l-4 border-brand-GOLD/20 pl-12 opacity-80">
                            Don't buy a life you haven't lived. Explore the <strong>best places for expats to live in panama</strong> with the Panama Real Estate Sale team.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-gold px-12 py-6 rounded-xl font-black uppercase tracking-[0.2em] text-[11px]">
                                RESERVE MY DISCOVERY SLOT
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Panama Real Estate Sale Difference */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Why a <br /> <span className="text-brand-GOLD underline italic">Tour</span> Matters.</h2>
                        <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                            <p>
                                In 2026, Panama's real estate market is moving faster than ever. From <strong>luxury condos in Panama City</strong> to high-yield <strong>short-term rentals in Coronado</strong>, knowing which building has the best management and which neighborhood has the best infrastructure isn't something you can find on a listing site.
                            </p>
                            <p>
                                A Panama Real Estate Sale <strong>relocation tour</strong> is a curated, high-intensity immersion into the <strong>panama expat lifestyle</strong>. We don't just show you houses; we introduce you to the community, the legal team, and the coffee shops where the "real" expat deals happen.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10 italic font-bold">
                                <div className="flex gap-4">
                                    <ShieldCheck className="text-brand-GOLD shrink-0" size={32} />
                                    <div>
                                        <h4 className="text-xs uppercase font-black mb-2 italic">Legal Vetting</h4>
                                        <p className="text-[10px] text-slate-400 font-medium">Every project we visit is pre-checked for title and zoning compliance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Heart className="text-brand-GOLD shrink-0" size={32} />
                                    <div>
                                        <h4 className="text-xs uppercase font-black mb-2 italic">Social Access</h4>
                                        <p className="text-[10px] text-slate-400 font-medium">Private meet-and-greets with current residents in Boquete and Coronado.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-transform duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=1000&q=80"
                            alt="Luxury lifestyle in Panama"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* 5-DAY ITINERARY: THE MASTER ROADMAP */}
                <div className="text-center mb-24 underline italic">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic text-center leading-none">The <span className="text-brand-GOLD">Master</span> Itinerary</h2>
                    <p className="text-slate-400 text-lg uppercase tracking-widest font-black italic text-center">5 Days de 2,000% Clarity.</p>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            day: "01",
                            title: "Urban Command Center (Panama City)",
                            focus: "Residency & Real Estate Foundations",
                            desc: "Arrival and check-in at a Top-5 <strong>panama city luxury hotel</strong>. We begin with a high-level briefing on the <strong>friendly nations visa panama requirements</strong> and a tour of key urban hubs: Punta Pacifica (PH Oceanaire), Costa del Este, and the historic Casco Viejo. Evening: Dinner with our lead immigration attorney."
                        },
                        {
                            day: "02",
                            title: "The Gold Coast (Coronado & Beaches)",
                            focus: "Rental Yields & Lifestyle",
                            desc: "Transition to the Pacific Riviera. Explore <strong>Coronado real estate</strong> and the growing <strong>Margaritaville Panama</strong> development. Learn about the ROI of <strong>panama beachfront condos</strong> and the 'Lock-and-Leave' lifestyle for part-time residents. Site visit to <strong>Playa Caracol</strong>."
                        },
                        {
                            day: "03",
                            title: "The Highlands (Boquete)",
                            focus: "Retirement & Wellness",
                            desc: "Fly to David and head into the mountains. Deep dive into <strong>Boquete homes for sale</strong>. Visit <strong>Valle Escondido</strong> and the <strong>Pino Alto Boquete</strong> project. Meet the <strong>American retirees in panama</strong> who make up the heart of the Boquete expat community."
                        },
                        {
                            day: "04",
                            title: "The Infrastructure Deep-Dive",
                            focus: "Healthcare, Banking & Schools",
                            desc: "A hands-on day visiting private clinics (Pacifica Salud), local banks to discuss <strong>panama bank account</strong> opening, and international schools (ISP/Kings College). We demystify the <strong>cost of living in panama</strong> by visiting local upscale grocers and lifestyle hubs."
                        },
                        {
                            day: "05",
                            title: "The Strategic Wrap-Up",
                            focus: "Finalizing Your Plan",
                            desc: "Return to Panama City. Individual 1-on-1 strategy sessions. Finalize your <strong>panama residency visa</strong> timeline and property shortlist. Helicopter optional: Caribbean frontier tour of Playa Escondida."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-brand-900/40 p-6 rounded-2xl border border-white/10 group hover:shadow-2xl transition-all">
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                <div className="lg:w-1/4">
                                    <div className="text-8xl font-black text-brand-GOLD/10 group-hover:text-brand-GOLD/40 transition-all duration-700 leading-none mb-4">{item.day}</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD bg-brand-GOLD/10 px-4 py-2 rounded-full inline-block">Day {idx + 1}</div>
                                </div>
                                <div className="lg:w-3/4">
                                    <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4 leading-none">{item.title}</h3>
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 italic">{item.focus}</p>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Legal Proof of Concept */}
            <section className="py-14 bg-brand-950 text-white rounded-[5xl] mx-4 relative overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-GOLD rounded-full blur-[200px]"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none text-center italic">The <span className="text-brand-GOLD">Legal</span> Shield.</h2>
                    <p className="text-base md:text-lg text-slate-400 font-medium mb-16 leading-relaxed text-center">
                        Our tours are the only ones in Panama that integrate a <strong>mandatory legal consultation</strong>. Why? Because a house is only a home if your <strong>panama residency</strong> is 100% airtight.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 w-full">
                        {[
                            { icon: <MapPin className="text-brand-GOLD" />, title: "Site Scoping", desc: "No generic listings. We see the exact units that fit your portfolio." },
                            { icon: <Users className="text-brand-GOLD" />, title: "Resident Access", desc: "Real talk from real expats. No sugarcoating allowed." },
                            { icon: <ShieldCheck className="text-brand-GOLD" />, title: "Due Diligence", desc: "We pre-audit every property for title and tax liens before you see it." }
                        ].map((p, i) => (
                            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center flex flex-col items-center">
                                <div className="mb-6">{p.icon}</div>
                                <h4 className="text-lg font-black uppercase italic mb-2 leading-none">{p.title}</h4>
                                <p className="text-[10px] text-slate-400 font-medium">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Proof */}
            <section className="py-14">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24 italic underline">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic text-center underline italic leading-none">Boots on the <span className="text-brand-GOLD">Ground</span></h2>
                        <p className="text-slate-400 text-lg uppercase tracking-widest font-black italic text-center">Every corner, every community.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80", name: "Highlands", vibe: "Boquete Focus" },
                            { img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800&q=80", name: "Ocean Front", vibe: "Coronado Focus" },
                            { img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80", name: "Urban Elite", vibe: "City Focus" },
                            { img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800&q=80", name: "Island Life", vibe: "Bocas Focus" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                                <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent opacity-60" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h4 className="text-white text-2xl font-black uppercase italic tracking-tighter mb-2 leading-none">{item.name}</h4>
                                    <p className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">{item.vibe}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-brand-GOLD text-brand-950 text-center relative overflow-hidden rounded-[5xl] mx-4 mb-20 flex flex-col items-center">
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none text-center">Stop <span className="underline italic">Scrolling.</span> <br /> Start <span className="italic">Exploring.</span></h2>
                    <p className="text-base md:text-lg font-black mb-16 opacity-80 max-w-xl mx-auto italic text-center">
                        Our Discovery Tours are limited to 4 families per month. This isn't a bus tour; it's an elite relocation mission. Secure your dates for the 2026 season.
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-8">
                        <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-8 py-4 rounded-2xl font-black uppercase tracking-[0.3em] text-xs inline-flex items-center gap-4">
                            REQUEST MY CUSTOM ITINERARY <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationToursContent;
