import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styles from '../styles/ndfl.module.css'
import {header, data} from '../components/ndfl/data'
import TableRow from '../components/ndfl/tableRow'
import FilterRow from '../components/ndfl/filters'
import { getNdflUsers } from '../redux/actions/users'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

const Ndfl = () => {
    const ndflUsers = useSelector(state=>state.users.ndfl)
    console.log('ndfl users',ndflUsers)
    const dispatch = useDispatch()
    useEffect(()=>{
       !ndflUsers && dispatch(getNdflUsers())
    },[])
    return(
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
            <table className='tableWide' id="ndfl-to-xls">
                <thead>
                    <TableRow data={header} header/>
                </thead>
                <tbody>
                    {ndflUsers&&ndflUsers.map((el,i)=>{
                        return(
                            <TableRow data={el} body/>
                        )
                    })}    
                </tbody>
                
                
            </table>
        </div>
    )
}
export default Ndfl