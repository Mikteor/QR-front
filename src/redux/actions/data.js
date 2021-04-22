import {CHANGE_BUNDLE_STATUS, DELETE_BUNDLE, GENERATE_QR, GET_ACTIVATED_CODES, GET_ALL_DATA, GET_ALL_QRS, ONE_BUNDLE, START_GENERATE} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'

import { createBrowserHistory } from "history";
import axios from "axios";

let backend = process.env.REACT_APP_IP;



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

      if(err && err.response.status==401){
        const history = createBrowserHistory();
              history.replace('/auth')
              window.location.reload();
              alert('Ошибка авторизации')
              localStorage.removeItem('token')
      } 


      console.log(err.response)     

 
    }
  };

export const oneBundle = (id) => async (dispatch) => {
   try {
    const res = await innerBackend.get(`bundles/find/id/${id}`)

      console.log(res.data)
     
        dispatch({
          type: ONE_BUNDLE,
          payload: res.data,
        });
    } catch (err) {
console.log(err)      
    }


    };

  export const DeleteBundle = (id) => async (dispatch) => {
    try {
      console.log(id, 'id')
      const res = await innerBackend.delete(`bundles/delete/${id}`);

      dispatch({
        type: DELETE_BUNDLE,
        payload: res.data
      })

    } catch (err) {
      console.log(err);      

        alert('Партия уже была отправлена на печать')
    }
  }

  export const ChangeBundleStatus = (id) => async (dispatch) => {
      try {
        console.log(id, 'idididei')
        const res = await innerBackend.put(`bundles/change/print/${id}`);
        dispatch({
          type: CHANGE_BUNDLE_STATUS,
          payload: res.data
        })
      } catch (err) {

      }
  }

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

  export const StartGenerate = () => async (dispatch) => {
    dispatch({
      type: START_GENERATE
    })
  }

  export const generateQRs = (formData) => async (dispatch) => {
    try {
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

      // console.log(id);
      // const method = "GET";
      // const url = backend + `bundles/download/${id}`;
      // const config = {
      //   headers: {
      //     token: localStorage.token,
      //   }
      // }
      // axios
      //   .request({
      //     url,
      //     method,
      //     // config,
      //     responseType: "blob", //important
      //   })
      //   .then(({ data }) => {
      //     console.log(data)
      //     const downloadUrl = window.URL.createObjectURL(new Blob([data]));
      //     const link = document.createElement("a");
      //     link.href = downloadUrl;
      //     link.setAttribute("download", "file.zip"); //any other extension
      //     document.body.appendChild(link);
      //     link.click();
      //     link.remove();
      //   });


      let body ={}
      let config = {
        headers: {
          token: localStorage.token,
        }
      }

        const res = await innerBackend.get(`bundles/download/${id}`,body,config)
      console.log(res)

      const downloadUrl = window.URL.createObjectURL(new Blob([res.data])); //res.data / res ????
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

