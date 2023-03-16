<script>
  import Header from '../components/Header.svelte';
  import AboutMe from '../components/AboutMe.svelte';
  import MyWork from '../components/MyWork.svelte';
  import MyExperience from '../components/MyExperience.svelte';
  import MyExpertise from '../components/MyExpertise.svelte';
  import Footer from '../components/Footer.svelte';
  import 'fonts/Pieta/Webfonts/MyFontsWebfontsKit.css';
  //import onScroll from 'helpers/onScroll';
  //import animate from 'helpers/animate';
  //import 'animate.css/animate.min.css'
</script>
 
 <div class="Home">
  <Header/>
  <AboutMe/>
  <MyWork/>
  <MyExperience/>
  <MyExpertise/>
  <Footer/>
 </div>

<!-- 
  componentDidMount() {
    onScroll()
    animate()
  }
}
 -->
