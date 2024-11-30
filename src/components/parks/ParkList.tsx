import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Cat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useParkStore } from '../../stores/useParkStore';
import Card from '../ui/Card';

export default function ParkList() {
  const navigate = useNavigate();
  const { parks } = useParkStore();

  return (
    <div className="space-y-4">
      {parks.map((park, index) => (
        <motion.div
          key={park.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => navigate(`/park/${park.id}`)}
          className="cursor-pointer"
        >
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={park.image}
                alt={park.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-2">{park.name}</h3>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{park.location.address}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {park.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Cat className="w-4 h-4 text-primary-500" />
                    <span>{park.stats.cats} گربه</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-rose-500" />
                    <span>{park.stats.supporters} حامی</span>
                  </div>
                </div>
                <div className="text-primary-500 font-medium">
                  {park.schedule.feedingTimes[0]} - {park.schedule.feedingTimes[park.schedule.feedingTimes.length - 1]}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}