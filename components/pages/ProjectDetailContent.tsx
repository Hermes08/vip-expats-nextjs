'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CONTENT } from '@/lib/constants';
import { MapPin, CheckCircle, TrendingUp, BookOpen, Compass, UserCheck, Gavel, X, ChevronLeft, ChevronRight, BedDouble, Bath, Square, Share2, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCMS } from '@/context/CMSContext';
import VideoSection from '@/components/projects/VideoSection';
import FloorPlans from '@/components/projects/FloorPlans';
import ProductSchema from '@/components/seo/ProductSchema';
import VideoSchema from '@/components/seo/VideoSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

type TabId = 'overview' | 'amenities' | 'floorplans' | 'location' | 'investment' | 'residency';

const TAB_LABELS: Record<string, Record<TabId, string>> = {
    en: {
        overview: 'Overview',
        amenities: 'Amenities',
        floorplans: 'Floor Plans',
        location: 'Location',
        investment: 'Investment',
        residency: 'Residency',
    },
    es: {
        overview: 'Vista General',
        amenities: 'Amenidades',
        floorplans: 'Planos',
        location: 'Ubicación',
        investment: 'Inversión',
        residency: 'Residencia',
    },
    pt: {
        overview: 'Visão Geral',
        amenities: 'Comodidades',
        floorplans: 'Plantas',
        location: 'Localização',
        investment: 'Investimento',
        residency: 'Residência',
    },
    de: {
        overview: 'Überblick',
        amenities: 'Ausstattung',
        floorplans: 'Grundrisse',
        location: 'Lage',
        investment: 'Investition',
        residency: 'Aufenthalt',
    },
};

const ProjectDetailContent: React.FC<{ slug: string }> = ({ slug }) => {
    const { lang } = useLanguage();
    const { blogPosts, projects } = useCMS();
    const project = projects.find(p => p.slug === slug);
    const [tab, setTab] = useState<TabId>('overview');
    const [lightbox, setLightbox] = useState(false);
    const [lightboxIdx, setLightboxIdx] = useState(0);
    const t = CONTENT[lang] || CONTENT['en'];
    const labels = t.labels;
    const tabLabels = TAB_LABELS[lang] || TAB_LABELS['en'];

    if (!project) return <div className="pt-32 text-center text-[color:var(--color-ink-mute)]">Project not found.</div>;

    const relatedPosts = blogPosts.filter(post => post.projectId === project.id);
    const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 3);
    const baseUrl = 'https://panamarealestatesale.com';
    const images = project.images || [];
    const extraCount = Math.max(0, images.length - 5);
    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(project.priceFrom);
    const openLightbox = (idx: number) => { setLightboxIdx(idx); setLightbox(true); };

    return (
        <div className="bg-[color:var(--color-cream)] min-h-screen">
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
            {/* Breadcrumb */}
            <section className="pt-32 pb-3 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="eyebrow !text-[color:var(--color-ink-mute)]">
                        <Link href={`/${lang}`} className="hover:text-[color:var(--color-teal-edit)] transition-colors">{lang === 'es' ? 'Inicio' : 'Home'}</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/${lang}/proyectos`} className="hover:text-[color:var(--color-teal-edit)] transition-colors">{lang === 'es' ? 'Proyectos' : 'Projects'}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[color:var(--color-ink)]">{project.name[lang] || project.name.en}</span>
                    </div>
                </div>
            </section>

            {/* Gallery Grid — 2fr / 1fr / 1fr layout */}
            <section className="pt-3 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="gallery-grid grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-2 h-[580px] rounded-lg overflow-hidden">
                        {/* Big hero image */}
                        <button
                            onClick={() => openLightbox(0)}
                            aria-label="Open gallery"
                            className="relative group overflow-hidden cursor-pointer"
                        >
                            {images[0] && (
                                <img src={images[0]} alt={project.name[lang] || project.name.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            )}
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                                <span className="tag-mono !bg-brand-GOLD !text-brand-950 shadow-md">{project.status}</span>
                                <span className="tag-mono !bg-[color:var(--color-paper)]/90 !text-[color:var(--color-ink)] backdrop-blur-md shadow-md">{project.type?.[0] || project.type}</span>
                            </div>
                        </button>

                        {/* Col 2: stacked 2 thumbs */}
                        <div className="hidden md:grid grid-rows-2 gap-2">
                            <button onClick={() => openLightbox(1)} aria-label="Open gallery image 2" className="relative overflow-hidden group cursor-pointer">
                                {images[1] && <img src={images[1]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                            </button>
                            <button onClick={() => openLightbox(2)} aria-label="Open gallery image 3" className="relative overflow-hidden group cursor-pointer">
                                {images[2] && <img src={images[2]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                            </button>
                        </div>

                        {/* Col 3: stacked 2 thumbs with +N overlay on last */}
                        <div className="hidden md:grid grid-rows-2 gap-2">
                            <button onClick={() => openLightbox(3)} aria-label="Open gallery image 4" className="relative overflow-hidden group cursor-pointer">
                                {images[3] && <img src={images[3]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                            </button>
                            <button onClick={() => openLightbox(4)} aria-label="Open full gallery" className="relative overflow-hidden group cursor-pointer">
                                {images[4] && <img src={images[4]} alt="" className="w-full h-full object-cover" />}
                                {extraCount > 0 && (
                                    <div className="absolute inset-0 bg-[color:var(--color-ink)]/60 grid place-items-center text-white">
                                        <div className="text-center">
                                            <div className="display-serif italic text-5xl leading-none">+{extraCount}</div>
                                            <div className="eyebrow eyebrow-light mt-2">{lang === 'es' ? 'Ver galería' : 'View gallery'}</div>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Title + Price split row */}
            <section className="pb-10 px-4 border-b border-[color:rgba(14,42,43,0.08)]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_auto] gap-10 items-end">
                    <div>
                        <div className="eyebrow !text-[color:var(--color-coral)] mb-4 flex items-center gap-2">
                            <MapPin size={12} /> {project.location[lang] || project.location.en}
                        </div>
                        <h1 className="display-serif text-5xl md:text-7xl text-[color:var(--color-ink)] leading-[1.02]">
                            <span className="italic">{project.name[lang] || project.name.en}</span>
                        </h1>
                        <p className="lede mt-5 max-w-[56ch]">
                            {project.description[lang] || project.description.en}
                        </p>
                        <div className="flex flex-wrap gap-7 mt-7 font-mono text-sm text-[color:var(--color-ink-mute)]">
                            <span className="inline-flex items-center gap-2"><BedDouble size={16} className="text-[color:var(--color-teal-edit)]" /> {project.beds} {labels.beds}</span>
                            <span className="inline-flex items-center gap-2"><Bath size={16} className="text-[color:var(--color-teal-edit)]" /> {project.baths} {labels.baths}</span>
                            <span className="inline-flex items-center gap-2"><Square size={16} className="text-[color:var(--color-teal-edit)]" /> {project.sqft} m²</span>
                        </div>
                    </div>
                    <div className="md:text-right">
                        <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-2">{labels.startingAt}</div>
                        <div className="display-serif text-5xl md:text-6xl text-[color:var(--color-ink)] leading-none">
                            {formattedPrice}
                        </div>
                        <div className="mt-2 font-mono text-xs text-[color:var(--color-ink-mute)]">USD · {lang === 'es' ? 'Sin riesgo cambiario' : 'No FX risk'}</div>
                        <div className="flex gap-2 mt-5 md:justify-end">
                            <button className="btn-editorial btn-editorial-ghost !px-4 !py-2.5 !text-xs">
                                <Heart size={14} /> {lang === 'es' ? 'Guardar' : 'Save'}
                            </button>
                            <button className="btn-editorial btn-editorial-ghost !px-4 !py-2.5 !text-xs">
                                <Share2 size={14} /> {lang === 'es' ? 'Compartir' : 'Share'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs + sticky sidebar */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto detail-grid grid lg:grid-cols-[1fr_400px] gap-16 items-start">
                    <div>
                        {/* Tab nav — sticky */}
                        <div className="flex gap-6 md:gap-8 border-b border-[color:rgba(14,42,43,0.08)] mb-12 sticky top-[88px] bg-[color:var(--color-cream)] z-20 pt-2 overflow-x-auto no-scrollbar">
                            {(['overview', 'amenities', 'floorplans', 'location', 'investment', 'residency'] as TabId[]).map(id => (
                                <button
                                    key={id}
                                    onClick={() => setTab(id)}
                                    className={`py-3 text-sm font-medium transition-colors whitespace-nowrap border-b-2 -mb-px ${tab === id ? 'text-[color:var(--color-ink)] border-[color:var(--color-teal-edit)]' : 'text-[color:var(--color-ink-mute)] border-transparent hover:text-[color:var(--color-ink)]'}`}
                                >
                                    {tabLabels[id]}
                                </button>
                            ))}
                        </div>

                        {/* Tab panels */}
                        {tab === 'overview' && (
                            <div>
                                <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-4">— {lang === 'es' ? 'Sobre este proyecto' : 'About this development'}</div>
                                <article
                                    className="prose prose-lg max-w-none text-[color:var(--color-ink-soft)] leading-relaxed whitespace-pre-line prose-headings:display-serif prose-headings:italic prose-headings:text-[color:var(--color-ink)] prose-strong:text-[color:var(--color-ink)]"
                                    dangerouslySetInnerHTML={{ __html: project.longDescription?.[lang] || project.description[lang] || project.description.en }}
                                />
                                {project.videoUrl && project.showVideo !== false && (
                                    <div className="mt-16">
                                        <VideoSection videoUrl={project.videoUrl} />
                                    </div>
                                )}
                            </div>
                        )}

                        {tab === 'amenities' && (
                            <div>
                                <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-4">— {lang === 'es' ? 'Amenidades y acabados' : 'Amenities & finishes'}</div>
                                <h2 className="display-serif text-4xl md:text-5xl text-[color:var(--color-ink)] mb-10 max-w-[14ch]">
                                    {lang === 'es' ? <>La lista es <em className="italic">corta</em>, a propósito.</> : <>The list is <em className="italic">short</em>, on purpose.</>}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[color:rgba(14,42,43,0.08)] border border-[color:rgba(14,42,43,0.08)]">
                                    {(project.amenities[lang] || project.amenities.en).map((a, i) => (
                                        <div key={i} className="bg-[color:var(--color-paper)] p-7 flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[color:var(--color-teal-soft)] text-[color:var(--color-teal-deep)] grid place-items-center shrink-0">
                                                <CheckCircle size={18} />
                                            </div>
                                            <div className="text-sm font-medium text-[color:var(--color-ink)]">{a}</div>
                                        </div>
                                    ))}
                                </div>
                                {project.highlights && (project.highlights[lang] || project.highlights.en) && (
                                    <div className="mt-12">
                                        <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-4">— {lang === 'es' ? 'Destacados' : 'Highlights'}</div>
                                        <ul className="grid md:grid-cols-2 gap-4">
                                            {(project.highlights[lang] || project.highlights.en).map((h, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-[color:var(--color-ink-soft)]">
                                                    <CheckCircle size={16} className="text-[color:var(--color-teal-edit)] shrink-0 mt-0.5" />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {tab === 'floorplans' && (
                            <div>
                                <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-4">— {lang === 'es' ? 'Planos' : 'Floor plans'}</div>
                                {project.floorplans && project.floorplans.length > 0 && project.showFloorplans !== false ? (
                                    <FloorPlans floorplans={project.floorplans} lang={lang} />
                                ) : (
                                    <p className="lede italic">{lang === 'es' ? 'Planos disponibles bajo solicitud. Escríbenos para recibir el paquete completo.' : 'Floor plans available upon request. Reach out to receive the full package.'}</p>
                                )}
                            </div>
                        )}

                        {tab === 'location' && (
                            <div>
                                <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-4">— {lang === 'es' ? 'El vecindario' : 'The neighborhood'}</div>
                                <h2 className="display-serif text-4xl md:text-5xl text-[color:var(--color-ink)] mb-8 max-w-[16ch] leading-[1.05]">
                                    <span className="italic">{project.location[lang] || project.location.en}</span>
                                </h2>
                                <article
                                    className="prose prose-lg max-w-none text-[color:var(--color-ink-soft)] whitespace-pre-line prose-headings:display-serif prose-headings:italic prose-headings:text-[color:var(--color-ink)] prose-strong:text-[color:var(--color-ink)]"
                                    dangerouslySetInnerHTML={{ __html: project.locationAnalysis?.[lang] || '' }}
                                />
                            </div>
                        )}

                        {tab === 'investment' && (
                            <div>
                                <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-4 flex items-center gap-2">
                                    <TrendingUp size={12} className="text-[color:var(--color-teal-edit)]" />
                                    — {lang === 'es' ? 'Análisis de inversión y ROI' : 'Investment analysis & market trends'}
                                </div>
                                <article
                                    className="prose prose-lg max-w-none text-[color:var(--color-ink-soft)] whitespace-pre-line prose-headings:display-serif prose-headings:italic prose-headings:text-[color:var(--color-ink)] prose-strong:text-[color:var(--color-ink)]"
                                    dangerouslySetInnerHTML={{ __html: project.investmentAnalysis?.[lang] || '' }}
                                />
                                <div className="mt-16 p-8 bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] rounded-lg">
                                    <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-4 flex items-center gap-2">
                                        <UserCheck size={12} className="text-[color:var(--color-teal-edit)]" />
                                        — {lang === 'es' ? 'Perfil del comprador ideal' : 'Ideal buyer profile'}
                                    </div>
                                    <article
                                        className="prose prose-base max-w-none text-[color:var(--color-ink-soft)] whitespace-pre-line prose-strong:text-[color:var(--color-ink)]"
                                        dangerouslySetInnerHTML={{ __html: project.buyerProfile?.[lang] || '' }}
                                    />
                                </div>
                            </div>
                        )}

                        {tab === 'residency' && (
                            <div>
                                <div className="eyebrow !text-[color:var(--color-ink-mute)] mb-4 flex items-center gap-2">
                                    <Gavel size={12} className="text-[color:var(--color-teal-edit)]" />
                                    — {lang === 'es' ? 'Guía legal y residencia' : 'Legal guide & residency pathways'}
                                </div>
                                <article
                                    className="prose prose-lg max-w-none text-[color:var(--color-ink-soft)] whitespace-pre-line prose-headings:display-serif prose-headings:italic prose-headings:text-[color:var(--color-ink)] prose-strong:text-[color:var(--color-ink)]"
                                    dangerouslySetInnerHTML={{ __html: project.residencyInfo?.[lang] || '' }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Sticky sidebar — Inquiry + Tour CTA + Related posts */}
                    <aside className="detail-sidebar lg:sticky lg:top-24">
                        {/* Inquiry card */}
                        <div className="bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] rounded-lg p-8 shadow-[0_24px_60px_-24px_rgba(14,42,43,0.18)]">
                            <div className="flex items-center gap-4 pb-5 mb-5 border-b border-[color:rgba(14,42,43,0.08)]">
                                <div className="w-14 h-14 rounded-full bg-[color:var(--color-sand)] grid place-items-center text-[color:var(--color-ink)] font-semibold text-lg">VIP</div>
                                <div>
                                    <div className="text-[15px] font-semibold text-[color:var(--color-ink)]">VIP Expats Panama</div>
                                    <div className="font-mono text-xs text-[color:var(--color-ink-mute)]">{lang === 'es' ? 'Asesores Oficiales · Lic. 2019' : 'Official Advisors · Lic. 2019'}</div>
                                </div>
                            </div>

                            <div className="display-serif italic text-2xl text-[color:var(--color-ink)] mb-5 leading-tight">
                                {lang === 'es' ? 'Solicita un tour privado.' : 'Request a private tour.'}
                            </div>

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
                                    alert(lang === 'es' ? '¡Solicitud enviada! Te contactaremos pronto.' : 'Inquiry sent! We will contact you shortly.');
                                    form.reset();
                                } catch (err) {
                                    console.error(err);
                                    alert(lang === 'es' ? 'Error al enviar. Intenta de nuevo.' : 'Error sending message. Please try again.');
                                }
                            }} className="flex flex-col gap-3">
                                <input name="name" required placeholder={lang === 'es' ? 'Nombre completo' : 'Full name'} aria-label="Name" className="w-full px-4 py-3 text-sm border border-[color:rgba(14,42,43,0.12)] rounded-md bg-[color:var(--color-cream-soft)] text-[color:var(--color-ink)] outline-none focus:ring-2 focus:ring-[color:var(--color-teal-edit)]/30 focus:border-[color:var(--color-teal-edit)] transition-all" />
                                <input name="email" required type="email" placeholder="Email" aria-label="Email" className="w-full px-4 py-3 text-sm border border-[color:rgba(14,42,43,0.12)] rounded-md bg-[color:var(--color-cream-soft)] text-[color:var(--color-ink)] outline-none focus:ring-2 focus:ring-[color:var(--color-teal-edit)]/30 focus:border-[color:var(--color-teal-edit)] transition-all" />
                                <input name="phone" required placeholder={lang === 'es' ? 'Teléfono (con código país)' : 'Phone (with country code)'} aria-label="Phone" className="w-full px-4 py-3 text-sm border border-[color:rgba(14,42,43,0.12)] rounded-md bg-[color:var(--color-cream-soft)] text-[color:var(--color-ink)] outline-none focus:ring-2 focus:ring-[color:var(--color-teal-edit)]/30 focus:border-[color:var(--color-teal-edit)] transition-all" />
                                <textarea name="message" placeholder={lang === 'es' ? '¿Cuándo planeas visitar Panamá?' : 'When are you planning to visit Panama?'} aria-label="Message" rows={3} className="w-full px-4 py-3 text-sm border border-[color:rgba(14,42,43,0.12)] rounded-md bg-[color:var(--color-cream-soft)] text-[color:var(--color-ink)] outline-none focus:ring-2 focus:ring-[color:var(--color-teal-edit)]/30 focus:border-[color:var(--color-teal-edit)] transition-all resize-y" />
                                <button type="submit" className="btn-editorial btn-editorial-teal justify-center mt-2">
                                    {lang === 'es' ? 'Enviar solicitud' : 'Send inquiry'}
                                </button>
                                <div className="grid grid-cols-2 gap-2 mt-1">
                                    <Link href={`/${lang}/contacto`} className="btn-editorial btn-editorial-ghost !px-3 !py-3 !text-xs justify-center">
                                        <Compass size={14} /> {lang === 'es' ? 'Tour' : 'Tour'}
                                    </Link>
                                    <a href="https://wa.me/50767610315" target="_blank" rel="noopener noreferrer" className="btn-editorial btn-editorial-ghost !px-3 !py-3 !text-xs justify-center">
                                        WhatsApp
                                    </a>
                                </div>
                            </form>
                            <div className="mt-5 pt-5 border-t border-[color:rgba(14,42,43,0.06)] font-mono text-xs text-[color:var(--color-ink-mute)]">
                                {lang === 'es' ? 'Respuesta en menos de 2h, 7 días a la semana · EN / ES / PT / DE' : 'Response in under 2 hours, 7 days a week · EN / ES / PT / DE'}
                            </div>
                        </div>

                        {/* Related articles */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-6 bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] rounded-lg p-7">
                                <h3 className="eyebrow !text-[color:var(--color-ink-mute)] mb-4 flex items-center gap-2">
                                    <BookOpen size={12} className="text-[color:var(--color-teal-edit)]" />
                                    {lang === 'es' ? 'Contexto de Mercado' : 'Market Context'}
                                </h3>
                                <div className="space-y-4">
                                    {relatedPosts.slice(0, 3).map(post => (
                                        <Link key={post.id} href={`/${lang}/blog/${post.slug}`} className="block group">
                                            <h5 className="display-serif italic text-lg text-[color:var(--color-ink)] group-hover:text-[color:var(--color-teal-edit)] transition-colors leading-snug mb-1">{post.title[lang] || post.title.en}</h5>
                                            <span className="eyebrow !text-[color:var(--color-ink-mute)]">{labels.readReport} →</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </section>

            {/* More like this */}
            {relatedProjects.length > 0 && (
                <section className="py-20 bg-[color:var(--color-paper)] border-t border-[color:rgba(14,42,43,0.08)]">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
                            <h2 className="display-serif text-4xl md:text-5xl text-[color:var(--color-ink)]">
                                {lang === 'es' ? <>Más <em className="italic">como</em> este.</> : <>More <em className="italic">like</em> this one.</>}
                            </h2>
                            <Link href={`/${lang}/proyectos`} className="btn-editorial btn-editorial-ghost">
                                {lang === 'es' ? 'Ver todos' : 'Browse all'} →
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProjects.map(rp => (
                                <Link key={rp.id} href={`/${lang}/proyectos/${rp.slug}`} className="block group">
                                    <div className="aspect-[16/11] rounded-2xl overflow-hidden mb-4 border border-[color:rgba(14,42,43,0.08)]">
                                        {rp.images?.[0] && <img src={rp.images[0]} alt={rp.name[lang] || rp.name.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                                    </div>
                                    <div className="eyebrow !text-[color:var(--color-teal-edit)] mb-2"><MapPin size={11} className="inline" /> {rp.location[lang] || rp.location.en}</div>
                                    <h3 className="display-serif italic text-2xl text-[color:var(--color-ink)] group-hover:text-[color:var(--color-teal-edit)] transition-colors">{rp.name[lang] || rp.name.en}</h3>
                                    <p className="font-mono text-sm text-[color:var(--color-ink-mute)] mt-2">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(rp.priceFrom)}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Search Grounding Wall */}
            <section className="bg-[color:var(--color-cream-soft)] py-16 border-t border-[color:rgba(14,42,43,0.08)]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="eyebrow !text-[color:var(--color-ink-mute)] mb-8 text-center">Global Reach · Local Expertise · Panama Investment Hub</h2>
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-60 text-xs font-medium text-[color:var(--color-ink-mute)] italic hover:opacity-100 transition-all">
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

            {/* Lightbox */}
            {lightbox && images.length > 0 && (
                <div onClick={() => setLightbox(false)} className="fixed inset-0 z-[100] bg-[color:var(--color-ink)]/92 grid place-items-center cursor-pointer">
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightbox(false); }}
                        aria-label="Close"
                        className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/30 bg-transparent text-white cursor-pointer grid place-items-center hover:bg-white/10 transition-colors"
                    >
                        <X size={18} />
                    </button>
                    <div className="w-[85vw] h-[85vh]" onClick={(e) => e.stopPropagation()}>
                        <img src={images[lightboxIdx]} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 items-center" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setLightboxIdx((lightboxIdx - 1 + images.length) % images.length)} aria-label="Previous" className="w-11 h-11 rounded-full border border-white/30 bg-transparent text-white cursor-pointer grid place-items-center hover:bg-white/10 transition-colors">
                            <ChevronLeft size={18} />
                        </button>
                        <div className="text-white font-mono text-sm">{lightboxIdx + 1} / {images.length}</div>
                        <button onClick={() => setLightboxIdx((lightboxIdx + 1) % images.length)} aria-label="Next" className="w-11 h-11 rounded-full border border-white/30 bg-transparent text-white cursor-pointer grid place-items-center hover:bg-white/10 transition-colors">
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailContent;
