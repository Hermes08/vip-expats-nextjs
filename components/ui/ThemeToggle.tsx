'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * Dark-mode toggle. Writes data-theme="dark" to <html> and persists the
 * choice to localStorage. First render mirrors whatever the inline boot
 * script in <head> applied (see app/[lang]/layout.tsx), so there is no
 * flash of wrong theme on first paint.
 *
 * The CSS for the dark surface lives in app/globals.css under
 * [data-theme="dark"]. Flipping the attribute automatically swaps every
 * ink/cream/paper/teal token — all components using them invert.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    // Sync state from the <html> attribute on mount (set by inline boot script)
    useEffect(() => {
        const current = document.documentElement.getAttribute('data-theme') === 'dark';
        setIsDark(current);
        setMounted(true);
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        const root = document.documentElement;
        if (next) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        try {
            localStorage.setItem('theme', next ? 'dark' : 'light');
        } catch {
            /* localStorage may be unavailable — ignore */
        }
    };

    // Avoid hydration mismatch by rendering neutral until mounted
    if (!mounted) {
        return (
            <button
                type="button"
                aria-label="Toggle theme"
                className={`w-9 h-9 rounded-full border border-transparent ${className}`}
            />
        );
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
            className={`w-9 h-9 rounded-full border border-[color:rgba(14,42,43,0.15)] hover:border-[color:var(--color-teal-edit)] grid place-items-center transition-colors text-[color:var(--color-ink)] hover:text-[color:var(--color-teal-edit)] ${className}`}
        >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
    );
}
