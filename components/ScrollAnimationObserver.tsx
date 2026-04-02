'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimationObserver() {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // stop watching once visible
                }
            });
        }, {
            threshold: 0,           // fire as soon as any pixel enters viewport
            rootMargin: '50px 0px 0px 0px', // trigger 50px before element reaches viewport top
        });

        const observeAll = () => {
            document.querySelectorAll('.reveal-on-scroll:not(.is-visible)')
                .forEach(el => observer.observe(el));
        };

        // Initial pass — catches static elements already in viewport
        observeAll();

        // Re-observe after delays to catch dynamically loaded content
        // (FeaturedListings, QuickSearchStrip, etc. loaded via next/dynamic)
        const t1 = setTimeout(observeAll, 200);
        const t2 = setTimeout(observeAll, 600);
        const t3 = setTimeout(observeAll, 1400);

        return () => {
            observer.disconnect();
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [pathname]);

    return null;
}
