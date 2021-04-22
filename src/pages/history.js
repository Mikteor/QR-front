import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import styles from '../styles/history.module.css'

import FilterRow from '../components/history/filters'
import { getAllQRs } from '../redux/actions/data'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import HistoryTable from '../components/history/table'

const History = () => {
    const allQRs = useSelector(state=>state.data.allQRs)
    console.log('qrs all ',allQRs)
    const dispatch = useDispatch()
    useEffect(()=>{
       !allQRs && dispatch(getAllQRs())
    },[])
    return (
      <div>
        <h1>История</h1>
        <div className={styles.filterContainer}>
          <FilterRow />
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Скачать XLS"
          />
        </div>
        {allQRs && <HistoryTable data={allQRs} />}
      </div>
    );
}
export default History