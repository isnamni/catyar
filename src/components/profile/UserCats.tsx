import React from 'react';
import { Heart, MapPin, AlertTriangle } from 'lucide-react';
import { useCatStore } from '../../stores/useCatStore';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatPersianDate } from '../../utils/date';
import { useNavigate } from 'react-router-dom';

export default function UserCats() {
  const { cats, likedCats, likeCat } = useCatStore();
  const navigate = useNavigate();

  const conditionLabels = {
    needsFood: 'نیاز به غذا',
    needsMedical: 'نیاز به درمان',
    needsShelter: 'نیاز به سرپناه',
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          گربه‌های گزارش شده
        </h2>
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => navigate('/report')}
        >
          گزارش جدید
        </Button>
      </div>

      {cats.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            هنوز گربه‌ای گزارش نشده است
          </p>
          <Button 
            variant="primary" 
            className="mt-4"
            onClick={() => navigate('/report')}
          >
            ثبت اولین گزارش
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4">
          {cats.map((cat) => (
            <Card key={cat.id} className="p-4">
              <div className="flex gap-4">
                <img
                  src={cat.image}
                  alt="تصویر گربه"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {cat.location.name}
                      </span>
                    </div>
                    <button
                      onClick={() => likeCat(cat.id)}
                      className={`p-2 rounded-full ${
                        likedCats.has(cat.id)
                          ? 'text-rose-500'
                          : 'text-gray-400 hover:text-rose-500'
                      }`}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      {conditionLabels[cat.condition]}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {cat.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{formatPersianDate(cat.reportedAt)}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: cat.urgencyLevel }).map((_, i) => (
                        <span
                          key={i}
                          className="w-2 h-2 rounded-full bg-rose-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}