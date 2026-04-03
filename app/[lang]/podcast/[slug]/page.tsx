import React from 'react';
import { PODCAST_EPISODES, CONTENT } from '@/lib/constants';
import { Metadata } from 'next';
import ZeroGravityWrapper from '@/components/GoldParticles/ZeroGravityWrapper';
import VideoSchema from '@/components/seo/VideoSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import PodcastCard from '@/components/podcast/PodcastCard';

type Props = {
    params: Promise<{ lang: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang, slug } = await params;
    const episode = PODCAST_EPISODES.find(e => e.slug === slug);

    if (!episode) {
        return {
            title: 'Episode Not Found | Panama Real Estate Sale',
        };
    }

    return {
        title: episode.title[lang as 'en' | 'es'],
        description: episode.description[lang as 'en' | 'es'],
    };
}

export default async function PodcastEpisodePage({ params }: Props) {
    const { lang, slug } = await params;
    const episode = PODCAST_EPISODES.find(e => e.slug === slug);
    const relatedEpisodes = PODCAST_EPISODES.filter(e => e.id !== episode?.id).slice(0, 3);
    const baseUrl = 'https://panamarealestatesale.com';

    if (!episode) {
        return (
            <div className="min-h-screen pt-40 text-center text-white">
                <h1 className="text-4xl font-bold">Episode Not Found</h1>
                <Link href={`/${lang}/podcast`} className="text-brand-GOLD hover:underline mt-4 block">
                    Return to Podcast Hub
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <ZeroGravityWrapper />
            <VideoSchema
                videoUrl={`https://www.youtube.com/watch?v=${episode.videoId}`}
                name={episode.title[lang as 'en' | 'es']}
                description={episode.description[lang as 'en' | 'es']}
                uploadDate={episode.publishDate}
                thumbnailUrl={`https://img.youtube.com/vi/${episode.videoId}/maxresdefault.jpg`}
            />
            <BreadcrumbSchema items={[
                { name: lang === 'es' ? 'Inicio' : 'Home', item: `${baseUrl}/${lang}` },
                { name: 'Podcast', item: `${baseUrl}/${lang}/podcast` },
                { name: episode.title[lang as 'en' | 'es'], item: `${baseUrl}/${lang}/podcast/${slug}` }
            ]} />

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">

                {/* Back Link */}
                <Link href={`/${lang}/podcast`} className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-GOLD mb-8 transition-colors">
                    <ArrowLeft size={16} /> {lang === 'es' ? 'Volver al Podcast' : 'Back to Podcast'}
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Video Player */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-brand-100 mb-8 bg-brand-50">
                            <iframe
                                src={`https://www.youtube.com/embed/${episode.videoId}?rel=0`}
                                className="absolute top-0 left-0 w-full h-full"
                                title={episode.title[lang as 'en' | 'es']}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </div>

                        {/* Title & Meta */}
                        <h1 className="text-3xl md:text-5xl font-heading font-black text-brand-950 mb-6 leading-tight">
                            {episode.title[lang as 'en' | 'es']}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8 pb-8 border-b border-brand-100">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-brand-GOLD" />
                                <span>{episode.publishDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-brand-GOLD" />
                                <span>{episode.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-brand-GOLD/10 text-brand-GOLD px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {episode.topics[0]}
                                </span>
                            </div>
                        </div>

                        {/* Description & Show Notes */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h3 className="text-brand-GOLD font-bold uppercase tracking-wider text-sm mb-4">
                                {lang === 'es' ? 'Resumen del Episodio' : 'Episode Overview'}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-lg mb-8">
                                {episode.description[lang as 'en' | 'es']}
                            </p>

                            <div className="bg-white/5 rounded-2xl p-8 border border-brand-100 mt-8">
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-brand-GOLD"></span>
                                    {lang === 'es' ? 'Invitados' : 'Guests'}
                                </h3>
                                <p className="text-slate-500">
                                    <strong className="text-white block mb-1">Host:</strong> {episode.host}<br />
                                    {episode.guest && (
                                        <>
                                            <strong className="text-white block mt-4 mb-1">Guest(s):</strong> {episode.guest}
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Takeaways Section */}
                        {episode.takeaways?.[lang as 'en' | 'es'] && (
                            <div className="mb-12 bg-white/5 rounded-3xl p-8 border border-brand-100">
                                <h3 className="text-xl font-bold text-brand-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-GOLD text-brand-900 flex items-center justify-center text-sm font-black italic">!</span>
                                    {lang === 'es' ? 'Puntos Clave' : 'Key Takeaways'}
                                </h3>
                                <ul className="space-y-4">
                                    {episode.takeaways[lang as 'en' | 'es'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-GOLD mt-2.5 flex-shrink-0" />
                                            <span className="text-lg leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Transcript Section */}
                        {episode.transcript?.[lang as 'en' | 'es'] && (
                            <div className="mb-12">
                                <h3 className="text-brand-GOLD font-bold uppercase tracking-wider text-sm mb-4">
                                    {lang === 'es' ? 'Transcripción y Notas' : 'Transcript & Show Notes'}
                                </h3>
                                <div className="text-slate-500 leading-relaxed text-base bg-brand-50/30 p-8 rounded-2xl border border-brand-100 italic">
                                    {episode.transcript[lang as 'en' | 'es']}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* CTA Card */}
                        <div className="bg-gradient-to-br from-brand-900 to-black p-8 rounded-3xl border border-brand-GOLD/30 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-GOLD/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-GOLD/30 transition-all duration-700"></div>
                            <h3 className="text-2xl font-black text-brand-950 mb-4 relative z-10">
                                {lang === 'es' ? '¿Inspirado por este episodio?' : 'Inspired by this episode?'}
                            </h3>
                            <p className="text-slate-500 mb-6 relative z-10">
                                {lang === 'es'
                                    ? "Reserve una llamada de descubrimiento gratuita con nuestro equipo para discutir sus planes en Panamá."
                                    : "Book a free discovery call with our team to discuss your Panama plans."}
                            </p>
                            <Link
                                href={`/${lang}/contacto`}
                                className="block w-full bg-brand-GOLD text-brand-950 text-center font-black uppercase tracking-wider py-4 rounded-xl hover:bg-white transition-all duration-300 relative z-10"
                            >
                                {lang === 'es' ? 'Agendar Llamada' : 'Book Discovery Call'}
                            </Link>
                        </div>

                        {/* Related Episodes */}
                        <div>
                            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                                {lang === 'es' ? 'Episodios Relacionados' : 'Related Episodes'}
                            </h3>
                            <div className="space-y-6">
                                {relatedEpisodes.map(ep => (
                                    <PodcastCard key={ep.id} episode={ep} lang={lang as 'en' | 'es'} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
