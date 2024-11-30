import React from 'react';
import { Award, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const supporters = [
  {
    id: 1,
    name: 'علی محمدی',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
    level: 'حامی طلایی',
    park: 'پارک لاله',
    catsHelped: 45,
    badge: '🏆',
    rating: 4.9
  },
  {
    id: 2,
    name: 'مریم احمدی',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    level: 'حامی نقره‌ای',
    park: 'پارک ملت',
    catsHelped: 32,
    badge: '🥈',
    rating: 4.7
  },
  {
    id: 3,
    name: 'رضا کریمی',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    level: 'حامی برنزی',
    park: 'پارک طالقانی',
    catsHelped: 28,
    badge: '🥉',
    rating: 4.5
  }
];

export default function TopSupporters() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/community/supporters');
  };

  const handleViewProfile = (supporterId: number) => {
    navigate(`/profile/${supporterId}`);
  };

  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            حامیان برتر
          </h2>
          <Button variant="ghost" size="sm" onClick={handleViewAll}>
            مشاهده همه
          </Button>
        </div>

        <div className="space-y-4">
          {supporters.map((supporter, index) => (
            <motion.div
              key={supporter.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
              onClick={() => handleViewProfile(supporter.id)}
            >
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="relative">
                  <Avatar src={supporter.avatar} alt={supporter.name} size="md" />
                  <span className="absolute -top-1 -right-1 text-lg">
                    {supporter.badge}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {supporter.name}
                      </h3>
                      <p className="text-sm text-primary-500">{supporter.level}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        {supporter.park}
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{supporter.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{supporter.catsHelped} گربه نجات یافته</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewProfile(supporter.id);
                      }}
                    >
                      مشاهده پروفایل
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}