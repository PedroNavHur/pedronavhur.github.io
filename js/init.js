(function($) {
  $(function() {

    //$('.button-collapse').sideNav();
    $('.button-collapse').sideNav({
      closeOnClick: true
    });

    //parallax
    $('.parallax').parallax();

    //
    var scrollOptions = [
      {scrollOffset: 56}
    ];

    $('.scrollspy').scrollSpy({scrollOffset:56});

  }); // end of document ready
})(jQuery); // end of jQuery name space
