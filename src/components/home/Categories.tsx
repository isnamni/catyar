import React from 'react';
import { Cat, Heart, Stethoscope } from 'lucide-react';

const categories = [
  { id: 1, name: 'نجات', icon: Heart, count: 25, color: 'bg-rose-500' },
  { id: 2, name: 'غذادهی', icon: Cat, count: 43, color: 'bg-amber-500' },
  { id: 3, name: 'درمان', icon: Stethoscope, count: 12, color: 'bg-emerald-500' }
];

export default function Categories() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">دسته‌بندی‌ها</h2>
        <button className="text-sm text-primary-500 hover:text-primary-600">
          مشاهده همه
        </button>
      </div>
      
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(({ id, name, icon: Icon, count, color }) => (
          <button
            key={id}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#25262B] rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <span className={`${color} p-1.5 rounded-full`}>
              <Icon className="w-4 h-4 text-white" />
            </span>
            <span className="text-sm text-gray-900 dark:text-white whitespace-nowrap">
              {name} ({count})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}