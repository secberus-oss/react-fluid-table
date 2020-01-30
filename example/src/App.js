import React from 'react'
import _ from 'lodash'
import faker from 'faker'
import styled from 'styled-components'

import { Table } from 'react-fluid-table'

const TextStyle = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const data = _.range(1, 31).map(i => ({
  id: i,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email()
}))

const columns = [
  {
    key: '',
    width: 33
  },
  {
    key: 'firstName',
    name: 'First',
    width: 120,
    cell: row => <TextStyle>{row.firstName}</TextStyle>
  },
  {
    key: 'lastName',
    name: 'Last',
    width: 120,
    cell: row => <TextStyle>{row.lastName}</TextStyle>
  },
  {
    key: 'email',
    name: 'Email',
    width: 250,
    cell: row => <TextStyle>{row.email}</TextStyle>
  }
]

const App = () => {
  return (
    <Table
      data={data}
      columns={columns}
      tableHeight={400}
      rowCount={data.length}
      itemKey={row => row.id}
    />
  )
}
export default App
