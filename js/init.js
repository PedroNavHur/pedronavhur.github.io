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

    // contactform
    $('#someForm').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#message').val();

        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url:'https://formspree.io/navhpedro@gmail.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                comments:comments,
                _subject:'Mail from Portfolio',
            },
            dataType:"json",
            success:function() {
                console.log('success');
                // show toast of success
                Materialize.toast('Your message has been sent!', 4500)
                $('#name').val('')
                $('#email').val('')
                $('#message').val('')
            }

        });

    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
