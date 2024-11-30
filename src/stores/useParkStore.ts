import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Park } from '../types/park';

interface ParkState {
  parks: Park[];
  selectedPark: string | null;
  setSelectedPark: (parkId: string | null) => void;
  getParkById: (id: string) => Park | undefined;
}

export const useParkStore = create<ParkState>()(
  persist(
    (set, get) => ({
      parks: [
        {
          id: '1',
          name: 'پارک لاله',
          image: 'https://images.unsplash.com/photo-1496614932623-0a3a9743552e?auto=format&fit=crop&w=1200&q=80',
          location: {
            latitude: 35.7219,
            longitude: 51.3347,
            address: 'تهران، خیابان حجاب، پارک لاله'
          },
          description: 'یکی از بزرگترین پارک‌های تهران با جمعیت زیادی از گربه‌های خیابانی',
          mainSupporter: {
            id: '1',
            name: 'علی محمدی',
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
            level: 'حامی طلایی'
          },
          stats: {
            cats: 45,
            supporters: 12,
            feedingStations: 8
          },
          features: [
            'ایستگاه‌های غذادهی',
            'پناهگاه‌های موقت',
            'دسترسی به آب تصفیه شده'
          ],
          schedule: {
            feedingTimes: ['۸:۰۰', '۱۶:۰۰', '۲۰:۰۰'],
            supporterVisits: ['صبح‌ها', 'عصرها']
          }
        },
        {
          id: '2',
          name: 'پارک ملت',
          image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
          location: {
            latitude: 35.7219,
            longitude: 51.3347,
            address: 'تهران، خیابان ولیعصر، پارک ملت'
          },
          description: 'پارک محبوب و پرطرفدار با امکانات مناسب برای نگهداری از گربه‌ها',
          mainSupporter: {
            id: '2',
            name: 'مریم احمدی',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
            level: 'حامی نقره‌ای'
          },
          stats: {
            cats: 32,
            supporters: 8,
            feedingStations: 6
          },
          features: [
            'ایستگاه‌های غذادهی',
            'پناهگاه‌های دائمی',
            'خدمات دامپزشکی هفتگی'
          ],
          schedule: {
            feedingTimes: ['۹:۰۰', '۱۷:۰۰', '۲۱:۰۰'],
            supporterVisits: ['عصرها', 'آخر هفته‌ها']
          }
        },
        {
          id: '3',
          name: 'پارک جمشیدیه',
          image: 'https://images.unsplash.com/photo-1519753888461-a48c728d0d1d?auto=format&fit=crop&w=1200&q=80',
          location: {
            latitude: 35.8012,
            longitude: 51.4353,
            address: 'تهران، خیابان نیاوران، پارک جمشیدیه'
          },
          description: 'پارک کوهستانی با مناظر زیبا و محیطی مناسب برای گربه‌ها',
          stats: {
            cats: 28,
            supporters: 6,
            feedingStations: 5
          },
          features: [
            'پناهگاه‌های طبیعی',
            'ایستگاه‌های غذادهی',
            'محیط کوهستانی'
          ],
          schedule: {
            feedingTimes: ['۷:۰۰', '۱۵:۰۰', '۱۹:۰۰'],
            supporterVisits: ['صبح‌ها', 'عصرها']
          }
        },
        {
          id: '4',
          name: 'پارک ساعی',
          image: 'https://images.unsplash.com/photo-1519331582073-c4fab3085c45?auto=format&fit=crop&w=1200&q=80',
          location: {
            latitude: 35.7283,
            longitude: 51.4133,
            address: 'تهران، خیابان ولیعصر، پارک ساعی'
          },
          description: 'پارک جنگلی در قلب شهر با محیطی امن برای گربه‌ها',
          stats: {
            cats: 25,
            supporters: 7,
            feedingStations: 4
          },
          features: [
            'محیط جنگلی',
            'ایستگاه‌های غذادهی',
            'پناهگاه‌های چوبی'
          ],
          schedule: {
            feedingTimes: ['۸:۳۰', '۱۶:۳۰', '۲۰:۳۰'],
            supporterVisits: ['صبح‌ها', 'عصرها']
          }
        },
        {
          id: '5',
          name: 'پارک آب و آتش',
          image: 'https://images.unsplash.com/photo-1519331582871-c4fab3085c45?auto=format&fit=crop&w=1200&q=80',
          location: {
            latitude: 35.7544,
            longitude: 51.4156,
            address: 'تهران، بزرگراه حقانی، پارک آب و آتش'
          },
          description: 'پارک مدرن با امکانات ویژه برای نگهداری از گربه‌ها',
          stats: {
            cats: 20,
            supporters: 5,
            feedingStations: 4
          },
          features: [
            'ایستگاه‌های مدرن غذادهی',
            'پناهگاه‌های هوشمند',
            'دسترسی به آب تصفیه شده'
          ],
          schedule: {
            feedingTimes: ['۹:۳۰', '۱۷:۳۰', '۲۱:۳۰'],
            supporterVisits: ['عصرها', 'آخر هفته‌ها']
          }
        }
      ],
      selectedPark: null,
      setSelectedPark: (parkId) => set({ selectedPark: parkId }),
      getParkById: (id) => get().parks.find(park => park.id === id)
    }),
    {
      name: 'park-store'
    }
  )
);