'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowUpRight, BedDouble, Bath, Square, Move, TrendingUp } from 'lucide-react';
import { Project } from '@/lib/types';
import { CONTENT } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';
import TiltCard from './ui/TiltCard';

interface ProjectCardProps {
    project: Project;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
    const { lang } = useLanguage();
    const t = CONTENT[lang] || CONTENT['en'];
    const labels = t.labels;

    // Format Price nicely
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(project.priceFrom);

    const isPresale = project.status === 'Presale';

    return (
        <Link
            href={`/${lang}/proyectos/${project.slug}`}
            className={`block group ${className}`}
        >
            <TiltCard className="rounded-3xl overflow-hidden bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] shadow-[0_20px_60px_-20px_rgba(14,42,43,0.25)]">
                {/* Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                        src={project.images[0]}
                        alt={project.name[lang] || project.name.en}
                        fill
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-6 left-6 z-10">
                        <span className={`
                            tag-mono shadow-xl
                            ${isPresale ? '!bg-brand-GOLD !text-brand-950' : '!bg-[color:var(--color-paper)] !text-[color:var(--color-ink)]'}
                        `}>
                            {project.status}
                        </span>
                    </div>

                    {/* Price Tag - Glassmorphism */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                        <div className="bg-[color:rgba(253,253,247,0.92)] backdrop-blur-md px-6 py-5 rounded-2xl border border-[color:rgba(14,42,43,0.08)] shadow-xl flex justify-between items-center transform transition-transform duration-500 group-hover:-translate-y-2">
                            <div>
                                <span className="eyebrow !text-[color:var(--color-ink-mute)] block mb-1.5">
                                    {CONTENT[lang].startingAt || 'Starting At'}
                                </span>
                                <div className="display-serif italic text-3xl text-[color:var(--color-ink)] leading-none">
                                    {formattedPrice}
                                </div>
                            </div>
                            <div className="bg-[color:var(--color-teal-soft)] p-3 rounded-full border border-[color:var(--color-teal-edit)]/20 group-hover:bg-[color:var(--color-teal-edit)] group-hover:border-[color:var(--color-teal-edit)] transition-colors">
                                <TrendingUp size={20} className="text-[color:var(--color-teal-deep)] group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 relative z-20 bg-[color:var(--color-paper)] flex flex-col flex-grow">
                    <div className="flex items-center gap-2 eyebrow !text-[color:var(--color-teal-edit)] mb-4">
                        <MapPin size={12} />
                        {project.location[lang] || project.location.en}
                    </div>
                    <h3 className="display-serif italic text-3xl md:text-4xl text-[color:var(--color-ink)] mb-5 group-hover:text-[color:var(--color-teal-edit)] transition-colors">
                        {project.name[lang] || project.name.en}
                    </h3>

                    {/* Specs Grid */}
                    <div className="flex items-center justify-between mb-7 pb-7 border-b border-[color:rgba(14,42,43,0.08)]">
                        <div className="flex flex-col gap-1">
                            <span className="eyebrow !text-[10px]">{labels.beds}</span>
                            <div className="flex items-center gap-2 text-[color:var(--color-ink)] font-semibold"><BedDouble size={14} className="text-[color:var(--color-teal-edit)]" /> {project.beds}</div>
                        </div>
                        <div className="w-px h-6 bg-[color:rgba(14,42,43,0.08)]"></div>
                        <div className="flex flex-col gap-1">
                            <span className="eyebrow !text-[10px]">{labels.baths}</span>
                            <div className="flex items-center gap-2 text-[color:var(--color-ink)] font-semibold"><Bath size={14} className="text-[color:var(--color-teal-edit)]" /> {project.baths}</div>
                        </div>
                        <div className="w-px h-6 bg-[color:rgba(14,42,43,0.08)]"></div>
                        <div className="flex flex-col gap-1">
                            <span className="eyebrow !text-[10px]">AREA</span>
                            <div className="flex items-center gap-2 text-[color:var(--color-ink)] font-semibold"><Square size={14} className="text-[color:var(--color-teal-edit)]" /> {project.sqft} m²</div>
                        </div>
                    </div>

                    <p className="text-[color:var(--color-ink-soft)] text-sm font-normal leading-relaxed mb-8 line-clamp-2">
                        {project.description[lang] || project.description.en}
                    </p>

                    <div className="mt-auto">
                        <span className="btn-editorial btn-editorial-teal w-full !py-4 flex items-center justify-center gap-3 group-hover:translate-y-[-2px] transition-transform">
                            {labels.viewDetails} <ArrowUpRight size={16} />
                        </span>
                    </div>
                </div>
            </TiltCard>
        </Link>
    );
};

export default ProjectCard;
