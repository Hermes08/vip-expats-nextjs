import { Metadata } from 'next';
import RelocationVisasContent from '@/components/pages/RelocationVisasContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Residency Visas | Friendly Nations & Pensionado Guide',
            description: 'Expert guide to Panama residency visas. Compare the Friendly Nations Visa, Pensionado Program, and Qualified Investor Visa to find your path to Panama.',
            keywords: ['panama residency visa', 'pensionado visa panama', 'friendly nations visa panama', 'panama immigration']
        },
        es: {
            title: 'Visas de Residencia en Panamá | Guía de Visa Pensionado y Naciones Amigas',
            description: 'Guía experta sobre visas de residencia en Panamá. Compare la Visa de Naciones Amigas, el Programa de Pensionados y la Visa de Inversionista Calificado.',
            keywords: ['visa de residencia panamá', 'visa pensionado panamá', 'visa naciones amigas panamá', 'inmigración panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function VisasOverviewPage() {
    return <RelocationVisasContent />;
}
