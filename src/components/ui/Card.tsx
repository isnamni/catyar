import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "rounded-2xl p-4 bg-white dark:bg-gray-800 shadow-card transition-colors",
      className
    )}>
      {children}
    </div>
  );
}