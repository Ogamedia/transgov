Template.projectDetails.events({

	'click .subscribe': function () {
	// 	swal({   title: "TransGov!",   
	// 		text: "Please input your number:",   
	// 		type: "input",   showCancelButton: true,   
	// 		closeOnConfirm: false,   animation: "slide-from-top", 
	// 		inputPlaceholder: "Write something" }, 
	// 		function(inputValue){   if (inputValue === false) return false;      
	// 			if (inputValue === "") {     
	// 				swal.showInputError("Phone Number eg. !"); 
	// 				return false   }      
	// 				swal("Nice!", "Please check your sms on your phone: " + inputValue, "success"); });

$('#phonenumber').modal('show');
}

})


Template.home.events({
	'click #search': function () {
		Router.go('/list-of-projects')
	}
});


Template.dashboard.events({
	'click #inform': function () {
		// pick all user details in the data base and count them
		var allUsers = userDetails.find()
		var counter = userDetails.find().count();

// ============sms related options =================== //
// the message sender name
var ourCredentials = "TransGov"
var content = "The KN Circle Interchange development project is currently 70% complete. Contractors: Queiroz Galvao. Estimated cost: $77m"


// run an if loop if there items in the data base
if (counter > 0) {
	for (var i = 0; i < counter; i++) {
		var userItem = allUsers.fetch()[i];
		console.log(userItem);

		// get the phonenumber
		var phoneNumber = userItem.phoneNumber;

		var smsOptions = {
			From: ourCredentials,
			phone: phoneNumber,
			contents: content
		};
		// call for sms message
		// Meteor.call('sendMessage', smsOptions);
// ============ivr related options =================== //
        var ivr_options = {
            phone_number: "0261096308"
        };
        Meteor.call('send_voice_message', ivr_options);
	};

};
alert("Project Subscribers have recieved message of project progress")
}

});