// goToByScroll.js

ACC.product = {
  bindGoToByScroll: function() {

    var element       = $(".button");
    var bodyHtml      = $('html, body');
    var elementOffset = $("#div").offset().top;
    var speedScroll   = 700;

    element.unbind('click').click(function(e) {
      e.preventDefault();
      if($(window).width() <= 480) {
        bodyHtml.animate({
          scrollTop: elementOffset
        }, speedScroll);
      } else {
        bodyHtml.animate({
          scrollTop: elementOffset - 150
        }, speedScroll);
      }
    });

  }
};

$(document).ready(function() {
  with(ACC.product) {
		bindGoToByScroll();
  }
});

$(window).resize(function() {
	with(ACC.product) {
			bindGoToByScroll();
	}
});
