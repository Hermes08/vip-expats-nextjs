'use client';

import React from 'react';
import { Star, Quote, ArrowRight, MapPin, CheckCircle2, Play } from 'lucide-react';
import Link from 'next/link';

const RelocationReviewsContent: React.FC = () => {
    const reviews = [
        {
            name: "The Miller Family",
            origin: "California, USA",
            destination: "Boquete",
            quote: "We were 100% sure we wanted the beach. After two days on the Rockstar tour in Boquete, we realized the mountain lifestyle was what we actually needed. That tour saved us from a half-million dollar mistake.",
            image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=400&q=80"
        },
        {
            name: "Mark & Sarah",
            origin: "Toronto, Canada",
            destination: "Coronado",
            quote: "The legal workshop was the highlight. Understanding the tax benefits and the friendly nations visa in a private setting gave us the confidence to pull the trigger. We're now living our dream 1 hour from the city.",
            image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&q=80"
        },
        {
            name: "James L.",
            origin: "London, UK",
            destination: "Panama City",
            quote: "I visited 12 projects in 3 days. The efficiency was mind-blowing. No fluff, just hard data and real walkthroughs. If you're serious about Panama real estate, this is the only way to do it.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-brand-950 text-white font-sans">
            {/* Hero Section */}
            <section className="py-24 text-center max-w-7xl mx-auto px-4">
                <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                    Voices of the Community
                </span>
                <h1 className="text-5xl md:text-8xl font-heading font-black mb-10 uppercase tracking-tighter">
                    Client <span className="text-brand-GOLD italic">Success</span> Stories
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Discover why 2,500+ expats have trusted ExpatRockstars for their <strong>panama relocation discovery tour</strong> and investment strategy.
                </p>
            </section>

            {/* Featured Video Placeholder */}
            <section className="py-12 max-w-5xl mx-auto px-4">
                <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80" alt="Expat Rockstar Interview" className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-brand-GOLD text-brand-950 rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                            <Play size={40} fill="currentColor" />
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter italic">"The best decision we ever made"</h3>
                            <p className="text-brand-GOLD text-xs font-black uppercase tracking-widest mt-2">Watch the Documentary</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-10 rounded-[3rem] hover:border-brand-GOLD/30 transition-all flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-2 border-brand-GOLD/20">
                                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex gap-1 text-brand-GOLD mb-6">
                                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                            </div>
                            <Quote className="text-brand-GOLD/20 mb-6 shrink-0" size={40} />
                            <p className="text-lg font-medium text-gray-300 leading-relaxed mb-8 flex-grow">
                                "{review.quote}"
                            </p>
                            <div>
                                <h4 className="text-xl font-black uppercase tracking-tighter italic text-brand-GOLD">{review.name}</h4>
                                <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 mt-2">
                                    <MapPin size={12} /> {review.origin} <ArrowRight size={10} /> {review.destination}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievement Badges */}
            <section className="py-24 bg-brand-GOLD text-brand-950 rounded-[5rem] mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <CheckCircle2 size={48} className="mb-6" />
                            <h3 className="text-xl font-black uppercase tracking-widest leading-none mb-4">Certified Local Experts</h3>
                            <p className="text-sm font-bold opacity-60">Deep roots in Panama for over 15 years.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle2 size={48} className="mb-6" />
                            <h3 className="text-xl font-black uppercase tracking-widest leading-none mb-4">100% Transparency</h3>
                            <p className="text-sm font-bold opacity-60">We show you precisely what others hide.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle2 size={48} className="mb-6" />
                            <h3 className="text-xl font-black uppercase tracking-widest leading-none mb-4">Rockstar Community</h3>
                            <p className="text-sm font-bold opacity-60">Lifetime access to our expat network.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Trust */}
            <section className="py-32 text-center px-4">
                <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 uppercase tracking-tighter">Your Story Starts <span className="text-brand-GOLD italic">With One Trip.</span></h2>
                <p className="text-gray-500 mb-16 text-xl font-medium max-w-2xl mx-auto">
                    Join the ranks of successful <strong>panama expats</strong>. Book your Discovery Tour today and see the results for yourself.
                </p>
                <Link href="/relocation/tours" className="px-16 py-8 bg-brand-GOLD text-brand-950 font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-white transition-all shadow-2xl">
                    Explore Our Tours
                </Link>
            </section>
        </div>
    );
};

export default RelocationReviewsContent;
