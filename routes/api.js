//The API of your application

/**
 * This function is called when the app makes an http GET request to /api/getHere
 * @see app.js, line 25
 */
/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};