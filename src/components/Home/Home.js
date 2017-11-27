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

  componentDidMount() {
    //onScroll()
  }

  render() {
    const {state, props} = this;
    //console.log(state)
    //console.log(props)

    let desktop = props.width >= 768

    return (
      <div className="Home">
        <Banner
          title=''
          imagePath={require('images/eric-1-cropped.jpg')}
        />
          
        <section className="my-work">
          <div className="grid-container">
            <div className="subsection header">
              <h3>My Work</h3>
            </div>

            <ImageCard
              href='http://www.webdevsanity.com/'
              header='Web Dev Sanity'
              description='My personal programming blog, with an emphasis on making web development more accessible to new developers.'
              imagePath={require('images/web-dev-sanity.png')}
            />

            <ImageCard
              href='http://ketogenicookbook.com/'
              header='Ketogenic Cookbook'
              description='A sample website for making recipes that adhere to a ketogenic diet.'
              imagePath={require('images/ketogenic-cookbook-1.png')}
            />

            <ImageCard
              href='http://githubsampleapi.com'
              header='Github Sample API'
              description={'An Angular application that uses Github\'s APIs to conveniently search through Github repositories, as well as checking for contributors, languages, stargazers, subscribers, etc.'}
              imagePath={require('images/github-sample-api.png')}
            />

            <ImageCard
              href='https://book-in-a-box.herokuapp.com/'
              header='Book In A Box'
              description='A site designed for potential authors who want professional help publishing their first book. Currently the homepage, About Us, Our Authors and Blog page are built.'
              imagePath={require('images/book-in-a-box.png')}
            />

            <ImageCard
              href='https://toptal-user-profile.herokuapp.com/'
              header='Toptal User Profile'
              description='A sample site for developers to upload their profile and resume in order to attract clients. Each square in the profile allows the user to add content.'
              imagePath={require('images/toptal-user-profile.png')}
            />

            <ImageCard
              href='https://music-player-web-app.herokuapp.com/'
              header='Music Player Web App'
              description='A music player built with the HTML5 Audio API. Currently allows you to drag & drop MP3s and adjust the songs playback speed'
              imagePath={require('images/music-player-web-app.png')}
            />

            <ImageCard
              href='http://www.feandrarealestate.com/'
              header='Feandra Real Estate'
              description='A sample site that displays real estate listings.'
              imagePath={require('images/feandra-real-estate.png')}
            />

            <ImageCard
              href='http://avertourism.com/'
              header='Aver Tourism'
              description='A sample tourism site featuring an image carousel, on-scroll image animations and styled using Bootstrap.'
              imagePath={require('images/aver-tourism.png')}
            />

            <ImageCard
              href='http://www.searchifyprofiles.com/'
              header='Searchify Profiles'
              description='An experimental site that uses a fixed background image with angled tiles to fit the content. The header also features a complex, customized CSS animation.'
              imagePath={require('images/searchify-profiles.png')}
            />
          </div>
        </section>

        <section className="our-expertise">
          <div className="grid-container">
            <div className="subsection header">
              <h3>My Expertise</h3>
            </div>

            <ImageCard
              href='https://reactjs.org/'
              header='React'
              description=''
              imagePath={require('images/react-logo-1000x1000.png')}
            />

            <ImageCard
              href='https://webpack.js.org/'
              header='Webpack'
              description=''
              imagePath={require('images/webpack-logo-925x925.png')}
            />

            <ImageCard
              href='https://nodejs.org/en/'
              header='Node.js'
              description=''
              imagePath={require('images/node-js-logo-1000x1000.png')}
            />

            <ImageCard
              href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
              header='HTML5 + CSS3'
              description=''
              imagePath={require('images/html5+css3-900x900.png')}
            />

            <ImageCard
              href='https://www.mysql.com/'
              header='MySQL'
              description=''
              imagePath={require('images/mysql-logo-1024x1024.png')}
            />

            <ImageCard
              href='https://www.mongodb.com/'
              header='MongoDB'
              description=''
              imagePath={require('images/mongodb-logo-375x375.png')}
            />


            <ImageCard
              href='https://github.com/'
              header='Github'
              description=''
              imagePath={require('images/github-icon-512x512-2.png')}
            />

            <ImageCard
              href='https://circleci.com/'
              header='CircleCI'
              description=''
              imagePath={require('images/circle-ci-logo-400x400.png')}
            />

            <ImageCard
              href='http://www.photoshop.com/'
              header='Photoshop'
              description=''
              imagePath={require('images/photoshop-logo-512x512.png')}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default windowDimensions()(Home)
