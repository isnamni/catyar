import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Send, Users } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import { formatRelativeDate } from '../../utils/date';

const discussion = {
  id: '1',
  title: 'راهنمای غذادهی به گربه‌ها',
  description: 'بحث و تبادل نظر درباره بهترین روش‌های غذا دادن به گربه‌های خیابانی',
  participants: 156,
  createdAt: new Date().toISOString(),
  messages: [
    {
      id: 1,
      user: {
        name: 'علی محمدی',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80'
      },
      content: 'بهترین زمان برای غذا دادن به گربه‌ها چه موقع است؟',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      user: {
        name: 'مریم احمدی',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
      },
      content: 'من معمولاً صبح‌ها و عصرها به گربه‌ها غذا می‌دهم. بهتر است زمان‌های مشخصی را برای غذا دادن انتخاب کنید تا گربه‌ها عادت کنند.',
      timestamp: new Date(Date.now() - 3600000).toISOString()
    }
  ]
};

export default function DiscussionScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = React.useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically make an API call to send the message
      setNewMessage('');
    }
  };

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

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-bold">{discussion.title}</h1>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              {discussion.participants} شرکت‌کننده
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {discussion.description}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            ایجاد شده در {formatRelativeDate(discussion.createdAt)}
          </p>
        </Card>
      </div>

      <div className="space-y-4 mb-6">
        {discussion.messages.map((message) => (
          <Card key={message.id} className="p-4">
            <div className="flex gap-3">
              <Avatar src={message.user.avatar} alt={message.user.name} size="sm" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {message.user.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {formatRelativeDate(message.timestamp)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {message.content}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-4 sticky bottom-20">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="پیام خود را بنویسید..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button
            variant="primary"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}