export const getNewDateObj = (newDate: Date) => {
  const year: number = newDate.getFullYear();
  const month: string = ('0' + (newDate.getMonth() + 1)).slice(-2);
  const date: string = ('0' + newDate.getDate()).slice(-2);
  const day: number = newDate.getDay();
  const hours: number = newDate.getHours();
  const minutes: number = newDate.getMinutes();
  const seconds: string = ('0' + newDate.getSeconds()).slice(-2);

  return { year, month, date, day, hours, minutes, seconds };
};

export const getMonthStartEndDate = (newDate: Date) => {
  const start = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
  const end = new Date(start.setDate(start.getDate() - 1));
  const startDate = start.getDate();
  const startDay = start.getDay();
  const endDate = end.getDate();
  const endDay = end.getDay();

  return { startDate, startDay, endDate, endDay };
};

export const getDiffDays = (date1: Date, date2: Date) => {
  const startDate = date1.getTime();
  const endDate = date2.getTime();
  const diffDate = endDate - startDate;
  return Math.abs(diffDate / (1000 * 3600 * 24));
};
