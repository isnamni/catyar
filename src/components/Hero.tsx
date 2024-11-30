import React from 'react';
import { MapPin, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-500/10 to-transparent pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            حمایت از گربه‌های خیابانی
            <br />
            <span className="text-primary-500">با قلبی مهربان</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            با کمک شما می‌توانیم زندگی بهتری برای گربه‌های بی‌سرپرست فراهم کنیم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors">
              <MapPin className="w-5 h-5" />
              ثبت موقعیت گربه
            </button>
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-primary-500 px-6 py-3 rounded-full border-2 border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors">
              <Heart className="w-5 h-5" />
              حمایت از گربه‌ها
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80"
            alt="گربه‌های نیازمند"
            className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
        </div>
      </div>
    </section>
  );
}