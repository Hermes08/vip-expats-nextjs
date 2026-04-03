'use client';

import { useState } from 'react';
import { FloorPlan } from '@/lib/types';
import Image from 'next/image';

interface FloorPlansProps {
    floorplans: FloorPlan[];
    lang: string;
}

export default function FloorPlans({ floorplans, lang }: FloorPlansProps) {
    const [activeTab, setActiveTab] = useState(0);

    if (!floorplans || floorplans.length === 0) return null;

    return (
        <section className="py-16 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Floor Plans</h2>
                    <p className="text-zinc-400">Discover the perfect layout for your lifestyle.</p>
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {floorplans.map((plan, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${activeTab === index
                                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                                }`}
                        >
                            {plan.name[lang] || plan.name['en']}
                        </button>
                    ))}
                </div>

                {/* Active Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Details */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {floorplans[activeTab].name[lang] || floorplans[activeTab].name['en']}
                            </h3>
                            <div className="flex items-center gap-4 text-zinc-400 text-lg">
                                <span>{floorplans[activeTab].size}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                <span className="text-yellow-400 font-semibold">
                                    Starting at ${floorplans[activeTab].price.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-white font-medium">Characteristics:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {(floorplans[activeTab].characteristics[lang] || floorplans[activeTab].characteristics['en']).map((char, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-400">
                                        <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {char}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full sm:w-auto px-8 py-4 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-colors font-semibold border border-zinc-700">
                            Download Brochure
                        </button>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 order-1 lg:order-2">
                        <Image
                            src={floorplans[activeTab].image}
                            alt={floorplans[activeTab].name[lang] || floorplans[activeTab].name['en']}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
