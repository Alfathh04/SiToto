import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, Sliders, Menu, X, ArrowUpRight, FileCode } from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
  onOpenAICopilot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenCustomizer,
  onOpenAICopilot,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificate', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090d]/85 backdrop-blur-2xl border-b border-amber-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] mt-0 sm:mt-2 sm:rounded-2xl sm:mx-4'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d0d12] rounded-[11px] flex items-center justify-center text-amber-400">
                <Crown className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider gold-gradient-text block leading-none">
                MY PORTOFOLIO
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                {profile.name.split(' ')[0]}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 block relative ${
                      isActive
                        ? 'text-amber-300 bg-amber-500/15 border border-amber-500/30 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                        : 'text-slate-300 hover:text-amber-300 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Export HTML/CSS/JS Button */}
            <a
              href="/export/standalone-portfolio.html"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              title="Preview / Unduh HTML, CSS & JS"
            >
              <FileCode className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Ekspor HTML/CSS/JS</span>
            </a>

            {/* AI Assistant Toggle Button */}
            <button
              onClick={onOpenAICopilot}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-900/60 to-amber-900/60 hover:from-purple-800 hover:to-amber-800 border border-purple-500/30 hover:border-amber-400/50 text-purple-200 hover:text-amber-200 transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              title="Aura AI Copilot Chat"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="hidden sm:inline">AI Copilot</span>
            </button>

            {/* Customizer Studio Drawer Button */}
            <button
              onClick={onOpenCustomizer}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold gold-gradient-bg text-black hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95"
              title="Live Portfolio Customizer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Studio Editor</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-amber-400 lg:hidden"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0e0e14]/95 border border-amber-500/20 backdrop-blur-2xl shadow-2xl animate-fadeIn">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-amber-500/10 transition-all"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
