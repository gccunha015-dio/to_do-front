import axios from 'axios';
import env from '../../../config';

const api = axios.create({
	baseURL: `${env.PROTOCOL}://${env.HOST}:${env.PORT}`,
});

export default api;
