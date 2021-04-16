import React, { useEffect, useState } from 'react'
import styles from './mainComponents.module.css'
// const ip = process.env.REACT_APP_IP
import axios from "axios";
let backend = process.env.REACT_APP_IP;

const TableRow = ({data, footer}) => {

    const [date,setDate] = useState('')
    const [dateDownloaded,setDateDownloaded] = useState('')
    useEffect(()=>{
        if(data){
        const newDate = new Date(data.date)
        const day = newDate.getDay()
        const month = newDate.getMonth()
        const year = newDate.getFullYear()
        const hours = newDate.getHours()
        const minutes = newDate.getMinutes()
        const zeroMinutes = minutes>9? minutes : '0'+minutes
        setDate(day+'.'+month+'.'+year+'/'+hours+':'+zeroMinutes)
        }
    },[])
    useEffect(()=>{
        if(data && data.download_date){
        const newDate = new Date(data.download_date)
        const day = newDate.getDay()
        const month = newDate.getMonth()
        const year = newDate.getFullYear()
        const hours = newDate.getHours()
        const minutes = newDate.getMinutes()
        const zeroMinutes = minutes>9? minutes : '0'+minutes
        setDateDownloaded(day+'.'+month+'.'+year+'/'+hours+':'+zeroMinutes)
        }
    },[])
    const handleDownload = (id) => {
        DownloadFile(id)
      }
    if(!data){
        return(
            <div>loading...</div>
        )
    }

    return(
        <tr className={styles.tableBody}>
            <td>{date}</td>
            <td>{data.amount}</td>
            <td>{data.value} рублей</td>
            <td>{data.amount_validated}/{data.amount}</td>
            
            <button onClick={() => handleDownload(data._id)} download>скачать</button>
            
            <td>{data.download_num} раз / {dateDownloaded}</td>
        </tr>
    )
}
export default TableRow




function DownloadFile(id) {
    console.log(id);
    const method = "GET";
    const url = backend + `bundles/download/${id}`;
    axios
      .request({
        url,
        method,
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