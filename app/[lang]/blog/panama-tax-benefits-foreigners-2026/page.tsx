import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign, TrendingUp, Shield, FileText, HelpCircle } from 'lucide-react';
import { CostBarChart } from '@/components/three/ThreeComponents';


const taxBurdenData = [
    { label: 'USA (fed+state avg)', value: 38, color: '#e05555' },
    { label: 'Germany', value: 45, color: '#e07744' },
    { label: 'Canada', value: 33, color: '#d4884a' },
    { label: 'UK', value: 35, color: '#e09040' },
    { label: 'Costa Rica', value: 22, color: '#4aab8a' },
    { label: 'Panama (foreign income)', value: 0, color: '#00C5CB' },
];

export const metadata: Metadata = {
    title: 'Panama Tax Benefits for Foreigners 2026: Zero Tax on Foreign Income Explained',
    description:
        'Panama taxes ONLY income earned inside Panama. Foreign income (pensions, dividends, rental income, Social Security) is 100% tax-free. Full guide for American expats in 2026.',
    keywords:
        'panama tax benefits foreigners, panama tax for expats, panama income tax foreigners, panama territorial tax, panama no foreign income tax, panama vs usa taxes, offshore panama 2026',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-tax-benefits-foreigners-2026',
    },
    openGraph: {
        title: 'Panama Tax Benefits for Foreigners 2026: Zero Tax on Foreign Income',
        description:
            'Discover how Panama\'s territorial tax system provides 100% tax-free foreign income for expats. Pensions, dividends, Social Security — all tax-free.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-tax-benefits-foreigners-2026',
    },
};

const taxFreeIncome = [
    { item: 'US Social Security Benefits', icon: '✓', detail: 'Regardless of amount — all monthly benefits are 100% tax-free in Panama' },
    { item: 'US Pension / 401(k) / IRA Distributions', icon: '✓', detail: 'All distributions from qualified retirement accounts are tax-free in Panama' },
    { item: 'Dividends from US Stocks', icon: '✓', detail: 'Capital dividends, qualified dividends — Panama does not tax these' },
    { item: 'Rental Income from US Property', icon: '✓', detail: 'Own a rental property in the US? Panama does not tax that income' },
    { item: 'Interest from Foreign Banks', icon: '✓', detail: 'Savings accounts, CDs, bonds held abroad — all interest is tax-free' },
    { item: 'Capital Gains from Foreign Assets', icon: '✓', detail: 'Sell stocks, crypto, or property outside Panama — zero tax' },
    { item: 'German / EU Pension Income', icon: '✓', detail: 'European pensions are treated identically to US pensions — tax-free' },
    { item: 'Business Income from Clients Outside Panama', icon: '✓', detail: 'Freelancers, consultants with overseas clients — Panama does not tax that revenue' },
];

const pensionadoBenefits = [
    { benefit: '50% Off Healthcare', detail: 'Doctor visits, hospital procedures, diagnostic imaging — 50% discount at private hospitals nationwide' },
    { benefit: '50% Off Dentistry', detail: 'Dental work including implants, crowns, and orthodontics — 50% reduction' },
    { benefit: '25% Off Utilities', detail: 'Electricity, water, internet, phone — automatic 25% discount on monthly bills' },
    { benefit: 'Free University Admission', detail: 'Audit university courses at state universities at no cost' },
    { benefit: 'No Import Tax on Household Goods', detail: 'First shipment of personal household items — zero import duties' },
    { benefit: 'No Import Duty on One Car Every 2 Years', detail: 'Bring one vehicle into Panama tax-free every two years' },
    { benefit: '15% Off Airfare', detail: 'Domestic and some international flights via Copa Airlines' },
    { benefit: '10% Off Entertainment', detail: 'Movie tickets, concerts, cultural events — automatic discount' },
];

const panamaCorporateTools = [
    { structure: 'Sociedad Anónima (S.A.)', use: 'Operating businesses, holding companies, investment vehicles', taxBenefit: 'No tax on foreign-source income; only Panamanian-source income taxed at 0-25%' },
    { structure: 'Fundación de Interés Privado', use: 'Estate planning, asset protection, generational wealth transfers', taxBenefit: 'Entity-level assets protected; used extensively by high-net-worth families' },
    { structure: 'International Business Company (IBC)', use: 'Offshore investment structures', taxBenefit: 'No Panama taxes on offshore activities' },
];

const usVsPanamaComparison = [
    { item: 'Federal Income Tax (single, $80K/yr)', usa: '12% (~$9,600)', panama: '$0 (foreign-source)' },
    { item: 'Social Security Benefits Tax', usa: 'Up to 85% taxable', panama: '0% (100% tax-free)' },
    { item: 'Long-term Capital Gains (15% rate)', usa: '15% (~$3,000 per $20K gain)', panama: '$0 (foreign assets)' },
    { item: 'Qualified Dividend Tax', usa: '15–20% (~$1,500 per $10K)', panama: '$0' },
    { item: 'Property Tax (hypothetical $500K home)', usa: '$3,000–$8,000/yr (varies by state)', panama: '$0–$1,000/yr' },
    { item: 'Pension/IRA Distribution Tax', usa: '10–37% (ordinary income rates)', panama: '$0' },
];

const realExamples = [
    {
        title: 'Retired Couple: $4,000/month Social Security + Pension',
        income: '$4,000/mo SS + $2,000/mo pension = $72,000/year',
        usaTax: 'Florida: $0 (SS exempt, pension depends on source) | New York: ~$4,000–$8,000 | California: ~$2,000–$5,000',
        panamaTax: '$0 (100% territorial)',
        savings: '$3,000–$8,000/year',
    },
    {
        title: 'Investor: $200K/year in Dividend & Interest Income',
        income: '$200K/year (long-term dividends, bond interest, stock gains)',
        usaTax: '$30,000–$42,000 (federal 15-20% cap gains + state taxes)',
        panamaTax: '$0 (100% tax-free)',
        savings: '$30,000–$42,000/year',
    },
    {
        title: 'Remote Worker: $80K/year from US Clients',
        income: '$80,000/year from US-based clients (freelance)',
        usaTax: 'Self-employment tax (~15.3%) + income tax (12%) = ~$21,000 | Total: ~$21,000–$25,000',
        panamaTax: '$0 (foreign-source income) — but must pay self-employment taxes to USA (applies to US citizens)',
        savings: 'Income tax savings only: ~$9,000–$10,000/year',
    },
];

const taxResidencySteps = [
    { step: '1', action: 'Obtain a Panama Visa', detail: 'Pensionado (income-based), Investor, or other residence visa category. This establishes legal status.' },
    { step: '2', action: 'Register for Panama Cedula', detail: 'The cedula is your Panama national ID number. Required for banking, property ownership, and tax residency.' },
    { step: '3', action: 'Establish Tax Domicile', detail: 'Maintain a residence, open a bank account, and establish financial ties to Panama. Typically requires spending 180+ days/year.' },
    { step: '4', action: 'Notify Your Home Country', detail: 'If a US citizen: file Form 8854 to establish your tax residency change. Report your foreign domicile to the IRS.' },
    { step: '5', action: 'File Panama Tax Returns (if applicable)', detail: 'If earning Panama-source income, file annual tax returns. If only foreign-source: no Panama tax return needed.' },
];

const faqItems = [
    {
        q: 'Do I have to pay Panama income tax on my Social Security or pension?',
        a: 'No. Panama is a territorial tax system — it only taxes income earned within Panama. Pensions and Social Security from the USA are 100% tax-free.',
    },
    {
        q: 'I am a US citizen. Do I still owe taxes to the IRS?',
        a: 'Yes. US citizens are taxed on worldwide income by the IRS, regardless of where they live. However, you can claim the Foreign Earned Income Exclusion (FEIE, ~$126,500 in 2026) and Foreign Tax Credits to offset your tax burden. Since Panama uses territorial taxation, you typically owe no Panama tax, and the FEIE or credits can eliminate most US tax owed.',
    },
    {
        q: 'What if I work for a Panamanian company?',
        a: 'If your income is from a Panamanian employer (Panama-source income), you are subject to Panama income tax rates: 0–25% depending on annual income level. This is very different from foreign-source income.',
    },
    {
        q: 'Is Panama on any international blacklist or FATCA-restricted?',
        a: 'No. Panama has signed FATCA agreements with the USA and is compliant with OECD standards. US citizens can open bank accounts in Panama without difficulty. Panama is a legitimate jurisdiction for tax residency.',
    },
    {
        q: 'Can I establish a Panama corporation to avoid taxes?',
        a: 'Yes, but only for foreign-source income. A Panamanian S.A. corporation is not taxed on offshore income — but this does not help US citizens (who are still liable to the IRS). For wealth management, asset protection, and estate planning, Panama structures are powerful. Consult a tax attorney for your specific situation.',
    },
];

export default async function PanamaTaxBenefitsForeignersPage({ params }: { params: Promise<{ lang: string }> }) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1554224311-beee415c15c9?w=1600&q=80"
                        alt="Panama Tax Benefits"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        TAX & LEGAL · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Panama Tax Benefits:<br />The Complete 2026 Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Territorial taxation system means ZERO tax on foreign income. Here&apos;s exactly how it works for American expats, retirees, and investors.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama&apos;s territorial tax system is the #1 reason high-net-worth individuals, retirees, and digital nomads choose Panama. Unlike almost every other country in the world, Panama does not tax income earned outside of Panama&apos;s borders.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Your Social Security benefits? Tax-free. Your US pension? Tax-free. Dividends from your stock portfolio? Tax-free. Rental income from US property? Tax-free. This is not tax avoidance — this is legitimate territorial taxation, fully recognized by the IRS and compliant with international tax treaties.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        If you are planning to move to Panama or considering tax-efficient wealth management, understanding this system can save you tens of thousands of dollars annually. Here is the complete breakdown.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '0%', label: 'Tax on foreign-source income' },
                            { stat: '100%', label: 'Of pensions tax-free' },
                            { stat: '$0', label: 'Tax on overseas dividends' },
                            { stat: '50%', label: 'Healthcare discount (Pensionado)' },
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-50 rounded-2xl p-5 text-center border border-brand-100">
                                <div className="text-2xl font-black text-brand-GOLD mb-1">{s.stat}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What is Territorial Taxation */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        What Is Territorial Taxation?
                    </h2>
                    <div className="card-light rounded-2xl p-8 border border-brand-100 mb-6">
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Most countries use a <strong>worldwide taxation system</strong>: if you are a citizen or resident, you owe tax on income from anywhere on Earth — even if you never earn a peso in that country.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Panama uses a <strong>territorial taxation system</strong>: you only owe tax on income earned <strong>within Panama&apos;s borders</strong>. Income from foreign sources — regardless of amount — is not subject to Panama tax.
                        </p>
                        <div className="bg-brand-50 rounded-xl p-6 border-l-4 border-brand-GOLD">
                            <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Example:</p>
                            <p className="text-brand-950 text-sm leading-relaxed">
                                You are a Panama resident earning $200,000/year in dividends from US stocks. In a worldwide tax system, you would owe 15–20% tax (~$30,000–$40,000). In Panama, you owe $0 because the income source is outside Panama.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3D Tax Comparison Chart */}
                <CostBarChart
                    data={taxBurdenData}
                    title="Tax Burden on $200K Foreign Income: Panama vs Worldwide"
                    subtitle="Effective income tax rate (%) on foreign-source income"
                    height="270px"
                />

                {/* Tax-Free Income */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <CheckCircle className="inline text-brand-GOLD mr-2" size={28} />
                        What Income Is Tax-Free in Panama?
                    </h2>
                    <div className="space-y-3">
                        {taxFreeIncome.map((income, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100 flex items-start gap-4">
                                <div className="text-brand-GOLD font-black text-2xl flex-shrink-0 w-8">{income.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-sm mb-1">{income.item}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">{income.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
                        <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Key Takeaway:</p>
                        <p className="text-brand-950 text-sm leading-relaxed">
                            If your income comes from outside Panama — regardless of source or amount — you pay $0 in Panama tax. This applies equally to retirees on fixed incomes and investors managing six-figure portfolios.
                        </p>
                    </div>
                </section>

                {/* Pensionado Benefits */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Shield className="inline text-brand-GOLD mr-2" size={28} />
                        Panama Pensionado Visa Benefits
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        The Pensionado visa is available to retirees with as little as $1,000/month of guaranteed foreign income. Beyond zero tax, it unlocks extraordinary lifestyle benefits:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {pensionadoBenefits.map((perk, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">{perk.benefit}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{perk.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 bg-brand-GOLD/10 rounded-2xl p-8 border border-brand-GOLD/30">
                        <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Real-World Impact:</p>
                        <p className="text-brand-950 text-sm leading-relaxed">
                            A couple on Social Security could easily save $8,000–$15,000 annually just from the 25% utility discount and 50% healthcare savings. Add that to zero income tax, and your cost of living drops by 40–50% compared to the USA.
                        </p>
                    </div>
                </section>

                {/* Corporate Structures */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <FileText className="inline text-brand-GOLD mr-2" size={28} />
                        Panama Corporate Tax & Wealth Structures
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        For investors and business owners, Panama offers sophisticated structures specifically designed for wealth management:
                    </p>
                    <div className="space-y-5">
                        {panamaCorporateTools.map((corp, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <h3 className="text-xl font-heading font-bold text-brand-950 mb-3">{corp.structure}</h3>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-brand-GOLD font-bold text-xs uppercase tracking-widest">Primary Use:</span>
                                        <p className="text-slate-500 text-sm mt-1">{corp.use}</p>
                                    </div>
                                    <div>
                                        <span className="text-brand-GOLD font-bold text-xs uppercase tracking-widest">Tax Benefit:</span>
                                        <p className="text-slate-500 text-sm mt-1">{corp.taxBenefit}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Panama Property Tax */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Panama Property Tax
                    </h2>
                    <div className="space-y-6">
                        <div className="card-light rounded-2xl p-8 border border-brand-100">
                            <h3 className="text-white font-bold text-lg mb-4">Annual Property Tax Rates:</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-start border-b border-brand-100/30 pb-3">
                                    <div>
                                        <p className="text-slate-400 font-bold">Primary Residence</p>
                                        <p className="text-slate-600 text-xs mt-1">First $120,000 of registered value</p>
                                    </div>
                                    <p className="text-brand-GOLD font-black text-xl">0%</p>
                                </div>
                                <div className="flex justify-between items-start border-b border-brand-100/30 pb-3">
                                    <div>
                                        <p className="text-slate-400 font-bold">Excess Value (Primary Residence)</p>
                                        <p className="text-slate-600 text-xs mt-1">Above $120,000</p>
                                    </div>
                                    <p className="text-brand-GOLD font-black text-xl">0.5%</p>
                                </div>
                                <div className="flex justify-between items-start border-b border-brand-100/30 pb-3">
                                    <div>
                                        <p className="text-slate-400 font-bold">Investment / Second Property</p>
                                        <p className="text-slate-600 text-xs mt-1">All values</p>
                                    </div>
                                    <p className="text-brand-GOLD font-black text-xl">0.5–1%</p>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-slate-400 font-bold">New Construction</p>
                                        <p className="text-slate-600 text-xs mt-1">Many exempt for 10–20 years</p>
                                    </div>
                                    <p className="text-brand-GOLD font-black text-xl">0%*</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
                            <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Comparison:</p>
                            <p className="text-brand-950 text-sm leading-relaxed mb-4">
                                A $500K primary residence in Panama costs approximately $1,900/year in property tax (0.38%). The same property in Florida would cost $5,000–$8,000/year. In California, $12,000–$15,000/year.
                            </p>
                            <p className="text-brand-950 text-sm leading-relaxed">
                                Over a 10-year ownership period, Panama property tax savings can exceed $50,000–$100,000 per property.
                            </p>
                        </div>
                    </div>
                </section>

                {/* US Citizen Tax Obligations */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Are You Still Subject to US Taxes?
                    </h2>
                    <div className="card-light rounded-2xl p-8 border border-brand-100 mb-6">
                        <p className="text-slate-400 text-lg leading-relaxed mb-6 font-bold">
                            YES — if you are a US citizen or permanent resident, the IRS taxes your worldwide income, regardless of where you live.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            However, several mechanisms offset or eliminate most of this tax:
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="card-light rounded-2xl p-7 border border-brand-100">
                            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">Foreign Earned Income Exclusion (FEIE)</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                If you earn money by working (not passive income like dividends), you can exclude up to ~$126,500 (2026) from US taxable income. This applies to freelancers, consultants, and remote workers.
                            </p>
                            <div className="bg-brand-50/50 rounded-lg p-4 text-brand-950 text-xs leading-relaxed">
                                Example: Remote worker earning $80K/year from US clients. Using FEIE, $0 federal income tax owed on that $80K. Panama also taxes $0 (foreign-source). Net tax: $0.
                            </div>
                        </div>

                        <div className="card-light rounded-2xl p-7 border border-brand-100">
                            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">Foreign Tax Credit (FTC)</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                If you pay taxes to another country, you can credit them against US tax owed. Since Panama uses territorial taxation, you typically pay $0 Panama tax on foreign-source income, so FTC is often not needed — but it still applies.
                            </p>
                        </div>

                        <div className="card-light rounded-2xl p-7 border border-brand-100">
                            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">Panama-US Tax Treaty (None)</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                Interestingly, Panama and the USA have no income tax treaty. This means both countries can tax the same income — but because Panama is territorial, it usually doesn't. You are not double-taxed.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-brand-GOLD/10 rounded-2xl p-8 border border-brand-GOLD/30">
                        <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Bottom Line for US Citizens:</p>
                        <p className="text-brand-950 text-sm leading-relaxed">
                            Yes, you owe taxes to the IRS. But Panama&apos;s territorial system means you owe $0 to Panama. Combined with FEIE, Foreign Tax Credits, and careful planning, many US expats in Panama reduce their total tax burden by 30–70% compared to living in the USA.
                        </p>
                    </div>
                </section>

                {/* Panama vs USA Tax Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Panama vs USA: Tax Comparison
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">USA Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usVsPanamaComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold text-brand-GOLD">{row.panama}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.usa}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Real Examples */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Real Examples: How Much Do Expats Save?
                    </h2>
                    <div className="space-y-5">
                        {realExamples.map((example, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">{example.title}</h3>
                                <div className="space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-brand-100/30 pb-3">
                                        <span className="text-brand-GOLD font-bold text-xs uppercase tracking-widest">Annual Income:</span>
                                        <span className="text-slate-400 text-sm font-bold">{example.income}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-brand-100/30 pb-3">
                                        <span className="text-brand-GOLD font-bold text-xs uppercase tracking-widest">USA Tax (est):</span>
                                        <span className="text-slate-400 text-sm">{example.usaTax}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-brand-100/30 pb-3">
                                        <span className="text-brand-GOLD font-bold text-xs uppercase tracking-widest">Panama Tax:</span>
                                        <span className="text-slate-400 text-sm font-bold text-brand-GOLD">{example.panamaTax}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start bg-brand-50/50 p-3 rounded-lg">
                                        <span className="text-brand-950 font-bold text-xs uppercase tracking-widest">Annual Tax Savings:</span>
                                        <span className="text-brand-GOLD font-black text-lg">{example.savings}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* When You Pay Panama Tax */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        When DO You Pay Panama Tax?
                    </h2>
                    <div className="card-light rounded-2xl p-8 border border-brand-100 mb-6">
                        <p className="text-slate-400 text-lg leading-relaxed">
                            You only pay Panama income tax if you earn money from a Panama-source. This includes:
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {[
                            'Salary from a Panamanian employer or business',
                            'Income from a business operating in Panama',
                            'Rental income from property located in Panama',
                            'Interest from a bank account in Panama',
                            'Income from self-employment services performed in Panama',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 card-light rounded-xl p-5 border border-brand-100">
                                <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <p className="text-slate-500 text-xs leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="card-light rounded-2xl p-8 border border-brand-100">
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Panama Income Tax Rates (If Applicable)</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-brand-100">
                                        <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-2 pr-3">Annual Income</th>
                                        <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-2 px-3">Tax Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { range: 'Up to $11,000', rate: '0%' },
                                        { range: '$11,001 – $50,000', rate: '5–15%' },
                                        { range: '$50,001 – $120,000', rate: '15–25%' },
                                        { range: 'Above $120,000', rate: '25%' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-brand-100">
                                            <td className="text-slate-500 text-xs py-2 pr-3">{row.range}</td>
                                            <td className="text-slate-700 text-xs py-2 px-3 font-bold text-brand-GOLD">{row.rate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Bank Secrecy & FATCA */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Shield className="inline text-brand-GOLD mr-2" size={28} />
                        Bank Secrecy & FATCA: What You Need to Know
                    </h2>
                    <div className="space-y-5">
                        <div className="card-light rounded-2xl p-7 border border-brand-100">
                            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">Panama Signed FATCA</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Panama has an agreement with the US Foreign Account Tax Compliance Act (FATCA). This means US citizens cannot hide money in Panama banks — accounts are reported to the IRS. The days of Panama as a secretive banking haven are long over.
                            </p>
                        </div>

                        <div className="card-light rounded-2xl p-7 border border-brand-100">
                            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">OECD Compliance</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Panama is compliant with OECD standards and has not been on any international financial blacklist. It is a legitimate jurisdiction for banking, wealth management, and tax residency.
                            </p>
                        </div>

                        <div className="card-light rounded-2xl p-7 border border-brand-100">
                            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">US Citizens Can Bank Normally</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Despite FATCA, US citizens can open bank accounts in Panama without issue. Major banks like Banistmo, BAC, and others serve the expat community. You will need to report accounts on FBAR and FATCA forms, but that is separate from Panama taxation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tax Residency */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        How to Establish Tax Residency in Panama
                    </h2>
                    <div className="space-y-3">
                        {taxResidencySteps.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-8 h-8 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-xs">{step.step}</span>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm mb-1 uppercase tracking-wide">{step.action}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{step.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <HelpCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <details key={i} className="card-light rounded-xl border border-brand-100 group">
                                <summary className="flex items-center justify-between cursor-pointer p-6">
                                    <h3 className="text-white font-bold text-sm leading-relaxed pr-4">{item.q}</h3>
                                    <span className="text-brand-GOLD font-black text-xl flex-shrink-0">+</span>
                                </summary>
                                <div className="px-6 pb-6 border-t border-brand-100/30">
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Consult Our Tax & Legal Specialists
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Every situation is unique. Our Panama tax attorneys and relocation consultants can review your specific income sources, visa options, and optimal tax strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Free Tax Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/relocation/legal"
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Learn About Visa Options
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Panama Cost of Living 2026', href: '/en/blog/panama-cost-of-living-2026' },
                        { label: 'Retire in Panama: Complete Guide', href: '/en/blog/retire-in-panama' },
                        { label: 'Panama Pensionado Visa Explained', href: '/en/blog/panama-pensionado-visa' },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-between card-light p-4 rounded-xl border border-brand-100 hover:border-brand-GOLD/30 transition-all group"
                        >
                            <span className="text-white text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    );
}
