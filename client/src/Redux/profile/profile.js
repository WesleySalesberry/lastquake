import {
    GET_PROFILES,
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
} from '../types';

const initalState = {
    profile: null,
    profiles: [],
    loading: true,
    error:{}
}

export const profileReducer = (state=initalState, action) => {
    const { type, payload } = action

    switch(type){
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        
        default:
            return state;
    }
}