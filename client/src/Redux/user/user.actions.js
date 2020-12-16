import { api, setAuthToken } from '../../Utils/api'

import { REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED, AUTH_ERROR } from '../types'
import { setAlert } from '../alert/alert.action'


export const loaduser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const response = await api.get('login')
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
        const response = await api.post('register', userData)
        console.log(response.data.error)
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

export const login = (email, password) => async dispatch => {
    const userData = { email, password }
    try {
        const response = await api.post('login', userData)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
       dispatch(loaduser())

    } catch (error) {
        console.log(`Login Error: ${error}`)
        // const errors = error.response.data.errors;
        // if (errors) {
		// 	errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        // }

        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}