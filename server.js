//Declare dependencies
var express = require("express");
var body-parser = require("body-parser");
var path = require("path");

//Configure express
var app = express();
var PORT = process.env.PORT;

//Make public directroy visible to access CSS
app.use(express.static(path.join(__dirname, './app/public')));

//Middleware, for parsing requests
app.use(body-parser.json());
app.use(body-parser.urlencoded({ extended: true}));
app.use(body-parser.text());

//App routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//Hey, listen!
app.listen(PORT, function() {
	console.log('Friend Finder app is listening on PORT: ' + PORT);
});