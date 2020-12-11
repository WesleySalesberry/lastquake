import api from '../../Utils/api'

import { REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED, AUTH_ERROR } from '../types'
import { setAlert } from '../alert/alert.action'

export const loaduser = () => async dispatch =>{
    try {
        const response = await api.get('user')
        console.log(response.data)
        dispatch({
            type: USER_LOADED,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
        
    }
}


export const register = (userData) => async dispatch => {
    try {
        console.log(userData)
        const response = await api.post('register', userData)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })
        dispatch(loaduser())
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors)
        if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: REGISTER_FAIL
        })

    }
}

export const login = userData => async dispatch => {
    try {
        const response = await api.post('login', userData)
        console.log(response.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        //dispatch(loaduser())

    } catch (error) {
        console.log(`${error}`)
        const errors = error.response.data;
        console.log(error)
        if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logout = () => ({type: LOGOUT})