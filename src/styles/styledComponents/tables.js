import styled from 'styled-components'

export const Table = styled.table`

margin: 0;
margin-top: 40px;
margin-bottom: 40px;
border: none;
width: 100%;
border-collapse: collapse
`

export const TrHeader = styled.tr`

border: none;
height: 40px;
font-weight: bold;
color: grey;
`
export const TrBody = styled.tr`

border: none;
height: 40px;

&:hover{
    background-color: #B7B7B7;
}
& button{
    background-color: transparent;
    color: #5D96D8;
    padding: 0;
    margin-top: 18px;
    align-self: center;
    border: none;
    }
    & tableButton:hover{
    background-color: transparent;
    color: black;
    border: none;
    }
`
export const TrFooter = styled.tr`

border: none;
height: 40px;
font-size: 20px;
font-weight: bold;
`

export const Td = styled.td`

height: 28px;
border: none;
font-size:16px;

`