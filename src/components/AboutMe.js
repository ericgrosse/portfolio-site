import React, { Component } from 'react'
import windowDimensions from 'react-window-dimensions'
import './AboutMe.scss'

class AboutMe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const {state, props} = this

    return (
      <div className="AboutMe">
        <div className="grid-container">
          <img src={require('images/avatar.jpg')}/>

          <div className="info">
            <p>Hi, I'm Eric Grossé, a frontend web developer from Montreal, Canada. I've been working in web development for over 4 years, ranging from freelance work to employment from startups and large corporations.</p>
            <p>I am passionate about coding because I love using my intellect to create value (such as a new social media platform) out of mere keystrokes.</p>
            <p>If you are interested in my services, feel free to contact by <a href="mailto:ericgrosse1@gmail.com">email</a>, or via social media.</p>

            <div className="social-media-icons">
              <a href={'https://github.com/ericgrosse'}><i className="fa fa-github" aria-hidden="true"/></a>
              <a href={'https://www.linkedin.com/in/eric-grosse/'}><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
              <a href={'https://twitter.com/eric_grosse'}><i className="fa fa-twitter-square" aria-hidden="true"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default windowDimensions()(AboutMe)
