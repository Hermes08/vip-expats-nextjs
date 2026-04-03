'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Render Error Captured:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] card-light p-12 rounded-[3rem] border-brand-100 my-12 text-center">
            <h2 className="text-3xl font-heading font-black mb-6 uppercase italic tracking-tighter text-white">
                Content Unavailable
            </h2>
            <p className="text-slate-500 mb-8 font-medium max-w-md mx-auto">
                There was an error loading this section. This is often caused by a hydration mismatch or stale data.
            </p>
            {error.digest && (
                <p className="text-[10px] text-brand-GOLD mb-8 font-mono opacity-40">
                    ID: {error.digest}
                </p>
            )}
            <button
                onClick={() => reset()}
                className="px-8 py-4 bg-brand-GOLD text-brand-900 rounded-full font-black uppercase tracking-widest text-xs transition-transform hover:scale-105"
            >
                Retry Segment
            </button>
        </div>
    );
}
