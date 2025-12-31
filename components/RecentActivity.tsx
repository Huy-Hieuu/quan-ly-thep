
import React from 'react';
import { Activity } from '../types';

const activities: Activity[] = [
  { id: '1', title: 'Bán 5 Tấn Thép Vằn', date: 'Hôm nay, 10:23 SA', amount: '$3,200', status: 'Hoàn thành', type: 'sale' },
  { id: '2', title: 'Nhập Thép Hình H', date: 'Hôm qua, 4:15 CH', amount: '120 Tấn', status: 'Chờ Kiểm Tra', type: 'import' },
  { id: '3', title: 'Bán 20 Tấn Thép Cuộn', date: '22 Th10, 11:00 SA', amount: '$15,400', status: 'Hoàn thành', type: 'sale' },
];

const RecentActivity: React.FC = () => {
  return (
    <section className="px-4 pb-24">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 px-1">Hoạt Động Gần Đây</h3>
      <div className="flex flex-col gap-3">
        {activities.map((act) => (
          <div key={act.id} className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:bg-slate-50 dark:hover:bg-slate-750">
            <div className="flex items-center gap-3">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${act.type === 'sale' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-blue-100 dark:bg-blue-900/30 text-primary'}`}>
                <span className="material-symbols-outlined">{act.type === 'sale' ? 'arrow_upward' : 'arrow_downward'}</span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{act.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{act.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900 dark:text-white">{act.amount}</p>
              <p className={`text-xs font-medium ${act.status === 'Hoàn thành' ? 'text-green-600 dark:text-green-400' : 'text-slate-500'}`}>
                {act.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;
