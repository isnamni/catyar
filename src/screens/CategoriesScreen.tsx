import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCatStore } from '../stores/useCatStore';
import CategoryCard from '../components/categories/CategoryCard';
import { CATEGORIES } from '../constants/categories';

export default function CategoriesScreen() {
  const navigate = useNavigate();
  const { getCatsByCategory } = useCatStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      <h1 className="text-2xl font-bold mb-6">دسته‌بندی‌ها</h1>
      
      <div className="space-y-4">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            count={getCatsByCategory(category.id).length}
            onClick={() => navigate(`/categories/${category.id}`)}
          />
        ))}
      </div>
    </motion.div>
  );
}