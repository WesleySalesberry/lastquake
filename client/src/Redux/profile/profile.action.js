import { api } from '../../Utils/api'
import { ACCOUNT_DELETED, CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from '../types'
import { setAlert } from '../alert/alert.action'

export const myProfile = () => async dispatch => {
    try {
        const response = await api.get('profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: response.data
        })
    } catch (error) {
        console.log(`Profile/Me: ${error}`)
        dispatch({
            type: PROFILE_ERROR,
        })
    }

}

export const upDateProfile = (bio) => async dispatch => {
    try {
        const response = await api.post('profile/', bio)
        dispatch({
            type: UPDATE_PROFILE,
            payload: response.data.bio
        })
    } catch (error) {
        
    }
}

export const deleteAccount = () => async dispatch => {
    if(window.confirm('Are you sure? This can NOT be undone!')){
    try {
        await api.delete('profile')
        dispatch({type: CLEAR_PROFILE})
        dispatch({type: ACCOUNT_DELETED})

        setAlert('Account Permanantly deleted')
        
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
        
    }
 }
}