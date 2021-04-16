import React from 'react'
import styles from './winnersComponents.module.css'

const TableRow = ({data, header, bold, body}) => {



    return(
        <tr className={ 
            bold? styles.tableBold :
            styles.tableBody}>
            <td>{data.fullname}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            {/* <td>{data.payed? 'Да' : 'Нет'}</td> */}
            <td></td>
            <td>{data.prize_sum}{body && ' рублей'}</td> 
        </tr>
    )
}
export default TableRow