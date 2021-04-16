import {GENERATE_QR, GET_ACTIVATED_CODES, GET_ALL_DATA} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'


import axios from "axios";
const ip = process.env.REACT_APP_IP
console.log(ip)

const ValidationCode = async (code) => {
    const res = await axios.put(ip+`codes/win/${code}`)
    console.log(res.data); //validation status
}


export const getAllData = () => async (dispatch) => {
    try {
    const res = await axios.get(ip+`bundles/find/all`)

      console.log(res.data)
      dispatch({
        type: GET_ALL_DATA,
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
        const res = await axios.post(ip+`codes/generatecodes`,formData)
      
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
        const res = await axios.get(ip+`codes/find/validated`)
      
      console.log(res.data)
      dispatch({
        type: GET_ACTIVATED_CODES,
        payload: res.data,
      });
    } catch (err) {
        console.log(err)      

    }
  };