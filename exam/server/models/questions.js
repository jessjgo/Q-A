var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
	question: String,
	description: String,
	created_at: {type: Date, default: Date.now},
	_userId: {type: Schema.Types.ObjectId, ref: 'User'},
	_answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

mongoose.model('Question', questionSchema);