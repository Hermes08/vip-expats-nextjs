import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, TrendingUp, Globe, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Panama Golden Visa 2026: Complete Investment Residency Guide | Panama Real Estate Sale',
  description: 'The definitive 2026 guide to the Panama Golden Visa (Qualified Investor Visa). Learn the $300k–$500k investment requirements, benefits, and how to secure Panama residency by investment.',
  keywords: 'panama golden visa 2026, panama investment visa, residency by investment panama, qualified investor visa panama, panama residency requirements 2026',
};

const benefits = [
  'Permanent residency with a path to citizenship after 5 years',
  'No minimum stay requirements to maintain residency status',
  'Include spouse and dependents under 25 in one application',
  "Access to Panama's Pensionado benefits upon reaching retirement age",
  'Travel to 140+ countries with a Panamanian passport',
  'Zero personal income tax on all foreign-sourced income',
  "Access to Panama's stable, fully dollarized economy",
];

const investmentTiers = [
  {
    label: 'Real Estate (Restricted Zones)',
    amount: '$300,000',
    note: 'Purchase of titled real estate in restricted coastal or border areas — the most sought-after luxury locations.',
    icon: Building2,
  },
  {
    label: 'Real Estate (General)',
    amount: '$500,000',
    note: 'Purchase of titled real estate anywhere else in Panama, including Panama City central.',
    icon: Building2,
  },
  {
    label: 'Stock Exchange Investment',
    amount: '$500,000',
    note: 'Investment in securities listed and regulated by the Panama Stock Exchange.',
    icon: TrendingUp,
  },
  {
    label: 'Fixed-Term Bank Deposit',
    amount: '$750,000',
    note: 'Fixed-term deposit held at a Panamanian bank for a minimum of 3 years.',
    icon: Shield,
  },
];

export default function PanamaGoldenVisa2026() {
  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-brand-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=1600&q=80"
            alt="Panama City Skyline at Night"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
            INVESTMENT RESIDENCY · UPDATED 2026
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            The Panama Golden Visa: Your 2026 Investment Residency Guide
          </h1>
          <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
            How a single strategic investment unlocks permanent Panama residency, territorial tax freedom, and a sovereign lifestyle just 2.5 hours from Miami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <div className="prose prose-lg text-brand-600 max-w-none space-y-10">

          <p className="lead text-2xl font-semibold text-brand-900 border-l-4 border-brand-GOLD pl-6">
            While the term &ldquo;Golden Visa&rdquo; is associated with European programs, Panama has long operated its own — the <strong>Qualified Investor Visa</strong> — that is perhaps more powerful, more affordable, and more strategically located than any European equivalent.
          </p>

          <h2 className="text-brand-900 text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
            What Is the Panama Golden Visa?
          </h2>
          <p>
            Panama&apos;s <strong>Qualified Investor Visa</strong> (Visa de Inversionista Calificado) is the official residency-by-investment program. It grants permanent residency to foreign nationals who make a qualifying economic investment in Panama, with no prior connection to the country required — no language test, no extensive background checks, just a valid investment and clean criminal record.
          </p>
          <p>
            In <strong>2026</strong>, this program remains one of the most straightforward pathways to <strong>Panama residency by investment</strong> in the world. Unlike Portugal and Spain, which dramatically curtailed their Golden Visa programs in 2023–2024, Panama has remained a consistent, stable, and investor-friendly jurisdiction.
          </p>

          {/* Investment Tiers */}
          <div className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-100 not-prose my-16 shadow-inner">
            <h3 className="text-2xl font-bold text-brand-900 mb-8 uppercase italic text-center">
              2026 Qualifying Investment Tiers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {investmentTiers.map((tier, i) => {
                const Icon = tier.icon;
                return (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-900 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-brand-GOLD" />
                      </div>
                      <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">{tier.label}</span>
                    </div>
                    <div className="text-3xl font-black text-brand-900">{tier.amount}</div>
                    <p className="text-slate-500 text-sm leading-relaxed">{tier.note}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-slate-400 text-xs mt-8">
              Requirements governed by Law 54 of 1998 and subsequent executive decrees. Consult a licensed Panamanian immigration attorney for your case.
            </p>
          </div>

          <h2 className="text-brand-900 text-2xl font-heading font-bold mt-12 mb-6 flex items-center gap-3">
            <Globe className="text-brand-GOLD" /> Why Panama Over Portugal or Spain?
          </h2>
          <p>
            Portugal&apos;s Golden Visa program, once the gold standard for investment residency, was dramatically curtailed in 2023 — eliminating real estate as a qualifying asset in Lisbon, Porto, and the Algarve. Spain followed in 2024. Panama, by contrast, has remained <strong>consistently open and welcoming to foreign investors</strong>, with clear, stable rules underpinned by Law 54 of 1998.
          </p>
          <p>
            Beyond policy stability, Panama offers decisive strategic advantages: a <strong>US dollar-based economy</strong> that eliminates exchange rate risk for American investors, zero personal income tax on all foreign-sourced income (territorial tax system), and geographical proximity to the US — just 2.5 hours from Miami, 5 hours from New York.
          </p>

          <h2 className="text-brand-900 text-2xl font-heading font-bold mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="text-brand-GOLD" /> Benefits of Panama Residency by Investment
          </h2>
          <ul className="space-y-4 not-prose">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle size={20} className="text-brand-GOLD mt-1 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-brand-900 text-2xl font-heading font-bold mt-12 mb-6 flex items-center gap-3">
            <TrendingUp className="text-brand-GOLD" /> Real Estate: The $300k Path That Pays for Itself
          </h2>
          <p>
            The most popular route for our clients is the <strong>$300,000 real estate investment in restricted zones</strong>. Panama&apos;s Pacific coast, Bocas del Toro archipelago, and eastern border regions qualify as restricted coastal zones — and they happen to be the most desirable locations for luxury condos, beachfront villas, and boutique resort properties.
          </p>
          <p>
            Unlike a bank deposit, real estate delivers <strong>dual ROI</strong>: a path to permanent residency <em>and</em> a tangible asset. Prime Panama real estate has appreciated 5–8% annually in recent years, while generating gross rental yields of 6–10% during periods when you are not in residence.
          </p>

          {/* CTA */}
          <div className="bg-brand-950 p-10 rounded-3xl mt-16 not-prose text-center border-t-4 border-brand-GOLD">
            <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
              Begin Your Panama Residency Journey
            </h3>
            <p className="text-brand-300 mb-8 max-w-xl mx-auto">
              Our team connects qualified investors with the right properties and the right immigration attorneys. Book a private consultation and let us architect your path to Panama permanent residency.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
            >
              Book a Private Consultation <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
