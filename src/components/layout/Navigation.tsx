import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MapPin, Users, User, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', icon: Home, label: 'خانه' },
  { path: '/map', icon: MapPin, label: 'نقشه' },
  { path: '/report', icon: PlusCircle, label: 'گزارش' },
  { path: '/community', icon: Users, label: 'جامعه' },
  { path: '/profile', icon: User, label: 'پروفایل' }
];

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1B1E]/90 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-around">
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? 'text-primary-500' : 'text-gray-400 hover:text-primary-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <Icon className="w-6 h-6" />
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary-500 rounded-full -translate-x-1/2"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
                <span className="text-xs mt-1">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}