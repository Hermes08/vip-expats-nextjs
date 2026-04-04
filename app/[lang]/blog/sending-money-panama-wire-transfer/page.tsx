import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, Send, TrendingDown, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sending Money To and From Panama 2026: Wire Transfers, Apps & Best Rates',
    description:
        'Best ways to send money to Panama: Wise, bank wires, Western Union, PayPal. SWIFT codes, fees, timing. Receiving international transfers in Panama. Panama payment apps.',
    keywords:
        'wire transfer panama, send money panama, international transfer panama, panama banking, remit money panama, best rates panama transfers, SWIFT panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/sending-money-panama-wire-transfer',
    },
    openGraph: {
        title: 'Sending Money To and From Panama 2026: Wire Transfers, Apps & Best Rates',
        description:
            'Complete guide to international money transfers to/from Panama, fees, best platforms, and banking details.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/sending-money-panama-wire-transfer',
    },
};

const methodsUSToPA = [
    {
        method: 'WISE (formerly TransferWise)',
        fee: '$1–5 flat + real exchange rate (if needed)',
        timing: '1–3 business days',
        best: 'USD to Panama USD transfers (no conversion needed). Best rates overall.',
        pros: 'Cheapest for regular transfers. App-based. Transparent pricing. No hidden fees.',
        cons: 'Account setup takes 1–2 days. Requires online access.',
        setup: 'Create Wise account, link US bank, send to Panama bank account or Wise card.',
    },
    {
        method: 'Bank Wire Transfer (SWIFT)',
        fee: '$25–45 at US end + $15–25 Panama receiving fee',
        timing: '1–3 business days',
        best: 'Large amounts ($5,000+). Works from any US bank. Verified and secure.',
        pros: 'Works from any US bank. Large transfer capacity. Standard for business.',
        cons: 'Expensive. Slow. Bank fees on both ends.',
        setup: 'Get your Panama bank\'s SWIFT code and account number. Call US bank to initiate wire.',
    },
    {
        method: 'Zelle',
        fee: 'FREE (but limited to US-Panama partnerships)',
        timing: 'Minutes to hours',
        best: 'If your US bank + Panama bank have Zelle partnership (uncommon). Quick if available.',
        pros: 'Free. Instant. Simple.',
        cons: 'Limited availability. Most Panama banks don\'t participate. Transfer limits.',
        setup: 'Both US and Panama banks must have Zelle. Check with your banks first.',
    },
    {
        method: 'Western Union / MoneyGram',
        fee: '3–5% + flat fee ($3–10)',
        timing: 'Minutes to hours',
        best: 'Cash pickup. No Panama bank account needed. Available everywhere in Panama.',
        pros: 'Available at El Rey supermarket, farmacias, money exchanges. No bank account needed.',
        cons: 'Higher fees than Wise. Less transparent. Harder to track.',
        setup: 'Walk into WU location, initiate transfer online or by phone. Receiver picks up cash.',
    },
    {
        method: 'PayPal',
        fee: '2.9% + $0.30',
        timing: '2–5 business days to bank account',
        best: 'If both parties have PayPal. Okay for small to medium amounts ($100–$5,000).',
        pros: 'Easy setup. Works globally. Good for informal transfers.',
        cons: 'Fees higher than Wise. Can take 5 days to hit bank account.',
        setup: 'Create PayPal account, link US bank, send to Panama PayPal account or bank.',
    },
    {
        method: 'Remitly',
        fee: '$0–5 depending on tier',
        timing: '2–5 business days',
        best: 'Regular pension/retirement income transfers. Competitive rates for expats.',
        pros: 'Good rates for recurring transfers. App-based. Customer service friendly.',
        cons: 'Slightly higher than Wise for one-time transfers. Transfer limits.',
        setup: 'Create Remitly account, link US bank, send to Panama bank account.',
    },
];

const panamaLocalApps = [
    {
        app: 'YAPPY',
        type: 'Panama\'s Venmo/Zelle equivalent',
        purpose: 'Send money between Panama bank accounts instantly, FREE',
        users: 'Almost everyone in Panama has Yappy',
        use: 'Pay local vendors, plumber, housekeeper, taxi driver, utilities. No cash needed.',
        availability: 'Links to Banistmo, BAC, Multibank, and other Panama banks',
    },
];

const panamaSwiftCodes = [
    { bank: 'Banistmo', swift: 'BQISPAAP' },
    { bank: 'BAC Credomatic', swift: 'BACCPAPA' },
    { bank: 'Global Bank', swift: 'GLBKPAPA' },
    { bank: 'Multibank', swift: 'MBKGPAPA' },
    { bank: 'Citibank Panama', swift: 'CITIPAPT' },
    { bank: 'Scotiabank Panama', swift: 'SCTIPAPT' },
];

const costComparison = [
    {
        method: 'Wise',
        amount: '$1,000 transfer',
        totalCost: '$2–5',
        speed: '1–3 days',
        pros: 'Cheapest option',
    },
    {
        method: 'Bank Wire',
        amount: '$1,000 transfer',
        totalCost: '$40–70',
        speed: '2–3 days',
        pros: 'Verified, secure',
    },
    {
        method: 'Western Union',
        amount: '$1,000 transfer',
        totalCost: '$35–50',
        speed: 'Minutes',
        pros: 'Cash pickup',
    },
    {
        method: 'PayPal',
        amount: '$1,000 transfer',
        totalCost: '$29.30',
        speed: '2–5 days',
        pros: 'Okay for amounts under $5k',
    },
    {
        method: 'Remitly',
        amount: '$1,000 transfer',
        totalCost: '$3–8',
        speed: '2–5 days',
        pros: 'Good for regular transfers',
    },
];

const faqs = [
    {
        q: 'Why is Panama different for sending money?',
        a: 'Panama uses the US Dollar (USD) as official currency, pegged 1:1 to the US dollar. This means if you\'re sending from the USA to Panama, there\'s NO currency conversion needed. You send $1,000 USD and the receiver gets $1,000 USD. This simplifies things hugely compared to sending to Mexico (pesos), Colombia (pesos), or Costa Rica (colones), where you deal with forex conversion and risk.',
    },
    {
        q: 'What\'s the cheapest way to send money to Panama?',
        a: 'Wise (TransferWise) is cheapest for regular transfers. Fee is typically $1–5 flat with no hidden charges. For one-time bank wires, the cost is $40–70 total (painful but necessary for large transfers). For very small amounts, PayPal is acceptable at 2.9% + $0.30.',
    },
    {
        q: 'How do I open a Panama bank account as a foreigner?',
        a: 'This has become more complex since 2019 (FATCA/KYC compliance). You can open an account with: 1) A local attorney\'s help ($500–$1,500 fee), 2) An existing client referral (friend/family already at the bank), 3) Direct application with proof of income (varies by bank). Banistmo, BAC, and Multibank are most expat-friendly. Expect 2–4 weeks.',
    },
    {
        q: 'What information do I need to receive a wire to Panama?',
        a: 'Provide these to the sender: Your full name (as on bank account), Panama bank account number, Bank name, Bank\'s SWIFT code (e.g., BQISPAAP for Banistmo), Panama bank address, Your ID/passport number.',
    },
    {
        q: 'How long do international transfers to Panama take?',
        a: 'Wire transfers (SWIFT): 1–3 business days typical. Wise: 1–3 business days. PayPal: 2–5 business days (sometimes longer). Western Union/MoneyGram: Minutes to hours. Always add 1 day for US banking delays.',
    },
    {
        q: 'What happens if I send money to the wrong Panama bank account?',
        a: 'It depends on the system. SWIFT wires are verified, so if the account number is slightly wrong, the wire may be rejected or returned. Wise is very good about catching errors. Always double-check account number, SWIFT code, and recipient name. If money goes to wrong account, contact the bank IMMEDIATELY — recoverable but slow process.',
    },
    {
        q: 'Can I send money from Panama to the USA?',
        a: 'Yes. Same methods in reverse. Wise works both ways. Wire from Panama bank to US bank: $20–40 fee, 2–5 days. PayPal Panama account to US account: Works well. Remitly: Works. Western Union: Available but less ideal for returning to USA (more common for Latin America).',
    },
    {
        q: 'Is there a limit to how much I can send?',
        a: 'Depends on method and your account history. Wise: $50,000+ possible (gradually increase from new account). Bank wire: Typically $100,000+ per transaction. PayPal: $10,000/month. Remitly: $10,000+ per transaction. Western Union: $2,500–$10,000 per transaction depending on location. New accounts have lower limits.',
    },
];

export default async function SendingMoneyPanamaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
                        alt="Money transfers to Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        BANKING & FINANCE GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Sending Money To & From<br />Panama 2026
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Complete guide to wire transfers, international payment apps, fees, timing, and the cheapest ways to move money in and out of Panama.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro & Why Panama is Different */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama is unique: The country uses the US Dollar as official currency, pegged 1:1 to the USD. This eliminates forex complexity and risk.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        If you're sending from the USA to Panama, you send $1,000 USD and the receiver gets $1,000 USD — zero currency conversion, zero exchange rate risk. This is a massive advantage over sending to Mexico (pesos), Colombia (pesos), or Costa Rica (colones), where every transfer involves currency conversion and volatility.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This guide covers the best methods (Wise, bank wires, PayPal, Western Union), fees, timing, and how to set up Panama bank accounts for receiving transfers. Whether you're relocating, sending retirement income, or maintaining finances across borders, you'll find practical details here.
                    </p>
                </section>

                {/* USD Advantage */}
                <section className="reveal-on-scroll bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                    <h2 className="text-white text-2xl font-heading font-bold mb-4">Why Panama's USD System Matters</h2>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-brand-950">For Americans:</strong> Zero forex conversion needed. Your US bank sends $1,000 USD. It arrives as $1,000 USD in Panama. No "conversion fees," no "exchange rate margins," no waking up to a lower amount because the peso devalued overnight.
                        </p>
                        <p>
                            <strong className="text-brand-950">For Canadians & other currencies:</strong> You convert CAD/EUR/etc to USD once, then USD to Panama USD (1:1). Simpler than most countries.
                        </p>
                        <p>
                            <strong className="text-brand-950">For predictability:</strong> No currency volatility risk. Your pension of $2,000/month USD in the USA = $2,000/month in Panama, always.
                        </p>
                        <p>
                            <strong className="text-brand-950">For expats:</strong> You can keep finances in USD on both sides. No need to convert to local currency like you'd do in Mexico or Colombia.
                        </p>
                    </div>
                </section>

                {/* Methods USA to Panama */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Send className="inline text-brand-GOLD mr-2" size={28} />
                        Best Ways to Send Money from USA to Panama
                    </h2>
                    <div className="space-y-6">
                        {methodsUSToPA.map((method, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-2xl font-heading font-bold text-brand-950 mb-3">{method.method}</h3>
                                <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Fee</p>
                                        <p className="text-slate-700">{method.fee}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Timing</p>
                                        <p className="text-slate-700">{method.timing}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Best For</p>
                                        <p className="text-slate-700">{method.best}</p>
                                    </div>
                                </div>
                                <div className="space-y-2 text-slate-700 text-sm">
                                    <p><strong>Pros:</strong> {method.pros}</p>
                                    <p><strong>Cons:</strong> {method.cons}</p>
                                    <p><strong>Setup:</strong> {method.setup}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Receiving Wires */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <CheckCircle className="inline text-brand-GOLD mr-2" size={28} />
                        How to Receive International Wires in Panama
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-4">Information You Need to Provide</h3>
                            <p className="text-slate-700 mb-4">When someone sends you an international wire, provide them with these details:</p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">•</span>
                                    <span><strong>Your Full Name:</strong> Exactly as it appears on your bank account</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">•</span>
                                    <span><strong>Panama Bank Account Number:</strong> Your account number with the receiving bank</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">•</span>
                                    <span><strong>Bank Name:</strong> Full name of your Panama bank (e.g., "Banistmo," "BAC Credomatic")</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">•</span>
                                    <span><strong>Bank SWIFT Code:</strong> 8–11 character code identifying the bank (see table below)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">•</span>
                                    <span><strong>Bank Address:</strong> Physical address of your bank's main branch in Panama City</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">•</span>
                                    <span><strong>Your Identification:</strong> Passport number or Panama ID number</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-4">Panama Bank SWIFT Codes (Common)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-brand-950 text-white">
                                            <th className="px-4 py-2 text-left font-bold">Bank Name</th>
                                            <th className="px-4 py-2 text-left font-bold">SWIFT Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {panamaSwiftCodes.map((code, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                                <td className="border border-brand-100 px-4 py-2 font-semibold">{code.bank}</td>
                                                <td className="border border-brand-100 px-4 py-2 font-mono text-brand-600">{code.swift}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-slate-600 text-sm mt-4 italic">
                                Tip: Call your Panama bank and ask for the correct SWIFT code and bank address for wire receiving. Banks sometimes have multiple SWIFT codes for different divisions.
                            </p>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-4">Expected Fees & Timing</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>• <strong>Incoming wire fee:</strong> Panama bank charges $15–25 (deducted from amount received)</li>
                                <li>• <strong>Timing:</strong> 1–3 business days typical (sometimes up to 5 with weekend delays)</li>
                                <li>• <strong>What you receive:</strong> Original amount minus Panama receiving fee. Always clarify this with sender.</li>
                                <li>• <strong>Reference number:</strong> Ask sender for wire reference number ("SWIFT number") to track. Use this if wire is delayed.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Panama to USA */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Send className="inline text-brand-GOLD mr-2" size={28} />
                        Sending Money FROM Panama to USA
                    </h2>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <p className="text-slate-700 text-lg leading-relaxed mb-6">
                            Sending money from Panama to the USA is straightforward since both countries use USD. Here are your options:
                        </p>
                        <div className="space-y-4 text-slate-700">
                            <div className="border-l-4 border-brand-GOLD pl-4">
                                <p className="font-bold text-brand-950 mb-1">Wire from Panama Bank to US Bank</p>
                                <p className="text-sm">Fee: $20–40 at Panama end. Timing: 2–5 business days. Your Panama bank initiates via SWIFT to US bank.</p>
                            </div>
                            <div className="border-l-4 border-brand-GOLD pl-4">
                                <p className="font-bold text-brand-950 mb-1">Wise (Reverse)</p>
                                <p className="text-sm">Fee: $2–5. Timing: 1–3 days. Works both directions. Same as USA→Panama process, just reversed.</p>
                            </div>
                            <div className="border-l-4 border-brand-GOLD pl-4">
                                <p className="font-bold text-brand-950 mb-1">PayPal Panama Account to US Account</p>
                                <p className="text-sm">Fee: 2.9% + $0.30. Timing: 2–5 days to US bank. Works well for personal transfers.</p>
                            </div>
                            <div className="border-l-4 border-brand-GOLD pl-4">
                                <p className="font-bold text-brand-950 mb-1">Remitly</p>
                                <p className="text-sm">Fee: $3–8. Timing: 2–5 days. Good for regular transfers (retirement, pension, income).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local Apps */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Panama's Local Payment Apps
                    </h2>
                    <div className="space-y-6">
                        {panamaLocalApps.map((app, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                                <h3 className="text-2xl font-heading font-bold text-brand-950 mb-2">{app.app}</h3>
                                <p className="text-brand-600 font-semibold mb-4">{app.type}</p>
                                <div className="space-y-3 text-slate-700">
                                    <div>
                                        <p className="font-bold text-brand-950 text-sm uppercase mb-1">Purpose</p>
                                        <p>{app.purpose}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-sm uppercase mb-1">Who Uses It</p>
                                        <p>{app.users}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-sm uppercase mb-1">Real Use Cases</p>
                                        <p>{app.use}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-sm uppercase mb-1">Available At</p>
                                        <p>{app.availability}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <h4 className="text-lg font-heading font-bold text-brand-950 mb-3">Why YAPPY Matters for Daily Life</h4>
                        <p className="text-slate-700 mb-4">
                            Once you have a Panama bank account and a Yappy app, you can pay for almost everything locally without cash:
                        </p>
                        <ul className="space-y-2 text-slate-700 text-sm">
                            <li>• Pay your housekeeper or maid electronically (no cash)</li>
                            <li>• Pay the plumber, electrician, or local vendor</li>
                            <li>• Split restaurant bills with friends</li>
                            <li>• Pay utilities and services</li>
                            <li>• Transfer money to family or friends in Panama instantly</li>
                            <li>• No bank fees (completely free)</li>
                            <li>• Instant (real-time transfer)</li>
                        </ul>
                    </div>
                </section>

                {/* Cost Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingDown className="inline text-brand-GOLD mr-2" size={28} />
                        Cost Comparison: Methods for $1,000 Transfer
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-brand-950 text-white">
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Method</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Total Cost</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Speed</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Key Advantage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparison.map((comp, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        <td className="border border-brand-100 px-4 py-3 font-semibold text-brand-950">{comp.method}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-green-700 font-bold">{comp.totalCost}</td>
                                        <td className="border border-brand-100 px-4 py-3">{comp.speed}</td>
                                        <td className="border border-brand-100 px-4 py-3">{comp.pros}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-600 text-sm mt-4 italic">
                        Recommendation: For regular transfers, use Wise. For one-time transfers under $5,000, PayPal is acceptable. For large amounts or business, use bank wire.
                    </p>
                </section>

                {/* FAQs */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <HelpCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-lg font-heading font-bold text-brand-950 mb-3">{faq.q}</h3>
                                <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pro Tips */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Pro Tips for Expat Money Management
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                            <p className="text-slate-700"><strong className="text-brand-950">Set up Wise immediately:</strong> Create a Wise account before you move. It takes 1–2 days to verify, and having it ready saves stress. You can even get a Wise debit card for instant local spending.</p>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                            <p className="text-slate-700"><strong className="text-brand-950">Keep receipts and documentation:</strong> Every wire, transfer, and fee. Helps with taxes and provides proof if disputes arise.</p>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                            <p className="text-slate-700"><strong className="text-brand-950">Double-check account details:</strong> Before sending, verify: account number, SWIFT code, recipient name. Typos can cause delays or misdirection.</p>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                            <p className="text-slate-700"><strong className="text-brand-950">Plan ahead for monthly income:</strong> If you receive pension or retirement income monthly, set up automatic transfers via Wise or Remitly ahead of time. Reduces stress.</p>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                            <p className="text-slate-700"><strong className="text-brand-950">Understand tax reporting:</strong> Large transfers to Panama may trigger US tax reporting requirements (FBAR, FATCA). Consult a tax professional if receiving significant income. (Not financial advice — seek professional counsel.)</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-950 rounded-lg p-12 text-center">
                    <h2 className="text-white text-3xl font-heading font-bold mb-4">Ready to Set Up Your Panama Banking?</h2>
                    <p className="text-brand-300 text-lg mb-8">
                        Our team can help connect you with Panama banks and guide you through account setup and money transfer logistics.
                    </p>
                    <Link
                        href={`/${lang}/contacto`}
                        className="inline-block bg-brand-GOLD text-brand-950 font-heading font-bold py-4 px-8 rounded-lg hover:bg-brand-GOLD/90 transition"
                    >
                        Get Banking Support
                    </Link>
                </section>

            </div>
        </article>
    );
}
