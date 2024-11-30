import React from 'react';
import { Users, Heart, Award, MapPin } from 'lucide-react';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: <Users className="w-6 h-6 text-primary-500" />,
    value: '۱,۲۳۴',
    label: 'حامیان فعال',
    bgColor: 'bg-primary-50 dark:bg-primary-500/10'
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    value: '۳,۵۶۷',
    label: 'گربه‌های نجات یافته',
    bgColor: 'bg-rose-50 dark:bg-rose-500/10'
  },
  {
    icon: <Award className="w-6 h-6 text-amber-500" />,
    value: '۸۹۰',
    label: 'حامیان برتر',
    bgColor: 'bg-amber-50 dark:bg-amber-500/10'
  },
  {
    icon: <MapPin className="w-6 h-6 text-emerald-500" />,
    value: '۱۲۳',
    label: 'پارک‌های تحت پوشش',
    bgColor: 'bg-emerald-50 dark:bg-emerald-500/10'
  }
];

export default function CommunityStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className={`p-4 ${stat.bgColor} hover:scale-105 transition-transform cursor-pointer`}>
            <div className="flex flex-col items-center text-center">
              {stat.icon}
              <span className="text-2xl font-bold mt-2">{stat.value}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}