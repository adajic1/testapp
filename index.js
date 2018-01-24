var mysql = require('mysql');
var express = require("express");
var bodyParser = require("body-parser");

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());

var con = mysql.createConnection({
  host     : 'sql11.freemysqlhosting.net',
  user     : 'sql11217492',
  password : 'PZkBft2yzM',
  database : 'sql11217492',
  port     : 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});