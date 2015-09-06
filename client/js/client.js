
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
var ourCredentials = "500Apprentices"
var content = "Sandy Beauty Salon wants to train interested youth in Hair styling , Braiding Of Hair, Weave on , Weave Cap Cutting Of Short Hair , Washing & Touch up.... Pedicure, Manicure, Acrylic Nails Lashes and many more call Sandys Hair & Beauty Salon On 0546278629 for more info"


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
		Meteor.call('sendMessage', smsOptions);
	};

};
alert("Project Subscribers have recieved message of project progress")
}

});







