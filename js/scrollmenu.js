$(function() {

	$('body').on('click', 'nav a', function(e) {
		e.preventDefault();

		var target = $(this).attr('target');
		var offsetTop = $(target).offset().top;

		$('html, body').animate({'scrollTop':offsetTop});
	});

});