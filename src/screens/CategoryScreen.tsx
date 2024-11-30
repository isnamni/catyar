import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CatList from '../components/home/CatList';
import Button from '../components/ui/Button';
import { useCatStore } from '../stores/useCatStore';
import { CATEGORIES } from '../constants/categories';

export default function CategoryScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getCatsByCategory } = useCatStore();
  
  const category = CATEGORIES.find(cat => cat.id === id);
  if (!category) return null;

  const cats = getCatsByCategory(category.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      <div className="mb-6">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate('/categories')}
        >
          <ChevronRight className="w-5 h-5" />
          بازگشت به دسته‌بندی‌ها
        </Button>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{category.icon}</span>
          <h1 className="text-2xl font-bold">{category.label}</h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      {cats.length > 0 ? (
        <CatList cats={cats} />
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            در حال حاضر گربه‌ای در این دسته‌بندی وجود ندارد
          </p>
          <Button
            variant="primary"
            className="mt-4"
            onClick={() => navigate('/report')}
          >
            گزارش گربه جدید
          </Button>
        </div>
      )}
    </motion.div>
  );
}