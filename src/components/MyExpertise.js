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
      <div className="MyExpertise" id="expertise">
        <div className="grid-container">
          <h1>My Expertise</h1>

          <ImageCard
              href='https://reactjs.org/'
              header='React'
              description=''
              imagePath={require('images/react-logo-scaled.png')}
              imageClass='effect-left'
            />

            <ImageCard
              href='https://webpack.js.org/'
              header='Webpack'
              description=''
              imagePath={require('images/webpack-logo-cropped.png')}
              imageClass='effect-left'
            />

            <ImageCard
              href='https://nodejs.org/en/'
              header='Node.js'
              description=''
              imagePath={require('images/node-js-logo-cropped.png')}
              imageClass='effect-left'
            />

            <ImageCard
              href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
              header='HTML5 + CSS3'
              description=''
              imagePath={require('images/html5+css3-900x900.png')}
              imageClass=''
            />

            <ImageCard
              href='https://circleci.com/'
              header='CircleCI'
              description=''
              imagePath={require('images/circle-ci-logo-400x400.png')}
              imageClass=''
            />

            <ImageCard
              href='http://www.photoshop.com/'
              header='Photoshop'
              description=''
              imagePath={require('images/photoshop-logo-cropped.png')}
              imageClass=''
            />
        </div>
      </div>
    )
  }
}

export default windowDimensions()(MyExpertise)
