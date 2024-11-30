import React from 'react';
import { ThemeToggle } from '../../contexts/ThemeContext';

export default function UserProfile() {
  return (
    <div className="bg-white dark:bg-[#25262B] rounded-2xl p-4 shadow-lg mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80"
            alt="پروفایل کاربر"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500"
          />
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">littlebear0213</h1>
            <div className="flex items-center gap-1">
              <div className="bg-primary-500/20 rounded-full px-3 py-0.5">
                <span className="text-primary-500 font-medium">1,500</span>
              </div>
              <button className="text-sm text-primary-500 hover:text-primary-600">
                چطور امتیاز بگیرم؟
              </button>
            </div>
          </div>
        </div>
        <ThemeToggle />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary-50 dark:bg-primary-500/10 rounded-xl p-3">
          <span className="text-2xl font-bold text-primary-500">14</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">سطح</p>
        </div>
        <div className="bg-primary-50 dark:bg-primary-500/10 rounded-xl p-3">
          <span className="text-2xl font-bold text-primary-500">1h 23m</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">زمان</p>
        </div>
      </div>
    </div>
  );
}