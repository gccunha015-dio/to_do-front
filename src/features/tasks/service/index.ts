import { TTask } from '../../../@types';
import api from './api';

export async function createTasks(tasks: TTask[]) {
	const { data } = await api.post('/tasks', { tasks });
	return data.createdTasks as TTask[];
}

export async function readTasks(ids?: number[]) {
	const params = ids ? { ids: ids.toString() } : {};
	const { data } = await api.get('/tasks', { params });
	return data.tasks as TTask[];
}

export async function updateTask({ id, description, isDone }: TTask) {
	const { data } = await api.patch(`/tasks/${id}`, {
		taskData: { description, isDone },
	});
	return data.updatedTask as TTask;
}

export async function deleteTasks(ids?: number[]) {
	const params = ids ? { ids: ids.toString() } : {};
	await api.delete('/tasks', { params });
}
