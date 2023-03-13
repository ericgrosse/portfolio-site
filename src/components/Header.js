import React, { Component } from 'react'
import windowDimensions from 'react-window-dimensions'
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showHeader: false
    }
  }

  // Hide the header on a route change
  componentWillReceiveProps(nextProps) {
    const {props} = this

    if (props !== nextProps) {
      this.setState({showHeader: false})
    }
  }

  toggleHeader = () => {
    this.setState({showHeader: !this.state.showHeader})
  }

  render() {
    const {state, props} = this

    if (props.width < 768) {
      return (
        <div className="MobileHeader">
          <i className="fa fa-bars" onClick={this.toggleHeader}/>

          <div className={'header-content' + (state.showHeader ? ' expanded': '')}>
            <a onClick={this.toggleHeader} href="#home">Home</a>
            <a onClick={this.toggleHeader} href="#work">Work</a>
            <a onClick={this.toggleHeader} href="#experience">Experience</a>
            <a onClick={this.toggleHeader} href="#expertise">Expertise</a>
          </div>
        </div>
      )
    }

    return (
      <div className="Header">
        <div className="grid-container">
          <a href="#home" className="home">Eric Grossé</a>
          <div/>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
        </div>
      </div>
    )
  }
}

export default windowDimensions()(Header)
