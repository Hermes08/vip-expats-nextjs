import { Metadata } from 'next';
import BoqueteGuideContent from '@/components/pages/BoqueteGuideContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Boquete Panama Expat Guide | Living & Real Estate 2024',
            description: 'The complete guide to Boquete, Panama. Discover top neighborhoods, the highland climate, cost of living, and the best Boquete real estate opportunities.',
            keywords: ['boquete panama real estate', 'living in boquete panama', 'boquete expat guide', 'boquete homes for sale']
        },
        es: {
            title: 'Guía Expat de Boquete Panamá | Vida y Bienes Raíces 2024',
            description: 'La guía completa de Boquete, Panamá. Descubra los mejores barrios, el clima de montaña, el costo de vida y oportunidades de inversión.',
            keywords: ['bienes raíces boquete panamá', 'vivir en boquete', 'guía boquete']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function BoquetePage() {
    return <BoqueteGuideContent />;
}
