import { RestDayProps } from '@hooks/useGetQueries';
import { TaskProps, addTask } from '@features/taskSlice';
import { memo, useContext } from 'react';
import { ModalContext } from '@context/ModalContext';
import { useAppDispatch, useAppSelector } from '@features/hooks';
import styled from 'styled-components';
import AddModal from '@components/common/Modal/AddModal';
import PrevMonthDays from '@components/Calendar/PrevMonthDays';
import CurrentMonthDays from '@components/Calendar/CurrentMonthDays';
import NextMonthDays from '@components/Calendar/NextMonthDays';

type CalendarDaysProps = {
  today: string;
  prevMonthDayList: string[];
  currentMonthDayList: string[];
  nextMonthDayList: string[];
  restDays: RestDayProps[];
};

const CalendarDays = memo(
  ({
    today,
    prevMonthDayList,
    currentMonthDayList,
    nextMonthDayList,
    restDays,
  }: CalendarDaysProps) => {
    const { openModal } = useContext(ModalContext);
    const dispatch = useAppDispatch();
    const tasksByDate = useAppSelector((state) => state.task.tasks);

    const handleAddTask = async (date: string) => {
      const taskInfo = await openModal(<AddModal />).catch(() => false);
      if (taskInfo) {
        const newTask: TaskProps = {
          taskName: taskInfo as string,
          isHoliday: 'N',
          locdate: date,
          taskId: Date.now().toString(),
        };
        dispatch(addTask(newTask));
      }
    };

    return (
      <StyledDateGrid>
        {prevMonthDayList.map((day) => (
          <StyledPrevDates key={day} onClick={() => handleAddTask(day)}>
            <PrevMonthDays
              restDays={restDays}
              day={day}
              tasksByDate={tasksByDate}
            />
          </StyledPrevDates>
        ))}

        {currentMonthDayList.map((day) => (
          <StyledCurDates key={day} onClick={() => handleAddTask(day)}>
            <CurrentMonthDays
              today={today}
              restDays={restDays}
              day={day}
              tasksByDate={tasksByDate}
            />
          </StyledCurDates>
        ))}

        {nextMonthDayList.map((day) => (
          <StyledNextDates key={day} onClick={() => handleAddTask(day)}>
            <NextMonthDays
              restDays={restDays}
              day={day}
              tasksByDate={tasksByDate}
            />
          </StyledNextDates>
        ))}
      </StyledDateGrid>
    );
  },
);

CalendarDays.displayName = 'CalendarDays';

const StyledDateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: 100%;
  font-size: 16px;
  & > * {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--gray-6);
    border-left: 1px solid var(--gray-6);
    text-align: right;
    &:nth-child(7n) {
      border-right: 1px solid var(--gray-6);
    }
  }
`;

const StyledPrevDates = styled.div`
  cursor: pointer;
  padding: 4px;
  height: 130px;
  &:nth-child(7n + 1),
  &:nth-child(7n) {
    background-color: var(--gray-7);
  }
  color: var(--gray-5);
`;

const StyledCurDates = styled.div`
  cursor: pointer;
  padding: 4px;
  height: 130px;
  color: var(--gray-1);
  &:nth-child(7n + 1),
  &:nth-child(7n) {
    background-color: var(--gray-7);
    color: var(--gray-4);
  }
  overflow: hidden;
`;

const StyledNextDates = styled.div`
  cursor: pointer;
  padding: 4px;
  height: 130px;
  &:nth-child(7n + 1),
  &:nth-child(7n) {
    background-color: var(--gray-7);
  }
  color: var(--gray-5);
`;

export default CalendarDays;
