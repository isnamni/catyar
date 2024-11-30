export interface Park {
  id: string;
  name: string;
  image: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  description: string;
  mainSupporter?: {
    id: string;
    name: string;
    avatar: string;
    level: string;
  };
  stats: {
    cats: number;
    supporters: number;
    feedingStations: number;
  };
  features: string[];
  schedule: {
    feedingTimes: string[];
    supporterVisits: string[];
  };
}