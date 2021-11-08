$(document).ready(function (){
	$('.slider_my_works').slick({
		arrows:true,
		slidesToShow: 4,
		slidesToScroll: 2,
	});
});


function next_img(){
	$(document).ready(function(){
		$('.slider_my_works .slick-next').click();
	});
}
function previous_img(){
	$(document).ready(function(){
		$('.slider_my_works .slick-prev').click();
	});
}


