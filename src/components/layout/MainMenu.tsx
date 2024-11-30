import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, MapPin, Users, Settings, LogOut, PlusCircle } from 'lucide-react';
import Button from '../ui/Button';
import { useAuthStore } from '../../stores/useAuthStore';
import CitySelector from '../ui/CitySelector';

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: <Home className="w-5 h-5" />, label: 'خانه', path: '/' },
  { icon: <MapPin className="w-5 h-5" />, label: 'نقشه', path: '/map' },
  { icon: <PlusCircle className="w-5 h-5" />, label: 'گزارش گربه', path: '/report' },
  { icon: <Users className="w-5 h-5" />, label: 'جامعه', path: '/community' },
  { icon: <Settings className="w-5 h-5" />, label: 'تنظیمات', path: '/settings' },
];

export default function MainMenu({ isOpen, onClose }: MainMenuProps) {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuthStore();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/auth');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-0 left-0 z-50 px-4 py-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="max-w-md mx-auto">
              {isAuthenticated && (
                <div className="mb-4">
                  <CitySelector />
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.path}
                    variant="ghost"
                    className="justify-start py-3"
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.icon}
                    <span className="mr-2">{item.label}</span>
                  </Button>
                ))}
              </div>
              
              {isAuthenticated && (
                <>
                  <hr className="my-4 border-gray-200 dark:border-gray-700" />
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-rose-500"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="mr-2">خروج</span>
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}