import { memo } from 'react';
import { useRestDayInfo } from '@hooks/useGetQueries';
import styled from 'styled-components';
import useCalendar from '@hooks/useCalendar';
import Header from '@components/common/Header';
import CalendarDays from '@components/Calendar/CalendarDays';
import CalendarWeeks from '@components/Calendar/CalendarWeeks';

const Calendar = memo(() => {
  const {
    today,
    curCalendar,
    currentYear,
    handlePreviousMonth,
    handleNextMonth,
    handleToday,
    prevMonthDayList,
    currentMonthDayList,
    nextMonthDayList,
  } = useCalendar();
  const { data: restDays } = useRestDayInfo(currentYear);
  return (
    <>
      <Header
        curCalendar={curCalendar}
        handlePreviousMonth={handlePreviousMonth}
        handleNextMonth={handleNextMonth}
        handleToday={handleToday}
      />
      <StyledContainer>
        <CalendarWeeks />
        <CalendarDays
          today={today}
          prevMonthDayList={prevMonthDayList}
          currentMonthDayList={currentMonthDayList}
          nextMonthDayList={nextMonthDayList}
          restDays={restDays}
        />
      </StyledContainer>
    </>
  );
});

Calendar.displayName = 'Calendar';

const StyledContainer = styled.div`
  height: 100%;
  border-collapse: collapse;
`;

export default Calendar;
