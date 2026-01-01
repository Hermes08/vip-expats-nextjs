'use client';

import React from 'react';
import { ClipboardCheck, Check, ArrowRight, FileText, Landmark, ShieldCheck, Zap, AlertCircle, Clock, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const RelocationChecklistContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Legal Hub", item: "https://expatrockstars.com/relocation/legal" },
        { name: "Visa Checklist 2026", item: "https://expatrockstars.com/relocation/legal/checklist" }
    ];

    const checklistSections = [
        {
            title: "Phase 1: Home Country Prep",
            items: [
                { title: "FBI Criminal Record / Police Check", desc: "Must be issued within 6 months of filing and must be APOSTILLED or AUTHENTICATED." },
                { title: "Passport Validity", desc: "Ensure your passport has at least 6 months validity remaining." },
                { title: "Second ID", desc: "A valid driver's license or state ID card (notarized copy)." },
                { title: "Apostilled Marriage/Birth Certificates", desc: "Only required if applying with dependents." }
            ]
        },
        {
            title: "Phase 2: Panama Arrival",
            items: [
                { title: "Health Certificate", desc: "Must be issued by a Panamanian doctor (we arrange this for you)." },
                { title: "8 Passport Photos", desc: "Professional attire required (suit/tie for men, business for women)." },
                { title: "Personal Sworn Affidavit", desc: "A standard form explaining your reasons for seeking residency." },
                { title: "Bank Reference Letter", desc: "Required for the investment and Friendly Nations paths." }
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: "https://expatrockstars.com/" }, ...breadcrumbItems]} />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="py-24 bg-brand-GOLD text-brand-950 relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-950 text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Master Dossier
                    </span>
                    <h1 className="text-5xl md:text-9xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                        Panama Visa <br /> <span className="italic">Checklist</span> 2026
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-950/70 max-w-4xl mx-auto leading-relaxed font-black uppercase tracking-tight">
                        The definitive guide to <strong>panama visa requirements</strong>. Don't leave your country without checking every box in this 2026 guide.
                    </p>
                </div>
            </section>

            {/* Timeline Warning */}
            <section className="py-16 bg-red-50 border-y border-red-100">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
                    <AlertCircle className="text-red-500 shrink-0" size={32} />
                    <p className="text-sm font-black uppercase tracking-widest text-red-900 text-center md:text-left">
                        CRITICAL: Most documents (like FBI checks) EXPIRE after 6 months. <br />
                        <span className="opacity-60">If your document is older than 180 days on the day of filing, it WILL be rejected.</span>
                    </p>
                </div>
            </section>

            {/* Checklist Grid */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20">
                    {checklistSections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 italic border-b-4 border-brand-GOLD inline-block pb-2">
                                {section.title}
                            </h2>
                            <div className="space-y-10">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-10 h-10 border-2 border-neutral-200 rounded-lg flex items-center justify-center shrink-0 group-hover:border-brand-GOLD transition-all group-hover:bg-brand-GOLD/10">
                                            <div className="w-4 h-4 rounded-sm bg-transparent group-hover:bg-brand-GOLD transition-all"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black uppercase tracking-tighter mb-2 italic text-brand-950">{item.title}</h4>
                                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pro-Tips / Rockstar Insights */}
            <section className="py-32 bg-neutral-950 text-white rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <Zap className="text-brand-GOLD mb-10" size={64} />
                            <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD underline">Rockstar</span> Secret</h2>
                            <p className="text-xl text-gray-400 font-medium leading-relaxed mb-12">
                                Navigating <strong>panama residency requirements</strong> isn't just about the list; it's about the timing. We manage the entire schedule for you.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 p-8 bg-white/5 rounded-3xl border border-white/5">
                                    <Clock className="text-brand-GOLD shrink-0" size={24} />
                                    <p className="text-sm font-medium"><strong>Apostille Time:</strong> Some US states take 6+ weeks for apostilles. We help you use expedited FBI channellers to cut this down to 10 days.</p>
                                </div>
                                <div className="flex gap-4 p-8 bg-white/5 rounded-3xl border border-white/5">
                                    <Globe className="text-brand-GOLD shrink-0" size={24} />
                                    <p className="text-sm font-medium"><strong>Digital Copies:</strong> We maintain a secure cloud bunker for your documents, so even if you lose the originals, we have the scans ready for backup.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative aspect-square">
                            <Image
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80"
                                alt="Legal professional organizing Panama visa requirement checklist"
                                fill
                                className="object-cover rounded-[4rem] grayscale opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-32 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Ready for <br /> Day One?</h2>
                    <p className="text-xl text-neutral-500 mb-16 font-medium leading-relaxed">
                        Don't risk your move on a missing paper. Get the full verified 2026 checklist and a 1-on-1 legal review.
                    </p>
                    <Link href="/relocation/tours" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-GOLD hover:text-brand-950 transition-all shadow-2xl inline-block">
                        Download PDF & Book Tour
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationChecklistContent;
