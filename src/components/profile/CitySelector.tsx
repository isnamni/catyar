import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { useCityStore } from '../../stores/useCityStore';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function CitySelector() {
  const { cities, selectedCity, setSelectedCity, getActiveProvinces, getCitiesByProvince } = useCityStore();
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const provinces = getActiveProvinces();
  const availableCities = selectedProvince ? getCitiesByProvince(selectedProvince) : [];

  const selectedCityData = cities.find((city) => city.id === selectedCity);

  return (
    <div className="relative">
      <Button
        variant={selectedCityData ? 'primary' : 'outline'}
        className="w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          {selectedCityData ? selectedCityData.name : 'انتخاب شهر'}
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
          >
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  استان
                </label>
                <select
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-800"
                  value={selectedProvince || ''}
                  onChange={(e) => {
                    setSelectedProvince(e.target.value || null);
                    setSelectedCity(null);
                  }}
                >
                  <option value="">انتخاب استان</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>

              {selectedProvince && availableCities.length > 0 && (
                <div className="space-y-2">
                  {availableCities.map((city) => (
                    <button
                      key={city.id}
                      className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
                        city.id === selectedCity
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => {
                        setSelectedCity(city.id);
                        setIsOpen(false);
                      }}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}