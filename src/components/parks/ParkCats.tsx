import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCatStore } from '../../stores/useCatStore';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatRelativeDate } from '../../utils/date';

interface ParkCatsProps {
  parkId: string;
}

export default function ParkCats({ parkId }: ParkCatsProps) {
  const navigate = useNavigate();
  const { cats, likedCats, likeCat } = useCatStore();
  const parkCats = cats.filter(cat => cat.location.name === parkId);

  const handleLike = (e: React.MouseEvent, catId: string) => {
    e.stopPropagation();
    likeCat(catId);
  };

  return (
    <Card className="p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">گربه‌های پارک</h2>
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate('/report')}
        >
          گزارش گربه جدید
        </Button>
      </div>

      {parkCats.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">هنوز گربه‌ای در این پارک ثبت نشده است</p>
        </div>
      ) : (
        <div className="space-y-4">
          {parkCats.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/cat/${cat.id}`)}
              className="cursor-pointer"
            >
              <div className="flex gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <img
                  src={cat.image}
                  alt="تصویر گربه"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {Array.from({ length: cat.urgencyLevel }).map((_, i) => (
                        <AlertTriangle
                          key={i}
                          className="w-4 h-4 text-amber-500"
                        />
                      ))}
                    </div>
                    <button
                      onClick={(e) => handleLike(e, cat.id)}
                      className={`p-2 rounded-full ${
                        likedCats.has(cat.id)
                          ? 'text-rose-500'
                          : 'text-gray-400 hover:text-rose-500'
                      }`}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                    {cat.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    {formatRelativeDate(cat.reportedAt)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </Card>
  );
}