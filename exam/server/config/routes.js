var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');

module.exports = function(app) {
	app.post('/login', users.create);
	app.post('/question', questions.question);
	app.get('/question', questions.showall);
	app.get('/question/:questionId', questions.showone);
	app.post('/answer', answers.answer);
	app.get('/answer', answers.showall);
	app.post('/answer/like', answers.likecount);
}