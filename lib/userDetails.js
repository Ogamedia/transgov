userDetails  = new Mongo.Collection('userdetails');

var Schemas = {};

Schemas.userDetails = new SimpleSchema({

  phoneNumber: {
  	type: String,
  	label: "Phone Number",
  }
});

userDetails.attachSchema(Schemas.userDetails); 

Mailers  = new Mongo.Collection('mailers');
