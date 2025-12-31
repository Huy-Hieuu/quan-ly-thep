
import React, { useState } from 'react';

interface SaleFormProps {
  onClose: () => void;
}

const SaleForm: React.FC<SaleFormProps> = ({ onClose }) => {
  const [type, setType] = useState<'coil' | 'bar'>('coil');

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white/95 dark:bg-slate-900/95 backdrop-blur px-4 py-3 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <button onClick={onClose} className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white flex-1 text-center">Bán Thép</h2>
        <button onClick={onClose} className="flex h-10 px-4 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md hover:bg-blue-600 transition-colors">
          Lưu
        </button>
      </div>

      <main className="flex-1 flex flex-col gap-6 p-4 pb-12 max-w-lg mx-auto w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Ngày giao dịch</label>
            <div className="relative flex items-center">
              <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" type="date" defaultValue="2023-10-27"/>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Khách hàng</label>
            <div className="relative">
              <select className="w-full appearance-none rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 pl-4 pr-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm">
                <option disabled selected value="">Chọn khách hàng</option>
                <option value="cust1">Xây Dựng Minh Khang</option>
                <option value="cust2">Thép Việt Corp</option>
                <option value="cust3">TMDV An Bình</option>
                <option value="new">+ Thêm khách mới</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-200 dark:bg-slate-800 w-full"></div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">inventory_2</span> Thông Tin Sản Phẩm
          </h3>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button 
              onClick={() => setType('coil')}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${type === 'coil' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              Thép Cuộn
            </button>
            <button 
              onClick={() => setType('bar')}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${type === 'bar' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              Thép Thanh
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Ly thép (mm)</label>
              <div className="relative">
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 pl-4 pr-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="0.0" step="0.1" type="number"/>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">mm</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Chiều dài</label>
              <div className="relative">
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 pl-4 pr-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="0" type="number"/>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">m</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Số lượng (kg)</label>
            <div className="relative group">
              <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-14 pl-4 pr-12 text-lg font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="0" type="number"/>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base font-bold text-slate-400 group-focus-within:text-primary">kg</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-200 dark:bg-slate-800 w-full"></div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">payments</span> Giá & Doanh Thu
          </h3>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Giá bán mỗi kg</label>
            <div className="relative group">
              <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 pl-12 pr-14 text-right font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" defaultValue="0"/>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">
                <span className="material-symbols-outlined">attach_money</span>
              </div>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">VND</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 text-lg">local_shipping</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Phí vận chuyển</span>
              </div>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">6k/kg</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs text-slate-500 dark:text-slate-500 italic">Tự động tính theo khối lượng</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">12.000.000 <span className="text-xs font-normal text-slate-500">VND</span></span>
            </div>
          </div>

          <div className="rounded-xl bg-primary/5 p-5 border border-primary/20 flex flex-col items-center gap-1">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Tổng Doanh Thu</span>
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">145.500.000</span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">VND</span>
          </div>
        </div>

        <div className="h-px bg-slate-200 dark:bg-slate-800 w-full"></div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span> Thanh Toán
          </h3>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Số tiền khách đã trả</label>
            <div className="relative group">
              <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-12 pl-4 pr-14 text-right font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="0"/>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">VND</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-red-700 dark:text-red-400">Nợ còn lại</span>
              <span className="text-xs text-red-500/80 dark:text-red-400/70">Số dư chưa thanh toán</span>
            </div>
            <div className="text-right">
              <span className="block text-xl font-bold text-red-700 dark:text-red-400">45.500.000</span>
              <span className="text-xs font-medium text-red-700/70 dark:text-red-400/70">VND</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SaleForm;
