
import {TEST, } from '../types'



const initialState = {
    test: null,
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case TEST:
         
            return {
                ...state,
                test: payload
            }
            
            default: 
                return state;
    }

} 
