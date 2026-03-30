'use client';

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Global Error Captured:', error);
    }, [error]);

    return (
        <html>
            <body className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white p-4">
                <div className="glass-card p-12 rounded-[3rem] border-white/5 max-w-2xl text-center">
                    <h2 className="text-4xl font-heading font-black mb-8 uppercase italic tracking-tighter">
                        Something went wrong
                    </h2>
                    <p className="text-slate-400 mb-8 font-medium">
                        We apologize for the inconvenience. A technical error occurred during the render.
                    </p>
                    {error.digest && (
                        <p className="text-xs text-brand-GOLD mb-8 font-mono opacity-50">
                            Error Digest: {error.digest}
                        </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => reset()}
                            className="px-8 py-4 bg-brand-GOLD text-brand-900 rounded-full font-black uppercase tracking-widest text-xs"
                        >
                            Try again
                        </button>
                        <a
                            href="/"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-full font-black uppercase tracking-widest text-xs"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
