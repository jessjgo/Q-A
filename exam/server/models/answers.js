var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new mongoose.Schema({
	answer: String,
	description: String,
	like_count: Number,
	created_at: {type: Date, default: Date.now},
	_questionId: {type: Schema.Types.ObjectId, ref: 'Question'},
	_userId: {type: Schema.Types.ObjectId, ref: 'User'},
})

mongoose.model('Answer', answerSchema);