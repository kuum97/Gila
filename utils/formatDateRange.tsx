import { format } from 'date-fns';

const formatDateRange = ({
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

export default formatDateRange;
