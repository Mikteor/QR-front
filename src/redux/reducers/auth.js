
import {TEST, } from '../types'



const initialState = {
    test: 0,
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
                test: payload
            }
            
            default: 
                return state;
    }

} 
