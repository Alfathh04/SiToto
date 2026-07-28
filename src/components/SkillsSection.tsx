import React, { useState } from 'react';
import { Cpu, Search, Code2, Database, Layout, Server, Terminal, Wrench, Sparkles } from 'lucide-react';
import { SkillItem, SkillCategory } from '../types';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: SkillCategory; label: string; icon: any }[] = [
    { key: 'all', label: 'Semua Keahlian', icon: Cpu },
    { key: 'frontend', label: 'Front-End', icon: Code2 },
    { key: 'backend', label: 'Back-End', icon: Server },
    { key: 'database', label: 'Database', icon: Database },
    { key: 'design', label: 'UI/UX Design', icon: Layout },
    { key: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative z-10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Keahlian & Teknologi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            Tech Stack & <span className="gold-gradient-text">Competencies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Teknologi dan perangkat lunak yang saya pelajari dan terapkan dalam pengembangan proyek.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105 font-bold'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari keahlian..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 focus:border-amber-400 text-xs text-slate-200 placeholder-slate-500 outline-none transition-all focus:bg-white/10"
            />
          </div>

        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="royal-glass p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                      <Terminal className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed min-h-[36px]">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 space-y-3">
                  {/* Progress Meter Bar */}
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full gold-gradient-bg transition-all duration-1000 shadow-[0_0_10px_#D4AF37]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="royal-glass p-12 rounded-3xl text-center border border-white/10 max-w-md mx-auto">
            <p className="text-slate-400 text-sm">Tidak ditemukan keahlian dengan kata kunci "{searchQuery}".</p>
          </div>
        )}

      </div>
    </section>
  );
};
