'use client';

import React from 'react';
import Link from 'next/link';
import { PodcastEpisode } from '@/lib/types';
import { PlayCircle, Clock, Calendar } from 'lucide-react';

interface PodcastCardProps {
    episode: PodcastEpisode;
    lang: 'en' | 'es';
}

export default function PodcastCard({ episode, lang }: PodcastCardProps) {
    const title = episode.title[lang];
    const description = episode.description[lang];

    return (
        <Link
            href={`/${lang}/podcast/${episode.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={`https://img.youtube.com/vi/${episode.videoId}/maxresdefault.jpg`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-50/30 group-hover:bg-brand-50/60 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                </div>
                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">
                    {episode.duration}
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-600 mb-3 uppercase tracking-wider font-bold">
                    <span className="flex items-center gap-1">
                        <Calendar size={12} /> {episode.publishDate}
                    </span>
                    <span className="text-brand-GOLD">
                        {episode.topics[0]}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {title}
                </h3>

                <p className="text-neutral-600 text-sm line-clamp-3 mb-4">
                    {description}
                </p>

                <div className="text-brand-GOLD font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                    {lang === 'es' ? 'Ver Episodio' : 'Watch Episode'} →
                </div>
            </div>
        </Link>
    );
}
