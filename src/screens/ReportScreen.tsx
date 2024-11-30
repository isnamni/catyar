import React from 'react';
import { motion } from 'framer-motion';
import CatReportForm from '../components/forms/CatReportForm';

export default function ReportScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4"
    >
      <CatReportForm />
    </motion.div>
  );
}