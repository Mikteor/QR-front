import { combineReducers } from 'redux';
import auth from './auth'
import data from './data'
import users from './users'


export default combineReducers({
    auth,
    data,
    users,
    

});