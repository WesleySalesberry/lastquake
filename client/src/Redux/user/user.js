import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
} from '../types';

const INITAL_STATE = {
    token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null
}

export const userReducer = (state = INITAL_STATE, action) =>{
    const {type, payload} = action;

    switch(type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
				isAuthenticated: true,
				loading: false,
				user: payload
            }
            
        case USER_LOADED:
            return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload
			};

        case LOGOUT:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: null,
	            loading: true,
	            user: null
            }
        default:
            return state;
    }
}