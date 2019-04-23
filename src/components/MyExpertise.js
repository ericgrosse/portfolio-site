import React, { Component } from 'react'
import windowDimensions from 'react-window-dimensions'
import './MyExpertise.scss'
import ImageCard from 'components/Common/ImageCard'

class MyExpertise extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const {state, props} = this

    return (
      <div className="MyExpertise">
        <div className="grid-container">
          <h1>My Expertise</h1>

          <ImageCard
              href='https://reactjs.org/'
              header='React'
              description=''
              imagePath={require('images/react-logo-1000x1000.png')}
              imageClass='grid-image effect-left'
            />

            <ImageCard
              href='https://webpack.js.org/'
              header='Webpack'
              description=''
              imagePath={require('images/webpack-logo-925x925.png')}
              imageClass='grid-image effect-left'
            />

            <ImageCard
              href='https://nodejs.org/en/'
              header='Node.js'
              description=''
              imagePath={require('images/node-js-logo-1000x1000.png')}
              imageClass='grid-image effect-left'
            />

            <ImageCard
              href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
              header='HTML5 + CSS3'
              description=''
              imagePath={require('images/html5+css3-900x900.png')}
              imageClass='grid-image effect-right'
            />

            <ImageCard
              href='https://circleci.com/'
              header='CircleCI'
              description=''
              imagePath={require('images/circle-ci-logo-400x400.png')}
              imageClass='grid-image effect-left'
            />

            <ImageCard
              href='http://www.photoshop.com/'
              header='Photoshop'
              description=''
              imagePath={require('images/photoshop-logo-512x512.png')}
              imageClass='grid-image effect-left'
            />
        </div>
      </div>
    )
  }
}

export default windowDimensions()(MyExpertise)
