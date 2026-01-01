'use client';

import React from 'react';
import { Users, Check, ArrowRight, FileText, Globe, Landmark, ShieldCheck, Zap, Briefcase, AlertCircle, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceSchema from '@/components/seo/ServiceSchema';

const RelocationFriendlyNationsContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Visas", item: "https://expatrockstars.com/relocation/visas" },
        { name: "Friendly Nations", item: "https://expatrockstars.com/relocation/visas/friendly-nations" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: "https://expatrockstars.com/" }, ...breadcrumbItems]} />
            <ServiceSchema
                name="Panama Friendly Nations Visa Services"
                description="Professional legal support for the Panama Friendly Nations Visa Professional and Investment paths. Vetted lawyer network and VIP processing."
                serviceType="Immigration Service"
            />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Header / Hero */}
            <section className="py-32 bg-brand-950 text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-GOLD rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Professional's Fast Track
                    </span>
                    <h1 className="text-5xl md:text-9xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                        Friendly <span className="text-brand-GOLD italic">Nations</span> <br /> Visa Guide 2026
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                        Your VIP pass to one of the world's fastest-growing economies. The <strong>friendly nations visa panama</strong> remains the premier residency path for citizens of 50+ pro-business countries seeking <strong>international living in panama</strong>.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/contacto" className="px-12 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all shadow-2xl">
                            Check My Eligibility
                        </Link>
                    </div>
                </div>
            </section>

            {/* The 2026 Context: Why Friendly Nations? */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src="https://images.unsplash.com/photo-1554188248-986adbb73be4?w=1000&q=80"
                            alt="Panama City skyline reflecting professional residency opportunities"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">Rockstar</span> Choice</h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                Since its overhaul in 2021, the <strong>friendly nations visa panama requirements</strong> have evolved. It is no longer a "visit once and get a card" program. It is now a serious, multi-stage path designed for professionals and investors who want to contribute to Panama's growth.
                            </p>
                            <p>
                                At Relocate Rockstar, we specialize in navigating the nuances of the <strong>friendly nations visa country list</strong> and the specific professional categories that get approved fastest. Whether you're a digital nomad or a corporate executive, this is your blueprint.
                            </p>
                            <div className="p-8 bg-neutral-900 text-white rounded-[3rem]">
                                <h4 className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-4">Elite Benefits</h4>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex gap-3"><Check className="text-brand-GOLD" size={16} /> 2-Year Provisional to Permanent Residency</li>
                                    <li className="flex gap-3"><Check className="text-brand-GOLD" size={16} /> Immediate Right to Apply for a Work Permit</li>
                                    <li className="flex gap-3"><Check className="text-brand-GOLD" size={16} /> No Requirement to Stay in the Country Long-Term</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligible Countries Breakdown */}
            <section className="py-32 bg-neutral-50 rounded-[5rem] mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">Who is <span className="text-brand-GOLD">Friendly?</span></h2>
                        <p className="text-neutral-500 font-black uppercase tracking-widest text-xs">The Official 50+ Country List for 2026.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-neutral-100">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-6 italic text-brand-950">The Americas</h4>
                            <ul className="space-y-3 text-xs font-bold text-neutral-500">
                                <li>USA & Canada</li>
                                <li>Mexico & Brazil</li>
                                <li>Argentina & Chile</li>
                                <li>Costa Rica & Uruguay</li>
                                <li>Paraguay</li>
                            </ul>
                        </div>
                        <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-neutral-100">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-6 italic text-brand-950">Europe (Tier 1)</h4>
                            <ul className="space-y-3 text-xs font-bold text-neutral-500">
                                <li>UK & Ireland</li>
                                <li>Germany & France</li>
                                <li>Spain & Portugal</li>
                                <li>Italy & Switzerland</li>
                                <li>Netherlands & Belgium</li>
                            </ul>
                        </div>
                        <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-neutral-100">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-6 italic text-brand-950">Europe (Tier 2)</h4>
                            <ul className="space-y-3 text-xs font-bold text-neutral-500">
                                <li>Andorra & Austria</li>
                                <li>Croatia & Cyprus</li>
                                <li>Czech Republic</li>
                                <li>Denmark & Estonia</li>
                                <li>Finland & Greece</li>
                            </ul>
                        </div>
                        <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-neutral-100">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-6 italic text-brand-950">APAC & Others</h4>
                            <ul className="space-y-3 text-xs font-bold text-neutral-500">
                                <li>Australia & NZ</li>
                                <li>Japan & South Korea</li>
                                <li>Singapore & Taiwan</li>
                                <li>Hong Kong & Israel</li>
                                <li>South Africa</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Two Paths: Professional vs Investment */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none">Choose Your <span className="text-brand-GOLD">Trajectory</span></h2>
                    <p className="text-neutral-500 font-black uppercase tracking-widest text-xs">There are only two ways in. Let's find yours.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Professional Path */}
                    <div className="p-16 border border-neutral-200 rounded-[4rem] group hover:border-brand-GOLD transition-all">
                        <Briefcase className="text-brand-GOLD mb-10" size={64} />
                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">The Professional Path</h3>
                        <p className="text-lg text-neutral-600 font-medium leading-relaxed mb-10">
                            Ideal for those with a high-level corporate career or a specific skill set. You must be hired by a Panamanian company that pays into the social security system.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-6 h-6 bg-brand-GOLD/10 rounded-full flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-brand-GOLD" />
                                </div>
                                <div>
                                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-1">Local Job Offer</h4>
                                    <p className="text-xs text-neutral-400 font-medium">Agreement with a company that has "quota" for foreign workers.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 bg-brand-GOLD/10 rounded-full flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-brand-GOLD" />
                                </div>
                                <div>
                                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-1">Social Security</h4>
                                    <p className="text-xs text-neutral-400 font-medium">Paying into the "Caja de Seguro Social" (CSS) for a minimum of 2 years.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Investment Path */}
                    <div className="p-16 bg-neutral-950 text-white rounded-[4rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                            <Landmark size={200} />
                        </div>
                        <Landmark className="text-brand-GOLD mb-10" size={64} />
                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 italic text-brand-GOLD">The Investment Path</h3>
                        <p className="text-lg text-gray-400 font-medium leading-relaxed mb-10">
                            The "Buy-In" option. Perfect for those who want residency without the need for local employment. High success rate and predictable timeline.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-6 h-6 bg-brand-GOLD/20 rounded-full flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-brand-GOLD" />
                                </div>
                                <div>
                                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-1 text-white">Real Estate ($200k+)</h4>
                                    <p className="text-xs text-gray-500 font-medium">Purchase of a property with a minimum value of $200,000 USD.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 bg-brand-GOLD/20 rounded-full flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-brand-GOLD" />
                                </div>
                                <div>
                                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-1 text-white">Fixed Deposit ($200k+)</h4>
                                    <p className="text-xs text-gray-500 font-medium">Certificate of deposit for 3 years in a local Panamanian bank.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Step-by-Step 2026 Checklist (The Lead Magnet Section) */}
            <section className="py-32 bg-brand-GOLD text-brand-950 rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <Zap size={64} className="mb-10 opacity-30" />
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The 2026 <br /> Checklist</h2>
                        <div className="space-y-8 font-bold text-lg opacity-80 mb-12">
                            <p>Don't let the paperwork kill your vibe. We've distilled 500 pages of legal code into a 10-point Rockstar Checklist.</p>
                            <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
                                <li className="flex gap-3"><Check size={16} /> FBI/Police Check (Apostilled/Authenticated)</li>
                                <li className="flex gap-3"><Check size={16} /> Valid Passport (with min. 6 months)</li>
                                <li className="flex gap-3"><Check size={16} /> Second ID Copy</li>
                                <li className="flex gap-3"><Check size={16} /> 8 Passport Photos in Suit/Formal Wear</li>
                                <li className="flex gap-3"><Check size={16} /> Health Certificate (Provided by us in Panama)</li>
                            </ul>
                        </div>
                        <button className="px-12 py-6 bg-brand-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-2xl">
                            Download Full 2026 PDF Checklist
                        </button>
                    </div>
                    <div className="bg-white/90 p-12 rounded-[4rem] text-sm font-medium leading-[1.8] border border-brand-950/10 shadow-2xl">
                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-8 italic text-brand-950 underline decoration-brand-GOLD decoration-4 underline-offset-8">Critical Warning</h4>
                        <p className="mb-6">
                            Since 2024, Panama has tightened rules on apostilles. If your documents are older than 6 months by the time you arrive in Panama City, they will be rejected.
                        </p>
                        <p>
                            <strong>Relocate Rockstar Pro-Tip:</strong> Time your FBI check for exactly 30 days before your flight for maximum safety.
                        </p>
                    </div>
                </div>
            </section>

            {/* Rejection Risks & Rejection Reasons */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <AlertCircle className="text-red-500 mb-10" size={64} />
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none text-brand-950">Why Apps <br /> Get <span className="text-red-500">Rejected</span></h2>
                        <div className="space-y-6 text-lg text-neutral-600 font-medium leading-relaxed">
                            <p>
                                The <strong>friendly nations visa panama</strong> is not a "guaranteed" approval. The Ministry of Security and Immigration department have become increasingly strict about **Economic Ties**.
                            </p>
                            <p>
                                Common pitfalls include:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <X className="text-red-500" size={14} />
                                    </div>
                                    <span className="text-sm">"Ghost" employment with companies that have no real Panamanian operations.</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <X className="text-red-500" size={14} />
                                    </div>
                                    <span className="text-sm">Incomplete apostille chains on FBI or local police records.</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <X className="text-red-500" size={14} />
                                    </div>
                                    <span className="text-sm">Inconsistent funding sources that trigger AML (Anti-Money Laundering) checks.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/2 p-12 bg-neutral-900 rounded-[4rem] text-white">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-brand-GOLD">The Rockstar Solution</h3>
                        <p className="text-gray-400 font-medium leading-relaxed mb-10">
                            We pre-audit your entire <strong>friendly nations visa dossier</strong> before you even book your flight. By the time our <strong>panama immigration lawyers</strong> see your file, it's already 95% cleared for approval.
                        </p>
                        <button className="w-full py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white transition-all">
                            Book Pre-Audit Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Neighborhood & Lifestyle Analysis for Professionals */}
            <section className="py-32 bg-neutral-950 text-white rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic">Professional <span className="text-brand-GOLD">Hubs</span></h2>
                        <p className="text-gray-500 text-lg uppercase tracking-widest font-black">Where the Friendly Nations live and work.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Costa del Este", desc: "The 'Silicon Valley' of Panama. Home to multinationals like Procter & Gamble and Adidas. Luxury condos, wide sidewalks, and elite schools." },
                            { title: "Punta Pacifica", desc: "High-end, waterfront living. Closest to the top hospitals and the financial district. Ideal for those working in private equity or tech." },
                            { title: "Casco Viejo", desc: "For the 'Creative' Friendly Nation. Historic charm, world-class nightlife, and a growing community of tech entrepreneurs." }
                        ].map((h, i) => (
                            <div key={i} className="bg-white/5 p-12 rounded-[4rem] border border-white/5 hover:border-brand-GOLD transition-all">
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 italic text-brand-GOLD">{h.title}</h4>
                                <p className="text-gray-400 text-sm font-medium leading-relaxed">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Labor Market 2026: What's in Demand */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic">The 2026 <br /><span className="text-brand-GOLD">Labor Market</span></h2>
                    <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Where the Rockstar Friendly Nations are finding success.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                        <p>
                            Panama is no longer just a canal and a bank. It is becoming a tech and logistics hub for the entire region. For those on the **Professional Path** of the <strong>friendly nations visa</strong>, certain sectors are desperate for talent.
                        </p>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 font-black uppercase tracking-tighter text-xs">FinTech & Crypto</li>
                            <li className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 font-black uppercase tracking-tighter text-xs">Cybersecurity</li>
                            <li className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 font-black uppercase tracking-tighter text-xs">Supply Chain Tech</li>
                            <li className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 font-black uppercase tracking-tighter text-xs">Renewable Energy</li>
                        </ul>
                        <p>
                            However, remember the <strong>protected professions</strong>. If you are an architect, nurse, or attorney in your home country, you CANNOT practice those specific roles in Panama even with the Friendly Nations visa. You must pivot to "Consulting" or "Management" roles to stay compliant.
                        </p>
                    </div>
                    <div className="bg-brand-GOLD p-16 rounded-[4rem] text-brand-950 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Briefcase size={200} />
                        </div>
                        <h4 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">The Salary Reality</h4>
                        <p className="font-bold opacity-80 leading-relaxed mb-8">
                            While living costs are lower, Panamanian salaries for local roles are often lower than US/EU equivalents. Most Rockstar Friendly Nations move as **multinational transfers** or **entrepreneurs** to keep their global earning power while enjoying Panama's tax benefits.
                        </p>
                        <Link href="/relocation/nichos/entrepreneurs" className="text-[10px] font-black uppercase tracking-[0.3em] bg-brand-950 text-white px-8 py-4 rounded-xl inline-block">
                            Entrepreneur Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* The E-Cedula: Your VIP Key */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row-reverse gap-20 items-center">
                    <div className="lg:w-1/2">
                        <ShieldCheck size={64} className="text-brand-GOLD mb-10" />
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">E-Cedula</span> <br /> Advantage</h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                Once your <strong>friendly nations visa panama requirements</strong> are met and your residency is approved, you receive a 'Cedula'. This is more than just an ID card; it's your key to the country.
                            </p>
                            <p>
                                With an E-Cedula, you can:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-center">
                                    <div className="w-8 h-8 bg-brand-GOLD/10 rounded-full flex items-center justify-center shrink-0">
                                        <Check size={16} className="text-brand-GOLD" />
                                    </div>
                                    <span className="text-sm font-bold">Skip the long tourist lines at Tocumen Airport.</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <div className="w-8 h-8 bg-brand-GOLD/10 rounded-full flex items-center justify-center shrink-0">
                                        <Check size={16} className="text-brand-GOLD" />
                                    </div>
                                    <span className="text-sm font-bold">Open local bank accounts as a "Resident" (much easier).</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <div className="w-8 h-8 bg-brand-GOLD/10 rounded-full flex items-center justify-center shrink-0">
                                        <Check size={16} className="text-brand-GOLD" />
                                    </div>
                                    <span className="text-sm font-bold">Access local insurance rates and property tax exemptions.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/2 aspect-video bg-neutral-100 rounded-[4rem] flex items-center justify-center p-20 border border-neutral-200">
                        <div className="w-full aspect-[1.6/1] bg-neutral-900 rounded-3xl p-10 border-t-4 border-brand-GOLD shadow-2xl">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-16 h-16 bg-white/10 rounded-full"></div>
                                <div className="text-right">
                                    <div className="text-[10px] text-brand-GOLD font-black uppercase tracking-widest italic">República de Panamá</div>
                                    <div className="text-[8px] text-white opacity-40 uppercase tracking-widest font-black">Carné de Residente Permanente</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 w-48 bg-white/5 rounded"></div>
                                <div className="h-4 w-32 bg-white/5 rounded"></div>
                                <div className="h-10 w-20 bg-brand-GOLD/20 rounded ml-auto mt-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none">Questions <br /> <span className="text-brand-GOLD">Exposed</span></h2>
                    <p className="text-neutral-500 font-black uppercase tracking-widest text-xs">No Fluff. Just Facts.</p>
                </div>

                <div className="space-y-8">
                    {[
                        { q: "How long does it take to get a Friendly Nations card?", a: "Your initial temporary card is issued within 5-7 business days of your first appointment. However, the final approval for the 2-year provisional residency takes 3-4 months." },
                        { q: "Can I bring my family?", a: "ABSOLUTELY. Spouses and children under 18 (or up to 25 if studying) are included as dependents. You only need to show proof of relationship (apostilled marriage/birth certificates)." },
                        { q: "Do I need a local bank account?", a: "For the investment path, yes. For the professional path, your employer handles the salary account. Opening a bank account in Panama is the hardest part—we handle the pre-compliance to ensure you get approved." },
                        { q: "What is the total legal cost?", a: "Legal fees for the Friendly Nations Visa typically range from $1,500 to $2,500 plus government fees ($1,050 for main applicant). Dependents add approx $800 each." },
                        { q: "Can I move from temporary to permanent residency?", a: "Yes. After holding the provisional residency for 2 years, you apply for permanent residency. It is a very high approval rate as long as you maintain your investment or employment." },
                        { q: "Do I have to live in Panama to keep the visa?", a: "No. You only need to visit once every 2 years to keep the permanent card active. However, for tax residency, you should spend 183+ days in the country." },
                        { q: "Is there a work permit included?", a: "Not automatically. You apply for the residency first, then once you have your temporary card, your lawyer files for the work permit at the Ministry of Labor." },
                        { q: "Can digital nomads use this visa?", a: "Only if they setup a local company or work for one. If you only want to work for your foreign boss, the 'Digital Nomad Visa' (Short-Stay Visa) is better, but it has no path to permanent residency." },
                        { q: "Can I buy land instead of a condo?", a: "Yes. As long as the registered value at the 'Registro Público' is $200,000 or more, land qualifies." },
                        { q: "What happens if I lose my job during the 2 years?", a: "You have a grace period to find a new employer who will 'take over' your sponsorship. If you can't, you may need to switch to the investment path." },
                        { q: "Can I apply while in Panama on a tourist visa?", a: "Yes. Most applicants enter as tourists and 'convert' their status. However, you must have all your home-country documents (FBI, etc.) ready before you arrive." },
                        { q: "What is the 'Professional Category' requirement?", a: "Panama limits foreign workers in certain protected professions like Medicine, Engineering, and Law. However, Tech, Marketing, Finance, and Executive roles are wide open for the Friendly Nations path." },
                        { q: "Do I need to visit Panama City specifically?", a: "Yes. All immigration filings for this visa must happen at the headquarters in Panama City. You cannot file at regional offices in David or Chiriquí." },
                        { q: "What is an E-Cedula?", a: "It is your official Panamanian ID card. It looks just like a local ID and makes daily life (banking, utilities, travel) significantly easier. You receive this after your residency is approved." },
                        { q: "Can I buy a property with a mortgage?", a: "For the investment path, the first $200,000 must be PAID IN FULL. Any amount above that can be financed via a Panamanian mortgage." }
                    ].map((faq, i) => (
                        <div key={i} className="p-10 border-b border-neutral-100 group hover:bg-neutral-50 transition-all rounded-[3rem]">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic group-hover:text-brand-GOLD transition-colors">{faq.q}</h4>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center border-t border-neutral-100">
                <div className="max-w-4xl mx-auto">
                    <ShieldCheck className="text-brand-GOLD mx-auto mb-10" size={80} />
                    <h2 className="text-4xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Your Rockstar <br /> Future Awaits</h2>
                    <p className="text-xl text-neutral-500 mb-16 font-medium leading-relaxed">
                        Don't let the 50-country list confuse you. We know exactly which path is fastest for your specific profile.
                    </p>
                    <Link href="/relocation/tours" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-GOLD hover:text-brand-950 transition-all shadow-2xl inline-block">
                        Start Initial Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationFriendlyNationsContent;
