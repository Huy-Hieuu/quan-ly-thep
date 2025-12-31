
import React, { useState } from 'react';
import { Stat, ViewMode } from './types';
import StatCard from './components/StatCard';
import InventorySection from './components/InventorySection';
import RecentActivity from './components/RecentActivity';
import AIInsights from './components/AIInsights';
import SaleForm from './components/SaleForm';
import ImportForm from './components/ImportForm';

const stats: Stat[] = [
  { label: 'Tồn kho', value: '1,240', unit: 'Tấn', trend: '+2%', type: 'inventory' },
  { label: 'Doanh số', value: '$12,500', trend: '--', type: 'sales' },
  { label: 'Nhập hàng', value: '450', unit: 'Tấn', trend: '+15%', type: 'import' },
  { label: 'Doanh thu', value: '$85k', trend: '+8%', type: 'revenue' },
];

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>('dashboard');

  const renderContent = () => {
    switch (view) {
      case 'sale':
        return <SaleForm onClose={() => setView('dashboard')} />;
      case 'import':
        return <ImportForm onClose={() => setView('dashboard')} />;
      default:
        return (
          <>
            {/* Header */}
            <header className="flex items-center justify-between px-4 py-4 sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
              <h2 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">SteelTracker</h2>
              <button className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-background-dark"></span>
              </button>
            </header>

            {/* Profile Section */}
            <section className="px-4 py-2">
              <div className="flex items-center gap-4">
                <div 
                  className="h-14 w-14 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center shadow-sm border-2 border-white dark:border-slate-600" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQbaggX5N_e-nGIKjAP81zx50yGpMSOxXMutyiSDTiknHbgJPiLfBnQHqX7AeZrD-QtKZh3Prj6QyeVfkashqUdvdd90fqSx9rRugDHWdkE04Kk3J7NpchlplaBkip8Ckiq3-xnPTdU4P6pnXrq0D58LMuOntXPCx3s9kdebiriBYvy7BEZiDaLdExAFWeVtKXowW0G-F08ESRMCmNYroSmkV4m2ixRGwlgB7BoaM1UWz-U80WFfdyjgTxzoeMpQ6QrSC4h_vbOUM")' }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">24 Th10, 2023</p>
                  <h1 className="text-xl font-bold leading-tight text-slate-900 dark:text-white">Chào buổi sáng, Quản lý</h1>
                </div>
              </div>
            </section>

            {/* Summary Cards */}
            <section className="px-4 py-6">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => <StatCard key={i} stat={stat} />)}
              </div>
            </section>

            {/* Action Buttons */}
            <section className="px-4 pb-6">
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setView('import')}
                  className="flex flex-col items-center justify-center gap-2 h-20 rounded-xl bg-primary shadow-lg shadow-blue-500/30 hover:bg-blue-600 active:scale-95 transition-all text-white group"
                >
                  <span className="material-symbols-outlined text-[28px] group-hover:translate-y-0.5 transition-transform">download</span>
                  <span className="text-sm font-bold">Nhập Hàng</span>
                </button>
                <button 
                  onClick={() => setView('sale')}
                  className="flex flex-col items-center justify-center gap-2 h-20 rounded-xl bg-slate-900 dark:bg-slate-700 text-white shadow-lg hover:bg-slate-800 active:scale-95 transition-all group"
                >
                  <span className="material-symbols-outlined text-[28px] group-hover:-translate-y-0.5 transition-transform">upload</span>
                  <span className="text-sm font-bold">Bán Hàng</span>
                </button>
              </div>
            </section>

            <AIInsights />
            <InventorySection />
            <RecentActivity />

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-3 z-30 pb-safe">
              <div className="flex justify-between items-center max-w-lg mx-auto">
                <button onClick={() => setView('dashboard')} className="flex flex-col items-center gap-1 text-primary w-12">
                  <span className="material-symbols-outlined text-[24px] filled">dashboard</span>
                  <span className="text-[10px] font-bold">Trang Chủ</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 w-12 transition-colors">
                  <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                  <span className="text-[10px] font-medium">Kho</span>
                </button>
                <div className="relative -top-6">
                  <button onClick={() => setView('sale')} className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg shadow-slate-900/20 active:scale-90 transition-all border-4 border-background-light dark:border-background-dark">
                    <span className="material-symbols-outlined text-[28px]">add</span>
                  </button>
                </div>
                <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 w-12 transition-colors">
                  <span className="material-symbols-outlined text-[24px]">bar_chart</span>
                  <span className="text-[10px] font-medium">Báo Cáo</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 w-12 transition-colors">
                  <span className="material-symbols-outlined text-[24px]">settings</span>
                  <span className="text-[10px] font-medium">Cài Đặt</span>
                </button>
              </div>
            </nav>
          </>
        );
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {renderContent()}
    </div>
  );
};

export default App;
