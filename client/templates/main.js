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

return	$('#phonenumber').modal('show');
}

})