import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/winners.module.css'
import {header, data} from '../components/winners/data'
import TableRow from '../components/winners/tableRow'
import FilterRow from '../components/winners/filters'
import {getActivatedCodes} from '../redux/actions/data'
import TableHeader from '../components/winners/tableHeader'
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Winners = () => {
const activatedCodes = useSelector(state=>state.data.activated)
const phoneUser = useSelector(state=> state.users.userByPhone)
const dispatch = useDispatch()
useEffect(()=>{
   !activatedCodes && dispatch(getActivatedCodes())
},[])

    return(
        <div>
            <h1>Общая таблица победителей</h1> 
            <div className={styles.filterContainer}>
                    <FilterRow />
                    <ReactHTMLTableToExcel
            id="win-table-xls-button"
            className="download-table-xls-button"
            table="win-to-xls"
            filename="win_data"
            sheet="tablexls"
            buttonText="Скачать XLS"
          />
                </div>
                {phoneUser &&  <table className='tableWide' >
                    <thead>
                        <TableHeader data={header}/>
                    </thead>
                    <tbody>
                        <TableRow data={phoneUser} bold body />
                    </tbody>
                </table>}
            <table className='tableWide' id="win-to-xls">
                <thead>
                    <TableHeader data={header}/>
                </thead>
                <tbody>
                    {activatedCodes&&activatedCodes.map((el,i)=>{
                        return(
                            <TableRow key={'winners'+i} data={el} body/>
                        )
                    })}   
                </tbody>
                
                
            </table>
        </div>
    )
}
export default Winners