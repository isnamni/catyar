import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'واکسیناسیون رایگان گربه‌ها',
    date: '۱۵ اسفند',
    time: '۱۵:۰۰',
    location: 'پارک لاله',
    participants: 45,
    capacity: 50,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'کارگاه آموزشی مراقبت از گربه‌ها',
    date: '۲۰ اسفند',
    time: '۱۷:۰۰',
    location: 'پارک ملت',
    participants: 28,
    capacity: 30,
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80'
  }
];

export default function CommunityEvents() {
  const navigate = useNavigate();

  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary-500" />
            رویدادهای پیش رو
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/community/events')}
          >
            مشاهده همه
          </Button>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/community/events/${event.id}`)}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date} - {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>
                    {event.participants} از {event.capacity} نفر
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  جزئیات بیشتر
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}