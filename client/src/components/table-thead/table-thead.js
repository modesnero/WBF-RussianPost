import React from 'react'

export default function TableThead () {
  return (
    <thead>
      <tr>
        <th className='text-center'>id</th>
        <th className='text-center'>Дата оформления</th>
        <th className='text-center'>Индекс отправителяя</th>
        <th>Индекс получателя</th>
        <th>Вес (гр)</th>
        <th>Стоимость (руб, коп)</th>
        <th>Сумма ОЦ (руб)</th>
        <th>Сумма НП (руб)</th>
        <th>Безбланковая отправка</th>
        <th>Бандероль</th>
        <th>Ускоренное</th>
        <th>Международное</th>
        <th>С объявленной ценностью</th>
        <th>С наложенным платежом</th>
        <th>С описью вложений</th>
        <th>Отметка "Осторожно"</th>
        <th>Sms для отправителя</th>
        <th>Sms для получателя</th>
      </tr>
    </thead>
  )
}
