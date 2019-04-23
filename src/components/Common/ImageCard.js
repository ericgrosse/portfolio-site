import React, { Component } from 'react'
import windowDimensions from 'react-window-dimensions'
import 'components/Common/ImageCard.scss'

class ImageCard extends Component {
  render() {
    const {props} = this

    if (props.width < 768) {
      return (
        <div className={'ImageCard'}>
          <a href={props.href} target="_blank">
            <img src={props.imagePath}/>
          </a>
        </div>
      )
    }

    return (
      <div className={'ImageCard animated ' + props.imageClass}>
        <div className="subsection image-container">
          <a href={props.href} target="_blank">
            <div className="img-overlay">
              <div className="text-container">
                <h2>{props.header}</h2>
                <p>{props.description}</p>
              </div>
            </div>
            </a>
          <img src={props.imagePath}/>
        </div>
      </div>
    )
  }
}

export default windowDimensions()(ImageCard)