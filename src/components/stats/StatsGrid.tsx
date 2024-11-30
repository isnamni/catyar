import React from 'react';
import { Trophy, Clock, Heart } from 'lucide-react';
import StatCard from '../ui/StatCard';

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <StatCard
        icon={<Trophy className="w-5 h-5 text-emerald-500" />}
        label="سطح"
        value="14"
        color="bg-gradient-to-br from-emerald-50 to-emerald-100"
      />
      <StatCard
        icon={<Clock className="w-5 h-5 text-blue-500" />}
        label="زمان"
        value="1h 23m"
        color="bg-gradient-to-br from-blue-50 to-blue-100"
      />
      <StatCard
        icon={<Heart className="w-5 h-5 text-rose-500" />}
        label="نجات‌ها"
        value="28"
        color="bg-gradient-to-br from-rose-50 to-rose-100"
      />
    </div>
  );
}