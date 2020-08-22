import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default class Header extends Component {
  render () {
    const { setPage } = this.props
    return (
      <Navbar className='navbar-dark bg-primary'>
        <Navbar.Brand href='#home'>Почта России</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link onClick={() => setPage('table')}>Данные пользователей</Nav.Link>
            <Nav.Link onClick={() => setPage('segments')}>Сегменты</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Поиск по записям'
              className='mr-sm-2'
            />
            <Button variant='primary'>Найти</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
