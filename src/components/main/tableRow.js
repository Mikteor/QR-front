import React from 'react'
import styles from './mainComponents.module.css'

const TableRow = ({data, header, footer, body}) => {



    return(
        <tr className={
            header? styles.tableHeader : 
            footer? styles.tableFooter : 
            styles.tableBody}>
            <td>{data.date}</td>
            <td>{data.number}</td>
            <td>{data.value}{!header && ' рублей'}</td>
            <td>{data.used}{body && '/'+data.number}</td>
            {data.urlHeader?
            <td>{data.urlHeader}</td> :
            data.url &&
            <a href={data.url} target='_blank'>Скачать</a>
            }
            <td>{data.downloaded}</td>
        </tr>
    )
}
export default TableRow