import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Plane, Home } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


// Kosten-Vergleich (Deutschland vs Panama)
const deutschlandVsPanamaData = [
    { label: 'München', value: 4800, color: '#e05555' },
    { label: 'Hamburg', value: 4200, color: '#e07744' },
    { label: 'Berlin', value: 3600, color: '#d4884a' },
    { label: 'Panama City', value: 2200, color: '#00C5CB' },
    { label: 'Boquete', value: 1750, color: '#D4A843' },
    { label: 'Coronado', value: 2000, color: '#00b0b6' },
];

export const metadata: Metadata = {
    title: 'Panama für Deutsche Auswanderer: Visa, Kosten, Lebensqualität',
    description: 'Deutsche Auswanderer in Panama. Visa-Optionen, Kosten, Lebensstil, Pensionierungsvisa, Gemeinschaft.',
    keywords: 'Deutsche in Panama, Auswandern nach Panama, Panama Visa Deutsch, Pensionistenvisa Panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-deutsche-auswanderer',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-deutsche-auswanderer',
            'es': 'https://panamarealestatesale.com/es/blog/panama-deutsche-auswanderer',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-deutsche-auswanderer',
            'de': 'https://panamarealestatesale.com/de/blog/panama-deutsche-auswanderer',
        },
    },
    openGraph: {
        title: 'Panama für Deutsche Auswanderer: Visa, Kosten, Lebensqualität',
        description: 'Deutsche Auswanderer in Panama. Visa-Optionen, Kosten, Lebensstil, Pensionierungsvisa, Gemeinschaft.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-deutsche-auswanderer',
        images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Deutsche in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama für Deutsche Auswanderer: Visa, Kosten, Lebensqualität',
        description: 'Deutsche Auswanderer in Panama. Visa-Optionen, Kosten, Lebensstil, Pensionierungsvisa, Gemeinschaft.',
        images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
    },
};

const flughäfen = [
    { route: 'Frankfurt (FRA) → Panama City (PTY)', fluggesellschaft: 'Lufthansa/Copa Codeshare', dauer: '11h 30m', preis: '€600–€1.200' },
    { route: 'München (MUC) → PTY', fluggesellschaft: 'Lufthansa via Frankfurt', dauer: '13h (Umstieg)', preis: '€700–€1.400' },
    { route: 'Berlin (BER) → PTY', fluggesellschaft: 'Lufthansa via Frankfurt', dauer: '13h 30m (Umstieg)', preis: '€700–€1.400' },
    { route: 'Hamburg (HAM) → PTY', fluggesellschaft: 'Lufthansa via Frankfurt', dauer: '13h 45m (Umstieg)', preis: '€700–€1.400' },
];

const kostenVergleich = [
    { kategorie: '1-Zimmer Wohnung (Stadtzentrum)', deutschland: '€700–€1.000', panama: '€900–€1.400', ersparnis: '0–30%' },
    { kategorie: 'Lebensmittel (monatlich)', deutschland: '€400–€600', panama: '€300–€450', ersparnis: '25%' },
    { kategorie: 'Nebenkosten (Strom, Wasser, Gas)', deutschland: '€150–€250', panama: '€80–€150', ersparnis: '50%' },
    { kategorie: 'Krankenversicherung (monatlich)', deutschland: '€300–€500', panama: '€100–€200', ersparnis: '60%' },
    { kategorie: 'Restaurant (schönes Essen)', deutschland: '€25–€40', panama: '€12–€20', ersparnis: '50%' },
    { kategorie: 'Monatlicher Lebensstil (Paar, komfortabel)', deutschland: '€2.500–€3.500', panama: '€1.800–€2.800', ersparnis: '30%' },
];

const immobilienMarkt = [
    { ort: 'Panama City (Casco Viejo)', preis: '€150K–€400K', beschreibung: 'Luxus-Condos mit Meer- oder Skylineblick. Urbanes Leben, Restaurants, Nachtleben. Beliebte bei aktiven Senioren und Unternehmern.' },
    { ort: 'Boquete (Bergstadt)', preis: '€200K–€600K', beschreibung: 'Bergklima ähnlich Schwarzwald. 18–24°C ganzjährig. Deutsche Gemeinde mit Immobilienbüros, Restaurants, Supermärkte. Ruhig, naturnah, erschwinglicher.' },
    { ort: 'Coronado (Strandort)', preis: '€180K–€500K', beschreibung: 'Strandleben, Golf, North American Expat-Community. 80 km von Panama City. Hochseegängiger Immobilienmarkt.' },
    { ort: 'Bocas del Toro (Inseln)', preis: '€120K–€350K', beschreibung: 'Karibikinsel, tropisch, rustikal. Kleinere deutsche Gemeinschaft, viel authentischer, abenteuerlicher.' },
];

const visamodusse = [
    { titel: 'Pensionado-Visum', anforderung: '€900–€1.050/Monat (Rente aus Deutschland)', details: 'Beliebtes Visum für Rentner. Deutsche Altersrente zählt vollständig. 5 Jahre gültig, unbegrenzt verlängerbar. Vorteile: 25% Rabatt auf Krankenhausleistungen, 20% auf Strom/Wasser.' },
    { titel: 'Investor-Visum', anforderung: '€150K–€300K Immobilienkauf', details: 'Für Immobilienkäufer. Gültig solange man die Immobilie behält. Ideal für diejenigen, die zuerst kaufen, dann Pensionado-Visum beantragen möchten.' },
    { titel: 'Freiberufler-Visum', anforderung: '€1.500–€2.000/Monat stabiles Einkommen', details: 'Für Remote-Worker, Berater, Freiberufler. Nachweise für nachhaltiges Einkommen erforderlich.' },
    { titel: 'Temporäres Visum', anforderung: '€500–€1.000/Monat oder €15K–€20K Guthaben', details: 'Für diejenigen, die testen möchten. 180 Tage, nicht verlängerbar aber man kann dann auf Pensionado wechseln.' },
];

const steuervorteilTable = [
    { kategorie: 'Einkommensteuer im Inland', deutschland: 'Ja (19–42%)', panama: 'Ja, auf Panama-Einkommen', vorteil: 'Ausländische Renten/Pensionen nicht besteuert' },
    { kategorie: 'Ausländisches Einkommen', deutschland: 'Ja (mit Doppelbesteuerungsabkommen)', panama: 'NEIN — Keine Steuer', vorteil: 'US Social Security, deutsche Rente: KEINE Panama-Steuer!' },
    { kategorie: 'Kapitalertragssteuer', deutschland: '26,375%', panama: 'Keine', vorteil: 'Investmentgewinne steuerfrei in Panama' },
    { kategorie: 'Vermögenssteuer', deutschland: 'Keine (abgeschafft)', panama: 'Keine', vorteil: 'Gleich' },
    { kategorie: 'Immobiliensteuer', deutschland: '3–6% bei Kauf', panama: '1–3% bei Kauf, dann ~0,5% jährlich', vorteil: 'Deutlich günstiger in Panama' },
];

const beliebtestePlätze = [
    {
        ort: 'Boquete',
        vibe: 'Bergdorf, deutsche Gemeinschaft',
        details: 'Das deutsche Herz von Panama. Mit 3.000–4.000 Ausländern (viele Deutsche) und echtem Bergklima fühlen sich Deutsche hier zu Hause. Es gibt deutsche Ärzte, deutsche Läden, deutsche Restaurants. Außerdem: die perfekte Temperatur (18–24°C). Immobilienpreise sind moderat, und die Natur ist wunderschön.',
    },
    {
        ort: 'Panama City (El Cangrejo)',
        vibe: 'Urban, kosmopolitisch, sicher',
        details: 'Für Städter. Das Viertel El Cangrejo ist das sicherste und internationalste Zentrum. Weltklasse-Restaurants, Einkaufen, Ärzte, Theater. Ideale für digitale Nomaden und urbane Senioren, die nicht auf Kultur verzichten wollen.',
    },
    {
        ort: 'Coronado',
        vibe: 'Strandresort, Expat-Community',
        details: 'Weniger deutsche als in Boquete, aber eine etablierte internationale Gemeinschaft. Golf, Strand, moderne Infrastruktur. Besser für diejenigen, die Wärmeres Wetter bevorzugen und Strandleben mögen.',
    },
];

const schritte = [
    { schritt: '1', titel: 'Finanzielle Vorbereitung', desc: 'Sammeln Sie Nachweise für Ihre Pensionierung/Rente: Rentenbescheid, Kontoauszüge. Deutsch-Panamisches Doppelbesteuerungsabkommen berücksichtigen.' },
    { schritt: '2', titel: 'Anwalt engagieren', desc: 'Ein Panamischer Rechtsanwalt (deutsch sprechend empfohlen) leitet den Visa-Prozess ein. Kosten: ~€1.200–€1.800.' },
    { schritt: '3', titel: 'Dokumente besorgen', desc: 'Geburtsurkunde (mit englischer Beglaubigung), polizeiliches Führungszeugnis, ärztliches Attest, Finanznachweise.' },
    { schritt: '4', titel: 'Bankkonti eröffnen', desc: 'In Panama ist es hilfreich, ein Bankkonto zu eröffnen. Dies verstärkt Ihre Visa-Anwendung. Banistmo und Banco del Istmo akzeptieren Remote-Anmeldungen.' },
    { schritt: '5', titel: 'Visum beantragen', desc: 'Einreichung bei Panamischer Immigration (Migración). Bearbeitungszeit: 3–6 Monate. Sie können die ganze Zeit in Deutschland bleiben.' },
    { schritt: '6', titel: 'Visa erhalten und ankommen', desc: 'Nach Genehmigung erhalten Sie Ihre Visa-Marke. Reisen Sie nach Panama und lassen Sie sich registrieren. 5 Jahre gültig, unbegrenzt verlängerbar.' },
];

const zeitplan = [
    { monat: 'Monat 1–2', aufgabe: 'Recherchieren Sie Orte: Boquete, Panama City, Coronado. Schauen Sie YouTube-Videos, treten Sie deutschen Panama-Gruppen bei, buchen Sie eine Erkundungsreise (1–2 Wochen).' },
    { monat: 'Monat 2–3', aufgabe: 'Engagieren Sie einen deutschsprachigen Anwalt und Makler in Panama. Beginnen Sie mit der Visa-Dokumentation.' },
    { monat: 'Monat 3–4', aufgabe: 'Eröffnen Sie ein Bankkonto in Panama. Reichen Sie Ihre Visum-Anwendung ein.' },
    { monat: 'Monat 4–6', aufgabe: 'Warten Sie auf Visa-Genehmigung. Erledigen Sie Umzugslogistik: Makler engagieren, Versand planen.' },
    { monat: 'Monat 6–9', aufgabe: 'Visum genehmigt! Buchen Sie die Überfahrt/den Versand von Möbeln und Gegenständen. Organisieren Sie Krankenkasse in Panama.' },
    { monat: 'Monat 9–12', aufgabe: 'Letzte Vorbereitungen. Reisen Sie 2–3x nach Panama um Ihre neue Heimat vorzubereiten und zu genießen!' },
];

const faqItems = [
    {
        frage: 'Werde ich als Deutscher in Panama gut behandelt?',
        antwort: 'Ja. Panama hat eine große deutschsprachige Gemeinschaft (Deutsche, Österreicher, Schweizer). In Boquete gibt es deutsche Geschäfte, Ärzte und Restaurants. Die Panamesen sind sehr offen und freundlich. Deutsche haben Respekt für Ordnung und Qualität — das ist wertvoll in Panama.',
    },
    {
        frage: 'Muss ich Spanisch sprechen?',
        antwort: 'Nicht zwingend erforderlich, aber dringend empfohlen. In Boquete sprechen viele Expats English/Deutsch. In Panama City ebenfalls. Aber Spanisch öffnet Türen, senkt Kosten und verbessert Ihre Lebensqualität erheblich. Mit 3–6 Monaten lernen Sie genug.',
    },
    {
        frage: 'Wie funktioniert das Doppelbesteuerungsabkommen Deutschland-Panama?',
        antwort: 'Gutes Abkommen! Deutsche Renten werden in Panama nicht besteuert (du zahlst nur deutsche Steuern). Einkommen aus Panama-Quellen wird in Panama besteuert. Konsultieren Sie einen Steuerberater mit Expat-Erfahrung. Das Abkommen verhindert Doppelbesteuerung effektiv.',
    },
    {
        frage: 'Was kostet eine Immobilie in Boquete?',
        antwort: 'Ein schönes Haus: €200K–€400K. Eine Wohnung: €100K–€250K. Ein Grundstück zum Bauen: €30K–€100K. Die Preise sind deutlich günstiger als Deutschland, Immobilien-Rabatte auf Wert oft 10–20% möglich. Arbeiten Sie mit deutschem Makler zusammen.',
    },
    {
        frage: 'Ich bin verwitwet — kann ich allein nach Panama auswandern?',
        antwort: 'Absolut. Viele alleinstehende Deutsche leben glücklich in Panama. Boquete hat starke Gemeinschaft, Aktivitäten, Freundschaften entstehen schnell. Die Kosten sind niedrig, die Lebensqualität hoch. Sie werden nicht einsam sein.',
    },
];

export default async function PanamaDeutscheAuswandererPage({ params }: { params: Promise<{ lang: string }> }) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
                        alt="Panama für Deutsche"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        AUSWANDERN · 2026 LEITFADEN
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Auswandern nach Panama:<br />Der komplette Leitfaden für Deutsche
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Visa, Immobilien, Steuern, Boquete und alles was Sie über das Leben in Panama wissen müssen. Mit nur €900/Monat Rente qualifizieren Sie sich für das Pensionado-Visum.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Deutschland wird teuer. Panama ist günstig, sicher und modern. Immer mehr Deutsche entdecken Panama — besonders Boquete mit seiner deutschen Gemeinschaft, perfektem Bergklima und moderaten Immobilienpreisen.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Panama ist kein exotisches Abenteuer — es ist ein stabiles, dollarbasiertes Wirtschaftssystem mit moderner Infrastruktur, JCI-akkreditierten Krankenhäusern und direkten Flügen von Frankfurt. Deutsche können das Pensionado-Visum mit nur €900–€1.050/Monat Altersrente erhalten. Keine komplizierte Bürokratie. Keine Sprachbarrieren in Boquete. Einfach ein gutes Leben für weniger Geld.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '11h 30m', label: 'Frankfurt → Panama nonstop' },
                            { stat: '€900/Mo', label: 'Pensionado-Visum Anforderung' },
                            { stat: '18–24°C', label: 'Boquete Temperatur ganzjährig' },
                            { stat: '30%', label: 'Einsparungen vs Deutschland' },
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-50 rounded-2xl p-5 text-center border border-brand-100">
                                <div className="text-2xl font-black text-brand-GOLD mb-1">{s.stat}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Warum Panama */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Warum Deutsche Panama wählen
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                titel: 'Steuervorteile wie nirgends sonst',
                                desc: 'Deutsche Altersrente wird in Panama NICHT besteuert. Kapitalerträge sind steuerfrei. Kein Vermögenssteuer. Beispiel: €2.000/Monat deutsche Rente = €0 Panama-Steuern. Zusätzlich zur deutschen Steuer zahlen Sie NICHT in Panama.',
                            },
                            {
                                titel: 'Pensionado-Visum für Rentner',
                                desc: 'Einfacher als Deutschland. Nur €900–€1.050/Monat Rente erforderlich. 5 Jahre gültig. Unbegrenzt erneuerbar. Keine Bürokratie, keine Hürden. Ehepartner automatisch einbezogen.',
                            },
                            {
                                titel: 'Bergklima ohne die Kälte',
                                desc: 'Boquete: 18–24°C ganzjährig. Keine kalten Winters, keine Heizkosten. Tropische Natur, aber nicht zu heiß. Deutsch-freundliche Gemeinschaft mit Läden, Ärzte, Restaurants.',
                            },
                            {
                                titel: 'Stabiler USD statt Euro-Risiko',
                                desc: 'Panama nutzt US-Dollar. Kein Währungsrisiko. Wenn die Euro schwach wird, Ihre Rente bleibt stark. Sparen Sie in USD, investieren Sie sicher.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 card-light rounded-xl p-5 border border-brand-100">
                                <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <div>
                                    <div className="text-white font-bold text-sm mb-1">{item.titel}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Flüge */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Plane className="inline text-brand-GOLD mr-2" size={28} />
                        Direktflüge von Deutschland nach Panama
                    </h2>
                    <div className="space-y-4">
                        {flughäfen.map((flight, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <div>
                                        <h3 className="text-lg font-heading font-bold text-brand-950 mb-1">{flight.route}</h3>
                                        <p className="text-slate-500 text-xs">{flight.fluggesellschaft}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-black text-sm">{flight.dauer}</div>
                                        <div className="text-brand-GOLD font-bold text-xs">{flight.preis}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Lufthansa bietet direkten Service von Frankfurt an. Flugzeit 11–12 Stunden (nicht schlecht!). Codeshare mit Copa Airlines ermöglicht gute Preise. Sie können monatlich zurück zu Ihren Lieben in Deutschland fliegen — Flugzeit ist nicht zu schlecht, und Preise sind moderat.
                    </p>
                </section>

                {/* 3D Kostenvergleich Diagramm */}
                <CostBarChart
                    data={deutschlandVsPanamaData}
                    title="Monatliche Lebenskosten: Deutschland vs Panama"
                    subtitle="Komfortables Paar · USD/Monat"
                    height="270px"
                />

                {/* Panama City Skyline */}
                <PanamaCityScene />

                {/* Kosten */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Lebenshaltungskosten: Deutschland vs Panama
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Deutschland</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Ersparnis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kostenVergleich.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.kategorie}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.deutschland}</td>
                                        <td className="text-white text-xs py-3 px-3 font-bold">{row.panama}</td>
                                        <td className="text-brand-GOLD text-xs py-3 px-3 font-bold">{row.ersparnis}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Ein komfortables Paar-Budget in Panama: €1.800–€2.800/Monat (Miete, Essen, Versicherung, alles). In Deutschland: €2.500–€3.500. Die größten Einsparungen: Nebenkosten (Strom, Wasser — kein Heizen!), Krankenkasse (Pensionado-Rabatte) und Lebensmittel. Restaurants sind 50% günstiger.
                    </p>
                </section>

                {/* Steuern */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Steuervorteile für deutsche Auswanderer
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Deutschland</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                </tr>
                            </thead>
                            <tbody>
                                {steuervorteilTable.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.kategorie}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.deutschland}</td>
                                        <td className="text-brand-GOLD text-xs py-3 px-3 font-bold">{row.panama}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 mt-6">
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                            <strong>Das Doppelbesteuerungsabkommen Deutschland–Panama:</strong> Ihre deutsche Altersrente wird in Panama NICHT besteuert. Sie zahlen deutsche Rentenversicherungsbeiträge (ca. 8%), aber KEINE Panama-Einkommensteuer auf die Rente. Das ist massive Ersparnisse.
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            <strong>Beispiel:</strong> Sie bekommen €2.000/Monat deutsche Rente. In Deutschland zahlen Sie ~€320 Krankenversicherung + Rentenversicherung. In Panama: €0 Einkommensteuer, aber Sie zahlen Pensionado-Krankenversicherung (€100–€200/Monat). Netto-Vorteil: €100–€200/Monat.
                        </p>
                    </div>
                </section>

                {/* Immobilienmarkt */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Immobilienmarkt Panama 2026
                    </h2>
                    <div className="space-y-5">
                        {immobilienMarkt.map((im, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <h3 className="text-xl font-heading font-bold text-brand-950">{im.ort}</h3>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-sm">{im.preis}</div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{im.beschreibung}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        <strong>Wichtig:</strong> Ausländer dürfen in Panama Immobilien im eigenen Namen kaufen. Keine Einschränkungen. Land ist billiger, Häuser kosten ein Drittel von deutschen Preisen. In Boquete können Sie ein schönes Haus für €200K–€400K bekommen. Ein Grundstück zum Bauen: €30K–€80K. Rechnen Sie mit Einsparungen von 50–70% vs Deutschland.
                    </p>
                </section>

                {/* Gesundheit */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Gesundheitsversorgung in Panama
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Deutschland</div>
                            <ul className="space-y-3">
                                {[
                                    'Krankenversicherung: €300–€600/Monat',
                                    'Lange Wartezeiten (3–6 Monate)',
                                    'Zahnbehandlungen sehr teuer (oft nicht versichert)',
                                    'Gute Qualität, aber überlastet',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                        <span className="text-slate-600 mt-0.5 flex-shrink-0 font-bold">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Panama</div>
                            <ul className="space-y-3">
                                {[
                                    'Private Versicherung: €100–€200/Monat',
                                    'Same-day Termine möglich',
                                    'Zahnbehandlungen 60–70% günstiger',
                                    'JCI-akkreditierte Krankenhäuser (US-Standard)',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                        <CheckCircle size={12} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Panama hat JCI-akkreditierte Krankenhäuser — gleicher Standard wie Deutschland. Viele Ärzte sind in Deutschland oder USA ausgebildet. Pensionado-Visa-Inhaber bekommen 25% Rabatt auf Krankenhausleistungen. Eine MRT, die in Deutschland €1.500 kostet, kostet in Panama €300–€400 (auch ohne Rabatt). Zahnbehandlungen sind extrem günstig. Viele Deutsche bekommen Zahnarbeit in Panama erledigt.
                    </p>
                </section>

                {/* Visum Modi */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <CheckCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Visa-Programme für Deutsche
                    </h2>
                    <div className="space-y-5">
                        {visamodusse.map((v, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <h3 className="text-xl font-heading font-bold text-brand-950">{v.titel}</h3>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-2"><strong>Anforderung:</strong> {v.anforderung}</p>
                                <p className="text-slate-500 text-sm leading-relaxed">{v.details}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Das Pensionado-Visum ist die beste Option für deutsche Rentner. Einfach, zuverlässig, lange Gültigkeit. Sie benötigen einen panamaischen Anwalt (€1.200–€1.800 Kosten) und 3–6 Monate Verarbeitung. Danach: 5 Jahre Visa, automatische Verlängerung möglich.
                    </p>
                </section>

                {/* Best Places */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Lieblingsorte der Deutschen in Panama
                    </h2>
                    <div className="space-y-5">
                        {beliebtestePlätze.map((place, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <h3 className="text-xl font-heading font-bold text-brand-950">{place.ort}</h3>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-xs uppercase tracking-widest">{place.vibe}</div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{place.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 12-Monat Schritt */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Schritt-für-Schritt: Das Pensionado-Visum
                    </h2>
                    <div className="space-y-3">
                        {schritte.map((s, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-8 h-8 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-xs">{s.schritt}</span>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm mb-1">{s.titel}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        12-Monats-Zeitplan zum Auswandern
                    </h2>
                    <div className="space-y-3">
                        {zeitplan.map((t, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-24 flex-shrink-0">
                                    <div className="text-brand-GOLD font-bold text-xs uppercase">{t.monat}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-slate-500 text-xs leading-relaxed">{t.aufgabe}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Häufig gestellte Fragen
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-white font-bold text-sm mb-3">{item.frage}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.antwort}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Bereit, nach Panama auszuwandern?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Unser deutschsprachiges Team spezialisiert sich auf deutsche Auswanderer. Wir helfen mit Visa-Beantragung, Immobilien, Steuern und verbinden Sie mit deutschsprachigen Anwälten, Ärzten und Maklern in Panama.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Kostenlose Beratung buchen <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/en/relocation"
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Umzugsressourcen
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Boquete Leitfaden', href: '/en/blog/boquete-relocation-guide' },
                        { label: 'Pensionado-Visum Details', href: '/en/relocation/visas/pensionado' },
                        { label: 'Finden Sie Ihr Panama Zuhause', href: '/en/quiz' },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-between card-light p-4 rounded-xl border border-brand-100 hover:border-brand-GOLD/30 transition-all group"
                        >
                            <span className="text-white text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    );
}
