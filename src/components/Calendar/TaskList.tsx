import { ModalContext } from '@context/ModalContext';
import { removeTask } from '@features/taskSlice';
import { memo, useContext } from 'react';
import { useAppDispatch } from '@features/hooks';
import styled from 'styled-components';
import DeleteModal from '@components/common/Modal/DeleteModal';

type TaskListProps = {
  taskId?: string;
  dateName: string;
  isHoliday: 'Y' | 'N';
  locdate?: string;
};

const TaskList = memo(({ dateName, isHoliday, taskId }: TaskListProps) => {
  const dispatch = useAppDispatch();
  const { openModal } = useContext(ModalContext);

  const handleRemoveTask = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (taskId) {
      const isDelete = await openModal(<DeleteModal />).catch(() => false);
      if (isDelete) {
        dispatch(removeTask({ taskId }));
      }
    }
  };

  return (
    <ListItem $isHoliday={isHoliday} onClick={handleRemoveTask}>
      {isHoliday === 'N' && <StyledSpan />}
      {dateName}
    </ListItem>
  );
});

TaskList.displayName = 'TaskList';

const ListItem = styled.li<{ $isHoliday: 'Y' | 'N' }>`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px;
  font-size: 12px;
  color: ${({ $isHoliday }) =>
    $isHoliday === 'N' ? 'white' : 'var(--gray-1)'};
  border-radius: 4px;
  background-color: ${({ $isHoliday }) =>
    $isHoliday === 'Y' ? 'var(--holiday)' : 'var(--task)'};
`;

const StyledSpan = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: white;
  margin-right: 2px;
`;

export default TaskList;
