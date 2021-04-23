import {Table, TrHeader, TrBody, Td} from '../../styles/styledComponents/tables'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ChnageNDFLpayment } from '../../redux/actions/data';


const NdflTable = ({data, history}) => {
  const dispatch = useDispatch();

  const handlePay = (id) => {
    //server
    console.log(id)
    dispatch(ChnageNDFLpayment(id));
  }

    return (
      <Table className="tableWide" id="ndfl-to-xls">
        <thead>
          <TrHeader>
            <Td>Имя Фамилия</Td>
            <Td>Телефон</Td>
            <Td>Почта</Td>
            <Td>Оплачено</Td>
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
                <Td>{el.prizes.every(prize => prize.payed) ? "Да" : "Нет"}</Td>
                <Td>{el.prize_sum} рублей</Td>
                {/* <Td>{el.activation}</Td>  */}
                <Td>{el.sum_ndfl}</Td>
                <Td>{el.tax_sum}</Td>
                <Td>
                  <button onClick={() => handlePay(el._id)}>Оплатить</button>
                </Td>
              </TrBody>
            );
          })}
        </tbody>
      </Table>
    );
}
export default NdflTable