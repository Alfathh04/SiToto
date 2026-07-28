import React, { useState } from 'react';
import { Award, Eye, Calendar, ExternalLink, X, Sparkles } from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificateSectionProps {
  certificates: CertificateItem[];
}

export const CertificateSection: React.FC<CertificateSectionProps> = ({ certificates }) => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Sertifikasi & Lisensi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            Sertifikat <span className="gold-gradient-text">& Prestasi</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Bukti kompetensi resmi dalam bidang pemrograman, keahlian web, dan teknologi rekayasa perangkat lunak.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="royal-glass p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Banner / Image Thumbnail */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 mb-5 flex items-center justify-center">
                  {cert.imageUrl ? (
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-amber-400">
                      <span className="text-4xl mb-2">{cert.icon}</span>
                      <span className="text-xs font-mono font-semibold text-slate-300">Certified Document</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-full bg-amber-500 text-black text-xs font-bold flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-4 h-4" />
                      <span>Lihat Sertifikat</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    {cert.issuer}
                  </span>

                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-300">
                <span>Klik untuk perbesar</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Viewer */}
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative max-w-4xl w-full royal-glass rounded-3xl border border-amber-500/40 p-6 shadow-2xl flex flex-col my-auto">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold font-cinzel text-slate-100">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">
                    Issuer: {selectedCert.issuer} • Issued {selectedCert.date}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Full Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 max-h-[70vh] flex items-center justify-center p-2">
                {selectedCert.imageUrl ? (
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    className="max-h-[65vh] w-auto object-contain rounded-xl"
                  />
                ) : (
                  <div className="py-20 text-center">
                    <span className="text-6xl">{selectedCert.icon}</span>
                    <p className="text-sm text-slate-300 mt-4">{selectedCert.title}</p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex justify-end gap-3">
                {selectedCert.credentialUrl && selectedCert.credentialUrl !== '#' && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full text-xs font-bold gold-gradient-bg text-black hover:brightness-110 flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Verifikasi Kredensial</span>
                  </a>
                )}
                
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white"
                >
                  Tutup
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
