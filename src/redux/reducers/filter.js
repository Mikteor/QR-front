
import { filters } from '../../components/winners/filters';
import {ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER, UPDATE_FILTER } from '../types'



const initialState = {
    filters: [],
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case ADD_FILTER:
            
            return {
                ...state,
                filters: [...state.filters, payload]
            }
        case UPDATE_FILTER:
console.log('reduser',payload)

            const update = state.filters.some(el=>el.field==payload.field)
            if(!update){
                return {
                    ...state,
                    filters: [...state.filters, payload]
                }
            }
            const toUpdateIndex = filters.findIndex(el=>el.field==payload.field)
            const updated = filters.splice(toUpdateIndex, 1, payload)
            return {
                ...state,
                filters: updated
            }
        case REMOVE_FILTER:
            const newFilters = state.filters.filter(el=>el.field!=payload.field)
            return {
                ...state,
                filters: newFilters
            }
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: []
            }
            
            default: 
                return state;
    }

} 
