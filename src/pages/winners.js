import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/winners.module.css'
import {getActivatedCodes} from '../redux/actions/data'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import WinnersTable from '../components/winners/table'
import NewFilter from '../components/winners/newFilters'

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
                    <NewFilter />
                    <ReactHTMLTableToExcel
                        id="win-table-xls-button"
                        className="download-table-xls-button"
                        table="win-to-xls"
                        filename="win_data"
                        sheet="tablexls"
                        buttonText="Скачать XLS"
                    />
                </div>
                {/* {phoneUser &&  <table className='tableWide' >
                    <thead>
                        <TableHeader data={header}/>
                    </thead>
                    <tbody>
                        <TableRow data={phoneUser} bold body />
                    </tbody>
                </table>} */}
                {activatedCodes && <WinnersTable data={activatedCodes} />}
        </div>
    )
}
export default Winners