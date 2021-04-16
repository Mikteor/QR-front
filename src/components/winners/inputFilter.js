import React, { useState } from 'react'
import styles from './winnersComponents.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addFilter, removeFilter, updateFilter} from '../../redux/actions/filter'
import {getUserByPhone} from '../../redux/actions/users'



const InputFilter = ({el}) => {
    const filterARR = useSelector(state => state.filter.filters)
    const dispatch = useDispatch()
const[phone, setPhone] = useState('')


    const inputFilterHandler = (e) => {
        e.preventDefault()
        dispatch(getUserByPhone(phone))
        }

        return(
            <div className={styles.filterButton} >
                <img className={styles.filterIcon} src={el.icon}/>
                <input 
                    type='search'
                    placeholder={el.title}
                    onChange={e=>setPhone(e.target.value)}
                />
                <button onClick={(e)=>inputFilterHandler(e)} >ok</button>
                     
            </div>
        )
   
  
}
export default InputFilter