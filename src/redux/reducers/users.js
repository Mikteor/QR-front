
import {GET_ALL_USERS, USER_BY_PHONE, GET_USERS_NDFL } from '../types'



const initialState = {
    users: null,
    ndfl: null,
    userByPhone: null,
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case GET_ALL_USERS:
            return {
                ...state,
                users: payload
            }
        case USER_BY_PHONE:
            return {
                ...state,
                userByPhone: payload
            }
        case GET_USERS_NDFL:
            return {
                ...state,
                ndfl: payload,
            }
            default: 
                return state;
    }

} 
