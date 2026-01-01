import { Metadata } from 'next';
import RelocationReviewsContent from '@/components/pages/RelocationReviewsContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Relocation Reviews & Success Stories | ExpatRockstars',
            description: 'Read real reviews and testimonials from expats who moved to Panama with ExpatRockstars. Discover success stories from families in Boquete, Coronado, and Panama City.',
            keywords: ['panama relocation tours reviews', 'panama relocation experiences', 'relocate to panama testimonials', 'expat rockstars reviews']
        },
        es: {
            title: 'Testimonios y Reseñas de Relocación en Panamá | ExpatRockstars',
            description: 'Lea reseñas reales de expatriados que se mudaron a Panamá con ExpatRockstars. Historias de éxito de familias en Boquete, Coronado y la Ciudad de Panamá.',
            keywords: ['reseñas de tours de reubicación panamá', 'experiencias de reubicación panamá', 'testimonios mudanza panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function ReviewsPage() {
    return <RelocationReviewsContent />;
}
