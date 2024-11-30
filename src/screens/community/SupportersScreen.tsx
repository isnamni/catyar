import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';

const supporters = [
  {
    id: 1,
    name: 'علی محمدی',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
    level: 'حامی طلایی',
    park: 'پارک لاله',
    catsHelped: 45,
    badge: '🏆',
    rating: 4.9,
    bio: 'فعال در حمایت از گربه‌های خیابانی از سال ۱۴۰۰'
  },
  {
    id: 2,
    name: 'مریم احمدی',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    level: 'حامی نقره‌ای',
    park: 'پارک ملت',
    catsHelped: 32,
    badge: '🥈',
    rating: 4.7,
    bio: 'دامپزشک و حامی حیوانات'
  },
  {
    id: 3,
    name: 'رضا کریمی',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    level: 'حامی برنزی',
    park: 'پارک طالقانی',
    catsHelped: 28,
    badge: '🥉',
    rating: 4.5,
    bio: 'عاشق گربه‌ها و فعال در زمینه حمایت از حیوانات'
  }
];

export default function SupportersScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredSupporters = supporters.filter(
    supporter =>
      supporter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supporter.park.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supporter.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      <div className="mb-6">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate('/community')}
        >
          <ChevronRight className="w-5 h-5" />
          بازگشت به جامعه
        </Button>

        <h1 className="text-2xl font-bold mb-4">حامیان برتر</h1>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="جستجوی حامیان..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredSupporters.map((supporter) => (
          <motion.div
            key={supporter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/profile/${supporter.id}`)}
          >
            <Card className="p-4 cursor-pointer">
              <div className="flex gap-4">
                <div className="relative">
                  <Avatar src={supporter.avatar} alt={supporter.name} size="lg" />
                  <span className="absolute -top-1 -right-1 text-xl">
                    {supporter.badge}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {supporter.name}
                      </h3>
                      <p className="text-sm text-primary-500">{supporter.level}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{supporter.park}</div>
                      <div className="text-sm font-medium">
                        {supporter.catsHelped} گربه نجات یافته
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {supporter.bio}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">امتیاز:</span>
                      <div className="flex items-center">
                        {Array.from({ length: Math.floor(supporter.rating) }).map((_, i) => (
                          <span key={i} className="text-amber-500">⭐</span>
                        ))}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      مشاهده پروفایل
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}