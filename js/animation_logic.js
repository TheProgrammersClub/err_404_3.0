


// reference to scroll reveal
var sr = ScrollReveal();


jQuery(document).ready(function($) {
		

	scale_up_option = {
		duration: 800,
		distance: '0px',
		scale: 0.8,
	};

	slide_up_option = {
		duration: 500,
		distance: '20px',
		scale: 1,
	}

	slide_in_right_option = {
		duration: 800,
		// reset: true,
		origin: 'right',
		distance: '100px',
		scale: 1,
		opacity: 1,
		viewFactor: 0.5,
	};

	sr.reveal(".trophy-badge", scale_up_option);
	sr.reveal(".domain_icon", scale_up_option);

	sr.reveal(".side-gfx", slide_in_right_option);

	// sr.reveal(".light-heading", slide_up_option);
	// sr.reveal(".dark-heading", slide_up_option);

});