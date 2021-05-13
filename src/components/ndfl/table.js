import {Table, TrHeader, TrBody, Td, TextArea} from '../../styles/styledComponents/tables'
import React, { useState } from 'react'
import Comment from './comment'

const NdflTable = ({data, history}) => {
    
  const [comment, setComment] = useState('')

    return (
      <Table className="tableWide" id="ndfl-to-xls">
        <thead>
          <TrHeader>
            <Td>Имя Фамилия</Td>
            <Td>Телефон</Td>
            <Td>Почта</Td>
            <Td>Оплачено</Td>
            <Td>Кол-во актив. кодов</Td>
            <Td>Общий выигрыш</Td>
            <Td>На руки</Td>
            <Td>НДФЛ</Td>
          </TrHeader>
        </thead>
        <tbody>
          {data.map((el, i) => {
            return (
              <TrBody>
                <Td>{el.fullname}</Td>
                <Td>+{el.phone}</Td>
                <Td>{el.email}</Td>
                <Td>{el.rebound ? "Да" : "Нет"}</Td>
                <Td>{el.prizes_activated}</Td>
                <Td>{el.prize_sum} рублей</Td>
                <Td>{el.sum_ndfl}</Td>
                <Td>{el.tax_sum}</Td>
                <Td>
                  <Comment />
                </Td>
                <Td>
                  <button>оплатить</button>
                </Td>
              </TrBody>
            );
          })}
        </tbody>
      </Table>
    );
}
export default NdflTable