'use client';

import React from 'react';
import { Scale, Check, ArrowRight, ShieldCheck, Star, Users, Briefcase, Landmark, AlertCircle, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';

const RelocationLawyersDirectoryContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Legal", item: "https://expatrockstars.com/relocation/legal" },
        { name: "Lawyers Directory", item: "https://expatrockstars.com/relocation/legal/lawyers-directory" }
    ];

    const lawyers = [
        {
            name: "Dr. Roberto Valdes",
            firm: "Valdes & Associates",
            specialty: "High-Net-Worth Residency",
            experience: "15+ Years",
            rating: 4.9,
            reviews: 124,
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
            description: "Specializes in the Golden Visa and complex Friendly Nations applications for corporate executives."
        },
        {
            name: "Lic. Maria Sanchez",
            firm: "Panama Legal Group",
            specialty: "Pensionado & Family Visas",
            experience: "12 Years",
            rating: 4.8,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
            description: "Renowned for her white-glove service for North American retirees and family relocation logistics."
        },
        {
            name: "Dr. Carlos Mendez",
            firm: "Mendez Immigration Law",
            specialty: "Digital Nomad & Work Permits",
            experience: "10 Years",
            rating: 4.7,
            reviews: 56,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
            description: "The go-to expert for remote workers and tech entrepreneurs seeking work permits and tax residency."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: "https://expatrockstars.com/" }, ...breadcrumbItems]} />
            <ServiceSchema
                name="Panama Immigration Lawyer Directory"
                description="The most trusted directory of verified Panama immigration lawyers. Compare fees, read reviews, and find the best attorney for your residency visa."
                serviceType="Legal Directory"
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
                        Vetted. Verified. Elite.
                    </span>
                    <h1 className="text-5xl md:text-9xl font-heading font-black mb-10 uppercase tracking-tighter leading-[0.85]">
                        Panama <span className="text-brand-GOLD italic">Immigration</span> <br /> Lawyer Directory
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                        Don't leave your residency to chance. The <strong>panama immigration lawyer</strong> role is the most critical part of your move. We've vetted the top 1% of attorneys to ensure your 2026 application is flawless.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="#directory" className="px-12 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all shadow-2xl">
                            Browse Top Attorneys
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why You Need a Lawyer Section */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">Legal Reality</span> in Panama</h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                By Panamanian law, <strong>every residency application must be filed by a licensed attorney</strong>. You cannot "self-file" for the Pensionado, Friendly Nations, or Investor visas. This makes finding a reliable <strong>panama visa attorney</strong> your first high-stakes decision.
                            </p>
                            <p>
                                A bad lawyer can cost you months of delays, thousands in lost fees, and potentially a permanent black mark on your immigration record. Our directory exists to eliminate that risk.
                            </p>
                            <div className="p-8 bg-neutral-50 rounded-[3rem] border border-neutral-100">
                                <h4 className="text-brand-GOLD text-xs font-black uppercase tracking-widest mb-4">Rockstar Verification Stats</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-sm text-neutral-800 font-bold">
                                        <Check className="text-brand-GOLD" size={18} /> 100% Licensed & In Good Standing (National Bar Association)
                                    </li>
                                    <li className="flex gap-3 text-sm text-neutral-800 font-bold">
                                        <Check className="text-brand-GOLD" size={18} /> Minimum 10 Years Specialized Immigration Experience
                                    </li>
                                    <li className="flex gap-3 text-sm text-neutral-800 font-bold">
                                        <Check className="text-brand-GOLD" size={18} /> verified English/Spanish Bilingual Fluency
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&q=80"
                            alt="Legal scales in a modern Panama law office"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Fee Comparison & Transparency */}
            <section className="py-32 bg-neutral-950 text-white rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter">Cost <span className="text-brand-GOLD italic">Transparency</span></h2>
                        <p className="text-gray-500 text-lg uppercase tracking-widest font-black">Understanding Panama Immigration Fees 2026.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Legal Fees", price: "$1,500 - $3,500", desc: "This is what you pay the attorney for their time, counsel, and filing. Rockstar-vetted lawyers fall within this professional range." },
                            { title: "Government Costs", price: "$1,050 - $1,300", desc: "Fixed fees paid to the Panamanian government for processing, health certificates, and the residency card itself." },
                            { title: "Repatriation Bond", price: "$800 - $1,000", desc: "A refundable bond (or insurance equivalent) required for most visas to cover potential deportation costs (Rarely used)." }
                        ].map((c, i) => (
                            <div key={i} className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] hover:border-brand-GOLD/30 transition-all group">
                                <span className="text-brand-GOLD text-3xl font-black italic mb-4 block">{c.price}</span>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic text-white">{c.title}</h4>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-white/5 rounded-[4rem] border border-white/10 text-center">
                        <p className="text-gray-400 font-medium max-w-3xl mx-auto">
                            <strong>Warning:</strong> Be wary of "budget" lawyers charging under $1,000. These often lead to hidden "expense" charges later or, worse, incomplete filings that result in permanent residency denial.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Directory Section */}
            <section id="directory" className="py-32 max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter italic">Featured <span className="text-brand-GOLD">Attorneys</span></h2>
                        <p className="text-neutral-500 font-black uppercase tracking-widest text-xs mt-4">Top 1% vetted for 2026 relocation.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                            <input type="text" placeholder="Search by name..." className="pl-14 pr-10 py-5 bg-neutral-50 border border-neutral-100 rounded-2xl text-xs font-bold w-64 focus:border-brand-GOLD outline-none transition-all" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lawyers.map((lawyer, i) => (
                        <div key={i} className="group bg-white rounded-[4rem] border border-neutral-100 p-10 hover:border-brand-GOLD transition-all shadow-sm">
                            <div className="relative h-64 w-full rounded-[3rem] overflow-hidden mb-8">
                                <Image src={lawyer.image} alt={lawyer.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute top-6 right-6 px-4 py-2 bg-brand-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                    {lawyer.experience}
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter italic text-brand-950 mb-2">{lawyer.name}</h3>
                                    <p className="text-xs font-black uppercase tracking-widest text-brand-GOLD">{lawyer.firm}</p>
                                </div>
                                <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                                    <Star className="text-yellow-500 fill-yellow-500" size={12} />
                                    <span className="text-[10px] font-black">{lawyer.rating}</span>
                                </div>
                            </div>
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3">
                                    <Briefcase size={16} className="text-neutral-400" />
                                    <span className="text-xs font-bold text-neutral-600">{lawyer.specialty}</span>
                                </div>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed italic border-l-2 border-brand-GOLD/30 pl-4">
                                    "{lawyer.description}"
                                </p>
                            </div>
                            <button className="w-full py-5 bg-brand-GOLD/10 text-brand-GOLD text-[10px] font-black uppercase tracking-widest rounded-2xl group-hover:bg-brand-GOLD group-hover:text-brand-950 transition-all">
                                Request Introduction
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Vetting Process: The Rockstar Standard */}
            <section className="py-32 bg-neutral-50 rounded-[5rem] mx-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-video rounded-[4rem] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80"
                            alt="Lawyer signing documents in Panama"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">Rockstar</span> Standard</h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                We don't just "list" lawyers. We **engineer** the relationship. Every attorney in our <strong>panama immigration lawyer directory</strong> undergoes a rigorous quarterly audit.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-white rounded-3xl shadow-sm border border-neutral-100">
                                    <Star className="text-brand-GOLD mb-4" size={24} />
                                    <h4 className="text-xs font-black uppercase tracking-widest mb-2">Review Guard</h4>
                                    <p className="text-[10px] text-neutral-500 leading-relaxed font-bold">We manually verify every client review to ensure authenticity.</p>
                                </div>
                                <div className="p-8 bg-white rounded-3xl shadow-sm border border-neutral-100">
                                    <ShieldCheck className="text-brand-GOLD mb-4" size={24} />
                                    <h4 className="text-xs font-black uppercase tracking-widest mb-2">Ethics Check</h4>
                                    <p className="text-[10px] text-neutral-500 leading-relaxed font-bold">Search of Bar Association records for any disciplinary actions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed FAQ for Legal Concerns */}
            <section className="py-32 max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none text-brand-950 underline decoration-brand-GOLD decoration-8 underline-offset-8">Legal <span className="text-brand-GOLD italic">Questions</span></h2>
                    <p className="text-neutral-500 font-black uppercase tracking-widest text-xs mt-8">Navigating the Panama Legal System 2026.</p>
                </div>

                <div className="space-y-8">
                    {[
                        { q: "Can I do my residency without a lawyer?", a: "No. Panamanian law specifically requires all immigration applications to be signed and submitted by a licensed attorney. You cannot walk into the immigration office alone." },
                        { q: "How much should I pay up front?", a: "Standard practice is 50% retainer to start the procurement and 50% upon successful filing. Avoid anyone asking for 100% upfront for 'government favors'." },
                        { q: "How do I know if my lawyer is really licensed?", a: "Every lawyer must have an 'Idoneidad' number. You can search this on the Panamanian National Bar Association (Colegio Nacional de Abogados) website. All our listed lawyers are pre-verified." },
                        { q: "What is an 'Escrow' in Panama residency?", a: "For real estate investments ($200k+), an escrow agent is often used to ensure funds are held safely until the transaction is legally recorded. We can recommend verified third-party escrow services." },
                        { q: "Will my lawyer handle my bank account too?", a: "Some do, but many focus only on the visa. The best immigration attorneys have dedicated 'compliance' teams to help with the bank opening logistics, which is arguably harder than the visa itself." },
                        { q: "What if my lawyer stops responding?", a: "This is a common 'pain point' in Latin America. Our directory includes a **Success Manager** who acts as an intermediary if communication breaks down with any listed attorney." },
                        { q: "Do lawyers charge for spouses/dependents?", a: "Yes, but usually at a discounted rate. Expect to pay $500 - $1,000 extra in legal fees per dependent, plus the additional government filing costs." },
                        { q: "Can a lawyer help me find a job for the 'Professional' path?", a: "No. Lawyers handle the legal filing, not headhunting. You should have your job offer finalized before hiring the attorney to file the visa." },
                        { q: "What are 'Protected Professions' in 2026?", a: "Panama protects dozens of professions (Nursing, Engineering, Law, etc.) for citizens only. A good lawyer will review your degree and help you structure your role as 'Consultant' to ensure compliance." },
                        { q: "Do I need a Power of Attorney?", a: "Yes. You will sign a limited Power of Attorney (Especial) so the lawyer can represent you before the National Immigration Service." }
                    ].map((faq, i) => (
                        <div key={i} className="p-10 border-b border-neutral-100 group hover:bg-neutral-50 transition-all rounded-[3rem]">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic group-hover:text-brand-GOLD transition-colors">{faq.q}</h4>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
                <FAQSchema questions={[
                    { question: "Can I do my residency without a lawyer?", answer: "No. Panamanian law specifically requires all immigration applications to be signed and submitted by a licensed attorney." },
                    { question: "How much should I pay up front?", answer: "Standard practice is 50% retainer to start and 50% upon successful filing. Avoid anyone asking for 100% upfront." },
                    { question: "How do I know if my lawyer is really licensed?", answer: "Every lawyer must have an 'Idoneidad' number. You can search this on the Panamanian National Bar Association website." }
                ]} />
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem] overflow-hidden relative">
                <div className="absolute top-0 left-0 p-20 opacity-10">
                    <Scale size={200} />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-5xl md:text-9xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-[0.85]">Secure Your <br /> Counsel</h2>
                    <p className="text-xl md:text-2xl font-bold mb-16 opacity-80 max-w-2xl mx-auto leading-relaxed">
                        Ready to speak with the best <strong>panama immigration lawyer</strong> for your specific needs? Let us make the introduction and guarantee your success.
                    </p>
                    <Link href="/contacto" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-black transition-all shadow-2xl inline-block">
                        Introduce Me to an Attorney
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationLawyersDirectoryContent;
