import React from 'react';
import { MapPin, Heart, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCatStore } from '../../stores/useCatStore';
import Card from '../ui/Card';
import { formatRelativeDate } from '../../utils/date';
import { motion, AnimatePresence } from 'framer-motion';
import { CatReport } from '../../types/cat';
import { useSearch } from '../../hooks/useSearch';
import SearchBar from '../ui/SearchBar';

interface CatListProps {
  cats: CatReport[];
  showSearch?: boolean;
}

const conditionIcons = {
  needsFood: '🍽️',
  needsMedical: '🏥',
  needsShelter: '🏠'
};

const conditionLabels = {
  needsFood: 'نیاز به غذا',
  needsMedical: 'نیاز به درمان',
  needsShelter: 'نیاز به سرپناه'
};

export default function CatList({ cats = [], showSearch = false }: CatListProps) {
  const navigate = useNavigate();
  const { likedCats, likeCat } = useCatStore();
  
  const { searchQuery, setSearchQuery, filteredItems } = useSearch(cats, [
    'location.name',
    'description',
    'condition'
  ]);

  const handleLike = (e: React.MouseEvent, catId: string) => {
    e.stopPropagation();
    likeCat(catId);
  };

  const handleCardClick = (catId: string) => {
    navigate(`/cat/${catId}`);
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="space-y-4">
      {showSearch && (
        <div onClick={handleSearchClick}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="جستجوی گربه‌ها..."
            className="mb-6"
            readOnly
          />
        </div>
      )}

      {filteredItems.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            {searchQuery ? 'نتیجه‌ای یافت نشد' : 'موردی یافت نشد'}
          </p>
        </Card>
      ) : (
        <AnimatePresence>
          <div className="space-y-4">
            {filteredItems.map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={() => handleCardClick(cat.id)}
                className="cursor-pointer transform transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Card className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={cat.image}
                      alt="تصویر گربه"
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{cat.location.name}</span>
                        </div>
                        <button
                          onClick={(e) => handleLike(e, cat.id)}
                          className={`p-2 rounded-full transition-colors ${
                            likedCats.has(cat.id)
                              ? 'text-rose-500'
                              : 'text-gray-400 hover:text-rose-500'
                          }`}
                        >
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{conditionIcons[cat.condition]}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {conditionLabels[cat.condition]}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                        {cat.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formatRelativeDate(cat.reportedAt)}</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: cat.urgencyLevel }).map((_, i) => (
                            <AlertTriangle
                              key={i}
                              className="w-4 h-4 text-amber-500"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}