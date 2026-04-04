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
  title: 'Moving to Panama from Canada 2026: Visa, Taxes, Healthcare & Why Canadians Are Choosing Panama',
  description: 'Complete guide for Canadian expats moving to Panama. Learn about Pensionado and Friendly Nations visas, tax implications, healthcare, costs, and the Canadian community.',
  keywords: 'moving to panama from canada, retire panama canada, panama canada expats',
};

export default function MoveTopanamaPanamaPanamFromCanadaPage({ params: { lang } }: PageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-brand-50 via-white to-red-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-brand-TEAL bg-brand-50 rounded-full">
              CANADIAN EXPATS GUIDE
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-6">
              Moving to Panama from Canada 2026
            </h1>
            <p className="text-xl text-brand-950 opacity-80 max-w-2xl mx-auto mb-8">
              Complete guide for Canadian expats: Pensionado and Friendly Nations visas, tax implications, healthcare comparison, cost of living, and the thriving Canadian community in Panama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contacto`}
                className="inline-block px-8 py-3 bg-brand-TEAL text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Canadian Relocation Support
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
              <a href="#why-panama" className="hover:text-brand-TEAL transition">Why Canadians Choose Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#visa-options" className="hover:text-brand-TEAL transition">Visa Options for Canadians</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#tax-considerations" className="hover:text-brand-TEAL transition">Canadian Tax Considerations</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#cost-comparison" className="hover:text-brand-TEAL transition">Cost of Living Comparison</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#cpp-oas" className="hover:text-brand-TEAL transition">CPP & OAS in Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#healthcare" className="hover:text-brand-TEAL transition">Healthcare: Canada vs Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#canadian-community" className="hover:text-brand-TEAL transition">Canadian Community in Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#faq" className="hover:text-brand-TEAL transition">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Panama */}
      <section id="why-panama" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Why Canadians Choose Panama</h2>

          <div className="grid gap-6 mb-12">
            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Permanent Escape From Winter</h3>
              <p className="text-brand-950">
                Panama's weather is perfect year-round: 75-90°F (24-32°C) every day, no winter, no snow. Compare this to Canada's brutal winters where temperatures drop to -20°F (-30°C) in many regions. That alone is why thousands of Canadians are choosing Panama.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">70% Lower Cost of Living</h3>
              <p className="text-brand-950">
                Toronto and Vancouver rank among the world's most expensive cities. Panama City is approximately 70% cheaper. A comfortable lifestyle in Panama costs $1,500-2,500/month vs $3,500-5,000/month in Canada.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Canada IS on the Friendly Nations List</h3>
              <p className="text-brand-950">
                Canadians get preferential immigration treatment. You can obtain permanent residency in Panama through the Friendly Nations Visa — much easier than sponsoring Canadian family members to move.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Zero Tax on Foreign Income (When Non-Resident)</h3>
              <p className="text-brand-950">
                If you properly sever Canadian tax residency, you pay zero Canadian tax. Panama has a territorial tax system (no tax on foreign income). Combined: your Canadian pension/RRSP withdrawals could be completely untaxed.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Healthcare Without Wait Times</h3>
              <p className="text-brand-950">
                Canadian healthcare is excellent but notoriously slow (6-18 month specialist waits). Panama's private healthcare is world-class with ZERO wait times, and costs 60-80% less than Canada.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Easy Travel to Canada & North America</h3>
              <p className="text-brand-950">
                Copa Airlines (Panama's national airline) and American Airlines operate many daily flights from Panama City to Canada. Toronto-Panama is ~4.5 hours, Vancouver-Panama is ~7 hours. Easy to visit family frequently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Options */}
      <section id="visa-options" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Visa Options for Canadians</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            Canada is on Panama's Friendly Nations list, giving Canadians excellent visa options. Here are the main paths:
          </p>

          <div className="space-y-8">
            {/* Friendly Nations */}
            <div className="border-l-4 border-brand-TEAL bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Friendly Nations Visa (Most Popular)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Requirement:</h4>
                  <p className="text-brand-950 mb-3">
                    Must demonstrate an "economic link" to Panama. Options:
                  </p>
                  <ul className="space-y-2 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Job offer:</strong> Employment with a Panamanian company</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Business ownership:</strong> Own a Panama company (S.A.)</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Real estate purchase:</strong> Buy $200,000+ property in Panama</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>PERMANENT residency after approval</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>No expiration — stays valid forever</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Includes family members (spouse, children)</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Work permit included</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Timeline & Cost:</h4>
                  <p className="text-brand-950 text-sm">3-6 months processing. Professional fees: $2,000-5,000 through immigration lawyer.</p>
                </div>
              </div>
            </div>

            {/* Pensionado */}
            <div className="border-l-4 border-brand-GOLD bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-GOLD mb-4">Pensionado Visa (Retirees)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Requirement:</h4>
                  <p className="text-brand-950">
                    Guaranteed monthly income of $1,000 CAD (~$750 USD). Sources: Canada Pension Plan, Old Age Security, CPP, RRSP withdrawals, or private pension.
                  </p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <h4 className="font-heading font-bold text-brand-950 mb-3">Example Qualifier:</h4>
                  <p className="text-brand-950 text-sm mb-2">Canadian receiving:</p>
                  <ul className="space-y-1 text-brand-950 text-sm">
                    <li>• OAS: $700/month</li>
                    <li>• CPP: $500/month</li>
                    <li>• Private pension: $200/month</li>
                    <li className="font-bold text-brand-TEAL">= $1,400/month total ✓ QUALIFIES</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-brand-100">
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Benefits (Exclusive to Pensionado):</h4>
                  <ul className="space-y-1 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>PERMANENT residency</strong></span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>22 government discounts:</strong> 50% off electricity, 50% off restaurants, free doctor visits, 50% off hotels, etc.</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>More favorable than Friendly Nations for retirees</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Timeline & Cost:</h4>
                  <p className="text-brand-950 text-sm">2-4 months. Professional fees: $1,500-3,000.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <p className="text-brand-950 text-sm">
                    <strong>Important:</strong> Many Canadian retirees qualify for Pensionado because OAS + CPP typically exceed $1,000/month. This is often the easiest visa path for Canadian retirees.
                  </p>
                </div>
              </div>
            </div>

            {/* Investor Visa */}
            <div className="border-l-4 border-green-600 bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-green-600 mb-4">Investor Visa</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Requirement:</h4>
                  <p className="text-brand-950">
                    Invest $300,000+ in a Panama business or real estate project. Creates jobs in Panama.
                  </p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="text-brand-950 text-sm">
                    Less common for individuals. Usually used by entrepreneurs starting larger businesses or real estate developers.
                  </p>
                </div>
              </div>
            </div>

            {/* Tourist */}
            <div className="border-l-4 border-gray-400 bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">Tourist Visa (Short-Term)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Details:</h4>
                  <p className="text-brand-950">
                    Canadian passport holders get 90 days visa-free. Can be extended in-country. Not for permanent residency — for exploring before committing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">Recommendation for Most Canadians:</h3>
            <p className="text-brand-950">
              <strong>Start with a 90-day tourist visa to explore.</strong> During those 90 days, determine which visa path suits you best (Pensionado if retired, Friendly Nations if working/buying property). Then apply for permanent residency. This avoids expensive legal fees if you decide Panama isn't for you.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Considerations */}
      <section id="tax-considerations" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Canadian Tax Considerations (CRITICAL)</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
            <h3 className="font-heading text-xl font-bold text-red-900 mb-3">Key Principle:</h3>
            <p className="text-red-900 mb-4">
              Canada taxes worldwide income — BUT ONLY IF YOU'RE A CANADIAN TAX RESIDENT. If you properly sever Canadian tax residency, you owe zero Canadian tax, even on CPP/OAS withdrawals.
            </p>
            <p className="text-red-900 text-sm">
              This is the single biggest tax advantage of moving to Panama as a Canadian. But you must do this correctly, or CRA will audit you aggressively.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">How to Sever Canadian Tax Residency</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Step 1: Sell or Rent Your Canadian Home</h4>
                  <p className="text-brand-950 text-sm">
                    Owning a home in Canada creates a "residential tie." If you still own your home, CRA may claim you're still a resident. Either sell it or sign a long-term rental agreement (18+ months).
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Step 2: Cancel Provincial Health Card</h4>
                  <p className="text-brand-950 text-sm">
                    Contact your provincial health authority and formally cancel your coverage. This shows you're no longer an Ontario/BC/etc. resident.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Step 3: Close Canadian Bank Accounts & Investments</h4>
                  <p className="text-brand-950 text-sm">
                    Bank accounts in Canada suggest residency ties. Close them or convert to non-resident accounts. Move investments to Panama or international accounts.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Step 4: File CRA Form NR73 (Departure Report)</h4>
                  <p className="text-brand-950 text-sm">
                    This official CRA form declares your departure from Canada and non-resident status for tax purposes. File it with your final Canadian tax return.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Step 5: Establish Panama Tax Residency</h4>
                  <p className="text-brand-950 text-sm">
                    Spend >6 months in Panama, establish a residence, get a Panama tax ID (RUC). This proves to CRA you're resident elsewhere.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <p className="text-brand-950 text-sm">
                    <strong>CRA uses the "Statutory Residence Test."</strong> It looks at your residential ties and physical presence to determine residency. The above steps address all key ties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">What Happens After You Sever Residency</h3>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <p className="text-brand-950 text-sm mb-3">
                    <strong>CPP, OAS, and RRSP Withdrawals:</strong>
                  </p>
                  <p className="text-brand-950 text-sm">
                    Once non-resident, your Canadian pension income is NOT subject to Canadian tax. Panama has a tax treaty with Canada (limited), but in most cases:
                  </p>
                  <ul className="space-y-1 text-brand-950 text-sm mt-2">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>CPP/OAS wired to Panama: NO Canadian tax withheld</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>RRSP withdrawals: Typically 0% tax (verify with accountant)</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Panama territorial system: No Panama tax on foreign source income</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <p className="text-brand-950 text-sm">
                    <strong>Result:</strong> Your Canadian pension income could be completely untaxed — a massive advantage over staying in Canada and paying 20-30% tax.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="font-heading font-bold text-red-900 mb-3">CRITICAL WARNING:</h3>
              <p className="text-red-900 text-sm mb-3">
                CRA scrutinizes non-resident departures carefully. They audit aggressively when they suspect people are trying to escape tax. Don't just declare yourself non-resident — actually break your ties and establish residency elsewhere.
              </p>
              <p className="text-red-900 text-sm font-bold">
                HIRE A CANADIAN TAX SPECIALIST (cross-border accountant) before departing. They cost $1,000-3,000 but save you from CRA audits and penalties worth tens of thousands.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="font-heading font-bold text-brand-950 mb-3">Panama's Side:</h3>
            <p className="text-brand-950 text-sm">
              Panama uses a territorial tax system. Only income earned in Panama is taxed. Income from Canada (CPP, OAS, RRSP) is foreign-source income and is NOT taxed in Panama.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="cost-comparison" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Cost of Living: Canada vs Panama</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            Here's a realistic cost comparison for a comfortable middle-class lifestyle:
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-50">
                  <th className="border border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Expense Category</th>
                  <th className="border border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Toronto</th>
                  <th className="border border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Vancouver</th>
                  <th className="border border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Panama City</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-brand-50 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">2BR Apartment Rent</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$2,500-3,500</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$2,800-4,000</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">$900-1,500</td>
                </tr>
                <tr className="bg-brand-50 hover:opacity-90 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Monthly Groceries (family)</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$600-800</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$700-900</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">$250-350</td>
                </tr>
                <tr className="hover:bg-brand-50 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Utilities (electric, water, gas)</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$200-300</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$200-300</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">$40-80</td>
                </tr>
                <tr className="bg-brand-50 hover:opacity-90 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Internet/Phone</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$60-100</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$60-100</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">$30-50</td>
                </tr>
                <tr className="hover:bg-brand-50 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Car Insurance</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$1,200-1,800/year</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$1,400-2,000/year</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">$300-500/year</td>
                </tr>
                <tr className="bg-brand-50 hover:opacity-90 transition">
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-semibold">Private Healthcare (monthly insurance)</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$200-400 (coverage varies)</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950">$250-450</td>
                  <td className="border border-brand-100 px-4 py-3 text-brand-950 font-bold text-brand-TEAL">$80-150</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-6">
            <div className="bg-brand-50 rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">Comfortable Lifestyle Monthly Budget</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-brand-100">
                    <p className="text-brand-950 font-bold mb-2">Toronto/Vancouver</p>
                    <p className="text-brand-TEAL text-2xl font-bold">$4,500-6,000/month</p>
                    <p className="text-brand-950 text-xs mt-2">Includes: rent, food, utilities, healthcare, insurance, dining out, activities</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-brand-100">
                    <p className="text-brand-950 font-bold mb-2">Panama City</p>
                    <p className="text-brand-TEAL text-2xl font-bold">$1,500-2,500/month</p>
                    <p className="text-brand-950 text-xs mt-2">Same comfortable lifestyle, 65-70% cheaper</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                  <p className="text-brand-950 text-sm">
                    <strong>Annual Savings Example:</strong> Move from Toronto ($5,000/mo) to Panama ($2,000/mo) = Save $36,000/year. That's enough to extend your retirement years by decades.
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

      {/* CPP & OAS */}
      <section id="cpp-oas" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">CPP & OAS in Panama</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            Good news: Your Canadian pensions follow you to Panama. Here's how it works:
          </p>

          <div className="space-y-8 mb-12">
            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">CPP (Canada Pension Plan)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Payment Method:</h4>
                  <p className="text-brand-950 text-sm">
                    Service Canada can wire your CPP directly to a Panama bank account. You'll receive payments monthly in USD or CAD depending on your preference.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Tax Treatment (Once Non-Resident):</h4>
                  <p className="text-brand-950 text-sm mb-2">
                    CPP is considered foreign-source income in Panama and is generally NOT taxed. However, verify this with a Canadian cross-border tax specialist.
                  </p>
                  <p className="text-brand-950 text-xs opacity-75">
                    (Tax treaties are complex; different people have different situations)
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <p className="text-brand-950 text-sm">
                    <strong>Inflation Adjustment:</strong> CPP continues to increase annually with inflation, no matter where you live.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">OAS (Old Age Security)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Payment Method:</h4>
                  <p className="text-brand-950 text-sm">
                    Service Canada can wire OAS to a Panama bank account. Same process as CPP.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Important: Indexing Freeze</h4>
                  <p className="text-brand-950 text-sm mb-2">
                    OAS is paid globally, BUT your rate is "frozen" — it does NOT receive annual inflation increases outside specific countries. Panama is NOT on the list.
                  </p>
                  <p className="text-brand-950 text-xs mt-2">
                    This means if you receive $500/month OAS at age 65, it remains $500/month for life (not adjusted for inflation). Contact Service Canada/DFC to verify.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Tax Treatment (Once Non-Resident):</h4>
                  <p className="text-brand-950 text-sm">
                    Generally NOT subject to Canadian tax as non-resident. Panama territorial system applies. No Panama tax on foreign-source income.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded border border-red-200 mt-4">
                  <p className="text-red-900 text-sm">
                    <strong>Check with Service Canada BEFORE departing:</strong> Confirm their policy on OAS indexing for Panama residents. The situation may have changed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">RRSP Withdrawals</h3>

              <div className="space-y-4">
                <p className="text-brand-950 text-sm">
                  You can withdraw from your RRSP without leaving Canada. If you become a non-resident, withdrawals are generally not subject to Canadian tax. However, tax treaties apply, so consult a specialist.
                </p>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <p className="text-brand-950 text-sm">
                    <strong>Strategy:</strong> Consider converting RRSP to RRIF (Registered Retirement Income Fund) while non-resident for flexibility. Or withdraw strategically to minimize tax.
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
                <span>CPP and OAS are wired to Panama monthly</span>
              </li>
              <li className="flex">
                <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                <span>Generally NOT taxed by Canada (as non-resident) or Panama (territorial system)</span>
              </li>
              <li className="flex">
                <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                <span>OAS may not increase with inflation (check with Service Canada)</span>
              </li>
              <li className="flex">
                <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                <span>Consult a cross-border accountant to optimize withdrawal strategy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section id="healthcare" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Healthcare: Canadian Public vs Panama Private</h2>

          <div className="grid gap-8 mb-12">
            <div className="bg-brand-50 rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">Canadian Public Healthcare</h3>

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
                    <p className="font-bold text-brand-950">Long Wait Times</p>
                    <p className="text-brand-950 text-sm opacity-75">6-18 months for specialist consultations is common. Emergency care: much faster.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">Free at Point of Care</p>
                    <p className="text-brand-950 text-sm opacity-75">No direct costs. Funded by taxes.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✗</span>
                  <div>
                    <p className="font-bold text-brand-950">Strained System</p>
                    <p className="text-brand-950 text-sm opacity-75">Doctors burning out, emergency departments overwhelmed, shortages of specialists</p>
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
                    <p className="text-brand-950 text-sm opacity-75">Many doctors trained in USA/Europe. Hospital Punta Pacifica affiliated with Johns Hopkins.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">ZERO Wait Times</p>
                    <p className="text-brand-950 text-sm opacity-75">See a specialist same-day or next day. No 6-month waits.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">Affordable</p>
                    <p className="text-brand-950 text-sm opacity-75">$80-150/month for comprehensive private insurance. Doctor visits: $40-80. Much cheaper than Canadian private alternatives.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-brand-950">Out-of-Pocket Costs</p>
                    <p className="text-brand-950 text-sm opacity-75">Medications, procedures cost 50-80% less than Canada</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">✗</span>
                  <div>
                    <p className="font-bold text-brand-950">You Pay Directly</p>
                    <p className="text-brand-950 text-sm opacity-75">Unlike Canada, you pay for services (but costs are much lower)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">Cost Example: Hip Replacement</h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-brand-950 mb-1">Canada (Private)</p>
                <p className="text-brand-TEAL text-lg font-bold">$30,000-40,000</p>
                <p className="text-brand-950 opacity-75 text-xs">Private surgery (public wait: 1 year+)</p>
              </div>
              <div>
                <p className="font-bold text-brand-950 mb-1">Panama (Private)</p>
                <p className="text-brand-TEAL text-lg font-bold">$10,000-15,000</p>
                <p className="text-brand-950 opacity-75 text-xs">Same surgeon quality, 65-70% cheaper</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Community */}
      <section id="canadian-community" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Canadian Community in Panama</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            There is a growing and active Canadian community in Panama. You won't be isolated — there are many networks and groups:
          </p>

          <div className="grid gap-6 mb-12">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Social & Networking Groups</h3>
              <ul className="space-y-2 text-brand-950 text-sm">
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Facebook Group "Canadians in Panama"</strong> — 3,000+ members, daily discussions, advice</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Expat Meet-ups</strong> — Regular social events in Panama City and Boquete</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Rotary Clubs</strong> — International networking and volunteering</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Boquete - Expat Haven</h3>
              <p className="text-brand-950 text-sm mb-3">
                Boquete (mountain town, 1 hour from Panama City) is known as the Canadian expat hub. Cooler climate, beautiful scenery, many Canadian residents.
              </p>
              <ul className="space-y-2 text-brand-950 text-sm">
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span>Rent: $500-1,000/month (very affordable)</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span>Canadian restaurants and shops</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span>Large Canadian expatriate community</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Canadian-Focused Services</h3>
              <ul className="space-y-2 text-brand-950 text-sm">
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Immigration lawyers</strong> specializing in Canadian expat visas</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Cross-border tax accountants</strong> for CPP/tax residency issues</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Real estate agents</strong> fluent in English</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="font-heading font-bold text-brand-950 mb-3">Bottom Line:</h3>
            <p className="text-brand-950 text-sm">
              You'll have plenty of community and support from other Canadians. You're not moving to an isolated place — Panama City is a modern, cosmopolitan city with excellent infrastructure and lots of expat services tailored to Canadians.
            </p>
          </div>
        </div>
      </section>

      {/* Panama City Scene */}
      <section className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">Experience Panama City</h2>
          <div className="w-full h-96 rounded-lg border border-brand-100 overflow-hidden bg-brand-50">
            <PanamaCityScene />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I still visit Canada while living in Panama?",
                a: "Yes. You can visit Canada for 6 months per year without losing your non-resident status. However, after 6 months, you risk CRA questioning your residency. Keep visits under 6 months to be safe."
              },
              {
                q: "Do I need to give up my Canadian passport?",
                a: "No. You can keep your Canadian citizenship and passport forever. You'll be a Panama permanent resident (not a citizen unless you naturalize after 5 years). Dual residency is fine."
              },
              {
                q: "What about Canadian healthcare coverage once non-resident?",
                a: "Provincial health insurance ends when you leave Canada. You must get private insurance in Panama (affordable at $80-150/month). Some Canadians maintain travel insurance for Canada visits."
              },
              {
                q: "Can I rent out my Canadian home while living in Panama?",
                a: "Yes, and it's actually a way to show you've severed residency ties (your home is a rental property, not your residence). Rental income is subject to Canadian tax, but mortgage/maintenance deductions apply."
              },
              {
                q: "Is the Pensionado visa renewable or permanent?",
                a: "Pensionado is PERMANENT residency. Once approved, you have it for life. You must maintain your $1,000/month income to keep it, but no renewal is required."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-brand-100 overflow-hidden hover:shadow-lg transition">
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
        <h2 className="font-heading text-2xl font-bold text-brand-950 mb-2">Trusted Moving Companies & Relocation Services for Canadians</h2>
        <p className="text-brand-700 mb-6">Your move from Canada to Panama requires specialized international movers and local support. We've vetted these professional services that understand Canadian relocations and can handle everything from Vancouver, Toronto, Montreal, or anywhere in Canada.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">International Movers (Canada to Panama)</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>AGS Worldwide Movers</strong> – Specializes in Canada-to-Panama moves, offers LCL and FCL options</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Bekins Canada</strong> – Door-to-door service from major Canadian cities to Panama ports</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Two Men and a Truck International</strong> – Canadian roots, professional expat moves, transparent pricing</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Mayflower International</strong> – Full-service relocation, customs coordination, tracking from Canada</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Panama-Side Receiving & Setup</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Customs Brokers Association</strong> – Official duty and tariff clearance, transparent quotes</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Logística Integral de Panamá</strong> – Local warehouse storage, final delivery coordination, English support</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Canadian Expat Services Panama</strong> – Destination management for Canadian relocations, familiar with home goods</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama City Receiving</strong> – Door delivery, assembly, storage, and unpacking services</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Shipping Containers & Vehicle Transport</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>SHIP (Shipping & Handling International Partners)</strong> – 20ft and 40ft containers, auto shipping specialization</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>uShip</strong> – Compare Canada-to-Panama carrier quotes instantly</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Auto Transport Review</strong> – Vehicle shipping with customer reviews and cost calculators</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Importers Association Panama</strong> – Information on Canadian vehicle import duties and local purchase alternatives</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Visa, Relocation & Financial Setup</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Global Citizen Solutions</strong> – Pensionado and Friendly Nations visa specialists for Canadians</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Immigration Specialists</strong> – Tax residency setup, CPP/OAS implications, Canadian financial transition</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Banco Panamericano</strong> – Non-resident account opening for Canadian expats, online services</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>ARCCA (Asociación de Residentes de Canadá en Panamá)</strong> – Canadian expat community network, invaluable for local connections</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-xl border border-brand-100">
          <p className="text-sm text-brand-700"><strong className="text-brand-TEAL">💡 Pro Tip:</strong> Canadian movers often offer better rates in off-season (May-August). Get 3+ quotes and ask about insurance coverage for cross-border moves. Connect with ARCCA early—the Canadian community in Panama is vibrant and can offer advice on everything from importing household goods to finding Canadian doctors. Many Canadian expats report saving significantly by shipping selectively rather than shipping everything.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-TEAL to-brand-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move to Panama from Canada?
          </h2>
          <p className="text-white opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Let our Canadian relocation specialists guide you through visas, tax residency, healthcare, and every step of the move.
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
