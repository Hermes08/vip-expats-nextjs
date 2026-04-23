import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface Props {
  lang?: string;
}

export default function QuizTeaser({ lang = 'en' }: Props) {
  const text = {
    en: {
      label: 'Not sure where to start?',
      cta: 'Take our 2-minute quiz',
      sub: 'Find your ideal Panama property match — beach, city, or mountain.',
    },
    es: {
      label: '¿No sabes por dónde empezar?',
      cta: 'Toma nuestro quiz de 2 minutos',
      sub: 'Descubre tu propiedad ideal en Panamá — playa, ciudad o montaña.',
    },
  };
  const t = text[lang as 'en' | 'es'] ?? text.en;

  return (
    <div className="w-full bg-[color:var(--color-paper)] border-b border-[color:rgba(14,42,43,0.08)] py-3 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
        <HelpCircle size={16} className="text-[color:var(--color-teal-edit)] flex-shrink-0 hidden sm:block" />
        <span className="text-[color:var(--color-ink-soft)] text-xs font-medium">
          {t.label}
        </span>
        <Link
          href={`/${lang}/quiz`}
          className="inline-flex items-center gap-1.5 eyebrow !text-[color:var(--color-teal-edit)] border-b border-[color:var(--color-teal-edit)]/40 pb-px hover:border-[color:var(--color-teal-edit)] transition-all group"
        >
          {t.cta}
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <span className="hidden sm:block text-[color:var(--color-ink-mute)] text-[10px]">·</span>
        <span className="hidden sm:block text-[color:var(--color-ink-mute)] text-[10px] font-medium italic">{t.sub}</span>
      </div>
    </div>
  );
}
