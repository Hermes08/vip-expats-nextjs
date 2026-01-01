import { Metadata } from 'next';
import RelocationHubContent from '@/components/pages/RelocationHubContent';
import MainLayout from '@/components/MainLayout';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Relocation Guide 2026 | The Ultimate Move-to-Panama Hub',
            description: 'The definitive 2026 resource for relocating to Panama. Compare relocation tours, visa types, cost of living, and the best expat neighborhoods.',
            keywords: ['panama relocation guide 2026', 'move to panama 2026', 'panama expat hub', 'relocate to panama requirements']
        },
        es: {
            title: 'Guía de Relocación a Panamá 2026 | El Hub Definitivo',
            description: 'El recurso definitivo de 2026 para mudarse a Panamá. Compare tours, visas, costo de vida y los mejores barrios para expatriados.',
            keywords: ['guía relocación panamá 2026', 'mudarse a panamá 2026', 'vivir en panamá expatriados']
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
