import React, { useState } from 'react'
import styles from './winnersComponents.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addFilter, removeFilter, updateFilter} from '../../redux/actions/filter'



const BooleanFilter = ({el}) => {
    const dispatch = useDispatch()
    const [booleanType, setBooleanActive] = useState(0)
    

    const booleanFilterHandler = (filter) => {
            if (booleanType==0){
                dispatch(addFilter(filter))
            } else if (booleanType==1) {
                dispatch(updateFilter(filter))
            } else if (booleanType==2){
                dispatch(removeFilter(filter))
            }
        booleanType<2 ? setBooleanActive(booleanType+1) :  setBooleanActive(0)
        }

    return(
        <div className={styles.filterButton} >
            <img className={styles.filterIcon} src={el.icon}/>
            <span>{el.title}</span>
        </div>
    )

  
}
export default BooleanFilter