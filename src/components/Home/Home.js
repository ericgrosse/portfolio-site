import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import windowDimensions from 'react-window-dimensions'
import onScroll from 'helpers/onScroll'
import Banner from 'components/Common/Banner'
import ImageCard from 'components/Common/ImageCard'
import 'components/Home/Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const {state, props} = this;
    //console.log(state)
    //console.log(props)

    let desktop = props.width >= 768

    return (
      <div className="Home">
        <section id="two" className="my-work">
          <div className="grid-container">
            <div className="subsection header">
              <h3>Eric Grossé</h3>
            </div>

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

            <ImageCard
              href='https://music-player-web-app.netlify.com/'
              header='Music Player Web App'
              description='A music player built with the HTML5 Audio API. Currently allows you to drag & drop MP3s and adjust the songs playback speed'
              imagePath={require('images/music-player-web-app.png')}
              imageClass=''
            />

            <ImageCard
              href='http://www.feandrarealestate.com/'
              header='Feandra Real Estate'
              description='A sample site that displays real estate listings.'
              imagePath={require('images/feandra-real-estate.png')}
              imageClass=''
            />

            <ImageCard
              href='http://avertourism.com/'
              header='Aver Tourism'
              description='A sample tourism site featuring an image carousel, on-scroll image animations and styled using Bootstrap.'
              imagePath={require('images/aver-tourism.png')}
              imageClass=''
            />
          </div>
        </section>

        <section id="three" className="our-expertise">
          <div className="grid-container">
            <div className="subsection header">
              <h3>My Expertise</h3>
            </div>

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
              href='https://www.mysql.com/'
              header='MySQL'
              description=''
              imagePath={require('images/mysql-logo-1024x1024.png')}
              imageClass='grid-image effect-right'
            />

            <ImageCard
              href='https://www.mongodb.com/'
              header='MongoDB'
              description=''
              imagePath={require('images/mongodb-logo-375x375.png')}
              imageClass='grid-image effect-right'
            />


            <ImageCard
              href='https://github.com/'
              header='Github'
              description=''
              imagePath={require('images/github-icon-512x512-2.png')}
              imageClass='grid-image effect-left'
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
        </section>
      </div>
    );
  }
}

export default windowDimensions()(Home)
