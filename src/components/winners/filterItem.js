import React, { useState } from 'react'
import styles from './winnersComponents.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addFilter, removeFilter, updateFilter} from '../../redux/actions/filter'
import { filters } from './filters'



const FilterItem = ({el}) => {
    const filterARR = useSelector(state => state.filter.filters)
    const dispatch = useDispatch()
    const [booleanType, setBooleanActive] = useState(0)
    

    const inputFilterHandler = (filter, inputValue) => {

        console.log(inputValue)
            const update = filterARR.some(el => el.filter==filter.filter)
            const newFilter = {...filter, value: inputValue}
            if (update && inputValue.length>0){
                dispatch(updateFilter(newFilter))
            } else if (!update ) {
                dispatch(addFilter(newFilter))
            } else if (update && inputValue==''){
                dispatch(removeFilter(newFilter))
            }
        }
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

    if(el.filterProps.type=='input'){
        return(
            <div className={styles.filterButton} >
                <img className={styles.filterIcon} src={el.icon}/>
                <input 
                    placeholder={el.title}
                    onChange={e=>inputFilterHandler(el.filterProps, e.target.value)}
                />
            </div>
        )
    }
    if(el.filterProps.type=='boolean'){
        return(
            <div className={styles.filterButton} onClick={()=>booleanFilterHandler(el.filterProps)}>
                <img className={styles.filterIcon} src={el.icon}/>
                <span>{el.title}</span>
            </div>
        )
    }
    return(
        <div>
            meh
        </div>
    )
  
}
export default FilterItem