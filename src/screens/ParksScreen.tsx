import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ParkList from '../components/parks/ParkList';
import { useParkStore } from '../stores/useParkStore';

export default function ParksScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { parks } = useParkStore();

  const filteredParks = parks.filter(park =>
    park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    park.location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    park.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      <h1 className="text-2xl font-bold mb-6">پارک‌های تحت پوشش</h1>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="جستجوی پارک..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      <ParkList parks={filteredParks} />
    </motion.div>
  );
}