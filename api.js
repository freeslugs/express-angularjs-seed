//The API of your application

/**
 * This function is called when the app makes an http GET request to /api/getHere
 * @see app.js, line 25
 */
exports.getFunction = function(req, res) {
	var object = {'name' : 'bob'}
	res.json(object);
}

