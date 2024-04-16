export const getCurMonthFirstDay = (date: Date): Date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, 1);
};
