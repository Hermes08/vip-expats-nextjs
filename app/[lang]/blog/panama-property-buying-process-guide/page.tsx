import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Scale, DollarSign, AlertCircle, Briefcase, Home, TrendingUp, FileText } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'panama-property-buying-process-guide';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Buying Property in Panama 2026: Complete Step-by-Step Guide',
    description: 'Complete guide to buying property in Panama. Due diligence, legal process, costs, title registry.',
    keywords: 'buy property Panama, real estate purchase process, property law Panama, buying land Panama',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-property-buying-process-guide',
            'es': 'https://panamarealestatesale.com/es/blog/panama-property-buying-process-guide',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-property-buying-process-guide',
            'de': 'https://panamarealestatesale.com/de/blog/panama-property-buying-process-guide',
        },
    },
    openGraph: {
        title: 'Buying Property in Panama 2026: Complete Step-by-Step Guide',
        description: 'Complete guide to buying property in Panama. Due diligence, legal process, costs, title registry.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80', width: 1200, height: 630, alt: 'Buying property in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Buying Property in Panama 2026: Complete Step-by-Step Guide',
        description: 'Complete guide to buying property in Panama. Due diligence, legal process, costs, title registry.',
        images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80'],
    },
};
}

const titleTypes = [
    {
        name: 'Registered Title (Título Registrado)',
        definition: 'Full legal ownership registered in the Public Registry of Panama.',
        security: 'HIGHEST — You own the property outright',
        liquidity: 'Excellent — Easy to sell, refinance, or rent',
        cost: 'Standard property prices',
        recommend: 'YES — Buy titled property whenever possible',
        riskFactors: 'Minimal if purchased through proper channels',
    },
    {
        name: 'Rights of Possession (ROP / Derecho Posesorio)',
        definition: 'Use rights on property without full deed. Common on islands and indigenous territories.',
        security: 'MEDIUM — You have use rights, but state could theoretically reclaim',
        liquidity: 'Fair — Limited buyer pool, harder to sell',
        cost: 'Often 20-40% cheaper than titled',
        recommend: 'ONLY if titled is unavailable and you understand the risk',
        riskFactors: 'Can be rented or transferred, but buyer base is small. Legal status can change.',
    },
    {
        name: 'Concession (Concesión)',
        definition: 'Government concession for use of land near shoreline or in development zones.',
        security: 'MEDIUM — Subject to government conditions and renewal terms',
        liquidity: 'Fair — Can be sold but subject to government approval',
        cost: 'Varies widely',
        recommend: 'Consult lawyer if interested; common for beach and resort properties',
        riskFactors: 'Government can revoke if conditions not met. Check concession terms carefully.',
    },
];

const buyingSteps = [
    {
        number: '1',
        title: 'Find Property',
        details: [
            'Real estate agents (agent fees paid by seller, not buyer)',
            'MLS Panama database (online listing service)',
            'Facebook expat groups and local groups',
            'Direct owner (Google Maps, neighborhood walks)',
            'Panamarealestatesale.com and similar sites',
        ],
        notes: 'Most transactions use an agent. Buyer pays ZERO agent fees — the seller pays 5-10% commission to the agent.',
    },
    {
        number: '2',
        title: 'Make Offer',
        details: [
            'Verbal offer to agent or seller',
            'Written offer (Oferta de Compra) — non-binding, but shows seriousness',
            'Negotiations on price, closing timeline, contingencies',
            'Agreement on cash vs financed',
        ],
        notes: 'Offers are often verbal first. Written offers formalize intent. Price is always negotiable in Panama.',
    },
    {
        number: '3',
        title: 'Due Diligence (CRITICAL)',
        details: [
            'Hire a real estate lawyer immediately ($500-1,500 for this phase)',
            'Lawyer checks Public Registry for: deed ownership, liens, encumbrances, property taxes current',
            'Verify zoning is residential (not commercial, industrial, or restricted)',
            'Confirm utilities connected: water, electricity, internet available',
            'Check for illegal structures (additions without permits)',
            'Environmental assessment if beachfront or special zone',
            'Survey verification (if needed)',
        ],
        notes: 'This takes 2-4 weeks. Do NOT skip. Lien or title issue found here saves you $10,000+ in problems.',
    },
    {
        number: '4',
        title: 'Promise to Purchase (Promesa de Compra Venta)',
        details: [
            'Legal document prepared by lawyer',
            'Both buyer and seller sign',
            'Buyer pays 10% deposit (held in escrow, non-refundable if buyer backs out)',
            'Timeline for closing set (typically 45-90 days)',
            'Contingencies listed (financing, inspection, title clear)',
            'Price and payment terms finalized',
        ],
        notes: 'The Promise is legally binding. Deposits are refundable only if contingencies fail.',
    },
    {
        number: '5',
        title: 'Financing (If Applicable)',
        details: [
            'Banks: Banistmo, Global Bank, BAC Credomatic (20-30% down payment required)',
            'Interest rates: 6-9% typical',
            'Term: Maximum 20 years',
            'Proof of income required; income verification takes 2-4 weeks',
            'Appraisal conducted by bank (1-2 weeks)',
            'Final approval before closing',
        ],
        notes: 'Financing is available to foreigners but requires perfect documentation. Start early.',
    },
    {
        number: '6',
        title: 'Final Deed (Escritura Pública)',
        details: [
            'Prepared by notary public (or lawyer)',
            'Both buyer and seller sign at notary office',
            'Payment wired or certified check provided',
            'Seller receives funds',
            'Buyer receives deed and keys',
            'Closing takes 1-2 hours',
        ],
        notes: 'Final deed is the legal transfer. If either party is absent, power of attorney required.',
    },
    {
        number: '7',
        title: 'Register New Deed in Public Registry',
        details: [
            'Lawyer or notary submits deed to Public Registry',
            'Registration fees: 1.75% of registered property value',
            'Processing: 2-8 weeks (can be expedited for fee)',
            'Certificate of registration issued',
            'Property now registered in your name',
        ],
        notes: 'Registration is NOT automatic. Your lawyer handles this. Registration proves ownership.',
    },
    {
        number: '8',
        title: 'Update Property Tax Records',
        details: [
            'Property declared at Ministry of Economy and Finance',
            'If value under $120,000: ZERO property tax',
            'If value above $120,000: 0.5-1% annual property tax',
            'Annual renewal typically handled via lawyer',
        ],
        notes: 'This is final step. New construction under $300K often gets tax exonerations for 20 years.',
    },
];

const costBreakdown = [
    { item: 'Transfer Tax (2%)', paidBy: 'Seller (sometimes negotiated)', buyer: 'Often zero', percentage: '2%' },
    { item: 'Registration Fee (1.75%)', paidBy: 'Buyer', buyer: 'Yes', percentage: '1.75%' },
    { item: 'Notary Fee (0.1%)', paidBy: 'Buyer (shared)', buyer: 'Yes', percentage: '0.1%' },
    { item: 'Lawyer Fee (1-2%)', paidBy: 'Buyer', buyer: 'Yes', percentage: '1-2%' },
    { item: 'Total Buyer Costs', paidBy: 'Buyer', buyer: 'Yes', percentage: '3-4%' },
];

const mortgageInfo = [
    {
        bank: 'Banistmo',
        downPayment: '20-30%',
        rate: '6.5-8.5%',
        term: 'Up to 20 years',
        foreignerFriendly: 'Yes',
        notes: 'Largest bank. Requires perfect documentation.',
    },
    {
        bank: 'Global Bank',
        downPayment: '25-30%',
        rate: '7-9%',
        term: 'Up to 20 years',
        foreignerFriendly: 'Yes',
        notes: 'Expat-friendly. Good English support.',
    },
    {
        bank: 'BAC Credomatic',
        downPayment: '20-30%',
        rate: '6.5-8.5%',
        term: 'Up to 20 years',
        foreignerFriendly: 'Yes',
        notes: 'Competitive rates. Central American network.',
    },
];

const redFlags = [
    {
        flag: 'Seller claims ROP is same as titled property',
        danger: 'HIGH',
        action: 'Walk away. ROP is not titled. Get written clarification from lawyer.',
    },
    {
        flag: 'Property has undisclosed liens or mortgages',
        danger: 'HIGH',
        action: 'Due diligence lawyer will find this. Seller must clear all liens before closing.',
    },
    {
        flag: 'Seller has unpaid property taxes',
        danger: 'HIGH',
        action: 'Buyer can be held liable. Require tax clearance before closing.',
    },
    {
        flag: 'No building permits for additions or renovations',
        danger: 'MEDIUM',
        action: 'You can operate without permit, but illegal structures can be ordered demolished.',
    },
    {
        flag: 'Utilities not connected (water/electricity)',
        danger: 'MEDIUM',
        action: 'Verify before purchase. Connection costs $500-2,000 and takes weeks.',
    },
    {
        flag: 'Pressure to close quickly or cash-only deals',
        danger: 'VERY HIGH',
        action: 'This is a scam indicator. NEVER rush. Always use a lawyer and escrow.',
    },
    {
        flag: 'No lawyer involvement (seller says "not necessary")',
        danger: 'VERY HIGH',
        action: 'You MUST have a lawyer. Non-negotiable. This is how fraud happens.',
    },
    {
        flag: 'Seller cannot provide clear title history',
        danger: 'HIGH',
        action: 'Request Public Registry records. If seller cannot, there is a problem. Investigate.',
    },
];

const faqData = [
    {
        q: 'Do I need to be a Panamanian citizen to buy property?',
        a: 'No. Foreigners have the same property rights as Panamanians. This is a major advantage over many countries in Latin America. You can buy titled property, get mortgages, rent it, or sell it — with zero restrictions based on nationality.',
    },
    {
        q: 'Can I get a mortgage as a foreigner?',
        a: 'Yes, three major banks offer mortgages to foreigners: Banistmo, Global Bank, and BAC Credomatic. Typical terms: 20-30% down payment, 6-9% interest, up to 20 years. You need proof of income (Social Security statements count), and the approval process takes 2-4 weeks after you apply.',
    },
    {
        q: 'What is the difference between titled and ROP property?',
        a: 'Titled property (Título Registrado) means you own the land outright and are registered in the Public Registry. ROP (Derecho Posesorio) means you have use rights, but not full ownership. ROP is common on islands and indigenous territories. It is cheaper (20-40% less), but liquidity is poor and legal status is less secure. Always prefer titled if available.',
    },
    {
        q: 'How long does the buying process take?',
        a: 'From offer to registration: 45-90 days for cash, 90-120 days for financed purchases. This assumes: clean title, no liens, quick due diligence, and no financing delays. Complications (title issues, bank delays) can extend to 6 months.',
    },
    {
        q: 'How much do I pay in property taxes?',
        a: 'NONE if the property is valued under $120,000 in the registry. This is a huge advantage. If valued above $120,000: 0.5-1% annually. New construction under $300,000 is often granted tax exonerations for 20 years from completion.',
    },
    {
        q: 'Do I have to use a lawyer?',
        a: 'YES. Absolutely. Non-negotiable. A good lawyer costs $1,500-3,000 and saves you $10,000+ by catching title issues, liens, or fraud. Many expats try to save money and DIY — this is how fraud happens. Hire a lawyer immediately.',
    },
    {
        q: 'What happens if the seller does not clear liens before closing?',
        a: 'Your lawyer will NOT allow closing until liens are cleared. The Promise to Purchase includes contingencies. If the seller cannot clear title, you get your deposit back and walk away. This is why due diligence is critical.',
    },
    {
        q: 'Can I invest in Panama real estate from abroad without visiting?',
        a: 'Technically yes, but strongly not recommended. You cannot properly evaluate the property, neighborhood, or infrastructure. Many distant investors regret purchases. Visit in person, rent first, then buy. The cost of a scouting trip ($2,000-3,000) is cheap insurance against a $100,000 mistake.',
    },
    {
        q: 'What if I want to sell the property later?',
        a: 'Very easy. Hire a real estate agent. List it. Sell it. The buyer pays the agent 5-10% commission. You pay capital gains tax on profit (10-20% depending on how long you held it). The process is liquid and straightforward.',
    },
];

export default async function PanamaPropertyBuyingPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
                        alt="Panama Real Estate"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        REAL ESTATE GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        How to Buy Property<br />in Panama as a Foreigner
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Complete legal guide to purchasing real estate in Panama. Title types, step-by-step process, costs, mortgages, and what to avoid.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama uniquely allows foreigners to own property with THE SAME RIGHTS as Panamanian citizens. No restrictions. No permits. No quotas. This is not true in many countries. Combined with zero property tax on homes under $120,000 and available mortgages, Panama is one of the easiest places in Latin America to buy real estate as a foreigner.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        But buying property in Panama does have a legal process. This guide walks you through every step, explains the different title types, covers costs and mortgages, and flags the red flags that indicate fraud or bad deals. Follow it, and you will buy safely. Skip steps, and you risk losing money.
                    </p>
                </section>

                {/* Big Win */}
                <section className="reveal-on-scroll bg-brand-TEAL/10 rounded-2xl p-8 border border-brand-TEAL/30">
                    <div className="flex items-start gap-4">
                        <CheckCircle size={32} className="text-brand-TEAL flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-white font-heading font-bold text-xl mb-3 uppercase tracking-tight">Why Panama is Unique</h3>
                            <p className="text-slate-500 mb-4">Many countries restrict foreign property ownership or require government approval. Panama does not. You can own titled property, get mortgages, rent it out, or sell it — exactly like a Panamanian national. This freedom, combined with property tax exemptions on homes under $120,000, makes Panama exceptionally attractive for real estate investment.</p>
                            <p className="text-slate-400 text-sm font-mono bg-brand-950/50 px-4 py-2 rounded inline-block">Property Tax Below $120K = ZERO | Mortgages to Foreigners = Available | Ownership Restrictions = NONE</p>
                        </div>
                    </div>
                </section>

                {/* Title Types */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Scale className="inline text-brand-GOLD mr-2" size={28} />
                        Understanding Property Title Types
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Panama has three main types of property titles. Understanding the difference is critical to a safe purchase.
                    </p>
                    <div className="space-y-6">
                        {titleTypes.map((t, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-col md:flex-row gap-4 mb-5">
                                    <div className="flex-grow">
                                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-1">Title Type</div>
                                        <h3 className="text-brand-950 font-bold text-xl">{t.name}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-5">{t.definition}</p>
                                <div className="grid grid-cols-2 gap-4 mb-5">
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Security Level</div>
                                        <div className="text-brand-950 font-bold text-sm">{t.security}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Liquidity</div>
                                        <div className="text-brand-950 font-bold text-sm">{t.liquidity}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Typical Cost</div>
                                        <div className="text-slate-300 text-sm">{t.cost}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Risk Factors</div>
                                        <div className="text-slate-300 text-sm">{t.riskFactors}</div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-brand-100">
                                    <div className="text-brand-TEAL text-sm font-bold">{t.recommend}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Step-by-Step */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Briefcase className="inline text-brand-GOLD mr-2" size={28} />
                        The 8-Step Buying Process
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        From offer to registration, the property purchase follows these steps. Timeline: 45-90 days for cash, 90-120 days for financed.
                    </p>
                    <div className="space-y-5">
                        {buyingSteps.map((step, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-GOLD/10 border border-brand-GOLD flex items-center justify-center flex-shrink-0">
                                        <span className="text-brand-GOLD font-black text-lg">{step.number}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-brand-950 font-bold text-lg">{step.title}</h3>
                                    </div>
                                </div>
                                <div className="ml-14 mb-4 space-y-2">
                                    {step.details.map((detail, j) => (
                                        <div key={j} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-brand-GOLD rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-slate-500 text-sm leading-relaxed">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="ml-14 pt-3 border-t border-brand-100">
                                    <span className="text-brand-TEAL text-xs font-bold">NOTE:</span>
                                    <p className="text-slate-400 text-xs leading-relaxed mt-1">{step.notes}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Costs */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Actual Costs: What You Will Pay
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Total buyer closing costs in Panama are 3-4% of the purchase price. Here is the breakdown:
                    </p>
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Cost Item</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Paid By</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Buyer Pays?</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costBreakdown.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-400 text-xs py-3 px-3">{row.paidBy}</td>
                                        <td className="text-slate-300 text-xs py-3 px-3 font-bold">{row.buyer}</td>
                                        <td className="text-brand-GOLD text-xs py-3 px-3 font-bold">{row.percentage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {[
                            { price: '$150,000 condo', breakdown: 'Registration: $2,625 | Lawyer: $1,500-3,000 | Notary: $150 | Total: $4,275-5,775' },
                            { price: '$300,000 condo', breakdown: 'Registration: $5,250 | Lawyer: $3,000-6,000 | Notary: $300 | Total: $8,550-11,550' },
                            { price: '$500,000 luxury home', breakdown: 'Registration: $8,750 | Lawyer: $5,000-10,000 | Notary: $500 | Total: $14,250-19,250' },
                        ].map((c, i) => (
                            <div key={i} className="card-light rounded-xl p-4 border border-brand-100">
                                <div className="text-brand-950 font-bold text-sm mb-3">{c.price}</div>
                                <p className="text-slate-500 text-xs leading-relaxed font-mono">{c.breakdown}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-2xl p-6 border border-brand-GOLD/20">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-3">Property Tax Advantage</div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-3">
                            If your home is registered at $120,000 or less, you pay ZERO property tax annually. If above $120,000, you pay 0.5-1% yearly. Many smart buyers arrange the registered value at $119,999 to avoid tax. New construction under $300,000 qualifies for 20-year tax exonerations (major benefit vs US homes).
                        </p>
                        <p className="text-slate-400 text-xs font-bold">Example: $300,000 home, zero property tax for 20 years = $60,000+ in tax savings vs US</p>
                    </div>
                </section>

                {/* Mortgages */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Mortgages for Foreigners
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Three major banks offer mortgages to foreigners. Typical terms: 20-30% down, 6-9% rates, up to 20 years.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {mortgageInfo.map((m, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-lg mb-4">{m.bank}</h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Down Payment</div>
                                        <div className="text-slate-300">{m.downPayment}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Interest Rate</div>
                                        <div className="text-slate-300">{m.rate}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Maximum Term</div>
                                        <div className="text-slate-300">{m.term}</div>
                                    </div>
                                    <div className="pt-3 border-t border-brand-100">
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Foreigner-Friendly</div>
                                        <div className="text-brand-TEAL font-bold">{m.foreignerFriendly}</div>
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-slate-500 text-xs leading-relaxed">{m.notes}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-2xl p-6 border border-brand-GOLD/20">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Example Mortgage Calculation</div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            Buying a $300,000 condo with Banistmo mortgage:
                        </p>
                        <div className="space-y-2 font-mono text-xs text-slate-400">
                            <div>Down Payment (25%): $75,000</div>
                            <div>Loan Amount: $225,000</div>
                            <div>Interest Rate: 7%</div>
                            <div>Term: 20 years</div>
                            <div className="pt-2 border-t border-brand-100 mt-2">Monthly Payment: ~$1,560</div>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed mt-4">
                            You need proof of income (minimum ~$4,000/month recommended) and good credit history. Process takes 2-4 weeks for approval after application.
                        </p>
                    </div>
                </section>

                {/* Red Flags */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Critical Red Flags: What to Avoid
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        These indicators suggest fraud, title problems, or bad deals. If you see any of these, walk away or investigate deeply with your lawyer.
                    </p>
                    <div className="space-y-4">
                        {redFlags.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex-shrink-0">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-brand-950 text-sm ${
                                        item.danger === 'VERY HIGH' ? 'bg-brand-CORAL' :
                                        item.danger === 'HIGH' ? 'bg-brand-CORAL/70' :
                                        'bg-brand-AMBER'
                                    }`}>
                                        {item.danger[0]}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="text-brand-950 font-bold text-sm mb-1">{item.flag}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.action}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D Charts */}
                <section className="reveal-on-scroll bg-brand-50 rounded-2xl p-8 border border-brand-100 mb-8">
                    <h3 className="text-white font-heading font-bold text-2xl mb-4 uppercase tracking-tight">Closing Costs by Property Price</h3>
                    <p className="text-slate-500 text-sm mb-6">See how total buyer costs scale with property value.</p>
                    <div className="rounded-xl overflow-hidden bg-white border border-brand-100" style={{ height: '400px' }}>
                        <CostBarChart data={propertyChartData} title="Monthly Cost Comparison (USD)" />
                    </div>
                </section>

                <section className="reveal-on-scroll bg-brand-50 rounded-2xl p-8 border border-brand-100">
                    <h3 className="text-white font-heading font-bold text-2xl mb-4 uppercase tracking-tight">Explore Panama City 3D</h3>
                    <p className="text-slate-500 text-sm mb-6">Get a visual sense of Panama City, where most investment property purchases occur.</p>
                    <div className="rounded-xl overflow-hidden bg-white border border-brand-100" style={{ height: '400px' }}>
                        <PanamaCityScene />
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-5">
                        {faqData.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <details className="cursor-pointer group">
                                    <summary className="flex items-center justify-between font-bold text-brand-950 text-sm hover:text-brand-GOLD transition-colors">
                                        <span>{item.q}</span>
                                        <span className="text-brand-GOLD group-open:rotate-180 transition-transform">+</span>
                                    </summary>
                                    <div className="mt-4 pt-4 border-t border-brand-100">
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Summary */}
                <section className="reveal-on-scroll bg-brand-TEAL/10 rounded-2xl p-8 border border-brand-TEAL/30">
                    <h3 className="text-white font-heading text-2xl font-bold mb-6 uppercase tracking-tight">Key Takeaways</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Buy titled property.</strong> Registered Title is safest. Avoid ROP unless you understand the risks.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Hire a lawyer immediately.</strong> Non-negotiable. $1,500-3,000 for due diligence saves $10,000+ in problems.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Expect 3-4% closing costs.</strong> Registration, lawyer, and notary fees add up. Budget accordingly.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Take advantage of zero property tax.</strong> Homes under $120K pay nothing. Smart buyers register under $120K when possible.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Visit before buying.</strong> Even if you buy remotely, visit first. Rent 6-12 months, then commit to purchase.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Never rush closing.</strong> Pressure to close fast is a scam indicator. Timeline: 45-90 days cash, 90-120 days financed.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Mortgages are available.</strong> Three major banks lend to foreigners. 20-30% down, 6-9% rates, 20-year terms.</span>
                        </li>
                    </ul>
                </section>

                {/* Moving Companies & Services */}
                <section className="reveal-on-scroll bg-brand-50 border border-brand-100 rounded-2xl p-8 my-12">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-2">Moving & Relocation Services for New Panama Property Owners</h2>
                    <p className="text-brand-700 mb-6">Once you've purchased your property, you'll need to move your belongings and set up your new home. These professional movers, customs specialists, and relocation services help new property owners get settled into their Panama homes seamlessly.</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-xl border border-brand-100 p-5">
                            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">International Movers & Shipping</h3>
                            <ul className="text-brand-700 space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>AGS Worldwide Movers</strong> – Full moving service, handles customs, delivers to your new Panama property</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Bekins</strong> – LCL/FCL options, flexible scheduling to coordinate with property closing</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Stevens Worldwide Moving</strong> – Professional movers who work with property owners, flexible delivery windows</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>United Van Lines</strong> – Coordination services, can time deliveries with your closing date</span></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl border border-brand-100 p-5">
                            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Panama Property Setup Services</h3>
                            <ul className="text-brand-700 space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Property Management Companies</strong> – Help new owners set up utilities, arrange furniture, coordinate deliveries</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Interior Design & Furnishing Services</strong> – Manage everything from customs for appliances to final installation</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Logística Integral de Panamá</strong> – Specialized in delivery to residential properties, unpacking and positioning</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Direct Panama Shipping</strong> – Door-to-door delivery to your specific property address</span></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl border border-brand-100 p-5">
                            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Customs Clearance & Duty Handling</h3>
                            <ul className="text-brand-700 space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Customs Brokers Association</strong> – Official clearance, transparent duty calculations, documentation handling</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Colón Free Zone Services</strong> – Bonded warehouse storage while completing customs paperwork</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Import Duty Consultants</strong> – Help you understand what can come duty-free vs. taxed (household goods have preferential rates)</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Real Estate Agent Networks</strong> – Many agents have vendor lists and can negotiate mover discounts for clients</span></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl border border-brand-100 p-5">
                            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Home Setup & Furnishing</h3>
                            <ul className="text-brand-700 space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Local Furniture & Appliance Stores</strong> – Many ship from US and handle delivery/installation (often cheaper than importing)</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Handyperson & Contractor Networks</strong> – Setup, assembly, installation of appliances and furniture in your new home</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Utility Connection Services</strong> – Arrange electricity, water, internet as part of moving coordination</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>House Cleaning & Preparation</strong> – Professional cleaning before your belongings arrive</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-xl border border-brand-100">
                        <p className="text-sm text-brand-700"><strong className="text-brand-TEAL">💡 Pro Tip:</strong> Time your move to close 3-4 weeks after your property purchase closes. This gives you time to arrange utilities, do any minor renovations, and coordinate mover delivery without paying rent elsewhere. Many new property owners buy locally in Panama rather than shipping furniture—compare total costs (shipping + duties + handling) against buying locally, especially for large items. Your real estate agent or lawyer can refer trusted movers and property setup companies that work with foreign buyers regularly.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Buy Property in Panama?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our team specializes in helping foreign buyers navigate the Panama real estate market. We can provide lawyer referrals, property search assistance, financing guidance, and due diligence support. Schedule a free consultation to discuss your specific situation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Property Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/how-to-move-to-panama-step-by-step-2026`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            How to Move Guide
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
