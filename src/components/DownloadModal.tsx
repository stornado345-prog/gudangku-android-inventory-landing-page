import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  X, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  FileText, 
  ExternalLink
} from 'lucide-react';
import { PROJECT_LINKS } from '../data/links';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownloadNotes = () => {
    setDownloadStarted(true);
    const releaseNotes = `===================================================
GUDANGKU - ANDROID WAREHOUSE & INVENTORY MANAGEMENT
Versi: 1.0.0-RELEASE (Build 2026.1)
Target Platform: Android 8.0 (API 26) - Android 14+
Package: com.gudangku.app
GitHub Release: ${PROJECT_LINKS.githubRelease}
GitHub Repository: ${PROJECT_LINKS.githubRepo}
Developer Link: ${PROJECT_LINKS.linkedin}
Pengembang: ${PROJECT_LINKS.developerName}
===================================================

FITUR TERVERIFIKASI DALAM RILIS INI:
1. Manajemen Stok Real-Time (+ / - stepper buttons)
2. Peringatan Otomatis Stok Kritis (Threshold <= 5)
3. Valuasi Otomatis Total Nilai Aset (Rp) dan Total Item
4. Pencarian Cepat Nama & SKU
5. Dialog Tambah Barang Baru (SKU, Nama, Kategori, Stok, Harga)
6. Tampilan Dark Mode Kontras Tinggi

CARA INSTALASI DI PERANGKAT ANDROID:
1. Unduh file APK langsung dari tautan GitHub Release:
   ${PROJECT_LINKS.githubRelease}
2. Buka Pengaturan > Keamanan > Izinkan Instalasi dari Sumber Tidak Dikenal (Unknown Sources).
3. Buka File Manager, pilih file APK Gudangku, dan tekan "Pasang" (Install).
4. Buka aplikasi Gudangku dan mulai kelola inventaris barang Anda.
===================================================`;

    const blob = new Blob([releaseNotes], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gudangku-app-release-v1.0.0.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Tutup dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-sm">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Unduh Aplikasi Gudangku
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Paket Rilis Android {PROJECT_LINKS.releaseTag} (GitHub Release)
              </p>
            </div>
          </div>

          {/* Release Specifications */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5 text-xs mb-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Target Sistem Operasi:</span>
              <span className="font-semibold text-slate-800">Android 8.0+ (Oreo hingga Android 14)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Versi Tag Rilis:</span>
              <span className="font-mono font-bold text-cyan-700">{PROJECT_LINKS.releaseTag}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Tipe Berkas:</span>
              <span className="font-semibold text-slate-800">APK Android Package</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-200/70">
              <span className="text-slate-500">Keamanan & Lisensi:</span>
              <span className="font-semibold text-emerald-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Terverifikasi Bebas Iklan & Terbuka
              </span>
            </div>
          </div>

          {/* Download Action Buttons */}
          <div className="space-y-3 mb-6">
            <a
              href={PROJECT_LINKS.githubRelease}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 text-white font-semibold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Buka Halaman Rilis GitHub ({PROJECT_LINKS.releaseTag})</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={PROJECT_LINKS.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Repositori GitHub</span>
              </a>

              <button
                type="button"
                onClick={handleDownloadNotes}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>Catatan Rilis (.txt)</span>
              </button>
            </div>

            {downloadStarted && (
              <p className="text-center text-xs text-emerald-600 font-medium animate-in fade-in">
                ✓ Catatan rilis dan instruksi instalasi berhasil diunduh.
              </p>
            )}
          </div>

          {/* Developer Attribution & LinkedIn Profile Card */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0077b5] text-white flex items-center justify-center shadow-xs shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider block">Developer Link</span>
                <span className="font-bold text-white text-sm block">{PROJECT_LINKS.developerName}</span>
              </div>
            </div>
            <a
              href={PROJECT_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <span>Lihat Portofolio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
