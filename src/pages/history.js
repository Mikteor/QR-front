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
                <thead>
                    <TableRow data={header} header/>
                </thead>
                <tbody>
                    {data.map((el,i)=>{
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