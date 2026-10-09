import React from 'react';
import { 
  Smartphone, 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Palette,
  HardDrive,
  ExternalLink,
  GitBranch
} from 'lucide-react';
import { PROJECT_LINKS } from '../data/links';

export const ProjectTech: React.FC = () => {
  const technicalSpecs = [
    {
      label: 'Target Platform',
      value: 'Android OS (v8.0+ / API Level 26+)',
      detail: 'Mendukung perangkat smartphone dan scanner genggam Android standar.',
    },
    {
      label: 'Antarmuka Pengguna (UI)',
      value: 'Dark Mode Kontras Tinggi & Material UI',
      detail: 'Dirancang ergonomis untuk mengurangi kelelahan mata di pencahayaan gudang.',
    },
    {
      label: 'Manajemen Status (State)',
      value: 'Sinkronisasi Reaktif Real-Time',
      detail: 'Metrik Total Item dan Total Nilai Aset diperbarui instan tanpa jeda polling.',
    },
    {
      label: 'Penyimpanan Data',
      value: 'Lokal / Offline-Ready Database',
      detail: 'Mendukung operasional di area gudang dengan konektivitas sinyal terbatas.',
    },
    {
      label: 'Struktur Data SKU',
      value: 'Indexed Unique SKU & Categories',
      detail: 'Pencarian cepat berdasar kode SKU alfanumerik serta klasifikasi multi-kategori.',
    },
    {
      label: 'Format Finansial',
      value: 'Standar Akuntansi Rupiah (IDR)',
      detail: 'Format numerik Indonesia dengan pemisah ribuan otomatis (Rp XX.XXX.XXX).',
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Spesifikasi Teknis & Portofolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Tentang Proyek Aplikasi Gudangku
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Gudangku dikembangkan sebagai solusi perangkat lunak mobile untuk mendemonstrasikan keandalan manajemen state reaktif, desain berorientasi pengguna, dan penanganan inventaris di perangkat Android.
          </p>
        </div>

        {/* 2-Column Split: Context & Architecture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Project Overview & Developer Spotlight */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-800">
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-900/60 text-cyan-400 flex items-center justify-center mb-6 border border-cyan-700/40">
                <Code2 className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Filosofi Rekayasa Aplikasi
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Aplikasi gudang konvensional kerap dipenuhi tombol berlapis, alur navigasi panjang, dan waktu loading yang memperlambat staf di lapangan.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Gudangku memangkas friksi tersebut menjadi alur satu halaman: cari barang, lihat status stok kritis, tekan tombol <strong>+ / -</strong> untuk koreksi instan, atau buka modal cepat untuk mendaftarkan barang baru.
              </p>

              {/* Developer Badge */}
              <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700/80 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider block">Developer Link</span>
                  <span className="text-sm font-bold text-white">{PROJECT_LINKS.developerName}</span>
                </div>
                <a
                  href={PROJECT_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Latency Stock Mutation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>One-Hand Ergonomics untuk Staf Gudang</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Repositori Publik & Open Source</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specification Matrix & Repo Card */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-700" />
                <span>Matriks Parameter & Desain Teknis</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalSpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs"
                  >
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      {spec.value}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {spec.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Repository & Release Verification Bar */}
            <div className="mt-6 pt-5 border-t border-slate-200 space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">stornado345-prog/Gudangku</span>
                    <span className="text-[11px] text-slate-500 font-mono">Release: tag/{PROJECT_LINKS.releaseTag}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={PROJECT_LINKS.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Source Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={PROJECT_LINKS.githubRelease}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>Rilis {PROJECT_LINKS.releaseTag}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
