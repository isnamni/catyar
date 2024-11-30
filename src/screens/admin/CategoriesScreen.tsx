import React from 'react';
import { motion } from 'framer-motion';
import CategoryManagement from '../../components/admin/CategoryManagement';
import Card from '../../components/ui/Card';
import { useCategoryStore } from '../../stores/useCategoryStore';

export default function CategoriesScreen() {
  const { categories } = useCategoryStore();
  
  const stats = {
    totalCategories: categories.length,
    activeCategories: categories.filter(cat => cat.isActive).length,
    featuredCategories: categories.filter(cat => cat.isFeatured).length
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          مدیریت دسته‌بندی‌ها
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4">
            <p className="text-sm text-gray-500 mb-1">تعداد کل دسته‌ها</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalCategories}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-500 mb-1">دسته‌های فعال</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.activeCategories}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-500 mb-1">دسته‌های ویژه</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.featuredCategories}
            </p>
          </Card>
        </div>
      </div>

      <CategoryManagement />
    </motion.div>
  );
}