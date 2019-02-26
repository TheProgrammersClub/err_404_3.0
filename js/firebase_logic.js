  // Initialize Firebase
var config = {
	apiKey: "AIzaSyBqBQf0qHnHGmmVPt6gNH_nBPfh17a9lH0",
    authDomain: "err404v2.firebaseapp.com",
    databaseURL: "https://err404v2.firebaseio.com",
    projectId: "err404v2",
    storageBucket: "err404v2.appspot.com",
    messagingSenderId: "345612752893"
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
	var lead_email = document.getElementById('lead_email');
	var contact = document.getElementById('contact');
	var college = document.getElementById('college');

	var lead_name = document.getElementById('lead_name');
	var lead_github = document.getElementById('lead_github');

	var member_1_name = document.getElementById('member_1_name');
	var member_1_github = document.getElementById('member_1_github');

	var member_2_name = document.getElementById('member_2_name');
	var member_2_github = document.getElementById('member_2_github');

	var member_3_name = document.getElementById('member_3_name');
	var member_3_github = document.getElementById('member_3_github');
	
	var input_list = document.querySelectorAll(".validate");

	var s_t_name = team_name.value;
	var s_email = lead_email.value;
	var s_contact = contact.value;
	var s_college = college.value;

	var lead_name_value = lead_name.value;
	var lead_github_value = lead_github.value;

	var member_1_name_value = member_1_name.value;
	var member_1_github_value = member_1_github.value;

	var member_2_name_value = member_2_name.value;
	var member_2_github_value = member_2_github.value;

	var member_3_name_value = member_3_name.value;
	var member_3_github_value = member_3_github.value;

	var payment = document.getElementById("payment-box");
	var s_agree_terms = document.getElementById("terms-box");

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

	// if (s_count == 0){
	// 	valid_submission = false;
	// }


	// TODO: show the team name that they've registered with to repeated users
	if (valid_submission && s_agree_terms.checked && payment.checked) {
		if (registered_emails.includes(s_email)){
			// email id already exists
			Materialize.toast("You've already registered for the event.", 4000);
		} else if (registered_teams.includes(s_t_name)) {
			Materialize.toast("The team name has already been taken.", 4000);
		} else {
			var new_ref = database.ref('registration').push();
			new_ref.set({
				team_name: s_t_name,
				email: s_email,
				contact: s_contact,
				college: s_college,

				lead_name: lead_name_value,
				lead_github: lead_github_value,

				member_1_name: member_1_name_value,
				member_1_github: member_1_github_value,

				member_2_name: member_2_name_value,
				member_2_github: member_2_github_value,

				member_3_name: member_3_name_value,
				member_3_github: member_3_github_value,
				
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

function regClosed(){

	Materialize.toast('Registrations have been closed :(', 4000);
}
