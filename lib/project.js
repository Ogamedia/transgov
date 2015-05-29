
Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({
	projectName:{
		type:String,
		label: "Historical place eg. Elmina Castle"
	},
	description: {
		type: String,
		label: "History eg. what you know about slavery",
		max: 5000,
		autoform: {
			rows: 4
		}
	},
	
	picture: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Picture of the place'
	},
	owner: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function(){
			return Meteor.userId();
		}
	}
}));
