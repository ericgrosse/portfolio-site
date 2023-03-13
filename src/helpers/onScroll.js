import $ from 'jquery'

function onScroll() {
  let $animatedIcons = $('.ImageCard.animated'); // Add classnames here
  let $window = $(window);
  let lastScrollTop = 0;

  function checkIfInView() {
    let windowHeight = $window.height();
    let windowTopPosition = $window.scrollTop();
    let windowBottomPosition = windowTopPosition + windowHeight;

    $.each($animatedIcons, function() {
      let $element = $(this);
      let elementHeight = $element.outerHeight();
      let elementTopPosition = $element.offset().top;
      let elementBottomPosition = elementTopPosition + elementHeight;

      // check to see if this current container is within viewport
      if( /*(elementBottomPosition >= windowTopPosition) &&*/ (elementTopPosition <= windowBottomPosition) ) {
        $element.addClass('animated');

        if ($element.hasClass('effect-left')) {
          $element.addClass('fadeInLeft');
        }
        else {
          $element.addClass('fadeInRight');
        }
      }
      else {
        $element.removeClass('animated');

        if ($element.hasClass('effect-left')) {
          $element.removeClass('fadeInLeft');
        }
        else {
          $element.removeClass('fadeInRight');
        }
      }
    });

    lastScrollTop = windowTopPosition;
  }

  $window.on('scroll', checkIfInView);
}

export default onScroll
