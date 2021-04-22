import React from 'react'
import Table from '../tables/table'


const TableData = ({data}) => {

    const header = {
        data: [
        'Имя Фамилия',
        'Телефон',
        'Почта',
        'Погашение',
        'Общий выигрыш',
    ]}
    
    const body = {
        data: data.map((el,i)=>{
                    return {
                        rowStyle: {color: el.player? 'black':'grey'},
                        rowData: [
                            el.player ? el.player.fullname:'неизвестно',
                            el.player ?  el.player.phone:  'неизвестно',
                            el.player ?  el.player.email:  'неизвестно',
                            '',
                            `${el.value} рублей`,
                        ]}
                })
    
    }

    return(
        <Table header={header} body={body} />
    )
}
export default TableData