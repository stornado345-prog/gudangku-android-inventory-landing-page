import React from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  TrendingUp, 
  ShieldAlert, 
  Search, 
  CheckCircle2,
  Boxes
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: Clock,
      title: 'Audit Stok Cepat Tanpa Kertas & Komputer Meja',
      description:
        'Staf gudang dapat langsung menyesuaikan kuantitas fisik menggunakan tombol (+ / -) saat memeriksa rak barang, tanpa harus bolak-balik ke meja kerja atau mencatat di lembaran kertas.',
      impact: 'Eliminasi keterlambatan pencatatan mutasi barang',
    },
    {
      icon: ShieldAlert,
      title: 'Cegah Kehabisan Stok Dini (Stockout Prevention)',
      description:
        'Tanda visual otomatis untuk barang ≤ 5 unit langsung menarik perhatian staf. Filter terdedikasi memudahkan pembuatan daftar belanja restock harian secara tepat sasaran.',
      impact: 'Menjaga ketersediaan item terlaris setiap saat',
    },
    {
      icon: TrendingUp,
      title: 'Visibilitas Keuangan & Valuasi Aset Seketika',
      description:
        'Pemilik usaha atau manajer dapat memantau total nilai rupiah dari seluruh barang yang tersimpan di gudang secara real-time tanpa perlu rumus rumit.',
      impact: 'Keputusan modal dan pembelian lebih akurat',
    },
    {
      icon: Search,
      title: 'Pencarian Instan Menghindari Salah Ambil Barang',
      description:
        'Penyaringan produk berkecepatan tinggi dengan nama atau SKU membantu staf menemukan detail spesifikasi dan stok dalam hitungan detik.',
      impact: 'Meminimalisir kesalahan packing dan pengiriman',
    },
  ];

  return (
    <section id="manfaat" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Manfaat Praktis Berbasis Fitur Nyata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Solusi Nyata untuk Kendala Manajemen Gudang Sehari-hari
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Dampak langsung dari alur kerja ringkas yang tertanam pada aplikasi Gudangku, berdasarkan skenario operasional ritel dan pergudangan harian.
          </p>
        </div>

        {/* 2x2 Grid of Concrete Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-cyan-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>{item.impact}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Practical Operational Metric Strip (Ground in concrete verified concepts) */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left border border-slate-800">
          <div>
            <span className="text-xs text-slate-400 block mb-1">Ambang Stok Kritis</span>
            <span className="text-2xl font-bold text-rose-400 tabular-nums">≤ 5 Unit</span>
            <p className="text-xs text-slate-400 mt-1">Peringatan otomatis tanpa perlu konfigurasi rumit</p>
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-1">Mata Uang & Valuasi</span>
            <span className="text-2xl font-bold text-cyan-400">IDR (Rupiah)</span>
            <p className="text-xs text-slate-400 mt-1">Format standardisasi akuntansi lokal Indonesia</p>
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-1">Kecepatan Pembaruan</span>
            <span className="text-2xl font-bold text-emerald-400">Real-Time</span>
            <p className="text-xs text-slate-400 mt-1">Perhitungan nilai aset langsung diperbarui seketika</p>
          </div>
        </div>

      </div>
    </section>
  );
};
