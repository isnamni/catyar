import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'default',
  className 
}: BadgeProps) {
  const variants = {
    default: 'bg-primary-500 text-white',
    secondary: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white',
    outline: 'border border-gray-200 dark:border-gray-700'
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}