import React from 'react'
import styles from './winnersComponents.module.css'

const TableRow = ({data, header, footer, body}) => {



    return(
        <tr className={
            header? styles.tableHeader : 
            styles.tableBody}>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.rebound}{body && ' рублей'}</td>
            <td>{data.total}</td> 
        </tr>
    )
}
export default TableRow