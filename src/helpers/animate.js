import $ from 'jquery';

function animate() {
  /* Animate image when scrolling to it */

  let $animatedIcons = $('.section-6'); // Add classnames here
  let $window = $(window);
  let lastScrollTop = 0;

  function checkIfInView() {
    let windowHeight = $window.height();
    let windowTopPosition = $window.scrollTop();
    let windowBottomPosition = windowTopPosition + windowHeight;

    /* Show the navbar if scrolling upwards */

    //if(windowTopPosition > 62) {
      if(windowTopPosition < lastScrollTop) {
        $('.Header, .MobileHeader').removeClass('scroll-down').addClass('scroll-up');
      }
      else {
        $('.Header, .MobileHeader').removeClass('scroll-up').addClass('scroll-down');
      }     
    //}
    /*else {
      $('.Header').removeClass('scoll-down').removeClass('scroll-up');
    }*/

    lastScrollTop = windowTopPosition;
  }

  $window.on('scroll', checkIfInView);

  /* Scroll to anchor text */
  let $html_body = $('html, body');

  $('a[href^=\\#]').click(function(e) { 
    //e.preventDefault();
    let dest = $(this).attr('href');
    let scrollTop = dest === '#home' ? 0 : $(dest).offset().top;
    $html_body.animate({ scrollTop: scrollTop }, 'slow');
  });
}

export default animate;