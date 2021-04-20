import React, {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import styles from '../styles/history.module.css'
import {header, data} from '../components/history/data'
import TableRow from '../components/history/tableRow'
import FilterRow from '../components/history/filters'
import { getAllQRs } from '../redux/actions/data'
import TableHeader from '../components/history/tableHeader'
import { downloadBundle, oneBundle } from '../redux/actions/data';

const Bundle = () => {
    const dispatch = useDispatch()
const data = useSelector(state => state.data.oneBundle)

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
    return(
        <table>
            <tbody>
                <tr className={styles.tableBody}>
                    <td>{date}</td>
                    <td>{data.amount}</td>
                    <td>{data.value} рублей</td>
                    <td>{data.amount_validated}/{data.amount}</td>
                    
                    <button onClick={(e) => handleDownload(e)} download>скачать</button>
                    
                    <td>{data.download_num} раз / {dateDownloaded}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Bundle