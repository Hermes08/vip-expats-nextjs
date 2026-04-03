import { Metadata } from 'next';
import RelocationPricingContent from '@/components/pages/RelocationPricingContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Relocation Costs & Services | ExpatRockstars',
            description: 'Find transparent pricing for Panama relocation tours and expert-led services. Discover the tiered costs for scouting trips, residency assistance, and full relocation concierge.',
            keywords: ['panama relocation tours cost', 'panama relocation services', 'scouting trip panama', 'panama relocation agency']
        },
        es: {
            title: 'Costos y Servicios de Relocación en Panamá | ExpatRockstars',
            description: 'Precios transparentes para tours de reubicación y servicios expertos en Panamá. Costos de viajes de exploración, asistencia de residencia y más.',
            keywords: ['costo tours de reubicación panamá', 'servicios de reubicación panamá', 'reubicación panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function PricingPage() {
    return <RelocationPricingContent />;
}
