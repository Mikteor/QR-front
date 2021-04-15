import React from 'react'
import FilterItem from './filterItem'
import { useSelector} from 'react-redux'
import BooleanFilter from './booleanFilter'
import InputFilter from './inputFilter'


export const filters = [
    {
        title: 'Поиск по имени',
        icon: 'search.png',
        type: 'input',
        filterProps: {
            field: 'name',
            value: ''
        }
    },
    {
        title: 'Телефон',
        icon: 'search.png',
        type: 'input',
        filterProps: {
            field: 'phone',
            value: ''
        }
    },
    {
        title: 'Статус активации',
        icon: 'search.png',
        type: 'boolean',
        filterProps: {
            field: 'activation',
            values: ['Активирован','Не активирован']
        }
    },
    {
        title: 'Погашение',
        icon: 'search.png',
        type: 'boolean',
        filterProps: {
            field: 'rebound',
            value: ['Погашен','Не погашен']
        }
    },
    {
        title: 'Общий выигрыш',
        icon: 'search.png',
        type: 'input',
        filterProps: {
            field: 'total',
            value: ''
        }
    },
    {
        title: 'Печать',
        icon: 'search.png',
        type: 'boolean',
        filterProps: {
            field: 'print',
            value: ['Напечатан','Не напечатан']
        }
    },
    {
        title: 'Сумма выигрыша',
        icon: 'search.png',
        type: 'input',
        filterProps: {
            field: 'sum',
            value: ''
        }
    },
]

const FilterRow = () => {
    const filterARR = useSelector(state => state.filter.filters)
 
    console.log(filterARR)


    return(
        <div className='flex-row between'>
            {filters.map((el,i)=>{
            if(el.type=='input'){
               return(
                    <InputFilter key={'filters'+i} el={el}/>
                ) 
            }else if(el.type=='boolean'){
                return(
                     <BooleanFilter key={'filters'+i} el={el}/>
                 ) 
             } 
            })}
        </div>
    )
}
export default FilterRow