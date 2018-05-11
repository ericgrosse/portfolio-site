import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Routes from 'components/Routes'
import windowDimensions from 'react-window-dimensions';

class App extends Component {
  componentDidMount() {

  }

  render() {
    const {props} = this;

    return (
      <div>
        {/*<Header/>*/}
        <Routes/>
        <Footer/>
      </div>
    )
  }
}

export default windowDimensions()(App)
