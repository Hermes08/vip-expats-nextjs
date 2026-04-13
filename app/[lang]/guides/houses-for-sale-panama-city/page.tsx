import type { Metadata } from 'next';
import Link from 'next/link';

type Props = { params: Promise<{ lang: string }> };

const BRAND_NAVY = '#1B2A4A';
const BRAND_GOLD = '#C9A84C';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Houses for Sale in Panama City, Panama — Prices, Neighborhoods & Expat Buying Guide (2026)',
    es: 'Casas en Venta en Ciudad de Panamá — Precios, Vecindarios y Guía para Expats (2026)',
  };
  const descriptions = {
    en: 'Real houses (not condos) for sale in Panama City, Panama. Single-family homes from $180K in Costa del Este, Clayton, Albrook, Condado del Rey & Santa Maria. Price ranges, HOA, foreign ownership rules, and expat neighborhood guide.',
    es: 'Casas unifamiliares en venta en Ciudad de Panamá (no condos). Desde $180K en Costa del Este, Clayton, Albrook, Condado del Rey y Santa María. Precios, HOA, propiedad extranjera y guía de vecindarios para expats.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'houses for sale in panama city panama',
      'houses for sale panama city',
      'panama city panama houses',
      'single family homes panama city',
      'panama city panama real estate',
      'casas en venta ciudad de panama',
      'clayton panama houses',
      'costa del este houses',
      'santa maria panama',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/houses-for-sale-panama-city`,
      languages: {
        'en': `${domain}/en/guides/houses-for-sale-panama-city`,
        'es': `${domain}/es/guides/houses-for-sale-panama-city`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/houses-for-sale-panama-city`,
      type: 'article',
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: titles[l] }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[l],
      description: descriptions[l],
    },
    robots: { index: true, follow: true },
  };
}

export default async function HousesForSalePanamaCityPage({ params }: Props) {
  const { lang } = await params;
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';
  const isEs = l === 'es';

  const t = {
    crumbHome: isEs ? 'Inicio' : 'Home',
    crumbGuides: isEs ? 'Guías' : 'Guides',
    crumbTitle: isEs
      ? 'Casas en Venta en Ciudad de Panamá'
      : 'Houses for Sale in Panama City, Panama',
    h1: isEs
      ? 'Casas en Venta en Ciudad de Panamá: Guía Completa 2026'
      : 'Houses for Sale in Panama City, Panama: The Complete 2026 Buying Guide',
    cta: isEs ? 'Ver Propiedades' : 'Browse Listings',
    wa: isEs ? 'WhatsApp a un Agente' : 'WhatsApp an Agent',
  };

  const whatsappHref =
    'https://wa.me/50769999999?text=' +
    encodeURIComponent(
      isEs
        ? 'Hola, busco una casa en Ciudad de Panamá.'
        : 'Hi, I am interested in houses for sale in Panama City, Panama.'
    );
  const listingsHref = `/${l}/propiedades`;

  return (
    <main style={{ backgroundColor: '#ffffff', color: BRAND_NAVY }}>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{ padding: '16px 24px', fontSize: 14, color: '#555' }}
      >
        <Link href={`/${l}`} style={{ color: BRAND_NAVY }}>{t.crumbHome}</Link>
        {' › '}
        <Link href={`/${l}/guides`} style={{ color: BRAND_NAVY }}>{t.crumbGuides}</Link>
        {' › '}
        <span>{t.crumbTitle}</span>
      </nav>

      <article style={{ maxWidth: 880, margin: '0 auto', padding: '24px', lineHeight: 1.7 }}>
        <h1 style={{ color: BRAND_NAVY, fontSize: 36, marginBottom: 16 }}>{t.h1}</h1>

        {isEs ? (
          <>
            <p>
              Si está buscando <strong>casas en venta en Ciudad de Panamá</strong>, es
              importante entender que el mercado está dominado por condos. Las casas
              unifamiliares (<em>single-family homes</em>) existen, pero están
              concentradas en vecindarios específicos, con rangos de precios y perfiles
              de compradores muy distintos. Esta guía explica dónde buscar, cuánto
              cuestan, qué reglas aplican a extranjeros y cómo filtrar el ruido de
              Panama City, Florida.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Panamá vs. Panama City Beach, Florida
            </h2>
            <p>
              Muchos resultados de Google mezclan <strong>Panama City, Panamá</strong>{' '}
              (capital del país centroamericano) con <strong>Panama City, Florida</strong>{' '}
              (ciudad costera en EE. UU.). Este artículo trata 100% sobre la capital
              panameña: ciudad de ~1.5 millones de habitantes, economía dolarizada en
              USD, centro financiero regional con hub aéreo internacional.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Vecindarios donde hay casas unifamiliares
            </h2>
            <h3>Costa del Este</h3>
            <p>
              Planificada, cerrada, con calles arboladas y centros comerciales
              modernos. Casas desde <strong>$650K</strong> hasta <strong>$3M+</strong>.
              Favorito de ejecutivos y familias expats. Cerca del aeropuerto de Tocumen,
              colegios internacionales y Multiplaza.
            </p>
            <h3>Clayton</h3>
            <p>
              Antigua zona militar estadounidense reurbanizada. Grandes lotes, áreas
              verdes, seguridad. Casas desde <strong>$550K</strong> hasta <strong>$1.8M</strong>.
              Popular entre diplomáticos y ejecutivos del Canal.
            </p>
            <h3>Albrook</h3>
            <p>
              Casas estilo residencial cerca del aeropuerto local y Albrook Mall.
              Rango: <strong>$400K–$1.2M</strong>.
            </p>
            <h3>Condado del Rey</h3>
            <p>
              Urbanizaciones cerradas, ideal para familias, buena relación
              precio/espacio. <strong>$280K–$650K</strong>.
            </p>
            <h3>Santa María Golf & Country Club</h3>
            <p>
              Campo de golf, seguridad 24/7, casas de lujo junto al verde.{' '}
              <strong>$900K–$5M</strong>.
            </p>
            <h3>Panamá Pacífico</h3>
            <p>
              Comunidad master-planned al oeste del Canal. Casas modernas desde{' '}
              <strong>$350K</strong>, con zona económica especial y bonificaciones
              fiscales.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Rangos de precios por tipo
            </h2>
            <ul>
              <li>
                <strong>Townhouse / casa adosada:</strong> $180K–$380K
              </li>
              <li>
                <strong>Casa unifamiliar estándar (3–4 hab):</strong> $350K–$800K
              </li>
              <li>
                <strong>Casa ejecutiva / premium:</strong> $800K–$1.8M
              </li>
              <li>
                <strong>Casa de lujo / golf / waterfront:</strong> $1.8M–$6M+
              </li>
            </ul>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              ¿Pueden los extranjeros comprar una casa en Panamá?
            </h2>
            <p>
              Sí. Panamá permite propiedad 100% extranjera sobre título (
              <em>fee-simple</em>) sin restricciones, salvo propiedades dentro de 10 km
              de fronteras internacionales. El proceso típico: oferta, due diligence (30
              días), firma ante notario, registro en el Registro Público. Impuestos:
              2% de transferencia (vendedor) + ITBMS si aplica. Impuesto predial anual
              exonerado en muchos casos bajo la ley de exoneración vigente — consulte a
              su abogado.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Costos ocultos que debe considerar
            </h2>
            <p>
              Honorarios legales (~1% del precio), mantenimiento de urbanización cerrada
              ($80–$400/mes), seguro de hogar (~$400/año por cada $100K asegurado),
              impuesto predial (0%–0.9% según valor registrado). Agua, electricidad
              (con aire acondicionado) y seguridad privada suman $200–$800/mes.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              ¿Casa o condo? Cómo decidir
            </h2>
            <p>
              Elija <strong>casa</strong> si quiere patio, privacidad, mascotas grandes,
              espacio para familia grande, oficina en casa, o ROI de largo plazo sobre
              tierra. Elija <strong>condo</strong> si prioriza vistas al océano,
              amenidades (gym/piscina), bajo mantenimiento, y alquiler vacacional tipo
              Airbnb. En Ciudad de Panamá, los condos tienen más liquidez de reventa;
              las casas aprecian más lento pero ofrecen más metraje por dólar.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Proceso de compra paso a paso
            </h2>
            <ol>
              <li>Defina presupuesto total (precio + cierre + reservas).</li>
              <li>Visite 5–8 casas en 2–3 vecindarios objetivo.</li>
              <li>Oferta por escrito (normalmente con arras de 10%).</li>
              <li>Due diligence legal: título limpio, sin gravámenes, uso de suelo.</li>
              <li>Firma de escritura ante notario panameño.</li>
              <li>Inscripción en el Registro Público (30–60 días).</li>
              <li>Transferencia de servicios (agua, luz, HOA).</li>
            </ol>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>Preguntas frecuentes</h2>
            <p>
              <strong>¿Necesito residencia para comprar?</strong> No. Puede comprar con
              pasaporte. La compra puede ser base para solicitar visa Qualified
              Investor ($300K mínimo).
            </p>
            <p>
              <strong>¿Financiamiento local?</strong> Bancos panameños prestan a
              extranjeros hasta 60–70% LTV, 20–25 años, 6–7.5% anual, previa comprobación
              de ingresos y reservas.
            </p>
            <p>
              <strong>¿Puedo alquilar mi casa?</strong> Sí. Alquiler de largo plazo está
              regulado. Short-term (Airbnb) requiere registro municipal y permiso.
            </p>
          </>
        ) : (
          <>
            <p>
              If you are searching for <strong>houses for sale in Panama City,
              Panama</strong>, it&apos;s important to know the market is dominated by
              condos. Detached single-family homes do exist — but they cluster in
              specific neighborhoods, at very different price points and buyer profiles
              than high-rise apartments. This guide covers where to look, what homes
              cost, the rules for foreign buyers, and how to filter out Panama City,
              Florida noise from your search.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Panama City, Panama vs. Panama City Beach, Florida
            </h2>
            <p>
              A huge chunk of Google results mix <strong>Panama City, Panama</strong>{' '}
              (the Central American capital) with <strong>Panama City, Florida</strong>{' '}
              (a US gulf-coast town). This guide is 100% about the Panamanian capital:
              a dollarized (USD) city of roughly 1.5 million people, the regional
              financial hub of Latin America, served by Tocumen International
              Airport&apos;s 90+ direct routes.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Neighborhoods that actually have single-family homes
            </h2>
            <h3>Costa del Este</h3>
            <p>
              Planned, gated, tree-lined streets, modern shopping. Homes run{' '}
              <strong>$650K to $3M+</strong>. The go-to choice for executives and
              expat families — close to Tocumen Airport, international schools, and
              Multiplaza mall.
            </p>
            <h3>Clayton</h3>
            <p>
              A former US military zone redeveloped into one of the greenest residential
              districts in the city. Large lots, wide streets, strong security presence.{' '}
              <strong>$550K–$1.8M</strong>. Popular with diplomats and Canal Authority
              executives.
            </p>
            <h3>Albrook</h3>
            <p>
              Residential-scale homes near Albrook domestic airport and the massive
              Albrook Mall. <strong>$400K–$1.2M</strong>.
            </p>
            <h3>Condado del Rey</h3>
            <p>
              Gated subdivisions, family-friendly, strong price/space ratio.{' '}
              <strong>$280K–$650K</strong>. One of the best value plays in the city
              for a proper house.
            </p>
            <h3>Santa Maria Golf &amp; Country Club</h3>
            <p>
              18-hole golf course, 24/7 security, luxury homes on the fairway.{' '}
              <strong>$900K–$5M</strong>. A benchmark for high-end house living in
              Panama City.
            </p>
            <h3>Panama Pacifico</h3>
            <p>
              Master-planned community just west of the Canal. Modern homes from{' '}
              <strong>$350K</strong>, with a special economic zone offering tax
              incentives for residents and businesses.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Price ranges by house type
            </h2>
            <ul>
              <li>
                <strong>Townhouse / attached home:</strong> $180K–$380K
              </li>
              <li>
                <strong>Standard single-family (3–4 bed):</strong> $350K–$800K
              </li>
              <li>
                <strong>Executive / premium home:</strong> $800K–$1.8M
              </li>
              <li>
                <strong>Luxury / golf / waterfront:</strong> $1.8M–$6M+
              </li>
            </ul>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Can foreigners buy a house in Panama?
            </h2>
            <p>
              Yes. Panama allows 100% foreign fee-simple (titled) ownership with no
              nationality restrictions — the only exception is land within 10 km of an
              international border. The standard process: written offer, 30-day legal
              due diligence, notary signing, then registration at the Public Registry.
              Closing taxes include the 2% transfer tax (paid by the seller) and,
              where applicable, ITBMS. Annual property tax is often reduced or waived
              under Panama&apos;s owner-occupied exoneration — have your attorney check
              your specific title.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Hidden costs expat buyers miss
            </h2>
            <p>
              Legal fees run about 1% of the purchase price. Gated-community maintenance
              fees range $80–$400/month. Homeowners insurance is roughly $400/year per
              $100K insured. Property tax is 0%–0.9% on registered value above the
              exoneration threshold. Utilities (heavy AC use), water, and private
              security guards add another $200–$800/month depending on house size.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              House vs. condo: how to decide
            </h2>
            <p>
              Pick a <strong>house</strong> if you want a yard, privacy, room for big
              dogs, a growing family, a home office, or a long-horizon play on land
              value. Pick a <strong>condo</strong> if you prioritize ocean views,
              building amenities (gym, pool, concierge), low maintenance, and
              short-term rental upside. In Panama City, condos resell faster and trade
              more liquidly; houses appreciate more slowly but give you far more square
              footage per dollar and land you actually own.
            </p>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Step-by-step buying process
            </h2>
            <ol>
              <li>Define total budget (price + closing + 6–12 months reserves).</li>
              <li>Tour 5–8 homes across 2–3 target neighborhoods.</li>
              <li>Submit a written offer with a 10% deposit in escrow.</li>
              <li>
                Legal due diligence: clean title, no liens, correct zoning, building
                permits.
              </li>
              <li>Sign the purchase deed (<em>escritura</em>) at a Panamanian notary.</li>
              <li>Register at the Public Registry (30–60 days).</li>
              <li>Transfer utilities, HOA, and security contracts to your name.</li>
            </ol>

            <h2 style={{ color: BRAND_NAVY, marginTop: 40 }}>
              Frequently asked questions
            </h2>
            <p>
              <strong>Do I need residency to buy?</strong> No. You can close with just
              a passport. The purchase itself can support a Qualified Investor visa
              application (minimum $300K real-estate investment).
            </p>
            <p>
              <strong>Is local financing available?</strong> Panamanian banks lend to
              foreigners up to 60–70% LTV, 20–25 year terms, at roughly 6–7.5% with
              documented income and reserves.
            </p>
            <p>
              <strong>Can I rent out the house?</strong> Yes. Long-term rentals are
              standard. Short-term (Airbnb-style) requires municipal registration and
              a tourism-rental permit.
            </p>
            <p>
              <strong>Are houses safe in Panama City?</strong> Gated communities
              (Costa del Este, Santa Maria, Clayton, Condado del Rey, Panama Pacifico)
              have 24/7 security and report very low crime rates comparable to
              middle-tier US suburbs.
            </p>
          </>
        )}

        {/* CTA */}
        <section
          style={{
            marginTop: 56,
            padding: 32,
            backgroundColor: BRAND_NAVY,
            borderRadius: 12,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: BRAND_GOLD, marginTop: 0 }}>
            {isEs
              ? '¿Listo para ver casas reales en Ciudad de Panamá?'
              : 'Ready to view real houses in Panama City?'}
          </h2>
          <p>
            {isEs
              ? 'Nuestros agentes locales con licencia le muestran la casa correcta al primer intento.'
              : 'Our licensed local agents shortlist the right houses for your budget on the first visit.'}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
            <a
              href={whatsappHref}
              style={{
                backgroundColor: BRAND_GOLD,
                color: BRAND_NAVY,
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              {t.wa}
            </a>
            <Link
              href={listingsHref}
              style={{
                backgroundColor: '#fff',
                color: BRAND_NAVY,
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              {t.cta}
            </Link>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Houses for Sale in Panama City, Panama: The Complete 2026 Buying Guide',
            description:
              'Single-family houses (not condos) for sale in Panama City, Panama. Neighborhoods, prices, foreign ownership rules, and step-by-step buying process for expats.',
            image: 'https://panamarealestatesale.com/og-image.jpg',
            author: {
              '@type': 'Organization',
              name: 'Panama Real Estate Sale',
              url: 'https://panamarealestatesale.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Panama Real Estate Sale',
              logo: {
                '@type': 'ImageObject',
                url: 'https://panamarealestatesale.com/logo.jpg',
              },
            },
            datePublished: '2026-04-13',
            dateModified: new Date().toISOString().split('T')[0],
            mainEntity: {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Can foreigners buy a house in Panama City, Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Panama allows 100% foreign fee-simple ownership with no nationality restrictions, except for land within 10 km of an international border.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the price range for houses in Panama City, Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Townhouses start around $180K, standard single-family homes run $350K–$800K, executive homes $800K–$1.8M, and luxury/golf/waterfront homes range from $1.8M to $6M+.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which neighborhoods have single-family houses in Panama City, Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Costa del Este, Clayton, Albrook, Condado del Rey, Santa Maria Golf & Country Club, and Panama Pacifico are the main neighborhoods with detached single-family homes.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is this Panama City, Panama or Panama City, Florida?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'This guide covers Panama City, Panama — the capital of the Central American country. It is not Panama City Beach, Florida.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can foreigners get a mortgage in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Panamanian banks finance foreign buyers up to 60–70% LTV over 20–25 years at approximately 6–7.5% interest, subject to documented income and reserves.',
                  },
                },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
