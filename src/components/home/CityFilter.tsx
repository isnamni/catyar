import React from 'react';
import { useCityStore } from '../../stores/useCityStore';
import CitySelector from '../layout/CitySelector';

export default function CityFilter() {
  const { selectedCity } = useCityStore();

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">انتخاب شهر</h2>
      <CitySelector />
      {!selectedCity && (
        <p className="text-sm text-gray-500 mt-2">
          برای مشاهده محتوای مخصوص شهر خود، لطفاً شهر را انتخاب کنید
        </p>
      )}
    </div>
  );
}