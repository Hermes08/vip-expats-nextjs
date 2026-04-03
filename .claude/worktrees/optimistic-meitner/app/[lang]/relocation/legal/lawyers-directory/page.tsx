import { Metadata } from 'next';
import RelocationLawyersDirectoryContent from '@/components/pages/RelocationLawyersDirectoryContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Top Panama Immigration Lawyers 2026 | Reviewed & Verified',
            description: 'The definitive directory of Panama immigration lawyers. Compare legal fees, reviews, and success rates for your residency application.',
            keywords: ['panama immigration lawyer', 'best immigration lawyers panama', 'panama residency legal fees', 'panama visa attorney reviews']
        },
        es: {
            title: 'Mejores Abogados de Inmigración en Panamá 2026 | Verificados',
            description: 'El directorio definitivo de abogados de inmigración en Panamá. Compare honorarios legales, reseñas y tasas de éxito para su residencia.',
            keywords: ['abogado de inmigración panamá', 'mejores abogados residencia panamá', 'honorarios legales visa panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function LawyersDirectoryPage() {
    return <RelocationLawyersDirectoryContent />;
}
