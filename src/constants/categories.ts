import { CategoryInfo } from '../types/cat';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'needsFood',
    label: 'نیاز به غذا',
    description: 'گربه‌هایی که نیاز به غذا و آب دارند',
    icon: '🍽️',
    color: 'bg-rose-500'
  },
  {
    id: 'needsMedical',
    label: 'نیاز به درمان',
    description: 'گربه‌های بیمار یا آسیب‌دیده که نیاز به مراقبت پزشکی دارند',
    icon: '🏥',
    color: 'bg-amber-500'
  },
  {
    id: 'needsShelter',
    label: 'نیاز به سرپناه',
    description: 'گربه‌هایی که نیاز به محل امن برای زندگی دارند',
    icon: '🏠',
    color: 'bg-emerald-500'
  }
];