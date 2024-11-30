import React from 'react';

interface CategoryButtonProps {
  label: string;
  icon: React.ReactNode;
  colorClass: string;
}

export default function CategoryButton({ label, icon, colorClass }: CategoryButtonProps) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
      <span className={`${colorClass} p-2 rounded-full`}>
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{label}</span>
    </button>
  );
}