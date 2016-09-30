var app = angular.module('app', ['ngRoute', 'ngMessages', 'ngCookies']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl: 'partials/login.html'
		})
		.when('/', {
			templateUrl: 'partials/dashboard.html'
		})
		.when('/new_question', {
			templateUrl: 'partials/new_question.html'
		})
		.when('/question/:questionId', {
			templateUrl: 'partials/show_one.html'
		})
		.when('/question/:questionId/new_answer', {
			templateUrl: 'partials/new_answer.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})