import React, { Component } from 'react'
import 'components/Common/ImageCard.scss'

export default class ImageCard extends Component {
  render() {
    const {props} = this

    return (
      <div className="ImageCard">
        <div className="subsection image-container">
          <a href={props.href} target="_blank">
            <div className="img-overlay">
              <div className="text-container">
                <h2>{props.header}</h2>
                <p>{props.description}</p>
              </div>
            </div>
            </a>
          <img className={props.imageClass} src={props.imagePath}/>
        </div>
      </div>
    )
  }
}
