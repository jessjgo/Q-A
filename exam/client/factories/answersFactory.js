app.factory('answersFactory', function($http) {
	var factory = {};
	// Post new answer
	factory.post_answer = function(userId, question_id, new_answer, callback) {
		$http.post('/answer', {userId: userId, questionId: question_id, new_answer: new_answer}).then(function(returned_data) {
			console.log('Answer Data:', returned_data);
			if(typeof(callback) == 'function') {
				callback(returned_data.data.answer);
			}
		})
	}
	factory.like_count = function(answerId, callback) {
		$http.post('/answer/like', {answerId: answerId}).then(function(returned_data) {
			if(typeof(callback) == 'function') {
				callback(returned_data.data.answer);
			}
		})
	}
	return factory;
})