import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styles from '../styles/ndfl.module.css'
import FilterRow from '../components/ndfl/filters'
import { getNdflUsers } from '../redux/actions/users'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import NdflTable from '../components/ndfl/table'

const Ndfl = () => {
    const ndflUsers = useSelector(state=>state.users.ndfl)
    console.log('ndfl users',ndflUsers)
    const dispatch = useDispatch()
    useEffect(()=>{
       !ndflUsers && dispatch(getNdflUsers())
    },[])
    return (
      <div>
        <h1>НДФЛ</h1>
        <div className={styles.filterContainer}>
          <FilterRow />
          <ReactHTMLTableToExcel
            id="ndfl-table-xls-button"
            className="download-table-xls-button"
            table="ndfl-to-xls"
            filename="ndfl_data"
            sheet="tablexls"
            buttonText="Скачать XLS"
          />
        </div>
        {ndflUsers && <NdflTable data={ndflUsers} />}
      </div>
    );
}
export default Ndfl