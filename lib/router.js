Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loadingTemplate",
	notFoundTemplate: '404'
	// waitOn: function(){
	// 	return Meteor.subscribe('User')
	// }
});

Router.configure({
	layoutTemplate: "dashboardLayout",
	loadingTemplate: "loadingTemplate",
	notFoundTemplate: '404'
	// waitOn: function(){
	// 	return Meteor.subscribe('User')
	// }
});

//Router.route('/', function(){
//	this.render('home');
//},
//{
//	name: 'home'
//});
Router.map(function(){
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: "masterLayout"

	});
});
Router.map(function(){
	this.route('index', {
		path: '/index',
		template: 'index',
		layoutTemplate: "masterLayout"

	});
});
//Router.route('/index', function(){
//	this.render('index');
//},
//{
//	name: 'index'
//});
Router.map(function(){
	this.route('createProject', {
		path: '/create-project',
		template: 'createProject',
		layoutTemplate: "masterLayout"

	});
});
//Router.route('/create-project', function(){
//	this.render('createProject');
//},
//{
//	name: 'createProject'
//});

//Router.route('/list-of-projects', function(){
//	this.render('projectList');
//},
//{
//	name: 'projectList',
//	data: function() {
//		return{
//			projectlistings: Projects.find().fetch()
//		}
//	}
//});
Router.map(function(){
	this.route('projectList', {
		path: '/list-of-projects',
		template: 'projectList',
		layoutTemplate: "masterLayout",
		data: function() {
			return{
				projectlistings: Projects.find().fetch()
			}
		}

	});
});
Router.map(function(){
	this.route('projectDetails', {
		path: '/project-details',
		template: 'projectDetails',
		layoutTemplate: "masterLayout"

	});
});
//Router.route('/project-details', function(){
//	this.render('projectDetails');
//},
//{
//	name: 'projectDetails'
//});
Router.map(function(){
	this.route('signin', {
		path: '/signin',
		template: 'signin',
		layoutTemplate: "masterLayout"

	});
});
//Router.route('/signin', function(){
//	this.render('signin');
//},
//{
//	name: 'signin'
//});
//Router.route('/dashboard', function(){
//	this.render('dashboard');
//},
//{
//	name: 'dashboard'
//});

//Router.map(function(){
//	this.route('CompanyDashboard', {
//		path: '/dashboard',
//		template: 'CompanyDashboard',
//		layoutTemplate: "dashboardLayout"
//
//	});
//});

//Router.route('/my-dashboard', function() {
//		this.render("companyDashboard");
//	},
//	{
//		name:"companyDashboard"
//		//data: function(){
//			//return{
//				//companyinformation: Companies.find().fetch()
//			//}
//		//}
//	});
Router.map(function(){
	this.route('companyDashboard', {
		path: '/my-dashboard',
		//template: 'companyDashboard',
		layoutTemplate: "dashboardLayout"

	});
});
//Router.route('/my-dashboard', function(){
//	this.render('companyDashboard');
//},
//{
//	name: 'companyDashboard'
//});

Router.map(function(){
	this.route('ivr_form', {
		path: '/my-dashboard/ivr_form',
		template: 'ivr_form',
		layoutTemplate: "dashboardLayout"

	});
});
Router.map(function(){
	this.route('sms_messages', {
		path: '/my-dashboard/smsMessages',
		template: 'sms_messages',
		layoutTemplate: "dashboardLayout"

	});
});
