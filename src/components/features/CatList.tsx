import React from 'react';
import CatCard from './CatCard';

const RECOMMENDED_CATS = [
  {
    id: 1,
    name: 'پیشی ملوس',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    location: 'پارک لاله',
    urgency: 3,
    supporters: '315.6K'
  },
  {
    id: 2,
    name: 'گربه سفید',
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80',
    location: 'پارک ملت',
    urgency: 2,
    supporters: '276.2K'
  }
];

export default function CatList() {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-4">گربه‌های نیازمند کمک</h2>
      <div className="space-y-4">
        {RECOMMENDED_CATS.map(cat => (
          <CatCard key={cat.id} {...cat} />
        ))}
      </div>
    </div>
  );
}