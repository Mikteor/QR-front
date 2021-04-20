import React from 'react'
import styles from './layout.module.css'
import {NavLink} from 'react-router-dom'
import LayoutButton from './layoutButton'

const Layout = () => {



    return(
        <div className={styles.container}>
            {buttons.map((el,i)=>{
                return(
                    <div>

                    <LayoutButton key={'layoutButton'+i} title={el.title} path={el.path} icon={el.icon} />
                 
                    </div>
                )
            })}
        </div>
    )
}
export default Layout





const buttons = [
  {
    title: "Генерация QR",
    path: "/",
    icon: "home.png",
  },
  {
    title: "Победители",
    path: "/winners",
    icon: "home.png",
  },
  {
    title: "Статистика",
    path: "/statistic",
    icon: "home.png",
  },
  {
    title: "НДФЛ",
    path: "/ndfl",
    icon: "home.png",
  },
  {
    title: "История",
    path: "/history",
    icon: "home.png",
  },
];