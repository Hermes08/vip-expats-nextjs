'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, DollarSign, Shield, Scale, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';

const BuyingPropertyPanamaUSCitizensContent = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'US Buyer Guide 2026' : 'Guía para Compradores Estadounidenses 2026',
    title: isEn ? 'Buying Property in Panama as a US Citizen' : 'Comprar Propiedad en Panamá siendo Ciudadano Estadounidense',
    subtitle: isEn
      ? 'US citizens can buy property in Panama with the same rights as locals — no visa, no residency, no special permits required for most purchases.'
      : 'Los ciudadanos estadounidenses pueden comprar propiedades en Panamá con los mismos derechos que los locales — sin visa, sin residencia, sin permisos especiales para la mayoría de compras.',
    intro: isEn
      ? 'Buying property in Panama as a US citizen is legally straightforward and financially attractive. Panama\'s constitution grants foreigners the same property rights as citizens, and the dollarized economy means American buyers never face currency conversion risk. With property prices averaging 40–60% below equivalent North American markets, growing expat communities in Panama City, Boquete, and Coronado, and a generous set of residency visa options tied to real estate investment, Panama has become the #1 international property market for Americans looking to invest or relocate abroad.'
      : 'Comprar una propiedad en Panamá como ciudadano estadounidense es legalmente sencillo y financieramente atractivo. La constitución de Panamá otorga a los extranjeros los mismos derechos de propiedad que a los ciudadanos, y la economía dolarizada significa que los compradores americanos nunca enfrentan riesgo de conversión de divisas.',
    canBuyTitle: isEn ? 'Can US Citizens Buy Property in Panama?' : '¿Pueden los Ciudadanos Estadounidenses Comprar en Panamá?',
    canBuyText: isEn
      ? 'Yes — and the process is simpler than most expect. You do not need to be a resident of Panama, speak Spanish, or obtain special government approval to purchase titled (titled freehold) property. The only exception is property within 10 kilometers of an international border or coastline designated as a "restricted zone" — in those cases, you may need to purchase through a Panamanian corporation, which your attorney can set up affordably. For the vast majority of expat-popular locations — Panama City, Boquete, Coronado, Bocas del Toro — no special structure is required.'
      : 'Sí, y el proceso es más sencillo de lo que la mayoría espera. No necesita ser residente de Panamá, hablar español ni obtener aprobación gubernamental especial para comprar propiedades con título. La única excepción es la propiedad dentro de los 10 kilómetros de una frontera internacional o costa designada como "zona restringida".',
    stepsTitle: isEn ? 'Step-by-Step Buying Process' : 'Proceso de Compra Paso a Paso',
    steps: [
      {
        step: '01',
        title: isEn ? 'Hire a Panamanian Attorney' : 'Contrate un Abogado Panameño',
        desc: isEn
          ? 'Your first step is engaging a bilingual Panamanian attorney (not a real estate agent). They will conduct a title search, review contracts, and oversee the closing. Legal fees typically run $1,000–$2,500.'
          : 'Su primer paso es contratar a un abogado panameño bilingüe. Realizarán una búsqueda de título, revisarán contratos y supervisarán el cierre. Los honorarios legales suelen ser de $1,000–$2,500.',
      },
      {
        step: '02',
        title: isEn ? 'Title Search & Due Diligence' : 'Búsqueda de Título y Debida Diligencia',
        desc: isEn
          ? 'Your attorney verifies the property at the Public Registry (Registro Público). They confirm the title is clean, no liens exist, property taxes are paid, and the seller has legal authority to sell. This takes 1–2 weeks.'
          : 'Su abogado verifica la propiedad en el Registro Público. Confirma que el título está limpio, que no existen gravámenes, que los impuestos están pagados y que el vendedor tiene autoridad legal para vender.',
      },
      {
        step: '03',
        title: isEn ? 'Sign the Promise-to-Buy Contract' : 'Firme el Contrato de Promesa de Compra',
        desc: isEn
          ? 'A Promesa de Compraventa is signed by both parties. You\'ll typically pay a 10% deposit at this stage, which is held in escrow. The contract specifies the final price, timeline, and conditions for the sale.'
          : 'Ambas partes firman una Promesa de Compraventa. Generalmente pagará un depósito del 10% en esta etapa, que se mantiene en fideicomiso. El contrato especifica el precio final, el cronograma y las condiciones de la venta.',
      },
      {
        step: '04',
        title: isEn ? 'Final Deed & Registration' : 'Escritura Final y Registro',
        desc: isEn
          ? 'The sale is formalized through a public deed (escritura pública) signed before a Panamanian notary. The deed is then registered in the Public Registry. You receive a certified copy of your registered title. This entire process takes 30–90 days.'
          : 'La venta se formaliza mediante una escritura pública firmada ante un notario panameño. La escritura se registra en el Registro Público. Recibirá una copia certificada de su título registrado. Todo el proceso tarda 30–90 días.',
      },
    ],
    costsTitle: isEn ? 'Costs of Buying Property in Panama' : 'Costos de Comprar Propiedad en Panamá',
    costs: [
      { item: isEn ? 'Property Transfer Tax' : 'Impuesto de Transferencia', amount: '2%' },
      { item: isEn ? 'Stamp Tax' : 'Impuesto de Timbre', amount: '0.1%' },
      { item: isEn ? 'Real Estate Agent Commission' : 'Comisión del Agente Inmobiliario', amount: '3–5%' },
      { item: isEn ? 'Legal Fees' : 'Honorarios Legales', amount: '$1,000–$2,500' },
      { item: isEn ? 'Notary Fees' : 'Honorarios Notariales', amount: '$200–$600' },
      { item: isEn ? 'Public Registry Fee' : 'Tasa del Registro Público', amount: '~$100–$300' },
    ],
    residencyTitle: isEn ? 'Get Residency Through Your Purchase' : 'Obtenga Residencia a Través de Su Compra',
    residencyOptions: [
      {
        title: isEn ? 'Pensionado Visa + Real Estate' : 'Visa Pensionado + Bienes Raíces',
        desc: isEn
          ? 'Qualify with a $750/month pension plus a $100,000 real estate purchase. Includes 20+ pensionado discounts on healthcare, entertainment, and utilities.'
          : 'Califique con una pensión de $750/mes más una compra de bienes raíces de $100,000. Incluye más de 20 descuentos para pensionados en salud, entretenimiento y servicios.',
      },
      {
        title: isEn ? 'Qualified Investor Visa' : 'Visa de Inversionista Calificado',
        desc: isEn
          ? 'Invest $300,000 or more in Panamanian real estate to qualify for permanent residency with a fast-track 3-month processing time.'
          : 'Invierta $300,000 o más en bienes raíces panameños para calificar para la residencia permanente con un tiempo de procesamiento acelerado de 3 meses.',
      },
      {
        title: isEn ? 'Friendly Nations Visa' : 'Visa de Naciones Amigas',
        desc: isEn
          ? 'US citizens qualify for the Friendly Nations Visa, which can be obtained with a $200,000 real estate investment and provides a path to permanent residency.'
          : 'Los ciudadanos estadounidenses califican para la Visa de Naciones Amigas, que puede obtenerse con una inversión inmobiliaria de $200,000 y proporciona un camino hacia la residencia permanente.',
      },
    ],
    warningsTitle: isEn ? 'Important Warnings for US Buyers' : 'Advertencias Importantes para Compradores Estadounidenses',
    warnings: isEn
      ? [
          'Always use a licensed Panamanian attorney — never rely on the seller\'s lawyer to protect your interests.',
          'Verify titles personally at the Public Registry, not just via agent assurances.',
          'Be aware that some coastal and border-zone properties require corporate ownership structures.',
          'US citizens must still file US tax returns and report foreign property holdings to the IRS (FBAR/FATCA may apply).',
          'Avoid off-plan (pre-construction) purchases without careful legal review of the developer\'s financial standing.',
        ]
      : [
          'Siempre use un abogado panameño con licencia — nunca confíe en el abogado del vendedor para proteger sus intereses.',
          'Verifique los títulos personalmente en el Registro Público, no solo a través de garantías del agente.',
          'Tenga en cuenta que algunas propiedades costeras y en zonas fronterizas requieren estructuras de propiedad corporativa.',
        ],
    ctaTitle: isEn ? 'Start Your Panama Property Search' : 'Comience Su Búsqueda de Propiedad en Panamá',
    ctaDesc: isEn
      ? 'Browse properties curated for US expat buyers — from Panama City condos to Boquete highlands estates.'
      : 'Explore propiedades seleccionadas para compradores expats estadounidenses — desde condos en Ciudad de Panamá hasta propiedades en las tierras altas de Boquete.',
  };

  return (
    <div className="bg-brand-950 min-h-screen pt-24 pb-40 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-brand-GOLD/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO */}
        <section className="py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">{content.badge}</span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.85]">
              {isEn ? 'Buying Property in Panama' : 'Comprar en Panamá'} <br />
              <span className="text-brand-GOLD">{isEn ? 'As a US Citizen' : 'Como Ciudadano Americano'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">{content.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Magnetic strength={0.3}>
                <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px]">
                  {isEn ? 'Browse Properties' : 'Ver Propiedades'}
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-white/10">
                  {isEn ? 'Speak to an Advisor' : 'Hablar con un Asesor'}
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </section>

        {/* CAN US CITIZENS BUY */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-10">{content.canBuyTitle}</h2>
            <p className="text-lg text-slate-300 leading-relaxed font-medium mb-6">{content.intro}</p>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">{content.canBuyText}</p>
          </div>
        </section>

        {/* STEPS */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">How It Works</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase italic leading-[0.8]">{content.stepsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.steps.map((step, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl border-white/5">
                <span className="text-6xl font-black text-brand-GOLD/20 block mb-4">{step.step}</span>
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COSTS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Closing Costs</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">{content.costsTitle}</h2>
            <div className="space-y-4">
              {content.costs.map((cost, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-white/5">
                  <span className="text-slate-300 font-medium">{cost.item}</span>
                  <span className="text-brand-GOLD font-black">{cost.amount}</span>
                </div>
              ))}
              <p className="text-slate-500 text-sm italic mt-6">{isEn ? 'Total closing costs typically run 5–8% of purchase price.' : 'Los costos de cierre totales suelen ser del 5–8% del precio de compra.'}</p>
            </div>
          </div>
        </section>

        {/* RESIDENCY */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Residency Options</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase italic leading-[0.8]">{content.residencyTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.residencyOptions.map((option, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl border-white/5 hover:border-brand-GOLD/30 transition-all">
                <Scale className="text-brand-GOLD mb-6" size={36} />
                <h3 className="text-xl font-black text-white mb-4 uppercase italic tracking-tighter">{option.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={`/${lang}/guides/friendly-nations-visa-panama`} className="inline-flex items-center gap-3 text-brand-GOLD font-black uppercase tracking-[0.3em] text-xs hover:gap-5 transition-all italic">
              {isEn ? 'Learn About All Visa Options' : 'Conocer Todas las Opciones de Visa'} <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* WARNINGS */}
        <section className="py-24 border-t border-white/5 max-w-4xl mx-auto">
          <div className="mb-10">
            <AlertCircle className="text-amber-400 mb-6" size={36} />
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-10">{content.warningsTitle}</h2>
          </div>
          <div className="space-y-5">
            {content.warnings.map((warning, i) => (
              <div key={i} className="flex items-start gap-5">
                <AlertCircle className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-300 font-medium leading-relaxed">{warning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10">
          <FileText className="mx-auto mb-12" size={72} />
          <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
          <p className="text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic opacity-80">{content.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
                {isEn ? 'Browse Properties' : 'Ver Propiedades'} <ArrowRight className="inline ml-2" size={16} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/relocation/tours`} className="btn-3d btn-3d-gold bg-brand-950 text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs">
                {isEn ? 'Book a Discovery Tour' : 'Reserve un Tour'}
              </Link>
            </Magnetic>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BuyingPropertyPanamaUSCitizensContent;
