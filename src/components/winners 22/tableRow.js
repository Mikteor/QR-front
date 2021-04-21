import React from 'react'
import styles from './winnersComponents.module.css'

const TableRow = ({data, header, bold, body}) => {



    return(
        <tr className={bold? styles.tableBold : styles.tableBody} style={{color: data.player? 'black':'grey'}}>
            <td>{data.player ? data.player.fullname:'неизвестно'}</td>
            <td>{data.player ?  data.player.phone:  'неизвестно'}</td>
            <td>{data.player ?  data.player.email:  'неизвестно'}</td>
            <td></td>
            <td>{data.value} рублей</td> 
        </tr>
    )
}
export default TableRow