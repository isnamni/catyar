import React, { useState } from 'react';
import { Heart, MapPin, AlertTriangle, MessageCircle, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCatStore } from '../../stores/useCatStore';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import { formatRelativeDate } from '../../utils/date';

interface CatProfileProps {
  catId: string;
}

interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: Date;
}

const SAMPLE_SUPPORTERS = [
  {
    id: '1',
    name: 'دکتر محمدی',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    role: 'دامپزشک',
    park: 'پارک لاله'
  },
  {
    id: '2',
    name: 'خانم رضایی',
    avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=100&q=80',
    role: 'پارک‌بان',
    park: 'پارک لاله'
  }
];

export default function CatProfile({ catId }: CatProfileProps) {
  const { cats, likedCats, likeCat } = useCatStore();
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const cat = cats.find(c => c.id === catId);
  if (!cat) return null;

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      userId: 'current-user',
      userName: 'شما',
      userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
      content: newComment,
      timestamp: new Date()
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="space-y-6">
      {/* Main Info */}
      <Card>
        <div className="relative">
          <img
            src={cat.image}
            alt="تصویر گربه"
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={() => likeCat(cat.id)}
            className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md ${
              likedCats.has(cat.id)
                ? 'bg-rose-500 text-white'
                : 'bg-black/20 text-white hover:bg-rose-500'
            }`}
          >
            <Heart className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 dark:text-gray-300">{cat.location.name}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            {Array.from({ length: cat.urgencyLevel }).map((_, i) => (
              <AlertTriangle key={i} className="w-5 h-5 text-amber-500" />
            ))}
            <span className="text-sm text-gray-500">
              سطح فوریت: {cat.urgencyLevel} از 3
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {cat.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{formatRelativeDate(cat.reportedAt)}</span>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>{comments.length} نظر</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Supporters */}
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary-500" />
            حامیان این گربه
          </h3>

          <div className="space-y-4">
            {SAMPLE_SUPPORTERS.map(supporter => (
              <div key={supporter.id} className="flex items-center gap-4">
                <Avatar
                  src={supporter.avatar}
                  alt={supporter.name}
                  size="md"
                />
                <div>
                  <h4 className="font-medium">{supporter.name}</h4>
                  <p className="text-sm text-gray-500">
                    {supporter.role} - {supporter.park}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Comments */}
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary-500" />
              نظرات
            </h3>
            <Button
              variant="ghost"
              onClick={() => setShowComments(!showComments)}
            >
              {showComments ? 'بستن' : 'نمایش همه'}
            </Button>
          </div>

          <div className="flex gap-4 mb-6">
            <Avatar
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80"
              alt="تصویر کاربر"
              size="sm"
            />
            <div className="flex-1">
              <textarea
                className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none"
                rows={2}
                placeholder="نظر خود را بنویسید..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button
                className="mt-2"
                disabled={!newComment.trim()}
                onClick={handleAddComment}
              >
                ارسال نظر
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {showComments && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-4">
                    <Avatar
                      src={comment.userAvatar}
                      alt={comment.userName}
                      size="sm"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{comment.userName}</span>
                        <span className="text-xs text-gray-500">
                          {formatRelativeDate(comment.timestamp)}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
}