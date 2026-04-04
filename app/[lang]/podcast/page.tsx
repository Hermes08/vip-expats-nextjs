import React from 'react';
import { PODCAST_EPISODES, CONTENT } from '@/lib/constants';
import PodcastCard from '@/components/podcast/PodcastCard';
import { Metadata } from 'next';
import ZeroGravityWrapper from '@/components/GoldParticles/ZeroGravityWrapper';
import PodcastEpisodeSchema from '@/components/seo/PodcastEpisodeSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

type Props = {
    params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const isEs = lang === 'es';

    return {
        title: isEs ? 'Podcast Panama Real Estate Sale | Inversión y Vida en Panamá' : 'Panama Real Estate Sale Podcast | Panama Real Estate & Lifestyle',
        description: isEs
            ? 'Escuche a los expertos en bienes raíces en Panamá. Entrevistas sobre reubicación, inversión inmobiliaria y cómo vivir el estilo de vida de lujo en Panamá.'
            : 'Listen to Panama real estate experts. Interviews on relocation, property investment, and how to live the luxury lifestyle in Panama.',
        keywords: [
            "panama real estate podcast",
            "panama real estate sale podcast",
            "panagringo podcast",
            "investing in panama",
            "relocation panama",
            "panama lifestyle",
            "austin hess panama"
        ],
        alternates: {
            canonical: `https://panamarealestatesale.com/${lang}/podcast`,
            languages: {
                'en': 'https://panamarealestatesale.com/en/podcast',
                'es': 'https://panamarealestatesale.com/es/podcast',
            },
        },
    };
}

export default async function PodcastHub({ params }: Props) {
    const { lang } = await params;
    const episodes = PODCAST_EPISODES;
    const isEs = lang === 'es';

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <ZeroGravityWrapper />
            <BreadcrumbSchema
                items={[
                    { name: 'Podcast', item: `https://panamarealestatesale.com/${lang}/podcast` }
                ]}
            />

            {/* SEO Structured Data */}
            {episodes.map(episode => (
                <PodcastEpisodeSchema
                    key={`schema-${episode.id}`}
                    episode={episode}
                    lang={lang as 'en' | 'es'}
                />
            ))}

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-brand-GOLD font-black uppercase tracking-[0.2em] text-sm mb-4 block">
                        {isEs ? 'La Voz de los Bienes Raíces en Panamá' : 'The Voice of Panama Real Estate'}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black text-brand-950 mb-6">
                        Panama Real Estate Sale <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-GOLD to-yellow-500">Podcast</span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        {isEs
                            ? "Entrevistas sin filtros con expertos de la industria, desarrolladores y expatriados que viven el sueño. Su guía esencial para navegar Panamá."
                            : "Unfiltered interviews with industry experts, developers, and expats actually living the dream. Your essential guide to navigating Panama."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {episodes.map(episode => (
                        <PodcastCard
                            key={episode.id}
                            episode={episode}
                            lang={lang as 'en' | 'es'}
                        />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-brand-100 max-w-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {isEs ? '¿Quiere ser un invitado?' : 'Want to be a guest?'}
                        </h3>
                        <p className="text-slate-500 mb-6">
                            {isEs
                                ? "Buscamos historias únicas de éxito en Panamá. Contáctenos si tiene experiencia para compartir."
                                : "We are looking for unique Panama success stories. Contact us if you have expertise to share."}
                        </p>
                        <a
                            href={`/${lang}/contacto`}
                            className="inline-block bg-brand-GOLD text-brand-950 font-black uppercase tracking-wider py-3 px-8 rounded-full hover:bg-white hover:text-brand-950 transition-all duration-300"
                        >
                            {isEs ? 'Contáctenos' : 'Contact Us'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
