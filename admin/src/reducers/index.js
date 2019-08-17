import { combineReducers } from 'redux';
import LoginReducer from './loginReducers'
import RegisterReducers from './registerReducers'

export default combineReducers({
    login : LoginReducer,
    register : RegisterReducers
});