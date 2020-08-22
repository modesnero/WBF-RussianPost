import React from 'react'

export default function TablePage ({ data }) {
  const listItems = data.map(item => {
    console.log(item)
    return (
      <tr key={item.hid}>
        <td>{item.hid.$numberInt || item.hid}</td>
        <td>{item['дата оформления']}</td>
        <td>{item['индекс отправителя'].$numberInt || '-'}</td>
        <td>{item['индекс получателя'].$numberInt || '-'}</td>
        <td>{item['вес (гр)'].$numberInt || '-'}</td>
        <td>{item['стоимость (руб,коп)'].$numberInt || '-'}</td>
        <td>{item['сумма ОЦ (руб)'].$numberInt || '-'}</td>
        <td>{item['сумма НП (руб)'].$numberInt || '-'}</td>
        <td>{item['безбланковая отправка'] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item['бандероль'] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item['ускоренное'] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item['международное'] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item['с объявл'][' ценностью'] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item['с налож'][' платежом'] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item['с описью вложений'] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item["отметка 'Осторожно'"] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item['sms для отправителя'] === 'true' ? 'Да' : 'Нет'}</td>
        <td>{item['sms для получателя'] === 'true' ? 'Да' : 'Нет'}</td>
      </tr>
    )
  })

  return <tbody>{listItems}</tbody>
}
