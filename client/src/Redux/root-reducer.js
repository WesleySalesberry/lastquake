import {combineReducers} from 'redux';
import { alertReducer } from './alert/alert';
import { userReducer } from './user/user'

export default combineReducers({
    alert: alertReducer,
    user: userReducer
})