
(function ($) {
	var $window = $(window),
		$body = $('body')

	// Play initial animations on page load.
	$window.on('load', function () {

		console.log("should open link")
		window.setTimeout(function () {
			$body.removeClass('is-preload');
			window.location.href = "https://senducusin-portfolio.herokuapp.com/";
		}, 100);
	});

})(jQuery);