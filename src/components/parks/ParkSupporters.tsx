import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

interface ParkSupportersProps {
  parkId: string;
}

const SAMPLE_SUPPORTERS = [
  {
    id: '1',
    name: 'علی محمدی',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
    level: 'حامی طلایی',
    rating: 4.9,
    catsHelped: 45
  },
  {
    id: '2',
    name: 'مریم احمدی',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    level: 'حامی نقره‌ای',
    rating: 4.7,
    catsHelped: 32
  }
];

export default function ParkSupporters({ parkId }: ParkSupportersProps) {
  const navigate = useNavigate();

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">حامیان پارک</h2>
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate('/community')}
        >
          پیوستن به حامیان
        </Button>
      </div>

      <div className="space-y-4">
        {SAMPLE_SUPPORTERS.map((supporter, index) => (
          <motion.div
            key={supporter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/profile/${supporter.id}`)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Avatar src={supporter.avatar} alt={supporter.name} size="md" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {supporter.name}
                    </h3>
                    <p className="text-sm text-primary-500">{supporter.level}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{supporter.rating}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {supporter.catsHelped} گربه نجات یافته
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}