import React from 'react';
import { Bell, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import CityFilter from '../components/home/CityFilter';
import CatCategories from '../components/home/CatCategories';
import CatList from '../components/home/CatList';
import { useCatStore } from '../stores/useCatStore';
import { useCityStore } from '../stores/useCityStore';

export default function HomeScreen() {
  const navigate = useNavigate();
  const { cats } = useCatStore();
  const { selectedCity, getParks } = useCityStore();
  
  // Get all parks for the selected city (or all parks if no city is selected)
  const parks = getParks();
  const parkNames = parks ? new Set(parks.map(park => park.name)) : new Set();
  
  // Filter cats by selected city's parks
  const filteredCats = selectedCity && parkNames.size > 0
    ? cats.filter(cat => parkNames.has(cat.location.name))
    : cats;

  // Sort by date and get the 3 most recent
  const recentCats = [...filteredCats]
    .sort((a, b) => new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime())
    .slice(0, 3);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80"
            alt="پروفایل کاربر"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">سلام، علی 👋</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">خوش آمدید</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="!p-2">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="!p-2">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* City Filter */}
      <CityFilter />

      {/* Categories */}
      <CatCategories />

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button
          variant="primary"
          className="h-24"
          onClick={() => navigate('/report')}
        >
          گزارش گربه جدید
        </Button>
        <Button
          variant="secondary"
          className="h-24"
          onClick={() => navigate('/map')}
        >
          مشاهده نقشه
        </Button>
      </div>

      {/* Recent Cats */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          گزارش‌های اخیر
          {selectedCity && parks && ` در ${parks.length} پارک`}
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/search')}
        >
          مشاهده همه
        </Button>
      </div>
      <CatList cats={recentCats} showSearch={true} />
    </div>
  );
}