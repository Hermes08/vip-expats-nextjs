'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const CONTACT_TEXT: Record<string, {
  topBar: string;
  badge: string;
  heading: string;
  headingGold: string;
  subheading: string;
  fullName: string;
  email: string;
  phone: string;
  propertyOfInterest: string;
  selectProperty: string;
  message: string;
  messagePlaceholder: string;
  sendBtn: string;
  directContact: string;
  callUs: string;
  sendMessage: string;
  successMsg: string;
  errorMsg: string;
}> = {
  en: {
    topBar: 'Talk to an Expert Today',
    badge: 'Secure Infrastructure',
    heading: 'DIRECT',
    headingGold: 'CONCIERGE',
    subheading: 'Our team of bilingual experts is ready to assist in every phase of your Panama move. No generic support—direct elite intelligence.',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'WhatsApp / Phone',
    propertyOfInterest: 'Property of Interest',
    selectProperty: 'Select a property...',
    message: 'Message',
    messagePlaceholder: 'I am interested in...',
    sendBtn: 'SEND INQUIRY',
    directContact: 'Direct Contact',
    callUs: 'Call Us',
    sendMessage: 'Send Message',
    successMsg: 'Message sent successfully! We will contact you shortly.',
    errorMsg: 'Error sending message. Please try again.',
  },
  es: {
    topBar: 'Hable con un Experto Hoy',
    badge: 'Infraestructura Segura',
    heading: 'ACCESO',
    headingGold: 'CONCIERGE',
    subheading: 'Nuestro equipo de expertos bilingües está listo para asistirle en cada fase de su mudanza a Panamá. Sin soporte genérico — inteligencia elite directa.',
    fullName: 'Nombre Completo',
    email: 'Correo Electrónico',
    phone: 'WhatsApp / Teléfono',
    propertyOfInterest: 'Propiedad de Interés',
    selectProperty: 'Seleccione una propiedad...',
    message: 'Mensaje',
    messagePlaceholder: 'Estoy interesado en...',
    sendBtn: 'ENVIAR CONSULTA',
    directContact: 'Contacto Directo',
    callUs: 'Llámenos',
    sendMessage: 'Enviar Mensaje',
    successMsg: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
    errorMsg: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo.',
  },
  pt: {
    topBar: 'Fale com um Especialista Hoje',
    badge: 'Infraestrutura Segura',
    heading: 'ACESSO',
    headingGold: 'CONCIERGE',
    subheading: 'Nossa equipe de especialistas bilíngues está pronta para ajudá-lo em cada fase da sua mudança para o Panamá. Sem suporte genérico — inteligência elite direta.',
    fullName: 'Nome Completo',
    email: 'E-mail',
    phone: 'WhatsApp / Telefone',
    propertyOfInterest: 'Imóvel de Interesse',
    selectProperty: 'Selecione um imóvel...',
    message: 'Mensagem',
    messagePlaceholder: 'Tenho interesse em...',
    sendBtn: 'ENVIAR CONSULTA',
    directContact: 'Contato Direto',
    callUs: 'Ligar',
    sendMessage: 'Enviar Mensagem',
    successMsg: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    errorMsg: 'Erro ao enviar a mensagem. Por favor, tente novamente.',
  },
  de: {
    topBar: 'Sprechen Sie noch heute mit einem Experten',
    badge: 'Sichere Infrastruktur',
    heading: 'DIREKTER',
    headingGold: 'CONCIERGE',
    subheading: 'Unser Team aus zweisprachigen Experten ist bereit, Ihnen in jeder Phase Ihres Umzugs nach Panama zu helfen. Kein generischer Support — direkte Elite-Intelligenz.',
    fullName: 'Vollständiger Name',
    email: 'E-Mail',
    phone: 'WhatsApp / Telefon',
    propertyOfInterest: 'Immobilie von Interesse',
    selectProperty: 'Immobilie auswählen...',
    message: 'Nachricht',
    messagePlaceholder: 'Ich interessiere mich für...',
    sendBtn: 'ANFRAGE SENDEN',
    directContact: 'Direktkontakt',
    callUs: 'Anrufen',
    sendMessage: 'Nachricht Senden',
    successMsg: 'Nachricht erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.',
    errorMsg: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
  },
};

const ContactPageContent: React.FC = () => {
    const { lang } = useLanguage();
    const ct = CONTACT_TEXT[lang] || CONTACT_TEXT['en'];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Talk to an Expert — top bar */}
            <div className="bg-brand-GOLD/10 border-b border-brand-GOLD/20 py-4 px-4">
              <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
                <span className="text-brand-GOLD font-black text-xs uppercase tracking-[0.3em]">
                  {ct.topBar}
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-2 min-h-[44px] text-brand-950 font-bold text-sm hover:text-brand-GOLD transition-colors"
                  >
                    <Phone size={14} className="text-brand-GOLD" />
                    {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20VIP%20Expats%2C%20I%27d%20like%20to%20speak%20with%20an%20expert`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 min-h-[44px] text-brand-950 font-bold text-sm hover:text-green-600 transition-colors"
                  >
                    <MessageCircle size={14} className="text-green-400" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-2 min-h-[44px] text-brand-950 font-bold text-sm hover:text-brand-GOLD transition-colors"
                  >
                    <Mail size={14} className="text-brand-GOLD" />
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-16 flex items-center overflow-hidden border-b border-brand-100 bg-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-GOLD)_0%,_transparent_100%)] opacity-[0.03] scale-150"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <span className="inline-block px-6 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full backdrop-blur-md mb-6">
                        {ct.badge}
                    </span>
                    <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tight uppercase text-brand-950">
                        {ct.heading} <span className="text-brand-GOLD">{ct.headingGold}</span> ACCESS.
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed font-medium italic border-l-2 border-brand-GOLD/20 pl-5">
                        {ct.subheading}
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 card-light rounded-3xl border-brand-100 p-8 md:p-10 border-t-4 border-brand-GOLD bg-brand-50/40">
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const formData = new FormData(form);
                            const data = {
                                name: formData.get('name') as string,
                                email: formData.get('email') as string,
                                phone: formData.get('phone') as string,
                                project_interest: formData.get('project_interest') as string,
                                message: formData.get('message') as string,
                            };

                            try {
                                const { supabase } = await import('@/lib/supabase');
                                const { error } = await supabase.from('leads').insert([data]);
                                if (error) throw error;
                                alert(ct.successMsg);
                                form.reset();
                            } catch (err) {
                                console.error(err);
                                alert(ct.errorMsg);
                            }
                        }} className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{ct.fullName}</label>
                                <input name="name" required type="text" className="w-full px-4 py-3 bg-white border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-TEAL outline-none text-brand-950 placeholder:text-slate-400" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{ct.email}</label>
                                <input name="email" required type="email" className="w-full px-4 py-3 bg-white border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-TEAL outline-none text-brand-950 placeholder:text-slate-400" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{ct.phone}</label>
                                <input name="phone" required type="tel" className="w-full px-4 py-3 bg-white border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-TEAL outline-none text-brand-950 placeholder:text-slate-400" placeholder="+1 234 567 890" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{ct.propertyOfInterest}</label>
                                <select name="project_interest" className="w-full px-4 py-3 bg-white border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-TEAL outline-none text-sm font-bold text-brand-950">
                                    <option value="" className="text-brand-950">{ct.selectProperty}</option>
                                    <option value="Pino Alto (Boquete)" className="text-brand-950">Pino Alto (Boquete)</option>
                                    <option value="Westin Residences (Playa Bonita)" className="text-brand-950">Westin Residences (Playa Bonita)</option>
                                    <option value="Playa Escondida (Colón)" className="text-brand-950">Playa Escondida (Colón)</option>
                                    <option value="Buenaventura (Rio Hato)" className="text-brand-950">Buenaventura (Rio Hato)</option>
                                    <option value="Margaritaville (Chame)" className="text-brand-950">Margaritaville (Chame)</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{ct.message}</label>
                                <textarea name="message" className="w-full h-32 px-4 py-3 bg-white border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-TEAL outline-none text-brand-950 placeholder:text-slate-400" placeholder={ct.messagePlaceholder} />
                            </div>
                            <button type="submit" className="md:col-span-2 btn-3d btn-3d-gold py-5 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 group">
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> {ct.sendBtn}
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-5">
                        <div className="card-light rounded-3xl p-7 border-brand-100 bg-brand-50/40">
                            <h3 className="text-xs font-black text-brand-GOLD mb-6 uppercase tracking-[0.3em]">{ct.directContact}</h3>
                            <div className="space-y-5">
                                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group">
                                    <div className="p-3 bg-brand-50 rounded-full group-hover:bg-brand-GOLD group-hover:text-brand-900 transition-all text-brand-TEAL"><Phone size={18} /></div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{ct.callUs}</p>
                                        <p className="font-bold text-brand-950 text-sm">{CONTACT_INFO.phone}</p>
                                    </div>
                                </a>
                                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex items-center gap-4 group">
                                    <div className="p-3 bg-brand-50 rounded-full group-hover:bg-green-600 group-hover:text-white transition-all text-brand-TEAL"><MessageCircle size={18} /></div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">WhatsApp</p>
                                        <p className="font-bold text-brand-950 text-sm">{ct.sendMessage}</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-slate-500"><Mail size={18} /></div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Email</p>
                                        <p className="font-bold text-brand-950 text-sm">{CONTACT_INFO.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Micro Map */}
                        <div className="rounded-3xl overflow-hidden border border-brand-100 h-56 grayscale hover:grayscale-0 transition-all">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5036!2d-79.51!3d8.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTgnNDguMCJOIDc5wrAzMCczNi4wIlc!5e0!3m2!1sen!2spa!4v1"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                                title="Office Location Map"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageContent;
