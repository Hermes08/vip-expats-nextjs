'use client';

import React from 'react';
import { Award, Check, ArrowRight, HeartPulse, Zap, Plane, Landmark, ShieldCheck, Wallet, Cat, Compass, Map as MapIcon, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceSchema from '@/components/seo/ServiceSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

import { useLanguage } from '@/context/LanguageContext';

const RelocationPensionadoContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Visas", item: `https://panamarealestatesale.com/${lang}/relocation/visas` },
        { name: "Pensionado Visa", item: `https://panamarealestatesale.com/${lang}/relocation/visas/pensionado` }
    ];

    const faqs = [
        {
            question: "How long does the Pensionado Visa take in 2026?",
            answer: "The government processing typically takes 3-4 months. However, you receive a temporary card within 5-7 business days of your first visit, which allows you to remain in the country legally while you wait."
        },
        {
            question: "Do I need to live in Panama to keep the visa?",
            answer: "No. One of unique benefits of the <strong>panama retirement visa</strong> is that there is no minimum stay required to maintain your permanent residency status, though you should visit at least once every two years."
        },
        {
            question: "Can I include my spouse on the visa?",
            answer: "Yes. For a spouse to be included, your pension must be at least $1,250 per month (instead of $1,000) or you must prove a combined pension income."
        },
        {
            question: "Are the discounts really significant?",
            answer: "Yes. The 'Law 6' discounts (25% off utility bills, 50% off movie tickets, 25% off airline tickets) can save a retired couple upwards of $400-$600 per month on living costs."
        },
        {
            question: "What if I don't have a government pension?",
            answer: "We can help you set up a high-yield annuity through a Panamanian insurance company that meets the requirements, or explore the <strong>qualified investor visa</strong> path."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />
            <ServiceSchema
                name="Panama Pensionado Visa Services"
                description="Expert assistance for the Panama Retirement (Pensionado) Visa. We handle document translation, FBI checks, and legal filing for retirees."
                serviceType="Immigration Service"
            />
            <LocalBusinessSchema />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Header / Hero */}
            <section className="py-14 bg-white text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-GOLD rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The World's #1 Retirement Visa
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter leading-[0.85]">
                        Panama <span className="text-brand-GOLD italic">Retirement</span> <br /> Visa Guide 2026
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                        Don't just retire. Upgrade. The <strong>panama pensionado visa</strong> remains the gold standard for global residency, offering lifetime discounts and a path to <strong>international living in panama</strong> that no other country can match.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href={`/${lang}/contacto`} className="px-12 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all shadow-2xl">
                            Start My Application
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Panama? Section (The Comparison) */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Why Panama Beats <br /><span className="text-brand-GOLD">Costa Rica & Mexico</span></h2>
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-[1.8]">
                            <p>
                                When scouting for the <strong>best places to retire in panama</strong>, contrast is your best friend. While Costa Rica offers nature, its cost of living has skyrocketed. While Mexico offers proximity, its security landscape remains volatile.
                            </p>
                            <p>
                                <strong>Panama's pensionado program</strong> is backed by law and cannot be revoked once granted. It provides a unique "First World Service at Third World Prices" experience, especially in hubs like <strong>Boquete</strong> and <strong>Coronado</strong>.
                            </p>
                            <div className="p-8 bg-white rounded-2xl border border-brand-100">
                                <h4 className="text-brand-GOLD text-xs font-black uppercase tracking-widest mb-4">The Elite ROI</h4>
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
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
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
            <section className="py-14 bg-brand-50 text-brand-950 rounded-3xl mx-4 overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-GOLD rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter">Lifetime <span className="text-brand-GOLD italic">Benefits</span></h2>
                        <p className="text-gray-500 text-lg uppercase tracking-widest font-black">Guaranteed by the Government, Managed by Us.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "25% Off Utilities", desc: "Save every month on electricity, water, and garbage collection. This benefit is tied to your ID (Cedula)." },
                            { title: "50% Off Entertainment", desc: "Elite living means half-price movies, concerts, and sporting events. Just show your card." },
                            { title: "25% Off Dining", desc: "Enjoy 25% off in restaurants Monday through Thursday. Perfect for the Coronado social scene." },
                            { title: "15% Off Healthcare", desc: "Discount on hospital bills, lab tests, and private consultations nationwide." },
                            { title: "25% Off Flights", desc: "Discounts on international tickets originating from Panama. Ideal for visiting family back home." },
                            { title: "One-Time Tax Exempt", desc: "Import your household goods (up to $10,000) and a new car (every 2 years) tax-free." }
                        ].map((b, i) => (
                            <div key={i} className="bg-white/5 border border-brand-100 p-6 rounded-[3.5rem] hover:border-brand-GOLD/30 transition-all group">
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic text-brand-GOLD">{b.title}</h4>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Retirement Revolution 2026 */}
            <section className="py-14 bg-brand-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The 2026 <br /><span className="text-brand-GOLD italic">Retirement</span> <br /> Revolution</h2>
                            <div className="space-y-8 text-lg text-slate-500 font-medium leading-[1.8]">
                                <p>
                                    Retiring in 2026 is a different ballgame than it was a decade ago. With high-tax jurisdictions and rising social instability in the West, <strong>panama retirement</strong> has transitioned from a "nice to have" to a strategic "must have" for those protecting their wealth and quality of life.
                                </p>
                                <p>
                                    Our <strong>panama pensionado visa requirements</strong> guide is designed for the high-net-worth individual who values time over bureaucracy. We don't just process papers; we engineer your transition into the Panamanian "Panama Real Estate Sale" ecosystem.
                                </p>
                                <blockquote className="p-8 bg-white border-l-4 border-brand-GOLD rounded-r-3xl italic text-brand-950 font-bold">
                                    "I moved from California to Boquete in 2024. The discounts were great, but the piece of mind knowing my income is tax-free in a US-dollar economy was the real win." — Panama Real Estate Sale Client
                                </blockquote>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative aspect-square">
                            <Image
                                src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=1000&q=80"
                                alt="Boquete Highlands landscape"
                                fill
                                className="object-cover rounded-2xl"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-white text-white p-6 rounded-[3.5rem] shadow-2xl">
                                <span className="text-brand-GOLD font-black text-4xl italic">$1,000</span>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Monthly Pension Required</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: HEALTHCARE DEEP DIVE */}
            <section className="py-14 bg-white text-brand-950 rounded-3xl mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-16 uppercase tracking-tighter italic leading-none border-b-8 border-brand-GOLD pb-10">The <span className="text-brand-GOLD">Healthcare</span> Shield</h2>
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-relaxed">
                            <p>For retirees, healthcare isn't just a service—it's the foundation of your relocation. Panama City is home to **Pacifica Salud**, the first hospital in Central America affiliated with **Johns Hopkins Medicine International**.</p>
                            <p>Most expats on the <strong>panama pensionado visa</strong> opt for private health insurance, which costs 50-70% less than in the US. We coordinate introductions to the country's top specialists who speak fluent English and provide immediate care without the 6-month wait times found in Canada or the UK.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { title: "Pacifica Salud", desc: "Top-tier technology, Johns Hopkins affiliate." },
                                { title: "Paitilla Hospital", desc: "Centrally located with excellent emergency care." },
                                { title: "San Fernando", desc: "Highly regarded for geriatric and specialized care." },
                                { title: "Coronado Clinic", desc: "Local emergency care for the beach community." }
                            ].map((h, i) => (
                                <div key={i} className="p-8 bg-white rounded-3xl border border-brand-100 shadow-sm">
                                    <h4 className="font-black text-brand-GOLD uppercase text-xs mb-2">{h.title}</h4>
                                    <p className="text-xs text-slate-500">{h.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: PET RELOCATION */}
            <section className="py-14 bg-brand-50">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row-reverse gap-20 items-center">
                    <div className="lg:w-1/2">
                        <Cat size={64} className="text-brand-GOLD mb-10" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none text-brand-950">The <span className="text-brand-GOLD italic">Furry</span> Panama Real Estate Sale <br /> Moving Guide</h2>
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-relaxed">
                            <p>Don't leave Rex behind. Panama is incredibly pet-friendly, especially in Boquete and Coronado. However, the <strong>pet relocation panama</strong> process requires precision.</p>
                            <ul className="space-y-4 text-sm font-bold">
                                <li className="flex gap-3"><Check className="text-brand-GOLD" size={18} /> USDA/Export Health Certificate</li>
                                <li className="flex gap-3"><Check className="text-brand-GOLD" size={18} /> Home Quarantine (40 days) for most US/EU pets</li>
                                <li className="flex gap-3"><Check className="text-brand-GOLD" size={18} /> International Health Certificate (signed by official vet)</li>
                            </ul>
                            <p>We coordinate with the 'MIDA' (Ministry of Agricultural Development) to ensure your pet walks off the plane and into your new luxury condo with zero stress.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80" alt="Expat with dog in Panama" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* NEW SECTION: SHIPPING & LOGISTICS */}
            <section className="py-14 bg-brand-50 text-brand-950 rounded-3xl mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-8 bg-white/5 rounded-3xl border border-brand-100">
                                <h4 className="text-brand-GOLD font-black uppercase text-xs mb-2">Container Shipping</h4>
                                <p className="text-xs text-slate-500">Door-to-door service from North America/Europe to Panama City or Boquete.</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-3xl border border-brand-100">
                                <h4 className="text-brand-GOLD font-black uppercase text-xs mb-2">Customs Clearing</h4>
                                <p className="text-xs text-slate-500">One-time tax exemption for $10k in household goods for Pensionados.</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-3xl border border-brand-100">
                                <h4 className="text-brand-GOLD font-black uppercase text-xs mb-2">Vehicle Import</h4>
                                <p className="text-xs text-slate-500">Import one vehicle tax-free every 2 years. We handle the exoneration paperwork.</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-3xl border border-brand-100">
                                <h4 className="text-brand-GOLD font-black uppercase text-xs mb-2">Inventory Lists</h4>
                                <p className="text-xs text-slate-500">Specific Spanish/English inventory lists required for Consulate approval.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Shipping <span className="text-brand-GOLD">Simplified.</span></h2>
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-relaxed">
                            <p>Most retirees wonder: *Should I bring my furniture?* In 2026, the answer depends on your ROI. Shipping a 40ft container costs $8k - $12k. If your furniture is high-end or sentimental, it's worth it. If not, Panama City has incredible luxury furniture stores.</p>
                            <p>Our <strong>panama relocation logistics</strong> team coordinates with certified movers to ensure your container clears customs in 5-7 days, not weeks. We leverage your Pensionado status to ensure the **tax exoneration** is applied correctly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points: Why Visas Get Rejected */}
            <section className="py-14 bg-brand-50 text-brand-950 rounded-3xl mx-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-5">
                    <ShieldCheck size={200} />
                </div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">Panama Visa <span className="text-brand-GOLD italic">Rejected?</span></h2>
                        <p className="text-slate-500 font-black uppercase tracking-widest text-xs">The 5 Fatal Mistakes Every DIY Expat Makes.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Aging Documents", desc: "Your FBI report and Pension letter have a strictly enforced 6-month 'freshness' window. If they expire before your appointment, your file is dead on arrival." },
                            { title: "Improper Apostilles", desc: "A notary signature isn't enough. Every government document must have a federal-level Hague Convention Apostille to be valid in Panama." },
                            { title: "The 'FIRE' Mistake", desc: "Retiring under 50 is fine, but if your pension comes from a private investment fund that isn't classified correctly, Immigration will deny it." },
                            { title: "Bureaucratic Lag", desc: "Waiting too long in your home country. By the time you get your papers, you often miss the window of validity. We coordinate timing to the day." },
                            { title: "DIY Bank Openings", desc: "Trying to open a bank account alone. 90% of expats fail here. Without professional pre-clearance, you cannot deposit your retirement funds." },
                            { title: "Translation Errors", desc: "Panama requires certified Panamanian translations. Using a translator from your home country is a guaranteed rejection at the desk." }
                        ].map((p, i) => (
                            <div key={i} className="p-10 bg-white/5 rounded-2xl border border-brand-100">
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic text-brand-GOLD italic">{p.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The 2026 Roadmap (Step-by-Step) */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">The 2026 <span className="text-brand-GOLD">Relocation Roadmap</span></h2>
                    <p className="text-slate-500 font-black uppercase tracking-widest text-xs">A 6-Month Timeline to your Elite Life.</p>
                </div>

                <div className="space-y-12">
                    {[
                        { step: "Phase 1: Validation (Month 1-2)", title: "Document Procurement", desc: "Gathering your lifetime pension letter (apostilled), criminal background check (from FBI or equivalent), and marriage certificates. Mistake alert: Document validity is usually only 6 months. We guide you on the exact order to prevent 'aging' issues." },
                        { step: "Phase 2: Presence (Month 3)", title: "The Panama Real Estate Sale Scouting Trip", desc: "Visit Panama. We handle your medical checkups, lawyer meetings, and bank account setups during your discovery tour. You must be physically present to file, and we make these 5-7 days the most productive of your life." },
                        { step: "Phase 3: Processing (Month 4-6)", title: "Temporary to Permanent", desc: "You receive your temporary card immediately. Permanent residency usually takes 90-120 days. No need to stay in the country for this part. We monitor the 'E-Cedula' process for you." },
                        { step: "Phase 4: The Perks (Month 7+)", title: "Activating Your Discounts", desc: "Once your permanent card is issued, we help you register for electricity, water, and airline discounts. This is where your ROI begins." }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-10 p-6 bg-white rounded-2xl border border-brand-100 items-center">
                            <div className="md:w-1/4">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-GOLD">{step.step}</span>
                            </div>
                            <div className="md:w-3/4">
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic text-brand-950">{step.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Regional Deep Dive: Boquete vs Coronado */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic">Regional <span className="text-brand-GOLD">Soul Searching</span></h2>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Where you land in Panama defines your retirement quality. We don't just show you houses; we show you the lifestyle vibe of the two biggest expat hubs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="p-12 bg-white rounded-2xl border border-brand-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all">
                            <Compass size={120} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">Boquete: The <span className="text-brand-GOLD">Mountain Haven</span></h3>
                        <div className="space-y-6 text-sm text-slate-500 font-medium leading-relaxed">
                            <p>
                                Nestled in the highlands of Chiriquí, <strong>Boquete panama</strong> is the undisputed capital of the <strong>pensionado visa</strong> community. With temperatures hovering between 65-75°F year-round, it's the "eternal spring."
                            </p>
                            <p>
                                <strong>Vibe:</strong> Coffee culture, hiking trails, arts communities, and a very active social calendar. If you love gardening and mountain views, this is your Panama Real Estate Sale base.
                            </p>
                            <ul className="space-y-3 font-black uppercase tracking-widest text-[10px]">
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Microclimates for every mood</li>
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Top-tier volcanic soil for gardening</li>
                                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-brand-GOLD" /> Large, established US/Canadian community</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-12 bg-white rounded-2xl text-brand-950 border border-brand-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all">
                            <MapIcon size={120} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic text-brand-GOLD">Coronado: The <span className="text-white">Pacific Beat</span></h3>
                        <div className="space-y-6 text-sm text-slate-500 font-medium leading-relaxed">
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
            <section className="py-14 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <div className="w-16 h-16 bg-brand-GOLD/10 rounded-2xl flex items-center justify-center mb-10">
                            <Landmark className="text-brand-GOLD" size={32} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Financial <span className="text-brand-GOLD">Panama Real Estate Sale</span> Strategy</h2>
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-[1.8]">
                            <p>
                                One of the most misunderstood parts of the <strong>pensionado visa panama requirements</strong> is the bank account opening. Panama takes FATCA and AML rules very seriously. You cannot just "walk in" and open an account.
                            </p>
                            <p>
                                We specialize in the <strong>pre-approval process</strong>. We work with the compliance departments of top Panamanian banks to ensure your funds are cleared and your account is ready before you ship your household goods.
                            </p>
                            <p className="p-8 bg-brand-50 text-brand-950 rounded-2xl text-sm">
                                <strong>Tax Truth:</strong> Panama follows a territorial tax system. If your pension is from the US/UK/Canada and you live in Panama, Panama will NOT tax that income. Period.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                        <div className="p-8 bg-white rounded-3xl border border-brand-100 flex flex-col justify-between">
                            <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD">Banking</h4>
                            <p className="text-xs text-slate-500 font-bold mt-4 leading-relaxed">Full compliance support and intro to private banking managers.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-brand-100 flex flex-col justify-between">
                            <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD">Taxes</h4>
                            <p className="text-xs text-slate-500 font-bold mt-4 leading-relaxed">Tax residency certificates to help you exit your home tax system legally.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-brand-100 flex flex-col justify-between">
                            <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD">Wills</h4>
                            <p className="text-xs text-slate-500 font-bold mt-4 leading-relaxed">Creation of Panama-specific wills to protect your local assets.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-brand-100 flex flex-col justify-between">
                            <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD">Estate</h4>
                            <p className="text-xs text-slate-500 font-bold mt-4 leading-relaxed">Advice on using Panama Foundations for asset protection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive FAQ Section */}
            <section className="py-14 max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">Retirement <br /><span className="text-brand-GOLD underline italic">Exposed</span> FAQ</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Essential Knowledge for 2026 Expat Moves.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white rounded-2xl border border-brand-100 overflow-hidden transition-all hover:border-brand-GOLD/50">
                            <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                <span className="text-xl font-black uppercase tracking-tighter italic pr-8">{faq.question}</span>
                                <span className="text-brand-GOLD group-open:rotate-180 transition-transform duration-300">
                                    <HelpCircle size={24} />
                                </span>
                            </summary>
                            <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed border-t border-brand-100 pt-6" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </details>
                    ))}
                </div>
                <FAQSchema questions={faqs} />
            </section>

            {/* Final CTA */}
            <section className="py-14 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck size={200} />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-[0.85]">Plan Your <br /> Upgrade</h2>
                    <p className="text-base md:text-lg font-bold mb-16 opacity-80 max-w-2xl mx-auto leading-relaxed">
                        Don't leave your <strong>panama retirement</strong> to chance. Relocate with the Panama Real Estate Sale team and secure your <strong>panama pensionado visa</strong> with zero stress.
                    </p>
                    <Link href={`/${lang}/relocation/tours`} className="px-8 py-4 bg-white text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-50 transition-all shadow-2xl inline-block">
                        Request Retirement Itinerary
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationPensionadoContent;
