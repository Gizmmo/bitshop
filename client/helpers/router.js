//Set Global Templates
Router.configure({
	layoutTemplate: 'layout',
	
	yieldTemplates: {
		'footer' : {to: 'footer'},
		'navbar' : {to: 'navbar'}
	},

	notFoundTemplate: "notFound"
});


//Map Individual URLS
Router.map(function () {


	this.route('shop', {
		path: '/shop', // match the root path
	});

	this.route('jobs', {
		path: '/jobs', // match the root path
	});

	this.route('home', {
		path: '/', // match the root path
	});


});