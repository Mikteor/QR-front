export const header = {
    date: 'Дата генерации',
    amount: 'Количество QR',
    value: 'Сумма одного QR кода',
    amount_validated: 'Использовано',
    urlHeader: 'Скачать архив',
    downloaded: 'Скачан',
}

export const data = [
    {
        date: '20 март 21/15:40',
        number: 100,
        value: 500,
        used: 20,
        url: 't.me',
        downloaded: '1 раз / 20 март / 13:10'
    },
    {
        date: '20 март 21/15:40',
        number: 100,
        value: 500,
        used: 20,
        url: 't.me',
        downloaded: '1 раз / 20 март / 13:10'
    },
    {
        date: '20 март 21/15:40',
        number: 100,
        value: 500,
        used: 20,
        url: 't.me',
        downloaded: '1 раз / 20 март / 13:10'
    },
    
]

export const footer = {
    date: 'Итого',
    number: data.reduce((sum,cur)=>{
        return sum+cur.amount
    },0),
    value: data.reduce((sum,cur)=>{
        return sum+cur.value
    },0),
    used: data.reduce((sum,cur)=>{
        return sum+cur.used
    },0),
}