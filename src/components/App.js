import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Routes from 'components/Routes'
import windowDimensions from 'react-window-dimensions';
import 'styles/app.scss'
import 'animate.css/animate.min.css'
import 'fonts/Pieta/Webfonts/MyFontsWebfontsKit.css'

class App extends Component {
  render() {
    const {props} = this;

    return (
      <div>
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    )
  }
}

export default windowDimensions()(App)
