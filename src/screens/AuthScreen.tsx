import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CitySelector from '../components/ui/CitySelector';

export default function AuthScreen() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({
      id: Date.now().toString(),
      name: formData.name,
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
      level: 'تازه‌کار',
      points: 0,
      city: formData.city
    });
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-8">
          به پاو پروتکت خوش آمدید
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              شماره موبایل
            </label>
            <input
              type="tel"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              شهر
            </label>
            <CitySelector />
          </div>

          <Button type="submit" className="w-full">
            ثبت‌نام
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}