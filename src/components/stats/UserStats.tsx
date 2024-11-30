import React from 'react';
import Card from '../ui/Card';
import CatIcon from '../ui/CatIcon';

export default function UserStats() {
  return (
    <Card className="mb-6 bg-white shadow-xl shadow-primary-100/50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-900 font-semibold flex items-center gap-2">
          <CatIcon variant="happy" className="w-6 h-6 text-primary-500" />
          آمار فعالیت‌ها
        </h2>
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm">
          امتیاز: 876
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-primary-50 rounded-full p-4 mb-3 mx-auto w-fit">
            <CatIcon variant="happy" className="w-8 h-8 text-primary-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">87.7%</p>
          <p className="text-sm text-gray-500">موفقیت</p>
        </div>
        <div className="text-center">
          <div className="bg-secondary-50 rounded-full p-4 mb-3 mx-auto w-fit">
            <CatIcon variant="playing" className="w-8 h-8 text-secondary-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">28</p>
          <p className="text-sm text-gray-500">گربه‌های نجات یافته</p>
        </div>
        <div className="text-center">
          <div className="bg-primary-50 rounded-full p-4 mb-3 mx-auto w-fit">
            <CatIcon variant="sleeping" className="w-8 h-8 text-primary-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500">پارک‌های تحت حمایت</p>
        </div>
      </div>
    </Card>
  );
}