import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import Card from '../ui/Card';

const INITIAL_VIEW_STATE = {
  latitude: 35.6892,
  longitude: 51.3890,
  zoom: 11
};

interface Location {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
}

const SAMPLE_LOCATIONS: Location[] = [
  { id: 1, latitude: 35.6892, longitude: 51.3890, title: 'پارک لاله' },
  { id: 2, latitude: 35.7219, longitude: 51.3347, title: 'پارک ملت' },
  { id: 3, latitude: 35.7137, longitude: 51.4049, title: 'پارک طالقانی' },
];

export default function MapView() {
  return (
    <Card className="h-[400px] overflow-hidden">
      <Map
        initialViewState={INITIAL_VIEW_STATE}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      >
        {SAMPLE_LOCATIONS.map((location) => (
          <Marker
            key={location.id}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            <div className="relative group cursor-pointer">
              <MapPin className="w-8 h-8 text-primary-500" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm whitespace-nowrap">{location.title}</p>
              </div>
            </div>
          </Marker>
        ))}
      </Map>
    </Card>
  );
}