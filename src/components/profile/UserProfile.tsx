import React from 'react';
import { Settings } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80"
            alt="پروفایل کاربر"
            className="w-16 h-16 rounded-2xl object-cover ring-4 ring-primary-100"
          />
          <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-lg px-2 py-1">
            14
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900">littlebear0213</h1>
          <div className="flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1">
            <span className="text-blue-600 font-medium">1,500</span>
            <span className="text-sm text-blue-500">امتیاز</span>
          </div>
        </div>
      </div>
      <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
        <Settings className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}