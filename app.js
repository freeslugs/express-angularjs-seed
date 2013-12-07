//The server or backbone of your app. 

//Require any node libraries here
var express = require('express'),
api = require('./api');

var app = express();

// Serve static files
app.use('/', express.static(__dirname + "/"));

//Call the API functions here. Use REST http requests from angular
app.get('/api/getHere', api.getFunction);

//In your browser, go to http://localhost:3000
app.listen(3000);
console.log("Listening on port 3000");