var mysql = require('mysql');
let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);

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
});

var port = process.env.PORT || 8000

server.listen(port, function() {
    console.log("App is running on port " + port);
});