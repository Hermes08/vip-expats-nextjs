import { Metadata } from 'next';
import CoronadoGuideContent from '@/components/pages/CoronadoGuideContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Coronado Panama Expat Guide | Living & Real Estate 2024',
            description: 'The complete guide to Coronado, Panama. Discover beach lifestyle, amenities, top luxury developments, and why Coronado real estate is a top choice.',
            keywords: ['coronado panama real estate', 'living in coronado panama', 'coronado beach panama', 'coronado panama amenities']
        },
        es: {
            title: 'Guía Expat de Coronado Panamá | Vida y Bienes Raíces 2024',
            description: 'La guía completa de Coronado, Panamá. Descubra el estilo de vida de playa, comodidades y las mejores oportunidades de inversión en bienes raíces.',
            keywords: ['bienes raíces coronado panamá', 'vivir en coronado', 'guía coronado']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function CoronadoPage() {
    return <CoronadoGuideContent />;
}
