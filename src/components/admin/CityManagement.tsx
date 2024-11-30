import React, { useState } from 'react';
import { Plus, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';
import { useCityStore, City } from '../../stores/useCityStore';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function CityManagement() {
  const { cities, addCity, removeCity, toggleCityStatus } = useCityStore();
  const [newCity, setNewCity] = useState({ name: '', province: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCity.name && newCity.province) {
      addCity({ ...newCity, isActive: true });
      setNewCity({ name: '', province: '' });
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        مدیریت شهرها
      </h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              نام استان
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              value={newCity.province}
              onChange={(e) => setNewCity({ ...newCity, province: e.target.value })}
              placeholder="مثال: تهران"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              نام شهر
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              value={newCity.name}
              onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
              placeholder="مثال: تهران"
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          <Plus className="w-5 h-5" />
          افزودن شهر جدید
        </Button>
      </form>

      <div className="space-y-4">
        {cities.map((city) => (
          <div
            key={city.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {city.name}
              </h3>
              <p className="text-sm text-gray-500">{city.province}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCityStatus(city.id)}
              >
                {city.isActive ? (
                  <ToggleRight className="w-5 h-5 text-primary-500" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-gray-400" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeCity(city.id)}
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