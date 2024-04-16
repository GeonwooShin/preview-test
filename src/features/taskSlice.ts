import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TaskProps = {
  taskId: string;
  taskName: string;
  isHoliday: 'Y' | 'N';
  locdate: string;
};

const initialState: { tasks: TaskProps[] } = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskProps>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action: PayloadAction<{ taskId: string }>) => {
      const { taskId } = action.payload;
      state.tasks = state.tasks.filter((task) => task.taskId !== taskId);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
