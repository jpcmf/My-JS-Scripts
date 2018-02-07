ACC.slickCarousel = {

	bindAll: function() {

		ACC.slickCarousel.productCatPageCarouselVertical();

	},

	productCatPageCarouselVertical: function() {

		var $carouselSlick = $('.slick-component-vertical');
		
		$('#resultsList').on('hover', '.productListItem', function() {

			if(!$carouselSlick.hasClass('slick-initialized')) {
				$('.product-associated-carousel-vertical').show();
				$(this).find($carouselSlick).slick({
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
			} else {
				if($carouselSlick.hasClass('slick-initialized')) {
					console.log('destroy');
					$(this).find($carouselSlick).slick('unslick');
					$('.product-associated-carousel-vertical').show();
				}
			}

		});

		$('#resultsList').on('mouseleave', '.productListItem', function() {
			console.log('ok');
			$(this).find('.slick-component-vertical').slick('unslick');
			$(this).find('.product-associated-carousel-vertical').hide();
		});

	}

};

$(document).ready(function() {
	ACC.slickCarousel.bindAll();
});

$(window).resize(function() {
	ACC.slickCarousel.productCatPageCarouselVertical();
});
