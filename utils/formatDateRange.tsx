/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns';

export const formatDateRange = (startDateString: Date, endDateString: Date) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  const formattedStartDate = format(startDate, 'yyyy-MM-dd');
  const formattedEndDate = format(endDate, 'yyyy-MM-dd');

  return `${formattedStartDate} ~ ${formattedEndDate}`;
};
