import dayjs from 'dayjs';

export const dateParser = (dateValue, outputFormat = 'MMM YYYY') => {
  if (dateValue === null) return;
  const dayjsDate = dayjs(dateValue);
  return dayjsDate.format(outputFormat);
};

export const scrollToElement = (ref) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
};
