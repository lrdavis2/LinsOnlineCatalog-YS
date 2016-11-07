/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.get('/login', function(req, res){
  setTimeout(function(){
      res.redirect("/login.html");
  }, 2500);
});

app.get('/search', function(req, res){
  var i, a, b, c, max;
  
  max = 1000000000;
  
  var d = Date.now();
  
  for (i = 0; i < max; i++) {
      a = 1234 + 5678 + i;
      b = 1234 * 5678 + i;
      c = 1234 / 2 + i;
  }
  
  var r = Date.now() - d;
  //res.send("Item: " + r + " not found");
  res.redirect("/search.html");
});

app.get('/add_item', function(req, res){
  var item = "1";
  //res.send("Added item: " + item);
  res.redirect("/add_item.html");
});

app.get('/remove_item', function(req, res){
  var item = "1";
  //res.send("Removed item: " + item);
  res.redirect("/remove_item.html");
});

app.get('/buy', function(req, res){
  setTimeout(function(){
      res.redirect("/buyerr.html");
  }, 10000);
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
