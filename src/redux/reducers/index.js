import { combineReducers } from 'redux';
import auth from './auth'
import filter from './filter'
import data from './data'
import users from './users'


export default combineReducers({
    auth,
    filter,
    data,
    users,
    

});