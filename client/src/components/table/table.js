import React, { Component } from 'react'
import { Container, Col, Row, Table } from 'react-bootstrap'

import TableThead from '../table-thead'
import TableControls from '../table-controls'
import TablePage from '../table-page'

export default class table extends Component {
  state = {
    // data: [
    //   {
    //     hid: '17279630-2e29-4a0d-8f96-f3c932e6bbcb',
    //     'дата оформления': '2020-07-05 00:00:26.036000',
    //     'индекс отправителя': { $numberInt: '109469' },
    //     'индекс получателя': { $numberInt: '107241' },
    //     'вес (гр)': { $numberInt: '100' },
    //     'стоимость (руб,коп)': { $numberInt: '173' },
    //     'сумма ОЦ (руб)': 'NULL',
    //     'сумма НП (руб)': 'NULL',
    //     'безбланковая отправка': 'false',
    //     бандероль: 'false',
    //     ускоренное: 'true',
    //     международное: 'false',
    //     'с объявл': { ' ценностью': 'false' },
    //     'с налож': { ' платежом': 'false' },
    //     'с описью вложений': 'false',
    //     "отметка 'Осторожно'": '',
    //     'sms для отправителя': 'false',
    //     'sms для получателя': 'false'
    //   },
    //   {
    //     _id: { $oid: '5f404ef9c1ba529b7412cf6a' },
    //     hid: '16d739fa-ca72-4b12-b8a1-ae5d91df945f',
    //     'дата оформления': '2020-07-05 00:11:47.671000',
    //     'индекс отправителя': { $numberInt: '111250' },
    //     'индекс получателя': { $numberInt: '670033' },
    //     'вес (гр)': { $numberInt: '100' },
    //     'стоимость (руб,коп)': { $numberInt: '173' },
    //     'сумма ОЦ (руб)': 'NULL',
    //     'сумма НП (руб)': 'NULL',
    //     'безбланковая отправка': 'true',
    //     бандероль: 'false',
    //     ускоренное: 'true',
    //     международное: 'false',
    //     'с объявл': { ' ценностью': 'false' },
    //     'с налож': { ' платежом': 'false' },
    //     'с описью вложений': 'false',
    //     "отметка 'Осторожно'": '',
    //     'sms для отправителя': 'false',
    //     'sms для получателя': 'false'
    //   },
    //   {
    //     _id: { $oid: '5f404ef9c1ba529b7412cf6b' },
    //     hid: '16971e43-728a-4f66-a93c-3678aa8433cd',
    //     'дата оформления': '2020-07-05 00:03:17.229000',
    //     'индекс отправителя': { $numberInt: '390039' },
    //     'индекс получателя': { $numberInt: '125284' },
    //     'вес (гр)': { $numberInt: '1100' },
    //     'стоимость (руб,коп)': { $numberInt: '238' },
    //     'сумма ОЦ (руб)': 'NULL',
    //     'сумма НП (руб)': 'NULL',
    //     'безбланковая отправка': 'true',
    //     бандероль: 'false',
    //     ускоренное: 'false',
    //     международное: 'false',
    //     'с объявл': { ' ценностью': 'false' },
    //     'с налож': { ' платежом': 'false' },
    //     'с описью вложений': 'false',
    //     "отметка 'Осторожно'": '',
    //     'sms для отправителя': 'false',
    //     'sms для получателя': 'false'
    //   },
    //   {
    //     _id: { $oid: '5f404ef9c1ba529b7412cf72' },
    //     hid: { $numberInt: '4145992' },
    //     'дата оформления': '2020-07-05 00:21:59.948000',
    //     'индекс отправителя': { $numberInt: '367018' },
    //     'индекс получателя': { $numberInt: '173025' },
    //     'вес (гр)': { $numberInt: '1000' },
    //     'стоимость (руб,коп)': '421,9',
    //     'сумма ОЦ (руб)': { $numberInt: '2800' },
    //     'сумма НП (руб)': 'NULL',
    //     'безбланковая отправка': 'false',
    //     бандероль: 'false',
    //     ускоренное: 'false',
    //     международное: 'false',
    //     'с объявл': { ' ценностью': 'true' },
    //     'с налож': { ' платежом': 'false' },
    //     'с описью вложений': 'false',
    //     "отметка 'Осторожно'": '',
    //     'sms для отправителя': 'false',
    //     'sms для получателя': 'false'
    //   }
    // ],
    data: [],
    pageNum: 1,
    listFrom: 1,
    listTo: 20
  }

  componentDidMount = async () => this.updateData()

  updateData = async () => {
    const { listFrom, listTo } = this.state
    const limit = 20
    const skip = listFrom - 1

    const response = await fetch(`/api/data/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ limit, skip })
    })
    const data = await response.json()

    this.setState({ data })
  }

  render () {
    const { data, listFrom, listTo } = this.state
    return (
      <Container className='mt-5'>
        <TableControls listFrom={listFrom} listTo={listTo} />
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <TableThead />
              <TablePage data={data} />
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}
