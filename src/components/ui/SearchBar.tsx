import React from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
}

export default function SearchBar({ 
  value, 
  onChange, 
  placeholder = 'جستجو...', 
  className = '',
  autoFocus = false,
  readOnly = false,
  onClick
}: SearchBarProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${className}`}
      onClick={onClick}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        readOnly={readOnly}
        className={`w-full h-12 pl-12 pr-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg 
                   focus:ring-2 focus:ring-primary-500 focus:outline-none
                   text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                   ${readOnly ? 'cursor-pointer' : ''}`}
      />
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      
      <AnimatePresence>
        {value && !readOnly && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              onChange('');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full 
                     hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}