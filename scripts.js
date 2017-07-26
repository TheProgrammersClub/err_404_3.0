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

	// logging dino-say
	print_dino_say();
	
	
})

function print_dino_say(){
	// printing a dino-say kinda dialogue to the console (if you modify it, please review the placements of slashes before pushing)
	dinoSay = "\n\
	    __________________________________________________________________________\n\
	   /																		   \\ \n\
	  /   Hello there random stranger!                                              \\ \n\
	 /    I think you are interested in this website's guts.                         \\ \n\
	/     I'm the guardian of it's source code. RAAWR!                                \\ \n\
	\\     Luckily, I believe in sharing with the community.                           /\n\
	 \\    So here's the code : https://github.com/TheProgrammersClub/err_404         /\n\
	  \\   Make wise use of it.                                                      /\n\
	   \\ 																		   /\n\
	    ---------------------------------------------------------------------------\n\
				███████████       /\n\
			  ████▄███████████   /\n\
			  ████████████████  /\n\
			  ████████████████ /\n\
			  ████████\n\
			  ████████████\n\
█ 			  ██████\n\
█ 			 ███████\n\
███ 	   ████████████\n\
█████   ████████████  █\n\
 ███████████████████\n\
  ██████████████████\n\
	 █████████████\n\
	 ███████████\n\
	  ████████\n\
	  ████  ██\n\
	  ███    █\n\
	  █      █\n\
	  ███    ███"
	console.log(dinoSay);
}




function loadProgress() {

	document.getElementById('loader').style.display = "none";
	document.getElementById('main').style.display = "block";

	// enable scroll when page loaded
	document.getElementsByTagName("body")[0].style["overflow-y"] = "scroll";

	// animate the logo after loader is removed load
	main_pop_up_options = {
		duration: 800,
		distance: '20px',
		scale: 1,
	};
	sr.reveal(".main-logo", main_pop_up_options);
}