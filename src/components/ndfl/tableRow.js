import React from 'react'
import styles from './ndflComponents.module.css'

const TableRow = ({data, header, footer, body}) => {



    return(
        <tr className={
            header? styles.tableHeader : 
            styles.tableBody}>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{header? data.rebound: body && data.rebound? 'Да' : 'Нет'}</td>
            <td>{data.total}{body && ' рублей'}</td> 
            <td>{data.activation}</td> 
            <td>{data.ndfl}</td> 
        </tr>
    )
}
export default TableRow