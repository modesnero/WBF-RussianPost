import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'

export default function TableControls (props) {
  const {
    listFrom,
    listTo,
    nextPage,
    prevPage,
    dataCount,
    dataProc,
    onSegmentChange
  } = props

  return (
    <>
      <Row className='justify-content-between'>
        <Col md={6} sm={12}>
          <Form>
            <Form.Group>
              <Form.Check onChange={() => onSegmentChange(0)} type='checkbox' label='Скрытые юридические лица' />
              <Form.Check onChange={() => onSegmentChange(1)} type='checkbox' label='Ночные клиенты' />
              <Form.Check onChange={() => onSegmentChange(2)} type='checkbox' label='Постоянные клиенты' />
              <Form.Check
                type='checkbox'
                label='Клиенты, отправляющие далеко'
                onChange={() => onSegmentChange(3)}
              />
              <Form.Check
                type='checkbox'
                label='Клиенты, отправляющие тяжелые посылки'
                onChange={() => onSegmentChange(4)}
              />
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
            Показаны результаты: {listFrom} - {listTo}. Всего записей:{' '}
            {dataCount}({dataProc}% от общего числа записей)
          </h3>
        </Col>
      </Row>
    </>
  )
}
