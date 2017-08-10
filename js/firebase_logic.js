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
var database = firebase.database();
var registered_emails = new Array();
var registered_teams = new Array();

// getting emails of registered users
database.ref("registration").on('value', (snapshot) => {
	snapshot.forEach((user) => {
		var user_email = user.val().email;
		var user_team = user.val().team_name;
		if (user_email){
			registered_emails.push(user_email);	
		}
		if (user_team) {
			registered_teams.push(user_team);
		}
	});
});


function submitData(){
	var submit = document.getElementById('submit');
	var team_name = document.getElementById('team_name');
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var count = document.getElementById("count");
	var contact = document.getElementById('contact');
	var college = document.getElementById('college');
	var input_list = document.querySelectorAll(".validate");

	var s_t_name = team_name.value;
	var s_name = name.value;
	var s_email = email.value;
	var s_count = count.value;
	var s_contact = contact.value;
	var s_college = college.value;

	var s_agree_terms = document.getElementById("terms-box");
	// console.log(s_count)

	var valid_submission = true;
	// checking if all submissions are valid
	for (var i = 0; i < input_list.length; i++){
		if (!input_list[i].classList.contains('valid')){
			input_list[i].classList.add('invalid');
			valid_submission = false;
		}
	}


	
	// checking for correct phone number
	if (s_contact.length < 8 || s_contact.length > 10){
		contact.classList.add('invalid');
		valid_submission = false;
	}

	if (s_count == 0){
		valid_submission = false;
	}


	// TODO: show the team name that they've registered with to repeated users
	if (valid_submission && s_agree_terms.checked) {
		if (registered_emails.includes(s_email)){
			// email id already exists
			Materialize.toast("You've already registered for the event.", 4000);
		} else if (registered_teams.includes(s_t_name)) {
			Materialize.toast("The team name has already been taken.", 4000);
		} else {
			var new_ref = database.ref('registration').push();
			new_ref.set({
				team_name: s_t_name,
				name: s_name,
				contact: s_contact,
				college: s_college,
				email: s_email,
				count: s_count
			});

			// reset the form
			var form = document.querySelector("#registration-form");
			form.reset();

			Materialize.toast('Registered Succeessfully!', 4000);	
		}
		

		// location.reload();

	}else{
		if (!valid_submission){
			Materialize.toast('Please enter the correct details', 4000);	
		} else if (!s_agree_terms.checked) {
			Materialize.toast("Please Agree to the Terms & Conditions", 4000);
		}
		
	}
}