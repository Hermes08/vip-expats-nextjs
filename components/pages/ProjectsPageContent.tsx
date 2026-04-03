'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import { Search, Map, TrendingUp, Info, ChevronDown, Filter, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCMS } from '@/context/CMSContext';
import { Project, ProjectType, ProjectZone } from '@/lib/types';
import ParallaxSection from '@/components/ui/ParallaxSection';
import SplitText from '@/components/ui/SplitText';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const ProjectsPageContent: React.FC = () => {
    const { lang } = useLanguage();
    const { projects } = useCMS();
    const [activeZone, setActiveZone] = useState<string>('All');
    const [activeType, setActiveType] = useState<string>('Any');
    const [searchTerm, setSearchTerm] = useState('');
    const t = CONTENT[lang] || CONTENT['en'];

    // Search Handler (Simple state for now, debounce can be added if performance lags, but for <50 items it's fine)
    const handleSearchCheck = (project: Project) => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();

        // Search in Name (Current Lang & English fallback)
        const nameMatch = (project.name[lang] || project.name['en']).toLowerCase().includes(term);
        const locationMatch = (project.location[lang] || project.location['en']).toLowerCase().includes(term);
        // Optional: Search description or keywords if deep search required

        return nameMatch || locationMatch;
    };

    const filteredProjects = projects.filter(p => {
        const zoneMatch = activeZone === 'All' || p.zone.includes(activeZone as any);
        const typeMatch = activeType === 'Any' || p.type.includes(activeType as any);
        const searchMatch = handleSearchCheck(p);

        return zoneMatch && typeMatch && searchMatch;
    });

    return (
        <div className="pt-24 min-h-screen bg-brand-950">
            {/* Header: 3.0 Cinematic */}
            <div className="relative pt-20 pb-14 px-4 overflow-hidden border-b border-white/5 bg-mesh-glow">
                <div className="absolute inset-0 z-0 scale-105 overflow-hidden">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        transition={{ duration: 3, ease: 'easeOut' }}
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 via-brand-950/40 to-brand-950" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <HeroTilt intensity={2}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-block border border-brand-GOLD/30 bg-brand-950/50 backdrop-blur-md text-brand-GOLD px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-6 shadow-[0_0_20px_rgba(233,195,73,0.1)]">
                                Asset Catalog <span className="text-white">2026</span>
                            </span>
                            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-white mb-5 tracking-tight leading-tight uppercase">
                                THE INVESTMENT <span className="text-brand-GOLD">INVENTORY.</span>
                            </h1>
                            <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed font-medium italic border-l-2 border-brand-GOLD/20 pl-5 opacity-90">
                                Curating high-liquidity <strong>Panama real estate assets</strong> and exclusive <strong>luxury developments</strong> for the global elite.
                            </p>
                        </motion.div>
                    </HeroTilt>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="relative lg:sticky lg:top-[72px] z-40 bg-brand-950/70 backdrop-blur-2xl border-b border-white/5 py-8 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-10">
                        <div className="flex flex-wrap gap-4 sm:gap-12 items-center">
                            <div className="flex items-center gap-4">
                                <Filter size={16} className="text-brand-GOLD" />
                                <div className="relative group">
                                    <select
                                        className="bg-transparent font-black text-[11px] uppercase tracking-[0.2em] focus:outline-none cursor-pointer pr-8 appearance-none text-white hover:text-brand-GOLD transition-colors"
                                        value={activeZone}
                                        onChange={(e) => setActiveZone(e.target.value)}
                                        aria-label="Neighborhood Filter"
                                    >
                                        <option value="All" className="text-brand-950">{lang === 'zh' ? '全部地区' : 'All Neighborhoods'}</option>
                                        <option value="Beach" className="text-brand-950">{lang === 'zh' ? '海滩' : 'Beach Areas'}</option>
                                        <option value="Mountain" className="text-brand-950">{lang === 'zh' ? '山区' : 'Highlands'}</option>
                                        <option value="Caribbean" className="text-brand-950">{lang === 'zh' ? '加勒比海' : 'Caribbean'}</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-GOLD/50 pointer-events-none group-hover:text-brand-GOLD transition-colors" size={14} />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Map size={16} className="text-brand-GOLD" />
                                <div className="relative group">
                                    <select
                                        className="bg-transparent font-black text-[11px] uppercase tracking-[0.2em] focus:outline-none cursor-pointer pr-8 appearance-none text-white hover:text-brand-GOLD transition-colors"
                                        value={activeType}
                                        onChange={(e) => setActiveType(e.target.value)}
                                        aria-label="Property Type Filter"
                                    >
                                        <option value="Any" className="text-brand-950">{lang === 'zh' ? '房产类型' : 'Property Type'}</option>
                                        <option value="Condo" className="text-brand-950">{lang === 'zh' ? '公寓' : 'Condominiums'}</option>
                                        <option value="House" className="text-brand-950">{lang === 'zh' ? '住宅' : 'Single Family'}</option>
                                        <option value="Villa" className="text-brand-950">{lang === 'zh' ? '别墅' : 'Luxury Villas'}</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-GOLD/50 pointer-events-none group-hover:text-brand-GOLD transition-colors" size={14} />
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow md:max-w-md relative">
                            <Magnetic strength={0.1}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder={lang === 'zh' ? "搜索项目..." : "Search Project Portfolio..."}
                                    aria-label="Search projects by keyword"
                                    className="w-full pl-14 pr-10 py-5 bg-white/5 rounded-2xl text-[11px] font-black uppercase tracking-widest border border-brand-100 text-white focus:ring-1 focus:ring-brand-GOLD/50 outline-none transition-all placeholder:text-slate-600 shadow-inner"
                                />
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-GOLD/50" size={20} />
                            </Magnetic>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                                >
                                    <span className="sr-only">Clear</span>
                                    &times;
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
                <div className="flex justify-between items-center mb-16">
                    <p className="text-sm font-black text-brand-GOLD uppercase tracking-[0.2em] mb-4">
                        Showing {filteredProjects.length} Verified Rockstar Assets
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="container mx-auto py-6 relative z-20">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="animate-float" style={{ animationDelay: `${index * 1}s` }}>
                                    <ProjectCard project={project} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-32 glass-card rounded-[4rem] border-white/5 shadow-2xl">
                            <p className="text-2xl text-gray-400 mb-4 font-black uppercase tracking-tighter">No assets found matching your criteria.</p>
                            <p className="text-sm text-gray-500 mb-12 font-medium">Try broadening your search for maximum ROI opportunities.</p>
                            <button
                                onClick={() => {
                                    setActiveType('Any');
                                    setActiveZone('All');
                                    setSearchTerm('');
                                }}
                                className="btn-3d btn-3d-gold px-12 py-6 rounded-xl font-black text-xs uppercase tracking-widest"
                            >
                                RESET GLOBAL FILTERS
                            </button>
                        </div>
                    )}
                </div>

                {/* SECTION: MASSIVE NEIGHBORHOOD ANALYSIS */}
                <div className="mt-32 pt-20 border-t border-white/5">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="bg-brand-GOLD/10 text-brand-GOLD px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Market Intelligence</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">{t.projectsPage.neighborhoodTitle}</h2>
                            <div className="prose prose-lg text-slate-400 max-w-none text-left leading-relaxed whitespace-pre-line font-medium">
                                {t.projectsPage.neighborhoodBody}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 mt-20">
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><TrendingUp className="text-brand-GOLD" /> Beachfront Investment Hotspots</h3>
                                    <p className="text-sm leading-relaxed text-slate-400">The <strong>panama condos on the beach</strong> market has expanded significantly towards <strong>playa caracol panama</strong> and Playa Bonita. These areas represent <strong>panama beachfront investment</strong> opportunities with the highest potential for short-term rental yields. Benchmark these against the traditional <strong>coronado panama real estate</strong> market to see how <strong>panama city beach real estate</strong> is evolving towards a younger, lifestyle-oriented demographic.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><Map className="text-brand-GOLD" /> The Highlands & Retiro Life</h3>
                                    <p className="text-sm leading-relaxed text-slate-400">For <strong>panama mountain homes for sale</strong>, Boquete is the undisputed king. The <strong>boquete panama real estate</strong> market is driven by <strong>american retirees in panama</strong> looking for world-class wellness facilities and established <strong>expat communities in panama</strong>. Explore <strong>property in boquete panama</strong> as a defensive asset in your portfolio, providing stability and excellent quality of life under the <strong>pensionado visa panama</strong> benefits.</p>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><Info className="text-brand-GOLD" /> Urban Luxury & Branded Residences</h3>
                                    <p className="text-sm leading-relaxed text-slate-400"><strong>Panama city condos</strong> continue to lead the region in sophistication. Projects like <strong>ocean reef islands panama</strong> and <strong>westin panama residences</strong> are the pinnacle of <strong>panama branded residences</strong>. These properties appeal to international buyers seeking <strong>panama high end real estate</strong> with the security of a global hotel brand. Benchmark these against <strong>punta pacifica condos</strong> like <strong>ph oceanaire</strong> to understand the premium of hotel-managed inventory.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><ShieldCheck className="text-brand-GOLD" /> Buyer's Checklist for Panama</h3>
                                    <p className="text-sm leading-relaxed text-slate-400">When <strong>buying real estate in panama</strong>, always verify the developer's track record and the <strong>panama real estate projects</strong>' history of appreciation. Our <strong>panama property investment guide</strong> recommends prioritizing <strong>panama gated communities</strong> with professional maintenance. Whether you seek <strong>panama expat real estate</strong> or a <strong>panama second home</strong>, the Rockstar advisors provide full transparency on closing costs and tax exemptions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Grounding Wall */}
            <section className="bg-black py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] mb-10 text-center">Global Property Search Hub</h2>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 text-[11px] font-bold text-brand-GOLD grayscale hover:grayscale-0 transition-all">
                        <span>panama condos for sale</span>
                        <span>panama apartments for sale</span>
                        <span>panama houses for sale</span>
                        <span>panama gated communities</span>
                        <span>new developments panama</span>
                        <span>panama pre construction condos</span>
                        <span>panama sea view apartments</span>
                        <span>panama investment condos</span>
                        <span>panama waterfront condos</span>
                        <span>panama foreign buyer real estate</span>
                        <span>panama luxury coastal condos</span>
                        <span>panama resort real estate</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPageContent;
