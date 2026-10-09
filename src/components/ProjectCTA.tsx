import React from 'react';
import { Download, ArrowUp, Mail, Smartphone, ExternalLink } from 'lucide-react';
import { PROJECT_LINKS } from '../data/links';

interface ProjectCTAProps {
  onOpenDownload: () => void;
  onExploreDemo: () => void;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({ onOpenDownload, onExploreDemo }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-xl border border-slate-800">
          
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              <Smartphone className="w-4 h-4" />
              <span>Aplikasi Gudangku Android</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              Siap Mengoptimalkan Pencatatan Stok Anda?
            </h2>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Unduh paket rilis APK dari GitHub Releases atau coba langsung simulator interaktif untuk merasakan kecepatan manajemen stok barang real-time.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PROJECT_LINKS.githubRelease}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white font-semibold rounded-xl text-sm shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Rilis GitHub ({PROJECT_LINKS.releaseTag})</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={PROJECT_LINKS.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold rounded-xl text-sm border border-slate-700 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Repositori GitHub</span>
              </a>

              <button
                type="button"
                onClick={onExploreDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-slate-400 hover:text-white font-medium text-xs transition-colors cursor-pointer"
              >
                <span>Simulator</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Developer profile attribution */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center text-xs text-slate-400">
              <a
                href={PROJECT_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-[#0077b5] hover:bg-[#006097] px-4 py-2 rounded-xl font-medium transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>Developer Link: {PROJECT_LINKS.developerName} (LinkedIn)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
