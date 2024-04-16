export const extractDateInfo = (
  date: string,
  type: 'year' | 'month' | 'day',
) => {
  const [year, month, day] = [
    date.substring(0, 4),
    parseInt(date.substring(4, 6), 10).toString(),
    parseInt(date.substring(6, 8), 10).toString(),
  ];

  switch (type) {
    case 'year':
      return year;
    case 'month':
      return month;
    case 'day':
      return day;
    default:
      throw new Error('Invalid type');
  }
};
