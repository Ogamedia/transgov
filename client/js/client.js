
Template.home.events({
	'click #search': function () {
		Router.go('/list-of-projects')
	}
});




// pick all user details in the data base and count them
var allUsers = userDetails.find()
var counter = userDetails.find().count();

// ============sms related options =================== //
// the message sender name
var ourCredentials = "TransGov"
var content = "placeholder content must be  less than 150 characters"


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
		// Meteor.call('sendMessage', smsOptions);
	};

};





// call for sms message
