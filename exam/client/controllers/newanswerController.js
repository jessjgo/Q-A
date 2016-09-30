app.controller('newanswerController', function($scope, questionsFactory, answersFactory, $routeParams, $location, $route, $cookies) {
	$scope.logout = function() {
		$cookies.remove('name');
		$cookies.remove('userId');
		$location.url('/index');
	}
	$scope.goHome = function() {
		$location.url('/')
	}	
	questionsFactory.show_one($routeParams.questionId, function(question) {
		$scope.question = question;
		console.log('question:', question);
	})
	// Post a question
	$scope.userId = $cookies.get('userId');
	var userId = $cookies.get('userId');
	$scope.postAnswer = function(userId, question_id, answer) {
		answersFactory.post_answer(userId, question_id, answer, function() {
			console.log('new_answer & desc:', $scope.new_answer);
			$scope.new_answer = "";
			$location.url('/');
		})
	}
})