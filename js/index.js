$(document).ready(function() {

// Background Generator
function addTriangleTo(target) {
    var dimensions = target.getClientRects()[0];
    var pattern = Trianglify({
       width: dimensions.width, 
       height: dimensions.height,
		 cell_size: 70,
		 variance: 0.5,		 
    });
    target.style['background-image'] = 'url(' + pattern.png() + ')';
}

addTriangleTo(document.getElementById('triangles-1'));

// Change Navbar color when scrolling
$(document).scroll(function() {
		if ($(document).scrollTop() > 100) {
			$("nav").addClass("navbar-scrolled");
		} else {
			$("nav").removeClass("navbar-scrolled");
		}
	});
});

// Closes the Navbar on click
  $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
  });