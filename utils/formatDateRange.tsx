/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns';

export const formatDateRange = ({
  startDateString,
  endDateString,
}: {
  startDateString: Date;
  endDateString: Date;
}) => {
  const formattedStartDate = format(startDateString, 'yyyy.MM.dd');
  const formattedEndDate = format(endDateString, 'yyyy.MM.dd');

  return `${formattedStartDate} ~ ${formattedEndDate}`;
};
