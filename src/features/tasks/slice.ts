import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import * as asyncActions from './asyncActions';
import { TTask } from '../../@types';

export const { createTasks, readTasks, updateTask } = asyncActions;

export interface TasksState {
	all: TTask[];
	selected: number[];
	status: 'idle' | 'loading' | 'failed';
}

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		all: [],
		selected: [],
		status: 'idle',
	} as TasksState,
	reducers: {
		toggleOne({ selected }, { payload }: PayloadAction<number>) {
			selected.includes(payload)
				? selected.findIndex(
						(value, index) => value === payload && selected.splice(index, 1)
				  )
				: selected.push(payload);
		},

		toggleAll({ all, selected }, { payload }: PayloadAction<boolean>) {
			selected.length = 0;
			payload && selected.push(...all.map(({ id }) => Number(id)));
		},
	},
	extraReducers: (builder) => {
		[createTasks, readTasks, updateTask].forEach((action) => {
			builder
				.addCase(action.pending, (state) => {
					state.status = 'loading';
				})
				.addCase(action.rejected, (state) => {
					state.status = 'failed';
				});
		});
		[createTasks, updateTask].forEach((action) => {
			builder.addCase(action.fulfilled, (state) => {
				state.status = 'idle';
			});
		});
		builder.addCase(readTasks.fulfilled, (state, action) => {
			state.status = 'idle';
			state.all = action.payload;
		});
	},
});

export const { toggleOne, toggleAll } = tasksSlice.actions;

export const selectAll = (state: RootState) => state.tasks.all;
export const selectSelected = (state: RootState) => state.tasks.selected;

export default tasksSlice.reducer;
