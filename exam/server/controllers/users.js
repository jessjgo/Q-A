/*console.log('USERS SERVER CONTROLLER');*/

require('../config/mongoose');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController() {
	this.create = function(req, res) {
		console.log('Login:', req.body);
		var user = new User({
			name: req.body.name
		});
		user.save(function(err, new_user) {
			if(err) {
				console.log('ERROR on login in server controller', err);
			} else {
				res.json({placeholder: 'login', user: new_user})
			}
		})
	}
}
module.exports = new UsersController();