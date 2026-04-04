import dynamic from 'next/dynamic';
import Link from 'next/link';

const CostBarChart = dynamic(
  () => import('@/components/three/CostBarChart').then(m => m.CostBarChart),
  { ssr: false }
);

const PanamaCityScene = dynamic(
  () => import('@/components/three/PanamaCityScene').then(m => m.PanamaCityScene),
  { ssr: false }
);

interface PageProps {
  params: {
    lang: string;
  };
}

export const metadata = {
  title: 'Moving to Panama from the UK 2026: Brexit, Visa, Tax & Why Brits Are Choosing Panama',
  description: 'Complete guide for British expats moving to Panama after Brexit. Learn about Friendly Nations visa, UK tax implications, healthcare, costs, and the British community.',
  keywords: 'moving to panama from UK, retire panama british expats, UK to Panama relocation',
};

export default function MoveTopanamaPanamaPanamFromUKPage({ params: { lang } }: PageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-brand-50 via-white to-blue-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-brand-TEAL bg-brand-50 rounded-full">
              BRITISH EXPATS GUIDE
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-6">
              Moving to Panama from the UK 2026
            </h1>
            <p className="text-xl text-brand-950 opacity-80 max-w-2xl mx-auto mb-8">
              Complete guide for British expats: Post-Brexit relocation, Friendly Nations and Pensionado visas, UK tax implications, healthcare comparison, cost of living, and the British community in Panama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contacto`}
                className="inline-block px-8 py-3 bg-brand-TEAL text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get British Relocation Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">Table of Contents</h2>
          <ul className="space-y-3 text-brand-950 opacity-75">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#brexit-angle" className="hover:text-brand-TEAL transition">Post-Brexit & Why Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#why-panama" className="hover:text-brand-TEAL transition">Why Brits Choose Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#visa-options" className="hover:text-brand-TEAL transition">Visa Options for British Citizens</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#tax-considerations" className="hover:text-brand-TEAL transition">UK Tax Considerations</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#cost-comparison" className="hover:text-brand-TEAL transition">Cost of Living Comparison</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#state-pension" className="hover:text-brand-TEAL transition">UK State Pension in Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#healthcare" className="hover:text-brand-TEAL transition">Healthcare: NHS vs Panama Private</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#british-community" className="hover:text-brand-TEAL transition">British Community in Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#faq" className="hover:text-brand-TEAL transition">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Brexit Angle */}
      <section id="brexit-angle" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Post-Brexit: Why Panama is Becoming Plan B for British Retirees</h2>

          <div className="bg-white border border-brand-100 rounded-lg p-8 mb-12">
            <p className="text-brand-950 mb-6">
              Before Brexit, many British retirees chose Spain, Portugal, or France for retirement. These were no-brainers under EU freedom of movement. Post-Brexit? Everything changed.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-3xl">❌</span>
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-1">EU Countries Now Complex for Brits</h4>
                  <p className="text-brand-950 text-sm opacity-80">
                    Spain's D7 visa (retiree) now requires €1,400+/month income guarantee, healthcare insurance, property tie-down. Portugal's same. France requires residency permits. All have restrictions and requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-1">Panama: Simple & Open for Brits</h4>
                  <p className="text-brand-950 text-sm opacity-80">
                    Pensionado visa: ~£1,000/month State Pension qualifies. Friendly Nations: UK still on list post-Brexit. No restrictions on healthcare or property ownership. Permanent residency within months.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">The Brexit Shift:</h3>
            <p className="text-brand-950 text-sm mb-4">
              Many British retirees who assumed they'd retire in Spain or Portugal are now discovering Panama. Why? Because it's easier, cheaper, and more straightforward post-Brexit. The UK is still on Panama's Friendly Nations list, and British pensions go further here than anywhere in Europe.
            </p>
            <p className="text-brand-950 text-sm font-bold">
              Panama is the new Plan B for British retirees.
            </p>
          </div>
        </div>
      </section>

      {/* Why Panama */}
      <section id="why-panama" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Why Brits Choose Panama</h2>

          <div className="grid gap-6 mb-12">
            <div className="bg-brand-50 rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Permanent Escape from Grey UK Weather</h3>
              <p className="text-brand-950">
                Panama: 75-90°F (24-32°C) year-round. London: 8-16°C (46-61°F) with frequent rain. British retirees often spend winters in sunny places — Panama offers that permanently.
              </p>
            </div>

            <div className="bg-brand-50 rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">73% Lower Cost of Living</h3>
              <p className="text-brand-950">
                London is one of the world's most expensive cities (£3,000-4,500/month for comfortable retirement). Panama: £1,200-2,000/month for similar lifestyle. Your UK pension stretches far further.
              </p>
            </div>

            <div className="bg-brand-50 rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">UK Still on Friendly Nations List</h3>
              <p className="text-brand-950">
                Despite Brexit, the UK remains on Panama's Friendly Nations list. Brits get preferential immigration treatment. Permanent residency within months.
              </p>
            </div>

            <div className="bg-brand-50 rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">State Pension Paid Globally</h3>
              <p className="text-brand-950">
                UK State Pension is wired worldwide. It's enough to qualify for Panama's Pensionado visa. Paired with private pensions, UK retirees are very comfortable here.
              </p>
            </div>

            <div className="bg-brand-50 rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Healthcare Without NHS Wait Times</h3>
              <p className="text-brand-950">
                NHS is excellent but notoriously slow (6-18 month specialist waits). Panama private healthcare is world-class with ZERO wait times, and costs 70% less than UK private.
              </p>
            </div>

            <div className="bg-brand-50 rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Easy Travel Back to UK</h3>
              <p className="text-brand-950">
                British Airways and Virgin fly Panama City to London regularly (~11 hours). Easy to visit family, maintain UK ties, and return home if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Options */}
      <section id="visa-options" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Visa Options for British Citizens</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            The UK is on Panama's Friendly Nations list (post-Brexit, still included). Here are your main paths to permanent residency:
          </p>

          <div className="space-y-8">
            {/* Pensionado */}
            <div className="border-l-4 border-brand-GOLD bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-GOLD mb-4">Pensionado Visa (Most Popular for Retirees)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Requirement:</h4>
                  <p className="text-brand-950">
                    Guaranteed monthly income of ~£1,000 (approximately $1,250 USD). Sources: UK State Pension, private pension, or investment income.
                  </p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <h4 className="font-heading font-bold text-brand-950 mb-3">Example Qualifier:</h4>
                  <p className="text-brand-950 text-sm mb-2">British retiree receiving:</p>
                  <ul className="space-y-1 text-brand-950 text-sm">
                    <li>• UK State Pension: £700-900/month</li>
                    <li>• Private pension: £300-400/month</li>
                    <li className="font-bold text-brand-TEAL">= ~£1,100/month ✓ QUALIFIES</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-brand-100">
                  <h4 className="font-heading font-bold text-brand-950 mb-3">Exclusive Benefits:</h4>
                  <ul className="space-y-2 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>PERMANENT residency for life</strong></span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>22 government discounts:</strong> 50% off electricity, 50% off restaurants, free medical visits, 50% off hotels, etc.</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>No employment required</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Includes family members</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Timeline & Cost:</h4>
                  <p className="text-brand-950 text-sm">2-4 months processing. Professional fees: £1,000-2,000 with immigration lawyer.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <p className="text-brand-950 text-sm">
                    <strong>Easiest Path for Brits:</strong> Most British retirees qualify for Pensionado because State Pension + private pension typically exceed £1,000/month. This is the recommended path.
                  </p>
                </div>
              </div>
            </div>

            {/* Friendly Nations */}
            <div className="border-l-4 border-brand-TEAL bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Friendly Nations Visa (Working Brits)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Requirement:</h4>
                  <p className="text-brand-950 mb-3">
                    Demonstrate an "economic link" to Panama:
                  </p>
                  <ul className="space-y-2 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Job offer from Panamanian company</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Ownership of Panama business (S.A.)</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Real estate purchase of £150,000+ (~$200,000 USD)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>PERMANENT residency</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Work permit included</span>
                    </li>
                  </ul>
                </div>

                <p className="text-brand-950 text-sm opacity-75">
                  Less common for retirees. More for working-age Brits or those buying property.
                </p>
              </div>
            </div>

            {/* Tourist */}
            <div className="border-l-4 border-gray-400 bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">Tourist Visa (Short-Term)</h3>

              <div className="space-y-4">
                <p className="text-brand-950 text-sm">
                  British passport holders get 90 days visa-free. Can be extended in-country. Start with this while exploring before committing to permanent residency.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">Recommendation for Most Brits:</h3>
            <p className="text-brand-950">
              <strong>Pensionado visa.</strong> Most British retirees have State Pension + private pension that exceeds £1,000/month. This is the easiest, fastest path to permanent residency with the most benefits (22 government discounts).
            </p>
          </div>
        </div>
      </section>

      {/* Tax Considerations */}
      <section id="tax-considerations" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">UK Tax Considerations</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
            <h3 className="font-heading text-xl font-bold text-red-900 mb-3">Key Principle:</h3>
            <p className="text-red-900 mb-4">
              The UK taxes worldwide income IF you're a UK tax resident. If you break UK tax residency through the Statutory Residence Test (SRT), you owe zero UK tax on foreign income.
            </p>
            <p className="text-red-900 text-sm">
              This is complex. Work with a UK tax specialist. The Statutory Residence Test has many exceptions.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">How the Statutory Residence Test (SRT) Works</h3>

              <div className="space-y-4">
                <p className="text-brand-950 text-sm mb-4">
                  You're considered non-UK tax resident if you spend fewer than 183 days/year in the UK AND pass the SRT. The SRT checks:
                </p>

                <div className="space-y-3">
                  <div className="bg-brand-50 p-4 rounded">
                    <h4 className="font-heading font-bold text-brand-950 mb-2">Days in UK</h4>
                    <p className="text-brand-950 text-sm">Fewer than 16 days/year (if you haven't been UK resident for 3 previous years) OR fewer than 91 days (if you were UK resident in previous 3 years)</p>
                  </div>

                  <div className="bg-brand-50 p-4 rounded">
                    <h4 className="font-heading font-bold text-brand-950 mb-2">Working Days</h4>
                    <p className="text-brand-950 text-sm">If working full-time abroad, fewer than 40 days in UK usually means non-resident</p>
                  </div>

                  <div className="bg-brand-50 p-4 rounded">
                    <h4 className="font-heading font-bold text-brand-950 mb-2">Family & Ties</h4>
                    <p className="text-brand-950 text-sm">Close family members still in UK, UK property, UK employment = ties suggesting residency</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
                  <p className="text-brand-950 text-sm">
                    <strong>Bottom line:</strong> If you move to Panama permanently, spend less than 16 days/year in UK, and have no major ties, you're likely non-resident for tax. But consult a specialist — the SRT is complex.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">UK State Pension Tax</h3>

              <div className="space-y-4">
                <p className="text-brand-950 text-sm mb-4">
                  As a non-UK tax resident, your State Pension is NOT subject to UK tax. However, there are complications:
                </p>

                <div className="bg-red-50 p-4 rounded border border-red-200 mb-4">
                  <h4 className="font-heading font-bold text-red-900 mb-2">Tax Treaty with Panama (Limited)</h4>
                  <p className="text-red-900 text-sm">
                    UK and Panama have a limited tax treaty. Some sources suggest State Pension may be taxable in Panama depending on circumstances. Consult a specialist.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Panama's Side</h4>
                  <p className="text-brand-950 text-sm">
                    Panama's territorial tax system means foreign-source income (like your UK pension) is generally NOT taxed in Panama.
                  </p>
                </div>

                <p className="text-brand-950 text-sm mt-4 opacity-75">
                  The net result: You'll likely pay little to no tax on UK State Pension when you move to Panama. But verify this with a UK tax specialist before departing.
                </p>
              </div>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Private Pensions in Panama</h3>

              <div className="space-y-4">
                <p className="text-brand-950 text-sm">
                  Private pension income (e.g., occupational pensions, personal pensions) is treated differently. Generally:
                </p>

                <ul className="space-y-2 text-brand-950 text-sm">
                  <li className="flex">
                    <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                    <span>If non-UK tax resident: UK tax typically not withheld at source</span>
                  </li>
                  <li className="flex">
                    <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                    <span>Panama territorial system: Generally not taxed as foreign income</span>
                  </li>
                  <li className="flex">
                    <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                    <span>Result: Potentially untaxed income (verify with specialist)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="font-heading font-bold text-brand-950 mb-3">CRITICAL WARNING:</h3>
            <p className="text-brand-950 text-sm">
              HMRC (UK tax authority) is aggressive with people claiming non-resident status. They will scrutinize your departure. Before you move, hire a UK tax specialist (£1,500-3,000 fee) to properly structure your departure and ensure HMRC doesn't challenge you.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="cost-comparison" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Cost of Living: UK vs Panama</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            Here's a realistic cost comparison for a comfortable middle-class lifestyle:
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-50">
                  <th className="border border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Expense Category</th>
                  <th className="border border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">London</th>
                  <th className="border border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">SE England</th>
                  <th className="border border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Panama City</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-brand-50 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">2BR Flat Rent</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£2,500-4,000</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£1,500-2,500</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">£600-1,000</td>
                </tr>
                <tr className="bg-brand-50 hover:opacity-90 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Monthly Groceries</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£400-600</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£350-500</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">£150-250</td>
                </tr>
                <tr className="hover:bg-brand-50 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Utilities</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£120-180</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£100-150</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">£25-50</td>
                </tr>
                <tr className="bg-brand-50 hover:opacity-90 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Internet/Phone</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£30-50</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£30-50</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">£20-30</td>
                </tr>
                <tr className="hover:bg-brand-50 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Private Healthcare (monthly)</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£100-200 (or free NHS)</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">£80-150</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">£50-100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 mb-12">
            <div className="bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">Comfortable Lifestyle Monthly Budget</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-brand-100">
                    <p className="text-brand-950 font-bold mb-2">London</p>
                    <p className="text-brand-TEAL text-2xl font-bold">£3,500-5,000</p>
                    <p className="text-brand-950 text-xs mt-2">Includes: rent, food, utilities, healthcare, activities</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-brand-100">
                    <p className="text-brand-950 font-bold mb-2">Panama City</p>
                    <p className="text-brand-TEAL text-2xl font-bold">£1,000-1,600</p>
                    <p className="text-brand-950 text-xs mt-2">Same comfortable lifestyle, 70% cheaper</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                  <p className="text-brand-950 text-sm">
                    <strong>Annual Savings Example:</strong> Move from London (£4,000/mo) to Panama (£1,300/mo) = Save £32,400/year. That stretches your UK pension significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Bar Chart */}
          <div className="my-12 w-full h-96 rounded-lg border border-brand-100 overflow-hidden bg-white p-4">
            <CostBarChart />
          </div>
        </div>
      </section>

      {/* State Pension */}
      <section id="state-pension" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">UK State Pension in Panama</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            Good news: Your UK State Pension follows you to Panama. Here's how it works:
          </p>

          <div className="space-y-8 mb-12">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Payment Method</h3>

              <div className="space-y-4">
                <p className="text-brand-950 text-sm">
                  DWP (Department for Work and Pensions) can wire your State Pension directly to a Panama bank account. Monthly payments in GBP or USD.
                </p>

                <div className="bg-white p-4 rounded border border-brand-100">
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Current UK State Pension Rates (2025):</h4>
                  <ul className="space-y-1 text-brand-950 text-sm">
                    <li>Full new State Pension: £287-320/week (approximately £1,240-1,380/month)</li>
                    <li>Older system: Varies, often £150-200/week</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Important: Indexing Freeze</h3>

              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-heading font-bold text-red-900 mb-2">Critical Issue for Panama Retirees</h4>
                <p className="text-red-900 text-sm mb-3">
                  UK State Pension is paid globally, but your pension rate is FROZEN — it does NOT receive annual upratings (inflation increases) outside certain countries.
                </p>
                <p className="text-red-900 text-sm mb-3">
                  <strong>Panama is NOT on the list.</strong> This means if you receive £300/month State Pension, it remains £300/month for life (no inflation adjustment).
                </p>
                <p className="text-red-900 text-sm">
                  Countries where State Pension IS uprated (frozen pay is NOT an issue): USA, Canada, Australia, New Zealand, Channel Islands, Isle of Man. NOT: Panama, Spain, Portugal, France, etc.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
                <p className="text-brand-950 text-sm">
                  <strong>Important:</strong> This doesn't disqualify Panama — it just means you should factor frozen pension into long-term financial planning. Contact DWP to confirm their current policy before departing.
                </p>
              </div>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Private Pensions & Investment Income</h3>

              <div className="space-y-4">
                <p className="text-brand-950 text-sm">
                  Private pension income can be wired to Panama. Investment income (from savings, stocks, bonds) can be held in Panama accounts.
                </p>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="text-brand-950 text-sm">
                    For tax purposes, verify with a UK tax specialist whether you need to declare this to HMRC (may be required even as non-resident depending on circumstances).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">Summary:</h3>
            <ul className="space-y-2 text-brand-950 text-sm">
              <li className="flex">
                <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                <span>State Pension wired to Panama monthly</span>
              </li>
              <li className="flex">
                <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                <span>Pension rate is FROZEN (no inflation increases)</span>
              </li>
              <li className="flex">
                <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                <span>Combined with private pension, usually sufficient for comfortable life</span>
              </li>
              <li className="flex">
                <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                <span>Consult UK tax specialist about tax implications</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section id="healthcare" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Healthcare: NHS vs Panama Private</h2>

          <div className="grid gap-8 mb-12">
            <div className="bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">NHS (UK Public Healthcare)</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">Excellent Quality</p>
                    <p className="text-brand-950 text-sm opacity-75">World-class doctors, hospitals, and treatment standards</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✗</span>
                  <div>
                    <p className="font-bold text-brand-950">Notorious Wait Times</p>
                    <p className="text-brand-950 text-sm opacity-75">6-18 months for specialist consultations is standard. Some procedures delayed 2+ years.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">Free at Point of Care</p>
                    <p className="text-brand-950 text-sm opacity-75">No direct costs. Funded by national insurance and taxes.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✗</span>
                  <div>
                    <p className="font-bold text-brand-950">System Strain</p>
                    <p className="text-brand-950 text-sm opacity-75">A&E (ER) overwhelmed, staff shortages, many consultants leaving</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg border border-green-200 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Panama Private Healthcare</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">Excellent Quality</p>
                    <p className="text-brand-950 text-sm opacity-75">Many doctors trained in USA/UK/Europe. Hospital Punta Pacifica affiliated with Johns Hopkins.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">ZERO Wait Times</p>
                    <p className="text-brand-950 text-sm opacity-75">See specialist same-day or next-day. No months of waiting.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">Affordable</p>
                    <p className="text-brand-950 text-sm opacity-75">£50-100/month comprehensive insurance. Doctor visits: £30-60. 70% cheaper than UK private.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">Modern Facilities</p>
                    <p className="text-brand-950 text-sm opacity-75">New hospitals, latest medical technology</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✗</span>
                  <div>
                    <p className="font-bold text-brand-950">You Pay Directly</p>
                    <p className="text-brand-950 text-sm opacity-75">Unlike NHS, you pay for services (but costs are much lower)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">Cost Example: Hip Replacement</h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-brand-950 mb-1">UK Private (skip NHS waits)</p>
                <p className="text-brand-TEAL text-lg font-bold">£15,000-25,000</p>
                <p className="text-brand-950 opacity-75 text-xs">Private surgery, skip 1+ year wait</p>
              </div>
              <div>
                <p className="font-bold text-brand-950 mb-1">Panama Private</p>
                <p className="text-brand-TEAL text-lg font-bold">£6,000-10,000</p>
                <p className="text-brand-950 opacity-75 text-xs">Same quality, 60% cheaper</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* British Community */}
      <section id="british-community" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">British Community in Panama</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            There is a British expat community in Panama, though smaller than North American groups. You'll find support networks and services:
          </p>

          <div className="grid gap-6 mb-12">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">British Clubs & Associations</h3>
              <ul className="space-y-2 text-brand-950 text-sm">
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Anglo-Panamanian Society</strong> — Social events, networking, cultural activities</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>British Cemetery Committee</strong> — Community volunteer group</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Expat Meetup Groups</strong> — Facebook groups for Brits, expats, retirees</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">British Schools & Education</h3>
              <p className="text-brand-950 text-sm mb-3">
                Panama City has international schools teaching British curriculum:
              </p>
              <ul className="space-y-2 text-brand-950 text-sm">
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>King's College Panama</strong> — British curriculum, well-respected</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Caribbean School</strong> — IB curriculum with British roots</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">British-Focused Services</h3>
              <ul className="space-y-2 text-brand-950 text-sm">
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>UK Tax Specialists</strong> — Firms familiar with UK expat taxation</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>British Pubs & Restaurants</strong> — Fish & chips, proper tea, British food</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>British Embassy</strong> — Consular services, passport renewals</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="font-heading font-bold text-brand-950 mb-3">Bottom Line:</h3>
            <p className="text-brand-950 text-sm">
              The British community is smaller than the American or Canadian communities, but you'll have support networks and access to British services. Panama City is cosmopolitan with plenty of international amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Panama City Scene */}
      <section className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">Experience Panama City</h2>
          <div className="w-full h-96 rounded-lg border border-brand-100 overflow-hidden bg-white">
            <PanamaCityScene />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-12">Frequently Asked Questions</h3>

          <div className="space-y-6">
            {[
              {
                q: "Can I still visit the UK while living in Panama?",
                a: "Yes. You can visit the UK frequently without losing your non-resident tax status. However, spend more than 90 days/year and you risk HMRC questioning your residency. Keep visits under 90 days to be safe."
              },
              {
                q: "Do I need to give up my British passport?",
                a: "No. You can keep your British passport and citizenship forever. You'll be a Panama permanent resident (not a citizen unless you naturalize after 5+ years). British-Panamanian dual residency is fine."
              },
              {
                q: "What about UK healthcare coverage once I move to Panama?",
                a: "NHS coverage ends when you leave the UK as non-resident. You'll need private insurance in Panama (affordable at £50-100/month). Some Brits maintain travel insurance for UK visits."
              },
              {
                q: "Is Pensionado visa permanent?",
                a: "Yes, PERMANENT residency. Once approved, you have it for life. You must maintain your ~£1,000/month income to keep it, but no renewal is required."
              },
              {
                q: "Can I rent out my UK home while living in Panama?",
                a: "Yes, and it's a way to show you've severed UK residency ties (your home is a rental property, not your residence). Rental income is subject to UK tax, but mortgage/maintenance deductions apply."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-50 rounded-lg border border-brand-100 overflow-hidden hover:shadow-lg transition">
                <button className="w-full text-left p-6 focus:outline-none group">
                  <h3 className="font-heading text-lg font-bold text-brand-950 group-hover:text-brand-TEAL transition">
                    {item.q}
                  </h3>
                  <p className="text-brand-950 opacity-75 mt-3">
                    {item.a}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Companies & Services */}
      <section className="bg-brand-50 border border-brand-100 rounded-2xl p-8 my-12">
        <h2 className="font-heading text-2xl font-bold text-brand-950 mb-2">Trusted Moving Companies & Relocation Services for British Expats</h2>
        <p className="text-brand-700 mb-6">Moving from the UK to Panama requires specialist international movers experienced with long-haul relocations and UK customs requirements. These services understand British expat needs and can coordinate complex moves from anywhere in the UK to Panama.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">International Movers (UK to Panama)</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>AGS Worldwide Movers</strong> – UK expertise, direct routes to Panama, full-service coordination</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Crown Relocations</strong> – British-based, 25+ years, specializes in UK-to-Panama moves</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Pickfords International</strong> – Historic UK mover, long-haul expertise, transparent pricing</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Move One</strong> – British family-run, specializes in expat relocations, exceptional service</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Panama-Side Receiving & Customs</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Customs Brokers Association</strong> – Import duty clearance, transparent UK goods assessment</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Logística Integral de Panamá</strong> – Local receiving, warehouse storage, final delivery to homes across Panama</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>British Community Services Panama</strong> – English-speaking destination management, familiar with UK household goods</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Colón Free Zone</strong> – Temporary bonded storage, cost-effective for staged moves</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Shipping Containers & Vehicles</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>SHIP (Shipping & Handling International Partners)</strong> – 20ft/40ft containers, UK-to-Panama routes</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>uShip</strong> – Compare UK carriers and auto transport to Panama</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Auto Transport Review</strong> – UK vehicle shipping specialists with cost guides</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Importers Association</strong> – UK vehicle import duties, plus local purchase guidance</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Visa, Tax & Financial Setup</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Global Citizen Solutions</strong> – UK tax residency strategy, Pensionado visa, financial planning for Brits</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Immigration Specialists</strong> – Post-Brexit visa guidance, State Pension implications, residency setup</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>British Expat Financial Advisors (Panama)</strong> – UK pension transfers, tax-efficient transitions</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Banco Panamericano & HSBC Panama</strong> – Non-resident account opening, familiar banking transition for Brits</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-xl border border-brand-100">
          <p className="text-sm text-brand-700"><strong className="text-brand-TEAL">💡 Pro Tip:</strong> UK-to-Panama moves typically take 8-12 weeks via sea freight. Get multiple quotes well in advance, especially if moving during summer months (peak season). Confirm whether movers handle UK customs paperwork (export documentation) as well as Panama customs. Many British expats use temporary storage in Panama while arranging their new home. Consider your UK possessions carefully—not all items worth moving, especially if shipping costs exceed replacement value locally.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-TEAL to-brand-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move to Panama from the UK?
          </h2>
          <p className="text-white opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Let our British relocation specialists guide you through visas, UK tax residency, healthcare, and every step of your move to Panama.
          </p>
          <Link
            href={`/${lang}/contacto`}
            className="inline-block px-8 py-4 bg-white text-brand-TEAL rounded-lg font-bold hover:shadow-lg transition text-lg"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
