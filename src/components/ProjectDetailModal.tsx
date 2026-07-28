import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl royal-glass rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#111118]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="text-xl font-bold font-cinzel text-slate-100">
                {project.title}
              </h3>
              <span className="text-xs text-amber-400 font-mono uppercase">
                Category: {project.category}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Image Banner */}
          {project.imageUrl && (
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-slate-900">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          )}

          {/* Description Narrative */}
          <div>
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ringkasan Proyek</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features List */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Fitur Utam & Keunggulan</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Used */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Teknologi Yang Digunakan:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-[#111118] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-slate-200 hover:text-amber-300 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Repository GitHub</span>
              </a>
            )}

            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-xs font-bold gold-gradient-bg text-black hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all ml-auto"
          >
            Tutup Preview
          </button>
        </div>

      </div>
    </div>
  );
};
