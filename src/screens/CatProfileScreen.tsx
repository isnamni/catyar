import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CatProfile from '../components/cat/CatProfile';

export default function CatProfileScreen() {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto py-8 px-4"
    >
      <CatProfile catId={id} />
    </motion.div>
  );
}