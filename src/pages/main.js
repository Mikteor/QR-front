import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllBundles, generateQRs, StartGenerate} from '../redux/actions/data'

import styles from '../styles/main.module.css'

import MainTable from '../components/main/table'



const Main = ({history}) => {
const dispatch = useDispatch()

const allData = useSelector(state => state.data.data)
// const msg = useSelector(state => state.data.msg)
const isStarted = useSelector(state => state.data.isStarted)
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
    !allData && localStorage.token && dispatch(getAllBundles())
},[])



const genHandler = () => {
    dispatch(StartGenerate())
    dispatch(generateQRs(formData))
}

    return(
        <div>
            <h1>Генерация QR кодов</h1>
            {isStarted ? <p>Идет генерация QR кодов, процесс займет некоторое время</p> : (
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
            )}
            
           

            <h1>История генериций QR</h1>
            {allData&& <MainTable data={allData} history={history}/>}
        </div>
    )
}
export default Main


