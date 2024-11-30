export type CatCondition = 'needsFood' | 'needsMedical' | 'needsShelter';
export type UrgencyLevel = 1 | 2 | 3;

export interface CatLocation {
  name: string;
  latitude: number;
  longitude: number;
}

export interface CatReport {
  id: string;
  image: string;
  location: CatLocation;
  condition: CatCondition;
  urgencyLevel: UrgencyLevel;
  description: string;
  reportedAt: string;
  supporters: number;
}

export interface CatFormData {
  image: File | null;
  location: CatLocation;
  condition: CatCondition;
  urgencyLevel: UrgencyLevel;
  description: string;
}

export interface CategoryInfo {
  id: CatCondition;
  label: string;
  description: string;
  icon: string;
  color: string;
}