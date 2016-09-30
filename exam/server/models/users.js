/*console.log('USER SERVER MODEL');*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: Date.now},
})

mongoose.model('User', userSchema);