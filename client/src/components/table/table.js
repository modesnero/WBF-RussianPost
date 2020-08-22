import React, { Component } from 'react'
import { Container, Col, Row, Table, Form, Button } from 'react-bootstrap'

import TableThead from '../table-thead'
import TableControls from '../table-controls'

export default class table extends Component {
  render () {
    return (
      <Container className='mt-5'>
        <TableControls />
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <TableThead />
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}
