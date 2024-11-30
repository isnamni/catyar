import React from 'react';
import { Trophy, Clock, Heart } from 'lucide-react';
import StatCard from '../ui/StatCard';

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <StatCard
        icon={<Trophy className="w-6 h-6 text-emerald-500" />}
        value="14"
        label="سطح"
        bgColor="from-emerald-500/20 to-emerald-500/10"
        borderColor="border-emerald-500/20"
      />
      <StatCard
        icon={<Clock className="w-6 h-6 text-blue-500" />}
        value="1h 23m"
        label="زمان"
        bgColor="from-blue-500/20 to-blue-500/10"
        borderColor="border-blue-500/20"
      />
      <StatCard
        icon={<Heart className="w-6 h-6 text-amber-500" />}
        value="28"
        label="نجات‌ها"
        bgColor="from-amber-500/20 to-amber-500/10"
        borderColor="border-amber-500/20"
      />
    </div>
  );
}