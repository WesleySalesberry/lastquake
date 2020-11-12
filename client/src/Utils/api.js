import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:5000/api',
	
});

export const currentData = async (name) => {
	try {
		const response =  await api.get(`/${name}`)
		return response
	} catch (error) {
		console.log(`${error}`)
		
	}
}