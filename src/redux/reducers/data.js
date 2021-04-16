
import {GET_ALL_DATA,GENERATE_QR, GET_ACTIVATED_CODES } from '../types'



const initialState = {
    data: null,
    msg: null,
    activated: null,
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
        case GET_ACTIVATED_CODES:
            return {
                ...state,
                activated: payload
            }
        case GENERATE_QR:
            const newData = [...state.data, payload]
            return {
                ...state,
                data: newData,
                msg: payload,
            }
            default: 
                return state;
    }

} 
