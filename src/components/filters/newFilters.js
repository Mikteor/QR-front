import React, { useEffect, useState } from 'react'
import styles from './winnersComponents.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getActivatedCodes} from '../../redux/actions/data'
import {getUserByPhone} from '../../redux/actions/users'
import { Input, Select} from '../../styles/styledComponents/filters'


const NewFilter = ({routeToFilter, fullname, phone, validated, payed, printed, value, prize_sum}) => {
    // const filterARR = useSelector(state => state.filter.filters)
    const dispatch = useDispatch()
    const[filters, setFilters] = useState({
        fullname: '',
        phone: '',
        validated: '',
        payed: '',
        printed: '',
        value: '',
        gt: '',  //prize_sum
    })

    useEffect(()=>{
        console.log(filters)

        const newArr =   [
                filters.fullname.length>0&&'fullname='+filters.fullname, 
                filters.phone.length>0&&'phone='+filters.phone,
                filters.validated.length>0&&'validated='+filters.validated,
                filters.payed.length>0&&'payed='+filters.payed,
                filters.printed.length>0&&'printed='+filters.printed,
                filters.value.length>0&&'value='+filters.value,
                filters.gt.length>0&&'gt='+filters.gt,
            ] 
            console.log(newArr)
        const queryArr = newArr.length>0 ? newArr.filter(el=>el!==false) : undefined
        const query = queryArr ? ( queryArr.length>1? '?'+queryArr.join('&') : queryArr.length==1? '?'+queryArr[0] : queryArr.length==0 && undefined)  : undefined


        console.log(`smth/smth/smth${query?query:''}`)


        dispatch(routeToFilter(query))
    },[filters])


    const inputFilterHandler = (e) => {
        // e.preventDefault()
        setFilters({...filters, [e.target.name]: e.target.value})
        }

        return(
            <div className={styles.filterContainer}>
                {fullname && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <Input 
                        name='fullname'
                        type='search'
                        placeholder='Имя Фамилия'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                {phone && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <Input 
                        name='phone'
                        type='search'
                        placeholder='Телефон'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                {validated && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <Select name='validated' onChange={e=>inputFilterHandler(e)}>
                        <option value="">Статус активации</option>
                        <option value="true">Активирован</option>
                        <option value="false">Не активирован</option>
                    </Select>
                    </form>
                </div>}
                {payed && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <Select name='payed' onChange={e=>inputFilterHandler(e)}>
                        <option value="">Погашение</option>
                        <option value="true">Погашен</option>
                        <option value="false">Не погашен</option>
                    </Select>
                    </form>
                </div>}
                {printed && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <Select name='printed' onChange={e=>inputFilterHandler(e)}>
                        <option value="">Печать</option>
                        <option value="true">В печати</option>
                        <option value="false">Не в печати</option>
                    </Select>
                    </form>
                </div>}
                {value && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <Input 
                        name='value'
                        type='search'
                        placeholder='Выигрыш'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                {prize_sum && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={inputFilterHandler}>
                    <Input 
                        name='gt'
                        type='search'
                        placeholder='Суммарный выигрыш'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                <span/>
            </div>
        )
   
  
}
export default NewFilter