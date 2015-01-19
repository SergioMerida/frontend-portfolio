/*Send email with mandrill api*/
var apiKey = '2ZMRx5Wr9KOKm3hCKTfc4Q';
var m = new mandrill.Mandrill(apiKey);
function sendTheMail() {
	
	var name = $("#nameField").val();
	var company = $("#companyField").val();
	var email = $("#emailField").val();
	var messageString = $("#messageField").val();
	$("#nameField").val("");
	$("#companyField").val("");
	$("#emailField").val("");
	$("#messageField").val("");
	var messageBody = "Name: " + name + "\nCompany: " + company + "\nMessage:\n\n"+messageString;
	var params = {
		"message": {
			"from_email":email,
			"to":[{"email":"tabarinisergio@gmail.com"}],
			"subject": "New contact mail",
			"text": messageBody
		}
	};

	m.messages.send(params, function(res) {
		console.log(JSON.stringify(res));
	}, function(err) {
		console.log(JSON.stringify(err));
	});
}
