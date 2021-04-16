import React from 'react'
import styles from './winnersComponents.module.css'

const TableRow = ({data, header, footer, body}) => {



    return(
        <tr className={
            header? styles.tableHeader : 
            styles.tableBody}>
            <td>{data.fullname}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{header? data.rebound: body && data.rebound? 'Да' : 'Нет'}</td>
            <td>{data.prize_sum}{body && ' рублей'}</td> 
        </tr>
    )
}
export default TableRow