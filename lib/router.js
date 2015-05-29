Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loadingTemplate",
	notFoundTemplate: '404'
	// waitOn: function(){
	// 	return Meteor.subscribe('User')
	// }
	
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});
Router.route('/index', function(){
	this.render('index');
},
{
	name: 'index'
});
Router.route('/create-project', function(){
	this.render('createProject');
},
{
	name: 'createProject'
});
Router.route('/list-of-projects', function(){
	this.render('projectList');
},
{
	name: 'projectList',
	data: function() {
		return{
			projectlistings: Projects.find().fetch()
		}
	}
});
