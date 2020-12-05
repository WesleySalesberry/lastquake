import { api } from '../../Utils/api'
import { REGISTER_FAIL } from '../types'


export const register = async ({name, email, password}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password})

    try {
        const response = await api.post('register', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })
        dispatch(loaduser())
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: REGISTER_FAIL
        })

    }
}