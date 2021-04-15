import React from 'react'
import styles from '../styles/winners.module.css'
import {header, data} from '../components/winners/data'
import TableRow from '../components/winners/tableRow'
import FilterRow from '../components/winners/filters'

const Winners = () => {

    return(
        <div>
            <h1>Общая таблица победителей</h1>
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
export default Winners