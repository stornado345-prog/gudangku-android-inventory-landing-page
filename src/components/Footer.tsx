import React from 'react';
import { Box, Mail, Smartphone, ExternalLink, Heart } from 'lucide-react';
import { PROJECT_LINKS } from '../data/links';

interface FooterProps {
  onOpenDownload: () => void;
  onExploreDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onExploreDemo }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Box className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Gudangku
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Aplikasi mobile Android untuk manajemen inventaris dan stok barang real-time dengan kontrol cepat (+/-), peringatan stok kritis, dan kalkulasi valuasi instan.
            </p>
            <div className="text-slate-400 text-[11px] pt-1">
              Platform: Android OS 8.0+ · Versi: {PROJECT_LINKS.releaseTag} · Dark Mode UI
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="hover:text-cyan-600 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-cyan-600 transition-colors">
                  Fitur Terverifikasi
                </a>
              </li>
              <li>
                <a href="#pratinjau" className="hover:text-cyan-600 transition-colors">
                  Pratinjau Layar & Simulator
                </a>
              </li>
              <li>
                <a href="#manfaat" className="hover:text-cyan-600 transition-colors">
                  Manfaat Operasional
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-cyan-600 transition-colors">
                  Spesifikasi Teknis
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Repositori & Rilis */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Repositori & Rilis
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={PROJECT_LINKS.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={PROJECT_LINKS.githubRelease}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub Release ({PROJECT_LINKS.releaseTag})</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDownload}
                  className="hover:text-cyan-600 transition-colors cursor-pointer text-left"
                >
                  Panduan Pasang Sideload APK
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Developer & LinkedIn Attribution */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Developer Link
            </h4>
            <div className="space-y-1.5">
              <span className="font-bold text-slate-900 block text-sm">
                {PROJECT_LINKS.developerName}
              </span>
              <p className="text-slate-500 text-xs">
                Android & Full-Stack Developer
              </p>
            </div>
            <div className="pt-2">
              <a
                href={PROJECT_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-semibold transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn Portofolio</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Gudangku. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-2">
            <span>Developer Link: <a href={PROJECT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0077b5] hover:underline inline-flex items-center gap-1"><svg className="w-3 h-3 fill-current inline" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>{PROJECT_LINKS.developerName}</a></span>
            <span>·</span>
            <span>Android Warehouse Application</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
