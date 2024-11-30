import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

export interface Category {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  isFeatured: boolean;
}

interface CategoryState {
  categories: Category[];
  addCategory: (category: Omit<Category, 'id'>) => void;
  removeCategory: (id: string) => void;
  toggleCategoryStatus: (id: string) => void;
  toggleCategoryFeatured: (id: string) => void;
  getActiveCategories: () => Category[];
  getFeaturedCategories: () => Category[];
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set, get) => ({
      categories: [
        {
          id: '1',
          name: 'نیاز به غذا',
          description: 'گربه‌هایی که نیاز به غذا دارند',
          isActive: true,
          isFeatured: true
        },
        {
          id: '2',
          name: 'نیاز به درمان',
          description: 'گربه‌های بیمار یا آسیب‌دیده',
          isActive: true,
          isFeatured: true
        },
        {
          id: '3',
          name: 'نیاز به سرپناه',
          description: 'گربه‌هایی که نیاز به محل زندگی دارند',
          isActive: true,
          isFeatured: false
        }
      ],
      addCategory: (category) => {
        const id = nanoid();
        set((state) => ({
          categories: [...state.categories, { ...category, id }]
        }));
      },
      removeCategory: (id) => {
        set((state) => ({
          categories: state.categories.filter((category) => category.id !== id)
        }));
      },
      toggleCategoryStatus: (id) => {
        set((state) => ({
          categories: state.categories.map((category) =>
            category.id === id
              ? { ...category, isActive: !category.isActive }
              : category
          )
        }));
      },
      toggleCategoryFeatured: (id) => {
        set((state) => ({
          categories: state.categories.map((category) =>
            category.id === id
              ? { ...category, isFeatured: !category.isFeatured }
              : category
          )
        }));
      },
      getActiveCategories: () => {
        return get().categories.filter((category) => category.isActive);
      },
      getFeaturedCategories: () => {
        return get().categories.filter(
          (category) => category.isActive && category.isFeatured
        );
      }
    }),
    {
      name: 'category-store'
    }
  )
);