import React from 'react'
import styles from './historyComponents.module.css'

const TableRow = ({data, header, footer, body}) => {



    return(
        <tr className={
            header? styles.tableHeader : 
            styles.tableBody}>
            <td>{body ? data.player.fullname: data.name}</td>
            <td>{body ? data.player.phone: data.phone}</td>
            <td>{body ? data.player.email: data.email}</td>
            <td>{header? data.rebound: body && data.payed? 'Да' : 'Нет'}</td>
            <td>{data.value}{body && ' рублей'}</td> 
        </tr>
    )
}
export default TableRow