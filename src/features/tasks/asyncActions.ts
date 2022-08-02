import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTask } from '../../@types';
import * as service from './service';

export const createTasks = createAsyncThunk(
	'tasks/createTasks',
	async (tasks: TTask[]) => await service.createTasks(tasks)
);

export const readTasks = createAsyncThunk(
	'tasks/readTasks',
	async (ids?: number[]) => await service.readTasks(ids)
);

export const updateTask = createAsyncThunk(
	'tasks/updateTask',
	async (task: TTask) => await service.updateTask(task)
);
