import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default class Header extends Component {
  state = { expanded: false }

  expandedToggle = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }))
  }

  navClose = () => this.setState({ expanded: false })

  render () {
    const { setPage } = this.props
    return (
      <Navbar
        expand='md'
        collapseOnSelect={true}
        expanded={this.state.expanded}
        className='navbar-dark bg-primary'
      >
        <Navbar.Brand href='#home'>Почта России</Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={this.expandedToggle}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link onClick={() => setPage('table')}>
              Данные пользователей
            </Nav.Link>
            <Nav.Link onClick={() => setPage('segments')}>Сегменты</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Поиск по записям'
              className='mr-sm-2 mb-2'
            />
            <Button variant='primary'>Найти</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
