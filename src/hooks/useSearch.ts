import { useState, useCallback, useMemo } from 'react';
import { get } from 'lodash';

export function useSearch<T>(items: T[] = [], searchFields: string[] = []) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim() || !items) return items;

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const searchTerms = normalizedQuery.split(' ').filter(term => term.length > 0);

    return items.filter((item) => {
      if (!item) return false;
      
      const searchableText = searchFields.map(field => {
        const value = get(item, field);
        return value ? String(value).toLowerCase() : '';
      }).join(' ');

      return searchTerms.every(term => searchableText.includes(term));
    });
  }, [items, searchQuery, searchFields]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems
  };
}