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

	$('select').material_select();
	
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
			"M.H. Saboo Siddik College of Engineering": null,
			"D.J Sanghvi": null,
			"Don Bosco Institute": null,
			"V.J.T.I": null,
		},
		minLength: 0,
	});

	// logging dino-say
	print_dino_say();

	setInterval(countDownTimer, 1000);
	
	
})

function countDownTimer(){

	var event_date = new Date(2017, 07, 19, 9, 00, 00);
	var curr_date = new Date();
	var t1 = event_date.getTime();
	var t2 = curr_date.getTime();
	var day = Math.floor((t1-t2)/(24*60*60*1000));
	t1 = t1 - day*24*60*60*1000;
	var hour = Math.floor((t1-t2)/(60*60*1000));
	t1 = t1 - hour*60*60*1000;
	var min = Math.floor((t1-t2)/(60*1000));
	t1 = t1 - min*60*1000;
	var sec = Math.floor((t1-t2)/(1000));

	document.getElementById('day').innerHTML = day;
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('min').innerHTML = min;
	document.getElementById('sec').innerHTML = sec;

	// console.log(event_date + "\n" + curr_date + "\n" + diff);
	// console.log(day + "\n" + hour + "\n" + min + "\n" + sec);
}

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