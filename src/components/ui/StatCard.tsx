import React from 'react';
import Card from './Card';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
  borderColor: string;
}

export default function StatCard({ icon, value, label, bgColor, borderColor }: StatCardProps) {
  return (
    <Card className={`bg-gradient-to-br ${bgColor} border ${borderColor}`}>
      <div className="flex flex-col items-center">
        {icon}
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
    </Card>
  );
}