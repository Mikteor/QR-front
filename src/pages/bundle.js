import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import styles from '../styles/bundle.module.css'
import {header, moreHeader} from '../components/oneBundle/data'
import TableRow from '../components/oneBundle/tableRow'
import TableHeader from '../components/oneBundle/tableHeader'
import TableMoreRow from '../components/oneBundle/tableMoreRow'
import TableMoreHeader from '../components/oneBundle/tableMoreHeader'
import {oneBundle} from '../redux/actions/data'
import FilterRow from '../components/oneBundle/filters'
const Bundle = ({match, history}) => {
const dispatch = useDispatch()

const data = useSelector(state => state.data.oneBundle)
!data && dispatch(oneBundle(match.params.id))
console.log('ddada',data)


    return(
        <div>
        

            <h1>Подробнее о партии</h1>
            <table className='tableWide'>
                <thead>
                    <TableHeader data={header}/>
                </thead>
                <tbody>
                    {data&&
                        <TableRow data={data} history={history}/>
                    }  
                </tbody>
            </table>

            <div className={styles.filterContainer}>
                <FilterRow />
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"
                />
            </div>

            <table className='tableWide'>
                <thead>
                    <TableMoreHeader data={moreHeader}/>
                </thead>
                <tbody>
                    {data&&
                        <TableMoreRow data={data} history={history}/>
                    }  
                </tbody>
            </table>
            
        </div>
    )
}
export default Bundle


