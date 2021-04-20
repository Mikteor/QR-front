import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import styles from '../styles/history.module.css'
import {header, data} from '../components/history/data'
import TableRow from '../components/history/tableRow'
import FilterRow from '../components/history/filters'
import { getAllQRs } from '../redux/actions/data'
import TableHeader from '../components/history/tableHeader'

const Bundle = () => {

    return(
        <div>
                bundle
        </div>
    )
}
export default Bundle