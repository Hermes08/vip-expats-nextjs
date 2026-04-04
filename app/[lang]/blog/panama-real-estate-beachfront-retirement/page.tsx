import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Waves, Palmtree, Umbrella, Coffee, Heart } from 'lucide-react';
import BlogPostSchema from '@/components/seo/BlogPostSchema';

export const metadata: Metadata = {
    title: 'Beachfront Real Estate Panama 2026: Retirement Living Guide',
    description: 'Beachfront properties Panama. Coronado, Bocas, San Blas. Retirement living, investment.',
    keywords: 'beachfront Panama, beachfront real estate, beach properties, Panama coastal living',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-real-estate-beachfront-retirement',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-real-estate-beachfront-retirement',
            'es': 'https://panamarealestatesale.com/es/blog/panama-real-estate-beachfront-retirement',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-real-estate-beachfront-retirement',
            'de': 'https://panamarealestatesale.com/de/blog/panama-real-estate-beachfront-retirement',
        },
    },
    openGraph: {
        title: 'Beachfront Real Estate Panama 2026: Retirement Living Guide',
        description: 'Beachfront properties Panama. Coronado, Bocas, San Blas. Retirement living, investment.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-real-estate-beachfront-retirement',
        images: [{ url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80', width: 1200, height: 630, alt: 'Beachfront property' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Beachfront Real Estate Panama 2026: Retirement Living Guide',
        description: 'Beachfront properties Panama. Coronado, Bocas, San Blas. Retirement living, investment.',
        images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80'],
    },
};;

const lifestylePillars = [
    {
        title: 'Coastal Serenity',
        desc: 'Waking up to the Pacific or Caribbean sun is a reality in communities like Playa Bonita and Coronado.',
        icon: Waves,
    },
    {
        title: 'Modern Infrastructure',
        desc: 'Top-tier medical facilities, high-speed internet, and international airports keep you connected.',
        icon: Palmtree,
    },
    {
        title: 'Vibrant Expat Community',
        desc: 'Join a thriving community of international residents from North America, Europe, and beyond.',
        icon: Heart,
    },
    {
        title: 'Spring Weather Yearly',
        desc: 'From tropical beaches to the "eternal spring" of the highlands, find your perfect microclimate.',
        icon: Coffee,
    },
];

export default async function PanamaBeachfrontLifestyle({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang || 'en';

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            <BlogPostSchema
                title="Beachfront Properties & Retirement: The Panama Expat Lifestyle"
                description="A deep dive into why retirees and digital nomads are flocking to Panama's beaches in 2026."
                publishDate="2026-03-09"
                authorName="Panama Real Estate Sale"
                image="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80"
                lang={lang as 'en' | 'es'}
            />

            {/* Hero */}
            <section className="bg-brand-50 py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80"
                        alt="Tropical Beach in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        LIFESTYLE GUIDE · 2026
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Beachfront Living & Retirement: The Panama Lifestyle
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Beyond the investment: Why thousands of expats choose the turquoise waters of Panama for their next chapter.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 max-w-4xl mx-auto px-4">
                <div className="space-y-10">

                    <p className="lead text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6">
                        Panama frequently tops the lists of <strong>"World&apos;s Best Places to Retire."</strong> In 2026, this is driven by more than just taxes; it&apos;s about the unparalleled quality of life found in its coastal retreats.
                    </p>

                    <h2 className="text-white text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        The Allure of Panama Beachfront Properties
                    </h2>
                    <p>
                        Whether it&apos;s the "Dry Arc" of the Pacific coast with its predictable sunny weather or the lush, island-style living of Bocas del Toro on the Caribbean side, Panama offers a diverse range of <strong>beachfront real estate</strong>.
                    </p>
                    <p>
                        Most modern developments are designed with the international expat in mind—offering resort-style amenities, 24/7 security, and social clubs that make integration seamless.
                    </p>

                    {/* Lifestyle Grid */}
                    <div className="grid md:grid-cols-2 gap-8 not-prose my-16 reveal-on-scroll">
                        {lifestylePillars.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="card-light p-10 rounded-2xl border border-brand-100 shadow-sm hover:translate-y-[-5px] transition-transform">
                                    <div className="w-14 h-14 rounded-full bg-brand-GOLD flex items-center justify-center mb-6">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-brand-950 mb-4 uppercase italic tracking-tighter">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <h2 className="text-white text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Retiring in Panama: The Pensionado Edge
                    </h2>
                    <p>
                        The <strong>Pensionado Visa</strong> remains the gold standard for retirees globally. It offers permanent residency and incredible discounts—from 25% off utility bills to 50% off movie tickets and significant savings on airfare and healthcare.
                    </p>
                    <p>
                        For those looking to combine their residency with a property purchase, the <strong>Qualified Investor Visa</strong> allows for a path to residency through a $300,000 real estate investment, often processed in as little as 30 days.
                    </p>

                    <h2 className="text-white text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Top Communities for Beachfront Living
                    </h2>
                    <ul>
                        <li><strong>Playa Bonita:</strong> The closest beach community to Panama City (just 20 minutes), offering a true "city-beach" hybrid lifestyle.</li>
                        <li><strong>Coronado:</strong> The established heart of the expat beach community, with full infrastructure and social life.</li>
                        <li><strong>Buenaventura:</strong> The ultimate in luxury coastal living, featuring a world-class golf course and marina.</li>
                    </ul>

                    {/* CTA */}
                    <div className="bg-white p-10 rounded-3xl mt-16 not-prose text-center border-t-4 border-brand-GOLD">
                        <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                            Discover Your Dream Lifestyle
                        </h3>
                        <p className="text-brand-300 mb-8 max-w-xl mx-auto">
                            Ready to explore beachfront living in Panama? Our relocation specialists can guide you to the perfect community for your retirement or investment.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Start Your Journey <ArrowRight size={16} />
                        </Link>
                    </div>

                </div>
            </section>
        </article>
    );
}
