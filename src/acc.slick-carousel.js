ACC.slickCarousel = {

	bindAll: function() {

		ACC.slickCarousel.productPageCarousel();
		ACC.slickCarousel.productCatPageCarouselVertical();

	},

	productPageCarousel: function() {

		$('.slick-component').slick({
      arrows: true,
      centerMode: false,
      centerPadding: '60px',
      slidesToShow: 4,
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

		var slides = $('.slick-track > .slick-slide');

		if(slides.length > 4) {
			$('.slick-component').addClass('arrows');
		}

	},

	productCatPageCarouselVertical: function() {

		var responsive_viewport = $(window).width();

		/* if is above 992px */
		if (responsive_viewport > 992) {

			$('#resultsList').on('mouseenter', '.productListItem', function() {

				$(this).find('.product-associated-carousel-vertical').show();

				$(this).find('.slick-component-vertical').not('.slick-initialized').slick({
					arrows: true,
					centerMode: false,
					centerPadding: '60px',
					slidesToShow: 5,
					infinite: true,
					vertical: true,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								arrows: true,
								centerMode: true,
								centerPadding: '40px',
								slidesToShow: 4
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows: false,
								centerMode: true,
								centerPadding: '40px',
								slidesToShow: 1
							}
						}
					]
				});

			});

			$('#resultsList').on('mouseleave', '.productListItem', function() {
				// console.log('ok');
				$(this).find('.slick-component-vertical').slick('unslick');
				$(this).find('.product-associated-carousel-vertical').hide();
			});

		} /* end smallest screen */

	},

	// productCatPageCarouselVertical: function() {
	//
	// 	var $carouselSlick = $('.slick-component-vertical');
	//
	// 	$('#resultsList').on('hover', '.productListItem', function() {
	//
	// 		if(!$carouselSlick.hasClass('slick-initialized')) {
	// 			$('.product-associated-carousel-vertical').show();
	// 			$(this).find($carouselSlick).slick({
	// 				arrows: true,
	// 				centerMode: false,
	// 				centerPadding: '60px',
	// 				slidesToShow: 5,
	// 				infinite: true,
	// 				vertical: true,
	// 				responsive: [
	// 					{
	// 						breakpoint: 768,
	// 						settings: {
	// 							arrows: true,
	// 							centerMode: true,
	// 							centerPadding: '40px',
	// 							slidesToShow: 4
	// 						}
	// 					},
	// 					{
	// 						breakpoint: 480,
	// 						settings: {
	// 							arrows: false,
	// 							centerMode: true,
	// 							centerPadding: '40px',
	// 							slidesToShow: 1
	// 						}
	// 					}
	// 				]
	// 			});
	// 		} else {
	// 			if($carouselSlick.hasClass('slick-initialized')) {
	// 				console.log('destroy');
	// 				$(this).find($carouselSlick).slick('unslick');
	// 				$('.product-associated-carousel-vertical').show();
	// 			}
	// 		}
	//
	// 	});
	//
	// 	$('#resultsList').on('mouseleave', '.productListItem', function() {
	// 		console.log('ok');
	// 		$(this).find('.slick-component-vertical').slick('unslick');
	// 		$(this).find('.product-associated-carousel-vertical').hide();
	// 	});
	//
	// }

};

$(document).ready(function() {
  ACC.slickCarousel.bindAll();
});

$(window).resize(function() {
	ACC.slickCarousel.productCatPageCarouselVertical();
});
