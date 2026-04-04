import type { Metadata } from 'next';
import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';
import {
  Heart,
  Hospital,
  Stethoscope,
  Pill,
  Smile,
  TrendingDown,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';



export const metadata: Metadata = {
  title: 'Panama Healthcare Costs 2026: Complete Price Guide for Expats (Private & Public)',
  description: 'Detailed breakdown of healthcare costs in Panama for expats. Doctor visits, procedures, surgery, dental, insurance plans, and comparison vs USA healthcare.',
  keywords: 'panama healthcare costs, panama hospital costs, panama doctor visit cost, expat health insurance panama',
  alternates: {
    canonical: 'https://panamarealestatesale.com/blog/panama-healthcare-costs-2026',
  },
  openGraph: {
    title: 'Panama Healthcare Costs 2026: Complete Price Guide',
    description: 'Real prices for healthcare in Panama: doctor visits ($40-70), procedures, surgery, and how much you actually pay vs USA costs.',
    type: 'article',
    url: 'https://panamarealestatesale.com/blog/panama-healthcare-costs-2026',
    siteName: 'VIP Expats Panama Real Estate',
  },
};

const comparisonData = [
  { procedure: 'Hip Replacement', panama: 12000, usa: 40000, difference: 28000 },
  { procedure: 'Appendectomy', panama: 5000, usa: 18000, difference: 13000 },
  { procedure: 'Colonoscopy', panama: 500, usa: 2500, difference: 2000 },
];

const doctorVisits = [
  { type: 'General Practitioner', panama: '$40–70', usa: '$150–300' },
  { type: 'Specialist Consultation', panama: '$60–120', usa: '$200–400' },
  { type: 'Cardiologist', panama: '$80–150', usa: '$300–600' },
  { type: 'Dermatologist', panama: '$60–120', usa: '$250–500' },
];

const diagnostics = [
  { test: 'MRI Scan', panama: '$250–500', usa: '$1,200–3,000' },
  { test: 'CT Scan', panama: '$200–400', usa: '$1,000–2,500' },
  { test: 'X-Ray', panama: '$30–80', usa: '$200–600' },
  { test: 'Blood Work Panel', panama: '$40–120', usa: '$300–800' },
];

const procedures = [
  { procedure: 'Colonoscopy', panama: '$400–700', usa: '$2,000–4,000' },
  { procedure: 'Endoscopy', panama: '$300–600', usa: '$1,500–3,000' },
  { procedure: 'Ultrasound', panama: '$80–150', usa: '$500–1,500' },
  { procedure: 'Stress Test', panama: '$200–400', usa: '$1,000–3,000' },
];

const dentalServices = [
  { service: 'Routine Cleaning', panama: '$60–100', usa: '$200–300' },
  { service: 'Filling (Composite)', panama: '$80–150', usa: '$200–400' },
  { service: 'Crown', panama: '$400–700', usa: '$1,000–1,500' },
  { service: 'Root Canal', panama: '$300–600', usa: '$800–1,500' },
  { service: 'Dental Implant', panama: '$1,500–2,500', usa: '$4,000–6,000' },
  { service: 'Teeth Whitening', panama: '$200–400', usa: '$600–1,500' },
];

const surgeries = [
  { surgery: 'Appendectomy', panama: '$3,000–6,000', usa: '$15,000–35,000' },
  { surgery: 'Hip Replacement', panama: '$8,000–15,000', usa: '$35,000–55,000' },
  { surgery: 'Knee Replacement', panama: '$8,000–14,000', usa: '$35,000–50,000' },
  { surgery: 'Cataract Surgery (per eye)', panama: '$800–1,500', usa: '$3,000–5,000' },
  { surgery: 'LASIK Eye Surgery (per eye)', panama: '$800–1,200', usa: '$2,000–3,000' },
  { surgery: 'Cardiac Bypass', panama: '$25,000–45,000', usa: '$100,000–200,000' },
  { surgery: 'C-Section Delivery', panama: '$2,000–4,000', usa: '$10,000–20,000' },
];

const insurancePlans = [
  {
    tier: 'Basic (Under 60)',
    cost: '$80–150/month',
    coverage: 'Major illnesses, hospital stays, emergency care',
  },
  {
    tier: 'Comprehensive (Under 60)',
    cost: '$150–280/month',
    coverage: 'Preventive care, annual checkups, maternity, some dental/vision',
  },
  {
    tier: 'Premium (Under 60)',
    cost: '$280–500/month',
    coverage: 'Full dental, vision, mental health, specialist access, no wait times',
  },
  {
    tier: 'Over 65 Plans',
    cost: '$250–500/month',
    coverage: 'Designed for older expats, pre-existing conditions covered',
  },
];

const hospitals = [
  {
    name: 'Hospital Punta Pacifica',
    description: 'JCI-accredited, affiliated with Johns Hopkins, state-of-the-art facilities. First choice for serious procedures.',
    specialties: 'Cardiology, Oncology, Orthopedics, General Surgery',
  },
  {
    name: 'Clinica Hospital San Fernando',
    description: 'Private, excellent reputation with expats, modern equipment, bilingual staff.',
    specialties: 'General Medicine, Emergency, Maternity, Surgery',
  },
  {
    name: 'Hospital Nacional',
    description: 'Public hospital, free/subsidized for residents with CAJA insurance. Functional but often crowded.',
    specialties: 'Emergency, General Medicine, Surgery',
  },
  {
    name: 'Centro Médico Paitilla',
    description: 'Multi-specialty center, convenient location, modern diagnostic equipment.',
    specialties: 'Diagnostics, Specialists, Outpatient Surgery',
  },
];

const faqData = [
  {
    question: 'Is healthcare in Panama actually better than the USA?',
    answer: 'In terms of cost, absolutely yes. Quality is comparable to the USA for most procedures, especially at JCI-accredited hospitals like Punta Pacifica. Many doctors are trained in the USA or Europe. The main difference: you wait less and pay far less. However, emergency services at public hospitals can be slower. For serious conditions, private hospitals are standard for expats.',
  },
  {
    question: 'Do I need health insurance in Panama?',
    answer: 'Not legally required if you\'re not a resident, but highly recommended. Tourist stay visitors typically buy temporary international insurance ($50–150/month for basic coverage). Once you establish residency, private insurance costs $80–500/month depending on age and coverage. Many expats self-insure by keeping $10K–20K in savings and using direct-pay for routine care.',
  },
  {
    question: 'Can I use my US health insurance in Panama?',
    answer: 'Most US insurance (Blue Cross, Aetna, United) does NOT work in Panama. You\'ll need Panama-specific insurance or travel insurance. Some expats use international plans (Cigna, GeoBlue, World Nomads) that work globally. Always check fine print—many exclude pre-existing conditions. Local Panama insurance is cheaper and more hassle-free.',
  },
  {
    question: 'What about prescription medications in Panama?',
    answer: 'Medications are 60–80% cheaper than the USA, even brand-name drugs. Many medications available OTC in Panama require prescriptions in the USA. A month of blood pressure medication costs $10–20 in Panama vs $100+ in the USA. Doctor visits are cheap, so you can easily get prescriptions. Pharmacies are ubiquitous; no insurance needed.',
  },
  {
    question: 'Does the Pensionado visa give healthcare discounts?',
    answer: 'Yes—major benefit. Pensionado visa holders receive 50% discount on hospital services, 30% on specific services (buses, ferries, utilities). For someone with recurring medical needs, this can save thousands annually. Example: a $5,000 hospital bill becomes $2,500 with Pensionado status. Worth getting the visa just for this.',
  },
  {
    question: 'What if I have a serious emergency in Panama?',
    answer: 'Call 911 or go directly to Hospital Punta Pacifica or San Fernando. Emergency care is excellent at private hospitals. Cost of emergency room visit: $200–600. Surgery or hospitalization: varies widely. Private insurance covers this; without it, you\'ll pay out-of-pocket, but costs are still far lower than USA. Having $5K–10K emergency fund is smart.',
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <article className="bg-white min-h-screen pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white border-b-2 border-brand-100 mb-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-brand-TEAL" />
            <span className="text-sm font-semibold text-brand-TEAL tracking-wider uppercase">
              Complete Healthcare Pricing
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-950 mb-6 leading-tight">
            Panama Healthcare Costs 2026
          </h1>
          <p className="text-xl text-brand-700 mb-8 max-w-2xl leading-relaxed">
            Complete price guide for expats. Doctor visits, procedures, surgery, dental care, and insurance plans. Real costs compared to the USA.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">60–80% Cheaper than USA</span>
            </div>
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">Quality Private Hospitals</span>
            </div>
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">Fast Specialist Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Healthcare in Panama is transparent, affordable, and surprisingly high-quality. A private doctor visit costs $40–70 instead of $150–300 in the USA. A hip replacement costs $12,000 instead of $40,000+. Dental implants are $1,500–2,500 instead of $4,000–6,000.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Panama's private healthcare system serves both locals and expats. Hospitals are modern, doctors are often trained abroad, and you get treatment without insurance bureaucracy. This article breaks down every cost category so you can budget accurately for your healthcare in Panama.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed">
            Key insight: Many people travel FROM the USA to Panama for dental work, cosmetic surgery, and joint replacement. The savings often exceed airfare costs. As an expat living here, you get those savings every time.
          </p>
        </div>
      </section>

      {/* Three.js Comparison Chart */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <TrendingDown className="w-8 h-8 text-brand-TEAL" />
          Key Procedures: Panama vs USA Cost Comparison
        </h2>
        <p className="text-brand-700 mb-8">
          See how much you save on major procedures by living in Panama. These are real, verified prices from top hospitals.
        </p>
        <div className="bg-brand-50 border-2 border-brand-100 rounded-xl p-8 h-96">
          <CostBarChart data={comparisonData} />
        </div>
        <p className="text-sm text-brand-600 mt-4">
          Data sources: Panama hospital price lists 2026, USA average costs from Healthcare Cost Institute
        </p>
      </section>

      {/* Doctor Visits */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Stethoscope className="w-8 h-8 text-brand-TEAL" />
          Doctor Visits & Consultations
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Private doctor visits in Panama are straightforward: call, book online or walk in, see the doctor within hours, pay cash at visit end. No insurance forms, no waiting weeks for appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {doctorVisits.map((visit, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-3">{visit.type}</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-brand-600">Panama</p>
                  <p className="text-2xl font-bold text-brand-TEAL">{visit.panama}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-600">USA Average</p>
                  <p className="text-2xl font-bold text-brand-700">{visit.usa}</p>
                </div>
                <p className="text-xs text-brand-600 pt-2 border-t border-brand-100">
                  Walk-in clinics typically cheaper; appointments same-day
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded mb-8">
          <h3 className="font-heading font-bold text-brand-950 mb-3">How Doctor Visits Work in Panama</h3>
          <ol className="space-y-3 text-brand-700 text-sm list-decimal list-inside">
            <li>Call a private clinic or hospital and request appointment (same day usually available)</li>
            <li>Arrive 10 minutes early with ID and address</li>
            <li>See doctor for 15–30 minutes</li>
            <li>Pay cash at checkout: $40–70 for GP, $80–150 for specialist</li>
            <li>Get prescriptions, referrals, or treatment recommendations</li>
            <li>No insurance paperwork, no pre-authorization required</li>
          </ol>
        </div>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Common Specialist Costs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-brand-950 mb-3">Panama Prices</p>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li>Cardiologist: $80–150</li>
                <li>Dermatologist: $60–120</li>
                <li>Gastroenterologist: $100–180</li>
                <li>Orthopedist: $100–200</li>
                <li>Neurologist: $120–200</li>
                <li>Psychiatrist: $80–150</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-950 mb-3">USA Prices (Average)</p>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li>Cardiologist: $200–400</li>
                <li>Dermatologist: $200–400</li>
                <li>Gastroenterologist: $200–500</li>
                <li>Orthopedist: $200–500</li>
                <li>Neurologist: $200–500</li>
                <li>Psychiatrist: $150–300</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics & Tests */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Hospital className="w-8 h-8 text-brand-TEAL" />
          Diagnostic Tests & Imaging
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {diagnostics.map((test, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-3">{test.test}</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-brand-600">Panama</p>
                  <p className="text-2xl font-bold text-brand-TEAL">{test.panama}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-600">USA Average</p>
                  <p className="text-2xl font-bold text-brand-700">{test.usa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Procedures & Diagnostic Scans</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand-100">
                  <th className="text-left py-3 px-4 font-heading font-bold text-brand-950">Procedure</th>
                  <th className="text-left py-3 px-4 font-heading font-bold text-brand-950">Panama</th>
                  <th className="text-left py-3 px-4 font-heading font-bold text-brand-950">USA</th>
                </tr>
              </thead>
              <tbody>
                {procedures.map((proc, idx) => (
                  <tr key={idx} className="border-b border-brand-100 hover:bg-brand-50">
                    <td className="py-3 px-4 text-brand-950">{proc.procedure}</td>
                    <td className="py-3 px-4 text-brand-700">{proc.panama}</td>
                    <td className="py-3 px-4 text-brand-700">{proc.usa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dental */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Smile className="w-8 h-8 text-brand-TEAL" />
          Dental Care: The Medical Tourism Advantage
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Dental work in Panama is so affordable that Americans fly to Panama just for treatment. A $3,000 root canal in the USA costs $300–600 in Panama. A $5,000 dental implant costs $1,500–2,500 in Panama. Many expats budget for comprehensive dental work in their first year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {dentalServices.map((service, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-3">{service.service}</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-brand-600">Panama</p>
                  <p className="text-2xl font-bold text-brand-TEAL">{service.panama}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-600">USA Average</p>
                  <p className="text-2xl font-bold text-brand-700">{service.usa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-8 mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-4">Why Dental is So Cheap in Panama</h3>
          <ul className="space-y-3 text-brand-700">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span>Low cost of living means dentist overhead is 70% lower than USA</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span>Many dentists trained in USA but choose to practice in Panama</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span>No malpractice insurance inflating costs</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span>Quality is excellent—dentists use same materials and equipment as USA</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span>Competition keeps prices competitive</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-brand-GOLD p-6 rounded">
          <p className="font-semibold text-brand-950 mb-2">Pro Tip: Dental Tourism Package</p>
          <p className="text-brand-700 text-sm">
            If you need multiple dental procedures, book them all in your first 2–3 weeks. Dentists often give discounts for multiple appointments. You can get a full mouth of implants, crowns, and cosmetic work for $8,000–15,000 total (vs $40,000+ in USA), then have beautiful teeth for life while enjoying Panama.
          </p>
        </div>
      </section>

      {/* Surgery */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Heart className="w-8 h-8 text-brand-TEAL" />
          Major Surgery: Cost Comparison & Top Hospitals
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            For major surgery, Panama's prices are 60–75% lower than the USA, with comparable quality. Hospitals like Punta Pacifica are JCI-accredited (same standard as top US hospitals). Many cardiac surgeons in Panama trained at Johns Hopkins or Mayo Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {surgeries.map((surgery, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-3 text-sm">{surgery.surgery}</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-brand-600">Panama</p>
                  <p className="text-xl font-bold text-brand-TEAL">{surgery.panama}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-600">USA</p>
                  <p className="text-xl font-bold text-brand-700">{surgery.usa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8 mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Top Hospitals for Surgery</h3>
          <div className="space-y-6">
            {hospitals.map((hospital, idx) => (
              <div key={idx} className="border-b border-brand-100 pb-6 last:border-0">
                <h4 className="font-heading font-bold text-brand-950 mb-2">{hospital.name}</h4>
                <p className="text-brand-700 text-sm mb-3">{hospital.description}</p>
                <p className="text-sm text-brand-600"><strong>Specialties:</strong> {hospital.specialties}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded">
          <h3 className="font-heading font-bold text-brand-950 mb-3">Medical Tourism Reality</h3>
          <p className="text-brand-700 text-sm mb-3">
            Many Americans skip the USA entirely for joint replacement, cardiac surgery, and cosmetic procedures. They fly to Panama, have the surgery at a top hospital, recover in a luxury recovery villa, and save $25,000–100,000 compared to USA costs.
          </p>
          <p className="text-brand-700 text-sm">
            As an expat living here, you get those same prices as a resident—permanent access to world-class, affordable surgery.
          </p>
        </div>
      </section>

      {/* Insurance Plans */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Heart className="w-8 h-8 text-brand-TEAL" />
          Health Insurance Plans for Expats
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Health insurance in Panama is optional if you're a tourist, but recommended once you establish residency. Costs are remarkably low compared to US insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {insurancePlans.map((plan, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-2">{plan.tier}</h3>
              <p className="text-2xl font-bold text-brand-TEAL mb-3">{plan.cost}</p>
              <p className="text-sm text-brand-700">{plan.coverage}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8 mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Insurance Providers in Panama</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-brand-950">Popular Providers</p>
              <ul className="text-sm text-brand-700 space-y-1 mt-2">
                <li>• Seguros Monterrey (Mexican insurer, very popular with expats)</li>
                <li>• Caja de Seguro Social (CAJA) — public insurance, covers residents with $1K/month income</li>
                <li>• Seguros Universales (UNI) — domestic private insurer</li>
                <li>• QUALITAS — another major domestic option</li>
                <li>• International plans: Cigna, GeoBlue, World Nomads (if using travel insurance)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-4">Insurance Strategy for Expats</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Year 1: Tourist + Travel Insurance</p>
                <p className="text-sm text-brand-700">While on tourist visa, use travel insurance ($50–150/month) for emergencies. Cash-pay for routine care (very cheap).</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Year 2+: Local Private Insurance</p>
                <p className="text-sm text-brand-700">Once you establish residency, switch to local Panamanian insurance. Much cheaper and covers you comprehensively.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">CAJA for Low-Income Retirees</p>
                <p className="text-sm text-brand-700">If your income is under $1,000/month, you qualify for CAJA (public insurance). Covers major care but slower service. Good backup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panama City Scene */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Panama's Healthcare Infrastructure: Urban Advantage</h2>
        <p className="text-brand-700 mb-8">
          Panama City is a healthcare hub for Central America. With dozens of hospitals, clinics, and specialists, you have world-class care minutes away.
        </p>
        <div className="bg-brand-50 border-2 border-brand-100 rounded-xl p-8 h-96">
          <PanamaCityScene />
        </div>
      </section>

      {/* Medications */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Pill className="w-8 h-8 text-brand-TEAL" />
          Medications: 60–80% Cheaper
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Prescription medications in Panama cost 60–80% less than the USA, even for brand-name drugs. Many medications available OTC in Panama require prescriptions in the USA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3">Example: Blood Pressure</h3>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-brand-600">Panama (1 month)</p>
                <p className="text-2xl font-bold text-brand-TEAL">$10–20</p>
              </div>
              <div>
                <p className="text-xs text-brand-600">USA (1 month)</p>
                <p className="text-2xl font-bold text-brand-700">$80–150</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3">Example: Diabetes</h3>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-brand-600">Panama (1 month)</p>
                <p className="text-2xl font-bold text-brand-TEAL">$15–30</p>
              </div>
              <div>
                <p className="text-xs text-brand-600">USA (1 month)</p>
                <p className="text-2xl font-bold text-brand-700">$100–200</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3">Example: Anxiety</h3>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-brand-600">Panama (1 month)</p>
                <p className="text-2xl font-bold text-brand-TEAL">$8–15</p>
              </div>
              <div>
                <p className="text-xs text-brand-600">USA (1 month)</p>
                <p className="text-2xl font-bold text-brand-700">$50–150</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded">
          <h3 className="font-heading font-bold text-brand-950 mb-3">How to Buy Medications in Panama</h3>
          <ol className="space-y-3 text-brand-700 text-sm list-decimal list-inside">
            <li>Get a prescription from a doctor ($40–80 visit), or bring a USA prescription</li>
            <li>Walk into any pharmacy (Farmacia Arrocha, Pharmacys, or local clinics)</li>
            <li>Show prescription or medication name</li>
            <li>Pay directly—many medications available OTC without prescription</li>
            <li>For rare medications, pharmacies can usually order within 24 hours</li>
          </ol>
        </div>
      </section>

      {/* CAJA - Public System */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">CAJA: Panama's Public Healthcare System</h2>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8 mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">How CAJA Works</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Eligibility</p>
                <p className="text-brand-700 text-sm">Permanent residents with $1,000/month income (or proof of $12K/year) can join. Free or subsidized coverage.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Coverage</p>
                <p className="text-brand-700 text-sm">Covers hospital stays, emergency, preventive care, some medications. Visit costs minimal ($2–5).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Trade-Offs</p>
                <p className="text-brand-700 text-sm">Slower service, limited specialist access, crowded clinics. Better for major emergencies than routine care.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Best Use</p>
                <p className="text-brand-700 text-sm">CAJA as backup for emergencies; use private healthcare for routine care and specialist access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-12">Frequently Asked Questions About Healthcare in Panama</h2>

        <div className="space-y-6">
          {faqData.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white border-2 border-brand-100 rounded-lg p-6 cursor-pointer group"
            >
              <summary className="font-heading font-bold text-lg text-brand-950 flex items-center gap-3 select-none">
                <span className="text-2xl text-brand-TEAL group-open:rotate-180 transition-transform">
                  ▶
                </span>
                {faq.question}
              </summary>
              <p className="text-brand-700 mt-4 ml-8 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-brand-TEAL to-brand-950 text-white rounded-2xl max-w-4xl mx-auto px-8 py-16 mb-16">
        <h2 className="text-4xl font-heading font-bold mb-6">Ready to Access World-Class Healthcare at Panama Prices?</h2>
        <p className="text-xl mb-8 opacity-95 leading-relaxed max-w-2xl">
          Panama's healthcare system offers transparency, affordability, and quality unmatched in the region. Whether you're planning a move or already here, our team can help you navigate insurance options and connect with top hospitals.
        </p>
        <p className="text-lg mb-8 opacity-90">
          <strong>Start your healthcare journey in Panama with confidence.</strong>
        </p>
        <Link
          href={`/${lang}/contacto`}
          className="inline-block bg-white text-brand-TEAL font-bold py-4 px-8 rounded-lg hover:bg-brand-50 transition-colors text-lg"
        >
          Get Healthcare Guidance & Connect with Doctors
        </Link>
      </section>

      {/* Key Takeaways */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Healthcare in Panama: Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              60–80% Cheaper
            </h3>
            <p className="text-brand-700 text-sm">
              Doctor visits, medications, procedures, and surgery all cost a fraction of USA prices. A $40K hip replacement costs $12K in Panama.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              High Quality
            </h3>
            <p className="text-brand-700 text-sm">
              Top hospitals are JCI-accredited. Doctors trained at Johns Hopkins, Mayo Clinic. Same standards as top US hospitals.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              No Insurance Hassle
            </h3>
            <p className="text-brand-700 text-sm">
              Walk into private clinic, see doctor same day, pay cash. No authorization forms, no networks to navigate.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              Pensionado 50% Discount
            </h3>
            <p className="text-brand-700 text-sm">
              Pensionado visa holders receive 50% off hospital services. Huge savings over a lifetime.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
