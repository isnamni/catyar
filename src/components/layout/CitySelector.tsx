import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { useCityStore } from '../../stores/useCityStore';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function CitySelector() {
  const { cities, selectedCity, setSelectedCity } = useCityStore();
  const [isOpen, setIsOpen] = useState(false);

  const selectedCityData = cities.find((city) => city.id === selectedCity);

  const handleSelect = (cityId: string) => {
    setSelectedCity(cityId);
    setIsOpen(false);
  };

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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
            >
              <div className="p-2">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
                      city.id === selectedCity
                        ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => handleSelect(city.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{city.name}</span>
                      <span className="text-sm text-gray-500">{city.province}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}