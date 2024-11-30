import React from 'react';
import { motion } from 'framer-motion';
import CommunityStats from '../components/community/CommunityStats';
import TopSupporters from '../components/community/TopSupporters';
import RecentActivities from '../components/community/RecentActivities';
import CommunityDiscussions from '../components/community/CommunityDiscussions';
import CommunityAchievements from '../components/community/CommunityAchievements';
import CommunityEvents from '../components/community/CommunityEvents';
import CommunityLeaderboard from '../components/community/CommunityLeaderboard';

export default function CommunityScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20 space-y-6"
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">جامعه حامیان</h1>
      
      <CommunityStats />
      <CommunityLeaderboard />
      <CommunityEvents />
      <TopSupporters />
      <CommunityAchievements />
      <RecentActivities />
      <CommunityDiscussions />
    </motion.div>
  );
}