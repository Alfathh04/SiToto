import React, { useState, useEffect } from 'react';
import { Crown, Download, FolderGit2, Mail, Sparkles, Code, ArrowDown } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenCustomizer }) => {
  const roles = [
    "Future Software Engineer",
    "Front-End Developer",
    "Back-End Developer",
    "UI / UX Designer",
    "Full-Stack Learner"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen pt-28 sm:pt-36 pb-20 flex flex-col justify-center relative overflow-hidden">
      
      {/* Royal Kingdom Background - Square Grid + Gold Radial Flares */}
      <div className="absolute top-0 left-0 right-0 h-[700px] pointer-events-none z-0 overflow-hidden">
        {/* Square Grid Pattern */}
        <div 
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(212, 175, 55, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(212, 175, 55, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, #000 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, #000 70%, transparent 100%)'
          }}
        />
        {/* Royal Golden Glow Aura in Center */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Royal Crest Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/20 to-amber-500/10 border-2 border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-[0_0_25px_rgba(212,175,55,0.25)] animate-gold-pulse">
            <span className="text-amber-400 text-sm">⚜️</span>
            <Crown className="w-4 h-4 text-amber-300" />
            <span className="font-cinzel">KERATON SOFTWARE & REKAYASA</span>
            <span className="text-amber-400 text-sm">⚜️</span>
          </div>
        </div>

        {/* Hero Grid Container: Left = Text & Info, Right = Photo & Royal Crest Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Hero Text Content (LEFT SIDE) */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-center lg:text-left">
            
            {/* Royal Greeting Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-2 font-semibold">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>MY PORTOFOLIO • SOFTWARE ENGINEER</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 font-cinzel leading-tight">
                Salam, Saya <br />
                <span className="gold-gradient-text drop-shadow-[0_4px_16px_rgba(212,175,55,0.4)]">
                  {profile.name}
                </span>
              </h1>

              <p className="text-lg sm:text-2xl font-space font-semibold text-amber-200/90 mt-2">
                {profile.subTitle}
              </p>
            </div>

            {/* Animated Role Typewriter with Royal Icon */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl font-mono text-amber-400 font-bold flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <Code className="w-5 h-5 text-amber-400" />
                <span>{displayText}</span>
                <span className="w-2 h-5 bg-amber-300 animate-pulse inline-block ml-1" />
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              {profile.aboutBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={profile.cvUrl !== "#" ? profile.cvUrl : "#contact"}
                className="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 text-black hover:brightness-110 transition-all shadow-[0_0_30px_rgba(212,175,55,0.45)] flex items-center gap-2.5 active:scale-95 group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Unduh CV Imperial</span>
              </a>

              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full font-bold text-sm bg-white/5 border-2 border-amber-500/40 text-slate-100 hover:text-amber-300 hover:bg-amber-500/15 hover:border-amber-300 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <FolderGit2 className="w-4 h-4 text-amber-400" />
                <span>Silsilah Project</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-full font-bold text-sm bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Kontak Utusan</span>
              </a>
            </div>

            {/* Royal Stats Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-amber-500/20">
              <div className="royal-glass p-3.5 rounded-2xl text-center border border-amber-500/20 hover:border-amber-400/50 transition-all">
                <span className="text-2xl sm:text-3xl font-bold font-space gold-gradient-text block">
                  {profile.stats.projects}+
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block mt-0.5">Karya Project</span>
              </div>

              <div className="royal-glass p-3.5 rounded-2xl text-center border border-amber-500/20 hover:border-amber-400/50 transition-all">
                <span className="text-2xl sm:text-3xl font-bold font-space gold-gradient-text block">
                  {profile.stats.skills}+
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block mt-0.5">Keahlian RPL</span>
              </div>

              <div className="royal-glass p-3.5 rounded-2xl text-center border border-amber-500/20 hover:border-amber-400/50 transition-all">
                <span className="text-2xl sm:text-3xl font-bold font-space gold-gradient-text block">
                  {profile.stats.certificates}
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block mt-0.5">Sertifikat</span>
              </div>

              <div className="royal-glass p-3.5 rounded-2xl text-center border border-amber-500/20 hover:border-amber-400/50 transition-all">
                <span className="text-2xl sm:text-3xl font-bold font-space gold-gradient-text block">
                  {profile.stats.experienceYears} Th
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block mt-0.5">Rekam Jejak</span>
              </div>
            </div>

          </div>

          {/* Profile Photo Frame (RIGHT SIDE - "foto nya buat di sebelah kanan dan buat foto gradasi") */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer Glowing Golden Royal Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-700 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse" />

              {/* Royal Frame Container */}
              <div className="relative royal-glass p-4 sm:p-5 rounded-3xl border-2 border-amber-400/60 shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-[#0c0c14]/90">
                
                {/* Top Crown Emblem Ornament */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-black font-extrabold text-xs shadow-xl flex items-center gap-1.5 z-20 border border-yellow-200">
                  <Crown className="w-4 h-4 fill-black" />
                  <span className="font-cinzel tracking-widest">ROYAL CRAFTSMAN</span>
                </div>

                {/* Photo Image Frame with Multi-Layer Gradient Vignette Blend ("Foto Gradasi") */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-gradient-to-b from-[#12121a] to-[#070709] shadow-[inset_0_0_40px_rgba(212,175,55,0.35)]">
                  
                  {/* The Profile Photo */}
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
                  />

                  {/* Multi-Layer Royal Gold & Deep Obsidian Gradient Overlay Mask ("Foto Gradasi") */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-amber-500/15 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 via-transparent to-[#070709]/95 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/40 via-transparent to-[#070709]/40 pointer-events-none" />
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(212,175,55,0.45)] pointer-events-none" />

                  {/* Glass Tag Overlay at Bottom of Photo */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0a0a0f]/90 backdrop-blur-md p-3.5 rounded-xl border border-amber-400/40 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-100 block leading-none">Ready for Work / PKL</span>
                        <span className="text-[10px] text-amber-300/80 font-mono">Software Engineer RPL</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold font-mono text-amber-300 px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40">
                      ⚜️ Kerajaan
                    </span>
                  </div>

                </div>

                {/* Four Royal Filigree Corner Accents */}
                <div className="absolute top-2 left-2 text-amber-400/80 text-sm pointer-events-none select-none">⚜️</div>
                <div className="absolute top-2 right-2 text-amber-400/80 text-sm pointer-events-none select-none">⚜️</div>
                <div className="absolute bottom-2 left-2 text-amber-400/80 text-sm pointer-events-none select-none">⚜️</div>
                <div className="absolute bottom-2 right-2 text-amber-400/80 text-sm pointer-events-none select-none">⚜️</div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" className="text-xs font-cinzel text-amber-300 hover:text-amber-200 flex flex-col items-center gap-1 tracking-wider">
          <span>Jelajahi Istana</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-amber-400" />
        </a>
      </div>
    </section>
  );
};
