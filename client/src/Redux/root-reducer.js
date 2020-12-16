import {combineReducers} from 'redux';
import { alertReducer } from './alert/alert';
import { userReducer } from './user/user'
import {profileReducer} from './profile/profile'

export default combineReducers({
    alert: alertReducer,
    auth: userReducer,
    profile: profileReducer,
})