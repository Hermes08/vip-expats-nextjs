'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import SplitText from '@/components/ui/SplitText';
import Link from 'next/link';

const ContactPageContent: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Talk to an Expert — top bar */}
            <div className="bg-brand-GOLD/10 border-b border-brand-GOLD/20 py-4 px-4">
              <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
                <span className="text-brand-GOLD font-black text-xs uppercase tracking-[0.3em]">
                  Talk to an Expert Today
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-2 min-h-[44px] text-white font-bold text-sm hover:text-brand-GOLD transition-colors"
                  >
                    <Phone size={14} className="text-brand-GOLD" />
                    {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20VIP%20Expats%2C%20I%27d%20like%20to%20speak%20with%20an%20expert`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 min-h-[44px] text-white font-bold text-sm hover:text-green-400 transition-colors"
                  >
                    <MessageCircle size={14} className="text-green-400" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-2 min-h-[44px] text-white font-bold text-sm hover:text-brand-GOLD transition-colors"
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
                        Secure Infrastructure
                    </span>
                    <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tight uppercase text-white">
                        DIRECT <span className="text-brand-GOLD">CONCIERGE</span> ACCESS.
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed font-medium italic border-l-2 border-brand-GOLD/20 pl-5">
                        Our team of bilingual experts is ready to assist in every phase of your Panama move. No generic support—direct elite intelligence.
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
                                alert('Message sent successfully! We will contact you shortly.');
                                form.reset();
                            } catch (err) {
                                console.error(err);
                                alert('Error sending message. Please try again.');
                            }
                        }} className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                                <input name="name" required type="text" className="w-full px-4 py-3 bg-white/5 border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none text-white placeholder:text-slate-600" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                                <input name="email" required type="email" className="w-full px-4 py-3 bg-white/5 border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none text-white placeholder:text-slate-600" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">WhatsApp / Phone</label>
                                <input name="phone" required type="tel" className="w-full px-4 py-3 bg-white/5 border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none text-white placeholder:text-slate-600" placeholder="+1 234 567 890" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Property of Interest</label>
                                <select name="project_interest" className="w-full px-4 py-3 bg-white/5 border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none text-sm font-bold text-white">
                                    <option value="" className="text-brand-950">Select a property...</option>
                                    <option value="Pino Alto (Boquete)" className="text-brand-950">Pino Alto (Boquete)</option>
                                    <option value="Westin Residences (Playa Bonita)" className="text-brand-950">Westin Residences (Playa Bonita)</option>
                                    <option value="Playa Escondida (Colón)" className="text-brand-950">Playa Escondida (Colón)</option>
                                    <option value="Buenaventura (Rio Hato)" className="text-brand-950">Buenaventura (Rio Hato)</option>
                                    <option value="Margaritaville (Chame)" className="text-brand-950">Margaritaville (Chame)</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                                <textarea name="message" className="w-full h-32 px-4 py-3 bg-white/5 border border-brand-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none text-white placeholder:text-slate-600" placeholder="I am interested in..." />
                            </div>
                            <button type="submit" className="md:col-span-2 btn-3d btn-3d-gold py-5 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 group">
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> SEND INQUIRY
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-5">
                        <div className="card-light rounded-3xl p-7 border-brand-100 bg-brand-50/40">
                            <h3 className="text-xs font-black text-brand-GOLD mb-6 uppercase tracking-[0.3em]">Direct Contact</h3>
                            <div className="space-y-5">
                                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-brand-GOLD group-hover:text-brand-900 transition-all text-slate-500"><Phone size={18} /></div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Call Us</p>
                                        <p className="font-bold text-white text-sm">{CONTACT_INFO.phone}</p>
                                    </div>
                                </a>
                                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex items-center gap-4 group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-green-600 group-hover:text-white transition-all text-slate-500"><MessageCircle size={18} /></div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">WhatsApp</p>
                                        <p className="font-bold text-white text-sm">Send Message</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-slate-500"><Mail size={18} /></div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Email</p>
                                        <p className="font-bold text-white text-sm">{CONTACT_INFO.email}</p>
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
