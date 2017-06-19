$(document).ready( function () {
	// initializing side nav
	// $(".button-collapse").sideNav();
	$('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true
    });
    $(".drag-target").on("swipeleft", function () {
      $("#sidenav-overlay").trigger("click");
    });

	$(".scrollspy").scrollSpy({
		scrollOffset:60
	});
	
	$('.collapsible-header').click(function(){
		
		$(".rotating-span").removeClass('open');
		$(".rotating-span").removeClass('open');
		if (!($(this).hasClass("active")))
			$(".rotating-span", this).toggleClass('open');
		else
			$(".rotating-span", this).removeClass('open');

	});
	$('.modal').modal();

	// autocomplete for college names
	$('input.autocomplete').autocomplete({
		data: {
			"M.H. Saboo Siddik": null,
			"D.J Sanghvi": null,
			"Don Bosco Institute": null,
			"V.J.T.I": null,
		},
		minLength: 0,
	});
	
})




function loadProgress() {

	document.getElementById('loader').style.display = "none";
	document.getElementById('main').style.display = "block";

	// animate the logo after loader is removed load
	main_pop_up_options = {
		duration: 800,
		distance: '20px',
		scale: 1,
	};
	sr.reveal(".main-logo", main_pop_up_options);
}