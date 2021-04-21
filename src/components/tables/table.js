import React from 'react'
import styles from './tables.module.css'

const TableHeader = ({data, header, body, footer}) => {


    return(
        <table>
            {header && 
            <thead>
                <tr className={styles.tableHeader} style={header.style? header.style : {}}>
                    {header.data.map((el,i)=>{
                        return(
                        <td>{el}</td> 
                        )
                    })}
                </tr>
            </thead>
            }
            {body && 
            <thead>
                <tr className={styles.tableBody} style={body.style? body.style : {}}>
                    {body.data.map((el,i)=>{
                        return(
                        <td>{el}</td> 
                        )
                    })}
                </tr>
            </thead>
            }
            {footer && 
            <thead>
                <tr className={styles.tableFooter} style={footer.style? footer.style : {}}>
                    {footer.data.map((el,i)=>{
                        return(
                        <td>{el}</td> 
                        )
                    })}
                </tr>
            </thead>
            }
        </table>
        
    )
}
export default TableHeader



