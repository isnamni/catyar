import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface City {
  id: string;
  name: string;
  province: string;
  isActive: boolean;
  parks: {
    id: string;
    name: string;
  }[];
}

interface CityState {
  cities: City[];
  selectedCity: string | null;
  addCity: (city: Omit<City, 'id'>) => void;
  removeCity: (id: string) => void;
  toggleCityStatus: (id: string) => void;
  setSelectedCity: (cityId: string | null) => void;
  getCitiesByProvince: (province: string) => City[];
  getActiveProvinces: () => string[];
  getParks: () => { id: string; name: string }[];
}

export const useCityStore = create<CityState>()(
  persist(
    (set, get) => ({
      cities: [
        {
          id: '1',
          name: 'تهران',
          province: 'تهران',
          isActive: true,
          parks: [
            { id: '1', name: 'پارک لاله' },
            { id: '2', name: 'پارک ملت' },
            { id: '3', name: 'پارک جمشیدیه' },
            { id: '4', name: 'پارک ساعی' },
            { id: '5', name: 'پارک آب و آتش' }
          ]
        },
        {
          id: '2',
          name: 'شیراز',
          province: 'فارس',
          isActive: true,
          parks: [
            { id: '6', name: 'پارک آزادی' },
            { id: '7', name: 'پارک ارم' }
          ]
        },
        {
          id: '3',
          name: 'اصفهان',
          province: 'اصفهان',
          isActive: true,
          parks: [
            { id: '8', name: 'پارک ناژوان' },
            { id: '9', name: 'پارک صفه' }
          ]
        }
      ],
      selectedCity: null,
      addCity: (city) => {
        const id = Math.random().toString(36).substr(2, 9);
        set((state) => ({
          cities: [...state.cities, { ...city, id }],
        }));
      },
      removeCity: (id) => {
        set((state) => ({
          cities: state.cities.filter((city) => city.id !== id),
        }));
      },
      toggleCityStatus: (id) => {
        set((state) => ({
          cities: state.cities.map((city) =>
            city.id === id ? { ...city, isActive: !city.isActive } : city
          ),
        }));
      },
      setSelectedCity: (cityId) => {
        set({ selectedCity: cityId });
      },
      getCitiesByProvince: (province) => {
        return get().cities.filter((city) => city.province === province && city.isActive);
      },
      getActiveProvinces: () => {
        const { cities } = get();
        const provinces = new Set(
          cities.filter((city) => city.isActive).map((city) => city.province)
        );
        return Array.from(provinces);
      },
      getParks: () => {
        const { cities, selectedCity } = get();
        if (!selectedCity) {
          return cities.flatMap(city => city.parks);
        }
        const city = cities.find(c => c.id === selectedCity);
        return city ? city.parks : [];
      }
    }),
    {
      name: 'city-store',
    }
  )
);