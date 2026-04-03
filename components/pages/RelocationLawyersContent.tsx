'use client';

import React from 'react';
import { Gavel, Check, ArrowRight, ShieldCheck, Scale, FileText, UserCheck, MessageSquare, Zap, MapPin, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';

const RelocationLawyersContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Legal Hub", item: `https://panamarealestatesale.com/${lang}/relocation/legal` },
        { name: "Immigration Lawyers", item: `https://panamarealestatesale.com/${lang}/relocation/legal/lawyers` }
    ];

    const lawyerSpecialties = [
        {
            title: "Residency Experts",
            desc: "Specializing in the <strong>Friendly Nations Visa</strong>, <strong>Pensionado Visa</strong>, and <strong>Qualified Investor</strong> paths.",
            icon: ShieldCheck
        },
        {
            title: "Corporate Law",
            desc: "Setting up Panamanian corporations (S.A.) and Private Interest Foundations for asset protection.",
            icon: Scale
        },
        {
            title: "Labor Specialists",
            desc: "Navigating MITRADEL for <strong>panama work permits</strong> for expats and multinational employees.",
            icon: Gavel
        }
    ];

    const faqs = [
        {
            q: "Can I apply for Panama residency without a lawyer?",
            a: "No. By law, all residency and work permit applications in Panama must be filed through a licensed Panamanian attorney. Attempting to do so alone is legally impossible."
        },
        {
            q: "How do I verify if a panama immigration lawyer is licensed?",
            a: "All legitimate lawyers must be registered with the 'Sala de lo Contencioso-Administrativo' and have a valid 'Idoneidad' (license number). We only partner with fully vetted, high-ranking firms."
        },
        {
            q: "What are the typical fees for an immigration lawyer in Panama?",
            a: "Fees vary by visa type. A <strong>Pensionado Visa</strong> typically costs $800-$1,200 in legal fees, while a <strong>Friendly Nations Visa</strong> ranges from $1,500-$2,500 plus government expenses."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />
            <FAQSchema questions={faqs.map(f => ({ question: f.q, answer: f.a }))} />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="py-24 bg-white text-white relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="https://images.unsplash.com/photo-1505664194762-85b1758d51fa?w=1600&q=80"
                        alt="Legal and justice concept for Panama immigration lawyers"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        Elite Legal Network
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                        Panama <span className="text-brand-GOLD italic">Immigration</span> <br /> Lawyers Directory
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium">
                        Don't leave your future to chance. We connect you with the top 1% of <strong>panama immigration lawyers</strong> who specialize in residency, corporate setup, and asset protection.
                    </p>
                </div>
            </section>

            {/* Why You Need a Pro */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD italic underline">Law</span> Matters</h2>
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-[1.8]">
                            <p>
                                Panama's immigration system is paper-heavy and bureaucratic. A single mistake in your <strong>panama visa requirements</strong> documentation can result in months of delays or outright rejection.
                            </p>
                            <p>
                                Our partner firms aren't just filing papers; they are strategists. They ensure your <strong>international living in panama</strong> starts with a solid legal foundation, from your initial temporary card to your final E-Cedula.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-8">
                                <div className="p-8 bg-white rounded-2xl text-brand-950 border border-brand-100">
                                    <div className="text-3xl font-black italic text-brand-GOLD mb-2">100%</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Filing Success Rate</div>
                                </div>
                                <div className="p-8 bg-white rounded-2xl border border-brand-100">
                                    <div className="text-3xl font-black italic text-brand-950 mb-2">24/7</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Legal Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square bg-white/5 rounded-2xl overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&q=80"
                            alt="Professional Panamanian lawyer reviewing immigration documents"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-GOLD/10 group-hover:bg-transparent transition-all"></div>
                    </div>
                </div>
            </section>

            {/* Specialty Grid */}
            <section className="py-14 bg-white rounded-3xl mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic">Legal <span className="text-brand-GOLD">Specialties</span></h2>
                        <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Focused expertise for every stage of your move.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {lawyerSpecialties.map((spec, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-brand-100 shadow-sm hover:border-brand-GOLD transition-all group">
                                <spec.icon className="text-brand-GOLD mb-8 group-hover:scale-110 transition-transform" size={48} />
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 italic">{spec.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: spec.desc }}></p>
                                <Link href={`/${lang}/contacto`} className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">
                                    Consult Specialist <ArrowRight size={14} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verification Checklist */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="bg-white text-white p-20 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">How We VET Our <br /><span className="text-brand-GOLD">Lawyers</span></h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                                We don't just recommend anyone. Our legal panel is curated based on rigorous standards that ensure you get the Panama Real Estate Sale treatment.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "English, Spanish, and French Speaking Teams",
                                    "Transparent, Fixed-Fee Pricing (No Hidden Fees)",
                                    "Physical Office in Panama City's Financial District",
                                    "In-house processing teams (no subcontracting)",
                                    "Direct access to the primary attorney"
                                ].map((check, i) => (
                                    <li key={i} className="flex gap-4 items-center font-black uppercase tracking-widest text-[10px]">
                                        <div className="w-5 h-5 bg-brand-GOLD/20 rounded-full flex items-center justify-center">
                                            <Check size={10} className="text-brand-GOLD" />
                                        </div>
                                        {check}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="p-8 bg-white/5 border border-brand-100 rounded-3xl text-center">
                                <Award className="text-brand-GOLD mx-auto mb-4" size={32} />
                                <div className="text-xs font-black uppercase tracking-widest">Top Rated 2024</div>
                            </div>
                            <div className="p-8 bg-white/5 border border-brand-100 rounded-3xl text-center">
                                <UserCheck className="text-brand-GOLD mx-auto mb-4" size={32} />
                                <div className="text-xs font-black uppercase tracking-widest">Vetted In-Person</div>
                            </div>
                            <div className="p-8 bg-white/5 border border-brand-100 rounded-3xl text-center">
                                <MessageSquare className="text-brand-GOLD mx-auto mb-4" size={32} />
                                <div className="text-xs font-black uppercase tracking-widest">Fast Response</div>
                            </div>
                            <div className="p-8 bg-brand-GOLD text-brand-950 rounded-3xl text-center">
                                <Zap className="mx-auto mb-4" size={32} />
                                <div className="text-xs font-black uppercase tracking-widest">VIP Access</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keyword Deep Dive (SEO) */}
            <section className="py-14 max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 italic">The Role of Your <span className="text-brand-GOLD">Panama Immigration Lawyer</span></h2>
                <div className="space-y-8 text-slate-500 font-medium leading-relaxed">
                    <p>
                        A <strong>panama immigration lawyer</strong> is more than a legal representative; they are your liaison with the National Immigration Service of Panama. In Panama, laws change frequently, and having a firm that stays ahead of the Curve is essential for a smooth relocation.
                    </p>
                    <p>
                        From coordinating your first visit to handling your <strong>certified health documents</strong> and filing your final <strong>residency application</strong>, your lawyer is the most important contact you will make. We ensure that contact is the right one.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-14 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Secure Your <br /> Legal Team</h2>
                    <p className="text-xl font-bold opacity-80 mb-16 max-w-2xl mx-auto">
                        Ready to speak with a top <strong>panama immigration lawyer</strong>? Book a consultation today and get a clear legal roadmap for your move.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href={`/${lang}/contacto`} className="px-8 py-4 bg-white text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-50 transition-all shadow-2xl">
                            Meet My Attorney
                        </Link>
                        <Link href={`/${lang}/relocation/legal`} className="px-8 py-4 bg-white border-2 border-brand-950 text-brand-950 font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-TEAL hover:text-white transition-all">
                            View Legal Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationLawyersContent;
