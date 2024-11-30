import React from 'react';
import { Heart, Menu, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-rose-500" />
          <span className="font-semibold text-lg">PawProtect</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">خانه</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">گربه‌های نیازمند</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">پارک‌ها</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">درباره ما</a>
        </nav>

        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <button className="hidden md:block bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600">
            ثبت‌نام / ورود
          </button>
          <Menu className="w-6 h-6 text-gray-600 md:hidden cursor-pointer" />
        </div>
      </div>
    </header>
  );
}