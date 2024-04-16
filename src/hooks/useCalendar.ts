import { getCurMonthFirstDay } from '@utils/getCurMonthFirstDay';
import { getDaysInMonth } from '@utils/getDaysInMonth';
import { getFormatDate } from '@utils/getFormatDate';
import { useState } from 'react';

const CALENDAR_LENGTH = 42;

const useCalendar = () => {
  const [curCalendar, setCurCalendar] = useState<Date>(() =>
    getCurMonthFirstDay(new Date()),
  );
  const totalMonthDays = getDaysInMonth(curCalendar);
  const currentYear = curCalendar.getFullYear().toString();
  const today = getFormatDate(new Date());

  const handleToday = () => {
    setCurCalendar(getCurMonthFirstDay(new Date()));
  };

  const handlePreviousMonth = () => {
    setCurCalendar(
      new Date(curCalendar.getFullYear(), curCalendar.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurCalendar(
      new Date(curCalendar.getFullYear(), curCalendar.getMonth() + 1, 1),
    );
  };

  const prevLastDay = new Date(
    curCalendar.getFullYear(),
    curCalendar.getMonth(),
    0,
  );
  const prevMonthLastDate = prevLastDay.getDate();

  const prevMonthDayList = Array.from({
    length: curCalendar.getDay(),
  })
    .map((_, idx) =>
      getFormatDate(
        new Date(
          curCalendar.getFullYear(),
          curCalendar.getMonth() - 1,
          prevMonthLastDate - idx,
        ),
      ),
    )
    .reverse();

  const currentMonthDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) =>
      getFormatDate(
        new Date(curCalendar.getFullYear(), curCalendar.getMonth(), i + 1),
      ),
  );

  const nextMonthDayList = Array.from({
    length:
      CALENDAR_LENGTH - currentMonthDayList.length - prevMonthDayList.length,
  }).map((_, idx) =>
    getFormatDate(
      new Date(curCalendar.getFullYear(), curCalendar.getMonth() + 1, idx + 1),
    ),
  );

  return {
    today,
    curCalendar,
    currentYear,
    handlePreviousMonth,
    handleNextMonth,
    handleToday,
    prevMonthDayList,
    currentMonthDayList,
    nextMonthDayList,
  };
};
export default useCalendar;
