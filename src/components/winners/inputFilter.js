import React, { useState } from 'react'
import styles from './winnersComponents.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addFilter, removeFilter, updateFilter} from '../../redux/actions/filter'



const InputFilter = ({el}) => {
    const filterARR = useSelector(state => state.filter.filters)
    const dispatch = useDispatch()

    const inputFilterHandler = (filter, inputValue) => {

        console.log(inputValue)
            const newFilter = {...filter, value: inputValue}
            if (inputValue.length>0){
                dispatch(updateFilter(newFilter))
            }  else if (inputValue==''){
                dispatch(removeFilter(newFilter))
            }
        }

        return(
            <div className={styles.filterButton} >
                <img className={styles.filterIcon} src={el.icon}/>
                <input 
                    type='search'
                    placeholder={el.title}
                    // onChangeCapture={e=>inputFilterHandler(el.filterProps, e.target.value)}
                />
                     
            </div>
        )
   
  
}
export default InputFilter