import React, { useState } from 'react';
import { Camera, MapPin, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { CatFormData, CatCondition, UrgencyLevel } from '../../types/cat';
import { useCatStore } from '../../stores/useCatStore';
import { useCityStore } from '../../stores/useCityStore';
import { motion, AnimatePresence } from 'framer-motion';

const CONDITIONS: { value: CatCondition; label: string; icon: React.ReactNode }[] = [
  { value: 'needsFood', label: 'نیاز به غذا', icon: '🍽️' },
  { value: 'needsMedical', label: 'نیاز به درمان', icon: '🏥' },
  { value: 'needsShelter', label: 'نیاز به سرپناه', icon: '🏠' },
];

const URGENCY_LEVELS: { value: UrgencyLevel; label: string }[] = [
  { value: 1, label: 'عادی' },
  { value: 2, label: 'فوری' },
  { value: 3, label: 'بسیار فوری' },
];

export default function CatReportForm() {
  const navigate = useNavigate();
  const { addCat } = useCatStore();
  const { cities, selectedCity, setSelectedCity, getParks } = useCityStore();
  
  const [formData, setFormData] = useState<CatFormData>({
    image: null,
    location: {
      name: '',
      latitude: 0,
      longitude: 0,
    },
    condition: 'needsFood',
    urgencyLevel: 1,
    description: '',
  });

  const [preview, setPreview] = useState<string>('');
  const [selectedPark, setSelectedPark] = useState<string>('');

  const parks = getParks();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image || !selectedPark) {
      alert('لطفاً تصویر و موقعیت را وارد کنید');
      return;
    }

    const selectedParkData = parks.find(park => park.id === selectedPark);
    if (selectedParkData) {
      const updatedFormData = {
        ...formData,
        location: {
          name: selectedParkData.name,
          latitude: 0,
          longitude: 0,
        }
      };
      addCat(updatedFormData);
      navigate('/');
    }
  };

  return (
    <Card className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        گزارش گربه نیازمند
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            تصویر گربه
          </label>
          <div className="relative">
            {preview ? (
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreview('');
                    setFormData({ ...formData, image: null });
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  ×
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500">
                <Camera className="w-12 h-12 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500">انتخاب تصویر</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>
        </div>

        {/* City Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            شهر
          </label>
          <select
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            value={selectedCity || ''}
            onChange={(e) => setSelectedCity(e.target.value || null)}
          >
            <option value="">انتخاب شهر</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Park Selection */}
        <AnimatePresence>
          {selectedCity && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                پارک
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
                value={selectedPark}
                onChange={(e) => {
                  setSelectedPark(e.target.value);
                  const park = parks.find(p => p.id === e.target.value);
                  if (park) {
                    setFormData({
                      ...formData,
                      location: {
                        name: park.name,
                        latitude: 0,
                        longitude: 0
                      }
                    });
                  }
                }}
              >
                <option value="">انتخاب پارک</option>
                {parks.map((park) => (
                  <option key={park.id} value={park.id}>
                    {park.name}
                  </option>
                ))}
              </select>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            وضعیت
          </label>
          <div className="grid grid-cols-3 gap-2">
            {CONDITIONS.map(({ value, label, icon }) => (
              <button
                key={value}
                type="button"
                className={`flex flex-col items-center p-3 rounded-lg border-2 transition-colors ${
                  formData.condition === value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
                onClick={() => setFormData({ ...formData, condition: value })}
              >
                <span className="text-2xl mb-1">{icon}</span>
                <span className="text-xs text-gray-700">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Urgency Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            سطح فوریت
          </label>
          <div className="flex gap-2">
            {URGENCY_LEVELS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                className={`flex-1 py-2 rounded-lg border-2 transition-colors ${
                  formData.urgencyLevel === value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
                onClick={() => setFormData({ ...formData, urgencyLevel: value })}
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: value }).map((_, i) => (
                    <AlertTriangle
                      key={i}
                      className="w-4 h-4 text-amber-500"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-700 mt-1">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            توضیحات
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 px-4 py-2 h-24 resize-none"
            placeholder="توضیحات بیشتر درباره وضعیت گربه..."
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={!formData.image || !selectedPark}
        >
          ثبت گزارش
        </Button>
      </form>
    </Card>
  );
}