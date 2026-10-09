export interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  category: 'Pakaian' | 'Makanan & Minuman' | 'Elektronik' | 'Lainnya';
  stock: number;
  price: number;
}

export const INITIAL_INVENTORY: InventoryItem[] = [
  {
    id: 'item-1',
    sku: 'CLS-KOS-COMB',
    name: 'Kaos Polos Cotton Combed',
    category: 'Pakaian',
    stock: 30,
    price: 75000,
  },
  {
    id: 'item-2',
    sku: 'FNB-IDM-GRGJ',
    name: 'Indomie Goreng Jumbo',
    category: 'Makanan & Minuman',
    stock: 5,
    price: 4000,
  },
  {
    id: 'item-3',
    sku: 'ELK-SAM-ODG5',
    name: 'Samsung Odyssey G5 34"',
    category: 'Elektronik',
    stock: 2,
    price: 4850000,
  },
  {
    id: 'item-4',
    sku: 'FNB-KPS-ABDN',
    name: 'Kopi Susu Gula Aren Botol',
    category: 'Makanan & Minuman',
    stock: 40,
    price: 18000,
  },
  {
    id: 'item-5',
    sku: 'ELK-LOG-MX3S',
    name: 'Logitech MX Master 3S',
    category: 'Elektronik',
    stock: 6,
    price: 1550000,
  },
  {
    id: 'item-6',
    sku: 'CLS-JCK-DNM1',
    name: 'Jaket Denim Vintage',
    category: 'Pakaian',
    stock: 3,
    price: 233000,
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace(/\s+/g, ' ');
}
