
$(()=> {
    $("select").material_select();
    

})

function countChanged() {
    let inputs = document.querySelectorAll(".extra_name");
    let curr_count = document.querySelector("#count").value;

    for ( i=0; i<inputs.length; i++ ) {
        if (i > curr_count-2) {
            inputs[i].style.display = "none";
        } else {
            inputs[i].style.display = "block";
        }
    }

    inputs = document.querySelectorAll(".extra_email");
    curr_count = document.querySelector("#count").value;

    for ( i=0; i<inputs.length; i++ ) {
        if (i > curr_count-2) {
            inputs[i].style.display = "none";
        } else {
            inputs[i].style.display = "block";
        }
    }
}

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
database.ref("checkin").on('value', (snapshot) => {
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
    var name_2 = document.getElementById('name_2');
    var name_3 = document.getElementById('name_3');
    var name_4 = document.getElementById('name_4');
    var name_5 = document.getElementById('name_5');

    var email_2 = document.getElementById('email_2');
    var email_3 = document.getElementById('email_3');
    var email_4 = document.getElementById('email_4');
    var email_5 = document.getElementById('email_5');
	var input_list = document.querySelectorAll(".validate:not(.extra)");

	var s_t_name = team_name.value;
	var s_name = name.value;
	var s_email = email.value;
	var s_count = count.value;
    var s_name_2 = name_2.value;
    var s_name_3 = name_3.value;
    var s_name_4 = name_4.value;
    var s_name_5 = name_5.value;

    var s_email_2 = email_2.value;
    var s_email_3 = email_3.value;
    var s_email_4 = email_4.value;
    var s_email_5 = email_5.value;

	// console.log(s_count)

	var valid_submission = true;
	// checking if all submissions are valid
	for (var i = 0; i < input_list.length; i++){
		if (!input_list[i].classList.contains('valid')){
			input_list[i].classList.add('invalid');
			valid_submission = false;
		}
    }

    let inputs = document.querySelectorAll(".extra_name--validate");
    let curr_count = document.querySelector("#count").value;

    for ( i=0; i<inputs.length; i++ ) {
        if (i <= curr_count-2) {
            if (!inputs[i].classList.contains('valid')) {
                inputs[i].classList.add('invalid');
                valid_submission = false;
            }
        }
    }

    inputs = document.querySelectorAll(".extra_email--validate");
    curr_count = document.querySelector("#count").value;

    for ( i=0; i<inputs.length; i++ ) {
        if (i <= curr_count-2) {
            if (!inputs[i].classList.contains('valid')) {
                inputs[i].classList.add('invalid');
                valid_submission = false;
            }
        }
    }
    


	if (s_count == 0){
		valid_submission = false;
	}


	// TODO: show the team name that they've registered with to repeated users
	if (valid_submission) {
		if (registered_emails.includes(s_email) || registered_teams.includes(s_t_name)){
			// email id already exists
			Materialize.toast("You've already registered for the event.", 4000);
		} else {
			var new_ref = database.ref('checkin').push();
			new_ref.set({
				team_name: s_t_name,
				name: s_name,
				email: s_email,
				count: s_count,
                name_2: s_name_2,
                name_3: s_name_3,
                name_4: s_name_4,
                name_5: s_name_5
			});

			// reset the form
			var form = document.querySelector("#checkin-form");
			form.reset();

			Materialize.toast('Successfully Checked In!!', 4000);
		}
		

		// location.reload();

	}else{
		if (!valid_submission){
			Materialize.toast('Please enter the correct details', 4000);	
		}
		
	}
}