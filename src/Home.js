import React from 'react';
import './Home.scss';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork'
import MyExperience from './components/MyExperience'
import MyExpertise from './components/MyExpertise'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="Home">
      <Header/>
      <AboutMe/>
      <MyWork/>
      <MyExperience/>
      <MyExpertise/>
      <Footer/>
    </div>
  );
}

export default Home;
