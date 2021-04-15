import React from 'react'
import styles from '../styles/history.module.css'
import {header, data} from '../components/history/data'
import TableRow from '../components/history/tableRow'
import FilterRow from '../components/history/filters'

const History = () => {

    return(
        <div>
            <h1>История</h1>
            <div className={styles.filterContainer}>
                    <FilterRow />
                    <button>Импорт в XLS</button>
                </div>
            <table className='tableWide'>
                <TableRow data={header} header/>
                {data.map((el,i)=>{
                    return(
                        <TableRow data={el} body/>
                    )
                })}
                
            </table>
        </div>
    )
}
export default History