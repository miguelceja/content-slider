$( document ).ready(function() {

	var speed = 500;			// fade speed
	var autoSwitch = false;		// auto slider options
	var autoSwitchSpeed = 4000; // auto slider speed


	// Add active class
	$('.slide').first().addClass('active');


	// Hide all other slides
	$('.slide').hide();


	// Show first slide
	$('.active').show();


	// Next button functionality
	$('#next').on('click', nextSlide);


	// Prev button functionality
	$('#prev').on('click', prevSlide);


	// Auto switch functionality
	if(autoSwitch === true) {
		setInterval(nextSlide, autoSwitchSpeed);
	}


	// Switch to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}


	// Switch to prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}


});

