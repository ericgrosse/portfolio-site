<div class="AboutMe" id="home">
  <div class="grid-container">
    <!--<img src={require('../images/avatar.jpg')}/>-->

    <div class="info">
      <p>Hi, I'm Eric Grossé, a frontend web developer from Montreal, Canada. I've been working in web development for over seven years, ranging from freelance work to employment from startups and large corporations.</p>
      <p>I am passionate about coding because I love using my intellect to create value (such as new social media platforms) out of mere keystrokes.</p>
      <p>If you are interested in my services, feel free to contact me by <a href="mailto:ericgrosse1@gmail.com">email</a>, or via social media.</p>

      <div class="social-media-icons">
        <a href={'https://github.com/ericgrosse'}><i class="fa fa-github" aria-hidden="true"/></a>
        <a href={'https://www.linkedin.com/in/eric-grosse/'}><i class="fa fa-linkedin-square" aria-hidden="true"/></a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .AboutMe {
    padding-top: 15.5rem;
    padding-bottom: 9.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 767px) {
    .AboutMe {
      margin-top: 0;
      padding-top: 6rem;
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  .info {
    padding: 1.5rem;
  }

  .grid-container {
    align-items: center;
    justify-items: center;
    box-shadow:5px 5px 10px -5px rgba(0,0,0,0.75);
  }
</style>
