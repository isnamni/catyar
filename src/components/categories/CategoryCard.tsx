import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { CategoryInfo } from '../../types/cat';

interface CategoryCardProps {
  category: CategoryInfo;
  count: number;
  onClick: () => void;
}

export default function CategoryCard({ category, count, onClick }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <Card className="p-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <div className={`${category.color} bg-opacity-10 dark:bg-opacity-20 p-3 rounded-full`}>
            <span className="text-2xl">{category.icon}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {category.label}
              </h3>
              {count > 0 && (
                <span className={`${category.color} text-white text-xs px-2 py-0.5 rounded-full`}>
                  {count} مورد
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {category.description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}