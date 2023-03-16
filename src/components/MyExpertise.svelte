<script>
  import ImageCard from '../components/Common/ImageCard';
</script>

<div class="MyExpertise" id="expertise">
  <div class="grid-container">
    <h1>My Expertise</h1>

    <ImageCard
        href='https://reactjs.org/'
        header='React'
        description=''
        imagePath={desktop ? require('../images/react-logo-scaled.png') : require('../images/react-js-logo-cropped.png')}
        imageClass={desktop ? 'effect-left' : 'effect-right'}
      />

      <ImageCard
        href='https://webpack.js.org/'
        header='Webpack'
        description=''
        imagePath={desktop ? require('../images/webpack-logo-cropped.png') : require('../images/webpack-logo-mobile.png')}
        imageClass={desktop ? 'effect-left' : 'effect-right'}
      />

      <ImageCard
        href='https://nodejs.org/en/'
        header='Node.js'
        description=''
        imagePath={desktop ? require('../images/node-js-logo-cropped.png') : require('../images/node-js-logo-mobile.png')}
        imageClass={desktop ? 'effect-left' : 'effect-right'}
      />

      <ImageCard
        href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
        header='HTML5 + CSS3'
        description=''
        imagePath={desktop ? require('../images/html5+css3-900x900.png'): require('../images/html5+css3-mobile.png')}
        imageClass={desktop ? 'effect-right' : 'effect-right'}
      />

      <ImageCard
        href='https://circleci.com/'
        header='CircleCI'
        description=''
        imagePath={desktop ? require('../images/circle-ci-logo-400x400.png'): require('../images/circle-ci-logo-mobile.png')}
        imageClass={desktop ? 'effect-right' : 'effect-right'}
      />

      <ImageCard
        href='http://www.photoshop.com/'
        header='Photoshop'
        description=''
        imagePath={desktop ? require('../images/photoshop-logo-cropped.png'): require('../images/photoshop-logo-mobile.png')}
        imageClass={desktop ? 'effect-right' : 'effect-right'}
      />
  </div>
</div>

<style lang="scss">
  .MyExpertise {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }

    h1 {
      grid-column: 1 / span 3;
      border-top: 1px solid #0000002b;
      border-bottom: 1px solid #0000002b;
      padding: 12px 0;
      margin-top: 0;
      margin-bottom: 3rem;
    }

    @media (max-width: 767px) {
      padding-top: 0;

      .grid-container {
        display: block;
      }

      h1 {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
      }

      img {
        padding: 0;
        max-width: 75%;
      }
    }
  }
</style>