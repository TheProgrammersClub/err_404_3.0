
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = encodeURIComponent("mhssprogrammersclub@gmail.com");
const gmailPassword = encodeURIComponent("Programmers@Club@123@$$");
const mailTransport = nodemailer.createTransport(
`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

// Sends an email when data is changed in registrations
exports.sendEmailConfirmation = functions.database.ref('/registration').onWrite(event => {

	var all_registrations = event.data.val();
	var last_registration;
	for (last_registration in all_registrations);

	var reciever_email = all_registrations[last_registration].email;
	var reciever_name = all_registrations[last_registration].name;
	var team_name = all_registrations[last_registration].team_name;


	const mailOptions = {
		from: '"ERR_404 Team" <mhssprogrammersclub@gmail.com>',
		to: reciever_email
	};


	// Bad formatting coz its html ;)
	mailOptions.subject = 'Welcome Onboard!';
	mailOptions.html = "Hello "+reciever_name+",<br>\
Your team <b>"+team_name+"</b> has successfully registered for the ERR_404 Hackathon.<br>\
We're delighted to see your interest and look forward to your presence at the event.<br>\
We'll get in touch shortly regarding further details.<br>\
<br>\
Till then,<br>\
Continue solving problems and make the World a better place. ;)<br>\
<br>\
For any queries reach out to csi@mhssce.ac.in<br>\
\
";
	return mailTransport.sendMail(mailOptions).then(() => {
		console.log('New entry: Email sent to:'+reciever_email);
	}).catch(error => {
		console.error('There was an error while sending the email:', error);  
	});


});