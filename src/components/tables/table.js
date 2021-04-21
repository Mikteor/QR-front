import React from 'react'
import styles from './tables.module.css'

const Table = ({header, body, footer}) => {


    return(
        <table className='tableWide'>
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
            <tbody>
                {body.data.map((row,i)=>{
                    return (
                        <tr className={styles.tableBody} style={row.rowStyle? row.rowStyle : {}}>
                            {row.rowData.map((text,i)=>{
                                return(
                                    <td>{text}</td> 
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
            }
            {footer && 
            <tfoot>
                <tr className={styles.tableFooter} style={footer.style? footer.style : {}}>
                    {footer.data.map((el,i)=>{
                        return(
                        <td>{el}</td> 
                        )
                    })}
                </tr>
            </tfoot>
            }
        </table>
        
    )
}
export default Table



