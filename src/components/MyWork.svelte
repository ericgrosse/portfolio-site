<script>
  import ImageCard from './Common/ImageCard.svelte';
</script>

<div className="MyWork" id="work">
  <div className="grid-container">
    <h1>My Work</h1>
    <ImageCard
      href='https://medium.com/@webdevsanity'
      header='Web Dev Sanity'
      description='My personal programming blog, with an emphasis on making web development more accessible to new developers.'
      imagePath={require('../images/web-dev-sanity.png')}
      imageClass={'effect-left'}
    />

    <ImageCard
      href='https://ketogenicookbook.netlify.com/'
      header='Ketogenic Cookbook'
      description='A sample website for making recipes that adhere to a ketogenic diet.'
      imagePath={require('../images/ketogenic-cookbook-1.png')}
      imageClass={'effect-left'}
    />

    <ImageCard
      href='https://grapher.netlify.com/'
      header='Grapher'
      description='An interactive graphing tool built using React and Recharts. Data can be entered in a spreadsheet-like interface, with each cell value change automatically updating the generated chart.'
      imagePath={require('../images/grapher-cropped.PNG')}
      imageClass={'effect-right'}
    />

    <ImageCard
      href='https://weather-forecaster.netlify.com/'
      header='Weather Forecaster'
      description='Given a location or set of locations, determine the time and weather. Makes use of the google geocode and timezone API, as well as the openweathermap API.'
      imagePath={require('../images/weather-forecaster-cropped.PNG')}
      imageClass={'effect-right'}
    />

    <ImageCard
      href='https://github-sample-api.netlify.com/#!/home'
      header='Github Sample API'
      description={'An Angular application that uses Github\'s APIs to conveniently search through Github repositories, as well as checking for contributors, languages, stargazers, subscribers, etc.'}
      imagePath={require('../images/github-sample-api.png')}
      imageClass={'effect-left'}
    />

    <ImageCard
      href='https://vue-tic-tac-toe.netlify.com/'
      header='Vue Tic-Tac-Toe'
      description={'My first Vue.js application, a straightforward game of tic-tac-toe. My next Vue.js hobbyist projects will be checkers, then chess :)'}
      imagePath={require('../images/vue-tic-tac-toe-cropped.PNG')}
      imageClass={'effect-left'}
    />
  </div>
</div>

<style lang="scss">
  .MyWork {
    padding-bottom: 16px;
    h1 {
      grid-column: 1 / span 2;
        border-top: 1px solid #0000002b;
        border-bottom: 1px solid #0000002b;
        padding: 12px 0;
        margin-bottom: 5rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 0;
      .grid-container {
        display:block;
      }

      h1 {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
</style>
