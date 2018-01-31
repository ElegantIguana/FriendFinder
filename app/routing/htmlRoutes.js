//Pull dependencies
var path = require('path');

//Export routes
module.exports = function(app) {
	//Home page html route
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	//Survey html route
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};