import React from 'react'
import styles from '../styles/ndfl.module.css'
import {header, data} from '../components/ndfl/data'
import TableRow from '../components/ndfl/tableRow'
import FilterRow from '../components/ndfl/filters'

const Ndfl = () => {

    return(
        <div>
            <h1>НДФЛ</h1>
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
export default Ndfl