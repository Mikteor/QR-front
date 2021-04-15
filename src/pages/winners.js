import React from 'react'
import {useSelector} from 'react-redux'
import styles from '../styles/winners.module.css'
import {header, data} from '../components/winners/data'
import TableRow from '../components/winners/tableRow'
import FilterRow, { filters } from '../components/winners/filters'

const Winners = () => {
const filtesArr = useSelector(state=>state.filter.filters)

    return(
        <div>
            <h1>Общая таблица победителей</h1> 
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
                            <TableRow key={'winners'+i} data={el} body/>
                        )
                    })}   
                </tbody>
                
                
            </table>
        </div>
    )
}
export default Winners