import {GENERATE_QR, GET_ACTIVATED_CODES, GET_ALL_DATA, GET_ALL_QRS, ONE_BUNDLE} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'

import { createBrowserHistory } from "history";




export const getAllBundles = () => async (dispatch) => {
  
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    innerBackend(localStorage.token);
  }
    try {
    const res = await innerBackend.get(`bundles/find/all`)

      console.log(res.data)
      dispatch({
        type: GET_ALL_DATA,
        payload: res.data,
      });
    } catch (err) {

      if(err.response.status==401){
        const history = createBrowserHistory();
              history.replace('/auth')
              window.location.reload();
              alert('Ошибка авторизации')
              localStorage.removeItem('token')
      } 


      console.log(err.response)     

 
    }
  };

export const oneBundle = (data) => async (dispatch) => {
  

        dispatch({
          type: ONE_BUNDLE,
          payload: data,
        });

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

  export const downloadBundle = (id) => async (dispatch) => {
    try {

        const res = await innerBackend.get(`bundles/download/${id}`)
        const data = res.data


      const downloadUrl = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "file.zip"); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();


    } catch (err) {
        console.log(err)      
      }
  };

