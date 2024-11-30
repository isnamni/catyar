import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import { useNavigate } from 'react-router-dom';

const leaderboard = [
  {
    id: 1,
    name: 'علی محمدی',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
    points: 1250,
    rank: 1,
    badge: '🏆',
    level: 'حامی طلایی'
  },
  {
    id: 2,
    name: 'مریم احمدی',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    points: 980,
    rank: 2,
    badge: '🥈',
    level: 'حامی نقره‌ای'
  },
  {
    id: 3,
    name: 'رضا کریمی',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    points: 750,
    rank: 3,
    badge: '🥉',
    level: 'حامی برنزی'
  }
];

export default function CommunityLeaderboard() {
  const navigate = useNavigate();

  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            برترین‌های هفته
          </h2>
        </div>

        <div className="flex items-end justify-center gap-8 mb-8">
          {/* Second Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
            onClick={() => navigate(`/profile/${leaderboard[1].id}`)}
          >
            <Avatar
              src={leaderboard[1].avatar}
              alt={leaderboard[1].name}
              size="md"
              className="ring-4 ring-gray-400"
            />
            <span className="text-2xl mt-2">{leaderboard[1].badge}</span>
            <div className="w-20 h-24 bg-gray-400 rounded-t-lg mt-2" />
          </motion.div>

          {/* First Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
            onClick={() => navigate(`/profile/${leaderboard[0].id}`)}
          >
            <Avatar
              src={leaderboard[0].avatar}
              alt={leaderboard[0].name}
              size="lg"
              className="ring-4 ring-amber-500"
            />
            <span className="text-2xl mt-2">{leaderboard[0].badge}</span>
            <div className="w-20 h-32 bg-amber-500 rounded-t-lg mt-2" />
          </motion.div>

          {/* Third Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
            onClick={() => navigate(`/profile/${leaderboard[2].id}`)}
          >
            <Avatar
              src={leaderboard[2].avatar}
              alt={leaderboard[2].name}
              size="md"
              className="ring-4 ring-amber-700"
            />
            <span className="text-2xl mt-2">{leaderboard[2].badge}</span>
            <div className="w-20 h-20 bg-amber-700 rounded-t-lg mt-2" />
          </motion.div>
        </div>

        <div className="space-y-4">
          {leaderboard.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => navigate(`/profile/${user.id}`)}
            >
              <div className={`w-8 h-8 ${
                index === 0 ? 'bg-amber-500' : 
                index === 1 ? 'bg-gray-400' : 
                'bg-amber-700'
              } rounded-full flex items-center justify-center text-white font-bold`}>
                {user.rank}
              </div>
              <Avatar src={user.avatar} alt={user.name} size="sm" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <span className="text-sm text-primary-500">{user.level}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-gray-500">
                    {user.points.toLocaleString()} امتیاز
                  </span>
                </div>
              </div>
              <div className="text-2xl">{user.badge}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}