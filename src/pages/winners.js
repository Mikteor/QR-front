import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/winners.module.css'
import {header, data} from '../components/winners/data'
import TableRow from '../components/winners/tableRow'
import FilterRow from '../components/winners/filters'
import {getAllUsers,getNdflUsers,getUserByPhone} from '../redux/actions/users'

const Winners = () => {
const allUsers = useSelector(state=>state.users.users)
console.log('users',allUsers)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getAllUsers())
},[])

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
                    {allUsers&&allUsers.map((el,i)=>{
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