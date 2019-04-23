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
    const desktop = props.width >= 768
    const readable = props.width >= 1200

    return (
      <div className="MyExperience" id="experience">
        <div className="grid-container">
          <h1>Companies I've Worked For</h1>

          <ImageCard
            href='http://covera.ai/'
            header={!readable && 'Covera'}
            description={readable && 'Covera is a digital insurance brokerage designed to help users find the best and most cost effective insurance policies on a yearly basis.'}
            imagePath={desktop ? require('images/covera-2-cropped.jpg') : require('images/covera-mobile.jpg')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.toptal.com/'
            header={!readable && 'Toptal'}
            description={readable && 'Toptal is an agency that connects freelance software developers, designers and project managers to prospective clients.'}
            imagePath={desktop ? require('images/toptal-2-cropped.png') : require('images/toptal-mobile.png')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.reol.com/'
            header={!readable && 'REOL Services'}
            description={readable && 'REOL Services is a consultancy that provices digital strategy and marketing solutions for the real estate industry.'}
            imagePath={desktop ? require('images/reol-services-2-cropped.png') : require('images/reol-services-mobile.png')}
            imageClass='effect-left'
          />

          <ImageCard
            href='https://www.nuance.com/index.html'
            header={!readable && 'Nuance'}
            description={readable && 'Nuance Communications is a multinational computer software company that specializes in voice recognition software.'}
            imagePath={desktop ? require('images/nuance-2-cropped.jpg') : require('images/nuance-mobile.jpg')}
            imageClass={desktop ? 'effect-right' : 'effect-left'}
          />

          <ImageCard
            href='https://www.navori.com/'
            header={!readable && 'Navori Labs'}
            description={readable && 'Navori Labs is a digital signage software company whose software is used in digital displays across over 100 countries.'}
            imagePath={desktop ? require('images/navori-labs-2-cropped.jpg') : require('images/navori-labs-mobile.jpg')}
            imageClass={desktop ? 'effect-right' : 'effect-left'}
          />
        </div>
      </div>
    )
  }
}

export default windowDimensions()(MyExperience)