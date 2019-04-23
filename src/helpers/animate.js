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
        $('.section-1 .header').removeClass('scroll-down').addClass('scroll-up');
      }
      else {
        $('.section-1 .header').removeClass('scroll-up').addClass('scroll-down');
      }     
    //}
    /*else {
      $('.section-1 .header').removeClass('scoll-down').removeClass('scroll-up');
    }*/

    lastScrollTop = windowTopPosition;
  }

  $window.on('scroll', checkIfInView);

  /* Scroll to anchor text */
  let $html_body = $('html, body');

  $('a[href^=\\#]').click(function(e) { 
    e.preventDefault(); let dest = $(this).attr('href');
    $html_body.animate({ scrollTop: $(dest).offset().top }, 'slow');
  });
}

export default animate;