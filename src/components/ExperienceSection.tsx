import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, Users, Code, Sparkles } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const getTypeBadge = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'internship':
        return { label: 'Internship / PKL', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' };
      case 'freelance':
        return { label: 'Freelance Project', color: 'bg-amber-500/10 border-amber-500/30 text-amber-400' };
      case 'community':
        return { label: 'Komunitas & RPL', color: 'bg-purple-500/10 border-purple-500/30 text-purple-400' };
      case 'competition':
        return { label: 'Lomba & Award', color: 'bg-sky-500/10 border-sky-500/30 text-sky-400' };
      default:
        return { label: 'Pengalaman', color: 'bg-slate-500/10 border-slate-500/30 text-slate-300' };
    }
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Riwayat & Pengalaman</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            Pengalaman <span className="gold-gradient-text">& Rekam Jejak</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Perjalanan karir, magang PKL, pengerjaan proyek freelance, dan keterlibatan komunitas teknologi.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative pl-6 sm:pl-8 space-y-12 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-amber-400 before:via-amber-600/50 before:to-transparent">
          {experiences.map((exp) => {
            const badge = getTypeBadge(exp.type);
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Golden Glowing Node */}
                <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-[#0a0a0f] border-2 border-amber-400 group-hover:scale-125 group-hover:border-amber-300 group-hover:bg-amber-500 transition-all shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-300 group-hover:bg-black" />
                </div>

                {/* Timeline Card Content */}
                <div className="royal-glass p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-amber-500/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${badge.color}`}>
                      {badge.label}
                    </span>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-space text-slate-100 group-hover:text-amber-300 transition-colors">
                    {exp.title}
                  </h3>

                  <p className="text-sm font-semibold text-amber-400 mt-1">
                    {exp.role}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Deliverables / Key Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                        Poin Prestasi & Kontribusi:
                      </span>
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
