import {GENERATE_QR, GET_ACTIVATED_CODES, GET_ALL_DATA, GET_ALL_QRS} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'





export const getAllBundles = () => async (dispatch) => {
    try {
    const res = await innerBackend.get(`bundles/find/all`)

      console.log(res.data)
      dispatch({
        type: GET_ALL_DATA,
        payload: res.data,
      });
    } catch (err) {
console.log(err)      
    }
  };

export const getAllQRs = () => async (dispatch) => {
    try {
    const res = await innerBackend.get(`codes/find/all`)

      console.log(res.data)
      dispatch({
        type: GET_ALL_QRS,
        payload: res.data,
      });
    } catch (err) {
console.log(err)      
    }
  };

  export const generateQRs = (formData) => async (dispatch) => {
    try {
       console.log(formData)
    //   const res = await innerBackend.get("/codes/generatecodes",formData);
        const res = await innerBackend.post(`codes/generatecodes`,formData)
      
      console.log(res.data)
      dispatch({
        type: GENERATE_QR,
        payload: res.data,
      });
    } catch (err) {
        console.log(err)      

    }
  }; 
  
  
  export const getActivatedCodes = () => async (dispatch) => {
    try {
    //   const res = await innerBackend.get("/codes/generatecodes",formData);
        const res = await innerBackend.get(`codes/find/validated`)
      
      console.log(res.data)
      dispatch({
        type: GET_ACTIVATED_CODES,
        payload: res.data,
      });
    } catch (err) {
        console.log(err)      

    }
  };