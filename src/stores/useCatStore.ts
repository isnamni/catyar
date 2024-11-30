import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';
import { CatReport, CatFormData, CatCondition } from '../types/cat';

interface CatState {
  cats: CatReport[];
  likedCats: Set<string>;
  addCat: (formData: CatFormData) => void;
  likeCat: (catId: string) => void;
  getCatsByCategory: (category: CatCondition) => CatReport[];
}

export const useCatStore = create<CatState>()(
  persist(
    (set, get) => ({
      cats: [
        {
          id: '1',
          image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
          location: {
            name: 'پارک لاله',
            latitude: 35.7219,
            longitude: 51.3347,
          },
          condition: 'needsFood',
          urgencyLevel: 2,
          description: 'گربه‌ای که نیاز به غذا دارد',
          reportedAt: new Date().toISOString(),
          supporters: 12
        },
        {
          id: '2',
          image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80',
          location: {
            name: 'پارک ملت',
            latitude: 35.7219,
            longitude: 51.3347,
          },
          condition: 'needsMedical',
          urgencyLevel: 3,
          description: 'گربه‌ای که نیاز به درمان فوری دارد',
          reportedAt: new Date(Date.now() - 3600000).toISOString(),
          supporters: 25
        }
      ],
      likedCats: new Set(),
      addCat: (formData) => {
        const newCat: CatReport = {
          id: nanoid(),
          image: URL.createObjectURL(formData.image!),
          location: formData.location,
          condition: formData.condition,
          urgencyLevel: formData.urgencyLevel,
          description: formData.description,
          reportedAt: new Date().toISOString(),
          supporters: 0
        };
        set((state) => ({ cats: [newCat, ...state.cats] }));
      },
      likeCat: (catId) =>
        set((state) => {
          const newLikedCats = new Set(state.likedCats);
          if (newLikedCats.has(catId)) {
            newLikedCats.delete(catId);
          } else {
            newLikedCats.add(catId);
          }
          return { likedCats: newLikedCats };
        }),
      getCatsByCategory: (category) => {
        const { cats } = get();
        return cats.filter((cat) => cat.condition === category);
      },
    }),
    {
      name: 'cat-store',
      partialize: (state) => ({
        cats: state.cats,
        likedCats: Array.from(state.likedCats)
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.likedCats = new Set(state.likedCats);
        }
      },
    }
  )
);