'use client';

interface VideoSectionProps {
    videoUrl: string;
}

export default function VideoSection({ videoUrl }: VideoSectionProps) {
    if (!videoUrl) return null;

    const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
    const isVimeo = videoUrl.includes('vimeo.com');

    const getEmbedUrl = (url: string) => {
        if (isYouTube) {
            const videoId = url.includes('v=') ? url.split('v=')[1]?.split('&')[0] : url.split('/').pop();
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (isVimeo) {
            const videoId = url.split('/').pop();
            return `https://player.vimeo.com/video/${videoId}`;
        }
        return url;
    };

    return (
        <section className="py-16 bg-black overflow-hidden">
            <div className="max-container">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-yellow-400/10 group">
                    {isYouTube || isVimeo ? (
                        <iframe
                            src={getEmbedUrl(videoUrl)}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <video
                            src={videoUrl}
                            className="absolute inset-0 w-full h-full object-cover"
                            controls
                            muted
                            loop
                            playsInline
                        />
                    )}

                    {/* Decorative Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>
        </section>
    );
}
