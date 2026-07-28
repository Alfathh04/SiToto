import React, { useState } from 'react';
import { Mail, Phone, Instagram, Linkedin, Github, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sentToast, setSentToast] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSentToast(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSentToast(false), 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(`Halo ${profile.name}, saya tertarik berdiskusi tentang proyek software/kerjasama.`);
    window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Terhubung Langsung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            Hubungi <span className="gold-gradient-text">Saya</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Terbuka untuk diskusi proyek web, tawaran PKL/magang, pekerjaan freelance, maupun kolaborasi teknologi.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form Card (Left) */}
          <div className="lg:col-span-7 royal-glass p-6 sm:p-8 rounded-3xl border border-amber-500/20">
            <h3 className="text-xl font-bold font-cinzel text-amber-300 mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-amber-400" />
              <span>Kirim Pesan Langsung</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-medium mb-1.5">Nama Anda:</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Masukkan nama Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-amber-400 transition-all focus:bg-white/10"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5">Email Anda:</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="contoh@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-amber-400 transition-all focus:bg-white/10"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5">Pesan / Diskusi Proyek:</label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tuliskan pesan atau detail kebutuhan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-amber-400 transition-all focus:bg-white/10"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm gold-gradient-bg text-black hover:brightness-110 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </button>

              {sentToast && (
                <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs text-center animate-fadeIn">
                  🎉 Pesan Anda berhasil terkirim! Saya akan merespon sesegera mungkin.
                </div>
              )}
            </form>
          </div>

          {/* Quick Info & Direct Links Card (Right) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="royal-glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-cinzel text-slate-100">Informasi Kontak</h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Email Resmi</span>
                    <span className="font-semibold text-slate-200 truncate block">{profile.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">WhatsApp Direct</span>
                    <span className="font-semibold text-slate-200">+{profile.whatsapp}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-3 rounded-xl font-semibold text-xs bg-white/5 border border-white/10 hover:border-amber-500/30 text-slate-200 hover:text-amber-300 transition-all flex items-center justify-center gap-2"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                  <span>{copiedEmail ? 'Email Berhasil Disalin!' : 'Copy Email Address'}</span>
                </button>

                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Buka Chat WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="royal-glass p-6 rounded-3xl border border-white/10 flex items-center justify-around">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 transition-all group"
                title="GitHub Profile"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 transition-all group"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 transition-all group"
                title="Instagram Profile"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
