import React, { useEffect, useState } from 'react'
import styles from './mainComponents.module.css'
// const ip = process.env.REACT_APP_IP
import axios from "axios";
let backend = process.env.REACT_APP_IP;

const TableFooter = ({data,}) => {


    return(
        <tr className={styles.tableFooter}>
            <td>Итого</td>
            <td>{data.amount}</td>
            <td>{data.value} рублей</td>
            <td>{data.used}/{data.amount}</td>
        </tr>
    )
}
export default TableFooter


