import { Metadata } from 'next';
import RelocationWeatherContent from '@/components/pages/RelocationWeatherContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Best Time to Visit Panama | Weather & Seasons Guide',
            description: 'Discover the best time to visit Panama for your relocation scouting trip. Monthly weather guide, dry season vs green season, and regional climate tips.',
            keywords: ['best time to visit panama', 'panama weather by month', 'dry season panama', 'green season panama', 'boquete weather']
        },
        es: {
            title: 'Mejor Época para Visitar Panamá | Guía de Clima y Estaciones',
            description: 'Descubra la mejor época para visitar Panamá para su viaje de exploración. Guía mensual de clima, temporada seca vs temporada verde y consejos regionales.',
            keywords: ['mejor época para visitar panamá', 'clima en panamá por mes', 'temporada seca panamá', 'clima boquete']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function WeatherPage() {
    return <RelocationWeatherContent />;
}
