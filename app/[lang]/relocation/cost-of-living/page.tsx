import { Metadata } from 'next';
import RelocationCostContent from '@/components/pages/RelocationCostContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Cost of Living in Panama 2026 | Full Expat Budget Analysis',
            description: 'The definitive guide to the cost of living in Panama. Real data on rent, groceries, healthcare, and utilities for retirees and digital nomads.',
            keywords: ['cost of living in panama', 'living in panama cost', 'panama expat budget', 'is panama cheap']
        },
        es: {
            title: 'Costo de Vida en Panamá 2026 | Análisis Completo de Presupuesto',
            description: 'La guía definitiva del costo de vida en Panamá. Datos reales sobre alquiler, comida, salud y servicios para residentes extranjeros.',
            keywords: ['costo de vida en panamá', 'vivir en panamá precios', 'presupuesto expat panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function CostOfLivingPage() {
    return <RelocationCostContent />;
}
