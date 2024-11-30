import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SearchBar from '../components/ui/SearchBar';
import { useCatStore } from '../stores/useCatStore';
import { useSearch } from '../hooks/useSearch';
import Button from '../components/ui/Button';
import CatList from '../components/home/CatList';

export default function SearchScreen() {
  const navigate = useNavigate();
  const { cats } = useCatStore();
  const { searchQuery, setSearchQuery, filteredItems } = useSearch(cats);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      <div className="sticky top-0 bg-gray-50 dark:bg-gray-900 z-10 pb-4">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ChevronRight className="w-5 h-5" />
          بازگشت
        </Button>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="جستجو در گربه‌ها، پارک‌ها، دسته‌بندی‌ها و ..."
          className="mb-4"
          autoFocus
        />

        <div className="text-sm text-gray-500 dark:text-gray-400">
          {filteredItems.length} نتیجه یافت شد
        </div>
      </div>

      <div className="mt-4">
        <CatList cats={filteredItems} showSearch={false} />
      </div>
    </motion.div>
  );
}