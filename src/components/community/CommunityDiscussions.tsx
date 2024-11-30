import React, { useState } from 'react';
import { MessageCircle, Users, Plus, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatRelativeDate } from '../../utils/date';
import { motion, AnimatePresence } from 'framer-motion';

const discussions = [
  {
    id: 1,
    title: 'راهنمای غذادهی به گربه‌ها',
    participants: 156,
    lastMessage: 'بهترین زمان برای غذا دادن به گربه‌ها چه موقع است؟',
    timestamp: new Date().toISOString(),
    tags: ['آموزشی', 'تغذیه']
  },
  {
    id: 2,
    title: 'معرفی دامپزشک‌های معتمد',
    participants: 89,
    lastMessage: 'لطفاً دامپزشک‌های خوب در منطقه تهرانپارس معرفی کنید',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    tags: ['درمان', 'دامپزشکی']
  },
  {
    id: 3,
    title: 'هماهنگی برای واکسیناسیون گربه‌ها',
    participants: 234,
    lastMessage: 'برنامه واکسیناسیون هفته آینده در پارک لاله',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    tags: ['واکسیناسیون', 'رویداد']
  }
];

export default function CommunityDiscussions() {
  const navigate = useNavigate();
  const [showNewDiscussion, setShowNewDiscussion] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newDiscussion, setNewDiscussion] = useState({
    title: '',
    description: ''
  });

  const filteredDiscussions = discussions.filter(
    discussion =>
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleViewDiscussion = (discussionId: number) => {
    navigate(`/community/discussions/${discussionId}`);
  };

  const handleCreateDiscussion = () => {
    if (newDiscussion.title && newDiscussion.description) {
      // Here you would typically make an API call to create the discussion
      setShowNewDiscussion(false);
      setNewDiscussion({ title: '', description: '' });
      // Navigate to the new discussion
      navigate('/community/discussions/new');
    }
  };

  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary-500" />
            گفتگوهای جامعه
          </h2>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => setShowNewDiscussion(true)}
          >
            <Plus className="w-4 h-4" />
            ایجاد گفتگو
          </Button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="جستجو در گفتگوها..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-10 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleViewDiscussion(discussion.id)}
              >
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      {discussion.participants}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-2">
                    {discussion.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {discussion.lastMessage}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatRelativeDate(discussion.timestamp)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showNewDiscussion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowNewDiscussion(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">ایجاد گفتگوی جدید</h3>
              <input
                type="text"
                placeholder="عنوان گفتگو"
                value={newDiscussion.title}
                onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border mb-4"
              />
              <textarea
                placeholder="توضیحات گفتگو..."
                value={newDiscussion.description}
                onChange={(e) => setNewDiscussion({ ...newDiscussion, description: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border mb-4 h-32 resize-none"
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  onClick={() => setShowNewDiscussion(false)}
                >
                  انصراف
                </Button>
                <Button 
                  variant="primary"
                  onClick={handleCreateDiscussion}
                  disabled={!newDiscussion.title || !newDiscussion.description}
                >
                  ایجاد گفتگو
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}