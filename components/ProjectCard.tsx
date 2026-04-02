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
            <TiltCard className="rounded-[2.5rem] overflow-hidden bg-brand-900 border border-white/5 shadow-2xl">
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
                            px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-brand-900 rounded-full shadow-xl
                            ${isPresale ? 'bg-brand-GOLD' : 'bg-white'}
                        `}>
                            {project.status}
                        </span>
                    </div>

                    {/* Price Tag - Glassmorphism */}
                    <div className="absolute bottom-8 left-6 right-6 z-20">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-3xl border border-white/20 shadow-xl flex justify-between items-center transform transition-transform duration-500 group-hover:-translate-y-2">
                            <div>
                                <span className="text-[10px] font-black text-brand-GOLD uppercase tracking-widest block mb-2 text-shadow-sm">
                                    {CONTENT[lang].startingAt || 'Starting At'}
                                </span>
                                <div className="text-2xl font-black text-white tracking-tighter italic text-shadow-md">
                                    {formattedPrice}
                                </div>
                            </div>
                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm border border-white/20 shadow-lg group-hover:bg-brand-GOLD group-hover:text-brand-950 transition-colors">
                                <TrendingUp size={20} className="text-brand-GOLD group-hover:text-brand-900" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-10 relative z-20 bg-brand-900/95 backdrop-blur-sm flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                        <MapPin size={12} />
                        {project.location[lang] || project.location.en}
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-black text-white mb-4 group-hover:text-brand-GOLD transition-colors uppercase tracking-tighter italic">
                        {project.name[lang] || project.name.en}
                    </h3>

                    {/* Specs Grid */}
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{labels.beds}</span>
                            <div className="flex items-center gap-2 text-gray-200 font-black italic"><BedDouble size={14} className="text-brand-GOLD" /> {project.beds}</div>
                        </div>
                        <div className="w-px h-6 bg-white/10"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{labels.baths}</span>
                            <div className="flex items-center gap-2 text-gray-200 font-black italic"><Bath size={14} className="text-brand-GOLD" /> {project.baths}</div>
                        </div>
                        <div className="w-px h-6 bg-white/10"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">AREA</span>
                            <div className="flex items-center gap-2 text-white font-black italic"><Square size={14} className="text-brand-GOLD" /> {project.sqft} m²</div>
                        </div>
                    </div>

                    <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10 line-clamp-2 italic">
                        {project.description[lang] || project.description.en}
                    </p>

                    <div className="mt-auto">
                        <span className="btn-3d btn-3d-gold flex items-center justify-center gap-4 w-full py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all group-hover:scale-105">
                            {labels.viewDetails} <ArrowUpRight size={16} />
                        </span>
                    </div>
                </div>
            </TiltCard>
        </Link>
    );
};

export default ProjectCard;
