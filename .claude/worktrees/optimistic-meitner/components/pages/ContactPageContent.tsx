'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import SplitText from '@/components/ui/SplitText';

const ContactPageContent: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-white/5 bg-brand-950">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-GOLD)_0%,_transparent_100%)] opacity-[0.03] scale-150"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="inline-block px-6 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full backdrop-blur-md mb-12">
                            Secure Infrastructure
                        </span>
                        <h1 className="font-heading text-6xl md:text-9xl font-black mb-12 leading-[0.8] tracking-tighter uppercase italic text-white">
                            DIRECT <br /> <span className="text-brand-GOLD italic">CONCIERGE</span> <br /> ACCESS.
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed font-medium mb-16 italic border-l-4 border-brand-GOLD/20 pl-12 opacity-80">
                            Our team of bilingual experts is ready to assist in every phase of your Panama move. No generic support—direct elite intelligence.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 glass-card rounded-[4rem] border-neutral-100/10 p-12 md:p-16 bg-white shadow-sm border-t-8 border-brand-GOLD">
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
                        }} className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Nombre Completo</label>
                                <input name="name" required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email</label>
                                <input name="email" required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">WhatsApp / Phone</label>
                                <input name="phone" required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none" placeholder="+1 234 567 890" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Proyecto de Interés</label>
                                <select name="project_interest" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none text-sm font-bold">
                                    <option value="">Seleccionar proyecto...</option>
                                    <option value="Pino Alto (Boquete)">Pino Alto (Boquete)</option>
                                    <option value="Westin Residences (Playa Bonita)">Westin Residences (Playa Bonita)</option>
                                    <option value="Playa Escondida (Colón)">Playa Escondida (Colón)</option>
                                    <option value="Buenaventura (Rio Hato)">Buenaventura (Rio Hato)</option>
                                    <option value="Margaritaville (Chame)">Margaritaville (Chame)</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Mensaje</label>
                                <textarea name="message" className="w-full h-32 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none" placeholder="I am interested in..." />
                            </div>
                            <button type="submit" className="md:col-span-2 btn-3d btn-3d-gold py-5 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 group">
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> ENVIAR CONSULTA
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                            <h3 className="text-xl font-bold text-brand-900 mb-8 uppercase tracking-widest text-sm">Direct Contact</h3>
                            <div className="space-y-6">
                                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group">
                                    <div className="p-3 bg-slate-100 rounded-full group-hover:bg-brand-GOLD group-hover:text-brand-900 transition-all"><Phone size={20} /></div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">Call Us</p>
                                        <p className="font-bold text-brand-900">{CONTACT_INFO.phone}</p>
                                    </div>
                                </a>
                                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex items-center gap-4 group">
                                    <div className="p-3 bg-slate-100 rounded-full group-hover:bg-green-600 group-hover:text-white transition-all"><MessageCircle size={20} /></div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">WhatsApp</p>
                                        <p className="font-bold text-brand-900">Send Message</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-slate-100 rounded-full transition-all"><Mail size={20} /></div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                                        <p className="font-bold text-brand-900">{CONTACT_INFO.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Micro Map */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-64 grayscale hover:grayscale-0 transition-all">
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
