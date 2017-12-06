$(document).ready(function() {
	let slide = $(".swipe-slider").slick({
		prevArrow: '<i class="fa fa-times" aria-hidden="true"></i>',
		nextArrow: '<i class="fa fa-check" aria-hidden="true"></i>'
	});

	$('.swipe-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		let difference = nextSlide - currentSlide;

		if (difference == 1 || difference <= -2) {
			onTick(currentSlide);
		}
		
	});
});

function onTick(currentSlide) {
	let slideUser = {
		0: "Fran3",
		1: "Kesha90",
		2: "Lauren87"
	};

	let userMatches = getUserMatches(getUsername());
	let currentCandidate = slideUser[currentSlide];

	if (userMatches.indexOf(currentCandidate) >= 0) {
		window.location.href = "match.html?username=" + getUsername() + "&match=" + slideUser[currentSlide];
	}
}
