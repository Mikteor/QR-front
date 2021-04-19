import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllBundles, generateQRs} from '../redux/actions/data'

import styles from '../styles/main.module.css'
import {header} from '../components/main/data'
import TableRow from '../components/main/tableRow'
import TableHeader from '../components/main/tableHeader'
import TableFooter from '../components/main/tableFooter'



const Main = () => {
const dispatch = useDispatch()

const allData = useSelector(state => state.data.data)
const msg = useSelector(state => state.data.msg)

const [formData, setFormData] = useState({
    price: 0,
    count: 0,
})

const footer = allData && {
    date: 'Итого',
    amount: allData.reduce((sum,cur)=>{
        // console.log(cur.amount)
        // console.log(sum+cur.amount)
        return sum+cur.amount
    },0),
    value: allData.reduce((sum,cur)=>{
        return sum+(cur.value*cur.amount)
    },0),
    used: allData.reduce((sum,cur)=>{
        return sum+cur.amount_validated
    },0),
}


useEffect(()=>{
    !allData && dispatch(getAllBundles())
},[])



const genHandler = () => {
    dispatch(generateQRs(formData))
}

    return(
        <div>
            <h1>Генерация QR кодов</h1>
            <div className='flex-row'>
                <div className={styles.generationItem}>
                    1. Количество QR кодов
                    <input 
                        type='number'
                        name='count'
                        placeholder='0'
                        onChange={(e)=>setFormData({...formData,count: Number(e.target.value) })}
                        />
                </div>
                <div className={styles.generationItem}>
                    2. Сумма одного QR кода
                    <input 
                        type='number'
                        name='price'
                        placeholder='000'
                        onChange={(e)=>setFormData({...formData,price: Number(e.target.value) })}
                        />
                </div>
                <button onClick={genHandler}>Сгенерировать</button>
            </div>

            <h1>История генериций QR</h1>
            <table className='tableWide'>
                <thead>
                    <TableHeader data={header}/>
                </thead>
                <tbody>
                    {allData&&allData.map((el,i)=>{
                        return(
                            <TableRow data={el}/>
                        )
                    })}    
                </tbody>
                <tfoot>
                    {allData && <TableFooter data={footer}/>}
                </tfoot>
            </table>
        </div>
    )
}
export default Main


