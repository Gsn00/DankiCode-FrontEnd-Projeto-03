$(function() {

	var amount = $('.author').length;
	var delay = 10000;
	var current = 0;
	var interval;

	initSlider();
	function initSlider()
	{	
		$('.scroll-wrapper').css('width', (100 * amount)+'%').css('display', 'flex');
		$('.author').css('width', (100 / amount)+'%');

		var bullets = $('.slider-bullets');
		for (var i=0;i<amount;i++) {
			bullets.append('<span></span>');
			if (i == 0) {
				bullets.children(i).addClass('current');
			}
		}
	}

	slide();
	function slide() {
		interval = setInterval(function() {
			current++;
			if (current == amount) current = 0;
			goToSlider(current);
		}, delay);
	}

	function goToSlider(index) {
		var offsetX = $('.author').eq(index).offset().left - $('.scroll-wrapper').offset().left;

		$('.scroll').stop().animate({'scrollLeft':offsetX}, 1000);
		$('.slider-bullets span').removeClass('current');
		$('.slider-bullets span').eq(current).addClass('current');
	}

	fixResize();
	function fixResize() {
		$(window).resize(function() {
			goToSlider(current);
		});
	}


	clickFunction();
	function clickFunction() {
		$('body').on('click', '.slider-bullets span', function() {
			clearInterval(interval);
			slide();

			current = $(this).index();
			goToSlider(current);
		});
	}

});