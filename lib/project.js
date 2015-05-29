
Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({
	projectName:{
		type:String,
		label: "Name of Projct"
	},
	description: {
		type: String,
		label: "Project Description",
		max: 5000,
		autoform: {
			rows: 4
		}
	},
	startDate: {
		type: Date,
		autoform: {
			type: "bootstrap-datepicker"
		}
	},
	endDate: {
		type: Date,
		autoform: {
			type: "bootstrap-datepicker"
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
