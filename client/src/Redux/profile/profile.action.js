import { api } from '../../Utils/api'
import { GET_PROFILE, PROFILE_ERROR } from '../types'

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