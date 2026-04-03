import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building, MapPin, TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Panama City Real Estate for Sale | Luxury Condos & Homes',
    description: 'Explore premium Panama City real estate. Discover luxury apartments in Punta Pacifica, Costa del Este, and Casco Viejo. High ROI investments for expats.',
    keywords: 'panama city real estate, apartments for sale panama city, luxury condos panama city, costa del este real estate, punta pacifica real estate',
};

export default function PanamaCityRealEstatePage() {
    return (
        <div className="pt-24 min-h-screen bg-white text-slate-900">
            {/* Context-Aware Hero Section */}
            <section className="bg-brand-50 py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1600&q=80" alt="Panama City Skyline" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent"></div>
                </div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">THE METROPOLIS PORTFOLIO</span>
                    <h1 className="font-heading text-5xl md:text-8xl font-black text-brand-950 mb-8 leading-[0.9] tracking-tighter uppercase italic">
                        Panama City <br /><span className="text-brand-GOLD">Real Estate</span>
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        The ultimate guide to buying luxury property in Latin America's most dynamic capital. Discover high-yield pre-construction condos and exclusive waterfront penthouses.
                    </p>
                </div>
            </section>

            {/* Context-Aware Content */}
            <section className="py-24 max-w-5xl mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 prose prose-lg text-brand-600 max-w-none">
                        <h2 className="text-brand-900 text-3xl font-heading font-bold mb-6 italic uppercase tracking-tighter border-b border-brand-GOLD/30 pb-4">
                            Why Invest in Panama City?
                        </h2>
                        <p className="text-xl font-bold text-brand-900 border-l-4 border-brand-GOLD pl-6 mb-8">
                            <strong>Panama City real estate</strong> is not just a lifestyle choice; it's a strategic offshore asset. With a fully dollarized economy and no central bank, your capital is protected while participating in the fastest-growing hub in the Americas.
                        </p>
                        <p>
                            We represent investors seeking institutional-grade <strong>Panama luxury apartments</strong>. From the oceanfront towers of <strong>Avenida Balboa</strong> to the master-planned corporate enclave of <strong>Costa del Este</strong>, Panama City offers distinct micro-markets suited for different <strong>ROI</strong> profiles and lifestyle demands.
                        </p>

                        <h3 className="text-brand-900 font-heading font-black text-2xl mt-12 mb-6 uppercase flex items-center gap-3"><Building className="text-brand-GOLD" /> Elite Neighborhoods</h3>

                        <div className="space-y-12 not-prose">
                            {/* Neighborhood 1 */}
                            <div className="bg-neutral-50 p-8 rounded-[2rem] border border-neutral-100 shadow-sm relative overflow-hidden group hover:border-brand-GOLD/50 transition-all">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <MapPin size={100} />
                                </div>
                                <h4 className="text-2xl font-black text-brand-900 uppercase italic mb-4">Punta Pacifica & Punta Paitilla</h4>
                                <p className="text-brand-600 text-sm leading-relaxed mb-4 font-medium">
                                    The "Dubai of the Americas." Home to the JW Marriott and the most exclusive <strong>oceanfront condos in Panama</strong>.
                                    Expect 24/7 valet, private elevators, and prices ranging from $3,000 to $4,500+ per square meter.
                                </p>
                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-GOLD">Best For: High-Net-Worth Individuals & CEO Relocation</span>
                            </div>

                            {/* Neighborhood 2 */}
                            <div className="bg-neutral-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
                                <h4 className="text-2xl font-black text-brand-950 uppercase italic mb-4">Costa del Este & Santa Maria</h4>
                                <p className="text-brand-300 text-sm leading-relaxed mb-4 font-medium">
                                    Master-planned perfection. Designed like a suburban Florida city with underground wiring, international schools, and the headquarters of multinational giants. Santa Maria adds a Nicklaus Design golf course for the ultimate <strong>Panama golf community</strong> lifestyle.
                                </p>
                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-GOLD">Best For: Corporate Families & Expat Executives</span>
                            </div>

                            {/* Neighborhood 3 */}
                            <div className="bg-neutral-50 p-8 rounded-[2rem] border border-neutral-100 shadow-sm relative overflow-hidden group hover:border-brand-GOLD/50 transition-all">
                                <h4 className="text-2xl font-black text-brand-900 uppercase italic mb-4">Casco Viejo (San Felipe)</h4>
                                <p className="text-brand-600 text-sm leading-relaxed mb-4 font-medium">
                                    The historic UNESCO World Heritage site. Buying <strong>Casco Viejo real estate</strong> means investing in colonial restorations with unmatched character. High initial capital requirements but incredible yields for short-term luxury rentals.
                                </p>
                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-GOLD">Best For: Boutique Investors & Culture Enthusiasts</span>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar / Conversion */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 p-10 bg-brand-GOLD rounded-[3rem] text-brand-950 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 italic">Market Insights 2026</h4>
                            <ul className="space-y-6 mb-10 text-sm font-bold">
                                <li className="flex items-start gap-4 border-b border-brand-950/10 pb-4">
                                    <TrendingUp className="shrink-0 text-brand-900" size={20} />
                                    <div>
                                        <div className="uppercase tracking-widest text-[9px] text-brand-950/70 mb-1">Average Yield</div>
                                        6.5% - 8.5% Net ROI on long-term luxury rentals.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-brand-950/10 pb-4">
                                    <DollarSign className="shrink-0 text-brand-900" size={20} />
                                    <div>
                                        <div className="uppercase tracking-widest text-[9px] text-brand-950/70 mb-1">Entry Price</div>
                                        Premium 1BR units starting at $280,000 in prime zones.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <ShieldCheck className="shrink-0 text-brand-900" size={20} />
                                    <div>
                                        <div className="uppercase tracking-widest text-[9px] text-brand-950/70 mb-1">Tax Exemption</div>
                                        Many pre-construction projects include 5-15 year property tax exemptions.
                                    </div>
                                </li>
                            </ul>
                            <Link href="/contacto" className="w-full block py-5 bg-white text-white text-center rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-50 transition-all shadow-xl">
                                Request Private Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Context-Aware Lower CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-950 mb-8 uppercase tracking-tighter italic">Explore The Inventory</h2>
                    <p className="text-brand-400 font-medium mb-12 max-w-2xl mx-auto">Browse our curated selection of verified, high-yield developments across Panama City and the beaches.</p>
                    <Link href="/proyectos" className="inline-flex items-center gap-4 bg-transparent border-2 border-brand-GOLD text-brand-GOLD px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-GOLD hover:text-brand-950 transition-all">
                        View Live Projects <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
