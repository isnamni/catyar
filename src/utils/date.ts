import { formatDistance, parseISO } from 'date-fns';

export const formatPersianDate = (date: string) => {
  try {
    return formatDistance(parseISO(date), new Date(), { addSuffix: true });
  } catch (error) {
    return 'تاریخ نامشخص';
  }
};

export const formatRelativeDate = (date: string) => {
  try {
    return formatDistance(parseISO(date), new Date(), { addSuffix: true });
  } catch (error) {
    return 'تاریخ نامشخص';
  }
};