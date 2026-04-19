import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import {
  Bed, Bath, Maximize2, MapPin, Phone, Mail, ArrowLeft,
  Star, CheckCircle, Building2, Tag, Calendar
} from 'lucide-react';

const BLUR_PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

function formatPrice(price: number, status: string, lang: string): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(price);
  if (status === 'For Rent') return `${formatted}${lang === 'es' ? '/mes' : '/mo'}`;
  return formatted;
}

const STATUS_LABELS: Record<string, Record<string, string>> = {
  'For Sale': { en: 'For Sale', es: 'En Venta', pt: 'À Venda', de: 'Zu Verkaufen' },
  'For Rent': { en: 'For Rent', es: 'En Alquiler', pt: 'Para Alugar', de: 'Zu Vermieten' },
  'Sold':     { en: 'Sold',     es: 'Vendido',    pt: 'Vendido',   de: 'Verkauft' },
  'Rented':   { en: 'Rented',   es: 'Alquilado',  pt: 'Alugado',   de: 'Vermietet' },
};

async function getListing(slug: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('tu-proyecto') || supabaseUrl.includes('placeholder')) {
    return null;
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('listings')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !data) return null;

  return {
    id: data.id as string,
    slug: data.slug as string,
    ref: data.ref as string | undefined,
    title: (data.title ?? {}) as Record<string, string>,
    description: (data.description ?? {}) as Record<string, string>,
    excerpt: (data.excerpt ?? {}) as Record<string, string>,
    price: (data.price ?? 0) as number,
    pricePerSqft: data.price_per_sqft as number | undefined,
    status: (data.status ?? 'For Sale') as string,
    property_type: data.property_type as string | undefined,
    zone: data.zone as string | undefined,
    city: data.city as string,
    neighborhood: data.neighborhood as string | undefined,
    province: data.province as string | undefined,
    beds: data.beds as number | undefined,
    baths: data.baths as number | undefined,
    sqft: data.sqft as number | undefined,
    lotSqft: data.lot_sqft as number | undefined,
    yearBuilt: data.year_built as number | undefined,
    images: (data.images ?? []) as string[],
    videoUrl: data.video_url as string | undefined,
    amenities: (data.amenities ?? []) as string[],
    features: (data.features ?? []) as string[],
    featured: (data.featured ?? false) as boolean,
    agentName: data.agent_name as string | undefined,
    agentWhatsapp: data.agent_whatsapp as string | undefined,
    agentEmail: data.agent_email as string | undefined,
    keywords: (data.keywords ?? []) as string[],
    createdAt: data.created_at as string | undefined,
    updatedAt: data.updated_at as string | undefined,
  };
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string; slug: string }> }
): Promise<Metadata> {
  const { lang, slug } = await params;
  const listing = await getListing(slug);

  if (!listing) {
    return { title: 'Property Not Found | VIP Expats Panama' };
  }

  const title = listing.title[lang] ?? listing.title['en'] ?? '';
  const rawDesc = listing.excerpt?.[lang] ?? listing.excerpt?.['en'] ??
    listing.description[lang] ?? listing.description['en'] ?? '';
  const description = rawDesc.slice(0, 160);
  const image = listing.images?.[0] ?? 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80';
  const canonical = `https://panamarealestatesale.com/${lang}/propiedades/${slug}`;
  const metaTitle = listing.title[lang]
    ? `${listing.title[lang]} | Panama Real Estate`
    : `${title} | Panama Real Estate`;

  return {
    title: metaTitle,
    description,
    keywords: listing.keywords?.join(', '),
    alternates: {
      canonical,
      languages: {
        'en': `https://panamarealestatesale.com/en/propiedades/${slug}`,
        'es': `https://panamarealestatesale.com/es/propiedades/${slug}`,
        'pt': `https://panamarealestatesale.com/pt/propiedades/${slug}`,
        'de': `https://panamarealestatesale.com/de/propiedades/${slug}`,
        'x-default': `https://panamarealestatesale.com/es/propiedades/${slug}`,
      },
    },
    openGraph: {
      title: metaTitle,
      description,
      type: 'website',
      url: canonical,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      siteName: 'VIP Expats Panama',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [image],
    },
  };
}

export default async function PropertyDetailPage(
  { params }: { params: Promise<{ lang: string; slug: string }> }
) {
  const { lang, slug } = await params;
  const listing = await getListing(slug);

  if (!listing) {
    notFound();
  }

  const title = listing.title[lang] ?? listing.title['en'] ?? '';
  const description = listing.description[lang] ?? listing.description['en'] ?? '';
  const images = listing.images?.length
    ? listing.images
    : ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80'];
  const statusLabel = STATUS_LABELS[listing.status]?.[lang] ?? listing.status;

  const whatsappMsg = encodeURIComponent(
    lang === 'es'
      ? `Hola, me interesa la propiedad: ${title} (${listing.slug}). ¿Está disponible?`
      : `Hi, I'm interested in the property: ${title} (${listing.slug}). Is it available?`
  );
  const whatsappHref = listing.agentWhatsapp
    ? `https://wa.me/${listing.agentWhatsapp.replace(/\D/g, '')}?text=${whatsappMsg}`
    : `https://wa.me/50767610315?text=${whatsappMsg}`;

  const locationStr = [listing.neighborhood, listing.city, listing.province]
    .filter(Boolean).join(', ') || 'Panama';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: title,
    description,
    price: listing.price,
    priceCurrency: 'USD',
    url: `https://panamarealestatesale.com/${lang}/propiedades/${listing.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationStr,
      addressCountry: 'PA',
    },
    identifier: listing.slug,
  };

  return (
    <main className="min-h-screen bg-white pt-20 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-10">
          <Link href={`/${lang}`} className="hover:text-brand-GOLD transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${lang}/propiedades`} className="hover:text-brand-GOLD transition-colors">
            {lang === 'es' ? 'Propiedades' : 'Properties'}
          </Link>
          <span>/</span>
          <span className="text-slate-500 truncate max-w-xs">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* LEFT: Images + Details */}
          <div className="lg:col-span-2 space-y-8">

            {/* Hero image */}
            <div className="relative rounded-[3rem] overflow-hidden aspect-[16/9] border border-brand-100 shadow-2xl group">
              <Image
                src={images[0]}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                className="object-cover transition-transform duration-[6000ms] group-hover:scale-105"
                priority
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
              {/* Status badge */}
              <div className={`absolute top-6 left-6 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${
                listing.status === 'For Sale' ? 'bg-brand-GOLD text-brand-950'
                : listing.status === 'For Rent' ? 'bg-emerald-500 text-white'
                : 'bg-neutral-500 text-white'
              }`}>
                {statusLabel}
              </div>
              {listing.featured && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-4 py-2 bg-brand-TEAL/80 backdrop-blur rounded-full border border-brand-GOLD/30">
                  <Star size={10} className="text-brand-GOLD fill-brand-GOLD" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-GOLD">Featured</span>
                </div>
              )}
            </div>

            {/* Thumbnail row */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.slice(1, 5).map((img, i) => (
                  <div key={i} className="w-28 h-20 flex-shrink-0 rounded-2xl overflow-hidden border border-brand-100 relative">
                    <Image
                      src={img}
                      alt={`${title} ${i + 2}`}
                      fill
                      sizes="112px"
                      className="object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Title + Location */}
            <div>
              <div className="flex items-center gap-2 text-slate-500 text-[11px] font-black uppercase tracking-widest mb-3">
                <MapPin size={12} className="text-brand-GOLD" />
                {[listing.neighborhood, listing.city, listing.province].filter(Boolean).join(', ')}
              </div>
              <h1 className="font-heading text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                {title}
              </h1>
              <div className="text-2xl md:text-3xl font-black text-brand-GOLD tracking-tight">
                {formatPrice(listing.price, listing.status, lang)}
              </div>
              {listing.pricePerSqft && (
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">
                  ${listing.pricePerSqft.toLocaleString()} {lang === 'es' ? 'por m²' : 'per sqft'}
                </p>
              )}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {listing.beds != null && (
                <div className="card-light p-6 rounded-2xl border-brand-100 flex items-center gap-3">
                  <Bed size={18} className="text-brand-GOLD flex-shrink-0" />
                  <div>
                    <p className="text-slate-700 font-black text-lg">{listing.beds}</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{lang === 'es' ? 'Hab.' : 'Beds'}</p>
                  </div>
                </div>
              )}
              {listing.baths != null && (
                <div className="card-light p-6 rounded-2xl border-brand-100 flex items-center gap-3">
                  <Bath size={18} className="text-brand-GOLD flex-shrink-0" />
                  <div>
                    <p className="text-slate-700 font-black text-lg">{listing.baths}</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{lang === 'es' ? 'Baños' : 'Baths'}</p>
                  </div>
                </div>
              )}
              {listing.sqft != null && (
                <div className="card-light p-6 rounded-2xl border-brand-100 flex items-center gap-3">
                  <Maximize2 size={18} className="text-brand-GOLD flex-shrink-0" />
                  <div>
                    <p className="text-slate-700 font-black text-lg">{listing.sqft.toLocaleString()}</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">m²</p>
                  </div>
                </div>
              )}
              {listing.yearBuilt != null && (
                <div className="card-light p-6 rounded-2xl border-brand-100 flex items-center gap-3">
                  <Calendar size={18} className="text-brand-GOLD flex-shrink-0" />
                  <div>
                    <p className="text-slate-700 font-black text-lg">{listing.yearBuilt}</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{lang === 'es' ? 'Año' : 'Year'}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-3">
              {listing.zone && (
                <span className="px-4 py-2 bg-white/5 border border-brand-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <MapPin size={10} className="text-brand-GOLD" /> {listing.zone}
                </span>
              )}
              {listing.property_type && (
                <span className="px-4 py-2 bg-white/5 border border-brand-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <Building2 size={10} className="text-brand-GOLD" /> {listing.property_type}
                </span>
              )}
              {listing.ref && (
                <span className="px-4 py-2 bg-white/5 border border-brand-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <Tag size={10} /> Ref: {listing.ref}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="card-light p-6 rounded-2xl border-brand-100">
              <h2 className="text-lg font-black text-brand-950 uppercase italic tracking-tighter mb-6">
                {lang === 'es' ? 'Descripción' : 'Description'}
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium whitespace-pre-line">{description}</p>
            </div>

            {/* Amenities */}
            {listing.amenities && listing.amenities.length > 0 && (
              <div className="card-light p-6 rounded-2xl border-brand-100">
                <h2 className="text-lg font-black text-brand-950 uppercase italic tracking-tighter mb-8">
                  {lang === 'es' ? 'Amenidades' : 'Amenities'}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {listing.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                      <CheckCircle size={14} className="text-brand-GOLD flex-shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Contact sidebar */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-28">

            {/* Price card */}
            <div className="card-light p-8 rounded-3xl border border-brand-GOLD/20 bg-gradient-to-b from-brand-GOLD/5 to-transparent">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-GOLD mb-2">
                {statusLabel}
              </p>
              <p className="text-3xl font-black text-brand-950 tracking-tighter mb-1">
                {formatPrice(listing.price, listing.status, lang)}
              </p>
              {listing.sqft && listing.price && (
                <p className="text-slate-500 text-xs font-medium">
                  ${Math.round(listing.price / listing.sqft).toLocaleString()} {lang === 'es' ? '/m²' : '/sqft'}
                </p>
              )}
            </div>

            {/* Agent card */}
            <div className="card-light p-8 rounded-3xl border-brand-100 space-y-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-1">
                  {lang === 'es' ? 'Agente' : 'Agent'}
                </p>
                <p className="text-slate-700 font-black text-lg tracking-tighter">
                  {listing.agentName ?? 'Panama Sale Team'}
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-gold w-full px-6 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <Phone size={16} />
                {lang === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
              </a>

              {listing.agentEmail && (
                <a
                  href={`mailto:${listing.agentEmail}?subject=${encodeURIComponent(title)}`}
                  className="w-full px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 border border-brand-100 text-slate-500 hover:border-brand-GOLD/30 hover:text-brand-GOLD transition-all"
                >
                  <Mail size={16} />
                  {lang === 'es' ? 'Enviar Email' : 'Send Email'}
                </a>
              )}
            </div>

            {/* Back to listings */}
            <Link
              href={`/${lang}/propiedades`}
              className="flex items-center gap-2 text-slate-500 hover:text-brand-GOLD transition-colors text-[10px] font-black uppercase tracking-widest"
            >
              <ArrowLeft size={12} />
              {lang === 'es' ? 'Volver a propiedades' : 'Back to properties'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
