import { Metadata } from 'next';
import RelocationHubContent from '@/components/pages/RelocationHubContent';
import MainLayout from '@/components/MainLayout';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Relocation Hub | Everything You Need to Move to Panama',
            description: 'The ultimate resource for relocating to Panama. Discover relocation tours, visa guides, and regional analysis for expats seeking to move to Panama.',
            keywords: ['panama relocation', 'relocate to panama', 'move to panama', 'panama relocation tours', 'pensionado visa panama']
        },
        es: {
            title: 'Hub de Relocación en Panamá | Todo lo que necesitas para mudarte',
            description: 'El recurso definitivo para reubicarse en Panamá. Descubra tours de reubicación, guías de visa y análisis regional para expatriados.',
            keywords: ['relocación panamá', 'mudarse a panamá', 'tours de reubicación panamá', 'visa pensionado panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function RelocationHubPage() {
    return <RelocationHubContent />;
}
