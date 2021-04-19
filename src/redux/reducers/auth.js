
import {TEST, LOGIN } from '../types'



const initialState = {
    token: 0,
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case TEST:
         console.log(payload)
            return {
                ...state,
                // test: payload
            }
        case LOGIN:
             localStorage.setItem('token', payload.token);
            //  console.log(localStorage.token, 'NEW TOKEN ')
            return {
                ...state,
                // loaded: true,
                token: true,
                // error: payload.err,
            
            }
            
            default: 
                return state;
    }

} 
