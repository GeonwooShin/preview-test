import { RestDayProps } from '@hooks/useGetQueries';
import { extractDateInfo } from '@utils/extractFormat';
import { memo } from 'react';
import { TaskProps } from '@features/taskSlice';
import styled from 'styled-components';
import TaskList from '@components/Calendar/TaskList';

type CurrentMonthDaysProps = {
  today: string;
  restDays: RestDayProps[];
  day: string;
  tasksByDate: TaskProps[];
};

const CurrentMonthDays = memo(
  ({ today, restDays, day, tasksByDate }: CurrentMonthDaysProps) => {
    return (
      <>
        <StyledContainer>
          {extractDateInfo(day, 'day') === '1' && (
            <StyledMonthContainer>
              {extractDateInfo(day, 'month')}월
            </StyledMonthContainer>
          )}
          <StyledTodayText $isToday={day === today}>
            {extractDateInfo(day, 'day')}
          </StyledTodayText>
          <div>일</div>
        </StyledContainer>
        <StyledUl>
          {restDays.map(
            (restDay) =>
              restDay.locdate === parseInt(day) && (
                <TaskList
                  key={restDay.seq}
                  dateName={restDay.dateName}
                  isHoliday={restDay.isHoliday}
                />
              ),
          )}
          {tasksByDate.map(
            (task, idx) =>
              task.locdate === day && (
                <TaskList
                  key={idx}
                  dateName={task.taskName}
                  isHoliday={task.isHoliday}
                  taskId={task.taskId}
                />
              ),
          )}
        </StyledUl>
      </>
    );
  },
);

CurrentMonthDays.displayName = 'CurrentMonthDays';

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 38px;
  min-height: 38px;
  max-height: 38px;
  padding-right: 8px;
`;

const StyledMonthContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  padding-right: 4px;
`;

const StyledTodayText = styled.span<{ $isToday: boolean }>`
  ${({ $isToday }) =>
    $isToday &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    padding: 14px;
    border-radius: 50%;
    background-color: red;
    color: white;
  `}
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export default CurrentMonthDays;
