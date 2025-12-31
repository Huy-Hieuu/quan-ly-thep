
export type ViewMode = 'dashboard' | 'sale' | 'import';

export interface Stat {
  label: string;
  value: string;
  unit?: string;
  trend?: string;
  type: 'inventory' | 'sales' | 'import' | 'revenue';
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  amount: string;
  status: string;
  type: 'sale' | 'import';
}

export interface InventoryItem {
  name: string;
  current: number;
  capacity: number;
  color: string;
  icon: string;
}
