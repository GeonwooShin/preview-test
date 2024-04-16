import { RestDayProps } from '@hooks/useGetQueries';
import { extractDateInfo } from '@utils/extractFormat';
import { memo } from 'react';
import { TaskProps } from '@features/taskSlice';
import styled from 'styled-components';
import TaskList from '@components/Calendar/TaskList';

type PrevMonthDaysProps = {
  restDays: RestDayProps[];
  day: string;
  tasksByDate: TaskProps[];
};

const PrevMonthDays = memo(
  ({ restDays, day, tasksByDate }: PrevMonthDaysProps) => {
    return (
      <>
        <StyledContainer>{`${extractDateInfo(day, 'day')}일`}</StyledContainer>
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

PrevMonthDays.displayName = 'PrevMonthDays';

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  padding-right: 8px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export default PrevMonthDays;
