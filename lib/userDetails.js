userDetails  = new Mongo.Collection('userdetails');

var Schemas = {};

Schemas.userDetails = new SimpleSchema({

  phoneNumber: {
  	type: String,
  	label: "Phone Number",
  },

  region: {
    type: String,
    label: "Region",
    allowedValues: ["Ashanti", "Brong Ahafo", "Central", "Eastern", "Western", "Northern", "Upper West", "Upper East", "Volta", "Greater Accra"]
  }

  // district: {
  // 	type: String,
  // 	label: "district",
  //   optional: true,
  //   omit: true,
  //   allowedValues: ["Accra Metropolitan", "Osu", "Outside Accra", "Same as Pick-up"]
  // }
});

userDetails.attachSchema(Schemas.userDetails); 

Mailers  = new Mongo.Collection('mailers');
