
import React from 'react';
import { Stat } from '../types';

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const getIcon = () => {
    switch (stat.type) {
      case 'inventory': return { name: 'inventory_2', color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/30' };
      case 'sales': return { name: 'attach_money', color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/30' };
      case 'import': return { name: 'local_shipping', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/30' };
      case 'revenue': return { name: 'account_balance_wallet', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/30' };
    }
  };

  const iconInfo = getIcon();

  return (
    <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center gap-2 mb-1">
        <div className={`p-1.5 rounded-md ${iconInfo.bg} ${iconInfo.color}`}>
          <span className="material-symbols-outlined text-[20px]">{iconInfo.name}</span>
        </div>
        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</span>
      </div>
      <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
        {stat.value} {stat.unit && <span className="text-sm font-medium text-slate-500">{stat.unit}</span>}
      </p>
      <div className={`flex items-center gap-1 text-xs font-bold ${stat.trend?.includes('--') ? 'text-slate-400' : 'text-green-600 dark:text-green-400'}`}>
        {!stat.trend?.includes('--') && <span className="material-symbols-outlined text-[14px]">trending_up</span>}
        <span>{stat.trend}</span>
        {stat.trend?.includes('--') && <span className="font-normal ml-1">so với hôm qua</span>}
      </div>
    </div>
  );
};

export default StatCard;
