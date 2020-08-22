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
    listTo: 20
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
    const { data, listFrom, listTo } = this.state
    return (
      <Container className='mt-5'>
        <TableControls
          listFrom={listFrom}
          listTo={listTo}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
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
