'use client';

import React from 'react';
import { Scale, Check, ArrowRight, ShieldCheck, Star, Users, Briefcase, Landmark, AlertCircle, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const RelocationLawyersDirectoryContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Legal", item: `https://panamarealestatesale.com/${lang}/relocation/legal` },
        { name: "Lawyers Directory", item: `https://panamarealestatesale.com/${lang}/relocation/legal/lawyers-directory` }
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
        <div className="pt-24 min-h-screen bg-brand-950 text-white font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}/` }, ...breadcrumbItems]} />
            <ServiceSchema
                name="Panama Immigration Lawyer Directory"
                description="The most trusted directory of verified Panama immigration lawyers. Compare fees, read reviews, and find the best attorney for your residency visa."
                serviceType="Legal Directory"
            />

            <div className="max-w-7xl mx-auto px-4 mt-12 relative z-50">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Header / Hero: 3.0 Cinematic */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5 bg-mesh-glow">
                <div className="absolute inset-0 z-0 scale-105 overflow-hidden">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        transition={{ duration: 3, ease: 'easeOut' }}
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
                        alt="Legal scales in a modern Panama law office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <HeroTilt intensity={2}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-block px-6 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full backdrop-blur-md mb-12 shadow-[0_0_20px_theme(colors.brand.GOLD/0.15)]">
                                Vetted. Verified. <span className="text-white">2026.</span>
                            </span>
                            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black mb-12 leading-[0.8] tracking-tighter uppercase italic text-white">
                                PANAMA <br /> <span className="text-brand-GOLD">LEGAL</span> <br /> DIRECTORY
                            </h1>
                            <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed font-black mb-16 italic border-l-4 border-brand-GOLD/20 pl-12 opacity-90 font-serif-luxury tracking-normal">
                                The top 1% of attorneys for the 2026 move. <span className="text-white">We've vetted every specialist</span> to ensure your application is flawless.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <Magnetic strength={0.4}>
                                    <Link href="#directory" className="btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] min-w-[240px] text-center">
                                        BROWSE ATTORNEYS
                                    </Link>
                                </Magnetic>
                            </div>
                        </motion.div>
                    </HeroTilt>
                </div>
            </section>

            {/* Why You Need a Lawyer Section */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">Legal Reality</span> in Panama</h2>
                        <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                            <p>
                                By Panamanian law, <strong>every residency application must be filed by a licensed attorney</strong>. You cannot "self-file" for the Pensionado, Friendly Nations, or Investor visas. This makes finding a reliable <strong>panama visa attorney</strong> your first high-stakes decision.
                            </p>
                            <p>
                                A bad lawyer can cost you months of delays, thousands in lost fees, and potentially a permanent black mark on your immigration record. Our directory exists to eliminate that risk.
                            </p>
                            <div className="p-8 bg-brand-950 rounded-2xl border border-white/10">
                                <h4 className="text-brand-GOLD text-xs font-black uppercase tracking-widest mb-4">Panama Real Estate Sale Verification Stats</h4>
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
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
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
            <section className="py-14 bg-black text-white rounded-3xl mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter">Cost <span className="text-brand-GOLD italic">Transparency</span></h2>
                        <p className="text-gray-500 text-lg uppercase tracking-widest font-black">Understanding Panama Immigration Fees 2026.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Legal Fees", price: "$1,500 - $3,500", desc: "This is what you pay the attorney for their time, counsel, and filing. Elite-vetted lawyers fall within this professional range." },
                            { title: "Government Costs", price: "$1,050 - $1,300", desc: "Fixed fees paid to the Panamanian government for processing, health certificates, and the residency card itself." },
                            { title: "Repatriation Bond", price: "$800 - $1,000", desc: "A refundable bond (or insurance equivalent) required for most visas to cover potential deportation costs (Rarely used)." }
                        ].map((c, i) => (
                            <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-[3.5rem] hover:border-brand-GOLD/30 transition-all group">
                                <span className="text-brand-GOLD text-3xl font-black italic mb-4 block">{c.price}</span>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic text-white">{c.title}</h4>
                                <p className="text-slate-400 font-medium text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                        <p className="text-slate-400 font-medium max-w-3xl mx-auto">
                            <strong>Warning:</strong> Be wary of "budget" lawyers charging under $1,000. These often lead to hidden "expense" charges later or, worse, incomplete filings that result in permanent residency denial.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Directory Section */}
            <section id="directory" className="py-14 max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter italic">Featured <span className="text-brand-GOLD">Attorneys</span></h2>
                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs mt-4">Top 1% vetted for 2026 relocation.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input type="text" placeholder="Search by name..." className="pl-14 pr-10 py-5 bg-brand-950 border border-white/10 rounded-2xl text-xs font-bold w-64 focus:border-brand-GOLD outline-none transition-all" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {lawyers.map((lawyer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group glass-card rounded-2xl border-white/10/10 p-6 hover:border-brand-GOLD transition-all shadow-xl bg-white/5 backdrop-blur-xl"
                        >
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
                                <Image src={lawyer.image} alt={lawyer.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute top-6 right-6 px-4 py-2 bg-brand-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                                    {lawyer.experience}
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter italic text-white mb-2 group-hover:text-brand-GOLD transition-colors">{lawyer.name}</h3>
                                    <p className="text-xs font-black uppercase tracking-widest text-brand-GOLD/70">{lawyer.firm}</p>
                                </div>
                                <div className="flex items-center gap-1 bg-brand-GOLD/10 border border-brand-GOLD/20 px-3 py-1 rounded-full">
                                    <Star className="text-brand-GOLD fill-brand-GOLD" size={12} />
                                    <span className="text-[10px] font-black text-brand-GOLD">{lawyer.rating}</span>
                                </div>
                            </div>
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3">
                                    <Briefcase size={16} className="text-slate-500" />
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">{lawyer.specialty}</span>
                                </div>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed italic border-l-2 border-brand-GOLD/30 pl-4 opacity-80 font-serif-luxury tracking-normal">
                                    "{lawyer.description}"
                                </p>
                            </div>
                            <Magnetic strength={0.3}>
                                <button className="btn-3d btn-3d-gold w-full py-5 rounded-xl font-black uppercase tracking-widest text-[10px]">
                                    REQUEST INTRODUCTION
                                </button>
                            </Magnetic>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Vetting Process: The Elite Standard */}
            <section className="py-14 bg-brand-950 rounded-3xl mx-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80"
                            alt="Lawyer signing documents in Panama"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">Panama Real Estate Sale</span> Standard</h2>
                        <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                            <p>
                                We don't just "list" lawyers. We **engineer** the relationship. Every attorney in our <strong>panama immigration lawyer directory</strong> undergoes a rigorous quarterly audit.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-white rounded-3xl shadow-sm border border-white/10">
                                    <Star className="text-brand-GOLD mb-4" size={24} />
                                    <h4 className="text-xs font-black uppercase tracking-widest mb-2">Review Guard</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed font-bold">We manually verify every client review to ensure authenticity.</p>
                                </div>
                                <div className="p-8 bg-white rounded-3xl shadow-sm border border-white/10">
                                    <ShieldCheck className="text-brand-GOLD mb-4" size={24} />
                                    <h4 className="text-xs font-black uppercase tracking-widest mb-2">Ethics Check</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed font-bold">Search of Bar Association records for any disciplinary actions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed FAQ for Legal Concerns */}
            <section className="py-14 max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none text-brand-950 underline decoration-brand-GOLD decoration-8 underline-offset-8">Legal <span className="text-brand-GOLD italic">Questions</span></h2>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-xs mt-8">Navigating the Panama Legal System 2026.</p>
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
                        <div key={i} className="p-10 border-b border-white/10 group hover:bg-neutral-50 transition-all rounded-2xl">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic group-hover:text-brand-GOLD transition-colors">{faq.q}</h4>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
                <FAQSchema questions={[
                    { question: "Can I do my residency without a lawyer?", answer: "No. Panamanian law specifically requires all immigration applications to be signed and submitted by a licensed attorney." },
                    { question: "How much should I pay up front?", answer: "Standard practice is 50% retainer to start and 50% upon successful filing. Avoid anyone asking for 100% upfront." },
                    { question: "How do I know if my lawyer is really licensed?", answer: "Every lawyer must have an 'Idoneidad' number. You can search this on the Panamanian National Bar Association website." }
                ]} />
            </section>

            {/* Final CTA: 3.0 Cinematic */}
            <section className="py-16 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem] overflow-hidden relative">
                <div className="absolute top-0 left-0 p-20 opacity-10">
                    <Scale size={200} />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h2 className="text-6xl md:text-[10rem] font-heading font-black mb-12 uppercase tracking-tighter italic leading-[0.75]">Secure Your <br /> <span className="underline decoration-brand-950/20 underline-offset-8">Counsel.</span></h2>
                        <p className="text-base md:text-lg font-black mb-16 opacity-90 max-w-2xl mx-auto leading-relaxed font-serif-luxury tracking-normal">
                            Ready to speak with the best immigration specialist for your specific needs? <span className="text-brand-950">Let us make the introduction and guarantee your success.</span>
                        </p>
                        <Magnetic strength={0.4}>
                            <Link href={`/${lang}/contact`} className="btn-3d btn-3d-navy px-20 py-10 rounded-3xl font-black uppercase tracking-[0.4em] text-sm inline-flex items-center justify-center min-w-[320px] shadow-2xl">
                                INTRODUCE ME TO AN ATTORNEY
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default RelocationLawyersDirectoryContent;
