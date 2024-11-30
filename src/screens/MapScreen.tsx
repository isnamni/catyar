import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function MapScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[calc(100vh-8rem)]"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="جستجو در نقشه..."
            className="w-full h-12 pl-4 pr-12 rounded-2xl bg-white shadow-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        <Button variant="ghost" className="!p-3">
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      <Card className="h-[calc(100%-4rem)]">
        <div className="bg-gray-100 h-full rounded-2xl">
          {/* Map will be integrated here */}
          <div className="h-full flex items-center justify-center text-gray-500">
            نقشه در حال بارگذاری...
          </div>
        </div>
      </Card>
    </motion.div>
  );
}