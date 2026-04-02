'use client';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse ring — draws attention on load */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full animate-ping opacity-60"
        style={{ backgroundColor: '#25D366' }}
      />
    <a
      href="https://wa.me/50767610315?text=Hi%20VIP%20Expats%2C%20I%27m%20interested%20in%20a%20property"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Us"
      style={{ backgroundColor: '#25D366' }}
      className="relative flex items-center gap-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200
        px-4 py-3 md:px-5 md:py-3"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7 flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.93 11.93 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.19 1.6 6.01L0 24l6.14-1.61A11.94 11.94 0 0012.01 24c6.62 0 11.99-5.37 11.99-12 0-3.2-1.25-6.21-3.48-8.52zM12.01 22c-1.85 0-3.66-.5-5.24-1.44l-.38-.22-3.64.96.97-3.55-.24-.37A9.94 9.94 0 012.01 12c0-5.51 4.49-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0122.01 12c0 5.52-4.49 10-10 10zm5.47-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.14-.27-.2-.57-.35z" />
      </svg>
      {/* Label visible on all screen sizes */}
      <span className="text-white font-black text-sm uppercase tracking-wider whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
    </div>
  );
}
