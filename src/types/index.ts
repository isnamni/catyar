export interface User {
  name: string;
  avatar: string;
  level: string;
  points: number;
  totalHelped: number;
  successRate: number;
}

export interface MenuItem {
  icon: string;
  label: string;
  path: string;
}