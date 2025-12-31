
import React, { useState } from 'react';

interface ImportFormProps {
  onClose: () => void;
}

const ImportForm: React.FC<ImportFormProps> = ({ onClose }) => {
  const [purpose, setPurpose] = useState('Lưỡi câu');

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <button onClick={onClose} className="text-slate-500 dark:text-slate-400 text-base font-medium hover:text-primary dark:hover:text-primary transition-colors">
          Hủy
        </button>
        <h1 className="text-lg font-bold tracking-tight text-center text-slate-900 dark:text-white">Nhập Thép</h1>
        <button onClick={onClose} className="text-primary text-base font-bold hover:text-primary/80 transition-colors">
          Lưu
        </button>
      </header>

      <main className="flex-1 pb-24 max-w-lg mx-auto w-full">
        <div className="mt-4">
          <h3 className="px-4 pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Thông tin chung</h3>
          <div className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 sm:rounded-xl sm:border sm:mx-4 sm:shadow-sm">
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <label className="block text-xs font-medium mb-1.5 text-slate-500 dark:text-slate-400">Ngày nhập</label>
              <div className="relative flex items-center">
                <input className="w-full bg-transparent border-0 p-0 text-slate-900 dark:text-white text-lg font-medium focus:ring-0" defaultValue="24/10/2023" readOnly />
                <span className="material-symbols-outlined text-primary ml-auto cursor-pointer">calendar_month</span>
              </div>
            </div>
            <div className="px-4 py-4">
              <label className="block text-xs font-medium mb-3 text-slate-500 dark:text-slate-400">Mục đích sử dụng</label>
              <div className="flex flex-wrap gap-2">
                {['Lưỡi câu', 'Đế cựa', 'Chĩa kích'].map((p) => (
                  <button 
                    key={p}
                    onClick={() => setPurpose(p)}
                    className={`flex items-center justify-center px-4 py-2 rounded-full font-medium text-sm transition-all ${purpose === p ? 'bg-primary text-white shadow-sm ring-2 ring-primary ring-offset-1 dark:ring-offset-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="px-4 pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Thông số kỹ thuật</h3>
          <div className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 sm:rounded-xl sm:border sm:mx-4 sm:shadow-sm divide-y divide-slate-200 dark:divide-slate-800">
            <div className="px-4 py-3 flex flex-col">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Loại thép</label>
              <div className="relative flex items-center">
                <select className="w-full bg-transparent border-none p-0 pr-8 text-slate-900 dark:text-white text-lg font-medium focus:ring-0 appearance-none cursor-pointer">
                  <option>Inox 304</option>
                  <option>Inox 316</option>
                  <option>Thép Carbon</option>
                  <option>Thép Cường Độ Cao</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="px-4 py-3 flex flex-col">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Ly thép (Gauge)</label>
              <div className="relative flex items-center">
                <select className="w-full bg-transparent border-none p-0 pr-8 text-slate-900 dark:text-white text-lg font-medium focus:ring-0 appearance-none cursor-pointer">
                  <option>2.5 mm</option>
                  <option>3.0 mm</option>
                  <option>3.5 mm</option>
                  <option>4.0 mm</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="px-4 pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Thanh toán</h3>
          <div className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 sm:rounded-xl sm:border sm:mx-4 sm:shadow-sm divide-y divide-slate-200 dark:divide-slate-800">
            <div className="px-4 py-3 flex flex-col">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Số lượng</label>
              <div className="flex items-center">
                <input className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white text-lg font-medium focus:ring-0" type="number" defaultValue="100"/>
                <span className="text-slate-500 dark:text-slate-400 font-medium ml-2">kg</span>
              </div>
            </div>
            <div className="px-4 py-3 flex flex-col bg-primary/5 dark:bg-primary/10">
              <label className="text-xs font-medium text-primary mb-1 flex items-center gap-1">Giá nhập / kg <span className="material-symbols-outlined text-[14px]">price_check</span></label>
              <div className="flex items-center">
                <input className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white text-lg font-bold text-primary focus:ring-0" type="number" defaultValue="45000"/>
                <span className="text-slate-500 dark:text-slate-400 font-medium ml-2">đ</span>
              </div>
            </div>
            <div className="px-4 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/30">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Tổng tiền hàng</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">4.500.000 <span className="text-sm font-normal text-slate-500">đ</span></span>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4">
          <button onClick={onClose} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-transform active:scale-[0.98]">
            Lưu phiếu nhập
          </button>
        </div>
      </main>
    </div>
  );
};

export default ImportForm;
