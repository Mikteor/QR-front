import {TEST} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'



// LOAD USER 
export const test = () => async dispatch => {


  try {

        dispatch({
          type: TEST,
          payload: 'hi test',
        });

     }

   catch (err) {

  }
}
   
 