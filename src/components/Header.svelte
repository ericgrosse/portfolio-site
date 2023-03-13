<div class="Header">
  <div class="grid-container">
    <a href="#home" class="home">Eric Grossé</a>
    <div/>
    <a href="#work">Work</a>
    <a href="#experience">Experience</a>
    <a href="#expertise">Expertise</a>
  </div>
</div>

<!-- if (props.width < 768) {
   return (
     <div class="MobileHeader">
       <i class="fa fa-bars" onClick={this.toggleHeader}/>

       <div class={'header-content' + (state.showHeader ? ' expanded': '')}>/         <a onClick={this.toggleHeader} href="#home">Home</a>
         <a onClick={this.toggleHeader} href="#work">Work</a>
         <a onClick={this.toggleHeader} href="#experience">Experience</a>
         <a onClick={this.toggleHeader} href="#expertise">Expertise</a>
       </div>
     </div>
   )
 } -->

<style lang="scss">
  .Header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    background: black;
    padding: 0 16px;
  }

  &.scroll-up, &.scroll-down {
    transition: transform 500ms;
  }

  &.scroll-up {
    transform: translate3D(0, 0, 0);
  }

  &.scroll-down {
    transform: translate3D(0, -100%, 0);
  }

  .grid-container {
    grid-template-columns: 1fr 45% repeat(3, 1fr);
  }

  a {
    color: white;
    font-weight: 500;
    font-family: 'Pieta-Bold';
    letter-spacing: 0.7px;
    padding: 24px 0;
    text-align: center;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  a::before, a::after {
    display: inline-block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
  }

  a::before {
    margin-right: 10px;
    content: '[';
    transform: translateX(20px);
  }

  a::after {
    margin-left: 10px;
    content: ']';
    transform: translateX(-20px);
  }

  a:hover::before, a:hover::after {
    opacity: 1;
    transform: translateX(0px);
  }

  /*  Custom breakpoint  */
  @media (max-width: 1100px) {
    .grid-container {
      grid-template-columns: 1fr 35% repeat(3, 1fr);
    }
  }

  @media (max-width: 920px) {
    .grid-container {
      grid-template-columns: 1fr 20% repeat(3, 1fr);
    }
  }

  .MobileHeader {
    text-align: right;
    background: #272727;
    color: white;
    font-family: 'helvetica';
    font-weight: bold;
    letter-spacing: 0.7px;
    min-height: 34px;
    align-items: center; /*  vertically centers the header text */
    overflow-y: hidden;

    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    &.scroll-up, &.scroll-down {
      transition: transform 500ms;
    }

    &.scroll-up {
      transform: translate3D(0, 0, 0);
    }

    &.scroll-down {
      transform: translate3D(0, -100%, 0);
    }
  }  

  .MobileHeader .header-content {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    height: 0;
    transition: height 450ms ease-in-out;

    &.expanded {
      height: 270px;
      padding-bottom: 12px;
    }
  }

  .MobileHeader .fa {
    font-size: 30px;
    padding: 12px 24px;
  }

  .MobileHeader .home-button {
    margin-top: 12px;
  }

  .MobileHeader a {
    text-decoration: none;
    color: inherit;
    padding: 24px;
    transition: background 200ms;
    height: 20px;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      /* background: $green; */
      text-decoration: none;
    }
  }
</style>
