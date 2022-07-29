import { createAsyncThunk } from '@reduxjs/toolkit';

export const readAll = createAsyncThunk(
	'tasks/readAll',
	async () => await Promise.resolve(10)
);
