$(function(f){
	let element=f('#top');
	f(window).scroll(function(){
		element['fade'+(f(this).scrollTop()>200?'In':'Out')](1000)});
	$('#top').on('click',function(){
		$('html, body').animate({scrollTop:0},3000)});
	$('.single-item').slick({
		adaptivHeight:true,
		autoplay:true,
		autoplaySpeed:3000,
		dots:true,
		fade:true,
		arrows:true,
		prevArrow:".prev",
		nextArrow:".next",
	});
	$('.multiple-slide').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptivHeight:true,
		autoplay:true,
		autoplaySpeed:1500,
		centerMode: true,
		centerPadding: '50px',
		responsive: [
		{
			breakpoint: 500,
			settings:{
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}
		]
	});
});