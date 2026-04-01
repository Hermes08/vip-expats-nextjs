import type { Metadata } from 'next';
import ListingsGrid from '@/components/listings/ListingsGrid';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const titles = {
    en: 'Panama Properties for Sale & Rent | Homes, Condos & Land',
    es: 'Propiedades en Panamá en Venta y Alquiler | Casas, Apartamentos y Terrenos',
  };
  const descriptions = {
    en: 'Browse resale homes, condos, villas, and land across Panama. Filter by zone (Beach, City, Mountain, Caribbean), property type, and price.',
    es: 'Explora casas, apartamentos, villas y terrenos en venta y alquiler en Panamá. Filtra por zona (Playa, Ciudad, Montaña, Caribe), tipo y precio.',
  };
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `${domain}/${l}/propiedades`,
      languages: { 'en': `${domain}/en/propiedades`, 'es': `${domain}/es/propiedades` },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/propiedades`,
      type: 'website',
    },
  };
}

export default async function PropiedadesPage({ params }: Props) {
  const { lang } = await params;
  const l = (lang === 'es' || lang === 'en') ? lang as 'en' | 'es' : 'en';
  return <ListingsGrid lang={l} />;
}
