import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:5000/api/',
	 headers: {
            'Content-Type': 'application/json'
        }
	
});

// api.interceptors.response.use(
//   res => res,
//   err => {
//     if (err.response.status === 401) {
//       store.dispatch({ type: LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );


export const setAuthToken = token => {
	if (token) {
		api.defaults.headers.common['x-auth-token'] = token;
	} else {
		delete api.defaults.headers.common['x-auth-token'];
	}
};

export const currentData = async (name) => {
	try {
		const response =  await api.get(`${name}`)
		return response
	} catch (error) {
		console.log(`> Error from current data search: ${error}`)
		
	}
}

export const citySearch = async (city) => {
	try {
		const cityData = await api.get(`search/${city}`)
		return cityData
		
	} catch (error) {

		console.log(`> Error from city search: ${error}`)
		
	}
}

