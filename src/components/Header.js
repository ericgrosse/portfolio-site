import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import windowDimensions from 'react-window-dimensions'
import 'components/Header.scss'

class Header extends React.Component {
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
            <NavLink className="home" activeClassName="active" to='/'>Home</NavLink>
            <NavLink className="services" activeClassName="active" to='/services'>Services</NavLink>
            <NavLink className="portfolio" activeClassName="active" to='/portfolio'>Portfolio</NavLink>
            <NavLink className="about" activeClassName="active" to='/about'>About</NavLink>
            <NavLink className="contact" activeClassName="active" to='/contact'>Contact</NavLink>
          </div>
        </div>
      )
    }

    return (
      <div className="Header">
        <div className="grid-container">
          <section className="logo">
            <a href="#one">Eric Grossé</a>
          </section>

          <section className="gutter"/>

          <section className="services">
            <a href="#two">Work</a>
          </section>

          <section className="portfolio">
            <a href="#three">Expertise</a>
          </section>

          <section className="about">
            <a href="#four">About</a>
          </section>

          <section className="contact">
            <a href="#five">Contact</a>
          </section>
        </div>
      </div>
    )
  }
}

export default windowDimensions()(Header)
