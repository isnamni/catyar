import React from 'react';
import { Heart, Stethoscope, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCatStore } from '../../stores/useCatStore';
import { CatCondition } from '../../types/cat';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'needsFood',
    icon: Heart,
    label: 'نیاز به غذا',
    color: 'bg-rose-500',
    lightColor: 'bg-rose-50'
  },
  {
    id: 'needsMedical',
    icon: Stethoscope,
    label: 'نیاز به درمان',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50'
  },
  {
    id: 'needsShelter',
    icon: Home,
    label: 'نیاز به سرپناه',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50'
  }
];

export default function CatCategories() {
  const navigate = useNavigate();
  const { getCatsByCategory } = useCatStore();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">دسته‌بندی‌ها</h2>
        <button 
          onClick={() => navigate('/categories')}
          className="text-sm text-primary-500 hover:text-primary-600"
        >
          مشاهده همه
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {categories.map(({ id, icon: Icon, label, color, lightColor }) => {
          const count = getCatsByCategory(id as CatCondition).length;
          
          return (
            <motion.button
              key={id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/categories')}
              className="relative flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className={`${lightColor} dark:${color} dark:bg-opacity-10 p-3 rounded-full mb-2`}>
                <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {label}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {count} مورد
              </span>
              
              {count > 0 && (
                <span className="absolute -top-2 -right-1 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}