import { formatInTimeZone } from 'date-fns-tz';

const formatDateRange = ({
  startDateString,
  endDateString,
}: {
  startDateString: Date;
  endDateString: Date;
}) => {
  const formattedStartDate = formatInTimeZone(startDateString, 'Asia/Seoul', 'yyyy.MM.dd');
  const formattedEndDate = formatInTimeZone(endDateString, 'Asia/Seoul', 'yyyy.MM.dd');

  return `${formattedStartDate} ~ ${formattedEndDate}`;
};

export default formatDateRange;
