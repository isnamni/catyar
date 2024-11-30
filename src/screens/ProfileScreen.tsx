import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import UserStats from '../components/profile/UserStats';
import UserCats from '../components/profile/UserCats';
import CitySelector from '../components/profile/CitySelector';

export default function ProfileScreen() {
  const userStats = {
    totalCats: 5,
    totalSupports: 23,
    level: 3,
    points: 876
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      <Card className="mb-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80"
            alt="تصویر پروفایل"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-500"
          />
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">علی محمدی</h1>
            <p className="text-gray-500">عضو از فروردین ۱۴۰۲</p>
          </div>
          <Button variant="ghost">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </Card>

      <UserStats {...userStats} />

      <Card className="mb-6">
        <h2 className="text-lg font-semibold mb-4">موقعیت مکانی</h2>
        <CitySelector />
      </Card>

      <UserCats />
    </motion.div>
  );
}