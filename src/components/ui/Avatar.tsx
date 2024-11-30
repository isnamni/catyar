import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-14 h-14'
};

export default function Avatar({ src, alt, size = 'md' }: AvatarProps) {
  return (
    <img 
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} rounded-full object-cover ring-2 ring-primary-500`}
    />
  );
}