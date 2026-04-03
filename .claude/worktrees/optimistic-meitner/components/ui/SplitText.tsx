'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className = '', delay = 0, stagger = 0.05 }) => {
    // Split into lines for manual handling or just simple word/char splitting.
    // This simple version splits by word and then characters invalidates "text" prop structure if it has newlines.
    // For the specific tagline "OWN THE PANAMA DREAM", we can treat it as words or characters.
    // Let's do characters for maximum cinematic feel.

    if (!text) return null;
    const characters = text.split('');

    const container = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay * i },
        }),
    };

    const child: any = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
            aria-label={text}
        >
            <span aria-hidden="true">
                {characters.map((char, index) => (
                    <motion.span variants={child} key={index} className="inline-block min-w-[0.2em] whitespace-pre">
                        {char}
                    </motion.span>
                ))}
            </span>
        </motion.span>
    );
};

export default SplitText;
