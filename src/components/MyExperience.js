import React, { Component } from 'react'
import windowDimensions from 'react-window-dimensions'
import './MyExperience.scss'
import ImageCard from 'components/Common/ImageCard'

class MyExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const {state, props} = this

    return (
      <div className="MyExperience" id="experience">
        <div className="grid-container">
          <h1>Companies I've Worked For</h1>

          <ImageCard
            href='http://covera.ai/'
            header='Covera'
            description={'Covera is a digital insurance brokerage designed to help users find the best and most cost effective insurance policies on a yearly basis.'}
            imagePath={require('images/covera-1.jpg')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.toptal.com/'
            header='Toptal'
            description={'Toptal is an exclusive network that connects freelance software developers, designers and project managers to prospective clients.'}
            imagePath={require('images/toptal-1.png')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.reol.com/'
            header='REOL Services'
            description='REOL Services is a consultancy that provices digital strategy and marketing solutions for the real estate industry.'
            imagePath={require('images/reol-services-1.png')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.nuance.com/index.html'
            header='Nuance Communications'
            description='Nuance Communications is a multinational computer software company that specializes in voice recognition software.'
            imagePath={require('images/nuance-1.jpg')}
            imageClass=''
          />

          <ImageCard
            href='https://www.navori.com/'
            header='Navori Labs'
            description={'Navori Labs is a digital signage software company whose software is used in digital displays across over 100 countries.'}
            imagePath={require('images/navori-labs-1.jpg')}
            imageClass=''
          />
        </div>
      </div>
    )
  }
}

export default windowDimensions()(MyExperience)
