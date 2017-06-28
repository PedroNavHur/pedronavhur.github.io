(function($) {
  $(function() {

    // Side Navigation bar
    // $('.button-collapse').sideNav();
    $('.button-collapse').sideNav({
      closeOnClick: true
    });

    // The Parallax
    $('.parallax').parallax();

    // Smooth Scroll - scrollSpy
    var scrollOptions = [{
      scrollOffset: 56
    }];
    $('.scrollspy').scrollSpy({
      scrollOffset: 56
    });

    $('#contactform').submit(function(e) {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/navhpedro@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
