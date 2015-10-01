userDetails  = new Mongo.Collection('userdetails');

var Schemas = {};

Schemas.userDetails = new SimpleSchema({

  phoneNumber: {
  	type: String,
  	label: "Email / Phone Number",
  }
});

userDetails.attachSchema(Schemas.userDetails); 

// Mailers  = new Mongo.Collection('mailers');




// ================= ivr =====================
ivrDetails  = new Mongo.Collection('ivrdetails');

var Schemas = {};

Schemas.ivrDetails = new SimpleSchema({

  phoneNumber: {
    type: String,
    label: "Phone Number",
  }
});

ivrDetails.attachSchema(Schemas.ivrDetails); 