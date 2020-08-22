import React, { Component } from 'react'

import Table from '../table'
import Header from '../header'
import Segments from '../segments'

export default class app extends Component {
  state = {
    page: 'table'
  }

  setPage = page => this.setState({ page })

  render () {
    const { page } = this.state
    return (
      <>
        <Header setPage={this.setPage} />
        {page === 'table' ? <Table /> : null}
        {page === 'segments' ? <Segments /> : null}
      </>
    )
  }
}
