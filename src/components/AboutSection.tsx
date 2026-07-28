import React, { useState } from 'react';
import { Terminal, Shield, Sparkles, CheckCircle2, Code2, Cpu, Rocket } from 'lucide-react';
import { ProfileData } from '../types';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'code'>('philosophy');

  const coreValues = [
    {
      title: "Clean Code & Scalable Architecture",
      desc: "Menulis kode modular, terstruktur, mudah dirawat, dan mematuhi best practice industri.",
      icon: Code2,
    },
    {
      title: "UI/UX Aesthetic & Modern Design",
      desc: "Memadukan fungsionalitas sistem backend dengan antarmuka visual yang sangat elegan dan responsif.",
      icon: Sparkles,
    },
    {
      title: "High Performance & Fast Loading",
      desc: "Mengoptimalkan bundle size, query database, serta kecepatan akses aplikasi untuk kenyamanan pengguna.",
      icon: Cpu,
    },
    {
      title: "Continuous Adaptability & AI Tech",
      desc: "Eksplorasi berkesinambungan terhadap perkembangan teknologi AI, React, Laravel, dan cloud infrastructure.",
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            Tentang <span className="gold-gradient-text">Developer</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Dedikasi tinggi dalam menciptakan pengalaman perangkat lunak berkualitas tinggi.
          </p>
        </div>

        {/* About Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card (Left) */}
          <div className="lg:col-span-7 royal-glass p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-amber-500/20">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-300">
                  {profile.aboutHeader}
                </h3>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
                  SMK RPL
                </span>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Saya merupakan siswa SMK jurusan <strong className="text-amber-300">Rekayasa Perangkat Lunak (RPL)</strong> yang memiliki ketertarikan mendalam pada pengembangan software modern, arsitektur web full-stack, serta desain antarmuka pengguna berbasis glassmorphism.
                </p>
                <p>
                  Saya percaya bahwa kode yang baik bukan hanya tentang berfungsinya sebuah fitur, namun juga tentang keandalan, keamanan data, kemudahan maintainability, dan kenyamanan pengguna saat berinteraksi dengan aplikasi.
                </p>
                <p>
                  Saat ini saya aktif mengeksplorasi ekosistem <strong className="text-amber-300">React 19, TypeScript, Express, PHP/Laravel, PostgreSQL, dan Gemini AI integration</strong> untuk mempersiapkan diri menghadapi tantangan di dunia kerja profesional, PKL, maupun proyek freelance.
                </p>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Problem Solver</h4>
                  <p className="text-[11px] text-slate-400">Analisis kebutuhan & algoritma yang efisien</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Team Collaborator</h4>
                  <p className="text-[11px] text-slate-400">Terbiasa dengan Git, Agile & Code Review</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Code Terminal & Values (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Tab Switcher */}
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'philosophy'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Prinsip Utama</span>
              </button>

              <button
                onClick={() => setActiveTab('code')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'code'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>Code Config</span>
              </button>
            </div>

            {/* Tab Content 1: Philosophy Values */}
            {activeTab === 'philosophy' && (
              <div className="space-y-3.5 flex-1">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={idx}
                      className="royal-glass p-4 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all flex items-start gap-3.5"
                    >
                      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-100">{val.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{val.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab Content 2: Interactive Code Terminal */}
            {activeTab === 'code' && (
              <div className="royal-glass rounded-2xl overflow-hidden border border-amber-500/30 font-mono text-xs flex-1 flex flex-col shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-[#12121a] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-slate-400">developer.config.ts</span>
                </div>

                {/* Code Body */}
                <div className="p-4 text-slate-300 space-y-1.5 overflow-x-auto bg-[#0a0a0f] leading-relaxed">
                  <p className="text-slate-500">// Developer Profile Initialization</p>
                  <p>
                    <span className="text-purple-400">const</span> <span className="text-amber-300">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">name</span>: <span className="text-emerald-300">"{profile.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">education</span>: <span className="text-emerald-300">"SMK Rekayasa Perangkat Lunak"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">stack</span>: [
                  </p>
                  <p className="pl-8 text-amber-200">
                    "React", "TypeScript", "Node.js", "Express", "PHP Laravel", "MySQL", "Tailwind"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-sky-300">status</span>: <span className="text-amber-400">"Building High Quality Web Apps"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">passionateAbout</span>: (idea) =&gt; &#123;
                  </p>
                  <p className="pl-8 text-emerald-400">
                    return idea.turnIntoElegantSoftware();
                  </p>
                  <p className="pl-4">&#125;</p>
                  <p>&#125;;</p>
                  <p className="text-slate-500 pt-2">// Status: Ready to deploy 🚀</p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
