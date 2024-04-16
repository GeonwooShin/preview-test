export const getDaysInMonth = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
  return new Date(year, month, 0).getDate();
};
