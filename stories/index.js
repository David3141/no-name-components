import React from 'react'
import { storiesOf } from '@storybook/react'

import App from '../src/components/App'
import Button from '../src/components/Button'

storiesOf('Test', module)
  .add('test', () => (
    <App />
  ))

storiesOf('Button', module)
  .add('default', () => <Button>Button</Button>)
  .add('minor', () => <Button minor>Button</Button>)
  .add('mutliple', () => (
    <React.Fragment>
      <Button>etwas wichtiger</Button>
      <Button minor>nicht so wichtig</Button>
      <Button minor>auch nciht</Button>
      <Button bgColor='orangered' color='purple'>andere farbe</Button>
      <Button dangerous>Sicher?</Button>
    </React.Fragment>
  ))
