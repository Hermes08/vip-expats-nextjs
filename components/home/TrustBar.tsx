const STAT_LABELS: Record<string, string[]> = {
  en: ['Properties Listed', 'Years in Panama', 'Families Relocated', 'USD Economy'],
  es: ['Propiedades Listadas', 'Años en Panamá', 'Familias Reubicadas', 'Economía USD'],
  pt: ['Propriedades Listadas', 'Anos no Panamá', 'Famílias Relocadas', 'Economia USD'],
  de: ['Immobilien Gelistet', 'Jahre in Panama', 'Familien Umgezogen', 'USD-Wirtschaft'],
};

const stats = [
  { number: '200+' },
  { number: '7+' },
  { number: '500+' },
  { number: '100%' },
];

interface TrustBarProps {
  lang?: string;
}

export default function TrustBar({ lang = 'en' }: TrustBarProps) {
  const labels = STAT_LABELS[lang] || STAT_LABELS['en'];

  return (
    <div className="w-full py-6 px-4 bg-[color:var(--color-cream-soft)] border-y border-[color:rgba(14,42,43,0.08)]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-around gap-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-3 px-6 relative"
          >
            {i > 0 && (
              <div className="hidden md:block absolute left-0 top-1/4 h-1/2 w-px bg-[color:rgba(14,42,43,0.08)]" />
            )}
            <span className="display-serif italic text-3xl md:text-4xl text-brand-GOLD leading-none">
              {stat.number}
            </span>
            <span className="eyebrow !text-[10px] !text-[color:var(--color-ink-mute)] mt-2 text-center">
              {labels[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
