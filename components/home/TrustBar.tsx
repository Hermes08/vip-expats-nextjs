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
    <div className="w-full py-5 px-4 bg-brand-50 border-y border-brand-100">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-around gap-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-3 px-6 relative"
          >
            {i > 0 && (
              <div className="hidden md:block absolute left-0 top-1/4 h-1/2 w-px bg-white/10" />
            )}
            <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-GOLD">
              {stat.number}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1 text-center">
              {labels[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
