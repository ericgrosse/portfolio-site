<footer class="Footer">
  <div class="grid-container">              
    <div class="subsection">
      <p class="copyright">© 2017 Eric Grosse. All rights reserved.</p>

      <div class="social-media-icons">
        <a href={'mailto:ericgrosse1@gmail.com'}><i class="fa fa-envelope" aria-hidden="true"/></a>
        <a href={'https://github.com/ericgrosse'}><i class="fa fa-github" aria-hidden="true"/></a>
        <a href={'https://www.linkedin.com/in/eric-grosse/'}><i class="fa fa-linkedin-square" aria-hidden="true"/></a>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .Footer {
    padding-top: 2.5rem;
    padding-bottom:1.5rem;
  }

  .Footer .grid-container {
    padding-top: 3.5rem;
    border-top: 1px solid #0000002b;
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    .Footer {
      padding-top: 0.5rem;
    }

    .Footer .grid-container {
        padding-top: 2.5rem;
      }
  }
</style>
