import React from 'react'
import styles from '../styles/main.module.css'
import {header, footer, data} from '../components/main/data'
import TableRow from '../components/main/tableRow'
const Main = () => {

    return(
        <div>
            <h1>Генерация QR кодов</h1>
            <div className='flex-row'>
                <div className={styles.generationItem}>
                    1. Количество QR кодов
                    <input 
                        name='number'
                        placeholder='0'
                        />
                </div>
                <div className={styles.generationItem}>
                    2. Сумма одного QR кода
                    <input 
                        name='value'
                        placeholder='1000'
                        />
                </div>
                <button>Сгенерировать</button>
            </div>

            <h1>История генериций QR</h1>
            <table className='tableWide'>
                <TableRow data={header} header/>
                {data.map((el,i)=>{
                    return(
                        <TableRow data={el} body/>
                    )
                })}
                
                <TableRow data={footer} footer/>
            </table>
        </div>
    )
}
export default Main