'use client';

import React from 'react';
import { Compass, Map as MapIcon, Sun, CloudRain, ShoppingBag, Coffee, Home, Landmark, ShieldCheck, HeartPulse, ArrowRight, Zap, Star, Check, Utensils, Hammer } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { useLanguage } from '@/context/LanguageContext';

const BoqueteVsCoronadoContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Guides", item: `https://panamarealestatesale.com/${lang}/relocation/guides` },
        { name: "Boquete vs Coronado", item: `https://panamarealestatesale.com/${lang}/relocation/guides/boquete-vs-coronado` }
    ];

    const faqs = [
        {
            q: "Is Boquete colder than Coronado?",
            a: "Yes, significantly. Boquete is located in the Chiriquí highlands and averages 65-75°F (18-24°C), while Coronado is a tropical beach town with temperatures consistently between 85-90°F (29-32°C)."
        },
        {
            q: "Which area has better healthcare for expats?",
            a: "Both are excellent. Coronado has the San Fernando Clinic and proximity to Panama City's world-class hospitals. Boquete has several private clinics and is 45 minutes from David, which has major hospitals like Hospital Jované."
        },
        {
            q: "Are boquete panama real estate prices rising?",
            a: "Yes, but they remain competitive compared to US/EU highlands. Average homes range from $250k to $600k, while luxury estates in Valle Escondido go higher."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />
            <FAQSchema questions={faqs.map(f => ({ question: f.q, answer: f.a }))} />
            <ServiceSchema
                name="Panama Regional Comparison: Boquete vs Coronado"
                description="In-depth analysis of Panama's top two expat destinations. Comparing climate, real estate, and lifestyle for retirees and professionals."
                serviceType="Relocation Consulting"
            />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="py-48 bg-white text-white relative overflow-hidden rounded-b-[5rem]">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1600&q=80"
                        alt="Boquete highlands vs Coronado beach panama comparison"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-950/40 via-brand-950 to-brand-950" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <span className="inline-block px-6 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-12">
                        Strategic Comparison 2026
                    </span>
                    <h1 className="text-6xl md:text-9xl font-heading font-black mb-12 uppercase tracking-tighter leading-[0.8] italic">
                        Boquete <br />
                        <span className="text-brand-GOLD">VS Coronado</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium italic border-l-4 border-brand-GOLD/20 pl-12">
                        Choosing between the <strong>Boquete Chiriquí</strong> highlands and <strong>Coronado beach</strong> is the ultimate binary choice for any expat.
                    </p>
                </div>
            </section>

            {/* Paradise Divided: Intro */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Paradise <span className="text-brand-GOLD italic underline">Divided</span></h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                Panama is a land of microclimates. Two hours in any direction can feel like moving to a different continent. For the <strong>expat panama</strong> community, the choice usually boils down to two heavyweights: the cool, mist-covered mountains of <strong>Boquete</strong> or the sun-drenched pacific shores of <strong>Coronado</strong>.
                            </p>
                            <p>
                                One offers a "perpetual spring" with world-class coffee and hiking; the other offers a high-end beach club lifestyle with golf and proximity to the capital. Both are <strong>best cities in panama for expats</strong>, but your personality—and your tolerance for humidity—will dictate your winner.
                            </p>
                        </div>
                    </div>
                    <div className="bg-neutral-900 p-12 rounded-[4rem] text-white">
                        <div className="flex gap-4 items-center mb-8">
                            <Star className="text-brand-GOLD" size={32} />
                            <h4 className="text-xl font-black uppercase tracking-widest text-brand-GOLD">Quick Verdict</h4>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-white/5 rounded-3xl border border-brand-100">
                                <h5 className="font-black uppercase tracking-widest text-xs mb-2">Choose Boquete If...</h5>
                                <p className="text-sm text-gray-400">You love nature, hiking, cooler temperatures, and a small-town community feel.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-3xl border border-brand-100">
                                <h5 className="font-black uppercase tracking-widest text-xs mb-2">Choose Coronado If...</h5>
                                <p className="text-sm text-gray-400">You want beach access, golf, active social scenes, and 1-hour access to Panama City.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Boquete Deep Dive */}
            <section className="py-32 bg-neutral-900 text-white rounded-[5rem] mx-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 blur-[150px] -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <Coffee className="text-brand-GOLD mb-10" size={64} />
                            <h2 className="text-4xl md:text-8xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Boquete: <br /> The <span className="text-brand-GOLD">Eternal Spring</span></h2>
                            <div className="space-y-8 text-lg text-gray-400 font-medium leading-[1.8]">
                                <p>
                                    Nestled in the shadow of the Volcan Baru, <strong>Boquete panama</strong> is the crown jewel of the Chiriquí province. It is famous for the <strong>Geisha coffee</strong>, some of the most expensive in the world, and a climate that keeps AC bills at zero.
                                </p>
                                <p>
                                    The <strong>living in boquete panama</strong> experience is defined by the "Bajareque"—a fine mountain mist that creates rainbows daily across the valley. It's a place for <strong>retiring in panama</strong> where the focus is on wellness, organic gardening, and the outdoors.
                                </p>
                                <p>
                                    <strong>Boquete panama real estate</strong> is diverse, ranging from quant coffee farms to gated luxury communities like <strong>Valle Escondido boquete</strong> and <strong>Lucero</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=600&q=80" alt="Mountain view in Boquete" fill className="object-cover" />
                            </div>
                            <div className="space-y-6">
                                <div className="p-8 bg-white/5 rounded-[3rem] border border-brand-100">
                                    <h4 className="text-2xl font-black italic text-brand-GOLD">$1.2k+</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Avg Monthly Living</p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-[3rem] border border-brand-100">
                                    <h4 className="text-2xl font-black italic text-brand-GOLD">68°F</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Avg Temperature</p>
                                </div>
                                <div className="p-8 bg-brand-GOLD text-brand-950 rounded-[3rem]">
                                    <h4 className="text-2xl font-black italic">15k+</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest font-bold">Expats in Region</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coronado Deep Dive */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row-reverse gap-24 items-center">
                    <div className="lg:w-1/2">
                        <Sun className="text-brand-GOLD mb-10" size={64} />
                        <h2 className="text-4xl md:text-8xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Coronado: <br /> The <span className="text-brand-GOLD underline underline-offset-8">Pacific Gem</span></h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                If Boquete is for the soul, <strong>Coronado panama</strong> is for the lifestyle. Known as the "Hub" of the Pacific Gold Coast, Coronado was Panama's first planned beach community and remains the center of social gravity for beach-loving expats.
                            </p>
                            <p>
                                <strong>Playa Coronado panama</strong> offers a unique mix of black and white volcanic sand and is home to the <strong>Coronado golf and beach resort</strong>. It is "city living at the beach"—you have 4 major supermarkets, banks, and a hospital without ever leaving the area.
                            </p>
                            <p>
                                <strong>Coronado panama real estate</strong> is dominated by high-rise towers like <strong>Coronado Bay</strong> and <strong>Bern's Royal Palm</strong>, as well as sprawling beachfront villas.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative aspect-square">
                        <Image
                            src="https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80"
                            alt="Playa Coronado beach club scene"
                            fill
                            className="object-cover rounded-[4rem]"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-brand-GOLD p-12 rounded-[3.5rem] shadow-2xl">
                            <div className="text-4xl font-black italic text-brand-950">1HR</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-950/70">To Panama City</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culinary Culture: Highland Harvest vs Pacific Fresh */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="p-8 bg-neutral-900 text-white rounded-[3rem]">
                                        <Utensils className="text-brand-GOLD mb-4" size={24} />
                                        <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4">Boquete Eats</h4>
                                        <p className="text-xs text-gray-400 font-medium">Famous for farm-to-table. Try <strong>The Rock</strong> or <strong>Colibri</strong> for world-class dining with mountain views. A meal for two: $40-$60.</p>
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=80" alt="Boquete Dining" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-6 pt-12">
                                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" alt="Coronado Seafood" fill className="object-cover" />
                                    </div>
                                    <div className="p-8 bg-brand-GOLD text-brand-950 rounded-[3rem]">
                                        <Utensils className="text-brand-950/60 mb-4" size={24} />
                                        <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4">Coronado Social</h4>
                                        <p className="text-xs font-bold leading-relaxed">High-energy beachfront bars and upscale seafood at <strong>Luna Rossa</strong> or <strong>Nixon's</strong>. A meal for two: $60-$80.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Culinary <br /><span className="text-brand-GOLD italic">Culture</span></h2>
                            <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                                <p>
                                    The <strong>Boquete panama restaurant</strong> scene is arguably the best in the interior. Because of the incredible soil, chefs have access to fresh ingredients year-round. It's the "Napa Valley" of Panama.
                                </p>
                                <p>
                                    In <strong>Coronado</strong>, the scene is more social and concentrated. You'll find a higher density of American-style sports bars and beach clubs where the expat community gather for "Happy Hour" sunsets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Wars: The Critical Factor */}
            <section className="py-32 bg-brand-50 rounded-[5rem] mx-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic">Systems <br /><span className="text-brand-GOLD">& Maintenance</span></h2>
                        <p className="text-slate-600 font-black uppercase tracking-widest text-xs">Different climates require different care.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div className="flex gap-8">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                                    <Zap className="text-brand-GOLD" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">The AC Battle (Coronado)</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        Salt air is the enemy of electronics. In Coronado, you need an <strong>A/C technician</strong> every 4 months to prevent corrosion and keep your <strong>panama electric bill</strong> manageable.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                                    <CloudRain className="text-brand-GOLD" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">The Mold War (Boquete)</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        In the highlands, it's about dehumidifiers. <strong>Boquete maintenance</strong> focuses on airflow and moisture control during the "Green Season" to protect your furniture and health.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-[4rem] p-16 text-white flex flex-col justify-center">
                            <h4 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-brand-GOLD">Lifestyle Budget Tip</h4>
                            <p className="text-lg font-medium leading-relaxed opacity-80 mb-10">
                                You'll spend $150/mo on AC in Coronado vs. $40/mo in Boquete. However, Boquete real estate can carry a premium for views. The <strong>cost of living in panama</strong> is all about where you allocate your investment funds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety & Security deep-dive */}
            <section className="py-32 bg-white text-white rounded-[5rem] mx-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <ShieldCheck size={400} className="absolute -bottom-24 -left-24 rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 uppercase tracking-tighter italic italic">Is Panama <span className="text-brand-GOLD italic">Safe</span> for Expats?</h2>
                        <p className="text-gray-400 font-black uppercase tracking-widest text-xs">The #1 concern for every family moving to Panama.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-8 text-lg text-gray-400 font-medium leading-[1.8]">
                            <p>
                                One of the most frequent questions we receive is: <strong>is panama safe for expats?</strong> The short answer is yes, compared to almost any other Central or South American country. Panama has a robust national police force (DIJ and Proteger y Servir) and a stable government.
                            </p>
                            <p>
                                In <strong>Boquete panama</strong>, safety is often "small-town" safety. You'll see expats walking the streets at night, and gated communities provide an extra layer of peace of mind. In <strong>Coronado panama</strong>, most residential areas are behind high walls and private security guards, creating a "bubble" effect that is highly desired by high-net-worth <strong>american retirees in panama</strong>.
                            </p>
                        </div>
                        <div className="space-y-8 text-lg text-gray-400 font-medium leading-[1.8]">
                            <p>
                                However, expert safety means being smart. Petty theft is the most common issue. We teach our <strong>panama relocation tours</strong> clients the "Golden Rules" of security, like not leaving valuables in cars at remote trailheads in Boquete or being discreet with high-end jewelry in the city.
                            </p>
                            <div className="flex gap-4 p-8 bg-white/5 rounded-3xl border border-brand-100">
                                <div className="text-brand-GOLD font-black text-2xl">92%</div>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">of Expats report feeling safer in Panama than in their home country's major cities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pet Relocation section */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-1/2 relative aspect-video rounded-[4rem] overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1541599540903-217a22c57cf8?w=1000&q=80"
                            alt="Moving to panama with pets - relocation guide"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <HeartPulse className="text-brand-GOLD mb-10" size={64} />
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">Bringing the <br /><span className="text-brand-GOLD">Whole Family</span></h2>
                        <div className="space-y-8 text-lg text-neutral-600 font-medium leading-[1.8]">
                            <p>
                                Can you <strong>move to panama with elderly parents</strong> or your furry friends? Absolutely. Panama is a extremely pet-friendly country. Both Boquete and Coronado have world-class veterinary care and groomers.
                            </p>
                            <p>
                                For <strong>pet relocation panama</strong>, you'll need a USDA health certificate (or the equivalent from your home country), but the process is straightforward. In Boquete, your pups will love the cool mountain trails; in Coronado, the beaches are giant playgrounds.
                            </p>
                            <Link href={`/${lang}/relocation/legal/lawyers`} className="text-[10px] font-black uppercase tracking-[0.3em] bg-white text-white px-10 py-6 rounded-2xl inline-block mt-8">
                                Get Pet Checklist
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schooling and Families section */}
            <section className="py-32 bg-brand-50 rounded-[5rem] mx-4">
                <div className="max-w-7xl mx-auto px-8 text-center mb-24">
                    <h2 className="text-4xl md:text-7xl font-heading font-black mb-8 uppercase tracking-tighter italic underline italic leading-none">The <span className="text-brand-GOLD">Education</span> <br /> Blueprint</h2>
                    <p className="max-w-3xl mx-auto text-lg text-slate-600 font-medium">
                        If you are <strong>moving to panama with children</strong>, the quality of schools is your #1 binary filter.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20">
                    <div className="p-16 bg-white rounded-[4rem] shadow-xl border border-brand-100">
                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-8 italic">Boquete Schools</h4>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Boquete offers several bilingual and international options like <strong>The Boquete International School</strong> and <strong>Academia Internacional Boquete</strong>. The focus is often on project-based learning and environmental awareness.
                        </p>
                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-GOLD font-bold">
                            <Zap size={14} /> Curriculum: US/Panama Hybrid
                        </div>
                    </div>
                    <div className="p-16 bg-neutral-900 text-white rounded-[4rem] shadow-2xl border border-brand-100">
                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-8 italic text-brand-GOLD">Coronado Schools</h4>
                        <p className="text-slate-500 leading-relaxed mb-8">
                            Coronado features the prestigious <strong>Coronado International School</strong>. Proximity to the city guarantees superior resources for extracurriculars including competitive surf and golf academies.
                        </p>
                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-GOLD">
                            <Zap size={14} /> Curriculum: IB Standard
                        </div>
                    </div>
                </div>
            </section>

            {/* Healthcare Deep-Dive (Category 4) */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="bg-white text-white rounded-[4rem] p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-10">
                        <HeartPulse size={200} />
                    </div>
                    <div className="max-w-5xl relative z-10">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter italic">Panama <span className="text-brand-GOLD italic">Healthcare</span> <br /> Exposed</h2>
                        <div className="grid md:grid-cols-2 gap-20 text-lg text-gray-400 font-medium leading-relaxed">
                            <div className="space-y-8">
                                <p>
                                    <strong>Panama healthcare for expats</strong> is world-class, specifically in Panama City and major hubs like David. The cost of a specialist visit without insurance is often less than $100.
                                </p>
                                <p>
                                    In the <strong>Coronado region</strong>, you have access to the San Fernando Clinic, which is a satellite of one of the top hospitals in the country. For emergency care, being in Coronado means you are only 75-90 minutes from the prestigious <strong>Johns Hopkins affiliated</strong> Hospital Punta Pacifica.
                                </p>
                            </div>
                            <div className="space-y-8">
                                <p>
                                    In <strong>Boquete</strong>, the local clinics are excellent for daily needs, and the city of David (just down the mountain) has the best medical facilities in western Panama.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 bg-brand-GOLD text-brand-950 rounded-full flex items-center justify-center shrink-0">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest">Insurance: ~$150-$250/month</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 bg-brand-GOLD text-brand-950 rounded-full flex items-center justify-center shrink-0">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest">Medical Tourism Center of LatAm</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table (SEO Powerhouse) */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-heading font-black mb-16 uppercase tracking-tighter italic text-center">Side-By-Side <span className="text-brand-GOLD italic">Logic</span></h2>
                <div className="overflow-x-auto rounded-[3rem] border border-brand-100 shadow-2xl">
                    <table className="w-full text-left bg-white border-collapse">
                        <thead>
                            <tr className="bg-white text-white">
                                <th className="p-10 text-[10px] font-black uppercase tracking-widest italic">Metric</th>
                                <th className="p-10 text-[10px] font-black uppercase tracking-widest italic">Boquete</th>
                                <th className="p-10 text-[10px] font-black uppercase tracking-widest italic">Coronado</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium text-neutral-600">
                            {[
                                { m: "Cost of Living", b: "Mid-Range ($$) ", c: "High-End ($$$)" },
                                { m: "Climate", b: "Mountains (60-75°F)", c: "Tropical (80-95°F)" },
                                { m: "Healthcare", b: "Clinics (45 min to Hospital)", c: "Hospital On-Site" },
                                { m: "Real Estate Type", b: "Farms & Mountain Villas", c: "Towers & Beachfront" },
                                { m: "Social Scene", b: "Quiet, Yoga, Arts", c: "Active, Golf, Bars" },
                                { m: "Connectivity", b: "Great Fiber Optics", c: "Excellent Starlink + Fiber" }
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-neutral-50 hover:bg-brand-50 transition-colors">
                                    <td className="p-10 font-black uppercase tracking-widest text-[10px] text-brand-950">{row.m}</td>
                                    <td className="p-10">{row.b}</td>
                                    <td className="p-10">{row.c}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Related Resources: The Topic Cluster */}
            <section className="py-24 bg-brand-50 rounded-[5rem] mx-4 mb-32">
                <div className="max-w-7xl mx-auto px-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-12 text-center">Complete Your Research</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href={`/${lang}/relocation/pricing`} className="group p-10 bg-white rounded-[3rem] border border-brand-100 hover:border-brand-GOLD transition-all shadow-sm">
                            <Zap className="text-brand-GOLD mb-6" size={24} />
                            <h5 className="text-xl font-black italic uppercase tracking-tighter mb-4">Cost of Living 2026</h5>
                            <p className="text-xs text-slate-600 font-medium mb-6">Compare the exact costs of Boquete vs Coronado vs Panama City.</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">View Guide <ArrowRight size={12} /></span>
                        </Link>
                        <Link href={`/${lang}/relocation/guides`} className="group p-10 bg-white rounded-[3rem] border border-brand-100 hover:border-brand-GOLD transition-all shadow-sm">
                            <Sun className="text-brand-GOLD mb-6" size={24} />
                            <h5 className="text-xl font-black italic uppercase tracking-tighter mb-4">Weather Guide 2026</h5>
                            <p className="text-xs text-slate-600 font-medium mb-6">Discover the best time to visit and how microclimates affect your move.</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">View Guide <ArrowRight size={12} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-8xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Which One <br /> is Yours?</h2>
                    <p className="text-xl font-bold opacity-80 mb-16 max-w-2xl mx-auto">
                        Don't guess. Walk both paths. Our <strong>panama relocation tours</strong> cover both the mountains and the beach in every itinerary.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        <Link href={`/${lang}/relocation/tours`} className="btn-3d btn-3d-navy px-16 py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-xs">
                            COMPARE IN PERSON
                        </Link>
                        <Link href={`/${lang}/relocation/guides`} className="btn-3d bg-white text-brand-950 px-16 py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-xl border border-brand-950/10 hover:bg-brand-TEAL hover:text-white transition-all">
                            BACK TO GUIDES
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BoqueteVsCoronadoContent;
