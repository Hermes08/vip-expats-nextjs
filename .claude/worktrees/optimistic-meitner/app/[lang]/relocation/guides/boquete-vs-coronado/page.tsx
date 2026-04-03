import { Metadata } from 'next';
import BoqueteVsCoronadoContent from '@/components/pages/BoqueteVsCoronadoContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Boquete vs Coronado | Mountains or Beach? - ExpatRockstars',
            description: 'The ultimate comparison between Boquete and Coronado. Side-by-side analysis of climate, lifestyle, cost of living, and real estate ROI in Panama.',
            keywords: ['boquete vs coronado', 'living in boquete vs coronado', 'boquete panama vs coronado', 'best places to live in panama']
        },
        es: {
            title: 'Boquete vs Coronado | ¿Montaña o Playa? - ExpatRockstars',
            description: 'La comparación definitiva entre Boquete y Coronado. Análisis detallado de clima, estilo de vida, costo de vida y retorno de inversión en Panamá.',
            keywords: ['boquete vs coronado panama', 'vivir en boquete o coronado', 'comparación regiones panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function ComparisonPage() {
    return <BoqueteVsCoronadoContent />;
}
