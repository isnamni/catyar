import React, { useState } from 'react';
import { Plus, Trash2, Star, ToggleLeft, ToggleRight } from 'lucide-react';
import { useCategoryStore } from '../../stores/useCategoryStore';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function CategoryManagement() {
  const { categories, addCategory, removeCategory, toggleCategoryStatus, toggleCategoryFeatured } = useCategoryStore();
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.name) {
      addCategory({ ...newCategory, isActive: true, isFeatured: false });
      setNewCategory({ name: '', description: '' });
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        مدیریت دسته‌بندی‌ها
      </h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              نام دسته‌بندی
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              value={newCategory.name}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              placeholder="مثال: نیاز به غذا"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              توضیحات
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              value={newCategory.description}
              onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
              placeholder="توضیحات دسته‌بندی..."
              rows={3}
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          <Plus className="w-5 h-5" />
          افزودن دسته‌بندی جدید
        </Button>
      </form>

      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {category.name}
              </h3>
              {category.description && (
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCategoryFeatured(category.id)}
              >
                <Star className={`w-5 h-5 ${
                  category.isFeatured ? 'text-amber-500 fill-amber-500' : 'text-gray-400'
                }`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCategoryStatus(category.id)}
              >
                {category.isActive ? (
                  <ToggleRight className="w-5 h-5 text-primary-500" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-gray-400" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeCategory(category.id)}
              >
                <Trash2 className="w-5 h-5 text-rose-500" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}