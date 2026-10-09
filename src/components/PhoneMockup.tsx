import React, { useState } from 'react';
import { 
  Search, 
  X, 
  ListFilter, 
  AlertTriangle, 
  Plus, 
  Minus, 
  Wifi, 
  BatteryMedium,
  CheckCircle2,
  ChevronDown,
  Layers
} from 'lucide-react';
import { INITIAL_INVENTORY, InventoryItem, formatRupiah } from '../data/inventoryData';

export type MockupScreen = 'dashboard' | 'search' | 'add_modal';

interface PhoneMockupProps {
  initialScreen?: MockupScreen;
  interactive?: boolean;
  onScreenChange?: (screen: MockupScreen) => void;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  initialScreen = 'dashboard',
  interactive = true,
  className = '',
}) => {
  const [items, setItems] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [activeFilter, setActiveFilter] = useState<'all' | 'critical'>('all');
  const [searchQuery, setSearchQuery] = useState(initialScreen === 'search' ? 'y' : '');
  const [showAddModal, setShowAddModal] = useState(initialScreen === 'add_modal');

  // Form states for Add Modal
  const [newSku, setNewSku] = useState(initialScreen === 'add_modal' ? 'ELK-91283' : '');
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState<'Pakaian' | 'Makanan & Minuman' | 'Elektronik' | 'Lainnya'>('Elektronik');
  const [newStock, setNewStock] = useState('12');
  const [newPrice, setNewPrice] = useState('350000');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync if initialScreen prop changes
  React.useEffect(() => {
    if (initialScreen === 'search') {
      setSearchQuery('y');
      setShowAddModal(false);
      setActiveFilter('all');
    } else if (initialScreen === 'add_modal') {
      setShowAddModal(true);
      setSearchQuery('');
    } else {
      setSearchQuery('');
      setShowAddModal(false);
      setActiveFilter('all');
    }
  }, [initialScreen]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const updateStock = (id: string, delta: number) => {
    if (!interactive) return;
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updated = Math.max(0, item.stock + delta);
          return { ...item, stock: updated };
        }
        return item;
      })
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSku.trim() || !newName.trim()) {
      triggerToast('Mohon lengkapi SKU dan Nama Barang');
      return;
    }
    const created: InventoryItem = {
      id: `item-${Date.now()}`,
      sku: newSku.toUpperCase().trim(),
      name: newName.trim(),
      category: newCategory,
      stock: parseInt(newStock) || 0,
      price: parseInt(newPrice) || 0,
    };
    setItems((prev) => [created, ...prev]);
    setShowAddModal(false);
    setNewName('');
    setNewSku('');
    triggerToast(`Barang ${created.sku} berhasil disimpan`);
  };

  // Filter items
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' ? true : item.stock <= 5;
    return matchesSearch && matchesFilter;
  });

  // Calculate live values
  const totalItemCount = filteredItems.length;
  const totalAssetValue = filteredItems.reduce((acc, curr) => acc + curr.stock * curr.price, 0);

  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Outer Phone Shell */}
      <div className="relative w-[310px] sm:w-[340px] md:w-[360px] h-[670px] sm:h-[720px] bg-[#121820] rounded-[48px] p-3 shadow-2xl border-4 border-slate-700/60 ring-1 ring-white/10">
        {/* Physical hardware side buttons */}
        <div className="absolute -left-[7px] top-28 w-[3px] h-9 bg-slate-700 rounded-l" />
        <div className="absolute -left-[7px] top-40 w-[3px] h-12 bg-slate-700 rounded-l" />
        <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-slate-700 rounded-r" />

        {/* Screen Bezel */}
        <div className="relative w-full h-full bg-[#0a111a] rounded-[40px] overflow-hidden flex flex-col font-sans text-slate-100 border border-slate-800/80">
          
          {/* Top Status Bar */}
          <div className="pt-2 px-6 pb-1 flex items-center justify-between text-[11px] text-slate-400 font-medium tracking-wide z-20">
            <div className="flex items-center gap-1.5">
              <span>00.07</span>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            </div>
            
            {/* Camera cutout */}
            <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-800" />

            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-semibold text-slate-400">VoLTE</span>
              <Wifi className="w-3 h-3 text-slate-400" />
              <BatteryMedium className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 pt-2 pb-3">
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center justify-between">
              <span>Gudangku</span>
              {interactive && (
                <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  Live Mode
                </span>
              )}
            </h1>
            <p className="text-xs text-slate-400">Manajemen Stok Barang Real-Time</p>
          </div>

          {/* Search Box */}
          <div className="px-5 pb-3">
            <div className="relative flex items-center bg-[#131e2c] border border-cyan-900/60 rounded-xl px-3 py-2 text-sm focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500/40 transition-colors">
              <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                disabled={!interactive}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan nama barang..."
                className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-slate-400 hover:text-white p-0.5"
                  title="Hapus pencarian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="px-5 pb-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => interactive && setActiveFilter('all')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-600/70'
                  : 'bg-[#131e2c] text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <ListFilter className="w-3 h-3" />
              <span>Semua Barang</span>
            </button>

            <button
              type="button"
              onClick={() => interactive && setActiveFilter('critical')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                activeFilter === 'critical'
                  ? 'bg-rose-950/80 text-rose-300 border border-rose-600/70'
                  : 'bg-[#131e2c] text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              <span>Stok Kritis (≤ 5)</span>
            </button>
          </div>

          {/* KPI Summary Cards */}
          <div className="px-5 pb-3 grid grid-cols-2 gap-2.5">
            <div className="bg-[#101a26] border border-slate-800 rounded-xl p-2.5">
              <span className="text-[10px] text-slate-400 block mb-0.5">Total Item</span>
              <span className="text-sm font-bold text-white tabular-nums">
                {totalItemCount} Jenis
              </span>
            </div>

            <div className="bg-[#101a26] border border-slate-800 rounded-xl p-2.5">
              <span className="text-[10px] text-slate-400 block mb-0.5">Total Nilai Aset</span>
              <span className="text-xs font-bold text-cyan-400 truncate block tabular-nums">
                {formatRupiah(totalAssetValue)}
              </span>
            </div>
          </div>

          {/* Scrollable Item List */}
          <div className="flex-1 px-5 pb-16 overflow-y-auto space-y-2.5 text-xs scrollbar-none">
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-slate-500">
                <Layers className="w-8 h-8 mx-auto mb-2 opacity-40 text-slate-400" />
                <p className="text-xs">Tidak ada barang yang cocok</p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-cyan-400 hover:underline text-[11px]"
                  >
                    Reset Pencarian
                  </button>
                )}
              </div>
            ) : (
              filteredItems.map((item) => {
                const isCritical = item.stock <= 5;
                return (
                  <div
                    key={item.id}
                    className={`bg-[#101a26] rounded-xl p-3 border transition-all ${
                      isCritical
                        ? 'border-rose-900/60 shadow-[0_0_12px_rgba(225,29,72,0.12)]'
                        : 'border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    {/* Top line: SKU and Status Badge */}
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span className="font-mono text-slate-400 tracking-wider">
                        {item.sku}
                      </span>
                      <span
                        className={`flex items-center gap-1 font-medium px-1.5 py-0.5 rounded text-[10px] ${
                          isCritical
                            ? 'bg-rose-950/60 text-rose-400 border border-rose-900/50'
                            : 'bg-emerald-950/60 text-emerald-400 border border-emerald-900/50'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCritical ? 'bg-rose-500' : 'bg-emerald-400'
                          }`}
                        />
                        {isCritical ? 'Stok Kritis' : 'Sedia'}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xs font-semibold text-white mb-2 leading-snug">
                      {item.name}
                    </h2>

                    {/* Bottom Line: Category, Price & Quantity Stepper */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="inline-block self-start text-[9px] px-2 py-0.5 rounded bg-[#162736] text-teal-300 border border-teal-800/40">
                          {item.category}
                        </span>
                        <span className="text-xs font-bold text-cyan-400 tabular-nums">
                          {formatRupiah(item.price)}
                        </span>
                      </div>

                      {/* Stepper controls */}
                      <div className="flex items-center bg-[#152332] rounded-lg p-0.5 border border-slate-700/80">
                        <button
                          type="button"
                          disabled={!interactive || item.stock <= 0}
                          onClick={() => updateStock(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
                          title="Kurangi stok"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-bold text-xs text-white tabular-nums">
                          {item.stock}
                        </span>
                        <button
                          type="button"
                          disabled={!interactive}
                          onClick={() => updateStock(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                          title="Tambah stok"
                        >
                          <Plus className="w-3 h-3 text-cyan-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Floating Action Button (FAB) */}
          <button
            type="button"
            onClick={() => interactive && setShowAddModal(true)}
            className="absolute bottom-12 right-5 w-11 h-11 rounded-xl bg-teal-600 hover:bg-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-900/40 border border-teal-400/30 transition-transform active:scale-95 z-30"
            title="Tambah Barang Baru"
          >
            <Plus className="w-5 h-5" />
          </button>

          {/* Android Bottom Navigation Bar */}
          <div className="absolute bottom-0 inset-x-0 h-9 bg-[#080d14] flex items-center justify-around px-12 text-slate-500 z-20">
            <div className="w-3.5 h-3.5 border-l-2 border-b-2 border-slate-500 rotate-45 transform" />
            <div className="w-3 h-3 rounded-full border-2 border-slate-500" />
            <div className="w-3 h-3 border-2 border-slate-500 rounded-xs" />
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="absolute top-14 inset-x-4 bg-slate-900/95 text-white border border-cyan-500/50 rounded-lg p-2.5 shadow-xl text-center text-xs flex items-center justify-center gap-2 z-50 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Add Item Modal Overlay (Matches Screenshot 3) */}
          {showAddModal && (
            <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 z-40 animate-in fade-in">
              <div className="w-full bg-[#111c28] border border-cyan-800/70 rounded-2xl p-4 shadow-2xl text-left">
                <h2 className="text-sm font-bold text-cyan-400 mb-3">
                  Tambah Barang Baru
                </h2>

                <form onSubmit={handleAddItem} className="space-y-2.5">
                  <div>
                    <label className="block text-[10px] text-cyan-400 font-medium mb-1">
                      Kode SKU (Unique)
                    </label>
                    <input
                      type="text"
                      value={newSku}
                      onChange={(e) => setNewSku(e.target.value)}
                      placeholder="Contoh: ELK-91283"
                      className="w-full bg-[#0a111a] border border-cyan-500/70 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Nama Barang"
                      className="w-full bg-[#0a111a] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-700"
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full appearance-none bg-[#0a111a] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-slate-700 pr-8"
                    >
                      <option value="Elektronik">Elektronik</option>
                      <option value="Pakaian">Pakaian</option>
                      <option value="Makanan & Minuman">Makanan & Minuman</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        type="number"
                        value={newStock}
                        onChange={(e) => setNewStock(e.target.value)}
                        placeholder="Stok"
                        className="w-full bg-[#0a111a] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-700"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        placeholder="Harga (Rp)"
                        className="w-full bg-[#0a111a] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-700"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="text-xs text-cyan-400 hover:text-cyan-300 px-2 py-1"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-1.5 rounded-lg text-xs transition-colors"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
