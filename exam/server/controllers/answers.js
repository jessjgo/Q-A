console.log('ANSWERS SERVER CONTROLLER');

require('../config/mongoose');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

function AnswersController() {
	this.answer = function(req, res) {
		var answer = new Answer({
			answer: req.body.new_answer.answer,
			description: req.body.new_answer.description,
			like_count: 0,
			_questionId: req.body.questionId,
			_userId: req.body.userId,
		})
		answer.save(function(err, answer) {
			if(err) {
				console.log("ERROR on answer in server controller", err);
			} else {
				Question.findOne({_id: req.body.questionId}, function(err, question) {
					console.log(err)
					question._answers.push(answer._id);
					question.save(function(err, data) {
						res.json({placeholder: 'saved answer', answer: answer})
					})
				})
			}
		})
	}
	// Show all answer
	this.showall = function(req, res) {
		Question.findOne({_id: req.body.questionId}).exec(function(err, answers) {
			res.json({placeholder: 'all_answer', answers: answers})
		})
	}
	// Like count
	this.likecount = function(req, res) {
		Answer.findOne({_id: req.body.answerId}).exec(function(err, answer) {
			/*answer.like_count = answer.like_count || 0;*/
			answer.like_count++;
			answer.save(function(err, data) {
				res.json({placeholder: 'Add count', answer: data})
			})
		})
	}

}
module.exports = new AnswersController();