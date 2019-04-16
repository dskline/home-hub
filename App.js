import React from 'react'

import Routes from './app/Routes'
import StyleProvider from './app/config/style/StyleProvider'

export default class App extends React.Component {

  render () {
    return (
      <StyleProvider>
        <Routes />
      </StyleProvider>
    )
  }
}
