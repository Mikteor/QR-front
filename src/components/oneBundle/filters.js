import React from 'react'
import styles from './bundleComponents.module.css'

export const filters = [
    {
        title: 'Поиск по имени',
        icon: 'search.png',
        handler: ()=>console.log('hi')
    },
    {
        title: 'Телефон',
        icon: 'search.png',
        handler: ()=>console.log('hi')
    },
    {
        title: 'Статус активации',
        icon: 'search.png',
        handler: ()=>console.log('hi')
    },
    {
        title: 'Погашение',
        icon: 'search.png',
        handler: ()=>console.log('hi')
    },
    {
        title: 'Общий выигрыш',
        icon: 'search.png',
        handler: ()=>console.log('hi')
    },
    {
        title: 'Печать',
        icon: 'search.png',
        handler: ()=>console.log('hi')
    },
    {
        title: 'Сумма выигрыша',
        icon: 'search.png',
        handler: ()=>console.log('hi')
    },
]

const FilterRow = () => {

    return(
        <div className='flex-row between'>
            {filters.map((el,i)=>{
                return(
                    <div key={'aa'+i} className={styles.filterButton} onClick={el.handler}>
                        <img className={styles.filterIcon} src={el.icon}/>
                        {el.title}
                    </div>
                )
            })}
        </div>
    )
}
export default FilterRow