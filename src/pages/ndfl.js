import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styles from '../styles/ndfl.module.css'
import {header, data} from '../components/ndfl/data'
import TableRow from '../components/ndfl/tableRow'
import FilterRow from '../components/ndfl/filters'
import { getNdflUsers } from '../redux/actions/users'

const Ndfl = () => {
    const ndflUsers = useSelector(state=>state.users.ndfl)
    console.log('ndfl users',ndflUsers)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getNdflUsers())
    },[])
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
                    {ndflUsers&&ndflUsers.map((el,i)=>{
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