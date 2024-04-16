import { memo } from 'react';
import styled from 'styled-components';

const week = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarWeeks = memo(() => {
  return (
    <StyledDayGrid>
      {week.map((day, idx) => (
        <StyledDayBox key={idx}>
          <StyledDay $isWeekend={idx === 0 || idx === 6}>{day}</StyledDay>
        </StyledDayBox>
      ))}
    </StyledDayGrid>
  );
});

const StyledDayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--gray-6);
  text-align: right;
`;

const StyledDayBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  height: 25px;
  padding-right: 8px;
`;

const StyledDay = styled.div<{ $isWeekend: boolean }>`
  color: ${({ $isWeekend }) =>
    $isWeekend ? 'var(--gray-3)' : 'var(--gray-1)'};
`;

export default CalendarWeeks;
