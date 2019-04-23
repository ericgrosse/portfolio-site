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
    const { props } = this
    const desktop = props.width >= 768

    return (
      <div className="MyWork" id="work">
        <div className="grid-container">
          <h1>My Work</h1>
          <ImageCard
            href='https://medium.com/@webdevsanity'
            header='Web Dev Sanity'
            description='My personal programming blog, with an emphasis on making web development more accessible to new developers.'
            imagePath={require('images/web-dev-sanity.png')}
            imageClass={desktop ? 'effect-left' : 'effect-left'}
          />

          <ImageCard
            href='https://ketogenicookbook.netlify.com/'
            header='Ketogenic Cookbook'
            description='A sample website for making recipes that adhere to a ketogenic diet.'
            imagePath={require('images/ketogenic-cookbook-1.png')}
            imageClass={desktop ? 'effect-left' : 'effect-right'}
          />

          <ImageCard
            href='https://github-sample-api.netlify.com/#!/home'
            header='Github Sample API'
            description={'An Angular application that uses Github\'s APIs to conveniently search through Github repositories, as well as checking for contributors, languages, stargazers, subscribers, etc.'}
            imagePath={require('images/github-sample-api.png')}
            imageClass={desktop ? 'effect-right' : 'effect-left'}
          />

          <ImageCard
            href='https://vue-tic-tac-toe.netlify.com/'
            header='Vue Tic-Tac-Toe'
            description={'My first Vue.js application, a straightforward game of tic-tac-toe. My next Vue.js hobbyist projects will be checkers, then chess :)'}
            imagePath={require('images/vue-tic-tac-toe-cropped.PNG')}
            imageClass={desktop ? 'effect-right' : 'effect-right'}
          />
        </div>
      </div>
    )
  }
}

export default windowDimensions()(MyWork)
