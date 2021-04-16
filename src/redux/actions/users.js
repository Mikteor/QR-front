import {GET_ALL_USERS, USER_BY_PHONE, GET_USERS_NDFL} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'


import axios from "axios";
const ip = process.env.REACT_APP_IP
console.log(ip)

// const ValidationCode = async (code) => {
//     const res = await axios.put(ip+`codes/win/${code}`)
//     console.log(res.data); //validation status
// }


export const getAllUsers = () => async (dispatch) => {
    try {
    const res = await axios.get(ip+`users/find/all`)

      console.log(res.data)
      dispatch({
        type: GET_ALL_USERS,
        payload: res.data,
      });
    } catch (err) {
console.log(err)      
    }
  };

  export const getUserByPhone = (phone) => async (dispatch) => {
    try {
       console.log('phone',phone)
    //   const res = await innerBackend.get("/codes/generatecodes",formData);
        const res = await axios.get(ip+`users/find/${phone}`)
      
      console.log(res.data)
      dispatch({
        type: USER_BY_PHONE,
        payload: res.data,
      });
    } catch (err) {
        console.log(err)      

    }
  };

  export const getNdflUsers = () => async (dispatch) => {
    try {
    //   const res = await innerBackend.get("/codes/generatecodes",formData);
        const res = await axios.get(ip+`users/find/all/ndfl`)
      
      console.log(res.data)
      dispatch({
        type: GET_USERS_NDFL,
        payload: res.data,
      });
    } catch (err) {
        console.log(err.response.data)      

    }
  };