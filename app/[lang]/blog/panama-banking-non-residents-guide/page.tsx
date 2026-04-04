import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign, Lock, FileText, AlertCircle, TrendingUp, CreditCard } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


export const metadata: Metadata = {
    title: 'Panama Banking for Non-Residents 2026: Open Account, Services Guide',
    description: 'Banking in Panama as non-resident. Open bank account, services, digital banking, minimum deposits.',
    keywords: 'Panama banking, bank account Panama, banking services Panama, non-resident banking Panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-banking-non-residents-guide',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-banking-non-residents-guide',
            'es': 'https://panamarealestatesale.com/es/blog/panama-banking-non-residents-guide',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-banking-non-residents-guide',
            'de': 'https://panamarealestatesale.com/de/blog/panama-banking-non-residents-guide',
        },
    },
    openGraph: {
        title: 'Panama Banking for Non-Residents 2026: Open Account, Services Guide',
        description: 'Banking in Panama as non-resident. Open bank account, services, digital banking, minimum deposits.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-banking-non-residents-guide',
        images: [{ url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80', width: 1200, height: 630, alt: 'Banking in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama Banking for Non-Residents 2026: Open Account, Services Guide',
        description: 'Banking in Panama as non-resident. Open bank account, services, digital banking, minimum deposits.',
        images: ['https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80'],
    },
};

const banksInfo = [
    {
        name: 'Banistmo (Bancolombia)',
        opens: 'Tourists and non-residents',
        minimum: '$500 – $1,000',
        ease: '⭐⭐⭐⭐⭐ Easiest',
        highlights: 'Most expat-friendly. Opens accounts for tourists without residency. Requires: passport, proof of income, 2 reference letters. Online banking solid. Large ATM network.',
        timeframe: '3–7 days after in-person visit',
    },
    {
        name: 'BAC Credomatic',
        opens: 'Friendly Nations visa holders preferred',
        minimum: '$1,000',
        ease: '⭐⭐⭐⭐ Easy',
        highlights: 'Accepts non-residents with Friendly Nations visa. Good for Central American nationals. Requires documentation showing income source. Online banking app good.',
        timeframe: '5–10 days',
    },
    {
        name: 'Multibank',
        opens: 'Investors and high-net-worth individuals',
        minimum: '$5,000 – $10,000',
        ease: '⭐⭐⭐ Moderate',
        highlights: 'More flexible for non-resident investors. Higher minimum balance. Requires strong documentation. Business accounts easier than personal.',
        timeframe: '7–14 days',
    },
    {
        name: 'Bancolombia Panama',
        opens: 'Colombian nationals and history',
        minimum: '$2,000',
        ease: '⭐⭐⭐ Moderate',
        highlights: 'Best for Colombian passport holders or those with Colombian bank history. Can work for other nationalities with strong docs. Competitive rates.',
        timeframe: '7–10 days',
    },
    {
        name: 'Global Bank',
        opens: 'Residents preferred',
        minimum: '$3,000',
        ease: '⭐⭐ Difficult',
        highlights: 'Conservative, prefers residents. Possible for non-residents with excellent documentation. Requires corporate/investment context often.',
        timeframe: '14–21 days',
    },
    {
        name: 'Scotia Bank Panama',
        opens: 'Business accounts',
        minimum: '$5,000',
        ease: '⭐⭐ Difficult',
        highlights: 'Better for business accounts than personal. Requires strong documentation. Bureaucratic process. Better for those with existing ScotiaBank relationship.',
        timeframe: '14–21 days',
    },
];

const requiredDocs = [
    {
        doc: 'Valid Passport',
        details: 'Original or certified copy. Must be valid for at least 6 months beyond account opening date.',
    },
    {
        doc: 'Secondary ID',
        details: 'Driver\'s license from home country, national ID, or similar. Copy is fine.',
    },
    {
        doc: 'Proof of Income',
        details: 'Last 3–6 months bank statements from your home country bank, recent pay stubs, tax returns (last 2 years), or pension documentation.',
    },
    {
        doc: 'Proof of Address (Home Country)',
        details: 'Utility bill (electricity, water, gas), bank statement, or government letter showing your home address. Must be recent (within 3 months).',
    },
    {
        doc: 'Reference Letters',
        details: '2–3 letters from your existing bank or professional references (accountant, lawyer, business associates) confirming your financial standing and character.',
    },
    {
        doc: 'Source of Funds Letter',
        details: 'Brief written explanation of where your money comes from (salary, rental income, business, inheritance, etc.). 1–2 paragraphs is fine.',
    },
    {
        doc: 'Corporate Documents (If Applicable)',
        details: 'If business account: Articles of Incorporation, Certificate of Good Standing, EIN letter, corporate tax returns, beneficial ownership declaration.',
    },
];

const fees = [
    { item: 'Monthly Account Maintenance', cost: '$5 – $25/month', notes: 'Banistmo: $0–10. Multibank: $15–25. Often waived if balance above $5k.' },
    { item: 'Wire Transfer (Incoming)', cost: '$0 – $15', notes: 'Most banks: free. Some charge nominal fee.' },
    { item: 'Wire Transfer (Outgoing)', cost: '$15 – $45', notes: 'USA transfers: $25–40. International: $30–45.' },
    { item: 'ATM Withdrawal', cost: '$0 – $5 per withdrawal', notes: 'Banistmo network: mostly free. Others: $2–5 per foreign ATM use.' },
    { item: 'Overdraft Fee', cost: '$25 – $50', notes: 'If account goes negative.' },
    { item: 'Inactive Account', cost: '$0 – $10/month', notes: 'Fee applied if no activity for 6–12 months.' },
    { item: 'Check Book', cost: '$5 – $15', notes: 'Per pad. Checks still used in Panama for some transactions.' },
    { item: 'Card Replacement', cost: '$0 – $10', notes: 'Usually free first card, nominal fee for replacement.' },
];

const tipsList = [
    { tip: 'Visit the bank in person', why: 'Mail-in and online applications from non-residents rarely succeed. A 1–2 hour visit to the branch makes all the difference. Dress professionally.' },
    { tip: 'Bring MORE documents than required', why: 'Over-documentation signals serious intent and gives the bank confidence. Bring 3 reference letters instead of 2, 6 months of statements instead of 3.' },
    { tip: 'Have a Panama lawyer', why: 'A letter from a registered Panama abogado confirming you\'re establishing residency/investing carries weight. Many banks require this. Costs $200–500 for a letter.' },
    { tip: 'Explain your purpose clearly', why: 'State exactly why you\'re opening the account: "I\'m investing in Panama real estate," "I\'m relocating," "I need USD currency exposure." Banks want to know your intent.' },
    { tip: 'Show stable income', why: 'Banks fear money laundering. Proof of consistent, documented income (W-2s, business returns, pension statements) is your best selling point.' },
    { tip: 'Be prepared for AML questions', why: 'Banks ask detailed questions about your funds\' origin (USA regulation). Have clear answers: "My income is from [employer/business]," "I\'m saving for property purchase," etc.' },
    { tip: 'Open during business hours', why: 'Go Monday–Friday, 8am–3pm. Avoid Fridays (staff leaves early). Come with original documents and all copies ready to submit same-day.' },
    { tip: 'Follow up actively', why: 'Banks move slowly. Call after 3 days, check status after a week. Get a direct contact (phone/email) at the bank. Persistence often speeds approval.' },
];

const whyPanama = [
    { title: 'USD Currency — No Forex Risk', desc: 'Panama uses the US Dollar. Your deposits are in USD, no currency conversion. Ideal if you want USD exposure or are planning Panama investments.' },
    { title: 'Zero Capital Gains Tax for Foreigners', desc: 'Foreigners pay 0% capital gains tax on bank interest. Your interest earnings grow tax-free (for non-residents).' },
    { title: 'Offshore Privacy & Stability', desc: 'Panama is known for banking privacy and stable, modern banking infrastructure. Good for international investors.' },
    { title: 'Easy Wire Transfers', desc: 'SWIFT transfers to/from USA are straightforward. No special restrictions. Daily limits depend on your account type.' },
    { title: 'Multiple Bank Options', desc: 'Unlike some countries, Panama has competing banks actively seeking foreign deposits. You have leverage in negotiating terms.' },
    { title: 'Territorial Tax System', desc: 'If you become a resident, income sourced outside Panama is tax-free. Your Panama bank account complements this strategy.' },
];

const faqItems = [
    {
        q: 'Can I open a bank account in Panama online without visiting?',
        a: 'Unlikely for non-residents. Banks require an in-person visit to verify identity and sign documents. Plan a 1–2 week trip to Panama to open the account. Some banks are exploring digital onboarding, but this is rare as of 2026.',
    },
    {
        q: 'How long does it take to open a Panama bank account?',
        a: 'Typically 3–14 days after your visit. Banistmo (easiest): 3–7 days. Multibank/Bancolombia: 7–10 days. Global Bank/Scotia: 14–21 days. You\'ll receive login credentials via email once approved.',
    },
    {
        q: 'What\'s the minimum deposit to open an account?',
        a: 'Ranges from $500 (Banistmo for non-residents) to $10,000 (Multibank for investors). Most banks: $1,000–2,000 for non-residents. This becomes your first deposit and opening balance.',
    },
    {
        q: 'Can I use my Panama bank account for online shopping from the USA?',
        a: 'Partially. You\'ll get a Visa debit card usable worldwide. However, some US merchants flag Panama-issued cards as "foreign." Expect occasional friction, but it generally works. Credit card is harder to get as a non-resident.',
    },
    {
        q: 'What are the daily/monthly wire transfer limits?',
        a: 'Varies by bank. Banistmo non-residents: typically $5,000–10,000 per day. Higher limits available with residency or larger account balance. Ask your specific bank about limits when opening account.',
    },
    {
        q: 'Will the US IRS track my Panama bank account?',
        a: 'Yes. As a US citizen, you must report all foreign accounts over $10,000 to the US Treasury (FBAR). Panama banks report account holders to the IRS under FATCA. Be compliant — hiding accounts is serious.',
    },
    {
        q: 'Can I get a credit card as a non-resident?',
        a: 'Difficult. Most banks require residency for credit cards. You\'ll easily get a debit card. Credit cards are typically issued to residents after 6–12 months of account history.',
    },
    {
        q: 'What documents do I need if I have a company (not personal account)?',
        a: 'Business accounts require: company registration documents (Articles of Incorporation, Good Standing Certificate), EIN or tax ID, corporate tax returns (2 years), beneficial ownership declaration, and director IDs. Process is similar to personal but slightly more scrutiny on fund sources.',
    },
];

const comparisonRow = [
    { location: 'Panama (Banistmo)', minBalance: '$500', maintenanceFee: '$0–10/mo', wireOut: '$25–35', ease: 'Very Easy', taxSituation: 'Territorial (0% on foreign income if resident)' },
    { location: 'USA (Traditional)', minBalance: '$300', maintenanceFee: '$10–25/mo', wireOut: '$25–50', ease: 'Easy', taxSituation: 'Fully taxed' },
    { location: 'Costa Rica', minBalance: '$1,000', maintenanceFee: '$20–40/mo', wireOut: '$30–50', ease: 'Moderate', taxSituation: 'Territorial (0% on foreign income)' },
    { location: 'Belize', minBalance: '$1,000', maintenanceFee: '$15–30/mo', wireOut: '$30–45', ease: 'Moderate', taxSituation: 'Territorial' },
];

const digitalBanking = [
    { app: 'Nequi Panama', type: 'Mobile Wallet/Payments', what: 'Digital wallet for Panamanian transactions. Simple transfers between individuals. Not ideal for international wire transfers but great for local payments.' },
    { app: 'Yappy', type: 'Mobile Money Platform', what: 'Popular among Panamanians for payments. Works with most banks. Useful for local spending but limited international functionality.' },
    { app: 'PayPal', type: 'International Payments', what: 'PayPal works in Panama. Can receive payments, transfer to bank account. Useful complement to traditional banking for digital entrepreneurs.' },
    { app: 'Wise (TransferWise)', type: 'International Transfers', what: 'Great for low-cost international wire transfers. Not a bank but excellent for moving money between countries efficiently.' },
];

export default async function PanamaBankingNonResidentsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
                        alt="Panama Banking"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        BANKING GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        How to Open a Bank<br />Account in Panama
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Step-by-step guide for non-residents. Which banks accept foreigners, required documents, insider approval tips, and why Panama banking is ideal for investors and digital nomads.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama's banking system is stable, modern, and open to foreigners. Non-residents can open USD accounts, receive international wire transfers, and access online banking from anywhere in the world — with a bit of preparation.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        The process has tightened since Panama faced FATF (Financial Action Task Force) scrutiny in the 2010s. But it's still very doable. This guide covers which banks accept non-residents, exact documents required, insider tips to improve approval odds, and comparison with other countries.
                    </p>
                </section>

                {/* Why Panama Banking */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Lock className="inline text-brand-GOLD mr-2" size={28} />
                        Why Panama Banking Makes Sense
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {whyPanama.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100 flex items-start gap-3">
                                <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{item.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Banks That Accept Non-Residents */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <CreditCard className="inline text-brand-GOLD mr-2" size={28} />
                        Which Banks Accept Non-Residents?
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Six major Panama banks have track records accepting non-resident accounts. All require in-person visits and documentation. Difficulty and speed vary significantly.
                    </p>
                    <div className="space-y-4">
                        {banksInfo.map((bank, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                                    <div>
                                        <h3 className="text-lg font-heading font-bold text-brand-950 mb-1">{bank.name}</h3>
                                        <div className="text-brand-GOLD text-xs font-black uppercase tracking-widest mb-2">{bank.opens}</div>
                                        <p className="text-slate-500 text-xs">{bank.ease}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-sm whitespace-nowrap">{bank.minimum}</div>
                                        <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Minimum Balance</div>
                                        <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest mt-2 pt-2 border-t border-brand-100">{bank.timeframe}</div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{bank.highlights}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D Scene */}
                <section className="reveal-on-scroll">
                    <div className="h-96 rounded-2xl overflow-hidden border border-brand-100 shadow-lg">
                        <PanamaCityScene />
                    </div>
                    <p className="text-slate-500 text-xs text-center mt-4">Panama's modern banking district in Panama City</p>
                </section>

                {/* Required Documents */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <FileText className="inline text-brand-GOLD mr-2" size={28} />
                        Exact Documents Required
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Every bank has slightly different requirements, but these seven documents cover 99% of what they'll ask for. Bring originals and copies of everything.
                    </p>
                    <div className="space-y-4">
                        {requiredDocs.map((doc, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                        <span className="text-brand-GOLD font-black text-xs">{i + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-brand-950 font-bold text-sm mb-1">{doc.doc}</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">{doc.details}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 mt-6">
                        <div className="flex gap-3 items-start">
                            <AlertCircle size={18} className="text-brand-GOLD mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-brand-950 font-bold text-sm mb-2">Pro Tip: Notarization</p>
                                <p className="text-slate-500 text-xs leading-relaxed">Get documents notarized by a US notary public before traveling to Panama. Banks trust notarized copies over plain originals. If traveling with originals, consider getting a Panama lawyer to certify them upon arrival ($200–300).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fees */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Panama Banking Fees (2026)
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Fee Type</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Cost</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fees.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{row.cost}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 text-xs mt-6 leading-relaxed italic">Note: Fees vary by bank and account type. Always ask for a complete fee schedule before opening. Some fees are waived for accounts with balance above $10k or for frequent account users.</p>
                </section>

                {/* Cost Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Panama Banking vs USA vs Central America
                    </h2>
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Metric</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">USA</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Costa Rica</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Belize</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRow.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.location}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{row.minBalance}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.maintenanceFee}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.wireOut}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.ease}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="h-96 rounded-2xl overflow-hidden border border-brand-100 shadow-lg">
                        <CostBarChart
                        data={[
                          { label: 'Banistmo', value: 500, color: '#00C5CB' },
                          { label: 'Multibank', value: 1000, color: '#00C5CB' },
                          { label: 'Bco General', value: 2000, color: '#D4A843' },
                          { label: 'US Bank avg', value: 1500, color: '#ef4444' },
                          { label: 'CR Bank avg', value: 800, color: '#8b5cf6' },
                        ]}
                        title="Minimum Balance Requirements ($)"
                      />
                    </div>
                    <p className="text-slate-500 text-xs text-center mt-4">Bank fees & minimum balances: Panama vs USA vs Central America</p>
                </section>

                {/* Insider Tips */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        8 Insider Tips to Get Approved
                    </h2>
                    <div className="space-y-4">
                        {tipsList.map((item, i) => (
                            <div key={i} className="flex items-start gap-5 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-10 h-10 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-sm">{i + 1}</span>
                                </div>
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{item.tip}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.why}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Digital Banking */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Digital Banking & Payments in Panama
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Beyond traditional banks, Panama has several digital payment platforms useful for different purposes:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {digitalBanking.map((service, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-bold mb-1">{service.app}</h3>
                                <p className="text-brand-GOLD text-xs font-black uppercase tracking-widest mb-2">{service.type}</p>
                                <p className="text-slate-500 text-xs leading-relaxed">{service.what}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Business Accounts */}
                <section className="reveal-on-scroll card-light rounded-2xl p-8 border border-brand-100">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic">
                        Opening a Business Account
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-4">
                        If you're opening a Panama S.A. (corporation) or need to hold business funds, business accounts are often easier to open than personal accounts for non-residents. Banks see business accounts as legitimate foreign investment vehicles.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            'Panama S.A. accounts easier for non-residents than personal',
                            'Typical minimum: $3,000–5,000',
                            'Requires: corporate docs (Articles, Good Standing cert, EIN/tax ID)',
                            'Corporate tax returns (2 years) to show business history',
                            'Beneficial ownership declaration (who controls funds)',
                            'Board resolution authorizing the signatory to open account',
                            'Director ID & personal proof of address for authorized signatory',
                            'Easier to increase wire limits with business account',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* AML & Compliance */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Anti-Money Laundering (AML) & FATCA Compliance
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Panama has tightened its banking standards under international pressure. Banks now conduct thorough due diligence on all non-residents. Understanding this process helps you navigate it successfully.
                    </p>
                    <div className="space-y-4">
                        {[
                            { title: 'Enhanced Due Diligence (EDD)', desc: 'Banks require detailed information on your income source, wealth origin, and intended account use. Be prepared with clear, documented answers. Vague responses trigger rejections.' },
                            { title: 'Customer Identification Program (CIP)', desc: 'Banks verify your identity via passport and cross-check against international databases. Ensure your passport is authentic and valid. No fake or altered documents.' },
                            { title: 'FATCA Reporting (for US Citizens)', desc: 'If US citizen/passport holder, banks report your account to the IRS. You must file FBAR (Foreign Bank Account Report) if total foreign accounts exceed $10,000. Failure to file triggers heavy penalties.' },
                            { title: 'Source of Funds Declaration', desc: 'Be specific. "Salary from [Company]," "Rental income from [Property]," "Business owner in [Industry]" — vague answers like "savings" often trigger requests for more documentation.' },
                            { title: 'Beneficial Ownership Verification', desc: 'If account is for a business entity, bank identifies who controls the funds. Directors, shareholders, or ultimate beneficial owners must be disclosed.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <details key={i} className="card-light rounded-xl border border-brand-100 p-6 group">
                                <summary className="text-white font-bold cursor-pointer flex items-center justify-between">
                                    {item.q}
                                    <span className="text-brand-GOLD group-open:rotate-180 transition-transform">
                                        <ArrowRight size={16} />
                                    </span>
                                </summary>
                                <p className="text-slate-500 text-sm leading-relaxed mt-4">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Timeline: Opening an Account Step-by-Step
                    </h2>
                    <div className="space-y-4">
                        {[
                            { step: 'Week -4', title: 'Prepare Documents', body: 'Gather all 7 documents. Get copies notarized by a US notary. Prepare reference letters from your bank. Schedule your Panama trip.' },
                            { step: 'Week -1', title: 'Plan Your Visit', body: 'Book flight to Panama (arrive Monday), hotel near banking district, car rental. Schedule bank appointments if possible via email. Aim for 2–3 bank visits.' },
                            { step: 'Day 1', title: 'Visit Bank 1 (Banistmo)', body: 'Dress professionally. Bring all originals and copies. Explain your purpose clearly. Expect 30–60 min meeting. Submit application same day if ready.' },
                            { step: 'Day 2', title: 'Visit Bank 2', body: 'If first bank unclear about approval, visit second option (BAC or Multibank). Application process similar.' },
                            { step: 'Days 3–5', title: 'Return Home & Wait', body: 'Bank processes documents. You\'ll receive updates via email. May request additional info (ask for 24-hour turnaround). Typical approval: 3–7 days from visit.' },
                            { step: 'Week 2', title: 'Receive Credentials', body: 'Bank emails online login details, card details (if approved). Set up mobile app. Fund account via wire transfer.' },
                            { step: 'Week 3+', title: 'Account Active', body: 'Account fully operational. You can send/receive wire transfers, use debit card worldwide, manage account online from home.' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-start gap-5 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-20 h-20 rounded-lg bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-xs text-center">{s.step}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm mb-1">{s.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Open Your Panama Bank Account?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our advisors can guide you through the process, connect you with banks, and help ensure your application succeeds. We've helped hundreds of investors and expats open Panama bank accounts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Get Banking Assistance <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/panama-real-estate-investments`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Real Estate Investment Guide
                        </Link>
                    </div>
                </section>

                {/* Related Links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Panama Residency Visas', href: `/${lang}/guides/panama-residency-visas` },
                        { label: 'Setting Up Business in Panama', href: `/${lang}/guides/business-setup-panama` },
                        { label: 'Real Estate Investment Guide', href: `/${lang}/blog/panama-real-estate-investments` },
                    ].map((link, i) => (
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
