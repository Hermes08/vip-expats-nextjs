const stats = [
  { number: '200+', label: 'Properties Listed' },
  { number: '7+', label: 'Years in Panama' },
  { number: '500+', label: 'Families Relocated' },
  { number: '100%', label: 'USD Economy' },
];

export default function TrustBar() {
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
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
