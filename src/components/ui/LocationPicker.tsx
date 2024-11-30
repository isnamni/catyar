import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Button from './Button';

interface LocationPickerProps {
  onSelect: (location: { name: string; latitude: number; longitude: number }) => void;
  onClose: () => void;
}

export default function LocationPicker({ onSelect, onClose }: LocationPickerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll implement location search
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">انتخاب موقعیت</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSearch} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="جستجوی محل..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit">
              <MapPin className="w-5 h-5" />
            </Button>
          </div>
        </form>

        <div className="h-64 bg-gray-100 rounded-lg mb-4">
          {/* Map will be integrated here */}
          <div className="h-full flex items-center justify-center text-gray-500">
            نقشه در حال بارگذاری...
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            انصراف
          </Button>
          <Button
            onClick={() =>
              onSelect({
                name: 'موقعیت انتخاب شده',
                latitude: 35.6892,
                longitude: 51.3890,
              })
            }
          >
            تأیید موقعیت
          </Button>
        </div>
      </div>
    </div>
  );
}