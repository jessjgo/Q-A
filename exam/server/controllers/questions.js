require('../config/mongoose');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

function QuestionsController() {
	this.question = function(req, res) {
		var question = new Question({
			question: req.body.new_question.question,
			description: req.body.new_question.description,
			_userId: req.body.userId,
		})
		question.save(function(err, question) {
			if(err) {
				console.log("ERROR on question in server controller", err);
			} else {
				res.json({placeholder: 'saved_question', question: question});
			}
		})
	}
	// Show one question
	this.showall = function(req, res) {
		Question.find({}).populate('_userId').exec(function(err, questions) {
			if(err) {
				console.log("error on showall");
			} else {
				res.json({placeholder: 'showall', questions: questions});

			}

		})
	}
	// Show one questions
	this.showone = function(req, res) {
		Question.findOne({_id:req.params.questionId})
			.populate('_userId')
			.populate({
				path: '_userId _answers',
				populate: {
					path: '_userId'
			}
		})
		.exec(function(err, question) {
			if(err) {
				res.json({placeholder: 'Error', message: "this is an error"})
			} else {
				res.json({placeholder: 'showone', question: question});
			}
		})
	}
}
module.exports = new QuestionsController();