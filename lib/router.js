Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loadingTemplate",
	notFoundTemplate: '404'
});

Router.configure({
	layoutTemplate: "dashboardLayout",
	loadingTemplate: "loadingTemplate",
	notFoundTemplate: '404'
});


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

Router.map(function(){
	this.route('createProject', {
		path: '/create-project',
		template: 'createProject',
		layoutTemplate: "masterLayout"

	});
});

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

Router.map(function(){
	this.route('signin', {
		path: '/signin',
		template: 'signin',
		layoutTemplate: "masterLayout"

	});
});


Router.map(function(){
    this.route('dashboard', {
        path: '/dashboard',
        template: 'dashboard',
        layoutTemplate: "masterLayout"

    });
});


Router.map(function(){
	this.route('companyDashboard', {
		path: '/my-dashboard',
		//template: 'companyDashboard',
		layoutTemplate: "dashboardLayout"

	});
});


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
