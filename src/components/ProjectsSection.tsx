import React, { useState } from 'react';
import { FolderGit2, Search, ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'Semua Project' },
    { key: 'website', label: 'Website' },
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'desktop', label: 'Desktop / Mobile' },
    { key: 'fullstack', label: 'Full-Stack' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Showcase & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            Hasil Karya & <span className="gold-gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Kumpulan aplikasi, portal web, dan sistem perangkat lunak yang telah saya rancang dan bangun.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] font-bold'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama project atau teknologi..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 focus:border-amber-400 text-xs text-slate-200 placeholder-slate-500 outline-none transition-all focus:bg-white/10"
            />
          </div>

        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="royal-glass rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Banner */}
                  <div className="relative h-52 overflow-hidden bg-slate-900 border-b border-white/10">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-slate-900 text-4xl">
                        {project.icon}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent" />

                    {/* Featured Ribbon Tag */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-black px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Quick View Button Overlay */}
                    <button
                      onClick={() => setActiveProject(project)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-slate-300 hover:text-amber-300 hover:scale-110 transition-all border border-white/10"
                      title="Quick Preview Detail"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Project Content Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{project.icon}</span>
                      <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-space text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4">
                  <div className="flex items-center gap-3 pt-4">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 py-2.5 rounded-full text-xs font-bold bg-white/5 hover:bg-amber-500/20 text-slate-200 hover:text-amber-300 border border-white/10 hover:border-amber-500/30 transition-all text-center"
                    >
                      Detail Project
                    </button>

                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                        title="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full gold-gradient-bg text-black hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="royal-glass p-12 rounded-3xl text-center border border-white/10 max-w-md mx-auto">
            <p className="text-slate-400 text-sm">Tidak ada project yang cocok dengan kriteria pencarian.</p>
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
