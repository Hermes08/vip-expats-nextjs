import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, Heart, Zap, Users, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Living in Panama City 2026: Lifestyle, Costs, Neighborhoods, Guide',
    description: 'Living in Panama City. Neighborhoods, costs, transportation, lifestyle, schools, expat community.',
    keywords: 'living in Panama City, Panama City expat guide, Panama City lifestyle, neighborhoods Panama City',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/living-in-panama-city',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/living-in-panama-city',
            'es': 'https://panamarealestatesale.com/es/blog/living-in-panama-city',
            'pt': 'https://panamarealestatesale.com/pt/blog/living-in-panama-city',
            'de': 'https://panamarealestatesale.com/de/blog/living-in-panama-city',
        },
    },
    openGraph: {
        title: 'Living in Panama City 2026: Lifestyle, Costs, Neighborhoods, Guide',
        description: 'Living in Panama City. Neighborhoods, costs, transportation, lifestyle, schools, expat community.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/living-in-panama-city',
        images: [{ url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80', width: 1200, height: 630, alt: 'Panama City living' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Living in Panama City 2026: Lifestyle, Costs, Neighborhoods, Guide',
        description: 'Living in Panama City. Neighborhoods, costs, transportation, lifestyle, schools, expat community.',
        images: ['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80'],
    },
};

const neighborhoods = [
    {
        name: 'Punta Pacifica',
        tag: 'Best for Professionals & Investors',
        description:
            'The most prestigious address in Panama — ultra-modern towers, JW Marriott Hotel & Ocean Club next door, and direct Pacific views. This is where CEOs, diplomats, and high-net-worth expats plant their flag. Walkable, secure, and close to Hospital Punta Pacifica (Johns Hopkins affiliate).',
        rentRange: '$1,500 – $3,500/mo',
        buyRange: '$250K – $800K+',
        vibe: 'Luxury urban',
    },
    {
        name: 'El Cangrejo',
        tag: 'Best for Digital Nomads & First-Timers',
        description:
            "Panama City's most walkable neighborhood. Dozens of restaurants, coffee shops, supermarkets, and a dense concentration of English-speaking locals. Rents are lower than Punta Pacifica but the location is central. The NYC of Panama — busy, vibrant, never boring.",
        rentRange: '$800 – $1,400/mo',
        buyRange: '$120K – $280K',
        vibe: 'Urban cosmopolitan',
    },
    {
        name: 'Costa del Este',
        tag: 'Best for Families',
        description:
            "A planned community modeled on Miami's Brickell. Wide streets, manicured parks, international schools within walking distance, and one of the lowest crime rates in the city. Most expat families with children end up here. Expect to pay a premium for the calm.",
        rentRange: '$2,000 – $4,000/mo',
        buyRange: '$280K – $700K',
        vibe: 'Quiet suburban luxury',
    },
    {
        name: 'Casco Viejo',
        tag: 'Best for Culture & Character',
        description:
            "Panama City's UNESCO-listed colonial district. Cobblestone streets, boutique hotels, rooftop bars, and some of the most Instagram-worthy architecture in Central America. It has gentrified fast — prices have tripled in a decade. Still gritty in spots, but that's part of the appeal.",
        rentRange: '$1,200 – $2,500/mo',
        buyRange: '$180K – $500K',
        vibe: 'Historic bohemian',
    },
    {
        name: 'Miraflores / San Francisco',
        tag: 'Best for Mid-Range Comfort',
        description:
            'The sweet spot between price and quality. Close to the Miraflores Locks, good restaurant scene, solid security, and significantly cheaper than Punta Pacifica or Costa del Este. Popular with younger expat professionals and retirees who want comfort without the luxury price tag.',
        rentRange: '$700 – $1,000/mo',
        buyRange: '$100K – $220K',
        vibe: 'Mid-range residential',
    },
];

const monthlyBudgets = [
    {
        tier: 'Budget Expat',
        total: '$1,800 – $2,500',
        items: [
            'Rent (El Cangrejo studio): $800–$1,000',
            'Groceries (local markets): $250–$350',
            'Utilities + internet: $100–$150',
            'Transportation (Uber/Metro): $80–$120',
            'Dining out (local spots): $150–$200',
            'Health insurance: $80–$120',
        ],
    },
    {
        tier: 'Comfortable Expat',
        total: '$3,000 – $4,500',
        items: [
            'Rent (Punta Pacifica 1BR): $1,500–$2,000',
            'Groceries (supermarket mix): $400–$600',
            'Utilities + high-speed internet: $150–$200',
            'Transportation (car or Uber): $200–$300',
            'Dining out + entertainment: $400–$600',
            'Health insurance (comprehensive): $200–$400',
        ],
    },
    {
        tier: 'Luxury Expat',
        total: '$6,000 – $10,000+',
        items: [
            'Rent (penthouse / Costa del Este home): $3,000–$5,000',
            'Groceries + premium imports: $700–$1,000',
            'Utilities + staff: $400–$600',
            'Car ownership + fuel: $500–$800',
            'Fine dining + social: $800–$1,500',
            'Private health insurance: $400–$800',
        ],
    },
];

const prosItems = [
    {
        title: 'World-Class Healthcare at Fraction of US Cost',
        body: 'Hospital Punta Pacifica (Johns Hopkins-affiliated) and Hospital Nacional are internationally accredited. A specialist visit costs $50–$80. Complex procedures run 40–60% less than in the US.',
    },
    {
        title: 'Zero Tax on Foreign Income',
        body: "Panama's territorial tax system means your US retirement income, foreign dividends, and overseas rental income are 100% tax-free in Panama. Legally.",
    },
    {
        title: 'Dollarized Economy',
        body: "The US Dollar has been Panama's currency since 1904. No exchange rate risk, no conversion headaches — just spend your dollars.",
    },
    {
        title: 'English is Widely Spoken',
        body: 'Panama City is one of the most English-friendly cities in Latin America. In Punta Pacifica, Costa del Este, and business districts, you can navigate daily life without learning Spanish.',
    },
    {
        title: 'Hub for the Americas',
        body: 'Tocumen International Airport is the best-connected hub in Central America. Direct flights to 80+ destinations. Miami is 2.5 hours. New York is 5.5 hours.',
    },
    {
        title: 'Thriving Expat Community',
        body: 'Tens of thousands of North American and European expats call Panama City home. The social infrastructure — clubs, networking groups, English-language services — is already built for you.',
    },
];

const consItems = [
    {
        title: 'Traffic is Genuinely Brutal',
        body: "Panama City traffic is a daily frustration. The Metro has improved, but the road network has not kept pace with the city's growth. Budget 30–90 extra minutes for commutes during peak hours.",
    },
    {
        title: 'Humidity Takes Adjustment',
        body: "The rainy season (May–November) is hot and sticky. You'll run AC constantly — a cost to budget for. Most expats adapt within 3–6 months.",
    },
    {
        title: 'Bureaucracy Moves Slowly',
        body: 'Opening a bank account, registering a car, obtaining a permit — anything involving government offices will try your patience. Hire a local attorney or gestor to handle paperwork.',
    },
    {
        title: 'Income Inequality is Visible',
        body: 'The contrast between wealthy districts and poorer areas is stark. This is common across Latin America, but worth entering with eyes open rather than assuming all of Panama City looks like Punta Pacifica.',
    },
];

const healthcareCosts = [
    { label: 'Specialist Consultation', cost: '$50 – $80' },
    { label: 'Full Blood Panel / Lab Work', cost: '$30 – $60' },
    { label: 'Dental Crown', cost: '$300 – $500' },
    { label: 'LASIK Eye Surgery (both eyes)', cost: '$1,200 – $1,800' },
    { label: 'Emergency Room Visit', cost: '$150 – $400' },
    { label: 'Monthly Health Insurance (age 55)', cost: '$150 – $350' },
];

const visas = [
    {
        visa: 'Pensionado Visa',
        req: 'Lifetime pension of $1,000/mo (e.g., US Social Security)',
        benefit: 'Permanent residency + major discounts on utilities, medical, airlines, restaurants',
    },
    {
        visa: 'Friendly Nations Visa',
        req: 'Ties to Panama economy (job, property, company)',
        benefit: 'Permanent residency for citizens of 50 friendly nations including USA, UK, EU',
    },
    {
        visa: 'Real Estate Investor Visa',
        req: '$300,000 minimum real estate purchase',
        benefit: 'Permanent residency + pathway to citizenship after 5 years',
    },
    {
        visa: 'Short Stay (Tourist)',
        req: 'Passport only',
        benefit: 'Up to 180 days visa-free for most Western nationalities',
    },
];

const thriveItems = [
    'Retirees with $2,000+/mo in pension or Social Security',
    'Remote workers earning in USD or EUR',
    'Real estate investors building a Latin America portfolio',
    'Entrepreneurs attracted by low corporate taxes and free trade zones',
    'Medical tourists seeking long-term care at reduced cost',
    'Families wanting private bilingual education for $500–$800/mo per child',
];

const internalLinks = [
    { label: 'Best Neighborhoods to Live', href: '/en/blog/best-areas-retire-panama' },
    { label: 'Apartments for Rent in Panama City', href: '/en/blog/apartments-for-rent-panama-city' },
    { label: 'Cost of Living: Panama vs US', href: '/en/blog/cost-of-living-panama-vs-us' },
];

export default async function LivingInPanamaCityPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
                        alt="Panama City Skyline"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        EXPAT LIVING GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Living in Panama City:<br />The Honest Expat Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Real neighborhoods, real costs, real trade-offs. What it actually feels like to live in one of Latin America&apos;s most dynamic cities.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama City is not a tropical retirement village. It is a genuine, fast-moving metropolis — the financial capital of Central America — with a skyline that rivals Miami, a healthcare system that rivals Houston, and a cost of living that is roughly half of both.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        For the right expat, Panama City is genuinely transformative. For the wrong expat, the traffic, bureaucracy, and humidity will drive them home within a year. This guide is designed to help you figure out which camp you fall into — before you commit.
                    </p>
                </section>

                {/* Neighborhoods */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-2 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Panama City Neighborhoods for Expats
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Panama City is not one city — it is a collection of very different neighborhoods, each with its own personality, price point, and expat culture. Choosing the right one matters more than almost any other decision you will make.
                    </p>
                    <div className="space-y-6">
                        {neighborhoods.map((n, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <MapPin size={13} className="text-brand-GOLD" />
                                            <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">{n.tag}</span>
                                        </div>
                                        <h3 className="text-2xl font-heading font-black text-brand-950">{n.name}</h3>
                                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{n.vibe}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-sm">{n.rentRange}</div>
                                        <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Rent</div>
                                        <div className="text-brand-950 font-black text-sm mt-1">{n.buyRange}</div>
                                        <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Buy</div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{n.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cost of Living */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-2 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        What Does It Actually Cost to Live Here?
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        These are real monthly budget ranges based on what our clients actually spend — not tourist blog estimates. The range is wide because Panama City offers an equally wide range of lifestyles.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {monthlyBudgets.map((budget, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">{budget.tier}</div>
                                <div className="text-brand-950 font-black text-xl mb-4">
                                    {budget.total}<span className="text-slate-500 font-normal text-sm">/mo</span>
                                </div>
                                <ul className="space-y-2">
                                    {budget.items.map((item, j) => (
                                        <li key={j} className="text-slate-500 text-xs leading-relaxed flex items-start gap-2">
                                            <span className="text-brand-GOLD mt-0.5 flex-shrink-0">·</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Healthcare */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        Healthcare: Panama City&apos;s Hidden Superpower
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-6">
                        Healthcare is consistently the biggest positive surprise for North American expats. The quality is high, the access is fast, and the cost is dramatically lower than in the US.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {healthcareCosts.map((item, i) => (
                            <div key={i} className="flex justify-between items-center bg-brand-50 rounded-xl px-5 py-4 border border-brand-100">
                                <span className="text-slate-500 text-sm">{item.label}</span>
                                <span className="text-brand-GOLD font-black text-sm">{item.cost}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-xs mt-4 leading-relaxed">
                        Hospital Punta Pacifica is a Johns Hopkins Medicine International affiliate. Hospital Nacional and Centro Médico Paitilla are also internationally accredited facilities used by the expat community.
                    </p>
                </section>

                {/* Pros and Cons */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        The Real Pros &amp; Cons
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <Zap size={18} className="text-brand-GOLD" />
                                <span className="text-brand-GOLD font-black uppercase tracking-widest text-xs">What Works</span>
                            </div>
                            <div className="space-y-4">
                                {prosItems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="text-brand-950 font-bold text-sm mb-1">{item.title}</div>
                                            <div className="text-slate-500 text-xs leading-relaxed">{item.body}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <AlertTriangle size={18} className="text-brand-CORAL" />
                                <span className="text-brand-CORAL font-black uppercase tracking-widest text-xs">What Doesn&apos;t</span>
                            </div>
                            <div className="space-y-4">
                                {consItems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <AlertTriangle size={16} className="text-brand-CORAL mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="text-brand-950 font-bold text-sm mb-1">{item.title}</div>
                                            <div className="text-slate-500 text-xs leading-relaxed">{item.body}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who thrives */}
                <section className="reveal-on-scroll card-light rounded-2xl p-8 border border-brand-100">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic">
                        <Users className="inline text-brand-GOLD mr-2" size={24} />
                        Who Thrives in Panama City?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {thriveItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Visas */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Getting Legal: Visa Fast Facts
                    </h2>
                    <div className="space-y-3">
                        {visas.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex flex-wrap gap-x-8 gap-y-2">
                                    <div>
                                        <div className="text-brand-GOLD font-black text-sm">{item.visa}</div>
                                        <div className="text-slate-500 text-xs mt-1">
                                            <span className="text-slate-500 font-bold">Req: </span>{item.req}
                                        </div>
                                    </div>
                                    <div className="text-slate-500 text-xs leading-relaxed mt-1 flex-1 min-w-[200px]">{item.benefit}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to See Panama City for Yourself?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our advisors have lived and worked in Panama City for years. Book a free 30-minute consultation and we will walk you through neighborhoods, costs, and real properties that match your lifestyle and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Free Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/panama-real-estate-investments`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Investment Guide
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {internalLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-between card-light p-4 rounded-xl border border-brand-100 hover:border-brand-GOLD/30 transition-all group"
                        >
                            <span className="text-brand-950 text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    );
}
