import { Metadata } from 'next';
import RelocationLawyersContent from '@/components/pages/RelocationLawyersContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Top Panama Immigration Lawyers | Legal Residency Directory',
            description: 'Find the best Panama immigration lawyers. Expert legal support for residency, work permits, and relocation laws from vetted Panamanian attorneys.',
            keywords: ['panama immigration lawyer', 'best immigration lawyer panama', 'panama legal residency', 'panama visa lawyer', 'panama immigration attorney']
        },
        es: {
            title: 'Los Mejores Abogados de Inmigración en Panamá | Directorio Legal',
            description: 'Encuentre los mejores abogados de inmigración en Panamá. Apoyo legal experto para residencia, permisos de trabajo y leyes de reubicación.',
            keywords: ['abogado inmigración panamá', 'mejor abogado inmigración panamá', 'residencia legal panamá', 'abogado visa panamá']
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
    return <RelocationLawyersContent />;
}
