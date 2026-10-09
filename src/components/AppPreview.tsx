import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  Sparkles, 
  Eye, 
  Smartphone, 
  Search, 
  PlusCircle, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { PhoneMockup, MockupScreen } from './PhoneMockup';

export const AppPreview: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<MockupScreen>('dashboard');
  const [isInteractive, setIsInteractive] = useState<boolean>(true);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const screensInfo: Record<
    MockupScreen,
    {
      title: string;
      originalName: string;
      caption: string;
      highlights: { label: string; detail: string }[];
    }
  > = {
    dashboard: {
      title: 'Dasbor Utama & Kontrol Stok',
      originalName: 'iPhone 14 Pro Max.png',
      caption:
        'Tampilan utama aplikasi Gudangku menampilkan 6 jenis item dengan total nilai aset Rp 22.689.000. Menggunakan tema gelap kontras tinggi untuk memudahkan penglihatan staf di area pergudangan.',
      highlights: [
        {
          label: 'Kartu Metrik KPI',
          detail: 'Menampilkan Total Item (6 Jenis) dan Total Nilai Aset (Rp 22.689.000) yang terhitung otomatis.',
        },
        {
          label: 'Filter Cepat',
          detail: 'Dua tombol filter segmented: "Semua Barang" dan "Stok Kritis (≤ 5)" dengan ikon peringatan.',
        },
        {
          label: 'Kontrol Stepper (+ / -)',
          detail: 'Setiap kartu item dilengkapi tombol penyesuaian stok langsung untuk efisiensi audit fisik.',
        },
        {
          label: 'Indikator Status',
          detail: 'Penanda "● Sedia" (hijau) dan "● Stok Kritis" (merah) beserta border kontras untuk item menipis.',
        },
      ],
    },
    search: {
      title: 'Pencarian Instan & Filter Kritis',
      originalName: 'iPhone 14 Pro Max-1.png',
      caption:
        'Ketika pengguna mengetik query pencarian (contoh: "y"), daftar barang langsung terfilter seketika. Total nilai aset otomatis terhitung ulang sesuai hasil pencarian menjadi Rp 9.700.000 (1 Jenis).',
      highlights: [
        {
          label: 'Pencarian Responsif',
          detail: 'Filter langsung beraksi tanpa jeda saat karakter diketikkan, dilengkapi tombol reset "✕".',
        },
        {
          label: 'Valuasi Dinamis',
          detail: 'Metrik Total Nilai Aset seketika beradaptasi menampilkan kalkulasi dari item hasil filter.',
        },
        {
          label: 'Border Peringatan Merah',
          detail: 'Item "Samsung Odyssey G5 34\"" dengan stok 2 unit ditandai dengan border merah peringatan kritis.',
        },
      ],
    },
    add_modal: {
      title: 'Formulir Tambah Barang Baru',
      originalName: 'iPhone 14 Pro Max-2.png',
      caption:
        'Dialog modal melayang (overlay) yang dipicu dari tombol aksi mengambang (+) untuk memasukkan item inventaris baru dengan struktur data yang lengkap dan terstandarisasi.',
      highlights: [
        {
          label: 'Kode SKU Unik',
          detail: 'Field SKU dengan highlight border cyan aktif (contoh: ELK-91283) untuk standardisasi gudang.',
        },
        {
          label: 'Pemilihan Kategori',
          detail: 'Dropdown seleksi kategori (Elektronik, Pakaian, Makanan & Minuman) untuk klasifikasi tertata.',
        },
        {
          label: 'Stok & Harga Satuan',
          detail: 'Dua kolom berdampingan untuk memasukkan kuantitas awal dan harga satuan produk dalam Rupiah.',
        },
        {
          label: 'Aksi Ringkas Batal / Simpan',
          detail: 'Dua tombol aksi di bagian bawah untuk konfirmasi penyimpanan atau pembatalan instan.',
        },
      ],
    },
  };

  const currentInfo = screensInfo[activeScreen];

  return (
    <section id="pratinjau" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Pratinjau Antarmuka Nyata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Tangkapan Layar & Simulator Aplikasi Gudangku
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Menampilkan antarmuka asli dari aplikasi Android. Anda dapat beralih antar layar atau menguji simulator interaktif langsung di peramban.
          </p>
        </div>

        {/* Controls Bar: Screen Selector Tabs & Mode Switch */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          
          {/* Segmented Screen Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveScreen('dashboard')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeScreen === 'dashboard'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Dasbor & Stok
            </button>
            <button
              type="button"
              onClick={() => setActiveScreen('search')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeScreen === 'search'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Pencarian Instan
            </button>
            <button
              type="button"
              onClick={() => setActiveScreen('add_modal')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeScreen === 'add_modal'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3. Modal Tambah Barang
            </button>
          </div>

          {/* Interactive Mode Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-600">
              Mode Simulator:
            </span>
            <button
              type="button"
              onClick={() => setIsInteractive(!isInteractive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isInteractive ? 'bg-cyan-600' : 'bg-slate-300'
              }`}
              title={isInteractive ? 'Nonaktifkan simulator interaktif' : 'Aktifkan simulator interaktif'}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isInteractive ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-xs font-semibold text-slate-800">
              {isInteractive ? 'Interaktif (Bisa Diklik)' : 'Tangkapan Asli'}
            </span>
          </div>

        </div>

        {/* Showcase Grid: Device on Left, In-Depth Breakdown on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Phone Display Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              <PhoneMockup
                key={`${activeScreen}-${isInteractive}`}
                initialScreen={activeScreen}
                interactive={isInteractive}
                className="transition-transform duration-300"
              />

              {/* Action buttons beneath phone */}
              <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Perbesar Layar</span>
                </button>
                <span>·</span>
                <span className="font-mono text-[11px] text-slate-400">
                  {currentInfo.originalName}
                </span>
              </div>
            </div>
          </div>

          {/* Screen Details Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              {/* Screen Title */}
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
                <Smartphone className="w-4 h-4" />
                <span>Dokumentasi Layar #{activeScreen === 'dashboard' ? '1' : activeScreen === 'search' ? '2' : '3'}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                {currentInfo.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {currentInfo.caption}
              </p>

              {/* Verified UI Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Komponen Antarmuka Terverifikasi:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentInfo.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs"
                    >
                      <h5 className="text-xs font-bold text-slate-900 mb-1">
                        {h.label}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {h.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Verification Note */}
              <div className="mt-6 p-4 rounded-xl bg-cyan-50/70 border border-cyan-200/80 flex items-start gap-3">
                <Info className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <div className="text-xs text-cyan-900 leading-relaxed">
                  <strong>Catatan Portofolio:</strong> Semua komponen di atas mengacu 100% pada tangkapan layar asli aplikasi Gudangku Android. Tidak ada modifikasi tampilan semu yang mengada-ada.
                </div>
              </div>

            </div>

            {/* Quick Screen Switching Cards */}
            <div className="grid grid-cols-3 gap-3">
              {(['dashboard', 'search', 'add_modal'] as MockupScreen[]).map((scr, idx) => {
                const info = screensInfo[scr];
                const isActive = activeScreen === scr;
                return (
                  <button
                    key={scr}
                    type="button"
                    onClick={() => setActiveScreen(scr)}
                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block text-[10px] font-mono opacity-70 mb-0.5">
                      Layar 0{idx + 1}
                    </span>
                    <span className="block text-xs font-bold truncate">
                      {info.title.split('&')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* Modal Zoom View */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-md w-full bg-slate-900 rounded-3xl p-4 sm:p-6 text-white border border-slate-800 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {currentInfo.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    File: {currentInfo.originalName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="flex justify-center py-2">
                <PhoneMockup
                  initialScreen={activeScreen}
                  interactive={true}
                  className="scale-90 sm:scale-100"
                />
              </div>

              <div className="text-center pt-3 text-xs text-slate-400">
                Tekan tombol interaktif untuk mencoba fitur secara langsung
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
