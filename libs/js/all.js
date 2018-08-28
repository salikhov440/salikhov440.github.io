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
		$('.overlay').fadeIn('slow', function(){
			$('.VRF').css('display' , 'block')
			.animate({opacity: '1'},200);
		});
		$('.VRF').addClass('arcticmodal-container');
		$('.VRF').addClass('arcticmodal-container_i2');
		$('.overlay').css('display' , 'block')
		.fadeIn('slow');
	});
	$('.overlay , .arcticmodal-close').on('click' , function(){
		$('.VRF').animate({opacity: '0'}, 200, function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut('slow');
		});
	});
	// End modal_VRF

	// Start modal_chanel
	$('.modal_chanel').on('click', function(){
		$('.overlay').fadeIn('slow', function(){
			$('.chanel').css('display' , 'block')
			.animate({opacity: '1'},200);
		});
		$('.chanel').addClass('arcticmodal-container');
		$('.chanel').addClass('arcticmodal-container_i2');
		$('.overlay').css('display' , 'block')
		.fadeIn('slow');
	});
	$('.overlay , .arcticmodal-close').on('click' , function(){
		$('.chanel').animate({opacity: '0'}, 200, function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut('slow');
		});
	});


	// End modal_chanel

	// Start modal_kaset
	$('.modal_kaset').on('click', function(){
		$('.overlay').fadeIn('slow', function(){
			$('.kasetniy').css('display' , 'block')
			.animate({opacity: '1'},200);
		});
		$('.kasetniy').addClass('arcticmodal-container');
		$('.kasetniy').addClass('arcticmodal-container_i2');
		$('.overlay').css('display' , 'block')
		.fadeIn('slow');
	});
	$('.overlay , .arcticmodal-close').on('click' , function(){
		$('.kasetniy').animate({opacity: '0'}, 200, function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut('slow');
		});
	});


	// Start modal_chiller
	$('.modal_chiller').on('click', function(){
		$('.overlay').fadeIn('slow', function(){
			$('.chiller').css('display' , 'block')
			.animate({opacity: '1'},200);
		});
		$('.chiller').addClass('arcticmodal-container');
		$('.chiller').addClass('arcticmodal-container_i2');
		$('.overlay').css('display' , 'block')
		.fadeIn('slow');
	});
	$('.overlay , .arcticmodal-close').on('click' , function(){
		$('.chiller').animate({opacity: '0'}, 200, function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut('slow');
		});

	});
	// End modal_chiller
});