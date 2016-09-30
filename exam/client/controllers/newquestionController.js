app.controller('newquestionController', function($scope, questionsFactory, $location, $route, $cookies) {
	
	$scope.logout = function() {
		$cookies.remove('name');
		$cookies.remove('userId');
		$location.url('/index');
	}
	$scope.goHome = function() {
		$location.url('/')
	}
	// Post a question
	var userId = $cookies.get('userId');
	$scope.postQuestion = function() {
		questionsFactory.post_question(userId, $scope.new_question, function() {
			$scope.new_question = "";
			$location.url('/');
		})
	}
})