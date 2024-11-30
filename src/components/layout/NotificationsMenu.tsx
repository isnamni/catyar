import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, MapPin, Heart } from 'lucide-react';
import { formatRelativeDate } from '../../utils/date';

interface Notification {
  id: string;
  type: 'newCat' | 'support' | 'urgent';
  message: string;
  timestamp: string;
  read: boolean;
}

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'newCat',
    message: 'گربه جدیدی در نزدیکی شما گزارش شده است',
    timestamp: new Date().toISOString(),
    read: false
  },
  {
    id: '2',
    type: 'support',
    message: 'یکی از گربه‌های تحت حمایت شما به غذا نیاز دارد',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    read: false
  }
];

interface NotificationsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const notificationIcons = {
  newCat: <MapPin className="w-5 h-5 text-primary-500" />,
  support: <Heart className="w-5 h-5 text-rose-500" />,
  urgent: <Bell className="w-5 h-5 text-amber-500" />
};

export default function NotificationsMenu({ isOpen, onClose }: NotificationsMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-0 left-0 z-50 px-4 py-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">اعلان‌ها</h3>
                <span className="text-sm text-gray-500">
                  {SAMPLE_NOTIFICATIONS.filter(n => !n.read).length} اعلان جدید
                </span>
              </div>

              <div className="space-y-4">
                {SAMPLE_NOTIFICATIONS.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      notification.read
                        ? 'opacity-60'
                        : 'bg-primary-50 dark:bg-primary-500/10'
                    }`}
                  >
                    {notificationIcons[notification.type]}
                    <div className="flex-1">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatRelativeDate(notification.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}