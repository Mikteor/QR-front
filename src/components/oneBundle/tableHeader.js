import React, { useEffect, useState } from 'react'
import styles from './bundleComponents.module.css'
// const ip = process.env.REACT_APP_IP
import axios from "axios";
let backend = process.env.REACT_APP_IP;

const TableHeader = ({data}) => {


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



