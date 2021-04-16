import React from 'react'
import styles from './historyComponents.module.css'

const TableHeader = ({data, header, footer, body}) => {



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