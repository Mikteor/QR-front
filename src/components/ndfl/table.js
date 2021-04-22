import {Table, TrHeader, TrBody, Td} from '../../styles/styledComponents/tables'
import React from 'react'


const NdflTable = ({data, history}) => {
  

    return (
      <Table className="tableWide" id="ndfl-to-xls">
        <thead>
          <TrHeader>
            <Td>Имя Фамилия</Td>
            <Td>Телефон</Td>
            <Td>Почта</Td>
            <Td>Погашение</Td>
            <Td>Общий выигрыш</Td>
            {/* <Td>Активация</Td> */}
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
                <Td>{el.prize_sum} рублей</Td>
                {/* <Td>{el.activation}</Td>  */}
                <Td>{el.sum_ndfl}</Td>
                <Td>{el.tax_sum}</Td>
              </TrBody>
            );
          })}
        </tbody>
      </Table>
    );
}
export default NdflTable