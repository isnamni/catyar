import React from 'react';
import { motion } from 'framer-motion';
import CityManagement from '../../components/admin/CityManagement';
import Card from '../../components/ui/Card';
import { useCityStore } from '../../stores/useCityStore';

export default function CitiesScreen() {
  const { cities } = useCityStore();
  const provinces = [...new Set(cities.map(city => city.province))];
  
  const stats = {
    totalCities: cities.length,
    totalProvinces: provinces.length,
    activeCities: cities.filter(city => city.isActive).length
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
          مدیریت شهرها
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4">
            <p className="text-sm text-gray-500 mb-1">تعداد کل شهرها</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalCities}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-500 mb-1">تعداد استان‌ها</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalProvinces}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-500 mb-1">شهرهای فعال</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.activeCities}
            </p>
          </Card>
        </div>
      </div>

      <CityManagement />
    </motion.div>
  );
}