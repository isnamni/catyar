import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, Clock, ChevronRight, Cat, Home } from 'lucide-react';
import { useParkStore } from '../stores/useParkStore';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import ParkFeatures from '../components/parks/ParkFeatures';
import ParkSchedule from '../components/parks/ParkSchedule';
import ParkCats from '../components/parks/ParkCats';
import ParkSupporters from '../components/parks/ParkSupporters';

export default function ParkProfileScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getParkById } = useParkStore();
  
  const park = getParkById(id!);
  if (!park) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate(-1)}
      >
        <ChevronRight className="w-5 h-5" />
        بازگشت
      </Button>

      <div className="relative rounded-2xl overflow-hidden mb-6">
        <img
          src={park.image}
          alt={park.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h1 className="text-2xl font-bold text-white mb-2">{park.name}</h1>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{park.location.address}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-4 text-center">
          <Cat className="w-6 h-6 text-primary-500 mx-auto mb-2" />
          <div className="text-xl font-bold">{park.stats.cats}</div>
          <div className="text-sm text-gray-500">گربه</div>
        </Card>
        <Card className="p-4 text-center">
          <Users className="w-6 h-6 text-rose-500 mx-auto mb-2" />
          <div className="text-xl font-bold">{park.stats.supporters}</div>
          <div className="text-sm text-gray-500">حامی</div>
        </Card>
        <Card className="p-4 text-center">
          <Home className="w-6 h-6 text-amber-500 mx-auto mb-2" />
          <div className="text-xl font-bold">{park.stats.feedingStations}</div>
          <div className="text-sm text-gray-500">ایستگاه</div>
        </Card>
      </div>

      {park.mainSupporter && (
        <Card className="p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">حامی اصلی</h2>
          <div className="flex items-center gap-3">
            <Avatar
              src={park.mainSupporter.avatar}
              alt={park.mainSupporter.name}
              size="lg"
            />
            <div>
              <h3 className="font-medium">{park.mainSupporter.name}</h3>
              <p className="text-sm text-primary-500">{park.mainSupporter.level}</p>
            </div>
          </div>
        </Card>
      )}

      <ParkFeatures features={park.features} />
      <ParkSchedule schedule={park.schedule} />
      <ParkCats parkId={park.id} />
      <ParkSupporters parkId={park.id} />
    </motion.div>
  );
}