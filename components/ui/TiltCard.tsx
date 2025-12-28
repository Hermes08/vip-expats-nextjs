'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    gloss?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', gloss = true }) => {
    const ref = useRef<HTMLDivElement>(null);

    // MOUSE POSITION VALUES
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // SMOOTH SPRING PHYSICS
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // ROTATION TRANSFORMS
    // Move mouse X (-0.5 to 0.5) -> Rotate Y (-15deg to 15deg)
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    // GLOSS GRADIENT MOVEMENT
    // Gloss moves opposite to rotation to simulate reflection
    const glossX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
    const glossY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);
    const glossOpacity = useTransform(mouseX, [-0.5, 0, 0.5], [0, 0.6, 0]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate normalized position (-0.5 to 0.5) from center
        const width = rect.width;
        const height = rect.height;
        const mouseXRel = e.clientX - rect.left;
        const mouseYRel = e.clientY - rect.top;

        const xPct = (mouseXRel / width) - 0.5;
        const yPct = (mouseYRel / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
                rotateX,
                rotateY,
            }}
            className={`relative transition-colors duration-200 ${className}`}
        >
            <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                {children}
            </div>

            {/* HOLOGRAPHIC GLOSS OVERLAY */}
            {gloss && (
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-50"
                    style={{
                        background: 'linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 47%, rgba(255,255,255,0) 54%, rgba(255,255,255,0) 100%)',
                        backgroundSize: '200% 200%',
                        backgroundPositionX: glossX,
                        backgroundPositionY: glossY,
                        mixBlendMode: 'overlay',
                    }}
                />
            )}
        </motion.div>
    );
};

export default TiltCard;
