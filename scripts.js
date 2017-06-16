document.addEventListener("DOMContentLoaded", function () {
	// initializing side nav
	$(".button-collapse").sideNav();

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


	// animations

	var side_gfx = document.querySelectorAll(".side-gfx");

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function handleScroll(){
		var badge = document.querySelector(".trophy-badge");
		if (isElementInViewport(badge)){
			badge.classList.add('badge-visible');
		}
		for (var i = 0; i < side_gfx.length; i++) {
			if (isElementInViewport(side_gfx[i])) {
				side_gfx[i].classList.add("side-gfx-visible");
			}
		}
	}
	

	// event listeners
	window.addEventListener("scroll", handleScroll);
	
})

  // Initialize Firebase
var config = {
	apiKey: "AIzaSyD1hqg93PixOlMrWQbEltSl4o8aP2K3ris",
	authDomain: "err-404-9789c.firebaseapp.com",
	databaseURL: "https://err-404-9789c.firebaseio.com",
	projectId: "err-404-9789c",
	storageBucket: "",
	messagingSenderId: "847914300774"
};

firebase.initializeApp(config);


function submitData(){
	var submit = document.getElementById('submit');
	var team_name = document.getElementById('team_name');
	var name = document.getElementById('name');
	var contact = document.getElementById('contact');
	var college = document.getElementById('college');

	var s_t_name = team_name.value;
	var s_name = name.value;
	var s_contact = contact.value;
	var s_college = college.value;

	var database = firebase.database();

	var date = new Date();

	if (s_t_name != "" && s_name != "" && s_contact != "" && s_college != "") {

		database.ref('registration/' + date.getTime()).set({
			team_name: s_t_name,
			name: s_name,
			contact: s_contact,
			college: s_college
		});

		Materialize.toast('Registered Succeessfully', 4000);

		// location.reload();

	}else{
		console.log("empty");
		Materialize.toast('Please enter the details', 2000);
	}
}


function loadProgress() {		

	setTimeout(function(){ 
		document.getElementById('loader').style.display = "none";
		document.getElementById('main').style.display = "block";	
	 }, 1500);
}