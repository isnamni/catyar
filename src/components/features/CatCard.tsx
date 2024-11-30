import React from 'react';
import { MapPin, Heart } from 'lucide-react';

interface CatCardProps {
  name: string;
  image: string;
  location: string;
  distance: string;
  urgencyLevel: number;
  supporters: string;
}

export default function CatCard({ name, image, location, distance, urgencyLevel, supporters }: CatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
      <div className="flex gap-4">
        <img 
          src={image} 
          alt={name} 
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold">{name}</h3>
            <span className="text-sm text-primary-500">{distance}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <span 
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < urgencyLevel 
                      ? 'bg-rose-500' 
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <button className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm">
              <Heart className="w-4 h-4" />
              <span>{supporters}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}