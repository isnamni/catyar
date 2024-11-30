import React from 'react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import { formatPersianDate } from '../../utils/date';

interface Activity {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  timestamp: Date;
  location: string;
}

const SAMPLE_ACTIVITIES: Activity[] = [
  {
    id: 1,
    user: {
      name: 'علی محمدی',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80'
    },
    action: 'یک گربه جدید در نقشه ثبت کرد',
    timestamp: new Date(),
    location: 'پارک لاله'
  },
  {
    id: 2,
    user: {
      name: 'مریم احمدی',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
    },
    action: 'به یک گربه غذا داد',
    timestamp: new Date(Date.now() - 3600000),
    location: 'پارک ملت'
  }
];

export default function ActivityFeed() {
  return (
    <Card className="divide-y divide-gray-100">
      <h3 className="text-lg font-semibold mb-4">فعالیت‌های اخیر</h3>
      
      <div className="space-y-4 pt-4">
        {SAMPLE_ACTIVITIES.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <Avatar src={activity.user.avatar} alt={activity.user.name} size="sm" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span>
                {' '}
                {activity.action}
                {' '}
                <span className="text-gray-500">در {activity.location}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {formatPersianDate(activity.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}