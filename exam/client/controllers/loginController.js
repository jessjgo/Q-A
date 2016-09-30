console.log('loginController.js');

app.controller('loginController', function($scope, usersFactory, $location, $route, $cookies) {
	$scope.userLogin = function(returned_data) {
		usersFactory.create($scope.login, function(user) {
			$scope.login = {};
			$cookies.put('name', user.name);
			$cookies.put('userId', user._id);
			$location.url('/');
		})
	}
})