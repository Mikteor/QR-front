import React, { useEffect, useState } from 'react'
import styles from './winnersComponents.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getActivatedCodes} from '../../redux/actions/data'
import {getUserByPhone} from '../../redux/actions/users'



const NewFilter = ({el}) => {
    // const filterARR = useSelector(state => state.filter.filters)
    const dispatch = useDispatch()
    const[filters, setFilters] = useState({
        fullname: '',
        phone: '',
        validated: '',
        payed: '',
    })

    useEffect(()=>{
        // console.log(filters)

        const newArr =   [
                filters.fullname.length>0&&'fullname='+filters.fullname, 
                filters.phone.length>0&&'phone='+filters.phone,
                filters.validated.length>0&&'validated='+filters.validated,
                filters.payed.length>0&&'payed='+filters.payed,
            ] 
            console.log(newArr)
        const queryArr = newArr.length>0 ? newArr.filter(el=>el!==false) : undefined
        const query = queryArr ? ( queryArr.length>1? '?'+queryArr.join('&') : queryArr.length==1? '?'+queryArr[0] : queryArr.length==0 && undefined)  : undefined
        console.log(`codes/find/claimed${query?query:''}`)


        dispatch(getActivatedCodes(query))
    },[filters])


    const inputFilterHandler = (e) => {
        // e.preventDefault()
        setFilters({...filters, [e.target.name]: e.target.value})
        }

        return(
            <div className={styles.filterContainer}>
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <input 
                        name='fullname'
                        type='search'
                        placeholder='Имя Фамилия'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <input 
                        name='phone'
                        type='search'
                        placeholder='Телефон'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <select name='validated' onChange={e=>inputFilterHandler(e)}>
                        <option value="">Статус активации</option>
                        <option value="true">Активирован</option>
                        <option value="false">Не активирован</option>
                    </select>
                    </form>
                </div>
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <select name='payed' onChange={e=>inputFilterHandler(e)}>
                        <option value="">Погашение</option>
                        <option value="true">Погашен</option>
                        <option value="false">Не погашен</option>
                    </select>
                    </form>
                </div>
                {/* <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <input 
                        name='value'
                        type='search'
                        placeholder='Телефон'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div> */}
            </div>
        )
   
  
}
export default NewFilter