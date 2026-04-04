import Link from 'next/link';


interface PageProps {
  params: {
    lang: string;
  };
}

export const metadata = {
  title: 'How to Start a Business in Panama as a Foreigner 2026: SA, Foundation & Legal Guide',
  description: 'Complete guide to starting a business in Panama as a foreigner. Learn about Sociedad Anónima, company formation, costs, and hiring employees.',
  keywords: 'start business Panama foreigners, Panama company formation, Sociedad Anónima Panama',
};

export default function StartBusinessPanamaPage({ params: { lang } }: PageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-brand-50 via-white to-green-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-brand-TEAL bg-brand-50 rounded-full">
              BUSINESS & ENTREPRENEURSHIP
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-6">
              How to Start a Business in Panama as a Foreigner 2026
            </h1>
            <p className="text-xl text-brand-950 opacity-80 max-w-2xl mx-auto mb-8">
              Complete guide to forming a Sociedad Anónima (S.A.), foundation, and legal structure. Learn about costs, taxation, hiring employees, and why Panama is the Latin American business hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contacto`}
                className="inline-block px-8 py-3 bg-brand-TEAL text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Business Guidance
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
              <a href="#why-panama" className="hover:text-brand-TEAL transition">Why Panama for Business</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#business-types" className="hover:text-brand-TEAL transition">Types of Business Structures</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#formation-process" className="hover:text-brand-TEAL transition">Formation Process for S.A.</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#costs" className="hover:text-brand-TEAL transition">Detailed Cost Breakdown</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#hiring" className="hover:text-brand-TEAL transition">Hiring Employees in Panama</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#free-zones" className="hover:text-brand-TEAL transition">Free Trade Zones</a>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
              <a href="#visa-link" className="hover:text-brand-TEAL transition">Link to Friendly Nations Visa</a>
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
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Why Panama for Business?</h2>

          <div className="grid gap-6 mb-12">
            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Latin American Hub</h3>
              <p className="text-brand-950">
                Panama's geographic location and Panama Canal make it the de facto business hub for all of Latin America. Headquarters, regional offices, and trading companies are based here.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Territorial Tax System (No Foreign Income Tax)</h3>
              <p className="text-brand-950">
                Panama taxes only income earned within Panama. If your business generates revenue from outside Panama (US clients, international trade, etc.), that income is NOT taxed. This is one of the strongest tax advantages globally.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">US Dollar Economy</h3>
              <p className="text-brand-950">
                Panama uses the US dollar as official currency (the Panamanian Balboa is equal to USD). No forex risk, no currency conversion fees. Ideal for US-based or international businesses.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Free Trade Zones</h3>
              <p className="text-brand-950">
                Colón Free Zone (second largest in the world) and Panama Pacífico offer tax incentives, import/export benefits, and zero import duties for companies operating within them.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">No Foreign Ownership Restrictions</h3>
              <p className="text-brand-950">
                Unlike many countries, Panama allows 100% foreign ownership of companies. A non-Panamanian can fully own and control a Panama S.A. — no local partner required.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Fast Company Formation</h3>
              <p className="text-brand-950">
                A Panama S.A. can be fully formed and registered in 5-10 business days. Compare this to months in many other countries. Fast time-to-market is critical for startups.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-brand-100 p-6 hover:shadow-lg transition">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-3">Strong Banking & Financial Sector</h3>
              <p className="text-brand-950">
                Panama has one of Latin America's largest banking sectors. International banks (HSBC, Citibank, BanRegio) and local banks (Banco General, BAC Credomatic) make financing accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section id="business-types" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Types of Business Structures in Panama</h2>

          <p className="text-brand-950 mb-12 opacity-80">
            Panama offers several legal structures for businesses. Most foreigners use the Sociedad Anónima (S.A.), which is the easiest and most flexible.
          </p>

          <div className="space-y-8">
            {/* S.A. */}
            <div className="border-l-4 border-brand-TEAL bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">1. Sociedad Anónima (S.A.) — Panama Corporation</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">What it is:</h4>
                  <p className="text-brand-950">
                    A limited liability corporation with shares. Shareholders own the company. Directors/officers manage it. The most common business structure for foreigners in Panama.
                  </p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <h4 className="font-heading font-bold text-brand-950 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Anonymous shares allowed (bearer shares must now be registered, but still private)</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Minimum 3 directors/officers (can be the same person, can be foreigners)</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Registered agent required (Panama law firm/company) — they represent you to government</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Limited liability — shareholders not personally liable for debts</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Can hold real property (land, buildings)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Costs:</h4>
                  <ul className="space-y-1 text-brand-950 text-sm">
                    <li>Formation: $800-1,500 (lawyer fee)</li>
                    <li>Government fees: $600-800</li>
                    <li>Annual registered agent: $500-1,000/year</li>
                    <li>Annual registry fees: $300-500</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">Timeline:</h4>
                  <p className="text-brand-950 text-sm">5-10 business days to form</p>
                </div>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <p className="text-brand-950 text-sm">
                    <strong>Use for:</strong> Operating businesses, holding real estate, investing, generating revenue. This is the default choice for most foreigners.
                  </p>
                </div>
              </div>
            </div>

            {/* Foundation */}
            <div className="border-l-4 border-brand-GOLD bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-GOLD mb-4">2. Fundación de Interés Privado (Private Interest Foundation)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">What it is:</h4>
                  <p className="text-brand-950">
                    A unique legal structure (not a company, not a trust) where assets are titled to the foundation, not to an individual. Offers asset protection and privacy benefits.
                  </p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <h4 className="font-heading font-bold text-brand-950 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Assets owned by foundation, not individual — strong privacy/asset protection</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Beneficiaries receive benefits from the foundation</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>No public registry (unlike S.A.) — more private</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <p className="text-brand-950 text-sm">
                    <strong>Use for:</strong> Estate planning, asset protection, family wealth management, privacy-sensitive holdings. Not ideal for operating businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* EIRR */}
            <div className="border-l-4 border-brand-950 bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">3. Empresa Individual de Responsabilidad Limitada (EIRR)</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">What it is:</h4>
                  <p className="text-brand-950">
                    A solo operator structure. One person owns and operates the business. Rare and less popular than S.A.
                  </p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="text-brand-950 text-sm">
                    <strong>Note:</strong> Most foreigners prefer S.A. because it's more flexible, allows multiple shareholders, and is more recognized internationally. EIRR is rarely used for foreign-owned businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Foreign Branch */}
            <div className="border-l-4 border-gray-400 bg-white rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">4. Branch of Foreign Company</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-brand-950 mb-2">What it is:</h4>
                  <p className="text-brand-950">
                    You register your existing US, EU, or other foreign company in Panama as a branch. More complex than forming a local S.A.
                  </p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="text-brand-950 text-sm">
                    <strong>Note:</strong> Generally not recommended. More expensive and complicated than forming a Panama S.A. Only consider if you have an existing company and specific legal reasons to register a branch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">Recommendation for Foreigners:</h3>
            <p className="text-brand-950">
              <strong>Form a Panama S.A.</strong> It's the fastest, cheapest, and most flexible option. You get full control, legal liability protection, and the ability to own real property. If you have specific asset protection or estate planning needs, consult a Panama lawyer about a Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Formation Process */}
      <section id="formation-process" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Formation Process for S.A. Step-by-Step</h2>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Choose Company Name",
                description: "Select a unique name for your S.A. You'll need 3 alternatives (in case first choice is taken). Check uniqueness with Panama's Public Registry.",
              },
              {
                step: 2,
                title: "Appoint Directors/Officers",
                description: "Designate 3 directors/officers. Can be the same person holding all 3 roles (if you want). Can be foreigners. Can be yourself. Names will be registered publicly.",
              },
              {
                step: 3,
                title: "Prepare Articles of Incorporation (Pacto Social)",
                description: "Your lawyer drafts the Articles of Incorporation (Pacto Social in Spanish). This is the constitutional document defining the company's structure, shares, and governance.",
              },
              {
                step: 4,
                title: "Notarization & Filing",
                description: "The Articles must be notarized by a Panama notary public (lawyer performs this). Then filed with the Public Registry (Registro Público).",
              },
              {
                step: 5,
                title: "Pay Registration Fees",
                description: "Submit government registration fee (~$600-800) to the Public Registry. They process the filing and issue incorporation certificate.",
              },
              {
                step: 6,
                title: "Receive Incorporation Certificate",
                description: "Your company is officially registered. You receive a certification of incorporation (Acto Constitutivo). Usually takes 5-10 business days total.",
              },
              {
                step: 7,
                title: "Get RUC (Tax ID)",
                description: "Apply for RUC (Registro Único de Contribuyente) from DGI (tax authority). This is your Panama tax identification number. Required for banking and operations.",
              },
              {
                step: 8,
                title: "Open Business Bank Account",
                description: "Visit Panama bank with incorporation certificate, passport, and RUC. Open business bank account. Many banks have English-speaking business departments.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-lg border border-brand-100 p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-TEAL text-white font-heading font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-heading text-xl font-bold text-brand-950 mb-2">{item.title}</h3>
                    <p className="text-brand-950 opacity-80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">Timeline: 5-10 Business Days</h3>
            <p className="text-brand-950">
              The entire process can be completed in 5-10 business days if you work with a good Panama law firm. Most of the time is waiting for the Public Registry to process the filing.
            </p>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section id="costs" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Detailed Cost Breakdown</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-brand-50 rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-6">First Year Total Cost Estimate</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Lawyer fee for company formation</span>
                  <span className="font-bold text-brand-TEAL text-lg">$800-1,500</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Government registration fee</span>
                  <span className="font-bold text-brand-TEAL text-lg">$600-800</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Registered agent fee (annual)</span>
                  <span className="font-bold text-brand-TEAL text-lg">$500-1,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Annual public registry fees</span>
                  <span className="font-bold text-brand-TEAL text-lg">$300-500</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Accounting/bookkeeping (12 months, basic)</span>
                  <span className="font-bold text-brand-TEAL text-lg">$2,400-6,000</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-white rounded p-3">
                  <span className="font-heading font-bold text-brand-950 text-lg">TOTAL FIRST YEAR</span>
                  <span className="font-heading font-bold text-brand-TEAL text-2xl">$5,000-10,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-8">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">Annual Ongoing Costs (Year 2+)</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Registered agent fee</span>
                  <span className="font-bold text-brand-TEAL">$500-1,000/year</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Public registry fees</span>
                  <span className="font-bold text-brand-TEAL">$300-500/year</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Accounting/bookkeeping (active business)</span>
                  <span className="font-bold text-brand-TEAL">$200-500/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                  <span className="text-brand-950">Income tax (if Panama-sourced income)</span>
                  <span className="font-bold text-brand-TEAL">25% of Panama net income</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-brand-50 rounded p-3">
                  <span className="font-heading font-bold text-brand-950">TOTAL ANNUAL</span>
                  <span className="font-heading font-bold text-brand-TEAL text-lg">$3,500-8,000</span>
                </div>
              </div>

              <p className="text-brand-950 text-sm opacity-75 mt-4">
                Note: If your company generates no Panama-sourced income (e.g., all revenue from US clients), you pay no income tax. Costs would be ~$3,500-5,000/year.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-2">Cost-Saving Tip 1:</h3>
              <p className="text-brand-950 text-sm">
                Use a registered agent that also provides bookkeeping services. Some firms bundle it at $800-1,200/year, saving you money compared to separate services.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-2">Cost-Saving Tip 2:</h3>
              <p className="text-brand-950 text-sm">
                If your company has no employees and is based entirely online (digital products, consulting, software), accounting costs are minimal. Focus on maintaining good records for tax compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Employees */}
      <section id="hiring" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Hiring Employees in Panama</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            Panama has a labor code with specific requirements for employers. Here's what you need to know:
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-4">Legal Requirements for Employees</h3>
              <ul className="space-y-3 text-brand-950">
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Employment Contract:</strong> Must be in writing, in Spanish. Defines salary, duties, hours, probation period.</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Minimum Wage:</strong> Varies by sector and region. Service sector: ~$500-700/month. Technical roles: $1,000+/month.</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>13th Month Salary (Décimo Tercero):</strong> Employees receive a 13th-month bonus in December. Equivalent to 1 month's salary.</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Vacation:</strong> 30 calendar days paid vacation after 11 months employment (accrued over time).</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Social Security Contribution:</strong> Employer contributes ~11.5% to employee's social security. Employee contributes ~8.75%.</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Healthcare:</strong> CAJA (social security healthcare) is mandatory. Covers basic healthcare.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-4">Foreign Employee Limits</h3>
              <div className="bg-yellow-50 p-4 rounded mb-4">
                <p className="text-brand-950 font-bold mb-2">90% Panamanian / 10% Foreign Rule</p>
                <p className="text-brand-950 text-sm">
                  At least 90% of your employees must be Panamanian nationals. You can hire up to 10% foreigners. Exceptions exist for technical/specialized roles (engineers, IT specialists, management) with Ministry approval.
                </p>
              </div>
              <p className="text-brand-950 text-sm opacity-75">
                This is important: If you hire a foreign manager or specialist, you must justify it to immigration — that this role requires foreign expertise not available locally.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-TEAL mb-4">Sample Monthly Cost for 1 Employee</h3>
              <div className="space-y-3 text-brand-950 text-sm">
                <div className="flex justify-between border-b border-brand-100 pb-2">
                  <span>Gross salary (example: service role)</span>
                  <span className="font-bold">$600</span>
                </div>
                <div className="flex justify-between border-b border-brand-100 pb-2">
                  <span>Employer social security contribution (11.5%)</span>
                  <span className="font-bold">$69</span>
                </div>
                <div className="flex justify-between border-b border-brand-100 pb-2">
                  <span>Plus 13th month (1/12 of annual)</span>
                  <span className="font-bold">$50</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-brand-950">TOTAL MONTHLY EMPLOYER COST</span>
                  <span className="font-bold text-brand-TEAL text-lg">~$720/month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3">Tip:</h3>
            <p className="text-brand-950 text-sm">
              For startups and small businesses, hiring Panamanian employees is actually quite affordable. A local administrative assistant or customer service representative costs $500-700/month total. Compare this to USA costs ($2,500+/month minimum for similar role).
            </p>
          </div>
        </div>
      </section>

      {/* Free Trade Zones */}
      <section id="free-zones" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Free Trade Zones & Special Economic Zones</h2>

          <p className="text-brand-950 mb-8 opacity-80">
            Panama offers special economic zones with significant tax and import benefits for qualifying businesses:
          </p>

          <div className="space-y-8">
            <div className="bg-brand-50 rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Colón Free Zone (Zona Libre de Colón)</h3>
              <div className="space-y-4">
                <p className="text-brand-950">
                  The world's second-largest free trade zone. Located on the Caribbean coast. Specializes in import/export and re-export of goods.
                </p>
                <div className="bg-white rounded p-4">
                  <h4 className="font-heading font-bold text-brand-950 mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>No import duties on goods brought in</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>No import/export licenses required</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Lower tax rates on operations</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Wholesale distribution hub for Latin America</span>
                    </li>
                  </ul>
                </div>
                <p className="text-brand-950 text-sm opacity-75">
                  Best for: Wholesale/import-export businesses, distribution companies, warehousing.
                </p>
              </div>
            </div>

            <div className="bg-brand-50 rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">Panama Pacífico (Special Economic Zone)</h3>
              <div className="space-y-4">
                <p className="text-brand-950">
                  Modern special economic zone near the Pacific entrance to the Panama Canal. English-speaking environment, modern infrastructure.
                </p>
                <div className="bg-white rounded p-4">
                  <h4 className="font-heading font-bold text-brand-950 mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>No import duties on raw materials/equipment</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Tax incentives (lower corporate tax rate)</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Modern facilities, 24-hour port operations</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>English-speaking business environment</span>
                    </li>
                  </ul>
                </div>
                <p className="text-brand-950 text-sm opacity-75">
                  Best for: Manufacturing, logistics, port operations, international commerce.
                </p>
              </div>
            </div>

            <div className="bg-brand-50 rounded-lg border border-brand-100 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">City of Knowledge (Intellectual Property & Tech Zone)</h3>
              <div className="space-y-4">
                <p className="text-brand-950">
                  Tech and innovation zone built on the former US military base (Clayton). Specializes in intellectual property, software, media, and education.
                </p>
                <div className="bg-white rounded p-4">
                  <h4 className="font-heading font-bold text-brand-950 mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-brand-950 text-sm">
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Intellectual property protections</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Tax incentives for tech/media companies</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>US-style infrastructure and ecosystem</span>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Perfect for startups and software companies</span>
                    </li>
                  </ul>
                </div>
                <p className="text-brand-950 text-sm opacity-75">
                  Best for: Software development, digital media, startups, tech companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Link */}
      <section id="visa-link" className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">Business Ownership & Friendly Nations Visa</h2>

          <div className="bg-white border border-brand-100 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">The Connection:</h3>
            <p className="text-brand-950 mb-4">
              Owning a Panama S.A. can qualify you for the <strong>Friendly Nations Visa</strong>, which leads to permanent residency in Panama. Here's how it works:
            </p>

            <div className="bg-brand-50 p-6 rounded">
              <h4 className="font-heading font-bold text-brand-950 mb-3">Requirements:</h4>
              <ul className="space-y-2 text-brand-950">
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span>Your country must be on the Friendly Nations list (USA, Canada, UK, most Latin American countries are)</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span>You must show an "economic link" to Panama</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span>Owning a business is ONE type of economic link (others: employment, property purchase of $200K+)</span>
                </li>
                <li className="flex">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-GOLD mr-3 mt-2 flex-shrink-0"></span>
                  <span>Your company must show economic activity (not dormant)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-2">Example Path:</h3>
              <ol className="space-y-2 text-brand-950 text-sm">
                <li className="flex">
                  <span className="inline-block font-bold text-brand-TEAL mr-2">1.</span>
                  <span>Form a Panama S.A. (service business, consulting, import-export, etc.)</span>
                </li>
                <li className="flex">
                  <span className="inline-block font-bold text-brand-TEAL mr-2">2.</span>
                  <span>Operate the business for a few months to show activity</span>
                </li>
                <li className="flex">
                  <span className="inline-block font-bold text-brand-TEAL mr-2">3.</span>
                  <span>Apply for Friendly Nations Visa with business ownership as economic link</span>
                </li>
                <li className="flex">
                  <span className="inline-block font-bold text-brand-TEAL mr-2">4.</span>
                  <span>Approved = Permanent Residency in Panama</span>
                </li>
              </ol>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-2">Benefit:</h3>
              <p className="text-brand-950 text-sm">
                Owning a business is an excellent way to get permanent residency. You're not just getting a visa — you're building a business in a growing economy. Consult an immigration lawyer about your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I operate my business entirely online/remotely from Panama?",
                a: "Yes. If you're servicing US/EU clients online, all that income is NOT subject to Panama tax (territorial system). You can legally run an online business with zero Panama-source income tax."
              },
              {
                q: "Do I need to be physically present in Panama to run my business?",
                a: "No. You can live outside Panama and operate a Panama S.A. Your registered agent handles government communications. However, for Friendly Nations Visa, you'll need to maintain residency in Panama."
              },
              {
                q: "Can I have multiple shareholders?",
                a: "Yes. A Panama S.A. can have multiple shareholders (people or companies). Shares can be held by foreigners. This is useful for partnerships or investment syndicates."
              },
              {
                q: "What if my business makes a loss? Do I owe taxes?",
                a: "No. You only pay corporate income tax on net profit. If you make a loss, no tax is owed. Panama allows loss carryforwards (up to 5 years in some cases)."
              },
              {
                q: "How private is my business? Is ownership public?",
                a: "S.A. ownership is registered with the Public Registry (so it's public record). If privacy is critical, consider a Foundation instead. Directors' names must be disclosed but can be corporate nominees."
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

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-TEAL to-brand-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Panama Business?
          </h2>
          <p className="text-white opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Our business formation specialists can guide you through every step. From company registration to tax planning to hiring your first employee.
          </p>
          <Link
            href={`/${lang}/contacto`}
            className="inline-block px-8 py-4 bg-white text-brand-TEAL rounded-lg font-bold hover:shadow-lg transition text-lg"
          >
            Schedule a Business Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
