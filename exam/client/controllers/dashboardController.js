console.log('dashboardController');

app.controller('dashboardController', function($scope, questionsFactory, $location, $route, $cookies) {
	var name = $cookies.get('name');
	var userId = $cookies.get('userId');
	if(name) {
		$scope.name = name;
	} else {
		$location.url('/index');
	}
	// Logout
	$scope.logout = function() {
		$cookies.remove('name');
		$cookies.remove('userId');
		$location.url('/index');
	}
	// Show all questions
	var showAll = function() {
		questionsFactory.show_all(function(questions) {
			console.log('questions:', questions);
			$scope.questions = questions;
		})
	}
	showAll();
})