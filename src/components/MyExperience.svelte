<script>
  import ImageCard from '../components/Common/ImageCard.svelte';
</script>

<div class="MyExperience" id="experience">
  <div class="grid-container">
    <h1>Companies I've Worked For</h1>

    <ImageCard
      href='http://covera.ai/'
      header={!readable && 'Covera'}
      description={readable && 'Covera is a digital insurance brokerage designed to help users find the best and most cost effective insurance policies on a yearly basis.'}
      imagePath={desktop ? require('../images/covera-2-cropped.jpg') : require('../images/covera-mobile.jpg')}
      imageClass='effect-left'
    />

    <ImageCard
      href='https://www.toptal.com/'
      header={!readable && 'Toptal'}
      description={readable && 'Toptal is an agency that connects freelance software developers, designers and project managers to prospective clients.'}
      imagePath={desktop ? require('../images/toptal-2-cropped.png') : require('../images/toptal-mobile.png')}
      imageClass='effect-left'
    />

    <ImageCard
      href='https://www.reol.com/'
      header={!readable && 'REOL Services'}
      description={readable && 'REOL Services is a consultancy that provices digital strategy and marketing solutions for the real estate industry.'}
      imagePath={desktop ? require('../images/reol-services-2-cropped.png') : require('../images/reol-services-mobile.png')}
      imageClass='effect-left'
    />

    <ImageCard
      href='https://www.nuance.com/index.html'
      header={!readable && 'Nuance'}
      description={readable && 'Nuance Communications is a multinational computer software company that specializes in voice recognition software.'}
      imagePath={desktop ? require('../images/nuance-2-cropped.jpg') : require('../images/nuance-mobile.jpg')}
      imageClass={desktop ? 'effect-right' : 'effect-left'}
    />

    <ImageCard
      href='https://www.navori.com/'
      header={!readable && 'Navori Labs'}
      description={readable && 'Navori Labs is a digital signage software company whose software is used in digital displays across over 100 countries.'}
      imagePath={desktop ? require('../images/navori-labs-2-cropped.jpg') : require('../images/navori-labs-mobile.jpg')}
      imageClass={desktop ? 'effect-right' : 'effect-left'}
    />
  </div>
</div>

<style lang="scss">
  .MyExperience {
    padding-top: 2rem;
    
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }

    h1 {
      grid-column: 1 / span 3;
      border-top: 1px solid #0000002b;
      border-bottom: 1px solid #0000002b;
      padding: 12px 0;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 767px) {
      padding-top: 0;

      .grid-container {
        display: block;
      }

      h1 {
        margin-top: 1rem;
        margin-bottom: 2rem;
      }

      img {
        padding: 0;
        max-width: 60%;
      }
    }
  }
</style>