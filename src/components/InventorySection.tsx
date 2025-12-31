
import React from 'react';
import { InventoryItem } from '../types';

const items: InventoryItem[] = [
  { name: 'Thép Thanh', current: 500, capacity: 700, color: 'bg-primary', icon: 'grid_4x4' },
  { name: 'Thép Cuộn', current: 200, capacity: 650, color: 'bg-orange-500', icon: 'radio_button_unchecked' }
];

const InventorySection: React.FC = () => {
  return (
    <section className="px-4 pb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Chi Tiết Tồn Kho</h3>
        <button className="text-sm font-medium text-primary hover:text-blue-600">Xem Tất Cả</button>
      </div>
      <div className="flex flex-col gap-4 p-5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">{item.icon}</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{item.name}</span>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {item.current} Tấn <span className="text-xs font-normal text-slate-500">/ {item.capacity} sức chứa</span>
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${item.color} rounded-full transition-all duration-500`}
                style={{ width: `${(item.current / item.capacity) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InventorySection;
