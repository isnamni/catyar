import React, { useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import CatIcon from '../ui/CatIcon';
import NotificationsMenu from './NotificationsMenu';
import MainMenu from './MainMenu';

export default function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    if (showNotifications) setShowNotifications(false);
  };

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
    if (showMenu) setShowMenu(false);
  };

  const handleClickOutside = () => {
    setShowMenu(false);
    setShowNotifications(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={handleMenuClick}
            className="relative"
          >
            {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <CatIcon variant="happy" className="w-8 h-8 text-primary-500" />
            <span className="font-bold text-gray-900 dark:text-white">پاو پروتکت</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <div className="relative">
                <Button
                  variant="ghost"
                  className="relative"
                  onClick={handleNotificationsClick}
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                    2
                  </span>
                </Button>
                <NotificationsMenu isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
              </div>

              <div className="hidden md:flex items-center gap-2">
                <Avatar 
                  src={user?.avatar} 
                  alt={user?.name || 'کاربر'}
                  size="sm"
                />
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">{user?.name}</p>
                  <p className="text-primary-500 text-sm">سطح: {user?.level}</p>
                </div>
              </div>
            </>
          ) : (
            <Button 
              variant="primary"
              onClick={() => navigate('/auth')}
            >
              ورود / ثبت‌نام
            </Button>
          )}
        </div>
      </div>

      {(showMenu || showNotifications) && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40" 
          onClick={handleClickOutside}
        />
      )}

      <MainMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </header>
  );
}