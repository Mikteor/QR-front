import React, { useEffect, useState } from 'react'
import styles from './bundleComponents.module.css'
// const ip = process.env.REACT_APP_IP
import axios from "axios";
import { useDispatch } from 'react-redux';
import { ChangeBundleStatus, DeleteBundle, downloadBundle, oneBundle } from '../../redux/actions/data';
let backend = process.env.REACT_APP_IP;

const TableRow = ({data, history}) => {


    if(!data){
        return(
            <div>loading...</div>
        )
    }

    return (
      <>{data.prizes.map((data,i)=>{
        return(
            <tr className={styles.tableBody} style={{color: data.validated? 'black':'grey'}}>
                <td>{data.activation_date ? data.activation_date: data.validated ? 'неизвестно':'N/P'}</td>
                <td>{data.player ? data.player.fullname: data.validated? 'неизвестно':'N/P'}</td>
                <td>{data.player ?  data.player.phone:  data.validated?  'неизвестно':'N/P'}</td>
                <td>{data.validated? 'Да' : 'Нет'}</td>
                <td>{data.payed? 'Да' : 'Нет'}</td>
                <td>{data.value} рублей</td> 
            </tr>
        )
      })
      
      }</>
    );
}
export default TableRow




function DownloadFile(id) {
    console.log(id);
    const method = "GET";
    const url = backend + `bundles/download/${id}`;
    const headers = {
        'auth-token': localStorage.token
    }
    axios
      .request({
        url,
        method,
        headers,
        responseType: "blob", //important
      })
      .then(({ data }) => {
        console.log(data)
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "file.zip"); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  }