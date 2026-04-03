import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Globe, Building2, Landmark, ShieldCheck } from 'lucide-react';
import BlogPostSchema from '@/components/seo/BlogPostSchema';

export const metadata: Metadata = {
    title: 'Panama Real Estate Investment Opportunities 2026 | Top Expat Choice',
    description: 'Explore the best Panama real estate investment opportunities for 2026. From beachfront properties to Panama City luxury, learn why expats choose Panama for retirement and lifestyle.',
    keywords: 'Panama real estate, investment opportunities, expat lifestyle, beachfront properties, retirement in Panama, invest in panama',
};

const investmentHighlights = [
    {
        title: 'High Rental Yields',
        desc: 'Panama City and coastal hubs offer consistent 6-9% ROI through short-term and long-term rentals.',
        icon: TrendingUp,
    },
    {
        title: 'Dollarized Stability',
        desc: 'The US Dollar is legal tender, protecting your investment from currency volatility found in other LATAM markets.',
        icon: Landmark,
    },
    {
        title: 'Tax Incentives',
        desc: 'Up to 20 years of property tax exemptions on new constructions and zero tax on foreign-sourced income.',
        icon: ShieldCheck,
    },
    {
        title: 'Strategic Hub',
        desc: 'The "Hub of the Americas" provides world-class connectivity and a growing infrastructure.',
        icon: Globe,
    },
];

export default async function PanamaInvestmentOpportunities({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang || 'en';

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            <BlogPostSchema
                title="Panama Real Estate: Top Investment Opportunities for 2026"
                description="A comprehensive guide to why Panama real estate is a top choice for global investors and expats in 2026."
                publishDate="2026-03-09"
                authorName="Panama Real Estate Sale"
                image="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=1600&q=80"
                lang={lang as 'en' | 'es'}
            />

            {/* Hero */}
            <section className="bg-brand-900 py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=1600&q=80"
                        alt="Modern Panama City Skyline"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        INVESTMENT INSIGHT · 2026
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Panama Real Estate: Top Investment Opportunities in 2026
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Discover why sophisticated investors are moving capital into Panama&apos;s stable, dollarized property market this year.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 max-w-4xl mx-auto px-4">
                <div className="space-y-10">

                    <p className="lead text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6">
                        In a global landscape of economic uncertainty, Panama stands out as a beacon of stability. For expats and investors alike, the blend of <strong>luxury lifestyle</strong> and <strong>tangible asset security</strong> is unmatched in the region.
                    </p>

                    <h2 className="text-white text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Why Invest in Panama Right Now?
                    </h2>
                    <p>
                        The Panama real estate market has matured significantly over the last decade. It is no longer just about "cheap property." Today, it is about <strong>quality, infrastructure, and resilience</strong>. Whether you are looking for a beachfront retreat or a high-yield urban condo, the fundamentals remain rock-solid.
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid md:grid-cols-2 gap-8 not-prose my-16 reveal-on-scroll">
                        {investmentHighlights.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon size={24} className="text-brand-GOLD" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 uppercase italic tracking-tight">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <h2 className="text-white text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Beachfront Properties vs. City Luxury
                    </h2>
                    <p>
                        One of the most frequent questions from our expat clients is whether to buy in <strong>Panama City</strong> or on the <strong>Coast</strong>.
                    </p>
                    <ul>
                        <li><strong>Panama City:</strong> Best for capital appreciation and professional rental yields. Casco Viejo and Punta Pacifica remain the premium benchmarks.</li>
                        <li><strong>Beachfront (Pacific & Caribbean):</strong> Best for lifestyle, retirement, and the "Qualified Investor" visa path. Areas like Playa Bonita and Buenaventura offer world-class amenities.</li>
                    </ul>

                    <h2 className="text-white text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        The Expat Lifestyle & Retirement Advantage
                    </h2>
                    <p>
                        Panama isn&apos;t just a place to put your money; it&apos;s a place to live. With the world-renowned <strong>Pensionado Program</strong> and the <strong>Qualified Investor Visa</strong>, Panama makes it incredibly easy for expats to transition to a high-quality, lower-cost lifestyle.
                    </p>

                    {/* CTA */}
                    <div className="bg-brand-950 p-10 rounded-3xl mt-16 not-prose text-center border-t-4 border-brand-GOLD">
                        <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                            Secure Your Panama Investment
                        </h3>
                        <p className="text-brand-300 mb-8 max-w-xl mx-auto">
                            Our expert advisors can help you navigate the Panama real estate market to find the property that fits your investment profile and lifestyle goals.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Consult an Expert <ArrowRight size={16} />
                        </Link>
                    </div>

                </div>
            </section>
        </article>
    );
}
