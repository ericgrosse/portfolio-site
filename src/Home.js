import React, { Component } from 'react';
import './Home.scss';
import Header from 'components/Header'
import AboutMe from 'components/AboutMe'
import MyWork from 'components/MyWork'
import MyExperience from 'components/MyExperience'
import MyExpertise from 'components/MyExpertise'
import Footer from 'components/Footer'
import onScroll from 'helpers/onScroll';
import animate from 'helpers/animate';
import 'animate.css/animate.min.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    onScroll()
    animate()
  }

  render() {
    return (
      <div className="Home">
        <Header/>
        <AboutMe/>
        <MyWork/>
        <MyExperience/>
        <MyExpertise/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
