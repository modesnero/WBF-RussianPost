import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

export default function Segments () {
  return (
    <Container>
      <Row className='row justify-content-around'>
        <Col lg={4} md={6} sm={12}>
          <Card bg={'primary'} className='text-white mt-3'>
            <Card.Img
              variant='top'
              src='https://im0-tub-ru.yandex.net/i?id=b523f989d5f06dbb667574c2a98f4acb&n=13&exp=1'
            />
            <Card.Body>
              <Card.Title>Скрытые юридические лица.</Card.Title>
              <Card.Text>
                <p>
                  Определяем данную категорию по большому количеству
                  отправлений.
                </p>
                <p>
                  1. Можем предложить дополнительные опции, продукты Почты
                  России – т.е. опись вложения, объявленная ценность, наложенный
                  платеж, смс-уведомление.
                </p>
                <p>
                  2. Систему накопления. Давать определенные бонусы за частые
                  отправления.
                </p>
                <p>
                  3. Предоставить со скидкой услуги партнеров Почты России.{' '}
                </p>
                <p>4. Скидки на оптовую отправку </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link className='text-white' href='#'>
                Просмотр
              </Card.Link>
              <Card.Link className='text-white' href='#'>
                Подробнее
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card bg={'primary'} className='text-white mt-3'>
            <Card.Img
              variant='top'
              src='https://clearbody.org/images/1/what-is-biphasic-and-polyphasic-sleep_2.jpg'
            />
            <Card.Body>
              <Card.Title>Ночные клиенты</Card.Title>
              <Card.Text>
                <p>Определяем по времени отправки посылки.</p>
                <p>
                  1. Предложить такси до ближайшего круглосуточного отделения
                  Почты России, или курьера. (со скидкой).
                </p>
                <p>
                  2. Сделать темную тему сайта и мобильного приложения (ночную
                  тему).
                </p>
                <p>
                  3. Подобрать рекламу круглосуточных заведений, рекомендовать
                  услуги партнеров Почты России, которые работают круглосуточно
                  со скидкой.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link className='text-white' href='#'>
                Просмотр
              </Card.Link>
              <Card.Link className='text-white' href='#'>
                Подробнее
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card bg={'primary'} className='text-white mt-3'>
            <Card.Img
              variant='top'
              src='https://o-es.ru/wp-content/uploads/2016/08/clients.jpg'
            />
            <Card.Body>
              <Card.Title>Постоянные клиенты</Card.Title>
              <Card.Text>
                <p>
                  Определяем данную категорию по частоте и стабильности
                  отправлений
                </p>
                <p>
                  1. Создать программу лояльность в которую будут включены
                  скидки, спец.предложения, система накопления бонусов, услуги
                  партнеров Почты России
                </p>
                <p>
                  2. Персонализированный личный кабинет с рекомендациями по
                  предпочтениям и типам отправки.
                </p>
                <p>
                  3. Персонализированные рекламные предложения по предпочтениям
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link className='text-white' href='#'>
                Просмотр
              </Card.Link>
              <Card.Link className='text-white' href='#'>
                Подробнее
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card bg={'primary'} className='text-white mt-3'>
            <Card.Img
              variant='top'
              src='https://www.booktraining.ie/wp-content/uploads/Manual-Handling.jpg'
            />
            <Card.Body>
              <Card.Title>Клиенты, отправляющие тяжелые посылки .</Card.Title>
              <Card.Text>
                <p>Определяем данную категорию по весу отправлений.</p>
                <p>1. Помощь в упаковке посылки</p>
                <p>2. Скидки на специальные упаковки и материалы</p>
                <p>3. Скидки на дополнительные услуги</p>
                <p>
                  4. Скидки и помощь в подборе курьера. Доставка посылки до
                  квартиры. Предложения такси.{' '}
                </p>
                <p>
                  5. Реклама – партнерские магазины Почты России, в основном
                  магазины крупногабаритной техники.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link className='text-white' href='#'>
                Просмотр
              </Card.Link>
              <Card.Link className='text-white' href='#'>
                Подробнее
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card bg={'primary'} className='text-white mt-3'>
            <Card.Img
              variant='top'
              src='https://alliance-catalog.ru/uploads/templates/origins/2017/207.jpg'
            />
            <Card.Body>
              <Card.Title>Клиенты, отправляющие далеко</Card.Title>
              <Card.Text>
                <p>
                  Общую статистику расстояний отправлений можно определить по
                  индексам отправителя и получателя.
                </p>
                <p>1. Скидки на пересылку на дальние расстояния.</p>
                <p>2. Смс-уведомления о статусе посылки.</p>
                <p>3. Опись вложения.</p>
                <p>
                  4. Персонализированная реклама, в основном доставка, курьеры{' '}
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link className='text-white' href='#'>
                Просмотр
              </Card.Link>
              <Card.Link className='text-white' href='#'>
                Подробнее
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
