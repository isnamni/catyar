import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import Card from '../ui/Card';

interface ParkScheduleProps {
  schedule: {
    feedingTimes: string[];
    supporterVisits: string[];
  };
}

export default function ParkSchedule({ schedule }: ParkScheduleProps) {
  return (
    <Card className="p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">برنامه زمانی</h2>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 text-primary-500 mb-2">
            <Clock className="w-5 h-5" />
            <h3 className="font-medium">زمان‌های غذادهی</h3>
          </div>
          <div className="flex gap-2">
            {schedule.feedingTimes.map((time, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >
                {time}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-primary-500 mb-2">
            <Calendar className="w-5 h-5" />
            <h3 className="font-medium">حضور حامیان</h3>
          </div>
          <div className="flex gap-2">
            {schedule.supporterVisits.map((visit, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >
                {visit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}