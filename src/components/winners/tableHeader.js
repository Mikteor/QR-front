import React from 'react'
import styles from './winnersComponents.module.css'

const TableHeader = ({data}) => {



    return(
        <tr className={styles.tableHeader}>
            {data.map((el,i)=>{
                return(
                    <td>{el}</td>
                )
            })}
        </tr>
    )
}
export default TableHeader