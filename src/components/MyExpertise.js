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
    const desktop = props.width >= 768

    return (
      <div className="MyExpertise" id="expertise">
        <div className="grid-container">
          <h1>My Expertise</h1>

          <ImageCard
              href='https://reactjs.org/'
              header='React'
              description=''
              imagePath={desktop ? require('images/react-logo-scaled.png') : require('images/react-js-logo-cropped.png')}
              imageClass={desktop ? 'effect-left' : 'effect-right'}
            />

            <ImageCard
              href='https://webpack.js.org/'
              header='Webpack'
              description=''
              imagePath={desktop ? require('images/webpack-logo-cropped.png') : require('images/webpack-logo-mobile.png')}
              imageClass={desktop ? 'effect-left' : 'effect-right'}
            />

            <ImageCard
              href='https://nodejs.org/en/'
              header='Node.js'
              description=''
              imagePath={desktop ? require('images/node-js-logo-cropped.png') : require('images/node-js-logo-mobile.png')}
              imageClass={desktop ? 'effect-left' : 'effect-right'}
            />

            <ImageCard
              href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
              header='HTML5 + CSS3'
              description=''
              imagePath={desktop ? require('images/html5+css3-900x900.png'): require('images/html5+css3-mobile.png')}
              imageClass={desktop ? 'effect-right' : 'effect-right'}
            />

            <ImageCard
              href='https://circleci.com/'
              header='CircleCI'
              description=''
              imagePath={desktop ? require('images/circle-ci-logo-400x400.png'): require('images/circle-ci-logo-mobile.png')}
              imageClass={desktop ? 'effect-right' : 'effect-right'}
            />

            <ImageCard
              href='http://www.photoshop.com/'
              header='Photoshop'
              description=''
              imagePath={desktop ? require('images/photoshop-logo-cropped.png'): require('images/photoshop-logo-mobile.png')}
              imageClass={desktop ? 'effect-right' : 'effect-right'}
            />
        </div>
      </div>
    )
  }
}

export default windowDimensions()(MyExpertise)
