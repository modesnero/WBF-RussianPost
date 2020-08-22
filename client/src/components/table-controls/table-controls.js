import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'

export default function TableControls (props) {
  const { listFrom, listTo, nextPage, prevPage } = props

  return (
    <>
      <Row className='justify-content-between'>
        <Col md={6} sm={12}>
          <Form>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Скрытые юридические лица" />
            <Form.Check type="checkbox" label="Ночные клиенты" />
            <Form.Check type="checkbox" label="Постоянные клиенты" />
            <Form.Check type="checkbox" label="Клиенты, отправляющие далеко" />
            <Form.Check type="checkbox" label="Клиенты, отправляющие тяжелые посылки" />
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
          <Row>
            <Col col={12}>
            <Button block className='mb-3'>
              Сегментировать 1000 записей
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
