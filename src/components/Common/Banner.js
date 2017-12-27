import React, { Component } from 'react'
import './Banner.scss'

export default class Banner extends Component {
  render() {
    const {props} = this

    return (
      <div className="Banner" style={{backgroundImage: `url(${props.imagePath})`}}>
        <div className="img-overlay"/>

        <div className="grid-container">
          <h3>{props.title}</h3>
        </div>
      </div>
    )
  }
}
