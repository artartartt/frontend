$(document).ready(function (){
	$('.slider').slick({
		arrows:false,
		dots:true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 3
				}
			},
		]
	});
});



