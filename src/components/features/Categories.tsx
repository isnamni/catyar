import React from 'react';
import { Cat, Heart, MapPin, Users } from 'lucide-react';

const categories = [
  { id: 1, name: 'نجات', icon: Heart, color: 'bg-rose-500', count: 25 },
  { id: 2, name: 'غذادهی', icon: Cat, color: 'bg-amber-500', count: 43 },
  { id: 3, name: 'درمان', icon: MapPin, color: 'bg-emerald-500', count: 12 },
  { id: 4, name: 'حامیان', icon: Users, color: 'bg-blue-500', count: 156 }
];

export default function Categories() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">دسته‌بندی‌ها</h2>
        <button className="text-primary-500 hover:text-primary-600">مشاهده همه</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(({ id, name, icon: Icon, color, count }) => (
          <button
            key={id}
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className={`${color} p-2 rounded-xl`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <span className="block text-sm font-medium text-gray-900 dark:text-white">{name}</span>
              <span className="text-xs text-gray-500">{count} مورد</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}