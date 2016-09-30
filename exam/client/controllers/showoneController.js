app.controller('showoneController', function($scope, questionsFactory, answersFactory, $routeParams, $location, $route, $cookies) {
	$scope.logout = function() {
		$cookies.remove('name');
		$cookies.remove('userId');
		$location.url('/index');
	}
	//Like count
	$scope.likeIncrement = function(answerId) {
		answersFactory.like_count(answerId, function() {
			showOne();
		})
	}
	// Show one question
	$scope.userId = $cookies.get('userId');
	var userId = $cookies.get('userId');
	showOne();
	function showOne() {
		questionsFactory.show_one($routeParams.questionId, function(question) {
			/*console.log('question', $routeParams.questionId)*/
			$scope.question = question;
			console.log('question:', question);
		})
	}
})