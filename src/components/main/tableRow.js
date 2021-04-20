import React, { useEffect, useState } from 'react'
import styles from './mainComponents.module.css'
// const ip = process.env.REACT_APP_IP
import axios from "axios";
import { useDispatch } from 'react-redux';
import { downloadBundle } from '../../redux/actions/data';
let backend = process.env.REACT_APP_IP;

const TableRow = ({data, history}) => {
    const dispatch = useDispatch()

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
    const handleDownload = (e) => {
        // DownloadFile(id)
        e.preventDefault()
        dispatch(downloadBundle(data._id))
      }
    const rowClick = () => {
        // DownloadFile(id)
       history.replace(`bundle/${data._id}`)
      }


    if(!data){
        return(
            <div>loading...</div>
        )
    }

    return(
        <tr className={styles.tableBody} onClick={()=>rowClick(data._id)} >
            <td>{date}</td>
            <td>{data.amount}</td>
            <td>{data.value} рублей</td>
            <td>{data.amount_validated}/{data.amount}</td>
            
            <button onClick={(e) => handleDownload(e)} download>скачать</button>
            
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