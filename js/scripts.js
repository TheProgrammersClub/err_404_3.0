
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
			"Amity University Mumbai - Mumbai Pune Express Way": null,
			"Dr. D. Y. Patil Dental College & Hospital - Nerul": null,
			"Mahatma Gandhi Mission Dental College - Kalamboli": null,
			"Nair Dental College - Byculla, Mumbai Central": null,
			"Government Dental College and Hospital - Fort area": null,
			"St. George Dental College & Hospital, Chhatrapati Shivaji Terminus": null,
			"Terna Dental College and Hospital - Nerul, Navi Mumbai": null,
			"Yerala Medical Trust Dental College & Hospital - Kharghar": null,
			"Bharati Vidyapeeth College of Dental, Navi Mumbai": null,
			"Alamuri ratnamala institute of engineering and technology, Sapgaon,Thane": null,
			"Atharva College Of Engineering, Malad (West)": null,
			"Bharati Vidyapeeth College of Engineering, Belapur, Navi Mumbai": null,
			"Datta Meghe College of Engineering, Airoli, Navi Mumbai": null,
			"Dilkap Research Institute of Engineering and Management Studies": null,
			"Don Bosco Institute of Technology, Kurla (West)": null,
			"Dwarkadas J. Sanghvi College of Engineering, Vile Parle (West)": null,
			"Fr. Conceicao Rodrigues College of Engineering, Bandra": null,
			"Fr. Conceicao Rodrigues Institute of Technology, Vashi": null,
			"Hope Foundation's Finolex Academy of Management & Technology (FAMT), Ratnagiri": null,
			"Gharda Foundation's Gharda Institute of Technology (GIT), Lavel, Khed, Ratnagiri": null,
			"Institute of Chemical Technology (formerly UDCT), Matunga (Autonomous)": null,
			"Indian Institute of Technology Bombay, Powai": null,
			"KC College of Engineering, Thane (East)": null,
			"K.J. Somaiya College of Engineering, Vidyavihar": null,
			"K. J. Somaiya Institute of Engineering and Information Technology, Sion": null,
			"Konkan Gyanpeeth College of Engineering, Karjat": null,
			"Lokmanya Tilak College of Engineering - Kopar Khairane, Navi Mumbai": null,
			"M. H. Saboo Siddik College of Engineering - Byculla": null,
			"Mahatma Gandhi Mission's College of Engineering and Technology, Kamothe": null,
			"Mandar Education Society's Rajaram Shinde College of Engineering, Pedhambe": null,
			"Metropolitan Institute of Technology & Management (MITM) Sindhudurg(Konkan Region)": null,
			"NMIMS Mukesh Patel School of Technology Management and Engineering (NMU), Juhu": null,
			"Padmabhushan Vasantdada Patil Pratishthan's College of Engineering, Sion": null,
			"Pillai College of Engineering, Panvel": null,
			"Rajiv Gandhi Institute of Technology, Mumbai": null,
			"Ramrao Adik Institute of Technology, Nerul": null,
			"Rajendra Mane College of Engineering & Technology (RMCET) Ambav,Devrukh": null,
			"Rizvi College of Engineering, Bandra (West)": null,
			"Saraswati College of Engineering, Kharghar, Navi Mumbai": null,
			"Sardar Patel College of Engineering - Andheri (West)": null,
			"Sardar Patel Institute of Technology - Andheri (West)": null,
			"Shah and Anchor Kutchhi Engineering College, Chembur": null,
			"Shivajirao S. Jondhale College of Engineering, Dombivali": null,
			"Shee L. R. Tiwari College of Engineering(SLRTCE), Mira Road": null,
			"Sindhudurg Shikshan Prasarak Mandal's College of Engineering (SSPMCOE), Kankavli(Konkan Region)": null,
			"SIES Graduate School of Technology, Nerul": null,
			"Smt. Indira Gandhi College of Engineering, Koparkhairane, Navi Mumbai": null,
			"St. Francis Institute of Technology, Borivali": null,
			"St. John College of Engineering and Technology, Palghar": null,
			"Terna Engineering College, Nerul, Navi Mumbai": null,
			"Thakur College of Engineering and Technology, Kandivali": null,
			"Thadomal Shahani Engineering College Mumbai, Bandra (W)": null,
			"Vidyalankar Institute of Technology, Wadala (E),Mumbai": null,
			"Vidyavardhini College of Engineering and Technology,Vasai Road (W)": null,
			"Viva Institute of Technology, Virar (E)": null,
			"Usha Mittal Institute of Technology, Santacruz (W), Mumbai": null,
			"Veermata Jijabai Technological Institute, Matunga, Mumbai": null,
			"Vivekanand Education Society's Institute of Technology Mumbai, Chembur(E)": null,
			"Watumull Institute of Electronics Engineering and Computer Technology Worli": null,
			"Xavier Institute of Engineering Mahim (West)": null,
			"Yadavrao Tasgaonkar Institute of Engineering & Technology (YTIET), Bhivpuri": null
		},
		minLength: 0,
	});

	// logging dino-say
	//print_dino_say();

	// setInterval(countDownTimer, 500)
	
});


function countDownTimer(){

	var event_date = new Date(2019, 02, 16, 14, 00, 00);
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


$(document).ready(function(){
	$('.winner-slide').slick({
		autoplay:true,
		autoplaySpeed:6000,
		arrows:true,
		prevArrow:'<button type="button" class="slick-prev" style="color:#000000;"></button>',
		nextArrow:'<button type="button" class="slick-next" style="color:#000000;"></button>',
		dots: true,
		slidesToShow:1,
		slidesToScroll:1
	});
  });