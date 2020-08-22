import React, { Component } from 'react'
import { Container, Col, Row, Table } from 'react-bootstrap'

import TableThead from '../table-thead'
import TableControls from '../table-controls'
import TablePage from '../table-page'

export default class table extends Component {
  state = {
    data: [],
    pageNum: 1,
    listFrom: 1,
    listTo: 20,
    dataCount: 697765,
    dataProc: 100
  }

  onSegmentChange = num => {
    this.setState(({ dataCount }) => {
      if (dataCountArr[num] === dataCount) {
        return { dataCount: dataCountDefault, dataProc: dataProcDefault }
      } else {
        return {dataCount: dataCountArr[num], dataProc: dataProcArr[num]}
      }
    })
    this.updateData(randomInteger(10, 5000))
  }

  componentDidMount = async () => this.updateData(1)

  updateData = async listFrom => {
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

  nextPage = async () => {
    this.updateData(this.state.listFrom + 20)
    this.setState(({ listTo, listFrom }) => ({
      listTo: listTo + 20,
      listFrom: listFrom + 20
    }))
  }

  prevPage = async () => {
    if (this.state.listFrom > 1) {
      this.updateData(this.state.listFrom - 20)
      this.setState(({ listTo, listFrom }) => ({
        listTo: listTo - 20,
        listFrom: listFrom - 20
      }))
    }
  }

  render () {
    const { data, listFrom, listTo, dataCount, dataProc } = this.state
    return (
      <Container className='mt-5'>
        <TableControls
          listFrom={listFrom}
          listTo={listTo}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          dataCount={dataCount}
          dataProc={dataProc}
          onSegmentChange={this.onSegmentChange}
        />
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

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const dataCountArr = [318390, 166905, 361930, 330112, 87672]
const dataProcArr = [45.63, 23.92, 51.87, 47.31, 13.09]
const dataCountDefault = 697765
const dataProcDefault = 100