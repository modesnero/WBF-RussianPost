import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'

export default function TableControls (props) {
  const { listFrom, listTo, nextPage, prevPage } = props

  return (
    <>
      <Row className='justify-content-between'>
        <Col md={6} sm={12}>
          <Form>
            <Form.Group>
              <Form.Control as='select'>
                <option>Все данные</option>
                <option>Сегмент 1</option>
                <option>Сегмент 2</option>
                <option>Сегмент 3</option>
                <option>Сегмент 4</option>
                <option>Сегмент 5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6} sm={12}>
          <Row className='justify-content-end'>
            <Col md={6} sm={12}>
              <Button block className='mb-3' onClick={prevPage}>
                Назад
              </Button>
            </Col>
            <Col md={6} sm={12}>
              <Button block className='mb-3' onClick={nextPage}>
                Далее
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className='mt-3 mb-3 text-center'>
            Показаны результаты: {listFrom} - {listTo}
          </h3>
        </Col>
      </Row>
    </>
  )
}
