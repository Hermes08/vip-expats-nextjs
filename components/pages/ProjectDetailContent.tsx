'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, CONTENT } from '@/lib/constants';
import { MapPin, CheckCircle, TrendingUp, BookOpen, Compass, ShieldCheck, UserCheck, Gavel, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCMS } from '@/context/CMSContext';
import VideoSection from '@/components/projects/VideoSection';
import FloorPlans from '@/components/projects/FloorPlans';
import SplitText from '@/components/ui/SplitText';
import ProductSchema from '@/components/seo/ProductSchema';
import VideoSchema from '@/components/seo/VideoSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const ProjectDetailContent: React.FC<{ slug: string }> = ({ slug }) => {
    const { lang } = useLanguage();
    const { blogPosts, projects } = useCMS();
    const project = projects.find(p => p.slug === slug);
    const [activeImage, setActiveImage] = useState(0);
    const t = CONTENT[lang] || CONTENT['en'];
    const labels = t.labels;

    if (!project) return <div className="pt-32 text-center text-white">Project not found.</div>;

    const relatedPosts = blogPosts.filter(post => post.projectId === project.id);
    const baseUrl = 'https://panamarealestatesale.com';

    return (
        <div className="bg-white min-h-screen">
            <ProductSchema project={project} lang={lang as 'es' | 'en'} />
            <BreadcrumbSchema items={[
                { name: lang === 'es' ? 'Inicio' : 'Home', item: `${baseUrl}/${lang}` },
                { name: lang === 'es' ? 'Proyectos' : 'Projects', item: `${baseUrl}/${lang}/proyectos` },
                { name: project.name[lang], item: `${baseUrl}/${lang}/proyectos/${slug}` }
            ]} />
            {project.videoUrl && (
                <VideoSchema
                    videoUrl={project.videoUrl}
                    name={project.name[lang] || project.name['en']}
                    description={project.description[lang] || project.description['en']}
                    uploadDate="2026-01-01"
                    thumbnailUrl={project.images[0]}
                />
            )}
            {/* Gallery Header */}
            {/* Gallery Header */}
            <section className="bg-neutral-900 h-[85vh] min-h-[600px] relative overflow-hidden group">
                <img src={project.images[activeImage]} alt={project.name[lang]} className="w-full h-full object-cover transition-all duration-700" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-black/30" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-24">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="text-white max-w-4xl relative z-20">
                            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md text-brand-GOLD font-bold uppercase tracking-widest text-[10px] mb-6 px-4 py-1.5 rounded-full border border-white/10">
                                <MapPin size={12} /> {project.location[lang]}
                            </div>
                            <h1 className="font-heading text-4xl md:text-7xl font-black mb-6 leading-none md:leading-[0.9] tracking-tighter text-shadow-lg">
                                <SplitText text={project.name[lang]} delay={0.2} />
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-brand-GOLD text-brand-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg shadow-brand-GOLD/20">{project.status}</span>
                                <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase border border-white/20 hover:bg-white/20 transition-colors cursor-default">{project.type}</span>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl flex flex-col items-end min-w-[280px] hidden md:flex border border-white/20 relative z-20">
                            <span className="text-[10px] font-black text-brand-GOLD uppercase tracking-[0.2em] mb-2 text-shadow-sm">{labels.startingAt}</span>
                            <span className="text-4xl font-black text-white tracking-tighter italic text-shadow-lg">USD {project.priceFrom.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Selectors */}
                {project.images.length > 1 && (
                    <div className="absolute bottom-40 right-12 z-30 hidden lg:flex gap-3 p-2 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10">
                        {project.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                aria-label={`View gallery image ${idx + 1}`}
                                className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeImage === idx ? 'border-brand-GOLD scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`Gallery image ${idx + 1}`} />
                            </button>
                        ))}
                    </div>
                )}
            </section>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">

                        {/* Quick Specs */}
                        <div className="grid grid-cols-3 gap-6 mb-16 py-8 border-y border-neutral-100 text-center">
                            <div>
                                <span className="block text-xl font-bold text-brand-900">{project.beds}</span>
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{labels.beds}</span>
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-brand-900">{project.baths}</span>
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{labels.baths}</span>
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-brand-900">{project.sqft}</span>
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">m²</span>
                            </div>
                        </div>

                        {/* SECTION 1: Deep Dive */}
                        <article className="prose prose-lg max-w-none text-brand-600 mb-20 reveal-on-scroll">
                            <h2 className="text-3xl font-heading font-bold text-brand-900 mb-8 border-b-2 border-brand-GOLD inline-block pb-2 uppercase tracking-tighter">
                                {lang === 'es' ? 'Análisis Profundo del Proyecto' : 'Project Deep Dive & Architectural Vision'}
                            </h2>
                            <div
                                className="leading-relaxed whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: project.longDescription?.[lang] || project.description[lang] }}
                            />
                        </article>

                        {/* Video Section */}
                        {project.videoUrl && project.showVideo !== false && (
                            <div className="mb-20 reveal-on-scroll">
                                <VideoSection videoUrl={project.videoUrl} />
                            </div>
                        )}

                        {/* Floor Plans Section */}
                        {project.floorplans && project.floorplans.length > 0 && project.showFloorplans !== false && (
                            <div className="mb-20 reveal-on-scroll">
                                <FloorPlans floorplans={project.floorplans} lang={lang} />
                            </div>
                        )}

                        {/* SECTION 2: Location & Lifestyle */}
                        <article className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-100 mb-20 reveal-on-scroll">
                            <h2 className="text-3xl font-heading font-bold text-brand-900 mb-8 flex items-center gap-4">
                                <Compass className="text-brand-GOLD" size={36} />
                                {lang === 'es' ? 'Ubicación y Estilo de Vida' : 'Neighborhood Analysis & Coastal Lifestyle'}
                            </h2>
                            <div
                                className="prose prose-lg text-brand-600 max-w-none whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: project.locationAnalysis?.[lang] || '' }}
                            />
                        </article>

                        {/* SECTION 3: Investment Analysis (GOLD/GLASS POLISH) */}
                        <article className="mb-20 p-12 rounded-[3rem] bg-brand-950 border border-white/5 shadow-2xl relative overflow-hidden group reveal-on-scroll">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-GOLD/10 via-transparent to-transparent opacity-50"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="w-20 h-20 bg-brand-GOLD/10 backdrop-blur-md border border-brand-GOLD/20 text-brand-GOLD rounded-2xl flex items-center justify-center shadow-[0_0_30px_-5px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <TrendingUp size={40} />
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter italic">
                                        {lang === 'es' ? 'Análisis de Inversión y ROI' : 'Investment Analysis & Market Trends'}
                                    </h2>
                                </div>
                                <div
                                    className="prose prose-lg prose-invert max-w-none whitespace-pre-line text-slate-300 font-medium leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: project.investmentAnalysis?.[lang] || '' }}
                                />
                            </div>
                        </article>

                        {/* SECTION 4: Buyer Profile */}
                        <article className="bg-brand-900 text-white p-12 rounded-[3rem] mb-20 shadow-2xl relative overflow-hidden reveal-on-scroll">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-GOLD/5 rounded-full blur-3xl"></div>
                            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-4">
                                <UserCheck className="text-brand-GOLD" size={36} />
                                {lang === 'es' ? 'Perfil del Comprador' : 'Ideal Buyer Profile & Use Cases'}
                            </h2>
                            <div
                                className="prose prose-lg prose-invert max-w-none whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: project.buyerProfile?.[lang] || '' }}
                            />
                        </article>

                        {/* SECTION 5: Legal & Residency */}
                        <article className="mb-20 p-12 border-2 border-brand-GOLD/20 rounded-[3rem] reveal-on-scroll">
                            <h2 className="text-3xl font-heading font-bold text-brand-900 mb-8 flex items-center gap-4">
                                <Gavel className="text-brand-GOLD" size={36} />
                                {lang === 'es' ? 'Integración Legal y Residencia' : 'Legal Guide & Residency Pathways'}
                            </h2>
                            <div
                                className="prose prose-lg text-brand-600 max-w-none whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: project.residencyInfo?.[lang] || '' }}
                            />
                        </article>

                    </div>

                    {/* SIDEBAR CONVERSION */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            {/* Tour CTA */}
                            <div className="bg-brand-950 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-GOLD/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <Compass className="text-brand-GOLD mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4 leading-tight">Request a Private Relocation Tour</h3>
                                <p className="text-neutral-400 text-sm mb-8 leading-relaxed">Experience {project.name[lang]} first-hand with our expert ground team. We handle legal, logistics, and lifestyle vetting.</p>
                                <Link href="/contacto" className="block w-full py-4 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-white transition-all text-center">Schedule Discovery Visit</Link>
                            </div>

                            {/* Lead Magnet Book */}
                            {/* Lead Form */}
                            <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl">
                                <h3 className="font-bold text-brand-900 mb-4 uppercase tracking-widest text-[10px] flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-brand-GOLD" /> Official Inquiry
                                </h3>
                                <p className="text-xs text-brand-500 mb-6 font-medium">Recieve the full brochure & pricing list for {project.name[lang]}</p>

                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const formData = new FormData(form);
                                    const data = {
                                        name: formData.get('name') as string,
                                        email: formData.get('email') as string,
                                        phone: formData.get('phone') as string,
                                        project_interest: project.name[lang],
                                        message: formData.get('message') as string,
                                    };

                                    try {
                                        const { supabase } = await import('@/lib/supabase');
                                        const { error } = await supabase.from('leads').insert([data]);
                                        if (error) throw error;
                                        alert('Inquiry sent! We will contact you shortly.');
                                        form.reset();
                                    } catch (err) {
                                        console.error(err);
                                        alert('Error sending message. Please try again.');
                                    }
                                }} className="space-y-4">
                                    <input name="name" required placeholder="Name" aria-label="Your Name" className="w-full px-4 py-3 bg-neutral-50 rounded-lg text-sm border-transparent focus:border-brand-GOLD focus:ring-0 outline-none transition-all" />
                                    <input name="email" required type="email" placeholder="Email" aria-label="Your Email" className="w-full px-4 py-3 bg-neutral-50 rounded-lg text-sm border-transparent focus:border-brand-GOLD focus:ring-0 outline-none transition-all" />
                                    <input name="phone" required placeholder="Phone/WhatsApp" aria-label="Your Phone or WhatsApp" className="w-full px-4 py-3 bg-neutral-50 rounded-lg text-sm border-transparent focus:border-brand-GOLD focus:ring-0 outline-none transition-all" />
                                    <textarea name="message" placeholder="I'm interested in..." aria-label="Message" rows={3} className="w-full px-4 py-3 bg-neutral-50 rounded-lg text-sm border-transparent focus:border-brand-GOLD focus:ring-0 outline-none transition-all resize-none"></textarea>

                                    <button type="submit" className="w-full py-4 bg-brand-900 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-brand-GOLD hover:text-brand-900 transition-all shadow-lg">
                                        Request Details
                                    </button>
                                </form>
                                <p className="text-[9px] text-neutral-400 mt-4 text-center">100% Privacy Guaranteed.</p>
                            </div>

                            {/* Amenities List */}
                            <div className="bg-neutral-50 p-8 rounded-3xl">
                                <h3 className="font-bold text-brand-900 mb-6 uppercase tracking-widest text-[10px] border-b border-neutral-200 pb-2 flex items-center gap-2">
                                    <Home size={14} className="text-brand-GOLD" /> Development Amenities
                                </h3>
                                <ul className="space-y-4">
                                    {(project.amenities[lang] || project.amenities.en).map((a, i) => (
                                        <li key={i} className="flex gap-3 text-xs font-bold text-brand-600">
                                            <CheckCircle size={14} className="text-brand-GOLD shrink-0" /> {a}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Related Content */}
                            {relatedPosts.length > 0 && (
                                <div className="bg-neutral-50 p-8 rounded-3xl">
                                    <h3 className="font-bold text-brand-900 mb-6 uppercase tracking-widest text-[10px] border-b border-neutral-200 pb-2">Market Context</h3>
                                    <div className="space-y-6">
                                        {relatedPosts.map(post => (
                                            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                                                <h5 className="text-sm font-bold text-brand-900 group-hover:text-brand-GOLD transition-colors mb-2">{post.title[lang]}</h5>
                                                <span className="text-[10px] text-brand-400 font-bold uppercase">{labels.readReport} →</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Grounding Wall (SEO Booster) */}
            <section className="bg-neutral-50 py-20 border-t border-neutral-100">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-10 text-center">Global Reach • Local Expertise • Panama Investment Hub</h2>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 text-[11px] font-bold text-brand-900 grayscale">
                        <span>panama condos on the beach</span>
                        <span>panama city condos</span>
                        <span>panama real estate</span>
                        <span>panama luxury real estate</span>
                        <span>panama luxury apartments</span>
                        <span>panama beachfront real estate</span>
                        <span>panama oceanfront real estate</span>
                        <span>panama coastal real estate</span>
                        <span>beachfront property for sale in panama</span>
                        <span>american retirees in panama</span>
                        <span>pensionado visa panama</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailContent;
