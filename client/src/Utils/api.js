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

export const citySearch = async (city) => {
	try {
		const cityData = await api.get(`/search/${city}`)
		return cityData
		
	} catch (error) {

		console.log(`> Error from city search: ${error}`)
		
	}
}