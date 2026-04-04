import type { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, DollarSign, AlertTriangle, MapPin, TrendingDown, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Using ATMs and Cash in Panama 2026: Which ATMs Have Best Fees, Where to Get Dollars',
    description:
        'Complete ATM guide for Panama. Best ATM networks, lowest fees, where to find ATMs safely. How to minimize fees with Charles Schwab or Wise. Cash usage in Panama.',
    keywords:
        'atm panama, atm fees panama, withdraw cash panama, atm networks panama, charles schwab panama, best debit card panama, balance panama transfer',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/atm-cash-panama-guide',
    },
    openGraph: {
        title: 'Using ATMs and Cash in Panama 2026: Which ATMs Have Best Fees, Where to Get Dollars',
        description:
            'How to use ATMs in Panama with minimal fees, where to find them, currency information, and how to avoid charges with the right debit card.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/atm-cash-panama-guide',
    },
};

const atmNetworks = [
    {
        network: 'Banistmo ATMs',
        type: 'National',
        acceptance: 'Visa, Mastercard, Cirrus, Plus, ATH',
        availability: 'Thousands across Panama',
        fee: '$3–4 typical',
        notes: 'Most common ATM network. Usually lower fees than other networks.',
    },
    {
        network: 'BAC ATMs',
        type: 'National (Credomatic)',
        acceptance: 'Visa, Mastercard, Cirrus, Plus, ATH',
        availability: 'Large network',
        fee: '$3–5 typical',
        notes: 'Second-largest network. Reliable. Good availability in most neighborhoods.',
    },
    {
        network: 'Multibank ATMs',
        type: 'National',
        acceptance: 'Visa, Mastercard, Cirrus, Plus, ATH',
        availability: 'Good coverage',
        fee: '$3–4 typical',
        notes: 'Decent network. Fair fees.',
    },
    {
        network: 'Global Bank ATMs',
        type: 'National',
        acceptance: 'Visa, Mastercard, Cirrus, Plus',
        availability: 'Good coverage',
        fee: '$3–5 typical',
        notes: 'Solid alternative. Reliable machines.',
    },
    {
        network: 'Citibank ATMs',
        type: 'International',
        acceptance: 'Visa, Mastercard, Cirrus, Plus',
        availability: 'Limited but strategic',
        fee: '$4–5 (lower for Citibank cardholders)',
        notes: 'If you have Citibank account elsewhere, lower fees at Citibank ATMs globally.',
    },
    {
        network: 'Scotiabank ATMs',
        type: 'International',
        acceptance: 'Visa, Mastercard, Cirrus, Plus',
        availability: 'Limited but strategic',
        fee: '$3–4',
        notes: 'Often lower fees than other networks for Visa users.',
    },
];

const atmLocations = [
    {
        location: 'Bank Branches',
        banks: 'Banistmo, BAC, Multibank, Global Bank, Citibank, Scotiabank',
        access: '24/7 at many branches (indoor malls), or during business hours (street branches)',
        safety: 'Safest option — inside secure building',
        notes: 'Walk directly to ATM inside the bank building. No street loitering.',
    },
    {
        location: 'Shopping Malls',
        malls: 'Multiplaza, Altaplaza, Albrook Mall, Westland Mall, Caribbean Square, Galerías',
        access: '24/7 or until mall closes (usually 9–10 PM)',
        safety: 'Very safe — 24/7 security, controlled environment',
        notes: 'Multiple ATMs throughout mall. Safest place to withdraw after hours.',
    },
    {
        location: 'Supermarkets',
        chains: 'El Rey, Riba Smith',
        access: 'During store hours (typically 6 AM–11 PM)',
        safety: 'Safe — inside store, security present',
        notes: 'ATM at store entrance. Withdraw while shopping. Easy to move to other activities.',
    },
    {
        location: 'Tocumen Airport (Terminals)',
        description: 'Multiple ATMs in arrival and departure areas',
        access: '24/7',
        safety: 'Very safe — international terminal',
        notes: 'Withdraw USD on arrival before leaving airport. No delays getting cash. Convenient for travelers.',
    },
    {
        location: 'Street ATMs',
        description: 'Standalone ATMs on street corners',
        access: '24/7',
        safety: 'Lower safety profile',
        notes: 'Avoid late at night. Use during daylight. Not recommended as primary option.',
    },
];

const feeMinimizerCards = [
    {
        card: 'Charles Schwab High Yield Investor Checking',
        provider: 'Charles Schwab',
        atmFee: '$0 (Schwab reimburses ALL ATM fees worldwide)',
        otherFees: 'No monthly fee, no minimum balance',
        pros: 'Best option for Panama. ANY ATM fee worldwide is reimbursed. Opens checking from USA.',
        bestFor: 'Americans with US address. Only option if you want zero ATM fees.',
        setup: 'Open account online before moving. Takes 5–10 days.',
    },
    {
        card: 'Wise Debit Card',
        provider: 'Wise',
        atmFee: 'Free first 2 withdrawals/month, then $1.50/withdrawal',
        otherFees: 'No monthly fee, low foreign transaction fees',
        pros: 'Good alternative if you have Wise account. Holds USD balance. Low fees.',
        bestFor: 'Anyone with Wise account (most expats). Good secondary card.',
        setup: 'Create Wise account, order card. Available globally.',
    },
    {
        card: 'Revolut Debit Card',
        provider: 'Revolut',
        atmFee: '2 free ATM withdrawals/month, then $1/withdrawal',
        otherFees: 'No monthly fee, low foreign exchange fees',
        pros: 'Good for frequent travelers. Multi-currency. Low fees.',
        bestFor: 'Those wanting to hold multiple currencies. Good secondary card.',
        setup: 'Download Revolut app, verify identity. Available globally.',
    },
    {
        card: 'Standard Debit Card (from US bank)',
        provider: 'Any US bank (Chase, Wells Fargo, etc)',
        atmFee: '$3–5 per withdrawal (charged by Panama ATM)',
        otherFees: '$0–5 depending on bank',
        pros: 'Works everywhere. Familiar.',
        bestFor: "Only if you can't get Schwab or Wise. Expect to pay fees.",
        setup: 'Use whatever you have. But strongly recommend getting Schwab.',
    },
];

const cashUsage = [
    {
        scenario: 'Supermarket shopping',
        card: 'Yes, strongly preferred',
        cash: 'Optional (cards are standard)',
    },
    {
        scenario: 'Restaurant dining',
        card: 'Yes, standard for sit-down',
        cash: 'Optional (most accept cards)',
    },
    {
        scenario: 'Gas station fill-up',
        card: 'Yes, standard everywhere',
        cash: 'Optional',
    },
    {
        scenario: 'Local market / street food',
        card: 'Some vendors accept, but cash is safer',
        cash: 'Preferred',
    },
    {
        scenario: 'Taxi ride (street hail)',
        card: 'Sometimes. Uber always card.',
        cash: 'Preferred (negotiated before ride)',
    },
    {
        scenario: 'Pay housekeeper/maid',
        card: 'Yes (via Yappy/bank transfer)',
        cash: 'Old way (still acceptable)',
    },
    {
        scenario: 'Pay plumber/electrician (informal worker)',
        card: 'Yes (via Yappy if they have account)',
        cash: 'Traditional',
    },
    {
        scenario: 'Tip at restaurant',
        card: 'If paying with card, tip added to bill',
        cash: '10% cash tip on bill is standard',
    },
    {
        scenario: 'Tipping tour guide / taxi driver',
        card: 'Rarely accepted',
        cash: 'Expected ($5–10 USD typical)',
    },
];

const safetyTips = [
    {
        tip: 'Use ATMs during daylight when possible',
        details: 'Withdraw during 8 AM–6 PM when feasible. Night withdrawals at malls are acceptable. Avoid midnight street ATMs.',
    },
    {
        tip: 'Shield your PIN entry',
        details: 'Always cover the keypad with your hand. Look behind you before entering PIN. Standard precaution everywhere.',
    },
    {
        tip: 'Be aware of surroundings',
        details: 'If the area feels sketchy, don\'t use the ATM. Malls and supermarkets are safest. Bank branches (inside buildings) are very safe.',
    },
    {
        tip: 'Don\'t carry excessive cash',
        details: 'Withdraw what you need for 1–2 days. Don\'t walk around with $500 USD in your pocket. Cards are safer.',
    },
    {
        tip: 'Bank ATMs in buildings are safer than street ATMs',
        details: 'Walk into the bank building itself (not street ATM). You\'re inside a secure space.',
    },
    {
        tip: 'Avoid drawing attention',
        details: 'Don\'t stand at ATM counting large stacks of cash. Withdraw, pocket immediately, move on.',
    },
    {
        tip: 'Skip ATMs in sketchy neighborhoods late at night',
        details: 'If you\'re in El Chorrillo, San Blas, or unfamiliar areas after dark, use mall ATM instead.',
    },
];

const faqs = [
    {
        q: 'Is the Balboa different from the US Dollar?',
        a: 'No. Panama\'s official currency is the Balboa (PAB), but it\'s pegged 1:1 to the USD and physically interchangeable. In practice, Panamanians use US dollars everywhere. When you see prices in "balboas," it\'s the same as dollars. ATMs dispense USD. You don\'t need to convert or exchange anything.',
    },
    {
        q: 'Can I use my US debit card in Panama ATMs?',
        a: 'Yes. Your US Visa or Mastercard debit card will work in most Panama ATMs (Cirrus and Plus networks). However, you\'ll pay $3–5 per withdrawal. Get a Charles Schwab debit card before moving — it reimburses ALL ATM fees worldwide, effectively making your withdrawals free.',
    },
    {
        q: 'What\'s the maximum I can withdraw from an ATM?',
        a: 'Usually $300–600 per transaction, depending on the ATM and bank. Some limit you to $500/day total. You can withdraw multiple times to get more cash, but each transaction incurs a fee. Better strategy: withdraw larger amounts less frequently to minimize fees.',
    },
    {
        q: 'Do I need to notify my US bank before moving to Panama?',
        a: 'Yes. Call your US bank before traveling and inform them you\'re moving to Panama. This prevents "fraud blocks" when you use cards internationally. Most banks allow international use, but notifying them prevents hassles.',
    },
    {
        q: 'Is there a currency exchange fee when withdrawing from ATM?',
        a: 'No — if withdrawing USD from an ATM in Panama, there\'s no exchange (both sides are USD). The fee you pay is just the ATM fee charged by the Panama bank, not a currency conversion fee. This is another advantage of Panama\'s dollar economy.',
    },
    {
        q: 'What if an ATM takes my card?',
        a: 'ATMs occasionally retain cards if there\'s an issue (multiple wrong PIN attempts, malfunction, etc.). Call your US bank immediately. They can cancel the card and issue a replacement. Have a backup payment method (credit card, another card) in the meantime.',
    },
    {
        q: 'Can I use my credit card at ATMs?',
        a: 'No. ATMs require debit cards. Credit card cash advances at ATMs are possible but charge high fees + interest. Avoid this. Use debit card instead.',
    },
    {
        q: 'Is Panama expensive compared to USA/Mexico for cash withdrawal?',
        a: 'With a Charles Schwab card: Free (Schwab reimburses fees). With a standard card: $3–5 per withdrawal (comparable to or slightly cheaper than USA bank ATM fees). Much cheaper than Mexico or most countries.',
    },
];

export default async function ATMCashPanamaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1526487486765-1c3dd1f75e24?w=1600&q=80"
                        alt="ATM and cash in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        ATM & CASH GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Using ATMs & Cash<br />in Panama 2026
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Which ATM networks have lowest fees, where to find them safely, how to minimize charges, and how much cash you actually need in Panama.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro & USD Info */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama uses the US Dollar (USD) as its official currency, pegged 1:1 to the US dollar. This means you don't exchange money or deal with currency fluctuations — your US debit card works exactly like it would in the USA.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        ATMs are plentiful, reliable, and relatively cheap to use compared to other countries. The key is minimizing fees by using the right card (Charles Schwab reimburses all ATM fees worldwide) and finding safe ATM locations. This guide covers the best networks, lowest-fee options, where to find ATMs safely, and how much cash you actually need in Panama's economy.
                    </p>
                </section>

                {/* USD System */}
                <section className="reveal-on-scroll bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                    <h2 className="text-white text-2xl font-heading font-bold mb-4">Panama is 100% USD</h2>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-brand-950">Official Currency:</strong> The Balboa (PAB) is Panama's nominal currency, but it's pegged 1:1 to USD and physically identical in value. In practice, Panamanians use US dollars everywhere.
                        </p>
                        <p>
                            <strong className="text-brand-950">What You See:</strong> Prices are listed in "balboas" or "$" — but it's literally the same as US dollars. No conversion needed. $100 Balboa = $100 USD.
                        </p>
                        <p>
                            <strong className="text-brand-950">ATMs Dispense:</strong> US dollars, not any other currency. No currency exchange at ATMs.
                        </p>
                        <p>
                            <strong className="text-brand-950">Your US Card:</strong> Works identically to how it works in the USA. Swipe at supermarket, withdraw from ATM, pay for gas — exact same as USA, just in Panama.
                        </p>
                        <p>
                            <strong className="text-brand-950">For Non-Americans:</strong> Bring USD cash or withdraw from ATM. No local currency to exchange. Your foreign card (CAD, EUR, etc) will convert to USD at ATM (with exchange fee).</p>
                    </div>
                </section>

                {/* ATM Networks */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Landmark className="inline text-brand-GOLD mr-2" size={28} />
                        Major ATM Networks & Fees
                    </h2>
                    <div className="space-y-4 mb-6">
                        {atmNetworks.map((network, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-lg font-heading font-bold text-brand-950">{network.network}</h3>
                                        <p className="text-sm text-brand-600 font-semibold">{network.type}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-brand-GOLD font-bold text-lg">{network.fee}</p>
                                        <p className="text-xs text-slate-600">ATM fee</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Accepts</p>
                                        <p>{network.acceptance}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Availability</p>
                                        <p>{network.availability}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-700 mt-3"><strong>Notes:</strong> {network.notes}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <h4 className="text-lg font-heading font-bold text-brand-950 mb-3">Which Network is Best?</h4>
                        <p className="text-slate-700">
                            <strong>Banistmo</strong> has the most ATMs and typically the lowest fees ($3–4). If you're choosing a Panama bank account to open, Banistmo (Bancolombia) is the safest bet for ATM access.
                        </p>
                    </div>
                </section>

                {/* Where to Find ATMs */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Where to Find ATMs Safely
                    </h2>
                    <div className="space-y-6">
                        {atmLocations.map((loc, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-xl font-heading font-bold text-brand-950 mb-3">{loc.location}</h3>
                                {loc.banks && <p className="text-slate-700 mb-2"><strong>Banks/Places:</strong> {loc.banks}</p>}
                                {loc.malls && <p className="text-slate-700 mb-2"><strong>Malls:</strong> {loc.malls}</p>}
                                {loc.chains && <p className="text-slate-700 mb-2"><strong>Chains:</strong> {loc.chains}</p>}
                                {loc.description && <p className="text-slate-700 mb-2"><strong>Description:</strong> {loc.description}</p>}
                                <p className="text-slate-700 mb-2"><strong>Access:</strong> {loc.access}</p>
                                <p className="text-slate-700 mb-2"><strong>Safety:</strong> {loc.safety}</p>
                                <p className="text-slate-700"><strong>Notes:</strong> {loc.notes}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 bg-red-50 rounded-lg p-8 border-l-4 border-red-400">
                        <h4 className="text-lg font-heading font-bold text-red-900 mb-3">Safety Summary</h4>
                        <p className="text-red-800"><strong>Safest Option:</strong> Bank ATMs inside buildings (Banistmo, BAC, Multibank) or ATMs inside shopping malls.</p>
                        <p className="text-red-800 mt-2"><strong>Avoid:</strong> Street corner ATMs late at night. If in unfamiliar neighborhoods after dark, go to a mall instead.</p>
                    </div>
                </section>

                {/* Fee Minimizers */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingDown className="inline text-brand-GOLD mr-2" size={28} />
                        Best Cards for Minimizing ATM Fees
                    </h2>
                    <div className="space-y-6">
                        {feeMinimizerCards.map((card, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                                <h3 className="text-xl font-heading font-bold text-brand-950 mb-2">{card.card}</h3>
                                <p className="text-brand-600 font-semibold mb-4">by {card.provider}</p>
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="font-bold text-brand-950 text-sm uppercase mb-1">ATM Fee</p>
                                        <p className="text-slate-700">{card.atmFee}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-sm uppercase mb-1">Other Fees</p>
                                        <p className="text-slate-700">{card.otherFees}</p>
                                    </div>
                                </div>
                                <div className="space-y-2 text-slate-700 text-sm">
                                    <p><strong>Pros:</strong> {card.pros}</p>
                                    <p><strong>Best For:</strong> {card.bestFor}</p>
                                    <p><strong>Setup:</strong> {card.setup}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <h4 className="text-lg font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
                            <span className="text-2xl">⭐</span>
                            Top Recommendation: Charles Schwab
                        </h4>
                        <p className="text-slate-700 mb-3">
                            If you're moving to Panama from the USA, <strong>open a Charles Schwab High Yield Investor Checking account before you move.</strong>
                        </p>
                        <p className="text-slate-700">
                            This card reimburses <strong>ALL ATM fees worldwide</strong> — meaning every Panama ATM fee is refunded to your account. Your effective ATM cost is $0. This card literally pays for itself in Panama. Takes 5–10 days to open online from USA.
                        </p>
                    </div>
                </section>

                {/* Cash Economy */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Cash vs. Card Usage in Panama
                    </h2>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100 mb-6">
                        <p className="text-slate-700 text-lg leading-relaxed">
                            Panama is <strong>very card-friendly</strong>. Unlike some countries where cash is primary, Panama's middle and upper-class establishments accept cards everywhere. However, cash is still useful for informal workers and small vendors.
                        </p>
                    </div>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-brand-950 text-white">
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Scenario</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Card</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Cash</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cashUsage.map((usage, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        <td className="border border-brand-100 px-4 py-3 font-semibold text-brand-950">{usage.scenario}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{usage.card}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{usage.cash}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <h4 className="text-lg font-heading font-bold text-brand-950 mb-3">How Much Cash Do You Need?</h4>
                        <p className="text-slate-700 mb-4">
                            <strong>Daily:</strong> $30–50 USD is plenty for tipping, street food, small vendors, taxi negotiation.
                        </p>
                        <p className="text-slate-700 mb-4">
                            <strong>Weekly:</strong> $100–200 USD covers incidentals, tips, casual dining, informal service workers.
                        </p>
                        <p className="text-slate-700">
                            <strong>Strategy:</strong> Withdraw once per week or every other week to minimize ATM fees. Larger withdrawals mean fewer transactions = fewer fees = savings.
                        </p>
                    </div>
                </section>

                {/* Safety Tips */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertTriangle className="inline text-brand-GOLD mr-2" size={28} />
                        ATM Safety Tips
                    </h2>
                    <div className="space-y-4">
                        {safetyTips.map((tip, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                                <h3 className="text-lg font-heading font-bold text-brand-950 mb-2">{tip.tip}</h3>
                                <p className="text-slate-700">{tip.details}</p>
                            </div>
                        ))}
                    </div>
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

                {/* Summary */}
                <section className="reveal-on-scroll bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                    <h2 className="text-white text-2xl font-heading font-bold mb-4">Quick Summary</h2>
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex gap-3">
                            <span className="text-brand-GOLD font-bold">✓</span>
                            <span><strong>Get Charles Schwab card before moving:</strong> Reimburses all ATM fees. This alone saves you hundreds per year.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-brand-GOLD font-bold">✓</span>
                            <span><strong>ATM networks:</strong> Banistmo most common, lowest fees. Use bank ATMs inside buildings or mall ATMs for safety.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-brand-GOLD font-bold">✓</span>
                            <span><strong>Currency:</strong> Panama uses USD — no exchange needed, no conversion fees. Withdraw USD, use USD, done.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-brand-GOLD font-bold">✓</span>
                            <span><strong>How much cash:</strong> $30–50 daily, $100–200 weekly. Panama is very card-friendly otherwise.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-brand-GOLD font-bold">✓</span>
                            <span><strong>Safety:</strong> Bank ATMs and mall ATMs are very safe. Avoid street ATMs late at night. Overall, Panama ATM safety is good.</span>
                        </li>
                    </ul>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-950 rounded-lg p-12 text-center">
                    <h2 className="text-white text-3xl font-heading font-bold mb-4">Questions About Banking in Panama?</h2>
                    <p className="text-brand-300 text-lg mb-8">
                        Our team can help guide you through banking setup, card selection, and financial logistics for your move.
                    </p>
                    <Link
                        href={`/${lang}/contacto`}
                        className="inline-block bg-brand-GOLD text-brand-950 font-heading font-bold py-4 px-8 rounded-lg hover:bg-brand-GOLD/90 transition"
                    >
                        Get Financial Guidance
                    </Link>
                </section>

            </div>
        </article>
    );
}
