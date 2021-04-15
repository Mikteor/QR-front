import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from '../styles/main.module.css'
import {header, footer, data} from '../components/main/data'
import TableRow from '../components/main/tableRow'
import {testHandler} from '../redux/actions/auth'
const Main = () => {
const test = useSelector(state => state.auth.test)
const dispatch = useDispatch()
const [lol, setLol] = useState('')
const genHandler = () => {
    dispatch(testHandler(lol))
}

    return(
        <div>
            <h1>Генерация QR кодов</h1>
            <div className='flex-row'>
                <div className={styles.generationItem}>
                    1. Количество QR кодов
                    <input 
                        name='number'
                        placeholder='0'
                        onChange={(e)=>setLol(e.target.value)}
                        />
                </div>
                <div className={styles.generationItem}>
                    2. Сумма одного QR кода
                    <input 
                        name='value'
                        placeholder={test}
                        />
                </div>
                <button onClick={genHandler}>Сгенерировать</button>
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