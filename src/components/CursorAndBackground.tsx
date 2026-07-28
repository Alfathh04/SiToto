import React, { useEffect, useState } from 'react';

export const CursorAndBackground: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('royal-glass')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden">
        {/* Top Gold Radial Light */}
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/15 via-amber-600/5 to-transparent blur-[120px] rounded-full" />
        {/* Purple/Amethyst Secondary Ambient Light */}
        <div className="absolute top-[40%] -right-[200px] w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-200px] -left-[200px] w-[600px] h-[600px] bg-amber-700/10 blur-[150px] rounded-full" />
      </div>

      {/* Background Micro Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] opacity-25"
        style={{
          backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Custom Pointer Glow (hidden on mobile touch screens) */}
      <div
        className={`hidden md:block fixed pointer-events-none z-[99999] rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'w-10 h-10 bg-amber-400/80 blur-[2px]' : 'w-4 h-4 bg-amber-400 shadow-[0_0_15px_#D4AF37]'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />

      {/* Larger Cursor Aura Blur */}
      <div
        className="hidden md:block fixed pointer-events-none z-[99998] w-72 h-72 rounded-full bg-amber-500/10 blur-[60px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </>
  );
};
