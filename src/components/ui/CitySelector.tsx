import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { useCityStore } from '../../stores/useCityStore';
import { motion, AnimatePresence } from 'framer-motion';

interface CitySelectorProps {
  variant?: 'default' | 'minimal';
}

export default function CitySelector({ variant = 'default' }: CitySelectorProps) {
  const { cities, selectedCity, setSelectedCity } = useCityStore();
  const [isOpen, setIsOpen] = useState(false);

  const selectedCityData = cities.find((city) => city.id === selectedCity);

  const handleSelect = (cityId: string) => {
    setSelectedCity(cityId);
    setIsOpen(false);
  };

  if (variant === 'minimal') {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <MapPin className="w-4 h-4" />
          <span>{selectedCityData?.name || 'انتخاب شهر'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full right-0 mt-2 w-48 bg-[#25262B] rounded-lg shadow-xl border border-gray-700 py-2 z-50"
            >
              {cities.map((city) => (
                <button
                  key={city.id}
                  className={`w-full text-right px-4 py-2 text-sm transition-colors ${
                    city.id === selectedCity
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => handleSelect(city.id)}
                >
                  {city.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border transition-colors ${
          selectedCityData
            ? 'bg-primary-500 text-white border-primary-600'
            : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-600'
        }`}
      >
        <span className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          {selectedCityData ? selectedCityData.name : 'انتخاب شهر'}
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#25262B] rounded-lg shadow-xl border border-gray-700 py-2 z-50"
          >
            {cities.map((city) => (
              <button
                key={city.id}
                className={`w-full text-right px-4 py-2 transition-colors ${
                  city.id === selectedCity
                    ? 'text-primary-500 bg-primary-500/10'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => handleSelect(city.id)}
              >
                <div className="flex items-center justify-between">
                  <span>{city.name}</span>
                  <span className="text-sm text-gray-500">{city.province}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}