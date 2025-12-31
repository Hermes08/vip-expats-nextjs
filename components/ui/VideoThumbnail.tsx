'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoThumbnailProps {
    videoUrl: string;
    title: string;
    className?: string;
}

export default function VideoThumbnail({ videoUrl, title, className = '' }: VideoThumbnailProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Extract video ID (supports standard YouTube URLs)
    const videoId = videoUrl.includes('v=')
        ? videoUrl.split('v=')[1]?.split('&')[0]
        : videoUrl.split('/').pop()?.split('?')[0];

    // Support time start if present (e.g. t=681)
    const timeStart = videoUrl.includes('t=') ? videoUrl.split('t=')[1]?.split('&')[0] : '0';

    if (isPlaying) {
        return (
            <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ${className}`}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=${timeStart}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                />
            </div>
        );
    }

    return (
        <div
            className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer ${className}`}
            onClick={() => setIsPlaying(true)}
        >
            <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white fill-white ml-1" size={32} />
                </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm text-shadow">{title}</p>
            </div>
        </div>
    );
}
