'use client';

import React from 'react';

interface VideoSchemaProps {
    videoUrl: string;
    name: string;
    description: string;
    uploadDate: string;
    thumbnailUrl?: string;
}

export default function VideoSchema({ videoUrl, name, description, uploadDate, thumbnailUrl }: VideoSchemaProps) {
    // Extract video ID for fallback thumbnail
    const videoId = videoUrl.includes('v=') ? videoUrl.split('v=')[1]?.split('&')[0] : videoUrl.split('/').pop();
    const finalThumbnail = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const schema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": name,
        "description": description,
        "thumbnailUrl": [finalThumbnail],
        "uploadDate": uploadDate,
        "contentUrl": videoUrl,
        "embedUrl": `https://www.youtube.com/embed/${videoId}`
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
