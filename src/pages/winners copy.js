import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/winners.module.css'
import TableRow from '../components/winners 22/tableRow'
import FilterRow from '../components/winners 22/filters'
import {getActivatedCodes} from '../redux/actions/data'
import TableHeader from '../components/winners 22/tableHeader'
import TableData from '../components/winners 22/tableData'

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
                    <button>Импорт в XLS</button>
                </div>
                {/* {phoneUser &&  <table className='tableWide'>
                    <thead>
                        <TableHeader data={header}/>
                    </thead>
                    <tbody>
                        <TableRow data={phoneUser} bold body />
                    </tbody>
                </table>} */}
            {activatedCodes&& <TableData data={activatedCodes} />}
        </div>
    )
}
export default Winners