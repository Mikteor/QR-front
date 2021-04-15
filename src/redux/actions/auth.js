import {TEST} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'



// LOAD USER 
export const testHandler = (num) => async dispatch => {

  console.log(num)

  try {

        dispatch({
          type: TEST,
          payload: num,
        });

     }

   catch (err) {

  }
}
   
 