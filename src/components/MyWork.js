import React, { Component } from 'react'
import windowDimensions from 'react-window-dimensions'
import './MyWork.scss'
import ImageCard from 'components/Common/ImageCard'

class MyWork extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const {state, props} = this

    return (
      <div className="MyWork">
        <div className="grid-container">
          <h1>My Work</h1>
          <ImageCard
            href='http://www.webdevsanity.com/'
            header='Web Dev Sanity'
            description='My personal programming blog, with an emphasis on making web development more accessible to new developers.'
            imagePath={require('images/web-dev-sanity.png')}
            imageClass=''
          />

          <ImageCard
            href='http://ketogenicookbook.com/'
            header='Ketogenic Cookbook'
            description='A sample website for making recipes that adhere to a ketogenic diet.'
            imagePath={require('images/ketogenic-cookbook-1.png')}
            imageClass=''
          />

          <ImageCard
            href='http://githubsampleapi.com'
            header='Github Sample API'
            description={'An Angular application that uses Github\'s APIs to conveniently search through Github repositories, as well as checking for contributors, languages, stargazers, subscribers, etc.'}
            imagePath={require('images/github-sample-api.png')}
            imageClass=''
          />
        </div>
      </div>
    )
  }
}

export default windowDimensions()(MyWork)
