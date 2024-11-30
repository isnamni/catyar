import React from 'react';
import { Award, Heart, MapPin } from 'lucide-react';
import Card from '../ui/Card';

interface UserStatsProps {
  totalCats: number;
  totalSupports: number;
  level: number;
  points: number;
}

export default function UserStats({ totalCats, totalSupports, level, points }: UserStatsProps) {
  return (
    <Card className="mb-6">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="bg-rose-50 dark:bg-rose-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
            <Heart className="w-6 h-6 text-rose-500" />
          </div>
          <p className="font-bold text-xl">{totalCats}</p>
          <p className="text-sm text-gray-500">گربه معرفی شده</p>
        </div>
        
        <div>
          <div className="bg-primary-50 dark:bg-primary-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
            <MapPin className="w-6 h-6 text-primary-500" />
          </div>
          <p className="font-bold text-xl">{totalSupports}</p>
          <p className="text-sm text-gray-500">حمایت‌ها</p>
        </div>
        
        <div>
          <div className="bg-amber-50 dark:bg-amber-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
            <Award className="w-6 h-6 text-amber-500" />
          </div>
          <p className="font-bold text-xl">{points}</p>
          <p className="text-sm text-gray-500">امتیاز (سطح {level})</p>
        </div>
      </div>
    </Card>
  );
}