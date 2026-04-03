import { Metadata } from 'next';
import RelocationGuidesContent from '@/components/pages/RelocationGuidesContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Living in Panama Guide | Safety, Healthcare & Expat Life',
            description: 'The ultimate guide to living in Panama as an expat. Explore detailed information on safety, healthcare, schools, and the cost of living in Panama.',
            keywords: ['living in panama', 'safety in panama for expats', 'healthcare in panama', 'expat life panama', 'best places to live in panama']
        },
        es: {
            title: 'Guía para Vivir en Panamá | Seguridad, Salud y Vida Expat',
            description: 'La guía definitiva para vivir en Panamá como expatriado. Explore información detallada sobre seguridad, salud, escuelas y el costo de vida.',
            keywords: ['vivir en panamá', 'seguridad en panamá', 'salud en panamá', 'vida expatriada panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function GuidesHubPage() {
    return <RelocationGuidesContent />;
}
