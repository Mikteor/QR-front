import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import styles from '../styles/bundle.module.css'
import {oneBundle} from '../redux/actions/data'
import FilterRow from '../components/oneBundle/filters'
import BundleTable from '../components/oneBundle/tableBundle';
import BundleMoreTable from '../components/oneBundle/tableMore';
const Bundle = ({match, history}) => {
const dispatch = useDispatch()

const data = useSelector(state => state.data.oneBundle)
!data && dispatch(oneBundle(match.params.id))
console.log('ddada',data)


    return(
        <div>
        

            <h1>Подробнее о партии</h1>
            {data && <BundleTable data={data} history={history} />}

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

            {data && <BundleMoreTable data={data} history={history} />}
            
        </div>
    )
}
export default Bundle


