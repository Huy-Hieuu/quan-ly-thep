
import React, { useState, useEffect } from 'react';
import { getInventoryInsights } from '../services/geminiService';

const AIInsights: React.FC = () => {
  const [insights, setInsights] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInsights = async () => {
    setLoading(true);
    // Mock data based on current state
    const data = { stock: 1240, trends: "+2%", categories: { bar: 500, coil: 200 } };
    const res = await getInventoryInsights(data);
    setInsights(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <section className="px-4 pb-6">
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="material-symbols-outlined text-purple-500 filled">bolt</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">SteelAI Insights</h3>
      </div>
      <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-purple-100 dark:border-purple-900/30">
        {loading ? (
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {insights.length > 0 ? insights.map((insight, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{insight}</p>
              </div>
            )) : (
               <p className="text-sm text-slate-500">Không có đề xuất mới.</p>
            )}
            <button 
              onClick={fetchInsights}
              className="mt-2 text-xs font-bold text-primary flex items-center gap-1 self-end hover:underline"
            >
              <span className="material-symbols-outlined text-sm">refresh</span>
              Cập nhật phân tích
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIInsights;
