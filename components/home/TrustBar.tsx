const stats = [
  { number: '150+', label: 'Properties' },
  { number: '10+', label: 'Years in Panama' },
  { number: '500+', label: 'Families' },
  { number: 'Licensed', label: 'Agents' },
];

export default function TrustBar() {
  return (
    <div
      className="w-full py-6 px-4"
      style={{ backgroundColor: '#1B2A4A' }}
    >
      {/* Mobile: 2x2 grid | Desktop: single row */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-around gap-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-4 px-6 relative"
          >
            {/* Vertical divider — shown only between items on desktop */}
            {i > 0 && (
              <div
                className="hidden md:block absolute left-0 top-1/4 h-1/2 w-px"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              />
            )}
            <span
              className="text-2xl md:text-3xl font-black tracking-tight"
              style={{ color: '#C9A84C' }}
            >
              {stat.number}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white mt-1 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
