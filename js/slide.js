
$(document).ready(function (){
	$('.percentage_html_1_hr').addClass('html_1_hr_animation');
	$('.percentage_html_2_hr').addClass('html_2_hr_animation');
	$('.percentage_html_3_hr').addClass('html_3_hr_animation');
	$('.percentage_html_4_hr').addClass('html_4_hr_animation');

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



