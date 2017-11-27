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
          imagePath={require('images/about/eric-1-cropped.JPG')}
        />
          
        <section className="my-work">
          <div className="grid-container">
            <div className="subsection header">
              <h3>My Work</h3>
            </div>

            <ImageCard
              href='http://ketogenicookbook.com/'
              header='Ketogenic Cookbook'
              description='A sample website for making recipes that adhere to a ketogenic diet.'
              imagePath={require('images/ketogenic-cookbook-1.png')}
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
              description=''
              imagePath={require('images/feandra-real-estate.png')}
            />

            <ImageCard
              href='http://www.searchifyprofiles.com/'
              header='Searchify Profiles'
              description=''
              imagePath={require('images/searchify-profiles.png')}
            />

            <ImageCard
              href='http://www.webdevsanity.com/'
              header='Web Dev Sanity'
              description='My personal programming blog, with an emphasis on making web development more accessible to new developers.'
              imagePath={require('images/web-dev-sanity.png')}
            />

            <ImageCard
              href='http://avertourism.com/'
              header='Aver Tourism'
              description=''
              imagePath={require('images/aver-tourism.png')}
            />

            <ImageCard
              href='http://githubsampleapi.com'
              header='Github Sample API'
              description=''
              imagePath={require('images/github-sample-api.png')}
            />

            <ImageCard
              href='https://book-in-a-box.herokuapp.com/'
              header='Book In A Box'
              description=''
              imagePath={require('images/book-in-a-box.png')}
            />

            <ImageCard
              href='https://toptal-user-profile.herokuapp.com/'
              header='Toptal User Profile'
              description=''
              imagePath={require('images/toptal-user-profile.png')}
            />
            

          </div>
        </section>
      </div>
    );
  }
}

export default windowDimensions()(Home)
