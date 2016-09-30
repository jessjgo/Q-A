app.factory('questionsFactory', function($http) {
	var factory = {};
	// Post new question
	factory.post_question = function(userId, new_question, callback) {
		$http.post('/question', {userId: userId, new_question: new_question}).then(function(returned_data) {
			if(typeof(callback) == 'function') {
				callback(returned_data.data.question);
			}
		})
	}
	// Show all questions
	factory.show_all = function(callback) {
		$http.get('/question').then(function(returned_data) {
			callback(returned_data.data.questions);
		})
	}
	// Show one question
	factory.show_one = function(questionId, callback) {
		$http.get('/question/'+questionId).then(function(returned_data) {
			callback(returned_data.data.question);
		})
	}
	return factory;
})