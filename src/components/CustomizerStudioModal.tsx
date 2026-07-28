import React, { useState } from 'react';
import { X, Sliders, Sparkles, User, Code2, FolderGit2, RefreshCw, Save, Check, Plus, Trash2, FileCode, Download, Copy } from 'lucide-react';
import { ProfileData, SkillItem, ProjectItem } from '../types';

interface CustomizerStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (updated: ProfileData) => void;
  skills: SkillItem[];
  onUpdateSkills: (updated: SkillItem[]) => void;
  projects: ProjectItem[];
  onUpdateProjects: (updated: ProjectItem[]) => void;
  onResetDefault: () => void;
}

export const CustomizerStudioModal: React.FC<CustomizerStudioModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  skills,
  onUpdateSkills,
  projects,
  onUpdateProjects,
  onResetDefault,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'ai' | 'skills' | 'projects' | 'export'>('profile');
  
  // Profile Form State
  const [formData, setFormData] = useState<ProfileData>({ ...profile });
  
  // AI Generator Prompt State
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiType, setAiType] = useState<'bio' | 'project' | 'headline'>('bio');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  // Handle Profile Save
  const handleSaveProfile = () => {
    onUpdateProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleDownloadFile = (filename: string, content: string, mimeType = 'text/html') => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = (filename: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  // Generate dynamic static HTML bundle using current profile
  const generateStaticHTML = () => {
    return `<!DOCTYPE html>
<html lang="id" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MY PORTOFOLIO | ${profile.name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            cinzel: ['Cinzel', 'serif'],
            outfit: ['Outfit', 'sans-serif'],
            space: ['Space Grotesk', 'sans-serif'],
            sans: ['Plus Jakarta Sans', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="style.css" />
</head>
<body class="bg-[#07070a] text-slate-100 font-sans antialiased min-h-screen overflow-x-hidden relative">

  <!-- Background Pattern -->
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div class="w-full h-full opacity-20" style="background-image: linear-gradient(to right, rgba(212, 175, 55, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.2) 1px, transparent 1px); background-size: 40px 40px;"></div>
  </div>

  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#07070a]/80 backdrop-blur-md border-b border-amber-500/20 py-4">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <a href="#home" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center text-black font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-amber-300">👑</div>
        <div>
          <span class="font-cinzel text-lg font-bold gold-gradient-text block leading-none">MY PORTOFOLIO</span>
          <span class="text-[10px] tracking-widest text-slate-400 uppercase font-mono">${profile.name}</span>
        </div>
      </a>
      <div class="hidden md:flex gap-6 text-sm">
        <a href="#home" class="hover:text-amber-300">Beranda</a>
        <a href="#about" class="hover:text-amber-300">Tentang</a>
        <a href="#skills" class="hover:text-amber-300">Keahlian</a>
        <a href="#projects" class="hover:text-amber-300">Proyek</a>
        <a href="#contact" class="hover:text-amber-300">Kontak</a>
      </div>
      <a href="#contact" class="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-600 text-black">Hubungi</a>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section id="home" class="min-h-screen pt-32 pb-20 flex flex-col justify-center relative">
    <div class="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
        <h1 class="text-4xl sm:text-6xl font-extrabold font-cinzel text-slate-100">
          Salam, Saya <br/><span class="gold-gradient-text">${profile.name}</span>
        </h1>
        <p class="text-xl font-space font-semibold text-amber-200/90">${profile.subTitle}</p>
        <p class="text-slate-300 leading-relaxed">${profile.aboutBio}</p>
        <div class="flex gap-4 justify-center lg:justify-start">
          <a href="#contact" class="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 text-black">Unduh CV</a>
          <a href="#projects" class="px-7 py-3.5 rounded-full font-bold text-sm bg-white/5 border border-amber-500/40 text-slate-100">Proyek</a>
        </div>
      </div>
      <div class="lg:col-span-5 flex justify-center">
        <div class="relative max-w-sm w-full royal-glass p-5 rounded-3xl border-2 border-amber-400/60 bg-[#0c0c14]">
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-400/40">
            <img src="${profile.avatarUrl}" alt="${profile.name}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-amber-500/15 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="py-8 border-t border-amber-500/20 text-center text-xs text-slate-400">
    <p>© 2026 ${profile.name} • MY PORTOFOLIO (HTML, CSS & JS)</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
  };

  const generateStaticCSS = () => {
    return `.gold-gradient-text {
  background: linear-gradient(135deg, #fffbeb 0%, #fde047 25%, #eab308 50%, #b45309 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gold-gradient-bg {
  background: linear-gradient(135deg, #fef08a 0%, #facc15 40%, #eab308 70%, #ca8a04 100%);
}
.royal-glass {
  background: rgba(13, 13, 20, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}
html { scroll-behavior: smooth; }`;
  };

  const generateStaticJS = () => {
    return `console.log("MY PORTOFOLIO - Pure JS loaded");
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio ready!");
});`;
  };

  // Call Gemini AI Endpoint
  const handleGenerateAI = async () => {
    setAiLoading(true);
    setAiResult('');
    try {
      const res = await fetch('/api/ai/enhance-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: aiPrompt || `Buatkan ${aiType} untuk pengembang web ${formData.name}`, type: aiType }),
      });
      const data = await res.json();
      if (data.result) {
        setAiResult(data.result);
      } else {
        setAiResult(data.error || 'Gagal menghasilkan teks dengan AI.');
      }
    } catch (err: any) {
      setAiResult('Gagal menghubungi AI Server: ' + err.message);
    } finally {
      setAiLoading(false);
    }
  };

  const applyAIToBio = () => {
    if (!aiResult) return;
    setFormData((prev) => ({ ...prev, aboutBio: aiResult }));
    setActiveTab('profile');
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-end bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl h-full bg-[#0a0a0e] border-l border-amber-500/30 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl gold-gradient-bg text-black">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-cinzel gold-gradient-text">
                  Portfolio Studio Customizer
                </h3>
                <p className="text-xs text-slate-400">Personalisasikan konten & teks portofolio Anda secara live</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 mb-6 gap-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'profile' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-400'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Profil Utama</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'ai' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-slate-400'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>AI Enhancer</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'skills' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-400'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Skills ({skills.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'projects' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-400'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Proyek</span>
            </button>

            <button
              onClick={() => setActiveTab('export')}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'export' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ekspor Code</span>
            </button>
          </div>

          {/* TAB 1: Profile Editor */}
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Nama Lengkap:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Title / Role Utama:</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">SubTitle / Sekolah:</label>
                  <input
                    type="text"
                    value={formData.subTitle}
                    onChange={(e) => setFormData({ ...formData, subTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Status Badge Text:</label>
                <input
                  type="text"
                  value={formData.statusBadge}
                  onChange={(e) => setFormData({ ...formData, statusBadge: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Bio / Deskripsi Profil:</label>
                <textarea
                  rows={4}
                  value={formData.aboutBio}
                  onChange={(e) => setFormData({ ...formData, aboutBio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Email:</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">WhatsApp (62xxx):</label>
                  <input
                    type="text"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">URL Avatar / Foto Profil:</label>
                <input
                  type="text"
                  value={formData.avatarUrl || ''}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSaveProfile}
                  className="w-full py-3 rounded-xl font-bold text-xs gold-gradient-bg text-black hover:brightness-110 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                  <span>{savedSuccess ? 'Tersimpan Live!' : 'Simpan Perubahan Live'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: AI Enhancer Powered by Gemini */}
          {activeTab === 'ai' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-purple-900/20 border border-purple-500/30 text-purple-200">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Gemini AI Copywriting Assistant</span>
                </div>
                <p className="text-[11px] text-purple-300">
                  Gunakan kecerdasan buatan Gemini untuk membuat deskripsi bio atau pitch proyek yang terdengar sangat profesional dan persuasif.
                </p>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Pilih Jenis Penulisan AI:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setAiType('bio')}
                    className={`py-2 px-3 rounded-xl border text-center font-medium ${
                      aiType === 'bio' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    Bio / About Me
                  </button>

                  <button
                    onClick={() => setAiType('project')}
                    className={`py-2 px-3 rounded-xl border text-center font-medium ${
                      aiType === 'project' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    Project Summary
                  </button>

                  <button
                    onClick={() => setAiType('headline')}
                    className={`py-2 px-3 rounded-xl border text-center font-medium ${
                      aiType === 'headline' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    Hero Headline
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Instruksi Tambahan (Opsional):</label>
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Contoh: Fokuskan pada keahlian React & Laravel..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                />
              </div>

              <button
                onClick={handleGenerateAI}
                disabled={aiLoading}
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-purple-600 via-amber-500 to-amber-600 text-white hover:brightness-110 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)] disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: aiLoading ? '2s' : '0s' }} />
                <span>{aiLoading ? 'Gemini Sedang Berpikir...' : 'Generate Teks Dengan AI'}</span>
              </button>

              {aiResult && (
                <div className="p-4 rounded-2xl bg-white/5 border border-amber-500/30 space-y-3">
                  <span className="text-[11px] font-bold text-amber-300 block">Hasil Teks Gemini AI:</span>
                  <p className="text-xs text-slate-200 leading-relaxed italic">{aiResult}</p>

                  <button
                    onClick={applyAIToBio}
                    className="w-full py-2 rounded-xl bg-amber-500 text-black font-bold text-xs hover:brightness-110"
                  >
                    Terapkan Hasil Ke Bio Profil
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Skills List Manager */}
          {activeTab === 'skills' && (
            <div className="space-y-3 text-xs">
              <p className="text-slate-400">Daftar keahlian terpasang ({skills.length}):</p>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                {skills.map((s, idx) => (
                  <div key={s.id} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-200 block">{s.name}</span>
                      <span className="text-[10px] text-amber-400 font-mono">{s.category} • {s.level}%</span>
                    </div>

                    <button
                      onClick={() => onUpdateSkills(skills.filter((item) => item.id !== s.id))}
                      className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/40"
                      title="Hapus Skill"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Projects List Manager */}
          {activeTab === 'projects' && (
            <div className="space-y-3 text-xs">
              <p className="text-slate-400">Daftar proyek terpasang ({projects.length}):</p>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                {projects.map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-200 block">{p.title}</span>
                      <span className="text-[10px] text-amber-400 font-mono">{p.category}</span>
                    </div>

                    <button
                      onClick={() => onUpdateProjects(projects.filter((item) => item.id !== p.id))}
                      className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/40"
                      title="Hapus Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Export HTML, CSS & JS */}
          {activeTab === 'export' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                <div className="flex items-center gap-2 mb-1">
                  <FileCode className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-sm">Ekspor Portofolio Murni (HTML, CSS & JS)</span>
                </div>
                <p className="text-[11px] text-emerald-300/80 leading-relaxed">
                  Anda dapat mengunduh berkas statis portofolio ini secara langsung tanpa perlu React/Node.js build step. Cocok dipasang di GitHub Pages, Netlify, cPanel, atau hosting gratis apapun.
                </p>
              </div>

              {/* Direct Quick Downloads */}
              <div className="space-y-2">
                <span className="text-slate-300 font-bold block">1. Unduh Berkas Statis Siap Pakai:</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => handleDownloadFile(`${profile.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.html`, generateStaticHTML(), 'text/html')}
                    className="p-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold flex items-center justify-between hover:brightness-110 transition-all shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      <span>Unduh index.html</span>
                    </div>
                    <span className="text-[10px] font-mono bg-black/20 px-2 py-0.5 rounded">HTML5</span>
                  </button>

                  <button
                    onClick={() => handleDownloadFile('style.css', generateStaticCSS(), 'text/css')}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-slate-100 font-bold flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-amber-400" />
                      <span>Unduh style.css</span>
                    </div>
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded">CSS3</span>
                  </button>

                  <button
                    onClick={() => handleDownloadFile('script.js', generateStaticJS(), 'text/javascript')}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-slate-100 font-bold flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-amber-400" />
                      <span>Unduh script.js</span>
                    </div>
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded">Vanilla JS</span>
                  </button>

                  <a
                    href="/export/standalone-portfolio.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-200 font-bold flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-emerald-400" />
                      <span>Buka Preview Static</span>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/30 px-2 py-0.5 rounded text-emerald-200">Browser</span>
                  </a>
                </div>
              </div>

              {/* Code Snippet Previews & Copying */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 font-bold">2. Salin Potongan Kode HTML:</span>
                  <button
                    onClick={() => handleCopyCode('html', generateStaticHTML())}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30 flex items-center gap-1.5 font-mono text-[10px]"
                  >
                    {copiedFile === 'html' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedFile === 'html' ? 'Tersalin!' : 'Salin HTML'}</span>
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 max-h-36 overflow-y-auto font-mono text-[10px] text-slate-400 select-all">
                  <pre>{generateStaticHTML().substring(0, 500)}...</pre>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Reset & Close */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 mt-6">
          <button
            onClick={onResetDefault}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-white/10 transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Data Default</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-white/10 text-slate-200 hover:text-white"
          >
            Tutup Studio
          </button>
        </div>

      </div>
    </div>
  );
};
