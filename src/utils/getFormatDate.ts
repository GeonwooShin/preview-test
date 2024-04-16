export const getFormatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

export const getDivideFormatDate = (date: string): string => {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  return `${year}-${month}-${day}`;
};

export const removeHyphenFromDate = (dateString: string) => {
  return dateString.replace(/-/g, '');
};
