import React from 'react';
import { Clock } from 'lucide-react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import { formatRelativeDate } from '../../utils/date';

const activities = [
  {
    id: 1,
    user: {
      name: 'علی محمدی',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80'
    },
    action: 'یک گربه جدید در نقشه ثبت کرد',
    location: 'پارک لاله',
    timestamp: new Date().toISOString()
  },
  {
    id: 2,
    user: {
      name: 'مریم احمدی',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
    },
    action: 'به یک گربه غذا داد',
    location: 'پارک ملت',
    timestamp: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 3,
    user: {
      name: 'رضا کریمی',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    action: 'یک گربه را به دامپزشکی برد',
    location: 'پارک طالقانی',
    timestamp: new Date(Date.now() - 7200000).toISOString()
  }
];

export default function RecentActivities() {
  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-500" />
            فعالیت‌های اخیر
          </h2>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar src={activity.user.avatar} alt={activity.user.name} size="sm" />
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {activity.user.name}
                  </span>
                  {' '}
                  {activity.action}
                  {' '}
                  <span className="text-gray-500">در {activity.location}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatRelativeDate(activity.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}