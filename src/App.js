import React, { Component } from 'react'
import Layout from 'components/Layout'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './theme'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Layout></Layout>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

export default App
