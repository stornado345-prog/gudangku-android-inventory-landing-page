import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  AlertTriangle, 
  Calculator, 
  Search, 
  Barcode, 
  PlusCircle,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

export const Features: React.FC = () => {
  const verifiedFeatures = [
    {
      icon: Zap,
      number: '01',
      title: 'Kontrol Kuantitas Instan (+ / -)',
      description:
        'Ubah jumlah stok barang secara langsung dari daftar utama menggunakan tombol stepper responsif tanpa harus membuka menu edit terpisah.',
      highlight: 'Hemat waktu saat bongkar muat barang di gudang',
    },
    {
      icon: AlertTriangle,
      number: '02',
      title: 'Peringatan Stok Kritis (≤ 5)',
      description:
        'Sistem otomatis memberikan tanda visual merah dan status "Stok Kritis" pada barang dengan jumlah 5 unit ke bawah agar restock tidak terlambat.',
      highlight: 'Cegah kehabisan barang terlaris saat order ramai',
    },
    {
      icon: Calculator,
      number: '03',
      title: 'Kalkulasi Valuasi Aset Otomatis',
      description:
        'Ringkasan Total Nilai Aset (Rp) dan Total Jenis Item dihitung ulang secara real-time setiap kali ada penambahan atau pengurangan stok.',
      highlight: 'Visibilitas modal tertanam tanpa kalkulator manual',
    },
    {
      icon: Search,
      number: '04',
      title: 'Pencarian Cepat Berdasarkan Nama & SKU',
      description:
        'Temukan barang di antara ratusan item secara instan saat mengetik huruf nama produk atau kode unik, dilengkapi tombol hapus satu sentuhan.',
      highlight: 'Pencarian berkecepatan tinggi tanpa lag',
    },
    {
      icon: Barcode,
      number: '05',
      title: 'Struktur SKU Unik & Klasifikasi Kategori',
      description:
        'Penyusunan inventaris berbasis kode SKU unik (seperti CLS-KOS-COMB, ELK-SAM-ODG5) dengan tag kategori produk yang rapi dan terstandar.',
      highlight: 'Menghindari salah identifikasi varian produk',
    },
    {
      icon: PlusCircle,
      number: '06',
      title: 'Entri Barang Baru Cepat',
      description:
        'Dialog formulir input ringan untuk mendaftarkan barang baru dengan validasi SKU, pilihan kategori, stok awal, serta harga satuan rupiah.',
      highlight: 'Proses input item baru selesai dalam hitungan detik',
    },
  ];

  return (
    <section id="fitur" className="py-20 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Fitur Terverifikasi Aplikasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Dirancang Khusus untuk Kecepatan Operasional Gudang
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Setiap fitur di bawah ini telah diuji dan berfungsi penuh pada aplikasi Android Gudangku, tanpa gimmick atau fitur semu.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {verifiedFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-cyan-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-cyan-50 text-slate-700 group-hover:text-cyan-700 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                      {feat.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-950 transition-colors mb-2.5">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Practical Impact Line (Zero-pill discipline) */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span className="truncate">{feat.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
