import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Header = styled.h1`
  background: lavender;
  color: #343434;
  padding: 14px;
`

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header>Hello world!</Header>
        <Button>TEE</Button>
      </div>)
  }
}
