import React from 'react'
import styles from './historyComponents.module.css'

const TableRow = ({data, header, footer, body}) => {



    return(
        <tr className={
            header? styles.tableHeader : 
            styles.tableBody}>
            <td style={{color: data.player? 'black':'grey'}}>{data.player ? data.player.fullname:'неизвестно'}</td>
            <td style={{color: data.player? 'black':'grey'}}>{data.player ?  data.player.phone:  'неизвестно'}</td>
            <td style={{color: data.player? 'black':'grey'}}>{data.player ?  data.player.email:  'неизвестно'}</td>
            <td>{data.payed? 'Да' : 'Нет'}</td>
            <td>{data.value} рублей</td> 
        </tr>
    )
}
export default TableRow