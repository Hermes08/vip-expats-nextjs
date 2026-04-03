import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Globe, Building2, Landmark, ShieldCheck, Waves, Sun, Coffee, Heart, Plane } from 'lucide-react';
import BlogPostSchema from '@/components/seo/BlogPostSchema';

export async function generateMetadata(
    { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
    const { lang } = await params;
    const isEs = lang === 'es';

    return {
        title: isEs 
            ? 'Bienes Raíces en Panamá 2026: Guía de Inversión, Estilo de Vida y Jubilación' 
            : 'Panama Real Estate 2026: Investment, Lifestyle & Retirement Guide',
        description: isEs
            ? 'La guía definitiva 2026 de bienes raíces en Panamá. Explore oportunidades de inversión de alto rendimiento y el estilo de vida de lujo.'
            : 'The definitive 2026 guide to Panama real estate. Explore high-yield investment opportunities, the luxury expat lifestyle, and world-class retirement benefits.',
        keywords: 'Panama real estate, investment opportunities, expat lifestyle, beachfront properties, retirement in Panama, invest in panama, panama retirement, panama expat',
    };
}

const guideSections = [
    {
        title: 'High-Yield Investment',
        desc: 'Panama remains the strongest ROI market in LATAM with a fully dollarized economy and 6-9% net yields.',
        icon: TrendingUp,
    },
    {
        title: 'Luxury Expat Lifestyle',
        desc: 'From world-class healthcare to elite private schools, Panama offers a first-world lifestyle at a lower cost.',
        icon: Heart,
    },
    {
        title: 'Fast-Track Residency',
        desc: 'The Qualified Investor Visa offers permanent residency in as little as 30 days with a real estate investment.',
        icon: ShieldCheck,
    },
    {
        title: 'Stable Infrastructure',
        desc: 'Continuing infrastructure growth, including Metro Line 3 and the 4th Bridge, is driving property values.',
        icon: Building2,
    },
];

export default async function PanamaRealEstateGuide2026({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang || 'en';

    return (
        <div className="pt-24 min-h-screen bg-white text-slate-900">
            <BlogPostSchema
                title="Panama Real Estate: Investment Opportunities, Expat Lifestyle, and Retirement in 2026"
                description="The comprehensive 2026 guide for global investors and expats looking to capitalize on Panama's stable property market and luxury lifestyle."
                publishDate="2026-03-15"
                authorName="Panama Real Estate Sale"
                image="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80"
                lang={lang as 'en' | 'es'}
            />

            {/* Hero Section */}
            <section className="bg-brand-900 py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <img
                        src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80"
                        alt="Panama City Coastline"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        EXPAT GUIDE · 2026
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Panama Real Estate: The Ultimate 2026 Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        In an era of global volatility, Panama stands as a fortress of stability. Discover why 2026 is the year to secure your future in the tropics.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="prose prose-lg text-brand-600 max-w-none space-y-12">
                    
                    <p className="lead text-2xl font-semibold text-brand-900 border-l-4 border-brand-GOLD pl-6">
                        As we move through 2026, the Panama real estate market has reached a new level of maturity. It is no longer just a "retirement destination," but a global hub for <strong>wealth preservation, remote work excellence, and luxury living</strong>.
                    </p>

                    <h2 className="text-brand-900 text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        The Investment Landscape: Why Panama Wins in 2026
                    </h2>
                    <p>
                        The core reason investors choose Panama remains its <strong>absolute stability</strong>. As a dollarized economy with a constitutional protection for foreign property ownership, Panama provides a "safe haven" environment that is rare in Latin America.
                    </p>
                    <p>
                        In 2026, we are seeing a shift toward <strong>branded residences</strong> and <strong>managed investment properties</strong>. Investors are no longer just looking for a condo; they are looking for a cash-flowing asset backed by hotel-grade management. This has led to consistent rental yields of 6-9% in premium zones like Costa del Este and Playa Bonita.
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8 not-prose my-16">
                        {guideSections.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon size={24} className="text-brand-GOLD" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-900 mb-3 uppercase italic tracking-tight">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <h2 className="text-brand-900 text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        The Expat Lifestyle: First-World Comforts in the Tropics
                    </h2>
                    <p>
                        For the modern expat, the transition to Panama is seamless. The infrastructure in Panama City rivals any major North American hub, with world-class hospitals (affiliated with Johns Hopkins) and high-speed fiber optic internet that makes it a <strong>digital nomad paradise</strong>.
                    </p>
                    <p>
                        The "VIP Expat" lifestyle is characterized by <strong>high-end amenities</strong>. Gated communities like Buenaventura and islands like Ocean Reef offer a level of security and luxury that is truly global. Whether your passion is sport fishing, golfing, or fine dining, Panama delivers at a fraction of the cost found in Miami or the Caribbean.
                    </p>

                    <h2 className="text-brand-900 text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Retirement in Panama: The Gold Standard
                    </h2>
                    <p>
                        Panama&apos;s <strong>Pensionado Program</strong> remains the most attractive retirement incentive in the world. Discounts on everything from utility bills to movie tickets and medical procedures make living here on a fixed income not just comfortable, but luxurious.
                    </p>
                    <p>
                        Furthermore, the <strong>Qualified Investor Visa</strong> has revolutionized how retirees and investors gain residency. By investing $300,000 in real estate, you can secure permanent residency for your family in record time, providing a solid "Plan B" or a permanent change of scenery.
                    </p>

                    <h2 className="text-brand-900 text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Beachfront vs. Urban: Finding Your Ecosystem
                    </h2>
                    <p>
                        In 2026, the choice between the city and the coast is no longer about sacrifice.
                    </p>
                    <ul>
                        <li><strong>The Urban Professional:</strong> Costa del Este and Punta Pacifica offer a sophisticated, walkable lifestyle with luxury shopping and corporate proximity.</li>
                        <li><strong>The Beachfront Visionary:</strong> Projects like Margaritaville in Playa Caracol and the Westin Residences at Playa Bonita provide the ultimate beach escape while remaining within reaching distance of the capital.</li>
                        <li><strong>The Mountain Retreat:</strong> Boquete and Pino Alto offer the "Eternal Spring" climate for those who prefer lush greenery and cooler temperatures.</li>
                    </ul>

                    {/* Image Break */}
                    <div className="not-prose my-16 rounded-3xl overflow-hidden aspect-video relative group">
                        <img
                            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80"
                            alt="Luxury Beachfront Lifestyle"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white font-medium text-lg italic">The Pacific coast offers an unmatched blend of nature and luxury.</p>
                        </div>
                    </div>

                    <h2 className="text-brand-900 text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Taking the Next Step
                    </h2>
                    <p>
                        Navigating the Panama real estate market requires local expertise and a deep understanding of upcoming trends. At <strong>Panama Real Estate Sale</strong>, we specialize in identifying high-value assets that align with both your lifestyle goals and your investment requirements.
                    </p>
                    <p>
                        The window of opportunity in 2026 is wide, but the best inventory—from beachfront lofts to high-altitude villas—moves quickly.
                    </p>

                    {/* CTA Box */}
                    <div className="bg-brand-950 p-12 rounded-3xl mt-16 not-prose text-center border-t-4 border-brand-GOLD relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Building2 size={120} className="text-white" />
                        </div>
                        <h3 className="text-white font-heading text-4xl font-bold mb-6 uppercase italic tracking-tighter relative z-10">
                            Your Panama Journey Starts Here
                        </h3>
                        <p className="text-brand-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
                            Join the thousands of successful expats and investors who have found their home in Panama. Our expert team is ready to guide you through every step of the process.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-3 bg-brand-GOLD text-brand-950 px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl"
                            >
                                Contact an Expert <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/tours"
                                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-brand-GOLD text-brand-GOLD px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-brand-GOLD hover:text-brand-950 transition-all"
                            >
                                Book a Property Tour <Plane size={18} />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
