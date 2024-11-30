import React from 'react';
import { Check } from 'lucide-react';
import Card from '../ui/Card';

interface ParkFeaturesProps {
  features: string[];
}

export default function ParkFeatures({ features }: ParkFeaturesProps) {
  return (
    <Card className="p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">امکانات</h2>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <Check className="w-4 h-4 text-primary-500" />
            </div>
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}