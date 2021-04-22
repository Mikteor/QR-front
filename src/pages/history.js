import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import styles from '../styles/history.module.css'
import {header, data} from '../components/history/data'
import TableRow from '../components/history/tableRow'
import FilterRow from '../components/history/filters'
import { getAllQRs } from '../redux/actions/data'
import TableHeader from '../components/history/tableHeader'
import ReactHTMLTableToExcel from "react-html-table-to-excel";

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
        <table className="tableWide" id="table-to-xls">
          <thead>
            <TableHeader data={header} />
          </thead>
          <tbody>
            {allQRs &&
              allQRs.map((el, i) => {
                return <TableRow data={el} body />;
              })}
          </tbody>
        </table>
      </div>
    );
}
export default History