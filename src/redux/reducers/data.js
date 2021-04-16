
import {GET_ALL_DATA,GENERATE_QR } from '../types'



const initialState = {
    data: null,
    msg: null
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case GET_ALL_DATA:
console.log('get data',payload)      

            return {
                ...state,
                data: payload
            }
        case GENERATE_QR:
console.log('generate',payload)      

            return {
                ...state,
                msg: payload
            }
            default: 
                return state;
    }

} 
