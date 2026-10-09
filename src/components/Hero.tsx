import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Check, Sparkles, Smartphone, ShieldCheck, ExternalLink } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { PROJECT_LINKS } from '../data/links';

interface HeroProps {
  onOpenDownload: () => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onExploreDemo }) => {
  return (
    <section id="beranda" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Subtle atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-100/60 to-blue-100/40 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-sky-200/20 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Clean unboxed category lead-in (Zero-pill discipline) */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-xs bg-cyan-600 inline-block" />
              <span>Aplikasi Android Manajemen Gudang & Inventaris</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              Manajemen Stok Barang{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
                Real-Time
              </span>{' '}
              Langsung di Tangan Anda.
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Gudangku mempermudah operasional gudang dan toko: pantau jumlah stok dengan kontrol cepat, dapatkan peringatan stok kritis otomatis, dan ketahui total valuasi aset usaha secara instan tanpa rumus manual.
            </p>

            {/* Verified Capabilities Checklist (Unboxed text with icons) */}
            <div className="pt-2 pb-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pencatatan SKU Unik & Multi-Kategori</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kontrol Cepat Tambah/Kurang (+ / -)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Peringatan Otomatis Stok Kritis ≤ 5</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kalkulasi Otomatis Valuasi Aset (Rp)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh APK ({PROJECT_LINKS.releaseTag})</span>
              </button>

              <a
                href={PROJECT_LINKS.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current text-slate-800" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Lihat di GitHub</span>
              </a>

              <button
                type="button"
                onClick={onExploreDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Simulator</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Technical Verification Note & Developer Attribution */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                Android 8.0+
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Bebas Iklan & Ringan
              </span>
              <span>·</span>
              <a
                href={PROJECT_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-medium hover:underline"
              >
                <svg className="w-3.5 h-3.5 fill-[#0077b5]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>Developer Link: {PROJECT_LINKS.developerName}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Asset (Interactive Android Device) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Soft glow under phone */}
              <div className="absolute -inset-4 bg-gradient-to-b from-cyan-500/20 to-blue-600/10 rounded-[60px] blur-xl opacity-60 pointer-events-none" />

              {/* The Phone Mockup */}
              <PhoneMockup
                initialScreen="dashboard"
                interactive={true}
                className="transform transition-transform hover:-translate-y-1 duration-300"
              />

              {/* Tip floating card */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-lg px-3.5 py-2 rounded-xl text-xs text-slate-700">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Coba tekan tombol <strong>+ / -</strong> di layar perangkat</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
