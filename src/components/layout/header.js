import React from 'react'
import styles from './layout.module.css'
import {NavLink} from 'react-router-dom'
import LayoutButton from './layoutButton'

const Layout = () => {

    const exit = () => {
        localStorage.removeItem('token')
        window.location.reload();
    }

    return(
        <div className={styles.headerContainer}>
            <div></div>
            <div className={styles.exit} onClick={()=>exit()}>Выйти</div>
        </div>
    )
}
export default Layout