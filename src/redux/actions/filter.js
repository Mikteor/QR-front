import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS, UPDATE_FILTER} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'




export const addFilter = (filter) => dispatch => {

        dispatch({
          type: ADD_FILTER,
          payload: filter,
        });

}
export const updateFilter = (filter) => dispatch => {
console.log('action',filter)
    dispatch({
      type: UPDATE_FILTER,
      payload: filter,
    });

}
export const removeFilter = (filter) => dispatch => {

    dispatch({
      type: REMOVE_FILTER,
      payload: filter,
    });

}
export const clearFilters = () => dispatch => {

    dispatch({
      type: CLEAR_FILTERS,
      payload: '',
    });

}
   
 