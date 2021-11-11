$(document).ready(function (){
	$('.slider_my_blog').slick({
		arrows:true,
		slidesToShow: 3,
		slidesToScroll:1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}]
	});
});


function my_blog_next_img(){
	$(document).ready(function(){
		$('.slider_my_blog .slick-next').click();
	});
}
function my_blog_previous_img(){
	$(document).ready(function(){
		$('.slider_my_blog .slick-prev').click();
	});
}


