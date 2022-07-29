import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { readAll } from './asyncActions';
import { TTask } from '../../../@types';

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
	reducers: {},
	extraReducers: (builder) => {
		[readAll].forEach((action) => {
			builder
				.addCase(action.pending, (state) => {
					state.status = 'loading';
				})
				.addCase(action.rejected, (state) => {
					state.status = 'failed';
				});
		});
		// [addMovieToList, removeMovieFromList].forEach((action) => {
		// 	builder.addCase(action.fulfilled, (state) => {
		// 		state.status = 'idle';
		// 	});
		// });
		// builder
		// 	.addCase(searchMovie.fulfilled, (state, action) => {
		// 		state.status = 'idle';
		// 		state.movies = action.payload;
		// 	})
		// 	.addCase(getLists.fulfilled, (state, action) => {
		// 		state.status = 'idle';
		// 		state.lists = action.payload;
		// 	});
	},
});

export const {} = tasksSlice.actions;

export const selectAll = (state: RootState) => state.tasks.all;
export const selectSelected = (state: RootState) => state.tasks.selected;

export default tasksSlice.reducer;
