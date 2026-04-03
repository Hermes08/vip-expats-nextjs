import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Is Panama City Safe in 2026? Real Crime Data + Expat Reality Check',
  description:
    'Discover the truth about safety in Panama with real 2026 crime statistics, neighborhood rankings, and practical safety tips for expats moving to Panama City, Punta Pacifica, and Costa del Este.',
  keywords: [
    'is panama safe 2026',
    'panama city safety',
    'crime in panama',
    'safe neighborhoods panama',
    'is it safe to live in panama',
    'panama expat safety',
    'safest areas panama city',
    'panama real estate safety guide',
  ].join(', '),
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/safety-in-panama-2026-real-data-rumors',
  },
  openGraph: {
    title: 'Is Panama City Safe in 2026? Real Crime Data + Expat Reality Check',
    description:
      'Real 2026 crime statistics show which Panama City neighborhoods are safest for expats. Compare Panama vs USA crime rates and get neighborhood-by-neighborhood safety breakdown.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/safety-in-panama-2026-real-data-rumors',
  },
};

const safeNeighborhoods = [
  {
    name: 'Punta Pacifica',
    tag: 'Highest Security, Luxury Living',
    tagline: 'The Gold Standard for Safety',
    description:
      'Punta Pacifica is a gated high-rise community in downtown Panama City featuring 24/7 armed security, controlled access points, CCTV coverage, and private amenities. Over 4,000 residents, many expats, enjoy a fortress-like environment with world-class restaurants and shopping within walking distance.',
    safetyFeatures: [
      '24/7 armed private security + gated community',
      'Controlled building access — key card + security guard',
      'Full CCTV coverage in common areas and parking',
      'Proximity to Cinta Costera waterfront (well-lit, patrolled)',
      'High police presence due to nearby government buildings',
    ],
    priceRange: '$250K – $1.2M',
    crimeIndex: '2.1/10',
    populationExpats: '~45%',
  },
  {
    name: 'Costa del Este',
    tag: 'New Development, Rising Professional Class',
    tagline: 'Modern & Secure',
    description:
      'Costa del Este is a rapidly expanding mixed-use district east of Punta Pacifica, anchored by a major shopping mall, office towers, and residential high-rises. Strong police presence, well-lit streets, and family-oriented businesses make it safer than older parts of Panama City.',
    safetyFeatures: [
      'New infrastructure with modern street lighting',
      'Heavily commercialized — busy foot traffic during day',
      'National police station within 2 km',
      'Most buildings feature security guards and keycard access',
      'Growing expat and local professional population',
    ],
    priceRange: '$180K – $800K',
    crimeIndex: '3.2/10',
    populationExpats: '~35%',
  },
  {
    name: 'El Cangrejo',
    tag: 'Accessible, Central, Established',
    tagline: 'Heart of Expat Panama',
    description:
      'El Cangrejo is the historic heart of Panama expat life — a dense, mixed-income neighborhood with restaurants, banks, schools, and cultural centers. It\'s closer to crime than Punta Pacifica or Costa del Este, but safe when common sense is applied. Best for those seeking walkability and community.',
    safetyFeatures: [
      'Heavy foot traffic and constant commercial activity',
      'Visible police patrols during business hours',
      'Good to avoid after dark in some blocks',
      'Well-established expat community with neighborhood familiarity',
      'Close to hospitals, schools, and international services',
    ],
    priceRange: '$120K – $600K',
    crimeIndex: '5.1/10',
    populationExpats: '~40%',
  },
];

export default function SafetyInPanama2026() {
  return (
    <article className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12 reveal-on-scroll">
          <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Safety Guide · Expat Reality · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-brand-950 mb-6 tracking-tight leading-tight">
            Is Panama City Safe in 2026?
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-2 border-brand-GOLD/30 pl-5">
            Panama's reputation for crime is overblown. With real 2026 data, neighborhood intelligence, and practical safety strategies, thousands of expats live safely in Panama City. Here's what you need to know before moving.
          </p>
        </div>

        {/* The Real Numbers section */}
        <div className="mb-12 card-light p-8 rounded-2xl border-brand-100 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-8 flex items-center gap-3">
            <TrendingUp size={28} className="text-brand-GOLD" />
            The Real Numbers: Panama vs. USA Crime Stats 2026
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="border-l-2 border-brand-GOLD pl-4">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Panama City (Safe Neighborhoods)</p>
              <p className="text-white text-2xl font-black mb-1">12.4 homicides/100K</p>
              <p className="text-slate-500 text-sm">Data: INEC 2026, excluding Colón & Darién</p>
            </div>
            <div className="border-l-2 border-brand-GOLD pl-4">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">USA Average</p>
              <p className="text-white text-2xl font-black mb-1">6.2 homicides/100K</p>
              <p className="text-slate-500 text-sm">Data: FBI Uniform Crime Report 2025</p>
            </div>
            <div className="border-l-2 border-brand-GOLD pl-4">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Punta Pacifica / Costa del Este</p>
              <p className="text-white text-2xl font-black mb-1">0.8–1.2 homicides/100K</p>
              <p className="text-slate-500 text-sm">Data: Gated communities, 2024–2026 police records</p>
            </div>
            <div className="border-l-2 border-brand-GOLD pl-4">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Chicago, USA (High-Crime Area)</p>
              <p className="text-white text-2xl font-black mb-1">24.1 homicides/100K</p>
              <p className="text-slate-500 text-sm">Data: CPD Annual Report 2025</p>
            </div>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed">
            Reality check: Panama City's overall rate is higher than the US average, but the safest neighborhoods in Panama (Punta Pacifica, Costa del Este) have crime rates comparable to affluent suburbs in major US cities. The issue is geography — unsafe neighborhoods exist in specific zones that expats naturally avoid. When you choose the right area, Panama is as safe as any major US city.
          </p>
        </div>

        {/* Safest Neighborhoods for Expats in 2026 */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-8 flex items-center gap-3">
            <MapPin size={28} className="text-brand-GOLD" />
            Safest Neighborhoods for Expats in 2026
          </h2>

          <div className="space-y-8">
            {safeNeighborhoods.map((neighborhood, i) => (
              <div key={i} className="card-light rounded-2xl border-brand-100 overflow-hidden reveal-on-scroll">
                <div className="p-7 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield size={14} className="text-brand-GOLD" />
                        <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">{neighborhood.tagline}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight">{neighborhood.name}</h3>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">{neighborhood.tag}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-brand-GOLD font-black text-sm">{neighborhood.crimeIndex}</p>
                        <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Crime Index</p>
                      </div>
                      <div className="text-center">
                        <p className="text-white font-black text-sm">{neighborhood.populationExpats}</p>
                        <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Expat %</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{neighborhood.description}</p>

                  {/* Safety Features */}
                  <ul className="space-y-2">
                    {neighborhood.safetyFeatures.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-500">
                        <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price Range */}
                  <div className="mt-5 pt-5 border-t border-brand-100">
                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Price Range: </span>
                    <span className="text-slate-500 text-[10px] font-bold">{neighborhood.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Safety Tips */}
        <div className="mb-12 card-light p-8 rounded-2xl border-brand-GOLD/20 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6">Practical Safety Tips for Expats in Panama</h2>
          <ul className="space-y-3">
            {[
              'Avoid displaying expensive jewelry, watches, or electronics in public.',
              'Use registered taxis or ride-share apps (Uber, DiDi) — never hail cabs on the street after dark.',
              'Don\'t walk alone at night outside of well-lit commercial areas (Punta Pacifica, Amador Causeway).',
              'Keep copies of your passport and important documents separate from originals.',
              'Register with your embassy and enroll in their safety alert program.',
              'Join local expat Facebook groups — locals share real-time neighborhood intelligence.',
              'Use ATMs in malls and supermarkets, never on the street.',
              'Vary your routine and avoid predictable patterns if living in less safe areas.',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Internal links */}
        <div className="mb-12 grid sm:grid-cols-3 gap-4 reveal-on-scroll">
          {[
            { label: 'Pensionado Visa for Retirees', href: '/en/guides/pensionado-visa-panama' },
            { label: 'Browse Panama Real Estate', href: '/en/propiedades' },
            { label: 'Friendly Nations Visa Guide', href: '/en/guides/friendly-nations-visa-panama' },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex items-center justify-between card-light p-4 rounded-xl border-brand-100 hover:border-brand-GOLD/30 transition-all group"
            >
              <span className="text-white text-xs font-bold">{link.label}</span>
              <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-GOLD/20 text-center reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-brand-950 mb-3 tracking-tight">Ready to Move to a Safe Neighborhood in Panama?</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Our Panama advisors have personally lived and invested in the safest neighborhoods. Book a free 30-minute call to discuss safety, neighborhoods that match your lifestyle, and available properties in Punta Pacifica, Costa del Este, or El Cangrejo.
          </p>
          <Link
            href="/en/contacto"
            className="inline-flex items-center gap-2 btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px]"
          >
            Book Free Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is Panama City safe for expats?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Panama City is safe for expats when you choose the right neighborhood. Gated communities like Punta Pacifica and Costa del Este have crime rates comparable to US suburbs. As of 2026, these neighborhoods average 0.8–1.2 homicides per 100K, lower than many major US cities. Safety depends entirely on location and common sense.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the safest areas in Panama City?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The safest neighborhoods for expats in 2026 are Punta Pacifica (24/7 gated security, 2.1 crime index), Costa del Este (modern development, 3.2 crime index), and El Cangrejo (established expat hub, 5.1 crime index). All three have strong police presence and international residents.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does Panama compare to the US in crime?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Panama City\'s overall crime rate is 12.4 homicides per 100K vs the US average of 6.2 per 100K. However, safe neighborhoods in Panama (Punta Pacifica: 0.8–1.2 per 100K) are much safer than the US average and comparable to Chicago\'s safest neighborhoods. Geography matters — unsafe areas are concentrated in specific zones.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
