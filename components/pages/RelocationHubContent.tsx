'use client';

import React from 'react';
import { Compass, ShieldCheck, Map, ArrowRight, Star, Home, Users, Briefcase, Heart, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const RelocationHubContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-brand-950 text-white font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />

            {/* Premium Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1600&q=80"
                        alt="Aerial view of Panama City skyline, a primary destination for panama relocation tours"
                        fill
                        className="w-full h-full object-cover opacity-30 scale-110 animate-[pulse_10s_ease-in-out_infinite]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-transparent to-brand-950"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="flex justify-center mb-8">
                        <span className="px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full backdrop-blur-md">
                            Your Panama Life Starts Here
                        </span>
                    </div>
                    <h1 className="font-heading text-6xl md:text-9xl font-black mb-8 leading-tight tracking-tighter">
                        PLANAMA <br /> <span className="text-brand-GOLD">RELOCATION</span> HUB
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                        Don't just move to Panama. <strong>Relocate with strategy.</strong> Explore our <strong>panama relocation tours</strong>, master the <strong>pensionado visa panama</strong>, and find your <strong>panama dream home</strong> with the world's #1 expat team.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/relocation/tours" className="px-12 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl shadow-2xl hover:bg-white transition-all transform hover:-translate-y-1">
                            Book Discovery Tour
                        </Link>
                        <Link href="/relocation/visas" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all transform hover:-translate-y-1">
                            Visa Requirements
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Three Pillars of Relocation */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter">The 3 Pillars of <span className="text-brand-GOLD">Relocation</span></h2>
                        <p className="text-gray-500 text-lg uppercase tracking-widest font-black">Everything you need to relocate to Panama, categorized.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Pillar 1: Exploration */}
                        <div className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] hover:border-brand-GOLD/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-GOLD/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-GOLD/20 transition-all"></div>
                            <Compass className="text-brand-GOLD mb-10" size={56} />
                            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Discovery <br /> & Tours</h3>
                            <p className="text-gray-400 leading-relaxed mb-8 font-medium">
                                Seeing is believing. Our <strong>panama relocation real estate tours</strong> are the ultimate filter. Walk the streets, meet the community, and find where you truly belong before you invest.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> 5-Day VIP Experience
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> Regional Deep Dives
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> Custom Itineraries
                                </li>
                            </ul>
                            <Link href="/relocation/tours" className="inline-flex items-center gap-3 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                                Explore Tours <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Pillar 2: Residency */}
                        <div className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] hover:border-brand-GOLD/30 transition-all group relative overflow-hidden">
                            <ShieldCheck className="text-brand-GOLD mb-10" size={56} />
                            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Legal <br /> & Residency</h3>
                            <p className="text-gray-400 leading-relaxed mb-8 font-medium">
                                Navigate the legal maze with elite precision. From the <strong>pensionado visa panama</strong> to <strong>work permits</strong>, our partnership with top lawyers ensures your residency is 100% compliant.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> Legal FAQ & Lawyer Access
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> Panama Work Permit Guide
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> Visa Comparison Center
                                </li>
                            </ul>
                            <Link href="/relocation/legal" className="inline-flex items-center gap-3 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                                Legal Hub <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Pillar 3: Regional Guides */}
                        <div className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] hover:border-brand-GOLD/30 transition-all group relative overflow-hidden">
                            <Map className="text-brand-GOLD mb-10" size={56} />
                            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Regional <br /> Research</h3>
                            <p className="text-gray-400 leading-relaxed mb-8 font-medium">
                                Decisions made with data. Compare <strong>boquete panama</strong> highlands against the <strong>coronado panama</strong> beach lifestyle. Get the truth on weather, safety, and healthcare.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> Boquete vs Coronado
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> Cost of Living Breakdown
                                </li>
                                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                    <ArrowRight size={14} className="text-brand-GOLD" /> Best Neighborhood Quiz
                                </li>
                            </ul>
                            <Link href="/relocation/guides" className="inline-flex items-center gap-3 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                                View Guides <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-24 bg-brand-GOLD rounded-[5rem] mx-4 text-brand-950">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-5xl font-black mb-2 italic">2,500+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/60">Families Relocated</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2 italic">15+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/60">Preferred Communities</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2 italic">100%</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/60">Visa Success Rate</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2 italic">$0</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/60">Unexpected Mistakes</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why the Rockstar Path? */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 relative aspect-square overflow-hidden rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                            alt="Expats enjoying the Pacific beach lifestyle at Coronado Panama"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">The Rockstar Difference</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter leading-[0.9]">Why <strong>ExpatRockstars</strong> is Your #1 Bet</h2>
                        <div className="space-y-10 font-medium text-gray-400 leading-relaxed">
                            <p>
                                Most "relocation tours" are just property tours in disguise. We take a fundamentally different approach. We are your filter. We show you the good, the bad, and the <strong>profitable</strong>.
                            </p>
                            <p>
                                Whether you're looking for <strong>american retirees in panama</strong> communities or you're a digital nomad seeking the pulse of <strong>panama city condos</strong>, we have the specialized data you need to thrive.
                            </p>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-8">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-brand-GOLD" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Legal Security</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="text-brand-GOLD" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Community Focused</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Briefcase className="text-brand-GOLD" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-widest">ROI Driven</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Heart className="text-brand-GOLD" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Lifestyle First</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seasonal Hub: Best Time to Visit */}
            <section className="py-24 bg-white/5 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Planning your Scouting Trip?</h2>
                        <p className="text-gray-400 mb-12 font-medium">
                            The <strong>best time to visit panama</strong> depends on what you're looking for. From the dry summer season to the lush green season, each month offers a different perspective on <strong>international living in panama</strong>.
                        </p>
                        <Link href="/relocation/weather" className="inline-flex items-center gap-3 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.3em] hover:gap-5 transition-all">
                            View Seasonal Guide <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA Footer */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic">Ready to ROCK?</h2>
                    <p className="text-xl md:text-2xl font-bold mb-16 opacity-80">Stop dreaming. Start Relocating. Our team is standing by.</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="/contacto" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-black transition-all shadow-2xl">
                            Request My Proposal
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationHubContent;
