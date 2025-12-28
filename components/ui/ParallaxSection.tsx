'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    speed?: number; // 0 = no movement, 1 = normal scroll, < 1 = slower (background), > 1 = faster (foreground)
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className = '', speed = 0.5 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Calculate Y transform based on scroll progress and speed
    // If speed is 0.5, it moves half as fast as natural scroll (appearing further away)
    // We map 0-1 progress to a pixel range. 
    // A simpler parallax: Translate Y based on scroll.

    // Let's use a simpler approach: 
    // Move up/down relative to viewport.
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    // Based on user request "float effectively OVER the particles".
    // Particles are fixed. Content scrolls.
    // To make it feel "floating", we can add a subtle separate float animation or just parallax the scroll.

    return (
        <motion.section
            ref={ref}
            className={`relative ${className}`}
            style={{ y: smoothY }}
        >
            {children}
        </motion.section>
    );
};

export default ParallaxSection;
