import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Heart, Award } from 'lucide-react';
import Card from '../ui/Card';

const achievements = [
  {
    id: 1,
    title: 'حامی طلایی',
    description: 'نجات بیش از ۵۰ گربه',
    icon: <Trophy className="w-6 h-6 text-amber-500" />,
    progress: 80,
    color: 'from-amber-500 to-amber-600'
  },
  {
    id: 2,
    title: 'قهرمان محله',
    description: 'فعالیت مستمر در یک پارک',
    icon: <Star className="w-6 h-6 text-emerald-500" />,
    progress: 65,
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 3,
    title: 'دوست مهربان',
    description: 'غذارسانی به ۱۰۰ گربه',
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    progress: 45,
    color: 'from-rose-500 to-rose-600'
  }
];

export default function CommunityAchievements() {
  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Award className="w-5 h-5 text-primary-500" />
            دستاوردهای شما
          </h2>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {achievement.progress}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    {achievement.description}
                  </p>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${achievement.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${achievement.color}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}