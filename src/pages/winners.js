import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/winners.module.css'
import {header, data} from '../components/winners/data'
import TableRow from '../components/winners/tableRow'
import FilterRow from '../components/winners/filters'
import {getAllUsers,getNdflUsers,getUserByPhone} from '../redux/actions/users'
import TableHeader from '../components/winners/tableHeader'

const Winners = () => {
const allUsers = useSelector(state=>state.users.users)
const phoneUser = useSelector(state=> state.users.userByPhone)
console.log('users',allUsers)
const dispatch = useDispatch()
useEffect(()=>{
   !allUsers && dispatch(getAllUsers())
},[])

    return(
        <div>
            <h1>Общая таблица победителей</h1> 
            <div className={styles.filterContainer}>
                    <FilterRow />
                    <button>Импорт в XLS</button>
                </div>
                {phoneUser &&  <table className='tableWide'>
                    <thead>
                        <TableHeader data={header}/>
                    </thead>
                    <tbody>
                        <TableRow data={phoneUser} bold body />
                    </tbody>
                </table>}
            <table className='tableWide'>
                <thead>
                    <TableHeader data={header}/>
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