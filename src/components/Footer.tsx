import React, { useState, useEffect } from 'react';
import { ArrowUp, Crown, Clock, Heart } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#06060a]/90 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gold-gradient-bg flex items-center justify-center text-black font-bold">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <span className="font-cinzel text-base font-bold gold-gradient-text block leading-none">
                MY PORTOFOLIO
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                Designed & Built for {profile.name}
              </span>
            </div>
          </div>

          {/* Live Clock & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 font-mono text-amber-400/80">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Waktu Server Local: {currentTime}</span>
            </div>
            <p className="flex items-center gap-1 text-[11px] text-slate-500">
              <span>© {new Date().getFullYear()} Royal Portfolio. All Rights Reserved. Crafted with</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </p>
          </div>

        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full gold-gradient-bg text-black hover:brightness-110 transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-110 active:scale-95 animate-bounce"
          title="Kembali ke Atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
