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
	// Start modal_VRF
	$('.modal_VRF').on('click', function(){
	$('.VRF').arcticmodal();
	});
	// End modal_VRF

	// Start modal_chanel
	$('.modal_chanel').on('click', function(){
$('.chanel').arcticmodal();
	});


	// End modal_chanel

	// Start modal_kaset
	$('.modal_kaset').on('click', function(){
		$('.kasetniy').arcticmodal();
	});


	// Start modal_chiller
	$('.modal_chiller').on('click', function(){
		$('.chiller').arcticmodal();

	});
	// End modal_chiller
});