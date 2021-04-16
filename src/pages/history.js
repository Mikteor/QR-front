import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import styles from '../styles/history.module.css'
import {header, data} from '../components/history/data'
import TableRow from '../components/history/tableRow'
import FilterRow from '../components/history/filters'
import { getActivatedCodes } from '../redux/actions/data'

const History = () => {
    const activatedCodes = useSelector(state=>state.data.activated)
    console.log('ndfl users',activatedCodes)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getActivatedCodes())
    },[])
    return(
        <div>
            <h1>История</h1>
            <div className={styles.filterContainer}>
                    <FilterRow />
                    <button>Импорт в XLS</button>
                </div>
            <table className='tableWide'>
                <thead>
                    <TableRow data={header} header/>
                </thead>
                <tbody>
                    {activatedCodes&&activatedCodes.map((el,i)=>{
                        return(
                            <TableRow data={el} body/>
                        )
                    })}    
                </tbody>
                
                
            </table>
        </div>
    )
}
export default History