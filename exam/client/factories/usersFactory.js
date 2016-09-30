console.log('USERS Factory');

app.factory('usersFactory', function($http) {
	var factory = {};
	factory.create = function(new_user, callback) {
		$http.post('/login', new_user).then(function(returned_data) {
			console.log('login data:', returned_data);
			if(typeof(callback) == 'function') {
				callback(returned_data.data.user);
			}
		})
	}
	return factory;
})