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
export default Ndfl