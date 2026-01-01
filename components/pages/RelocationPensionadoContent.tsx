'use client';

import React from 'react';
import { Award, Check, ArrowRight, HeartPulse, Zap, Plane, Landmark, ShieldCheck, Wallet, Cat, Compass, Map as MapIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceSchema from '@/components/seo/ServiceSchema';

const RelocationPensionadoContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Visas", item: "https://expatrockstars.com/relocation/visas" },
        { name: "Pensionado Visa", item: "https://expatrockstars.com/relocation/visas/pensionado" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: "https://expatrockstars.com/" }, ...breadcrumbItems]} />
            <ServiceSchema
                name="Panama Pensionado Visa Services"
                description="Expert assistance for the Panama Retirement (Pensionado) Visa. We handle document translation, FBI checks, and legal filing for retirees."
                serviceType="Immigration Service"
            />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Header / Hero */}
            <section className="py-32 bg-brand-950 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-GOLD rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The World's #1 Retirement Visa
                    </span>
                    <h1 className="text-5xl md:text-9xl font-heading font-black mb-10 uppercase tracking-tighter leading-[0.85]">
                        Panama <span className="text-brand-GOLD italic">Retirement</span> <br /> Visa Guide 2026
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                        Don't just retire. Upgrade. The <strong>panama pensionado visa</strong> remains the gold standard for global residency, offering lifetime discounts and a path to <strong>international living in panama</strong> that no other country can match.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/contacto" className="px-12 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all shadow-2xl">
                            Start My Application
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Panama? Section (The Comparison) */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Why Panama Beats <br /><span className="text-brand-GOLD">Costa Rica & Mexico</span></h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                When scouting for the <strong>best places to retire in panama</strong>, contrast is your best friend. While Costa Rica offers nature, its cost of living has skyrocketed. While Mexico offers proximity, its security landscape remains volatile.
                            </p>
                            <p>
                                <strong>Panama's pensionado program</strong> is backed by law and cannot be revoked once granted. It provides a unique "First World Service at Third World Prices" experience, especially in hubs like <strong>Boquete</strong> and <strong>Coronado</strong>.
                            </p>
                            <div className="p-8 bg-neutral-50 rounded-[3rem] border border-neutral-100">
                                <h4 className="text-brand-GOLD text-xs font-black uppercase tracking-widest mb-4">The Rockstar ROI</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-sm text-neutral-800 font-bold">
                                        <Check className="text-brand-GOLD" size={18} /> No Taxes on Foreign-Source Pension
                                    </li>
                                    <li className="flex gap-3 text-sm text-neutral-800 font-bold">
                                        <Check className="text-brand-GOLD" size={18} /> US Dollar Economy (Zero Currency Risk)
                                    </li>
                                    <li className="flex gap-3 text-sm text-neutral-800 font-bold">
                                        <Check className="text-brand-GOLD" size={18} /> World-Class Infrastructure & Fiber Optic Internet
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80"
                            alt="Rocky mountain landscape in Boquete Panama, the top retirement destination"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Detailed Benefits Grid */}
            <section className="py-32 bg-neutral-950 text-white rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-GOLD rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter">Lifetime <span className="text-brand-GOLD italic">Benefits</span></h2>
                        <p className="text-gray-500 text-lg uppercase tracking-widest font-black">Guaranteed by the Government, Managed by Us.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "25% Off Utilities", desc: "Save every month on electricity, water, and garbage collection. This benefit is tied to your ID (Cedula)." },
                            { title: "50% Off Entertainment", desc: "Rockstar living means half-price movies, concerts, and sporting events. Just show your card." },
                            { title: "25% Off Dining", desc: "Enjoy 25% off in restaurants Monday through Thursday. Perfect for the Coronado social scene." },
                            { title: "15% Off Healthcare", desc: "Discount on hospital bills, lab tests, and private consultations nationwide." },
                            { title: "25% Off Flights", desc: "Discounts on international tickets originating from Panama. Ideal for visiting family back home." },
                            { title: "One-Time Tax Exempt", desc: "Import your household goods (up to $10,000) and a new car (every 2 years) tax-free." }
                        ].map((b, i) => (
                            <div key={i} className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] hover:border-brand-GOLD/30 transition-all group">
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic text-brand-GOLD">{b.title}</h4>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The 2026 Roadmap (Step-by-Step) */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">The 2026 <span className="text-brand-GOLD">Relocation Roadmap</span></h2>
                    <p className="text-neutral-500 font-black uppercase tracking-widest text-xs">A 6-Month Timeline to your Rockstar Life.</p>
                </div>

                <div className="space-y-12">
                    {[
                        { step: "Phase 1: Validation (Month 1-2)", title: "Document Procurement", desc: "Gathering your lifetime pension letter (apostilled), criminal background check (from FBI or equivalent), and marriage certificates. Mistake alert: Document validity is usually only 6 months." },
                        { step: "Phase 2: Presence (Month 3)", title: "The Rockstar Scouting Trip", desc: "Visit Panama. We handle your medical checkups, lawyer meetings, and bank account setups during your discovery tour. You must be physically present to file." },
                        { step: "Phase 3: Processing (Month 4-6)", title: "Temporary to Permanent", desc: "You receive your temporary card immediately. Permanent residency usually takes 90-120 days. No need to stay in the country for this part." }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-10 p-12 bg-neutral-50 rounded-[4rem] border border-neutral-100 items-center">
                            <div className="md:w-1/4">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-GOLD">{step.step}</span>
                            </div>
                            <div className="md:w-3/4">
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic text-brand-950">{step.title}</h4>
                                <p className="text-neutral-500 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Regional Deep Dive: Boquete vs Coronado */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic">Regional <span className="text-brand-GOLD">Soul Searching</span></h2>
                    <p className="text-neutral-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Where you land in Panama defines your retirement quality. We don't just show you houses; we show you the lifestyle vibe of the two biggest expat hubs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="p-12 bg-neutral-50 rounded-[4rem] border border-neutral-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all">
                            <Compass size={120} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">Boquete: The <span className="text-brand-GOLD">Mountain Haven</span></h3>
                        <div className="space-y-6 text-sm text-neutral-600 font-medium leading-relaxed">
                            <p>
                                Nestled in the highlands of Chiriquí, <strong>Boquete panama</strong> is the undisputed capital of the <strong>pensionado visa</strong> community. With temperatures hovering between 65-75°F year-round, it's the "eternal spring."
                            </p>
                            <p>
                                <strong>Vibe:</strong> Coffee culture, hiking trails, arts communities, and a very active social calendar. If you love gardening and mountain views, this is your Rockstar base.
                            </p>
                            <ul className="space-y-3 font-black uppercase tracking-widest text-[10px]">
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Microclimates for every mood</li>
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Top-tier volcanic soil for gardening</li>
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Large, established US/Canadian community</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-12 bg-neutral-900 rounded-[4rem] text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all">
                            <MapIcon size={120} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic text-brand-GOLD">Coronado: The <span className="text-white">Pacific Beat</span></h3>
                        <div className="space-y-6 text-sm text-gray-400 font-medium leading-relaxed">
                            <p>
                                Just 90 minutes from Panama City, <strong>Coronado panama</strong> is the premier beach destination. It’s a gated community hub that offers the convenience of the city with the rhythm of the ocean.
                            </p>
                            <p>
                                <strong>Vibe:</strong> Golf, social clubs, beach walks, and high-end grocery stores. Perfect for retirees who want coastal luxury and proximity to the capital's specialized hospitals.
                            </p>
                            <ul className="space-y-3 font-black uppercase tracking-widest text-[10px]">
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Direct Pacific beach access</li>
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Infrastructure equivalent to Florida</li>
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Weekend energy & City access</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial & Tax Planning Section */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <div className="w-16 h-16 bg-brand-GOLD/10 rounded-2xl flex items-center justify-center mb-10">
                            <Landmark className="text-brand-GOLD" size={32} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Financial <span className="text-brand-GOLD">Rockstar</span> Strategy</h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                One of the most misunderstood parts of the <strong>pensionado visa panama requirements</strong> is the bank account opening. Panama takes FATCA and AML rules very seriously. You cannot just "walk in" and open an account.
                            </p>
                            <p>
                                We specialize in the <strong>pre-approval process</strong>. We work with the compliance departments of top Panamanian banks to ensure your funds are cleared and your account is ready before you ship your household goods.
                            </p>
                            <p className="p-8 bg-neutral-900 text-white rounded-[3rem] text-sm">
                                <strong>Tax Truth:</strong> Panama follows a territorial tax system. If your pension is from the US/UK/Canada and you live in Panama, Panama will NOT tax that income. Period.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                        <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col justify-between">
                            <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD">Banking</h4>
                            <p className="text-xs text-neutral-500 font-bold mt-4 leading-relaxed">Full compliance support and intro to private banking managers.</p>
                        </div>
                        <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col justify-between">
                            <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD">Taxes</h4>
                            <p className="text-xs text-neutral-500 font-bold mt-4 leading-relaxed">Tax residency certificates to help you exit your home tax system legally.</p>
                        </div>
                        <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col justify-between">
                            <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD">Wills</h4>
                            <p className="text-xs text-neutral-500 font-bold mt-4 leading-relaxed">Creation of Panama-specific wills to protect your local assets.</p>
                        </div>
                        <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col justify-between">
                            <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD">Estate</h4>
                            <p className="text-xs text-neutral-500 font-bold mt-4 leading-relaxed">Advice on using Panama Foundations for asset protection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive FAQ Section (15+ items) */}
            <section className="py-32 max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic">Retirement <span className="text-brand-GOLD">FAQ</span></h2>
                    <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Deep Answers for a Big Move.</p>
                </div>

                <div className="space-y-8">
                    {[
                        { q: "Is there an age requirement for the Pensionado visa?", a: "No. There is strictly NO minimum age. As long as you have a lifetime government or corporate pension of $1,000/mo, you qualify. This makes it a favorite for the **FIRE (Financial Independence, Retire Early)** movement." },
                        { q: "Can my spouse be included?", a: "Yes. Spouses can be included for an additional $250/mo in pension proof. If you both have pensions and together they total $1,250+, you qualify together." },
                        { q: "Do I have to live in Panama 365 days a year?", a: "No. While it's a permanent residency visa, there is no residency requirement after it's granted. You only need to visit once every two years to keep it active." },
                        { q: "Can I work in Panama with a Pensionado visa?", a: "Generally, no. The condition of the visa is that you are retired. However, you can own a Panama corporation that does business outside of Panama, or apply for a separate work permit if you find a specialty local role." },
                        { q: "What is the total cost of the visa process?", a: "Between lawyer fees, government filings, translations, and health certificates, expect to spend $2,500 - $3,500 for a single person. Spouses add approx $1,500. We provide full itemized quotes upon inquiry." },
                        { q: "Does Medicare work in Panama?", a: "No. Medicare does not provide coverage outside the US. Most retirees use high-quality local private insurance which costs significantly less than US premiums." },
                        { q: "Is Boquete better than Coronado for retirees?", a: "Boquete offers mountain weather (65-75°F) and a tight-knit garden culture. Coronado offers beach vibes (85-90°F) and gated security. Our **panama relocation tours** visit both so you can choose." },
                        { q: "How long does the whole process take?", a: "From the day you file in Panama, you'll have your residency within 3-4 months. You are legally protected in Panama once your initial application is filed." }
                    ].map((faq, i) => (
                        <div key={i} className="p-10 border-b border-neutral-100 group hover:bg-neutral-50 transition-all rounded-[3rem]">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic group-hover:text-brand-GOLD transition-colors">{faq.q}</h4>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck size={200} />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-5xl md:text-9xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-[0.85]">Plan Your <br /> Upgrade</h2>
                    <p className="text-xl md:text-2xl font-bold mb-16 opacity-80 max-w-2xl mx-auto leading-relaxed">
                        Don't leave your <strong>panama retirement</strong> to chance. Relocate with the Rockstar team and secure your <strong>panama pensionado visa</strong> with zero stress.
                    </p>
                    <Link href="/relocation/tours" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-black transition-all shadow-2xl inline-block">
                        Request Retirement Itinerary
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationPensionadoContent;
