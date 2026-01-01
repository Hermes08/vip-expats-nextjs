'use client';

import React from 'react';
import { PodcastEpisode } from '@/lib/types';

interface PodcastEpisodeSchemaProps {
    episode: PodcastEpisode;
    lang: 'en' | 'es';
}

export default function PodcastEpisodeSchema({ episode, lang }: PodcastEpisodeSchemaProps) {
    const title = typeof episode.title === 'string' ? episode.title : (episode.title[lang] || episode.title['en']);
    const description = typeof episode.description === 'string' ? episode.description : (episode.description[lang] || episode.description['en']);

    const schema = {
        "@context": "https://schema.org",
        "@type": "PodcastEpisode",
        "name": title,
        "description": description,
        "url": `https://expatrockstars.com/${lang}/podcast`,
        "datePublished": episode.publishDate,
        "duration": `PT${episode.duration.replace(':', 'M')}S`,
        "associatedMedia": {
            "@type": "MediaObject",
            "contentUrl": `https://www.youtube.com/watch?v=${episode.videoId}`
        },
        "partOfSeries": {
            "@type": "PodcastSeries",
            "name": "Expat Rockstars Podcast",
            "url": "https://expatrockstars.com/podcast"
        },
        "actor": episode.guest ? episode.guest.split(',').map(name => ({
            "@type": "Person",
            "name": name.trim()
        })) : [],
        "director": {
            "@type": "Person",
            "name": episode.host
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
